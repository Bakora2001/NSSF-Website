import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { useState, useCallback } from "react";
import {
  ShoppingCart, Heart, Star, Search, X, Plus, Minus, CheckCircle,
  Phone, Package, Truck, Shield, ChevronRight, ArrowRight, Sparkles,
  MapPin, Clock, Tag, Filter, Award, Gift, Eye
} from "lucide-react";

import heroShowcase from "@/assets/hero/marketplace_hero_showcase.png";

export const Route = createFileRoute("/resources/marketplace")({
  head: () => ({
    meta: [
      { title: "NSSF SACCO Marketplace — Branded Merchandise" },
      { name: "description", content: "Shop premium NSSF SACCO branded merchandise. Support our community with every purchase. Pay securely via M-PESA." },
    ],
  }),
  component: Page,
});

// ─── Types ───────────────────────────────────────────────────────────────────
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  badge?: string;
  inStock: boolean;
  featured: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
}

// ─── Product Data with realistic premium mockup images ────────────────────────
const PRODUCTS: Product[] = [
  {
    id: "P001",
    name: "NSSF Hoodie",
    price: 2500,
    originalPrice: 3200,
    category: "Apparel",
    rating: 5.0,
    reviews: 24,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80",
    description: "Premium heavyweight hoodie in NSSF forest green. 80% cotton, 20% polyester blend. Features high-quality embroidered logo, front kangaroo pocket, and fleece lining for maximum warmth.",
    badge: "Bestseller",
    inStock: true,
    featured: true
  },
  {
    id: "P002",
    name: "Polo T-Shirt",
    price: 1800,
    category: "Apparel",
    rating: 4.8,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&q=80",
    description: "Classic double-knit pique polo shirt with precision embroidered NSSF crest. Highly breathable cotton-poly blend, rib-knit collar, and reinforced three-button placket.",
    inStock: true,
    featured: true
  },
  {
    id: "P003",
    name: "NSSF Cap",
    price: 1000,
    originalPrice: 1200,
    category: "Accessories",
    rating: 4.6,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80",
    description: "Structured six-panel cap in durable cotton twill. Embroidered branding, curved visor, and adjustable brass buckle strap for a custom, comfortable fit.",
    badge: "Popular",
    inStock: true,
    featured: true
  },
  {
    id: "P004",
    name: "Branded Mug",
    price: 850,
    category: "Drinkware",
    rating: 4.7,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
    description: "Elegant 11oz high-gloss ceramic mug. Wrapped in full-colour, scratch-resistant NSSF SACCO graphics. Microwave and dishwasher safe, perfect for home or office.",
    inStock: true,
    featured: true
  },
  {
    id: "P005",
    name: "Golf Umbrella",
    price: 2200,
    category: "Accessories",
    rating: 4.9,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1622295023576-e4fb6e9c9da7?auto=format&fit=crop&w=400&q=80",
    description: "Large 60-inch heavy-duty golf umbrella. Features a double-canopy windproof design, fiberglass shaft, comfortable foam grip, and printed NSSF logo.",
    inStock: true,
    featured: true
  },
  {
    id: "P006",
    name: "Laptop Backpack",
    price: 3200,
    originalPrice: 4000,
    category: "Bags & Travel",
    rating: 4.9,
    reviews: 8,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
    description: "Professional 32L weather-resistant backpack. Built-in padded sleeve for laptops up to 15.6 inches, integrated USB charging port, and multi-pocket organizer.",
    badge: "Premium",
    inStock: true,
    featured: true
  },
  {
    id: "P007",
    name: "Water Bottle",
    price: 750,
    category: "Drinkware",
    rating: 4.5,
    reviews: 21,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80",
    description: "Double-walled insulated 500ml water bottle. Laser-engraved logo. Keeps drinks cold for up to 24 hours or hot for 12 hours.",
    inStock: true,
    featured: false
  },
  {
    id: "P008",
    name: "Notebook Set",
    price: 600,
    category: "Office & Stationery",
    rating: 4.4,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=400&q=80",
    description: "A5 hardcover journal notebook set with embossed emblem. Features 200 sheets of ruled, acid-free cream paper, ribbon marker, and elastic band enclosure.",
    inStock: true,
    featured: false
  },
  {
    id: "P009",
    name: "Pen Set (3 Pack)",
    price: 450,
    category: "Office & Stationery",
    rating: 4.2,
    reviews: 14,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400&q=80",
    description: "Pack of 3 premium metal ballpoint pens in velvet presentation sleeve. Matte finish with silver engravings. Writes smoothly in archival black ink.",
    inStock: true,
    featured: false
  },
  {
    id: "P010",
    name: "Tote Bag",
    price: 900,
    category: "Bags & Travel",
    rating: 4.6,
    reviews: 11,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80",
    description: "Extra durable 100% organic cotton canvas tote bag. Reinforced shoulder handles, spacious bottom gusset, and sharp NSSF print on both sides.",
    inStock: true,
    featured: false
  },
  {
    id: "P011",
    name: "Fleece Jacket",
    price: 3500,
    originalPrice: 4200,
    category: "Apparel",
    rating: 4.8,
    reviews: 6,
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=400&q=80",
    description: "Full-zip thermal fleece jacket. Features zipped handwarmer pockets, elastic drawcord hem, and double-stitched embroidered chest branding.",
    badge: "New",
    inStock: true,
    featured: false
  },
  {
    id: "P012",
    name: "Desk Clock",
    price: 1500,
    category: "Office & Stationery",
    rating: 4.3,
    reviews: 7,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdcd1d?auto=format&fit=crop&w=400&q=80",
    description: "Silent sweep quartz desk clock with wooden frame and metal hands. Prominently printed NSSF dial, perfect for study desks or office partitions.",
    inStock: false,
    featured: false
  },
];

