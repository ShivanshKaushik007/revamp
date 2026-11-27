"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Code2,
  ExternalLink,
  FolderOpen,
  GitBranch,
  Github,
  Globe,
  Layers,
  Mail,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

const PREVIEWS = [
  {
    id: "home",
    label: "Homepage · Hero & Metrics",
    url: "placement.ietlucknow.ac.in/",
    image: "/assets/tnp.png",
    alt: "Training and Placement Cell IET Lucknow homepage running on placement.ietlucknow.ac.in",
    caption:
      "The live institutional homepage: NAAC A+ accreditation badge, 54 LPA highest package card, Since 1984 / 90+ Companies / 500+ Placements metrics, and custom hover-bridge navigation.",
    hotspots: [
      {
        title: "Dual-Audience Routing",
        detail: "Splits incoming traffic immediately between For Recruiters and For Students from the first fold.",
      },
      {
        title: "Count-Up Strip + Logo Marquee",
        detail: "Uses IntersectionObserver to animate counters once and duplicates marquee DOM nodes for a gapless loop.",
      },
      {
        title: "College Subdomain Hosting",
        detail: "Served at placement.ietlucknow.ac.in with public/CNAME and metadataBase configured for canonical links.",
      },
    ],
  },
  {
    id: "demographic",
    label: "Demographics · Interactive Charts",
    url: "placement.ietlucknow.ac.in/recruiters/demographic/",
    image: "/assets/tnp-stats.png",
    alt: "IET Lucknow placement demographic page showing session-wise offers chart and package trends",
    caption:
      "The recruiters demographic page: 5-year Placement Offers chart (172 to 518) with custom canvas value labels alongside program/branch breakdowns.",
    hotspots: [
      {
        title: "Custom Canvas Labels",
        detail: "Chart.js afterDatasetsDraw plugin paints exact offer counts directly above every bar.",
      },
      {
        title: "Trailing-Slash Routing",
        detail: "Notice /demographic/ ends with a slash because next.config.js sets trailingSlash: true for static/hybrid reliability.",
      },
      {
        title: "Zero-Flicker Ref Updates",
        detail: "Three Chart.js instances live inside useRef handles with .destroy() guards to survive state toggles cleanly.",
      },
    ],
  },
];

