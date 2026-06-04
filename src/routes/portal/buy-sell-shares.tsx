import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { useState, useEffect, useRef } from "react";
import {
  TrendingUp, TrendingDown, Search, Filter, Heart, Eye, MessageCircle,
  X, Send, CheckCircle, ShieldCheck, Star, ArrowUpRight, Bell, Plus,
  ChevronLeft, ChevronRight, Sparkles, Award, BarChart2, Info, 
  Phone, CreditCard, CheckSquare, Tag, Users, Clock, AlertCircle,
  HelpCircle, Activity
} from "lucide-react";
import { MOCK_MEMBER } from "@/lib/mock-data";

export const Route = createFileRoute("/portal/buy-sell-shares")({
  head: () => ({ meta: [{ title: "Buy / Sell Shares — NSSF SACCO Portal" }] }),
  component: Page,
});

// ─── Types ───────────────────────────────────────────────────────────────────
interface ShareListing {
  id: string;
  sellerName: string;
  memberNo: string;
  category: "A" | "B" | "C";
  shares: number;
  pricePerShare: number;
  totalAmount: number;
  isVerified: boolean;
  mode: "bid" | "direct";
  minBid?: number;
  bidsCount: number;
  watchlisted: boolean;
  postedAt: string;
  description?: string;
  avatar: string;
}

interface ChatMessage {
  id: string;
  sender: "me" | "them";
  text: string;
  time: string;
}

interface BidEntry {
  listingId: string;
  amount: number;
  status: "pending" | "accepted" | "rejected";
  time: string;
}

// ─── Mock Data ──────────────────────────────────────────────────────────────
const MOCK_LISTINGS: ShareListing[] = [
  { id: "L001", sellerName: "Mary Wanjiku", memberNo: "NSSF/199192", category: "B", shares: 500, pricePerShare: 120, totalAmount: 60000, isVerified: true, mode: "bid", minBid: 115, bidsCount: 4, watchlisted: false, postedAt: "2h ago", description: "Looking to offload some shares. Open to reasonable bids.", avatar: "MW" },
  { id: "L002", sellerName: "David Kamau", memberNo: "NSSF/456789", category: "A", shares: 1000, pricePerShare: 115, totalAmount: 115000, isVerified: true, mode: "direct", bidsCount: 0, watchlisted: false, postedAt: "5h ago", description: "First come first serve at KES 115/share.", avatar: "DK" },
  { id: "L003", sellerName: "Grace Njeri", memberNo: "NSSF/345678", category: "B", shares: 750, pricePerShare: 110, totalAmount: 82500, isVerified: true, mode: "bid", minBid: 105, bidsCount: 2, watchlisted: true, postedAt: "1d ago", avatar: "GN" },
  { id: "L004", sellerName: "Peter Ochieng", memberNo: "NSSF/234567", category: "C", shares: 2000, pricePerShare: 125, totalAmount: 250000, isVerified: true, mode: "bid", minBid: 120, bidsCount: 7, watchlisted: false, postedAt: "1d ago", description: "Premium Category C shares, excellent investment.", avatar: "PO" },
  { id: "L005", sellerName: "Fatuma Hassan", memberNo: "NSSF/876543", category: "A", shares: 300, pricePerShare: 118, totalAmount: 35400, isVerified: true, mode: "direct", bidsCount: 0, watchlisted: false, postedAt: "3d ago", avatar: "FH" },
  { id: "L006", sellerName: "James Kariuki", memberNo: "NSSF/112233", category: "B", shares: 1200, pricePerShare: 122, totalAmount: 146400, isVerified: true, mode: "bid", minBid: 118, bidsCount: 3, watchlisted: false, postedAt: "2d ago", avatar: "JK" },
];

const MARKET_PRICES = [112, 114, 113, 116, 115, 118, 117, 119, 118, 120, 119, 118];

// Price mini chart component
function MiniChart({ data }: { data: number[] }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const w = 120, h = 40;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-10">
      <polyline fill="none" stroke="#c9a227" strokeWidth="2" points={pts.join(" ")} />
      <circle cx={pts[pts.length - 1].split(",")[0]} cy={pts[pts.length - 1].split(",")[1]} r="3" fill="#c9a227" />
    </svg>
  );
}

