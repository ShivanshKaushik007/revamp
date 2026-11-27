import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata = {
  title: "Engineering Notes & Build Logs | Shivansh Kaushik",
  description:
    "Writeups on how I built Busy and Swift Chat—covering PostgreSQL Row-Level Security, finite state machines, Socket.IO rooms, and WebRTC.",
};

const articles = [
  {
    slug: "tnp",
    title: "Migrating IET Lucknow's Placement Portal to Next.js 14 & Launching on placement.ietlucknow.ac.in",
    description:
      "The story of migrating and hardening placement.ietlucknow.ac.in—taming giant placement-drive JPGs, fixing card glow overflows, dodging a trailingSlash API trap, and building interactive Chart.js cohorts.",
    date: "March 10, 2026",
    readTime: "16 min read",
    tag: "Institutional Web & Interactive",
    highlights: [
      "Interactive challenge explorer, commit timeline & live Chart.js cohort simulator",
      "Fixed GlowingEffect overflow, PersonCard hydration & hover dead-zone bugs",
      "Zero-CMS fs.readdirSync drive galleries & Nodemailer SMTP recruiter inbox",
      "Deployed on the official college subdomain placement.ietlucknow.ac.in",
    ],
    stack: ["Next.js", "TypeScript", "Chart.js", "Nodemailer", "GSAP", "Motion"],
    image: "/assets/tnp.png",
  },
  {
    slug: "busy",
    title: "How I Built Busy: A Deep Dive into a Project & Task Management Platform",
    description:
      "How I designed and built Busy from the database up in ~16 hours, the mistakes I corrected along the way, and what I learned using PostgreSQL Row-Level Security, finite state machines, and DFS dependency checks.",
    date: "September 14, 2026",
    readTime: "31 min read",
    tag: "Databases & State",
    highlights: [
      "Database-first schema design & PostgreSQL Row-Level Security",
      "Task lifecycle modeled as a finite state machine",
      "Graph traversal cycle detection for task dependencies",
      "Next.js Server Actions as a typed transactional layer",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "RLS", "Server Actions"],
    image: "/Busy.png",
  },
  {
    slug: "swift",
    title: "Building Swift Chat: Turning a Simple Chat Idea into a Real-Time Collaboration App",
    description:
      "A walkthrough of how Swift Chat grew from basic socket messages into channels, threaded replies, Cloudinary attachments, scheduled messages, and 1-to-1 WebRTC calling.",
    date: "September 4, 2026",
    readTime: "12 min read",
    tag: "Real-Time & WebRTC",
    highlights: [
      "User & channel rooms in Socket.IO with optional Redis adapter",
      "1:1 WebRTC voice and video signaling over Socket.IO",
      "Threaded replies, mentions, and cron-scheduled delivery",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "WebRTC", "Redis"],
    image: "/assets/swift.png",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/"
            className="text-xs font-mono text-titanium-400 hover:text-accent transition-colors"
          >
            ← Back to portfolio
          </Link>

          <span className="text-xs font-mono text-titanium-400">
            {articles.length} build logs
          </span>
        </div>

        <header className="mb-12 pb-10 border-b border-surface-border">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
            Notes & Build Logs
          </p>
          <h1 className="h1 text-titanium-50 mb-4">
            Engineering{" "}
            <span className="font-editorial text-accent font-normal">notes</span>
          </h1>
          <p className="max-w-2xl text-base text-titanium-300 leading-relaxed">
            Long-form writeups on how specific projects were structured, what broke along the way, and the trade-offs I made.
          </p>
        </header>

        <div className="space-y-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-titanium-600 transition-colors group"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs font-mono text-titanium-400">
                <div className="flex items-center gap-3">
                  <span className="text-accent">{art.tag}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-accent" />
                    {art.readTime}
                  </span>
                </div>

                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {art.date}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
                <div className="lg:col-span-7">
                  <Link href={`/blog/${art.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-titanium-50 group-hover:text-accent transition-colors mb-3">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-titanium-300 leading-relaxed mb-5">
                    {art.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {art.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2 text-xs text-titanium-300">
                        <span className="text-accent font-mono">—</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {art.stack.map((st) => (
                      <span
                        key={st}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary border border-surface-border text-titanium-300"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {art.image && (
                  <div className="lg:col-span-5 w-full">
                    <Link
                      href={`/blog/${art.slug}`}
                      className="block rounded-xl overflow-hidden border border-surface-border bg-primary hover:border-accent/50 transition-colors"
                    >
                      <div className="relative h-48 sm:h-56 w-full bg-[#0E0E11]">
                        <Image
                          src={art.image}
                          alt={art.title}
                          fill
                          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center justify-between">
                <Link
                  href={`/blog/${art.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-accent hover:text-accent-hover transition-colors"
                >
                  <span>Read full build log</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
