import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  ExternalLink,
  Github,
} from "lucide-react";
import {
  TnpChallengeLab,
  TnpDemographicsSimulator,
  TnpHonestAuditDrawer,
  TnpMigrationTimeline,
  TnpPreviewDeck,
} from "@/components/blog/TnpStoryInteractive";

const TOC_ITEMS = [
  { id: "why-this-mattered", text: "1. Shipping for an actual institution", level: 1 },
  { id: "the-migration-story", text: "2. Starting from messy reality (Jan 23)", level: 1 },
  { id: "architecture-handovers", text: "3. Designing for student handovers", level: 1 },
  { id: "demographics-engine", text: "Inside the Demographics engine", level: 2 },
  { id: "challenges-and-fixes", text: "4. Seven things that broke (& fixes)", level: 1 },
  { id: "nodemailer-route", text: "5. Recruiter inbox over SMTP", level: 1 },
  { id: "college-domain-launch", text: "6. Launching on placement.ietlucknow.ac.in", level: 1 },
];

const TAGS = [
  "Next.js 14",
  "TypeScript",
  "Chart.js",
  "Nodemailer",
  "GSAP & Motion",
  "IET Lucknow",
];

export const metadata = {
  title:
    "Rebuilding IET Lucknow's Training & Placement Portal for placement.ietlucknow.ac.in | Shivansh Kaushik",
  description:
    "The real story behind migrating, debugging, and shipping the official Training & Placement Cell portal for IET Lucknow—100 MB of campus media, interactive Chart.js cohorts, Nodemailer SMTP routes, and honest fixes.",
  keywords: [
    "IET Lucknow",
    "Training and Placement Cell",
    "placement.ietlucknow.ac.in",
    "Next.js",
    "TypeScript",
    "Chart.js",
    "Nodemailer",
    "Shivansh Kaushik",
  ],
};