export function TnpPreviewDeck() {
  const [activeId, setActiveId] = useState("home");
  const current = PREVIEWS.find((p) => p.id === activeId) || PREVIEWS[0];

  return (
    <div className="mb-12 rounded-xl overflow-hidden border border-surface-border bg-primary">
      <div className="bg-surface-muted px-4 py-2.5 border-b border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-titanium-400">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#E06C75]" />
            <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
            <span className="w-2 h-2 rounded-full bg-[#5BB98C]" />
          </div>
          <span className="ml-2 text-titanium-200 truncate">{current.url}</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-flex rounded-lg bg-primary/70 border border-surface-border p-0.5">
            {PREVIEWS.map((preview) => {
              const isSelected = preview.id === activeId;
              return (
                <button
                  key={preview.id}
                  type="button"
                  onClick={() => setActiveId(preview.id)}
                  aria-pressed={isSelected}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                    isSelected
                      ? "bg-accent text-primary font-semibold"
                      : "text-titanium-300 hover:text-titanium-50"
                  }`}
                >
                  {preview.id === "home" ? "Home UI" : "Demographics UI"}
                </button>
              );
            })}
          </div>

          <a
            href="https://placement.ietlucknow.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-accent hover:underline ml-1"
          >
            <span>Live site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://github.com/ShivanshKaushik007/TNP"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] text-titanium-300 hover:text-titanium-50"
          >
            <Github className="w-3 h-3" />
            <span>Repo</span>
          </a>
        </div>
      </div>

      <div className="relative w-full aspect-[16/9] bg-[#0E0E11] overflow-hidden">
        <Image
          src={current.image}
          alt={current.alt}
          fill
          priority={current.id === "home"}
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover object-top"
        />
      </div>

      <div className="px-4 py-3.5 bg-surface border-t border-surface-border space-y-3">
        <p className="text-xs font-mono text-titanium-300">{current.caption}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {current.hotspots.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-primary/70 border border-surface-border px-3 py-2.5"
            >
              <p className="text-[11px] font-mono font-semibold text-accent mb-1">
                {item.title}
              </p>
              <p className="text-xs text-titanium-300 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TIMELINE_BEATS = [
  {
    id: "migrate",
    date: "Jan 23, 2026",
    commit: "e36644f",
    phase: "Phase 01 · The Migration",
    headline: "Moving legacy HTML/JS into Next.js 14 before cleanup",
    story:
      "The site didn't start on a clean greenfield canvas. Commit e36644f ('nextjs migration') ported existing HTML pages, DOM sliders, and CSS utilities into a TypeScript Next.js 14 App Router codebase—even carrying temporary guides like conversion-helper.js and MIGRATION-SUMMARY.md that we deleted only after routes stabilized.",
    artifact: "app/page.tsx (1,358 lines) + legacy DOM useEffect hooks",
  },
  {
    id: "polish",
    date: "Feb – Mar 2026",
    commit: "9acde81 · cdb0d4e",
    phase: "Phase 02 · Media & Overflow Battles",
    headline: "Taming ~100 MB of drive photos and overflowing card glows",
    story:
      "Placement coordinators dropped high-res JPGs straight from phones into public/ (up to 5.1 MB in TCS/ and 3 MB in DLF/). Meanwhile, the interactive pointer-tracked GlowingEffect bled outside rounded card corners and broke horizontal scroll on mobile until wrapped in overflow-hidden rounded-[inherit] isolate.",
    artifact: "next.config.js (unoptimized: true, trailingSlash: true) + GlowingEffect",
  },
  {
    id: "backend",
    date: "Mid Build",
    commit: "79a8956 · bc3ae83 · e13cd67",
    phase: "Phase 03 · Recruiter Inbox Without a DB",
    headline: "Building Corporate Interest submissions over Nodemailer SMTP",
    story:
      "Maintaining a Postgres database just to forward HR inquiries to the placement office felt heavy. Instead, /api/company-contact/ validates 7 required fields on Node.js runtime, escapes HTML inputs, and sends structured emails directly to TPC staff with replyTo set to the recruiter's work email.",
    artifact: "app/api/company-contact/route.ts + trailing-slash fetch",
  },
  {
    id: "launch",
    date: "Mar 08, 2026",
    commit: "87c0c59 · public/CNAME",
    phase: "Phase 04 · Domain Launch & Audits",
    headline: "Shipping on placement.ietlucknow.ac.in",
    story:
      "After fixing broken relative asset links (InMobi.png, image optimization attributes, past-recruiter fallback icons, and Hydration fixes on Team cards), we pointed public/CNAME and metadataBase at placement.ietlucknow.ac.in—and handed the department brochures, JNF docs, and stats live to incoming companies.",
    artifact: "49 commits · 318 repo tree entries · live institutional portal",
  },
];

export function TnpMigrationTimeline() {
  const [selectedId, setSelectedId] = useState("migrate");
  const activeIndex = TIMELINE_BEATS.findIndex((b) => b.id === selectedId);
  const active = TIMELINE_BEATS[activeIndex] || TIMELINE_BEATS[0];

  return (
    <div className="my-10 rounded-xl border border-surface-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5 pb-3 border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
          <GitBranch className="w-4 h-4" />
          <span>Interactive Git Storyline (Jan 23 → Mar 08, 2026)</span>
        </div>
        <span className="text-[11px] font-mono text-titanium-400">
          Click a commit milestone ({activeIndex + 1}/{TIMELINE_BEATS.length})
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
        {TIMELINE_BEATS.map((beat, idx) => {
          const isCurrent = beat.id === selectedId;
          return (
            <button
              key={beat.id}
              type="button"
              onClick={() => setSelectedId(beat.id)}
              aria-pressed={isCurrent}
              className={`text-left rounded-lg px-3 py-2.5 border transition-colors ${
                isCurrent
                  ? "bg-accent/15 border-accent text-titanium-50"
                  : "bg-primary/60 border-surface-border text-titanium-300 hover:border-titanium-500"
              }`}
            >
              <span className="block text-[10px] font-mono text-accent mb-0.5">
                0{idx + 1} · {beat.date}
              </span>
              <span className="block text-xs font-heading font-semibold leading-snug">
                {beat.phase.split(" · ")[1]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="rounded-lg bg-primary border border-surface-border p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono text-accent">{active.phase}</span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-muted border border-surface-border text-titanium-300">
            git:{active.commit}
          </span>
        </div>
        <h4 className="text-lg font-heading font-bold text-titanium-50 mb-2">
          {active.headline}
        </h4>
        <p className="text-sm text-titanium-300 leading-relaxed mb-3">{active.story}</p>
        <p className="text-xs font-mono text-titanium-400">
          Key artifact: <span className="text-titanium-200">{active.artifact}</span>
        </p>
      </div>
    </div>
  );
}

const OFFERS_DATA = [
  { session: "2020-21", offers: 172, note: "Remote hiring baseline during pandemic transition" },
  { session: "2021-22", offers: 246, note: "+43.0% YoY as IT & core recruiters expanded campus drives" },
  { session: "2022-23", offers: 384, note: "+56.1% YoY surge across software and analytics profiles" },
  { session: "2023-24", offers: 404, note: "+5.2% steady growth even through tighter hiring cycles" },
  { session: "2024-25", offers: 518, note: "+28.2% jump — more than 3x offers compared to 2020-21" },
];

const PACKAGE_TREND = [
  { session: "2021-22", highest: 45, avg: 8 },
  { session: "2022-23", highest: 49, avg: 7 },
  { session: "2023-24", highest: 60, avg: 12 },
  { session: "2024-25", highest: 54, avg: 7 },
];

const PROGRAM_MIX = [
  { id: "btech", label: "B.Tech", students: 541, share: "70.0%", note: "Core & CSE/IT branches" },
  { id: "mtech", label: "M.Tech", students: 108, share: "14.0%", note: "Postgraduate engineering specializations" },
  { id: "mca", label: "MCA", students: 67, share: "8.7%", note: "Computer Applications cohort" },
  { id: "mba", label: "MBA", students: 57, share: "7.4%", note: "Management & operations graduates" },
];

export function TnpDemographicsSimulator() {
  const [mode, setMode] = useState("offers");
  const [selectedSession, setSelectedSession] = useState("2024-25");
  const [focusedProgram, setFocusedProgram] = useState("btech");

  const activeOffer = OFFERS_DATA.find((d) => d.session === selectedSession) || OFFERS_DATA[4];
  const activeProgram = PROGRAM_MIX.find((p) => p.id === focusedProgram) || PROGRAM_MIX[0];

  return (
    <div className="my-10 rounded-xl border border-surface-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-surface-border">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold mb-1">
            <BarChart3 className="w-4 h-4 shrink-0" />
            <span>Interactive Demographics Explorer</span>
          </div>
          <p className="text-xs text-titanium-400 break-words">
            Rebuilt with React state using the exact dataset inside{" "}
            <code className="font-mono text-titanium-200 break-all sm:break-normal">
              app/recruiters/demographic/page.tsx
            </code>
          </p>
        </div>

        <div className="inline-flex flex-wrap rounded-lg bg-primary border border-surface-border p-1 gap-0.5">
          {[
            { id: "offers", label: "Offers (172→518)" },
            { id: "packages", label: "CTC Trend (LPA)" },
            { id: "cohort", label: "Cohort Mix (773)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setMode(tab.id)}
              aria-pressed={mode === tab.id}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                mode === tab.id
                  ? "bg-accent text-primary font-semibold"
                  : "text-titanium-300 hover:text-titanium-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {mode === "offers" && (
        <div>
          <div className="grid grid-cols-5 gap-1.5 sm:gap-3 items-end h-52 px-2 sm:px-3 pt-6 pb-3 rounded-lg bg-primary border border-surface-border">
            {OFFERS_DATA.map((item) => {
              const heightPct = Math.round((item.offers / 518) * 100);
              const isSelected = item.session === selectedSession;
              return (
                <button
                  key={item.session}
                  type="button"
                  onClick={() => setSelectedSession(item.session)}
                  aria-pressed={isSelected}
                  className="group flex flex-col items-center justify-end h-full focus:outline-none min-w-0"
                >
                  <span
                    className={`text-xs font-mono mb-1.5 transition-colors ${
                      isSelected ? "text-accent font-bold" : "text-titanium-300"
                    }`}
                  >
                    {item.offers}
                  </span>
                  <div className="w-full max-w-[54px] h-32 flex items-end justify-center">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-t-md transition-all duration-300 border ${
                        isSelected
                          ? "bg-accent border-accent-hover shadow-[0_0_24px_rgba(242,125,66,0.28)]"
                          : "bg-[#2C74B3]/55 border-[#2C74B3] group-hover:bg-[#2C74B3]/80"
                      }`}
                    />
                  </div>
                  <span
                    className={`mt-2 text-[9px] sm:text-[11px] font-mono ${
                      isSelected ? "text-titanium-50 font-semibold" : "text-titanium-400"
                    }`}
                  >
                    {item.session}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-titanium-300 px-1">
            <span>
              Selected <strong className="text-accent">{activeOffer.session}</strong>:{" "}
              {activeOffer.note}
            </span>
            <span className="text-titanium-400">Click any bar to inspect session</span>
          </div>
        </div>
      )}

      {mode === "packages" && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PACKAGE_TREND.map((row) => (
              <div
                key={row.session}
                className="rounded-lg bg-primary border border-surface-border p-3.5"
              >
                <p className="text-xs font-mono text-titanium-400 mb-2">{row.session}</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-titanium-300">Highest</span>
                      <span className="text-accent font-semibold">{row.highest} LPA</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${Math.round((row.highest / 60) * 100)}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-titanium-300">Average</span>
                      <span className="text-[#2C74B3] font-semibold">{row.avg} LPA</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface-muted overflow-hidden">
                      <div
                        className="h-full bg-[#2C74B3] rounded-full"
                        style={{ width: `${Math.round((row.avg / 60) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs font-mono text-titanium-400 px-1">
            Recruiters ask for both peak outliers (54–60 LPA) and baseline cohorts (7–12 LPA avg) on one screen rather than buried inside PDF tables.
          </p>
        </div>
      )}

      {mode === "cohort" && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PROGRAM_MIX.map((prog) => {
              const isFocused = prog.id === focusedProgram;
              const emphasizedMetric = isFocused ? Math.round(prog.students * 1.18) : prog.students;
              return (
                <button
                  key={prog.id}
                  type="button"
                  onClick={() => setFocusedProgram(prog.id)}
                  aria-pressed={isFocused}
                  className={`text-left rounded-lg p-3.5 border transition-all ${
                    isFocused
                      ? "bg-accent/15 border-accent scale-[1.02]"
                      : "bg-primary border-surface-border hover:border-titanium-500"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-semibold text-titanium-100">
                      {prog.label}
                    </span>
                    <span className="text-[11px] font-mono text-accent">{prog.share}</span>
                  </div>
                  <p className="text-2xl font-heading font-bold text-titanium-50">
                    {prog.students}
                  </p>
                  <p className="text-[11px] font-mono text-titanium-400 mt-1">
                    {isFocused
                      ? `Chart focus weight: ${emphasizedMetric} (1.18×)`
                      : "Click to emphasize slice"}
                  </p>
                </button>
              );
            })}
          </div>
          <p className="text-xs font-mono text-titanium-300 px-1">
            Inspecting <strong className="text-accent">{activeProgram.label}</strong> ({activeProgram.students} graduating candidates — {activeProgram.note}). In the production Chart.js controller, clicking a program applies a <code className="text-titanium-100">Math.round(v * 1.18)</code> visual emphasis weight in place without unmounting the canvas.
          </p>
        </div>
      )}
    </div>
  );
}

