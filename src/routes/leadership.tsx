import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useCallback, useEffect } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight, Users, ShieldCheck, Briefcase, Volume2, VolumeX, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Governance — NSSF SACCO Limited" },
      { name: "description", content: "Meet the Board of Directors, Supervisory Committee and Sacco Management team steering NSSF SACCO." },
    ],
  }),
  component: LeadershipPage,
});

/* ─── Types & Data ──────────────────────────────────────────────────────── */
interface Member {
  name: string;
  role: string;
  photo?: string;
}

const CHAIRMAN: Member = {
  name: "Livingstone Masai",
  role: "Chairman",
  photo: "hero/Livingstone-masai-board member.jpg",
};

const BOARD_DIRECTORS: Member[] = [
  { name: "Arlene Ganira",      role: "Vice Chairperson",  photo: "hero/006.-Arlene-Ganira---Board-Member.jpg" },
  { name: "Sylvester Musebi",   role: "Treasurer",         photo: "hero/SYLVESTER MUSEBI-BOARDMEMBER.jpg" },
  { name: "Olivia Okeyo",       role: "Honorary Secretary",photo: "hero/OLIVIA_okeyo-board member.jpg" },
  { name: "Ruth Macharia",      role: "Board Member",      photo: "hero/Ruth_Macharia-board member.jpeg" },
  { name: "Asher Leruk",        role: "Board Member",      photo: "hero/Director-Asher-Leruk-board member.png" },
  { name: "Wilson Chege",       role: "Board Member",      photo: "hero/008._Wilson_Chege_-_Board_Member.png" },
  { name: "Symon Lechuta",      role: "Board Member",      photo: "hero/symon lechuta-board member.jpg" },
  { name: "Edna Ndeva",         role: "Board Member",      photo: "hero/5._edna_ndeva_board_member.jpg" },
];

const SUPERVISORY: Member[] = [
  { name: "Harun Mwangi",       role: "Chairperson",       photo: "hero/Harun Mwangi-supevisory committee.png" },
  { name: "Esther Macharia",    role: "Secretary",         photo: "hero/Esther Macharia-supervisory committee.png" },
  { name: "Samuel Mutinda",     role: "Member",            photo: "hero/SAMUEL MUTINDA-supervisory committee.png" },
];

const CEO: Member = {
  name: "CPA Anthony Kahoru",
  role: "Chief Executive Officer",
  photo: "hero/CPA Anthony Kahoru-CEO management committee.jpg",
};

const MANAGEMENT: Member[] = [
  { name: "Benson Kaluku",      role: "Chief Operating Officer",                 photo: "hero/Benson_Kaluku COO management committee.jpg" },
  { name: "CPA Rebecca Gitau",  role: "Credit Manager",                          photo: "hero/CPA.Rebecca Gitau-Credit manager.jpg" },
  { name: "Robert Kaposwe",     role: "FOSA Manager",                            photo: "hero/Robert-Kaposwe FOSA MANAGER-management committee.png" },
  { name: "Silvanus Muli",      role: "ICT Manager",                             photo: "hero/Silvanus muli ICT MANAGER-management commitee.jpg" },
  { name: "Jackline Ngeli",     role: "HR & Administration Manager",             photo: "hero/jackline ngeli -HR AND ADMINISTRATION MANAGER-MANAGEMENT COMMITTEE.jpg" },
  { name: "Maureen Otieno",     role: "Business Development & Marketing Manager",photo: "hero/004.-Maureen-Otieno---management comittee.jpg" },
];

/* ─── Colour palette for avatar initials ───────────────────────────────── */
const AVATAR_PALETTE = [
  "oklch(0.49 0.07 184)", // primary teal
  "oklch(0.36 0.06 184)", // primary-deep
  "oklch(0.81 0.16 78)",  // gold
  "oklch(0.82 0.16 130)", // lime
  "oklch(0.6 0.12 200)",  // blue-teal
  "oklch(0.55 0.09 160)", // mid-green
];

