import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Clock,
  Calendar,
  BookOpen,
  ArrowUpRight,
  Layers,
  Database,
  Radio,
} from "lucide-react";

export const metadata = {
  title: "Architecture Journals & Engineering Case Studies | Shivansh Kaushik",
  description:
    "In-depth technical writeups and system design explorations covering PostgreSQL Row Level Security, real-time WebRTC/WebSockets, state machines, and full-stack web architecture.",
};

const articles = [
  {
    slug: "busy",
    title: "How I Built Busy: A Deep Dive into a Project & Task Management Platform",
    description:
      "How I designed and built Busy from the database up, why I made the architectural choices I did, the mistakes I corrected, and what I learned building a production-style task management system with PostgreSQL Row Level Security, finite state machines, and graph dependency cycle detection.",
    date: "September 14, 2026",
    readTime: "31 min read",
    tag: "System Design & Databases",
    highlights: [
      "Database-first schema design & PostgreSQL Row Level Security",
      "Task lifecycle modeled as a Finite State Machine",
      "Graph traversal cycle detection for task dependencies",
      "Server actions as a type-safe transactional backend layer",
      "Immutable audit trail & server-side URL state filtering",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Row Level Security", "Server Actions"],
    image: "/Busy.png",
    featured: true,
  },
  {
    slug: "swift",
    title: "Building Swift Chat: Turning a Simple Chat Idea into a Real-Time Collaboration App",
    description:
      "A behind-the-scenes look at a full-stack real-time collaboration platform built with React, TypeScript, Express, MongoDB, Socket.IO, Cloudinary, and WebRTC peer calling.",
    date: "September 4, 2026",
    readTime: "12 min read",
    tag: "Real-time & Distributed",
    highlights: [
      "Sub-50ms message latency with Socket.IO room architecture",
      "P2P WebRTC audio/video calling flow & ICE candidate signaling",
      "Redis adapter for multi-instance socket broadcasting",
      "Background scheduled message execution via cron workers",
    ],
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "WebRTC", "Redis"],
    image: "/assets/swift.png",
    featured: true,
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen py-12 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-titanium-400 hover:text-accent transition-colors py-1.5 px-3 rounded-full bg-white/[0.03] border border-white/10"
          >
            <span>← Return to Portfolio Home</span>
          </Link>

          <span className="text-xs font-mono text-titanium-400">
            {articles.length} Engineering Journals Published
          </span>
        </div>

        {/* Page Header */}
        <header className="mb-14 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Publications & Case Studies</span>
          </div>
          <h1 className="h1 text-white font-heading font-extrabold tracking-tight mb-5">
            Architecture Journals.
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-titanium-300 font-sans leading-relaxed">
            Detailed, transparent writeups exploring system architecture, real-time protocols, database security, and the engineering decisions behind real-world products.
          </p>
        </header>

        {/* Articles List */}
        <div className="space-y-10 sm:space-y-12">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-10 rounded-3xl bg-[#11131C] border border-white/10 hover:border-accent/30 hover:bg-[#141624] transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle ambient light */}
              <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between">
                <div>
                  {/* Top Metadata Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                        {art.tag}
                      </span>
                      <span className="text-xs font-mono text-titanium-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accent" />
                        {art.readTime}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-titanium-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-titanium-400" />
                      {art.date}
                    </span>
                  </div>

                  {/* Grid of Content & Image Preview */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
                    <div className={art.image ? "lg:col-span-7" : "lg:col-span-12"}>
                      {/* Title & Excerpt */}
                      <Link href={`/blog/${art.slug}`}>
                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-accent transition-colors mb-3 tracking-tight">
                          {art.title}
                        </h2>
                      </Link>

                      <p className="text-sm sm:text-base text-titanium-300 leading-relaxed font-sans mb-6">
                        {art.description}
                      </p>

                      {/* Highlights Bullet List */}
                      <div className="space-y-2 mb-6">
                        {art.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-titanium-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {art.stack.map((st, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-titanium-300"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Preview Box */}
                    {art.image && (
                      <div className="lg:col-span-5 w-full">
                        <Link
                          href={`/blog/${art.slug}`}
                          className="block relative rounded-2xl overflow-hidden border border-white/10 bg-[#090A0F] shadow-xl group/img hover:border-accent/40 transition-all duration-300"
                        >
                          <div className="relative h-48 sm:h-60 w-full bg-[#0E101A]">
                            <Image
                              src={art.image}
                              alt={art.title}
                              fill
                              className="object-contain p-3 group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#090A10]/80 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-titanium-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                              <span>Production Architecture</span>
                              <span className="text-accent flex items-center gap-1">
                                Inspect Deep Dive →
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>

                {/* Read Deep Dive Action */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
                  >
                    <span>Read Full Deep Dive</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-xs font-mono text-titanium-400">
                    Comprehensive Technical Review →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