const CHALLENGES = [
  {
    id: "media",
    category: "media",
    categoryLabel: "Performance & Media",
    icon: Layers,
    title: "99.7 MB of raw placement photos & broken image optimizer deploys",
    commit: "cdb0d4e · b113454 · 87c0c59",
    symptom:
      "Student coordinators uploaded uncompressed event photos directly to public/ (up to 5.1 MB per JPG in public/TCS/ and 3 MB in public/DLF/, plus a 2.88 MB college_image.svg). Combining that with static/hybrid hosting and trailingSlash: true meant standard /_next/image transformations either stalled or 404'd—and a filename mismatch even broke InMobi's logo.",
    solution:
      "Disabled runtime image optimization globally in next.config.js (images: { unoptimized: true }) alongside trailingSlash: true, enforced explicit width/height/sizes and loading='lazy' across marquee logos and gallery grids, fixed InMobi.png asset casing, and added a Google Favicon fallback when legacy recruiter cards lacked local SVGs.",
    codeLabel: "next.config.js + defensive image attrs",
    snippet: `// next.config.js
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
};`,
  },
  {
    id: "glow",
    category: "ui",
    categoryLabel: "UI & Hydration",
    icon: SlidersHorizontal,
    title: "GlowingEffect bleeding past rounded card edges & breaking mobile scroll",
    commit: "9acde81 ('glow effect overflow fix')",
    symptom:
      "Pointer-tracked conic borders (--start, --active, --spread with mask-composite: intersect) look crisp on large cards until pointer vectors near card corners push the painted glow layer outside rounded-[2.5rem] bounds and introduce horizontal overflow on 375px screens.",
    solution:
      "Contained every GlowingEffect overlay inside pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] isolate, set overflow-x-hidden on body, gave InteractiveSelector a matchMedia('(max-width: 640px)') responsive switch from expanding panels to vertical stack cards, and disabled GSAP SplitText char staggers on mobile or prefers-reduced-motion.",
    codeLabel: "Glow containment + responsive degradation",
    snippet: `<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] isolate">
  {/* --start / --active / --spread conic border stays clipped to card radius */}
  <GlowingEffect />
</div>`,
  },
  {
    id: "hydration",
    category: "ui",
    categoryLabel: "UI & Hydration",
    icon: AlertTriangle,
    title: "React hydration mismatch inside TPC Contact PersonCard",
    commit: "tpc/contactus/page.tsx",
    symptom:
      "Wrapping a coordinator's card in an outer <a href={person.href}> while keeping callable tel: and mailto: links inside generated nested <a> tags. Browsers auto-split invalid nested anchors during HTML parsing, causing React's hydration tree to mismatch SSR markup.",
    solution:
      "Refactored PersonCard to render a stable outer <div> shell and conditionally wrap inner non-link regions with <a className='contents'> so phone and email actions remain independently clickable without illegal DOM nesting.",
    codeLabel: "PersonCard safe wrapper pattern",
    snippet: `// Avoid <a> inside <a>: outer <div> stays deterministic on SSR + client
<div className="card-shell">
  {person.href ? <a href={person.href} className="contents">{/* card body */}</a> : null}
  <a href="tel:...">Call</a> · <a href="mailto:...">Email</a>
</div>`,
  },
  {
    id: "nodemailer",
    category: "backend",
    categoryLabel: "Backend & Routing",
    icon: Mail,
    title: "Recruiter submissions without a DB & the trailingSlash POST trap",
    commit: "79a8956 · bc3ae83 · e13cd67",
    symptom:
      "Recruiters fill out the Corporate Interest Form expecting instant delivery to the placement office without onboarding a whole CRM or database. Worse, enabling trailingSlash: true in next.config.js causes POST requests sent to /api/company-contact (no slash) to redirect before reaching the route.",
    solution:
      "Pinned the client form fetch explicitly to '/api/company-contact/' (keeping the trailing slash), set runtime = 'nodejs' and dynamic = 'force-dynamic' on route.ts, validated all 7 required fields, escaped HTML entities via escapeHtml, and set replyTo: workEmail on Nodemailer SMTP messages.",
    codeLabel: "app/api/company-contact/route.ts + trailing slash fetch",
    snippet: `export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Client submit in app/recruiters/contactform/page.tsx:
await fetch("/api/company-contact/", { method: "POST", body: JSON.stringify(payload) });`,
  },
  {
    id: "gallery",
    category: "backend",
    categoryLabel: "Backend & Routing",
    icon: FolderOpen,
    title: "Zero-CMS campus photo galleries (& catching a Linux case trap)",
    commit: "app/gallery/page.tsx",
    symptom:
      "Asking student volunteers to edit TypeScript arrays every time DLF, TCS, VECV, InMobi, or Zeta shares placement drive photos doesn't survive semester handoffs.",
    solution:
      "Built app/gallery/page.tsx as a Next.js Server Component running fs.readdirSync(path.join(process.cwd(), 'public', folderName)) to auto-discover images and stream them into GalleryModalSlideshow. Also surfaced one real audit quirk: mixing 'Zeta' folder reads with '/ZETA/...' paths passes on case-insensitive Windows but fails on Linux unless normalized.",
    codeLabel: "Server-side auto-discovery in getImagesFromPublicFolder",
    snippet: `// app/gallery/page.tsx reads files directly from public/<folderName>
const folderPath = path.join(process.cwd(), "public", folderName);
const files = fs.readdirSync(folderPath); // passes list into GalleryModalSlideshow`,
  },
  {
    id: "charts",
    category: "ui",
    categoryLabel: "UI & Hydration",
    icon: BarChart3,
    title: "Imperative Chart.js refs + custom canvas count labels without flicker",
    commit: "app/recruiters/demographic/page.tsx",
    symptom:
      "Mounting three dense charts (Offers bar chart, Highest vs Average line chart, and Program/Branch pie chart) via naïve React effects causes Chart.js 'Canvas is already in use' crashes when switching cohorts, while standard tooltips hide exact offer numbers behind hover states.",
    solution:
      "Loaded Chart.js via next/script ('afterInteractive'), stored each instance in its own useRef with explicit .destroy() cleanup, registered an afterDatasetsDraw plugin ('valueLabels') to paint counts directly above bars, and updated branch data in-place with Math.round(v * 1.18) emphasis.",
    codeLabel: "Imperative cleanup + valueLabels canvas plugin",
    snippet: `barChartInstance.current?.destroy();
barChartInstance.current = new Chart(ctx, {
  type: "bar",
  plugins: [{ id: "valueLabels", afterDatasetsDraw(chart) { /* paints 172..518 */ } }],
});`,
  },
  {
    id: "hoverbridge",
    category: "ui",
    categoryLabel: "UI & Hydration",
    icon: Wrench,
    title: "Closing the 16px hover dead-zone in multi-column dropdown menus",
    commit: "components/Header.tsx",
    symptom:
      "Giving desktop dropdowns a visual mt-4 gap beneath the sticky navbar looks clean—until moving the cursor downward across that 16px margin fires mouseleave and snaps the menu shut before the user reaches a PDF or recruiter link.",
    solution:
      "Dropped an invisible bridge (<div className='absolute inset-x-0 -top-4 h-4 bg-transparent'></div>) inside each dropdown container so pointer travel stays continuously inside the hover target, paired with accordion toggles on mobile screens.",
    codeLabel: "Invisible CSS hover bridge in Header.tsx",
    snippet: `<div className="dropdown-panel mt-4 relative">
  <div className="absolute inset-x-0 -top-4 h-4 bg-transparent"></div>
  {/* Menu items stay continuously hovered */}
</div>`,
  },
];