// Avatar component
function MemberAvatar({ initials, size = "md" }: { initials: string; size?: "sm" | "md" | "lg" }) {
  const sizes = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };
  const colors = ["bg-emerald-700", "bg-blue-700", "bg-purple-700", "bg-amber-700", "bg-rose-700"];
  const colorIdx = initials.charCodeAt(0) % colors.length;
  return (
    <div className={`${sizes[size]} ${colors[colorIdx]} rounded-full flex items-center justify-center font-bold text-white shrink-0`}>
      {initials}
    </div>
  );
}

function Page() {
  const [activeTab, setActiveTab] = useState<"available" | "my-listings" | "my-bids" | "watchlist">("available");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [listings, setListings] = useState<ShareListing[]>(MOCK_LISTINGS);
  const [watchlisted, setWatchlisted] = useState<Set<string>>(new Set(["L003"]));
  const [chatOpen, setChatOpen] = useState(false);
  const [chatTarget, setChatTarget] = useState<ShareListing | null>(null);
  const [myBids, setMyBids] = useState<BidEntry[]>([
    { listingId: "L001", amount: 117, status: "pending", time: "1h ago" },
    { listingId: "L004", amount: 122, status: "accepted", time: "2d ago" },
  ]);
  const [bidModal, setBidModal] = useState<{ listing: ShareListing | null; open: boolean }>({ listing: null, open: false });
  const [bidAmount, setBidAmount] = useState("");
  const [buyModal, setBuyModal] = useState<{ listing: ShareListing | null; open: boolean }>({ listing: null, open: false });
  const [stkModal, setStkModal] = useState(false);
  const [stkPhone, setStkPhone] = useState("+254 712 345 678");
  const [stkStage, setStkStage] = useState<"input" | "processing" | "success">("input");
  const [sellModal, setSellModal] = useState(false);
  const [sellForm, setSellForm] = useState({ shares: "", pricePerShare: "", mode: "bid", minBid: "", description: "" });
  const [myListings, setMyListings] = useState<ShareListing[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  // Chat messages backed by localStorage
  const getChatKey = (id: string) => `nssf_chat_${MOCK_MEMBER.memberNo}_${id}`;
  const [chatMessages, setChatMessages] = useState<Record<string, ChatMessage[]>>({});
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatTarget) {
      const key = getChatKey(chatTarget.id);
      const stored = localStorage.getItem(key);
      if (stored) {
        setChatMessages(prev => ({ ...prev, [chatTarget.id]: JSON.parse(stored) }));
      } else {
        const initial: ChatMessage[] = [
          { id: "0", sender: "them", text: `Hi! I'm ${chatTarget.sellerName}. Feel free to ask me about my shares listed at KES ${chatTarget.pricePerShare.toLocaleString()}/share.`, time: chatTarget.postedAt }
        ];
        setChatMessages(prev => ({ ...prev, [chatTarget.id]: initial }));
        localStorage.setItem(key, JSON.stringify(initial));
      }
    }
  }, [chatTarget]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatTarget]);

  const sendMessage = () => {
    if (!newMessage.trim() || !chatTarget) return;
    const msg: ChatMessage = {
      id: Date.now().toString(),
      sender: "me",
      text: newMessage.trim(),
      time: "Just now"
    };
    const updated = [...(chatMessages[chatTarget.id] || []), msg];
    setChatMessages(prev => ({ ...prev, [chatTarget.id]: updated }));
    localStorage.setItem(getChatKey(chatTarget.id), JSON.stringify(updated));
    setNewMessage("");
    // Simulate reply
    setTimeout(() => {
      const reply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "them",
        text: `Thanks for reaching out! ${newMessage.toLowerCase().includes("price") ? "I'm flexible on the price — make me an offer!" : "I'll get back to you shortly regarding my share listing."}`,
        time: "Just now"
      };
      const withReply = [...updated, reply];
      setChatMessages(prev => ({ ...prev, [chatTarget.id]: withReply }));
      localStorage.setItem(getChatKey(chatTarget.id), JSON.stringify(withReply));
    }, 1200);
  };

  const toggleWatchlist = (id: string) => {
    setWatchlisted(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const placeBid = () => {
    if (!bidModal.listing || !bidAmount) return;
    const entry: BidEntry = { listingId: bidModal.listing.id, amount: Number(bidAmount), status: "pending", time: "Just now" };
    setMyBids(prev => [entry, ...prev]);
    setBidModal({ listing: null, open: false });
    setBidAmount("");
  };

  const initiateSTK = () => {
    setStkStage("processing");
    setTimeout(() => setStkStage("success"), 2500);
  };

  const handleSell = () => {
    if (!sellForm.shares || !sellForm.pricePerShare) return;
    const newListing: ShareListing = {
      id: `MY${Date.now()}`,
      sellerName: MOCK_MEMBER.name,
      memberNo: MOCK_MEMBER.memberNo,
      category: MOCK_MEMBER.category,
      shares: Number(sellForm.shares),
      pricePerShare: Number(sellForm.pricePerShare),
      totalAmount: Number(sellForm.shares) * Number(sellForm.pricePerShare),
      isVerified: true,
      mode: sellForm.mode as "bid" | "direct",
      minBid: sellForm.mode === "bid" ? Number(sellForm.minBid) : undefined,
      bidsCount: 0,
      watchlisted: false,
      postedAt: "Just now",
      description: sellForm.description,
      avatar: MOCK_MEMBER.name.split(" ").map(n => n[0]).join("").slice(0, 2),
    };
    setMyListings(prev => [newListing, ...prev]);
    setSellModal(false);
    setSellForm({ shares: "", pricePerShare: "", mode: "bid", minBid: "", description: "" });
  };

  const filteredListings = listings.filter(l => {
    const matchSearch = l.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.memberNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = categoryFilter === "all" || l.category === categoryFilter;
    return matchSearch && matchCat;
  });

  const pagedListings = filteredListings.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

  const currentPrice = MARKET_PRICES[MARKET_PRICES.length - 1];
  const prevPrice = MARKET_PRICES[MARKET_PRICES.length - 2];
  const priceChange = ((currentPrice - prevPrice) / prevPrice * 100).toFixed(2);
  const isUp = currentPrice >= prevPrice;

  return (
    <PortalLayout>
      {/* Page Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold flex items-center gap-3">
            <TrendingUp className="h-7 w-7 text-primary" />
            Buy / Sell Shares
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Trade shares securely with other members in the NSSF SACCO community.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setSellModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary text-sm font-semibold text-foreground transition-all hover:shadow-md"
          >
            <Tag className="h-4 w-4" /> Sell My Shares
          </button>
          <button
            onClick={() => setActiveTab("available")}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-bold transition-all hover:bg-primary/90 hover:shadow-glow"
          >
            <Plus className="h-4 w-4" /> Buy Shares
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "My Share Balance", value: MOCK_MEMBER.shares.toLocaleString(), sub: "Total Shares" },
          { label: "Available to Sell", value: Math.floor(MOCK_MEMBER.shares * 0.3).toLocaleString(), sub: "Shares" },
          { label: "Total Investments", value: `KES ${MOCK_MEMBER.totalSavings.toLocaleString()}`, sub: "Value" },
          { label: "Total Earnings", value: "KES 128,400", sub: "This Year" },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl bg-card border border-border p-4 shadow-card">
            <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
            <div className="text-xl font-extrabold font-display text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        {/* Left Column — Main Content */}
        <div className="space-y-5">
          {/* Tabs */}
          <div className="flex rounded-xl bg-muted/40 border border-border p-1 gap-1 overflow-x-auto">
            {[
              { key: "available", label: "Available Shares", count: listings.length },
              { key: "my-listings", label: "My Listings", count: myListings.length },
              { key: "my-bids", label: "My Bids", count: myBids.length },
              { key: "watchlist", label: "Watchlist", count: watchlisted.size },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex-1 min-w-max flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? "bg-card shadow text-foreground border border-border"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {tab.count > 0 && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.key ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>{tab.count}</span>
                )}
              </button>
            ))}
          </div>

          {/* Filters (Available Shares tab) */}
          {activeTab === "available" && (
            <div className="flex flex-wrap gap-3">
              <div className="flex-1 min-w-[200px] relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search by member name or no..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={e => setCategoryFilter(e.target.value)}
                className="px-3 py-2 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="all">All Share Categories</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
                <option value="C">Category C</option>
              </select>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="newest">Newest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="shares-desc">Most Shares</option>
              </select>
              <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card text-sm hover:border-primary transition-colors">
                <Filter className="h-4 w-4" /> Filters
              </button>
            </div>
          )}

          {/* Available Shares Tab */}
          {activeTab === "available" && (
            <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
              {/* Desktop Table View */}
              <div className="hidden md:block">
                {/* Table Header */}
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-5 py-3 bg-muted/30 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  <div>Seller Information</div>
                  <div>Share Details</div>
                  <div>Price per Share</div>
                  <div>Total Amount</div>
                  <div>Actions</div>
                </div>
                {pagedListings.map(listing => (
                  <div key={listing.id} className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center px-5 py-4 border-b border-border/50 hover:bg-muted/20 transition-colors group">
                    {/* Seller Info */}
                    <div className="flex items-center gap-3 min-w-0">
                      <MemberAvatar initials={listing.avatar} size="md" />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-semibold text-sm truncate">{listing.sellerName}</span>
                          {listing.isVerified && (
                            <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 shrink-0">
                              <ShieldCheck className="h-2.5 w-2.5" /> Verified
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">{listing.memberNo}</div>
                        <div className={`text-[10px] mt-0.5 font-medium ${listing.mode === "bid" ? "text-amber-600" : "text-blue-600"}`}>
                          {listing.mode === "bid" ? `🔨 Open to Bids (min KES ${listing.minBid})` : "⚡ Direct Buy"}
                        </div>
                      </div>
                    </div>
                    {/* Share Details */}
                    <div>
                      <div className="font-bold text-sm">{listing.shares.toLocaleString()} Shares</div>
                      <div className="text-xs text-muted-foreground">Category {listing.category}</div>
                      {listing.bidsCount > 0 && (
                        <div className="text-[10px] text-amber-600 font-medium">{listing.bidsCount} bids</div>
                      )}
                    </div>
                    {/* Price */}
                    <div>
                      <div className="font-bold text-sm text-primary">KES {listing.pricePerShare.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Per Share</div>
                    </div>
                    {/* Total */}
                    <div>
                      <div className="font-bold text-sm">KES {listing.totalAmount.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{listing.postedAt}</div>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => { setChatTarget(listing); setChatOpen(true); }}
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-border hover:border-primary text-xs font-semibold transition-colors"
                        title="View Details & Chat"
                      >
                        <Eye className="h-3 w-3" /> Details
                      </button>
                      {listing.mode === "bid" ? (
                        <button
                          onClick={() => { setBidModal({ listing, open: true }); setBidAmount(String(listing.minBid || listing.pricePerShare)); }}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition-colors"
                        >
                          Place Bid
                        </button>
                      ) : (
                        <button
                          onClick={() => setBuyModal({ listing, open: true })}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors"
                        >
                          Buy Now
                        </button>
                      )}
                      <button
                        onClick={() => toggleWatchlist(listing.id)}
                        className={`p-1.5 rounded-lg transition-colors ${watchlisted.has(listing.id) ? "text-rose-500 bg-rose-50 dark:bg-rose-950/30" : "text-muted-foreground hover:text-rose-500"}`}
                      >
                        <Heart className={`h-3.5 w-3.5 ${watchlisted.has(listing.id) ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Card View */}
              <div className="block md:hidden divide-y divide-border/50">
                {pagedListings.map(listing => (
                  <div key={listing.id} className="p-4 space-y-3.5">
                    {/* Header: Seller, Avatar & Verified */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <MemberAvatar initials={listing.avatar} size="sm" />
                        <div className="min-w-0">
                          <div className="font-semibold text-sm truncate text-foreground">{listing.sellerName}</div>
                          <div className="text-[10px] text-muted-foreground">{listing.memberNo}</div>
                        </div>
                      </div>
                      {listing.isVerified && (
                        <span className="flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-900/40">
                          <ShieldCheck className="h-2.5 w-2.5" /> Verified
                        </span>
                      )}
                    </div>

                    {/* Listing Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 bg-muted/20 p-2.5 rounded-xl border border-border/40 text-center">
                      <div>
                        <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Shares</div>
                        <div className="text-xs font-bold text-foreground mt-0.5">{listing.shares.toLocaleString()}</div>
                        <div className="text-[9px] text-muted-foreground mt-0.5">Cat {listing.category}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Price/Share</div>
                        <div className="text-xs font-bold text-primary mt-0.5">KES {listing.pricePerShare}</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-wider">Total Value</div>
                        <div className="text-xs font-extrabold text-foreground mt-0.5">KES {listing.totalAmount.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Info Mode & Posted At */}
                    <div className="flex justify-between items-center text-[11px]">
                      <span className={`font-semibold ${listing.mode === "bid" ? "text-amber-600" : "text-blue-600"}`}>
                        {listing.mode === "bid" ? `🔨 Bidding (Min: KES ${listing.minBid})` : "⚡ Direct Purchase"}
                      </span>
                      <span className="text-muted-foreground">{listing.postedAt}</span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => { setChatTarget(listing); setChatOpen(true); }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border border-border hover:border-primary text-xs font-bold transition-all text-foreground bg-card"
                      >
                        <Eye className="h-3.5 w-3.5" /> Details
                      </button>
                      {listing.mode === "bid" ? (
                        <button
                          onClick={() => { setBidModal({ listing, open: true }); setBidAmount(String(listing.minBid || listing.pricePerShare)); }}
                          className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
                        >
                          Place Bid
                        </button>
                      ) : (
                        <button
                          onClick={() => setBuyModal({ listing, open: true })}
                          className="flex-1 py-2 rounded-xl bg-primary hover:bg-primary/95 text-white text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
                        >
                          Buy Now
                        </button>
                      )}
                      <button
                        onClick={() => toggleWatchlist(listing.id)}
                        className={`px-3 py-2 rounded-xl border transition-all flex items-center justify-center ${
                          watchlisted.has(listing.id) 
                            ? "text-rose-500 bg-rose-50 border-rose-200 dark:bg-rose-950/30 dark:border-rose-900" 
                            : "text-muted-foreground border-border hover:text-rose-500 hover:bg-rose-50/50"
                        }`}
                      >
                        <Heart className={`h-3.5 w-3.5 ${watchlisted.has(listing.id) ? "fill-current" : ""}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-between px-5 py-3">
                <div className="text-xs text-muted-foreground">
                  Showing {Math.min((page - 1) * itemsPerPage + 1, filteredListings.length)} to {Math.min(page * itemsPerPage, filteredListings.length)} of {filteredListings.length} listings
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} className="p-1.5 rounded-lg border border-border disabled:opacity-40 hover:bg-muted transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button key={p} onClick={() => setPage(p)} className={`h-8 w-8 rounded-lg text-sm font-semibold transition-colors ${p === page ? "bg-primary text-primary-foreground" : "border border-border hover:bg-muted"}`}>{p}</button>
                  ))}
                  <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-1.5 rounded-lg border border-border disabled:opacity-40 hover:bg-muted transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* My Listings Tab */}
          {activeTab === "my-listings" && (
            <div className="space-y-4">
              {myListings.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                  <Tag className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">No Active Listings</h3>
                  <p className="text-sm text-muted-foreground mb-4">You haven't listed any shares for sale yet.</p>
                  <button onClick={() => setSellModal(true)} className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors">
                    Create Your First Listing
                  </button>
                </div>
              ) : (
                myListings.map(l => (
                  <div key={l.id} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-lg">{l.shares.toLocaleString()} Shares — Category {l.category}</div>
                        <div className="text-sm text-muted-foreground">{l.mode === "bid" ? `Open to Bids (min KES ${l.minBid})` : `Direct Sale at KES ${l.pricePerShare}`}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-xl text-primary">KES {l.totalAmount.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">KES {l.pricePerShare}/share</div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 px-2 py-1 rounded-full">
                        <Activity className="h-3 w-3" /> Active — {l.bidsCount} bids
                      </span>
                      <span className="text-xs text-muted-foreground">{l.postedAt}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* My Bids Tab */}
          {activeTab === "my-bids" && (
            <div className="space-y-3">
              {myBids.map((bid, i) => {
                const target = listings.find(l => l.id === bid.listingId);
                return (
                  <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-card flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {target && <MemberAvatar initials={target.avatar} />}
                      <div>
                        <div className="font-semibold text-sm">{target?.sellerName || bid.listingId}</div>
                        <div className="text-xs text-muted-foreground">{target?.shares.toLocaleString()} shares · Your bid: <strong className="text-foreground">KES {bid.amount}</strong></div>
                        <div className="text-xs text-muted-foreground">{bid.time}</div>
                      </div>
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        bid.status === "accepted" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40" :
                        bid.status === "rejected" ? "bg-rose-100 text-rose-700 dark:bg-rose-950/40" :
                        "bg-amber-100 text-amber-700 dark:bg-amber-950/40"
                      }`}>
                        {bid.status === "accepted" ? "✓ Accepted" : bid.status === "rejected" ? "✗ Rejected" : "⏳ Pending"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Watchlist Tab */}
          {activeTab === "watchlist" && (
            <div className="space-y-3">
              {listings.filter(l => watchlisted.has(l.id)).length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">Your Watchlist is Empty</h3>
                  <p className="text-sm text-muted-foreground">Click the heart icon on any listing to add it here.</p>
                </div>
              ) : (
                listings.filter(l => watchlisted.has(l.id)).map(l => (
                  <div key={l.id} className="rounded-2xl border border-border bg-card p-5 shadow-card flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <MemberAvatar initials={l.avatar} />
                      <div>
                        <div className="font-semibold text-sm">{l.sellerName}</div>
                        <div className="text-xs text-muted-foreground">{l.shares.toLocaleString()} shares · KES {l.pricePerShare}/share</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">KES {l.totalAmount.toLocaleString()}</span>
                      <button onClick={() => toggleWatchlist(l.id)} className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors">
                        <Heart className="h-4 w-4 fill-current" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Right Column — Market Overview & How It Works */}
        <div className="space-y-5">
          {/* Market Overview */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h3 className="font-display font-bold text-sm mb-3 flex items-center gap-2">
              <BarChart2 className="h-4 w-4 text-primary" /> Market Overview
            </h3>
            <div className="mb-2">
              <div className="text-xs text-muted-foreground">Average Share Price</div>
              <div className="text-2xl font-extrabold font-display text-foreground">KES {currentPrice}.00</div>
              <div className={`flex items-center gap-1 text-sm font-semibold mt-0.5 ${isUp ? "text-emerald-600" : "text-rose-600"}`}>
                {isUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {isUp ? "+" : ""}{priceChange}% from last month
              </div>
            </div>
            <MiniChart data={MARKET_PRICES} />
          </div>

          {/* How It Works */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h3 className="font-display font-bold text-sm mb-4 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-primary" /> How It Works
            </h3>
            <div className="space-y-3">
              {[
                { n: 1, title: "Browse Listings", desc: "View shares available for sale from other members." },
                { n: 2, title: "Place a Bid", desc: "Bid on shares you're interested in." },
                { n: 3, title: "Connect & Agree", desc: "Communicate with the seller and agree on terms." },
                { n: 4, title: "Complete Transfer", desc: "Once agreed, shares are transferred securely." },
              ].map(step => (
                <div key={step.n} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{step.n}</div>
                  <div>
                    <div className="text-sm font-semibold">{step.title}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveTab("available")}
              className="w-full mt-4 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Learn More
            </button>
          </div>

          {/* Recent Activity */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h3 className="font-display font-bold text-sm mb-4 flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" /> Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                { icon: <Award className="h-4 w-4 text-amber-500" />, text: "Your bid of KES 120 on 500 shares by Mary Wanjiku was accepted.", time: "2 hours ago", bg: "bg-amber-50 dark:bg-amber-950/20" },
                { icon: <Bell className="h-4 w-4 text-blue-500" />, text: "New shares listing: 1,000 shares by David Kamau.", time: "4 hours ago", bg: "bg-blue-50 dark:bg-blue-950/20" },
                { icon: <CheckCircle className="h-4 w-4 text-emerald-500" />, text: "Your shares listing of 300 shares is now live.", time: "1 day ago", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
              ].map((a, i) => (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${a.bg}`}>
                  <div className="shrink-0 mt-0.5">{a.icon}</div>
                  <div>
                    <div className="text-xs leading-relaxed text-foreground">{a.text}</div>
                    <div className="text-[10px] text-muted-foreground mt-1">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-xs font-semibold text-primary hover:underline flex items-center justify-center gap-1">
              View All Activity <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>

          {/* Need Assistance */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-bold text-sm">Need Assistance?</div>
                <div className="text-xs text-muted-foreground">Our support team is here to help you</div>
              </div>
            </div>
            <button className="w-full py-2 rounded-xl border border-primary text-primary text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* ─── Chat Drawer ─────────────────────────────────────────────────────── */}
      {chatOpen && chatTarget && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setChatOpen(false)} />
          <div className="w-full max-w-md bg-card border-l border-border flex flex-col shadow-2xl h-full">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3 bg-sidebar text-sidebar-foreground">
              <MemberAvatar initials={chatTarget.avatar} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">{chatTarget.sellerName}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="text-xs opacity-70">{chatTarget.memberNo} · {chatTarget.shares.toLocaleString()} shares @ KES {chatTarget.pricePerShare}</div>
              </div>
              <button onClick={() => setChatOpen(false)} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Listing Summary */}
            <div className="px-4 py-3 bg-muted/30 border-b border-border/50">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Listing:</span>
                <span className="font-bold text-primary">KES {chatTarget.totalAmount.toLocaleString()} · {chatTarget.shares.toLocaleString()} shares</span>
              </div>
              <div className="flex gap-2 mt-2">
                {chatTarget.mode === "bid" ? (
                  <button
                    onClick={() => { setBidModal({ listing: chatTarget, open: true }); setChatOpen(false); setBidAmount(String(chatTarget.minBid)); }}
                    className="flex-1 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-bold hover:bg-amber-600 transition-colors"
                  >
                    Place Bid
                  </button>
                ) : (
                  <button
                    onClick={() => { setBuyModal({ listing: chatTarget, open: true }); setChatOpen(false); }}
                    className="flex-1 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="text-center text-xs text-muted-foreground py-2 bg-muted/20 rounded-lg">
                🔒 Messages are end-to-end encrypted and permanently saved
              </div>
              {(chatMessages[chatTarget.id] || []).map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"} gap-2`}>
                  {msg.sender === "them" && <MemberAvatar initials={chatTarget.avatar} size="sm" />}
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.sender === "me"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}>
                    {msg.text}
                    <div className={`text-[10px] mt-1 ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{msg.time}</div>
                  </div>
                  {msg.sender === "me" && <MemberAvatar initials={MOCK_MEMBER.name.split(" ").map(n => n[0]).join("")} size="sm" />}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2 items-end">
                <textarea
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                  placeholder="Type a message..."
                  rows={1}
                  className="flex-1 resize-none rounded-xl border border-border bg-muted/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="h-10 w-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Bid Modal ───────────────────────────────────────────────────────── */}
      {bidModal.open && bidModal.listing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setBidModal({ listing: null, open: false })} />
          <div className="relative w-full max-w-md bg-card rounded-2xl border border-border shadow-2xl p-6">
            <button onClick={() => setBidModal({ listing: null, open: false })} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors">
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg">Place a Bid</h2>
                <p className="text-sm text-muted-foreground">{bidModal.listing.sellerName} · {bidModal.listing.shares.toLocaleString()} shares</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Your Bid (KES per share)</label>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={e => setBidAmount(e.target.value)}
                  min={bidModal.listing.minBid}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/30 text-lg"
                />
                <p className="text-xs text-muted-foreground mt-1">Minimum bid: KES {bidModal.listing.minBid?.toLocaleString()}</p>
              </div>
              <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shares</span>
                  <span className="font-semibold">{bidModal.listing.shares.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Bid Value</span>
                  <span className="font-bold text-primary">KES {(Number(bidAmount) * bidModal.listing.shares).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
                <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-400">The seller will review your bid and notify you if accepted. Payment is only made after acceptance via M-PESA STK Push.</p>
              </div>
              <button onClick={placeBid} className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-colors">
                Submit Bid
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Buy Now Modal ───────────────────────────────────────────────────── */}
      {buyModal.open && buyModal.listing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setBuyModal({ listing: null, open: false })} />
          <div className="relative w-full max-w-md bg-card rounded-2xl border border-border shadow-2xl p-6">
            <button onClick={() => setBuyModal({ listing: null, open: false })} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors">
              <X className="h-4 w-4" />
            </button>
            <h2 className="font-display font-bold text-lg mb-2">Confirm Purchase</h2>
            <p className="text-sm text-muted-foreground mb-5">You are about to buy shares from {buyModal.listing.sellerName}</p>
            <div className="bg-muted/30 rounded-xl p-4 space-y-2 mb-5">
              {[
                ["Seller", buyModal.listing.sellerName],
                ["Shares", buyModal.listing.shares.toLocaleString()],
                ["Price/Share", `KES ${buyModal.listing.pricePerShare}`],
                ["Total Amount", `KES ${buyModal.listing.totalAmount.toLocaleString()}`],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-semibold">{v}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => { setBuyModal({ listing: null, open: false }); setStkModal(true); setStkStage("input"); }}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" /> Pay via M-PESA STK Push
            </button>
          </div>
        </div>
      )}

      {/* ─── STK Push Modal ──────────────────────────────────────────────────── */}
      {stkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => { if (stkStage !== "processing") setStkModal(false); }} />
          <div className="relative w-full max-w-sm bg-card rounded-2xl border border-border shadow-2xl p-6 text-center">
            {stkStage === "input" && (
              <>
                <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="font-display font-bold text-xl mb-2">M-PESA STK Push</h2>
                <p className="text-sm text-muted-foreground mb-5">Enter your Safaricom number to receive the payment prompt</p>
                <input
                  value={stkPhone}
                  onChange={e => setStkPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-center text-lg font-bold mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
                <button onClick={initiateSTK} className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors">
                  Send STK Push
                </button>
              </>
            )}
            {stkStage === "processing" && (
              <>
                <div className="h-16 w-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Phone className="h-8 w-8 text-amber-500" />
                </div>
                <h2 className="font-display font-bold text-xl mb-2">Waiting for Payment...</h2>
                <p className="text-sm text-muted-foreground">Check your phone ({stkPhone}) and enter your M-PESA PIN to complete payment.</p>
              </>
            )}
            {stkStage === "success" && (
              <>
                <div className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <h2 className="font-display font-bold text-xl mb-2">Payment Successful!</h2>
                <p className="text-sm text-muted-foreground mb-4">Your share purchase has been confirmed. The shares will be transferred to your account within 24 hours.</p>
                <p className="text-xs text-muted-foreground bg-muted/30 rounded-xl p-3">You will receive an SMS confirmation on {stkPhone} with the transfer details and any pickup information.</p>
                <button onClick={() => setStkModal(false)} className="w-full mt-4 py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors">
                  Done
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ─── Sell Shares Modal ───────────────────────────────────────────────── */}
      {sellModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSellModal(false)} />
          <div className="relative w-full max-w-lg bg-card rounded-2xl border border-border shadow-2xl p-6">
            <button onClick={() => setSellModal(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-muted transition-colors">
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Tag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl">List Shares for Sale</h2>
                <p className="text-sm text-muted-foreground">Available balance: {Math.floor(MOCK_MEMBER.shares * 0.3).toLocaleString()} shares</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Number of Shares</label>
                  <input type="number" value={sellForm.shares} onChange={e => setSellForm(p => ({ ...p, shares: e.target.value }))} placeholder="e.g. 500" className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Price per Share (KES)</label>
                  <input type="number" value={sellForm.pricePerShare} onChange={e => setSellForm(p => ({ ...p, pricePerShare: e.target.value }))} placeholder={`Current: ${currentPrice}`} className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2 text-muted-foreground">Sale Mode</label>
                <div className="grid grid-cols-2 gap-3">
                  {["bid", "direct"].map(mode => (
                    <button
                      key={mode}
                      onClick={() => setSellForm(p => ({ ...p, mode }))}
                      className={`p-3 rounded-xl border text-sm font-semibold transition-all ${sellForm.mode === mode ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50"}`}
                    >
                      {mode === "bid" ? "🔨 Open to Bids" : "⚡ Direct Sale"}
                    </button>
                  ))}
                </div>
              </div>
              {sellForm.mode === "bid" && (
                <div>
                  <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Minimum Bid (KES per share)</label>
                  <input type="number" value={sellForm.minBid} onChange={e => setSellForm(p => ({ ...p, minBid: e.target.value }))} placeholder="e.g. 110" className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-muted-foreground">Description (Optional)</label>
                <textarea value={sellForm.description} onChange={e => setSellForm(p => ({ ...p, description: e.target.value }))} rows={2} placeholder="Any notes for potential buyers..." className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              </div>
              {sellForm.shares && sellForm.pricePerShare && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Total</span>
                    <span className="font-extrabold text-primary text-lg">KES {(Number(sellForm.shares) * Number(sellForm.pricePerShare)).toLocaleString()}</span>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-2 p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
                <ShieldCheck className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700 dark:text-blue-400">Your listing will be visible only to verified NSSF SACCO members. Payment is processed securely through the portal via M-PESA.</p>
              </div>
              <button onClick={handleSell} className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
                Create Listing
              </button>
            </div>
          </div>
        </div>
      )}
    </PortalLayout>
  );
}