export default function TnpBlogPage() {
  return (
    <main className="min-h-screen py-10 sm:py-14">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 mb-8">
        <div className="flex items-center justify-between text-xs font-mono">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-titanium-400 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All notes</span>
          </Link>

          <Link
            href="/"
            className="text-titanium-400 hover:text-titanium-100 transition-colors"
          >
            / home
          </Link>
        </div>
      </div>

      <article className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="border-b border-surface-border pb-10 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono text-titanium-400">
            <span className="text-accent font-semibold">Institutional Case Study</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              16 min read
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              March 10, 2026
            </span>
          </div>

          <h1 className="text-2xl sm:text-5xl font-heading font-bold text-titanium-50 tracking-tight leading-[1.15] mb-5 max-w-4xl break-words">
            Migrating IET Lucknow&apos;s Placement Portal to{" "}
            <span className="font-editorial font-normal text-titanium-200">
              Next.js 14
            </span>{" "}
            and launching on{" "}
            <span className="text-accent">
              placement.<wbr />ietlucknow.<wbr />ac.in
            </span>
          </h1>

          <p className="text-base sm:text-lg text-titanium-300 leading-relaxed max-w-3xl mb-8">
            What actually happened when we migrated IET Lucknow&apos;s Training &amp; Placement Cell
            website into Next.js 14—fixing overflowing cursor glows, hydration traps inside coordinator
            cards, trailing-slash API drops, and building interactive placement demographics used by
            incoming recruiters.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-surface-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-accent text-xs shrink-0">
                SK
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-titanium-50">
                  Shivansh Kaushik
                </p>
                <p className="text-xs font-mono text-titanium-400">
                  IET Lucknow · Hosted on placement.ietlucknow.ac.in
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-titanium-300"
                >
                  #{tag}
                </span>
              ))}
              <a
                href="https://placement.ietlucknow.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded bg-accent/10 border border-accent/40 text-accent hover:bg-accent/20 transition-colors ml-1"
              >
                <span>Live Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/ShivanshKaushik007/TNP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded bg-surface border border-surface-border text-titanium-200 hover:border-titanium-400 transition-colors"
              >
                <Github className="w-3 h-3" />
                <span>Source</span>
              </a>
            </div>
          </div>
        </header>

        {/* Interactive Browser Frame Switcher (Homepage vs Demographics) */}
        <TnpPreviewDeck />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 max-w-none min-w-0">
            {/* Mobile Collapsible TOC */}
            <div className="block lg:hidden mb-8 p-4 rounded-xl bg-surface border border-surface-border">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-mono text-accent uppercase tracking-wider font-semibold select-none">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Story Chapters ({TOC_ITEMS.length})</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-titanium-400 group-open:rotate-180 transition-transform" />
                </summary>
                <nav className="mt-4 pt-3 border-t border-surface-border space-y-2 max-h-72 overflow-y-auto pr-2 no-scrollbar">
                  {TOC_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-xs font-mono transition-colors py-1 ${
                        item.level === 1
                          ? "text-titanium-100 font-semibold"
                          : "text-titanium-400 pl-3 border-l border-surface-border hover:text-titanium-50"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            <div className="prose-editorial">
              <section id="why-this-mattered" className="scroll-mt-24">
                <p className="text-lg sm:text-xl leading-relaxed text-titanium-50">
                  There is a very different kind of pressure when your website stops living on a
                  random demo URL and gets pointed at{" "}
                  <code>placement.ietlucknow.ac.in</code>.
                </p>

                <p>
                  Personal projects have an easy escape hatch: if a chart flickers on mobile or an
                  image weighs 5 megabytes, nobody calls you at 9 PM asking why an incoming HR team
                  couldn&apos;t open the JNF form. For our own college—Institute of Engineering &amp;
                  Technology, Lucknow—the Training &amp; Placement portal sits directly between{" "}
                  <strong>773+ graduating students</strong> across B.Tech, M.Tech, MCA, and MBA cohorts
                  and the companies visiting campus.
                </p>

                <p>
                  Recruiters come looking for three things within sixty seconds: authentic multi-year
                  placement records, how the recruitment drive process works, and who to contact on
                  Dr. Arun Kumar Tiwari&apos;s Placement Office team. Meanwhile, students need
                  department-wise brochures, placement policies, and proof that the campus story matches
                  reality—especially as yearly offers grew from <strong>172 in 2020-21</strong> to{" "}
                  <strong>518 in 2024-25</strong>.
                </p>

                <blockquote>
                  The hardest constraint wasn&apos;t CSS gradients or Framer/GSAP motion—it was taking
                  years of accumulated campus brochures, raw placement-drive photos, and scattered HTML
                  and turning them into something another batch of student coordinators can actually
                  maintain next semester.
                </blockquote>
              </section>

              <section id="the-migration-story" className="scroll-mt-24">
                <h2>2. Starting From Messy Reality: The 49-Commit Migration</h2>

                <p>
                  If you browse{" "}
                  <a
                    href="https://github.com/ShivanshKaushik007/TNP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-4"
                  >
                    the TNP repository
                  </a>
                  , commit #1 tells the whole honest truth: on <strong>January 23, 2026</strong>, commit{" "}
                  <code>e36644f</code> wasn&apos;t called <em>init</em>—it was called{" "}
                  <code>&quot;nextjs migration&quot;</code>.
                </p>

                <p>
                  Rather than freezing everything for two months to reinvent every page in isolation,
                  we ported the existing layout, palette (deep institutional blues{" "}
                  <code>#0A2647 → #144272 → #2C74B3</code>), and vanilla DOM sliders directly into{" "}
                  <strong>Next.js 14.1.0</strong>, <strong>React 18</strong>,{" "}
                  <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. For the first few
                  commits, temporary migration notes like <code>MIGRATION-SUMMARY.md</code>,{" "}
                  <code>HOMEPAGE-CONVERSION.md</code>, and <code>conversion-helper.js</code> even sat
                  alongside the app until every route rendered reliably and we deleted them cleanly in
                  commits <code>966d06f</code> through <code>26aeb46</code>.
                </p>

                <p>
                  That phased history is still visible inside <code>app/page.tsx</code>: 1,358 lines
                  where imperative <code>useEffect</code> DOM scripts (like <code>setupLogoSlider</code>{" "}
                  cloning <code>slider.innerHTML</code> for a gapless recruiter marquee and{" "}
                  <code>IntersectionObserver</code> counters) live right next to React components like{" "}
                  <code>FlipWords</code>, GSAP <code>SplitText</code>, <code>GlowingEffect</code>, and{" "}
                  <code>InteractiveSelector</code>.
                </p>
              </section>
            </div>

            <TnpMigrationTimeline />

            <div className="prose-editorial">
              <section id="architecture-handovers" className="scroll-mt-24">
                <h2>3. Designing for Student Handovers, Not Just Developers</h2>

                <p>
                  College websites die when adding five placement photos requires touching TypeScript
                  config files. Because coordinators switch teams every academic year, we structured the{" "}
                  <strong>318-file</strong> repository around predictable folder boundaries:
                </p>

                <ul>
                  <li>
                    <strong>Recruiter funnel (<code>/recruiters/*</code>)</strong> — splits{" "}
                    <code>/demographic/</code> (program &amp; offer trends), <code>/procedure/</code>{" "}
                    (scroll-driven 6-step hiring timeline), and <code>/contactform/</code> (Corporate
                    Interest submission).
                  </li>
                  <li>
                    <strong>Downloads hub (<code>/downloads/</code>)</strong> — serves official PDFs and
                    forms straight out of <code>public/files/</code> (including{" "}
                    <code>Placement_Brouchure_2025-26.pdf</code>,{" "}
                    <code>JNF_IET_Lucknow_2025-26.docx</code>, and six department brochures).
                  </li>
                  <li>
                    <strong>Zero-CMS photo galleries (<code>/gallery/</code>)</strong> —{" "}
                    <code>app/gallery/page.tsx</code> acts as a Next.js Server Component using{" "}
                    <code>fs.readdirSync</code> inside <code>getImagesFromPublicFolder</code>. Drop photos
                    from DLF, TCS, VECV, InMobi, or Zeta into <code>public/&lt;Company&gt;/</code> and
                    they automatically feed <code>GalleryModalSlideshow</code> without touching code.
                  </li>
                  <li>
                    <strong>Past Recruiter fallback logos (<code>/tpc/aboutus/</code>)</strong> — uses{" "}
                    CSS <code>grid-rows-[0fr] → grid-rows-[1fr]</code> card expansions and falls back to
                    the Google Favicon API when older recruiting companies don&apos;t have a local vector
                    asset.
                  </li>
                </ul>

                <h3 id="demographics-engine" className="scroll-mt-24">
                  Inside the Demographics Engine
                </h3>

                <p>
                  Recruiting managers rarely sit through prose—they open{" "}
                  <code>/recruiters/demographic/</code> to verify volume and compensation trends fast. We
                  loaded Chart.js asynchronously via <code>next/script</code> (<code>afterInteractive</code>)
                  and kept three separate imperative handles (<code>chartInstance</code>,{" "}
                  <code>barChartInstance</code>, and <code>lineChartInstance</code>) inside React refs.
                </p>

                <p>
                  Try the live interactive recreation below using the exact verified dataset wired into{" "}
                  <code>app/recruiters/demographic/page.tsx</code>:
                </p>
              </section>
            </div>

            <TnpDemographicsSimulator />

            <div className="prose-editorial">
              <div className="my-8 rounded-xl overflow-hidden border border-surface-border bg-primary">
                <div className="px-4 py-2.5 bg-surface-muted border-b border-surface-border flex items-center justify-between text-xs font-mono text-titanium-400">
                  <span>Live Capture · /recruiters/demographic/</span>
                  <a
                    href="https://placement.ietlucknow.ac.in/recruiters/demographic/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline"
                  >
                    <span>Open on domain</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative w-full aspect-[16/9] bg-[#0E0E11]">
                  <Image
                    src="/assets/tnp-stats.png"
                    alt="Live Chart.js Session-wise Placement Offers and Highest vs Average Packages on placement.ietlucknow.ac.in"
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="px-4 py-2.5 bg-surface border-t border-surface-border text-xs font-mono text-titanium-400">
                  Custom afterDatasetsDraw (&quot;valueLabels&quot;) plugin paints exact counts (172,
                  246, 384, 404, 518) directly above bars so key figures never hide inside tooltips.
                </div>
              </div>

              <section id="challenges-and-fixes" className="scroll-mt-24">
                <h2>4. Seven Things That Broke (and How We Fixed Them)</h2>

                <p>
                  Every institutional site looks calm once the blue gradient loads. Underneath, almost
                  all of the real debugging across the 49 commits came from real-world friction: giant
                  campus event JPEGs, mobile width overflows, browser anchor-nesting rules, and
                  trailing-slash routing quirks.
                </p>

                <p>
                  Pick any layer below or flip between <strong>What Broke</strong> and{" "}
                  <strong>Solution Shipped</strong> to walk through all seven engineering fixes pulled
                  straight from the repo and git log:
                </p>
              </section>
            </div>

            <TnpChallengeLab />

            <div className="prose-editorial">
              <section id="nodemailer-route" className="scroll-mt-24">
                <h2>5. Recruiter Inbox Over SMTP Without Maintaining a DB</h2>

                <p>
                  Midway through the build (commits <code>79a8956</code> and <code>bc3ae83</code>), we
                  needed the Corporate Interest Form at <code>/recruiters/contactform/</code> to deliver
                  company inquiries reliably to the placement office without provisioning an unnecessary
                  Postgres instance or admin CMS just for contact submissions.
                </p>

                <p>
                  We wired <code>app/api/company-contact/route.ts</code> with{" "}
                  <code>runtime = &quot;nodejs&quot;</code> and{" "}
                  <code>dynamic = &quot;force-dynamic&quot;</code>, validated all seven required form
                  fields cleanly, ran user-supplied values through <code>escapeHtml</code> before building
                  the HTML email body, and configured Nodemailer (<code>nodemailer@8.0.1</code>) via{" "}
                  <code>SMTP_HOST</code> / <code>SMTP_USER</code> / <code>SMTP_PASS</code> with{" "}
                  <code>replyTo: workEmail</code>. When the Placement Cell hits Reply in Gmail, it goes
                  straight back to the company HR contact.
                </p>

                <p>
                  One subtle bug caught us during deployment testing (<code>e13cd67</code>): because{" "}
                  <code>next.config.js</code> sets <code>trailingSlash: true</code> for clean static/hybrid
                  URLs, sending a <code>POST</code> to <code>/api/company-contact</code> without a slash
                  can hit a redirect and lose the payload. Fixing the client fetch URL in{" "}
                  <code>contactform/page.tsx</code> explicitly to <code>/api/company-contact/</code>{" "}
                  resolved the submission drop immediately.
                </p>
              </section>

              <section id="college-domain-launch" className="scroll-mt-24">
                <h2>
                  6. Launching on placement.<wbr />ietlucknow.<wbr />ac.in &amp; Honest Notes
                </h2>

                <p>
                  By March 8, 2026 (commit <code>87c0c59</code>), <code>public/CNAME</code> pointed at{" "}
                  <code>placement.ietlucknow.ac.in</code>, <code>metadataBase</code> in{" "}
                  <code>app/layout.tsx</code> generated clean OpenGraph cards for links shared by alumni
                  and recruiters, and core flows—campus overview, brochure downloads, demographics,
                  coordinator directories, and drive galleries—were live under the college domain.
                </p>

                <p>
                  Keeping it completely real: shipping fast on an active placement deadline still leaves
                  a few visible rough edges in the codebase. Clicking through the repository audit below
                  highlights four small spots still worth tightening up in the next cleanup pass:
                </p>
              </section>
            </div>

            <TnpHonestAuditDrawer />

            <div className="prose-editorial">
              <p>
                Looking back, migrating TNP taught me something personal side-projects rarely teach:
                institutional software has to respect <strong>time, non-technical maintainers, and real
                browsers on campus Wi-Fi</strong> more than architectural vanity. When <code>git:e36644f</code>{" "}
                started, we just needed the legacy pages working inside React. By the time{" "}
                <code>placement.ietlucknow.ac.in</code> went live, those 49 commits had turned into a
                crash course in asset restraint, defensive hydration, and shipping clean tools for the
                people who actually run placement season every day.
              </p>
            </div>

            {/* Next / Previous Navigation */}
            <div className="mt-16 pt-10 border-t border-surface-border space-y-4">
              <p className="text-xs font-mono text-accent uppercase tracking-widest">
                Continue reading
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/blog/busy"
                  className="group block p-5 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-titanium-400">
                      PostgreSQL RLS · FSM · Next.js
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-titanium-50 group-hover:text-accent transition-colors leading-snug">
                    How I Built Busy: Database-first task management
                  </h3>
                </Link>

                <Link
                  href="/blog/swift"
                  className="group block p-5 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-titanium-400">
                      WebRTC · Socket.IO · Redis
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-titanium-50 group-hover:text-accent transition-colors leading-snug">
                    Building Swift Chat: Real-Time Collaboration &amp; Calling
                  </h3>
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar TOC */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-5">
              <div className="p-5 rounded-xl bg-surface border border-surface-border">
                <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-4 pb-3 border-b border-surface-border">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Story Map</span>
                </div>

                <nav className="max-h-[calc(100vh-280px)] overflow-y-auto space-y-1.5 pr-2">
                  {TOC_ITEMS.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-xs font-mono transition-colors py-1 truncate hover:text-accent ${
                        item.level === 1
                          ? "text-titanium-100 font-semibold"
                          : "text-titanium-400 pl-3 border-l border-surface-border"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>

                <div className="mt-5 pt-4 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-titanium-400">
                  <span>16 min read</span>
                  <span className="text-accent">49 commits</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-surface-border space-y-3">
                <p className="text-xs font-mono text-accent uppercase tracking-widest">
                  Project Snapshot
                </p>
                <dl className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between gap-2">
                    <dt className="text-titanium-400">Domain</dt>
                    <dd className="text-titanium-100">placement.ietlucknow.ac.in</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-titanium-400">Framework</dt>
                    <dd className="text-titanium-100">Next.js 14.1 · TS</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-titanium-400">Charts</dt>
                    <dd className="text-titanium-100">Chart.js + custom plugins</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-titanium-400">Mail</dt>
                    <dd className="text-titanium-100">Nodemailer SMTP</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-titanium-400">Repo scale</dt>
                    <dd className="text-titanium-100">318 files · ~99.7 MB</dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