function getColor(name: string) {
  const idx = name.charCodeAt(0) % AVATAR_PALETTE.length;
  return AVATAR_PALETTE[idx];
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

/* ─── Avatar Component with Loading Error Fallback & Precise Image Alignment ──────────────────────── */
function Avatar({
  member, size = 64, ring = false, highlight = false,
}: {
  member: Member; size?: number; ring?: boolean; highlight?: boolean;
}) {
  const [hasError, setHasError] = useState(false);
  const bg = getColor(member.name);
  const fontSize = size * 0.32;
  const borderWidth = size >= 80 ? 4 : 3;

  const borderColor = highlight
    ? "oklch(0.81 0.16 78)"   // gold
    : ring
    ? "oklch(0.49 0.07 184)"  // primary
    : "#fff";

  const boxShadow = highlight
    ? "0 0 0 4px oklch(0.81 0.16 78 / 0.35), 0 8px 24px oklch(0.36 0.06 184 / 0.25)"
    : "0 4px 16px oklch(0.36 0.06 184 / 0.18)";

  if (member.photo && !hasError) {
    const src = member.photo.startsWith("http") || member.photo.startsWith("/")
      ? member.photo
      : `/${member.photo}`;

    return (
      <img
        src={src}
        alt={member.name}
        onError={() => setHasError(true)}
        style={{
          width: size, height: size, borderRadius: "50%",
          objectFit: "cover", objectPosition: "center",
          border: `${borderWidth}px solid ${borderColor}`,
          boxShadow, transition: "all 0.2s",
          display: "block",
          margin: "0 auto",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size, height: size, borderRadius: "50%", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: bg, color: "#fff", fontWeight: 700,
        fontSize, fontFamily: "var(--font-display)",
        border: `${borderWidth}px solid ${borderColor}`, boxShadow,
        transition: "all 0.2s", flexShrink: 0,
        margin: "0 auto",
      }}
    >
      {initials(member.name)}
    </div>
  );
}

/* ─── Sound utility ─────────────────────────────────────────────────────── */
function useTick(enabled: boolean) {
  const ctx = useRef<AudioContext | null>(null);
  return useCallback(() => {
    if (!enabled) return;
    try {
      if (!ctx.current) ctx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      const ac = ctx.current;
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.connect(gain); gain.connect(ac.destination);
      osc.type = "sine"; osc.frequency.value = 720;
      gain.gain.setValueAtTime(0.12, ac.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.07);
      osc.start(); osc.stop(ac.currentTime + 0.07);
    } catch { /* silently ignore */ }
  }, [enabled]);
}

/* ─── Reusable Draggable Rotating Ring Component ────────────────────────── */
function RotatingRing({
  title,
  subtitle,
  icon: Icon,
  centerMember,
  ringMembers,
  size = 540,
  radius = 200,
  centerMemberSize = 140,
  ringMemberSize = 90,
}: {
  title: string;
  subtitle: string;
  icon: any;
  centerMember: Member;
  ringMembers: Member[];
  size?: number;
  radius?: number;
  centerMemberSize?: number;
  ringMemberSize?: number;
}) {
  const [angle, setAngle] = useState(0);
  const [selected, setSelected] = useState<Member | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const lastX = useRef(0);
  const dragDist = useRef(0);
  const playTick = useTick(soundOn);

  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setScale(Math.min(1, width / size));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const CENTER = size / 2;
  const N = ringMembers.length;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    lastX.current = e.clientX;
    dragDist.current = 0;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - lastX.current;
    dragDist.current += Math.abs(dx);
    setAngle((prev) => prev + dx * 0.4);
    lastX.current = e.clientX;
    if (Math.abs(dx) > 8) playTick();
  };

  const onPointerUp = () => setIsDragging(false);

  const selectMember = (m: Member) => {
    if (dragDist.current > 8) return;
    setSelected((prev) => (prev?.name === m.name ? null : m));
    playTick();
  };

  return (
    <div className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-primary-soft/30">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xl text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <button
          onClick={() => setSoundOn(!soundOn)}
          className="grid h-9 w-9 place-items-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
          title={soundOn ? "Mute" : "Enable sound"}
        >
          {soundOn ? <Volume2 className="h-4 w-4 text-primary" /> : <VolumeX className="h-4 w-4 text-muted-foreground" />}
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-0 items-stretch">
        {/* Left info panel */}
        <div className="xl:w-64 shrink-0 p-6 border-b xl:border-b-0 xl:border-r border-border flex flex-col justify-between bg-card gap-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Drag to rotate the circle and click on any leader to view their profile.
            </p>

            <div className="rounded-xl border border-primary/20 bg-primary-soft/20 px-4 py-2.5 flex items-center justify-center gap-2 text-xs font-semibold text-primary cursor-default select-none">
              <RotateCcw className="h-3.5 w-3.5" /> Drag to Rotate
            </div>
          </div>

          {/* Selected member card */}
          {selected ? (
            <div className="rounded-xl border border-primary/30 bg-primary-soft/40 p-4 space-y-2 animate-in fade-in slide-in-from-bottom-1 duration-200">
              <div className="flex items-center justify-center gap-3">
                <Avatar member={selected} size={56} highlight />
                <div className="flex-1">
                  <p className="font-bold text-sm text-foreground leading-tight">{selected.name}</p>
                  <p className="text-xs text-primary font-semibold mt-0.5">{selected.role}</p>
                </div>
              </div>
              <button
                className="text-xs text-muted-foreground hover:text-primary transition-colors block text-left mt-2"
                onClick={() => setSelected(null)}
              >
                ✕ Close
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border p-4 text-center">
              <p className="text-xs text-muted-foreground">Select a member to view details</p>
            </div>
          )}

          {/* Full list */}
          <div className="space-y-2 pt-2 border-t border-border mt-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Team List</p>
            <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {[centerMember, ...ringMembers].map((m) => (
                <div
                  key={m.name}
                  className={`flex items-center gap-3 rounded-xl p-2 cursor-pointer transition-colors ${
                    selected?.name === m.name ? "bg-primary-soft/65 border border-primary/30" : "hover:bg-muted"
                  }`}
                  onClick={() => setSelected((p) => p?.name === m.name ? null : m)}
                >
                  <Avatar member={m} size={36} />
                  <div>
                    <p className="text-xs font-bold text-foreground leading-tight">{m.name}</p>
                    <p className="text-[9.5px] text-muted-foreground leading-tight">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ring canvas */}
        <div className="flex-1 flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-primary-soft/5">
          <div
            ref={containerRef}
            className="w-full flex items-center justify-center overflow-hidden py-6"
            style={{ height: size * scale + 48 }}
          >
            <div
              className={`relative select-none origin-center ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{
                width: size,
                height: size,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                flexShrink: 0,
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {/* Dashed orbit ring */}
              <svg className="absolute inset-0 pointer-events-none" width={size} height={size}>
                <circle
                  cx={CENTER} cy={CENTER} r={radius}
                  fill="none" stroke="oklch(0.49 0.07 184 / 0.2)"
                  strokeWidth={2.5} strokeDasharray="8 6"
                />
                <circle
                  cx={CENTER} cy={CENTER} r={centerMemberSize / 2 + 15}
                  fill="none" stroke="oklch(0.81 0.16 78 / 0.2)"
                  strokeWidth={1.5}
                />
              </svg>

              {/* Members on the orbit */}
              {ringMembers.map((m, i) => {
                const theta = ((i * 360) / N + angle) * (Math.PI / 180);
                const x = CENTER + radius * Math.cos(theta - Math.PI / 2);
                const y = CENTER + radius * Math.sin(theta - Math.PI / 2);
                const isSelected = selected?.name === m.name;
                return (
                  <div
                    key={m.name}
                    className="absolute flex flex-col items-center cursor-pointer"
                    style={{
                      left: x - ringMemberSize / 2,
                      top: y - ringMemberSize / 2,
                      width: ringMemberSize,
                      zIndex: isSelected ? 10 : 1,
                    }}
                    onClick={() => selectMember(m)}
                  >
                    <div style={{ transform: isSelected ? "scale(1.1)" : "scale(1)", transition: "transform 0.2s" }}>
                      <Avatar member={m} size={ringMemberSize} highlight={isSelected} />
                    </div>
                    <p className="text-center text-[10px] font-bold text-foreground mt-1.5 leading-tight max-w-[100px] drop-shadow-sm">{m.name}</p>
                    <p className="text-center text-[9px] text-muted-foreground leading-tight max-w-[100px]">{m.role}</p>
                  </div>
                );
              })}

              {/* Chairman/CEO at centre */}
              <div
                className="absolute flex flex-col items-center cursor-pointer"
                style={{
                  left: CENTER - centerMemberSize / 2,
                  top: CENTER - centerMemberSize / 2,
                  zIndex: 5,
                }}
                onClick={() => selectMember(centerMember)}
              >
                <div style={{ transform: selected?.name === centerMember.name ? "scale(1.08)" : "scale(1)", transition: "transform 0.2s" }}>
                  <Avatar member={centerMember} size={centerMemberSize} ring highlight={selected?.name === centerMember.name} />
                </div>
                <p className="text-center text-xs font-extrabold text-primary mt-2 leading-tight">{centerMember.name}</p>
                <p className="text-center text-[10.5px] text-gold font-semibold leading-tight">{centerMember.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Supervisory Committee (3 Members) ─────────────────────────────────── */
function SupervisorySection() {
  return (
    <div className="rounded-3xl border border-border bg-card shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-primary-soft/20">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10">
          <ShieldCheck className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display font-extrabold text-xl text-foreground">Supervisory Committee</h3>
          <p className="text-xs text-muted-foreground">Ensuring accountability, transparency and adherence to policies.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-0">
        {/* Left info */}
        <div className="md:w-52 shrink-0 p-6 border-r border-border bg-card flex flex-col justify-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Supervisory Committee oversees the Sacco's compliance with regulations and internal policies.
          </p>
        </div>
        {/* Cards */}
        <div className="flex-1 p-8 bg-gradient-to-b from-transparent to-primary-soft/5">
          <div className="grid sm:grid-cols-3 gap-6">
            {SUPERVISORY.map((m) => (
              <div
                key={m.name}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm hover:shadow-card hover:border-primary/40 transition-all duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="group-hover:scale-105 transition-transform duration-200">
                    <Avatar member={m} size={120} ring />
                  </div>
                </div>
                <p className="font-bold text-sm text-foreground">{m.name}</p>
                <p className="text-xs text-primary font-semibold mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Leadership Page ──────────────────────────────────────────────── */
function LeadershipPage() {
  return (
    <PublicLayout>
      {/* ══ HEADER ════════════════════════════════════════════════════════ */}
      <div className="bg-primary-soft/40 py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-muted-foreground">About Us</span>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-foreground font-semibold">Leadership &amp; Governance</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
            Leadership &amp; Governance
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-sm leading-relaxed">
            Meet the dedicated leaders who steer our vision, uphold our values, and drive
            sustainable growth.
          </p>
        </div>
      </div>

      {/* ══ SECTIONS ════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 space-y-12">
        {/* Board of Directors Circle */}
        <RotatingRing
          title="Board of Directors"
          subtitle="9 Members · Providing strategic direction"
          icon={Users}
          centerMember={CHAIRMAN}
          ringMembers={BOARD_DIRECTORS}
        />

        {/* Supervisory Committee cards */}
        <SupervisorySection />

        {/* Sacco Management Circle */}
        <RotatingRing
          title="Sacco Management"
          subtitle="7 Members · Driving day-to-day operations"
          icon={Briefcase}
          centerMember={CEO}
          ringMembers={MANAGEMENT}
        />
      </div>

      {/* ══ BOTTOM STATS BAR ════════════════════════════════════════════ */}
      <div className="bg-primary-deep text-white mt-10">
        <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "8,000+",  label: "Members" },
            { num: "30+",     label: "Years of Trust" },
            { num: "SASRA",   label: "Secure & Regulated, Always" },
            { num: "\"Inspiring Prosperity\"", label: "Our Tagline" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="font-display font-extrabold text-2xl text-gold">{num}</p>
              <p className="text-xs text-white/65 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