const CATEGORIES = ["All Products", "Apparel", "Accessories", "Drinkware", "Office & Stationery", "Bags & Travel"];

// ─── Rating Stars Component ──────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <Star
          key={s}
          className={`h-3 w-3 ${
            s <= Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

// ─── Product Card Component ──────────────────────────────────────────────────
function ProductCard({ product, onAdd, wishlisted, onWishlist, onView }: {
  product: Product;
  onAdd: (p: Product) => void;
  wishlisted: boolean;
  onWishlist: () => void;
  onView: (p: Product) => void;
}) {
  return (
    <div className="group relative bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-border shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Wishlist */}
      <button
        onClick={onWishlist}
        className="absolute top-3.5 right-3.5 z-10 h-8 w-8 rounded-full bg-white/95 dark:bg-card/95 shadow-sm border border-gray-100 dark:border-border flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        <Heart className={`h-4 w-4 ${wishlisted ? "fill-rose-500 text-rose-500" : "text-gray-400"}`} />
      </button>

      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider ${
            product.badge === "Bestseller" ? "bg-amber-500 text-white" :
            product.badge === "Popular" ? "bg-emerald-600 text-white" :
            product.badge === "Premium" ? "bg-purple-600 text-white" :
            "bg-blue-600 text-white"
          }`}>{product.badge}</span>
        </div>
      )}

      {/* Out of Stock Overlay */}
      {!product.inStock && (
        <div className="absolute inset-0 bg-white/80 dark:bg-black/60 z-20 flex items-center justify-center rounded-2xl backdrop-blur-xs">
          <span className="bg-gray-900 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">Out of Stock</span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative bg-gray-50 dark:bg-muted/10 h-44 flex items-center justify-center overflow-hidden border-b border-gray-100 dark:border-border">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-3 bg-[#1a4731] text-white text-[8px] font-bold px-2 py-0.5 rounded-md tracking-wider uppercase shadow-xs">NSSF SACCO</div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-extrabold text-sm text-gray-900 dark:text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-gray-500 dark:text-muted-foreground font-semibold">({product.reviews})</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-muted-foreground line-clamp-2 mb-4 flex-1 leading-relaxed">{product.description}</p>
        
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-base font-black text-[#1a4731] dark:text-primary">KES {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">KES {product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onView(product)}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-border text-gray-700 dark:text-muted-foreground hover:bg-gray-50 dark:hover:bg-muted transition-colors"
            title="View Details"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onAdd(product)}
            disabled={!product.inStock}
            className="flex-1 py-2.5 rounded-xl bg-[#1a4731] text-white text-xs font-bold hover:bg-[#0f3322] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-md"
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page Component ─────────────────────────────────────────────────────
function Page() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [category, setCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [detailModal, setDetailModal] = useState<Product | null>(null);
  const [stkStage, setStkStage] = useState<"idle" | "input" | "processing" | "success">("idle");
  const [stkPhone, setStkPhone] = useState("+254 712 345 678");
  const [customerName, setCustomerName] = useState("");
  const [deliveryPref, setDeliveryPref] = useState<"pickup" | "delivery">("pickup");
  const [address, setAddress] = useState("");
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);

  const filtered = PRODUCTS.filter(p => {
    const matchCat = category === "All Products" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = useCallback((p: Product) => {
    setCart(prev => {
      const ex = prev.find(c => c.product.id === p.id);
      if (ex) return prev.map(c => c.product.id === p.id ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { product: p, quantity: 1 }];
    });
  }, []);

  const updateQty = (id: string, delta: number) => {
    setCart(prev => prev
      .map(c => c.product.id === id ? { ...c, quantity: Math.max(0, c.quantity + delta) } : c)
      .filter(c => c.quantity > 0)
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlist(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const subtotal = cart.reduce((s, c) => s + c.product.price * c.quantity, 0);
  const delivery = deliveryPref === "delivery" && subtotal > 0 ? 150 : 0;
  const total = subtotal + delivery;
  const cartCount = cart.reduce((s, c) => s + c.quantity, 0);

  const initiateSTK = () => {
    setStkStage("processing");
    setTimeout(() => setStkStage("success"), 2800);
  };

  return (
    <PublicLayout>
      {/* Redesigned 2-Column Main Layout: Stack containing Hero + Listings on left, Cart on right */}
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-10 w-full overflow-hidden lg:overflow-visible">
        <div className="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px] gap-6 items-start w-full min-w-0">
          
          {/* Left Column Stack (Hero Banner, Categories, Search, Grid, Trust strip) */}
          <div className="space-y-6 min-w-0 w-full">
            
            {/* Shorter Hero Banner (Grid with Tabletop Showcase Image on Right) */}
            <section className="relative rounded-3xl bg-gradient-to-br from-[#0f3322] via-[#1a4731] to-[#0d2e1e] text-white overflow-hidden shadow-elegant p-6 sm:p-8 lg:p-10 min-h-[260px] flex items-center border border-[#1a4731]/10">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/2 h-full">
                  <div className="text-[120px] font-black text-white leading-none tracking-tighter select-none rotate-12 opacity-10">NSSF</div>
                </div>
              </div>

              <div className="relative w-full grid md:grid-cols-[1.3fr_1fr] gap-6 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a227]/25 border border-[#c9a227]/30 text-[#e6b830] text-[10px] font-extrabold uppercase tracking-widest">
                    <Sparkles className="h-3 w-3" /> Official SACCO Merchandise
                  </div>
                  <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight text-white">
                    NSSF SACCO <span className="text-[#c9a227] block sm:inline">Marketplace</span>
                  </h1>
                  <p className="text-white/80 text-xs sm:text-sm max-w-md leading-relaxed">
                    Shop high-quality branded apparel, accessories, and stationery. Every purchase directly supports community development initiatives.
                  </p>
                  
                  {/* Shorter Flex list of features */}
                  <div className="flex flex-wrap gap-4 pt-2 text-[10px] font-semibold text-white/90">
                    <div className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-[#c9a227]" /> Quality Assured</div>
                    <div className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-[#c9a227]" /> Secure Payments</div>
                    <div className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5 text-[#c9a227]" /> Fast Delivery</div>
                  </div>
                </div>

                {/* Tabletop Showcase Image matching reference mockup */}
                <div className="hidden md:flex justify-center items-center relative h-[180px] lg:h-[200px]">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent blur-md" />
                  <img
                    src={heroShowcase}
                    alt="Premium branded products on display"
                    className="max-h-full max-w-full object-contain rounded-2xl shadow-xl border border-white/10 group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            </section>

            {/* Inner Grid for Category List and Products */}
            <div className="grid md:grid-cols-[200px_1fr] gap-6 items-start w-full min-w-0">
              
              {/* Category selector */}
              <aside className="space-y-4 min-w-0 w-full overflow-hidden">
                <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-4 shadow-xs">
                  <h2 className="font-display font-extrabold text-xs uppercase tracking-widest text-gray-400 dark:text-muted-foreground mb-3">Categories</h2>
                  <div className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none whitespace-nowrap">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left ${
                          category === cat
                            ? "bg-[#1a4731] text-white shadow-md shadow-emerald-950/20"
                            : "hover:bg-gray-50 dark:hover:bg-muted text-gray-600 dark:text-muted-foreground"
                        }`}
                      >
                        <span>
                          {cat === "All Products" ? "🛍️" : cat === "Apparel" ? "👕" : cat === "Accessories" ? "🧢" :
                           cat === "Drinkware" ? "☕" : cat === "Office & Stationery" ? "📎" : "🎒"}
                        </span>
                        <span>{cat}</span>
                        <span className={`ml-auto text-[10px] px-1.5 py-0.5 rounded-md ${
                          category === cat ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-muted text-gray-400"
                        }`}>
                          {cat === "All Products" ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Products Area */}
              <div className="space-y-4 min-w-0 w-full">
                {/* Search Bar */}
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Search branded products..."
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-border bg-white dark:bg-card text-xs focus:outline-none focus:ring-2 focus:ring-[#1a4731]/30 transition-all font-semibold"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-200 dark:border-border bg-white dark:bg-card text-xs font-bold hover:bg-gray-50 dark:hover:bg-muted transition-colors">
                    <Filter className="h-4 w-4" /> Filter
                  </button>
                </div>

                {/* Listing Grid */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center px-1">
                    <h2 className="font-display font-extrabold text-base text-gray-900 dark:text-foreground">
                      {category === "All Products" ? "Featured Products" : category}
                    </h2>
                    <span className="text-xs text-gray-400 font-bold">{filtered.length} products</span>
                  </div>

                  {filtered.length === 0 ? (
                    <div className="text-center py-16 bg-white dark:bg-card rounded-2xl border border-dashed border-gray-200 dark:border-border">
                      <ShoppingCart className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-xs font-bold text-gray-500">No products found matching "{search}"</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4.5">
                      {filtered.map(product => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAdd={addToCart}
                          wishlisted={wishlist.has(product.id)}
                          onWishlist={() => toggleWishlist(product.id)}
                          onView={setDetailModal}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Horizontal Trust Strip */}
            <div className="bg-white dark:bg-card border border-gray-100 dark:border-border rounded-2xl p-5 shadow-xs">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center justify-center">
                {[
                  { icon: <Shield className="h-5 w-5 text-[#1a4731]" />, label: "Secure Payments", sub: "M-PESA STK Push" },
                  { icon: <Phone className="h-5 w-5 text-[#1a4731]" />, label: "Instant Billing", sub: "Real-time updates" },
                  { icon: <Award className="h-5 w-5 text-[#1a4731]" />, label: "Official Brand", sub: "Premium materials" },
                  { icon: <MapPin className="h-5 w-5 text-[#1a4731]" />, label: "Pickup points", sub: "Flexible collections" },
                  { icon: <Package className="h-5 w-5 text-[#1a4731]" />, label: "Member Support", sub: "Dedicated helpline" },
                ].map((f, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div className="h-9 w-9 rounded-xl bg-[#1a4731]/10 flex items-center justify-center shrink-0">{f.icon}</div>
                    <div className="font-extrabold text-[11px] text-gray-800 dark:text-foreground">{f.label}</div>
                    <div className="text-[9px] text-gray-400 dark:text-muted-foreground">{f.sub}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Cart Sidebar, Order guide, Phone payment visualization) */}
          <aside className="hidden lg:block sticky top-24 space-y-4 lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto pr-1 pb-4 scrollbar-none">
            
            {/* 1. Shopping Cart Summary Section */}
            <div className="rounded-2xl border border-gray-100 dark:border-border bg-white dark:bg-card shadow-sm overflow-hidden flex flex-col">
              <div className="p-4 bg-[#1a4731] text-white flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  <ShoppingCart className="h-4 w-4" />
                  Your Cart
                </div>
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-black">{cartCount} items</span>
              </div>

              <div className="p-4 flex-1">
                {cart.length === 0 ? (
                  <div className="py-8 text-center space-y-2">
                    <ShoppingCart className="h-8 w-8 mx-auto text-gray-300 dark:text-muted-foreground/30" />
                    <p className="text-xs font-bold text-gray-500 dark:text-muted-foreground">Your cart is empty</p>
                    <p className="text-[10px] text-gray-400">Choose branded merchandise to checkout</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Cart Items List */}
                    <div className="max-h-[220px] overflow-y-auto divide-y divide-gray-100 dark:divide-border/40 pr-1">
                      {cart.map(item => (
                        <div key={item.product.id} className="flex items-center gap-3 py-2.5 first:pt-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-10 w-10 rounded-lg object-cover bg-gray-50 shrink-0 border border-gray-100"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold truncate text-gray-800 dark:text-foreground">{item.product.name}</div>
                            <div className="text-[11px] text-gray-400 font-semibold mt-0.5">KES {item.product.price.toLocaleString()}</div>
                          </div>
                          
                          {/* Quantity selectors */}
                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              onClick={() => updateQty(item.product.id, -1)}
                              className="h-5 w-5 rounded-md border border-gray-200 hover:bg-gray-100 dark:border-border dark:hover:bg-muted flex items-center justify-center text-gray-500"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-5 text-center text-xs font-black text-foreground">{item.quantity}</span>
                            <button
                              onClick={() => updateQty(item.product.id, 1)}
                              className="h-5 w-5 rounded-md border border-gray-200 hover:bg-gray-100 dark:border-border dark:hover:bg-muted flex items-center justify-center text-gray-500"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => updateQty(item.product.id, -item.quantity)}
                            className="p-1 text-gray-300 hover:text-rose-500 transition-colors"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Pricing summary */}
                    <div className="border-t border-gray-100 dark:border-border/60 pt-3.5 space-y-2 text-xs">
                      <div className="flex justify-between text-gray-500">
                        <span className="font-semibold">Subtotal</span>
                        <span className="font-black text-gray-800 dark:text-foreground">KES {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span className="font-semibold">Delivery</span>
                        <span className="font-black text-gray-800 dark:text-foreground">
                          {delivery === 0 ? "Free Pickup" : `KES ${delivery}`}
                        </span>
                      </div>
                      <div className="flex justify-between font-black text-sm border-t border-gray-100 dark:border-border/60 pt-2.5">
                        <span>Total</span>
                        <span className="text-[#1a4731] dark:text-primary">KES {total.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setStkStage("input")}
                      className="w-full py-3 rounded-xl bg-[#1a4731] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0f3322] hover:shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      Proceed to Checkout <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 2. "How to Order" Steps box */}
            <div className="rounded-2xl border border-gray-100 dark:border-border bg-amber-50/50 dark:bg-amber-950/10 p-4 flex gap-3.5 items-start">
              <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <ShoppingCart className="h-5 w-5 text-amber-600 dark:text-amber-500" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xs uppercase tracking-wider text-amber-950 dark:text-amber-400 mb-2">How to Order</h3>
                <ol className="space-y-1.5 text-[11px] text-amber-900/80 dark:text-amber-300 leading-relaxed font-semibold">
                  <li className="flex gap-1.5"><span className="text-amber-500">1.</span> Add items to your cart</li>
                  <li className="flex gap-1.5"><span className="text-amber-500">2.</span> Click checkout &amp; enter details</li>
                  <li className="flex gap-1.5"><span className="text-amber-500">3.</span> Confirm payment via STK Push</li>
                  <li className="flex gap-1.5"><span className="text-amber-500">4.</span> Receive pickup / collection SMS</li>
                </ol>
              </div>
            </div>

            {/* 3. M-PESA Smartphone Mockup Visualization */}
            <div className="rounded-2xl border border-gray-100 dark:border-border bg-white dark:bg-card p-4 shadow-xs">
              <div className="flex gap-3 items-center mb-3">
                <div className="h-8 w-8 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-gray-800 dark:text-foreground">Payment &amp; Delivery</h4>
                  <p className="text-[10px] text-gray-400 font-bold">M-PESA STK Push Enabled</p>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
                We use secure M-PESA payment flows. Enter your phone number at checkout, receive an instant PIN prompt, and complete transactions immediately.
              </p>

              {/* Smartphone STK Push Screen mockup */}
              <div className="relative mx-auto max-w-[170px] bg-gray-950 rounded-2xl p-2.5 shadow-md border-4 border-gray-800 font-mono text-[9px] text-white">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-gray-850 rounded-full" />
                <div className="bg-[#2e2e2e] rounded-lg p-2 mt-2 space-y-1.5 border border-white/5">
                  <div className="text-center font-bold text-[#a1d862] text-[10px]">M-PESA STK PUSH</div>
                  <div className="h-px bg-white/10" />
                  <div className="space-y-1 font-semibold leading-tight text-white/90">
                    <div className="text-[8px] opacity-70">Merchant:</div>
                    <div className="text-[8.5px]">NSSF SACCO LTD</div>
                    <div className="text-[8px] opacity-70 mt-1">Amount:</div>
                    <div className="text-[9px] font-black text-[#a1d862]">KES {total > 0 ? total.toLocaleString() : "2,800"}</div>
                  </div>
                  <div className="bg-black/40 rounded px-1.5 py-1 text-center text-white/50 text-[7.5px]">
                    Enter PIN to complete
                  </div>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>

      {/* ─── Detail Modal ────────────────────────────────────────────────────── */}
      {detailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setDetailModal(null)} />
          <div className="relative w-full max-w-xl bg-white dark:bg-card rounded-2xl border border-gray-200 dark:border-border shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Image */}
            <div className="w-full md:w-1/2 h-56 md:h-auto bg-gray-50 dark:bg-muted/10 relative">
              <img
                src={detailModal.image}
                alt={detailModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(detailModal.id)}
                className="absolute top-3.5 right-3.5 h-8 w-8 rounded-full bg-white/90 shadow flex items-center justify-center"
              >
                <Heart className={`h-4.5 w-4.5 ${wishlist.has(detailModal.id) ? "fill-rose-500 text-rose-500" : "text-gray-400"}`} />
              </button>
            </div>

            {/* Info */}
            <div className="p-6 w-full md:w-1/2 flex flex-col justify-between overflow-y-auto">
              <button
                onClick={() => setDetailModal(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-150 text-gray-400 transition-colors z-10"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a4731]">{detailModal.category}</span>
                  <h2 className="font-display font-extrabold text-xl mt-1 leading-tight">{detailModal.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <StarRating rating={detailModal.rating} />
                    <span className="text-xs text-gray-500 font-bold">({detailModal.reviews} reviews)</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed font-semibold">{detailModal.description}</p>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-black text-[#1a4731]">KES {detailModal.price.toLocaleString()}</span>
                  {detailModal.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">KES {detailModal.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex gap-3">
                <button
                  onClick={() => { addToCart(detailModal); setDetailModal(null); }}
                  disabled={!detailModal.inStock}
                  className="flex-1 py-3 rounded-xl bg-[#1a4731] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0f3322] disabled:opacity-40 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ─── STK Push Checkout Modal ──────────────────────────────────────────── */}
      {stkStage !== "idle" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => { if (stkStage !== "processing") setStkStage("idle"); }} />
          <div className="relative w-full max-w-md bg-white dark:bg-card rounded-2xl border border-gray-150 dark:border-border shadow-2xl overflow-y-auto max-h-[90vh] animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-[#1a4731] p-5 text-white shadow-sm flex justify-between items-center">
              <div>
                <h2 className="font-display font-extrabold text-lg tracking-tight">M-PESA Checkout</h2>
                <p className="text-xs text-white/80 mt-0.5">Secure payment via STK Push</p>
              </div>
              {stkStage !== "processing" && (
                <button onClick={() => setStkStage("idle")} className="text-white/80 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            <div className="p-6">
              {stkStage === "input" && (
                <div className="space-y-4">
                  {/* Order summary widget */}
                  <div className="bg-gray-50 dark:bg-muted/20 rounded-xl p-3.5 space-y-2 border border-gray-100 dark:border-border/40">
                    {cart.map(item => (
                      <div key={item.product.id} className="flex justify-between text-xs font-semibold">
                        <span className="text-gray-500">{item.product.name} × {item.quantity}</span>
                        <span className="font-bold text-gray-800 dark:text-foreground">KES {(item.product.price * item.quantity).toLocaleString()}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 dark:border-border/60 pt-2 flex justify-between text-xs font-black">
                      <span>Total Amount</span>
                      <span className="text-[#1a4731] dark:text-primary">KES {total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1.5">Full Name</label>
                    <input
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="e.g. John Mwangi"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border bg-gray-50 dark:bg-muted/10 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#1a4731]/30"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1.5">M-PESA Mobile Number</label>
                    <input
                      value={stkPhone}
                      onChange={e => setStkPhone(e.target.value)}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border bg-gray-50 dark:bg-muted/10 text-xs font-black font-mono focus:outline-none focus:ring-2 focus:ring-[#1a4731]/30"
                    />
                  </div>

                  {/* Delivery preference */}
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-2">Delivery Preference</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDeliveryPref("pickup")}
                        className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                          deliveryPref === "pickup"
                            ? "border-[#1a4731] bg-[#1a4731]/5 text-[#1a4731] dark:text-primary"
                            : "border-gray-200 dark:border-border hover:bg-gray-50"
                        }`}
                      >
                        <MapPin className="h-4 w-4" />
                        <div>Free Pickup</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeliveryPref("delivery")}
                        className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                          deliveryPref === "delivery"
                            ? "border-[#1a4731] bg-[#1a4731]/5 text-[#1a4731] dark:text-primary"
                            : "border-gray-200 dark:border-border hover:bg-gray-50"
                        }`}
                      >
                        <Truck className="h-4 w-4" />
                        <div>Delivery (KES 150)</div>
                      </button>
                    </div>
                  </div>

                  {deliveryPref === "delivery" && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-150">
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1.5">Delivery Address</label>
                      <input
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder="Building, Street, Town"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-border bg-gray-50 dark:bg-muted/10 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#1a4731]/30"
                      />
                    </div>
                  )}

                  <button
                    onClick={initiateSTK}
                    disabled={!stkPhone || !customerName || (deliveryPref === "delivery" && !address)}
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-40"
                  >
                    <Phone className="h-4 w-4" /> Send STK Prompt (KES {total.toLocaleString()})
                  </button>
                </div>
              )}

              {stkStage === "processing" && (
                <div className="text-center py-8 space-y-4">
                  <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto animate-pulse">
                    <Phone className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-foreground">Processing Request</h3>
                    <p className="text-xs text-gray-400 font-bold mt-1">An M-PESA STK Push has been sent to:</p>
                    <div className="font-black text-base text-[#1a4731] dark:text-primary mt-2">{stkPhone}</div>
                  </div>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                    Check your phone screen, enter your M-PESA PIN, and tap send to approve the payment of <strong>KES {total.toLocaleString()}</strong>.
                  </p>
                  
                  {/* Progress loaders */}
                  <div className="flex justify-center gap-1.5 pt-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0s" }} />
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              )}

              {stkStage === "success" && (
                <div className="text-center py-6 space-y-4">
                  <div className="h-20 w-20 rounded-full bg-emerald-100 dark:bg-emerald-950/20 flex items-center justify-center mx-auto">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-emerald-800 dark:text-emerald-400">Payment Confirmed!</h3>
                    <p className="text-xs text-gray-500 font-bold mt-1">Thank you, <strong>{customerName}</strong>. Your payment has been received successfully.</p>
                  </div>

                  <div className="bg-gray-50 dark:bg-muted/20 border border-gray-150 dark:border-border/40 rounded-2xl p-4 text-left text-xs leading-relaxed space-y-3 font-semibold text-gray-600">
                    <div className="flex gap-2">
                      <Clock className="h-4.5 w-4.5 text-[#1a4731] shrink-0 mt-0.5" />
                      <div>
                        {deliveryPref === "pickup"
                          ? "📍 Pickup Collection: Available for pickup at NSSF SACCO House, Nairobi. Show your confirmation SMS and ID."
                          : `🚚 Home Delivery: Your package will be delivered to: ${address} within 2-3 business days.`}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Phone className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>A detailed SMS confirmation with transaction details has been sent to {stkPhone}.</div>
                    </div>
                  </div>

                  <button
                    onClick={() => { setStkStage("idle"); setCart([]); }}
                    className="w-full py-3 rounded-xl bg-[#1a4731] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0f3322] transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Floating Mobile Cart Button */}
      {cartCount > 0 && (
        <div className="lg:hidden fixed bottom-6 right-6 z-40 animate-in fade-in zoom-in duration-200">
          <button
            onClick={() => setIsMobileCartOpen(true)}
            className="flex items-center gap-2 px-5 py-4 rounded-full bg-[#1a4731] hover:bg-[#0f3322] text-white font-extrabold text-sm shadow-2xl transition-all border border-emerald-700/30 active:scale-95 duration-150"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>View Cart ({cartCount})</span>
            <span className="bg-[#c9a227] text-white px-2 py-0.5 rounded-full text-xs font-black ml-1">KES {total.toLocaleString()}</span>
          </button>
        </div>
      )}

      {/* Mobile Cart Drawer/Modal */}
      {isMobileCartOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setIsMobileCartOpen(false)}
          />
          {/* Content Panel */}
          <div className="absolute right-0 bottom-0 top-0 w-full max-w-md bg-white dark:bg-card border-l border-gray-100 dark:border-border shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-200">
            <div className="p-4 bg-[#1a4731] text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                <ShoppingCart className="h-4 w-4" />
                Your Cart
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-black">{cartCount} items</span>
                <button
                  onClick={() => setIsMobileCartOpen(false)}
                  className="p-1 rounded-md hover:bg-white/10 text-white/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="py-12 text-center space-y-2">
                  <ShoppingCart className="h-10 w-10 mx-auto text-gray-300 dark:text-muted-foreground/30" />
                  <p className="text-xs font-bold text-gray-500 dark:text-muted-foreground">Your cart is empty</p>
                  <p className="text-[10px] text-gray-400">Choose branded merchandise to checkout</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Cart Items List */}
                  <div className="divide-y divide-gray-100 dark:divide-border/40">
                    {cart.map(item => (
                      <div key={item.product.id} className="flex items-center gap-3 py-3 first:pt-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-12 w-12 rounded-xl object-cover bg-gray-50 shrink-0 border border-gray-100 dark:border-border"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-bold truncate text-gray-800 dark:text-foreground">{item.product.name}</div>
                          <div className="text-[11px] text-gray-400 font-semibold mt-0.5">KES {item.product.price.toLocaleString()}</div>
                        </div>
                        
                        {/* Quantity selectors */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => updateQty(item.product.id, -1)}
                            className="h-6 w-6 rounded-md border border-gray-200 hover:bg-gray-100 dark:border-border dark:hover:bg-muted flex items-center justify-center text-gray-500"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-black text-foreground">{item.quantity}</span>
                          <button
                            onClick={() => updateQty(item.product.id, 1)}
                            className="h-6 w-6 rounded-md border border-gray-200 hover:bg-gray-100 dark:border-border dark:hover:bg-muted flex items-center justify-center text-gray-500"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => updateQty(item.product.id, -item.quantity)}
                          className="p-1 text-gray-300 hover:text-rose-500 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Pricing summary */}
                  <div className="border-t border-gray-100 dark:border-border/60 pt-4 space-y-2.5 text-xs">
                    <div className="flex justify-between text-gray-500">
                      <span className="font-semibold">Subtotal</span>
                      <span className="font-black text-gray-800 dark:text-foreground">KES {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span className="font-semibold">Delivery</span>
                      <span className="font-black text-gray-800 dark:text-foreground">
                        {delivery === 0 ? "Free Pickup" : `KES ${delivery}`}
                      </span>
                    </div>
                    <div className="flex justify-between font-black text-sm border-t border-gray-100 dark:border-border/60 pt-3">
                      <span>Total</span>
                      <span className="text-[#1a4731] dark:text-primary">KES {total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => { setIsMobileCartOpen(false); setStkStage("input"); }}
                    className="w-full py-3.5 rounded-xl bg-[#1a4731] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#0f3322] hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to Checkout <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </PublicLayout>
  );
}
