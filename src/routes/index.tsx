import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { LoanProducts } from "@/components/home/LoanProducts";
import { TrustBar } from "@/components/home/TrustBar";
import { ChatAssistant } from "@/components/ai/ChatAssistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NSSF SACCO Limited — Empowering Your Financial Future" },
      { name: "description", content: "NSSF SACCO Limited — modern cooperative banking with AI loan qualification, mobile banking, VISA SaccoLink and Microsoft Dynamics 365 integration." },
      { property: "og:title", content: "NSSF SACCO — Secure · Grow · Thrive" },
      { property: "og:description", content: "Member-focused SACCO with AI-powered loan recommendations and digital banking." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PublicLayout>
      <Hero />
      <Services />
      <LoanProducts />
      <TrustBar />
      <ChatAssistant />
    </PublicLayout>
  );
}
