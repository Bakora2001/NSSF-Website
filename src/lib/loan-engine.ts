import { LOAN_PRODUCTS, type LoanProduct, type Payslip, type Member } from "./mock-data";

export type Recommendation = {
  product: LoanProduct;
  maxAmount: number;
  monthlyRepayment: number;
  eligibilityScore: number; // 0-100
  qualifies: boolean;
  reasons: string[];
  badge?: "Recommended" | "Fastest" | "Lowest Stress" | "Highest Ceiling";
};

const KES = (n: number) => Math.round(n / 100) * 100;

export function evaluateLoans(payslip: Payslip, member: Member): Recommendation[] {
  // Net disposable = net salary - existing loan deductions, capped at 2/3 rule
  const disposable = payslip.netSalary - payslip.existingLoanDeductions;
  const oneThird = payslip.grossSalary / 3;
  const safeMonthly = Math.max(0, Math.min(disposable * 0.6, oneThird - payslip.existingLoanDeductions));

  const recs: Recommendation[] = LOAN_PRODUCTS.map((product) => {
    // amortized monthly payment approx using flat interest model
    const months = product.repaymentMonths;
    const rate = product.rate / 100;
    const ceilingBySalary = payslip.netSalary * product.maxMultiplier;
    const ceilingByShares = member.shares * 3; // 3x shares rule
    let maxByAffordability = (safeMonthly * months) / (1 + rate * months);
    if (maxByAffordability < 0) maxByAffordability = 0;
    const maxAmount = KES(Math.max(0, Math.min(ceilingBySalary, ceilingByShares, maxByAffordability)));
    const monthlyRepayment = Math.round((maxAmount * (1 + rate * months)) / Math.max(1, months));

    const reasons: string[] = [];
    if (member.verified) reasons.push("Verified member in good standing");
    if (member.totalSavings > 100000) reasons.push(`Strong savings history (KES ${member.totalSavings.toLocaleString()})`);
    if (payslip.existingLoanDeductions < payslip.netSalary * 0.3) reasons.push("Healthy debt-to-income ratio");
    if (product.requiresGuarantors) reasons.push("Requires guarantors — your shares partially secure this");
    if (product.tatDays <= 1) reasons.push(`Fast approval: ${product.tatDays} day turnaround`);

    const ratio = safeMonthly > 0 ? monthlyRepayment / safeMonthly : 1;
    const ratioScore = Math.max(0, 100 - ratio * 100);
    const tenureScore = Math.min(100, 60 + (product.repaymentMonths / 108) * 40);
    const eligibilityScore = Math.round(Math.min(100, ratioScore * 0.6 + tenureScore * 0.3 + (member.verified ? 10 : 0)));

    const qualifies = maxAmount >= 10000 && eligibilityScore >= 55;
    return { product, maxAmount, monthlyRepayment, eligibilityScore, qualifies, reasons };
  });

  const sorted = recs.sort((a, b) => b.eligibilityScore - a.eligibilityScore);
  if (sorted[0]) sorted[0].badge = "Recommended";
  const fastest = [...sorted].filter(r => r.qualifies).sort((a, b) => a.product.tatDays - b.product.tatDays)[0];
  if (fastest && fastest !== sorted[0]) fastest.badge = "Fastest";
  const lowest = [...sorted].filter(r => r.qualifies).sort((a, b) => a.monthlyRepayment - b.monthlyRepayment)[0];
  if (lowest && !lowest.badge) lowest.badge = "Lowest Stress";
  const highest = [...sorted].filter(r => r.qualifies).sort((a, b) => b.maxAmount - a.maxAmount)[0];
  if (highest && !highest.badge) highest.badge = "Highest Ceiling";
  return sorted;
}

export function chatAnswer(question: string, payslip: Payslip, member: Member): string {
  const recs = evaluateLoans(payslip, member).filter(r => r.qualifies);
  const q = question.toLowerCase();
  if (q.includes("which loan") || q.includes("qualify")) {
    const top = recs[0];
    if (!top) return "Based on your current profile you don't strongly qualify for our standard products. Increase your monthly contributions or clear existing deductions to unlock more options.";
    return `You qualify for ${top.product.name} up to KES ${top.maxAmount.toLocaleString()} over ${top.product.repaymentMonths} months. Estimated monthly repayment: KES ${top.monthlyRepayment.toLocaleString()}. Reason: ${top.reasons[0]}.`;
  }
  if (q.includes("how much") || q.includes("borrow")) {
    const ceiling = Math.max(...recs.map(r => r.maxAmount), 0);
    return `Your maximum borrowing capacity across all products is approximately KES ${ceiling.toLocaleString()}, based on your net salary of KES ${payslip.netSalary.toLocaleString()} and current deductions.`;
  }
  if (q.includes("rejected") || q.includes("why")) {
    return "Most rejections come from high existing loan deductions, insufficient shares, or missing guarantors. Your current debt-to-income looks healthy — focus on guarantor sign-off if applying for BOSA loans.";
  }
  if (q.includes("document")) {
    return "Standard documents: latest payslip, copy of National ID (both sides), passport photo, and signature specimen. For school fees loans add fee structure. Guaranteed loans need guarantor consent forms.";
  }
  return "I can help with loan eligibility, borrowing limits, rejection reasons and required documents. Try: \"Which loan do I qualify for?\"";
}