const FILTERS = [
  { id: "all", label: "All Challenges (7)" },
  { id: "media", label: "Media & Assets" },
  { id: "ui", label: "UI, Charts & Hydration" },
  { id: "backend", label: "API & Server Routing" },
];

export function TnpChallengeLab() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState("media");
  const [viewMode, setViewMode] = useState("both");

  const visibleChallenges =
    filter === "all" ? CHALLENGES : CHALLENGES.filter((c) => c.category === filter);

  const selected =
    visibleChallenges.find((c) => c.id === activeId) || visibleChallenges[0] || CHALLENGES[0];

  const handleFilterChange = (nextFilter) => {
    setFilter(nextFilter);
    const matches =
      nextFilter === "all" ? CHALLENGES : CHALLENGES.filter((c) => c.category === nextFilter);
    if (matches.length > 0 && !matches.some((m) => m.id === activeId)) {
      setActiveId(matches[0].id);
    }
  };

  return (
    <div className="my-10 rounded-xl border border-surface-border bg-surface overflow-hidden">
      <div className="px-5 py-4 bg-surface-muted border-b border-surface-border flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
            <Code2 className="w-4 h-4" />
            <span>Interactive Engineering Challenge Lab</span>
          </div>
          <p className="text-xs text-titanium-400 mt-1">
            Filter by layer, pick any issue, and flip between what broke and how we solved it.
          </p>
        </div>

        <div className="inline-flex flex-wrap rounded-lg bg-primary border border-surface-border p-1 gap-0.5">
          {[
            { id: "both", label: "Split View" },
            { id: "symptom", label: "What Broke" },
            { id: "fix", label: "How I Fixed It" },
          ].map((mode) => (
            <button
              key={mode.id}
              type="button"
              onClick={() => setViewMode(mode.id)}
              aria-pressed={viewMode === mode.id}
              className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                viewMode === mode.id
                  ? "bg-accent text-primary font-semibold"
                  : "text-titanium-300 hover:text-titanium-50"
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter Row */}
      <div className="px-5 py-3 border-b border-surface-border flex flex-wrap gap-2 bg-primary/40">
        {FILTERS.map((f) => {
          const isCurrent = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => handleFilterChange(f.id)}
              aria-pressed={isCurrent}
              className={`px-3 py-1 rounded-full text-xs font-mono border transition-colors ${
                isCurrent
                  ? "bg-accent/15 border-accent text-accent font-semibold"
                  : "bg-surface border-surface-border text-titanium-300 hover:text-titanium-50"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left challenge selector */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-surface-border divide-y divide-surface-border">
          {visibleChallenges.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = selected.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                aria-pressed={isSelected}
                className={`w-full text-left px-4 py-3.5 flex items-start gap-3 transition-colors ${
                  isSelected ? "bg-accent/10" : "hover:bg-primary/50"
                }`}
              >
                <span
                  className={`mt-0.5 p-1.5 rounded-lg border shrink-0 ${
                    isSelected
                      ? "bg-accent/20 border-accent text-accent"
                      : "bg-primary border-surface-border text-titanium-400"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className="text-[10px] font-mono text-titanium-400">
                      0{idx + 1} · {item.categoryLabel}
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                        isSelected ? "text-accent translate-x-0.5" : "text-titanium-500"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-sm font-heading font-semibold leading-snug ${
                      isSelected ? "text-titanium-50" : "text-titanium-200"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right detail panel */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-primary/60 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-accent">{selected.categoryLabel}</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-titanium-300">
                {selected.commit}
              </span>
            </div>

            <h4 className="text-xl font-heading font-bold text-titanium-50 leading-snug">
              {selected.title}
            </h4>

            {(viewMode === "both" || viewMode === "symptom") && (
              <div className="rounded-lg bg-[#E06C75]/[0.07] border border-[#E06C75]/30 p-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E06C75] uppercase tracking-wider font-semibold mb-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>What Broke</span>
                </div>
                <p className="text-sm text-titanium-200 leading-relaxed">{selected.symptom}</p>
              </div>
            )}

            {(viewMode === "both" || viewMode === "fix") && (
              <div className="rounded-lg bg-[#5BB98C]/[0.07] border border-[#5BB98C]/30 p-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#5BB98C] uppercase tracking-wider font-semibold mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Solution Shipped</span>
                </div>
                <p className="text-sm text-titanium-200 leading-relaxed">{selected.solution}</p>
              </div>
            )}
          </div>

          <div className="rounded-lg bg-[#0B0B0E] border border-surface-border overflow-hidden">
            <div className="px-3.5 py-2 border-b border-surface-border flex items-center justify-between text-[11px] font-mono text-titanium-400 bg-surface">
              <span>{selected.codeLabel}</span>
              <span className="text-accent">verified pattern</span>
            </div>
            <pre className="p-3.5 text-xs font-mono text-titanium-200 overflow-x-auto leading-relaxed">
              <code>{selected.snippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

const ROUGH_EDGES = [
  {
    file: "components/Header.tsx",
    issue: "Desktop menu links Company_Guidlines_21-22.pdf while public/files/ uses Company_Guidelines_21-22.pdf",
    impact: "Clicking that single legacy guideline link triggers a 404 until the missing 'e' is aligned.",
  },
  {
    file: "app/page.tsx",
    issue: "1,358-line client entrypoint runs imperative useEffect DOM scripts alongside Motion + GSAP UI primitives",
    impact: "Fast way to land an urgent institutional migration, though splitting sliders into dedicated components is next on cleanup.",
  },
  {
    file: "app/gallery/page.tsx",
    issue: "Passes 'Zeta' to fs.readdirSync while hardcoded slide arrays mix uppercase '/ZETA/...'",
    impact: "Works smoothly on local Windows NTFS, but Unix/Linux deployments demand consistent casing across every public folder.",
  },
  {
    file: "app/page.tsx (links)",
    issue: "A student CTA still points to /faq while dedicated FAQ content hasn't been ported yet",
    impact: "Classic post-migration leftover when prioritizing Recruiter Demographics, Procedure, and Downloads first.",
  },
];

export function TnpHonestAuditDrawer() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="my-8 rounded-xl border border-surface-border bg-surface p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-surface-border">
        <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider font-semibold">
          <Globe className="w-4 h-4" />
          <span>Post-Launch Codebase Audit · Unvarnished Notes</span>
        </div>
        <span className="text-[11px] font-mono text-titanium-400">
          Real rough edges spotted in the repo
        </span>
      </div>

      <div className="space-y-2">
        {ROUGH_EDGES.map((edge, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={edge.file + idx}
              className="rounded-lg border border-surface-border bg-primary/70 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                aria-expanded={isOpen}
                className="w-full px-4 py-3 flex items-center justify-between gap-3 text-left hover:bg-surface-muted/60 transition-colors"
              >
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-accent block mb-0.5">
                    {edge.file}
                  </span>
                  <span className="text-sm font-medium text-titanium-100 block">
                    {edge.issue}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-titanium-400 shrink-0 transition-transform ${
                    isOpen ? "rotate-90 text-accent" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-3.5 pt-1 text-xs font-mono text-titanium-300 border-t border-surface-border/70">
                  Why it matters: {edge.impact}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
