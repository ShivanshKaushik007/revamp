import Link from "next/link";
import Image from "next/image";
import { getBusyBlogData } from "@/lib/blog";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Share2,
  BookOpen,
  ArrowRight,
  Shield,
  ExternalLink,
  Github,
  ChevronDown,
} from "lucide-react";

export const metadata = {
  title: "How I Built Busy: A Deep Dive into a Project & Task Management Platform | Shivansh Kaushik",
  description:
    "How I designed and built Busy from the database up, why I made the architectural choices I did, the mistakes I corrected, and what I learned building a production-style task management system in about 16 hours.",
  keywords: [
    "Busy",
    "Next.js",
    "PostgreSQL",
    "Row Level Security",
    "Supabase",
    "Server Actions",
    "Task Management",
    "System Design",
    "Shivansh Kaushik",
  ],
};

export default function BusyBlogPage() {
  const blogData = getBusyBlogData();

  if (!blogData) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Post not found</h1>
        <Link href="/blog" className="text-accent hover:underline">
          Return to Journal
        </Link>
      </div>
    );
  }

  const { frontmatter, headings, htmlContent, readTime } = blogData;

  return (
    <main className="min-h-screen py-10 sm:py-16">
      {/* Top Header Navigation */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 mb-10">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-titanium-400 hover:text-accent transition-colors py-1 px-3 rounded-full bg-white/[0.03] border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Architecture Journals</span>
          </Link>

          <Link
            href="/"
            className="text-xs font-mono text-titanium-400 hover:text-white transition-colors"
          >
            / portfolio home
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <article className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              SYSTEM DESIGN DEEP DIVE
            </span>
            <span className="text-xs font-mono text-titanium-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {readTime}
            </span>
            <span className="text-xs font-mono text-titanium-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              September 14, 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12] mb-6 max-w-4xl">
            {frontmatter.title}
          </h1>

          <p className="text-base sm:text-xl text-titanium-300 font-sans leading-relaxed max-w-3xl mb-8">
            {frontmatter.description}
          </p>

          {/* Author Chip & Tags */}
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6 pt-6 border-t border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-elevated border border-white/15 flex items-center justify-center font-bold text-accent text-sm shrink-0">
                SK
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-white">
                  {frontmatter.author || "Shivansh Kaushik"}
                </p>
                <p className="text-xs font-mono text-titanium-400">
                  Full-Stack Software Engineer
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 max-w-xl w-full sm:w-auto">
              {(frontmatter.tags || []).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-titanium-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Interface Showcase Banner */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-white/10 bg-[#090A10] shadow-2xl group">
          <div className="bg-[#12141F] px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-titanium-400">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="ml-2 text-white font-medium">Busy — Active Sprint Kanban Board</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://busy-one.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-accent hover:text-white transition-colors bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/ShivanshKaushik007/Busy"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-titanium-300 hover:text-white transition-colors bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10"
              >
                <Github className="w-3 h-3" />
                <span>Source</span>
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[16/8.2] bg-[#090A0F] overflow-hidden">
            <Image
              src="/Busy.png"
              alt="Busy Active Sprint Board Interface"
              fill
              priority
              className="object-contain object-top p-2 sm:p-4 group-hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="p-3.5 sm:p-4 bg-[#0E101A] border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-titanium-400 gap-2">
            <span>Figure 1.0 — Active Sprint Kanban Board with custom status transitions, blockers, and keyboard shortcuts.</span>
            <span className="text-accent flex items-center gap-1">Production UI</span>
          </div>
        </div>

        {/* Content Layout: Main Reading Column + Sticky TOC Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Reading Body */}
          <div className="lg:col-span-8 max-w-none">
            {/* Collapsible Table of Contents for Mobile & Tablet (< 1024px) */}
            <div className="block lg:hidden mb-8 p-4 sm:p-5 rounded-2xl bg-[#11131C] border border-white/10 shadow-lg">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-mono text-accent uppercase tracking-wider font-semibold select-none">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Table of Contents ({headings.length} Sections)</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-titanium-400 group-open:rotate-180 transition-transform" />
                </summary>
                <nav className="mt-4 pt-3 border-t border-white/10 space-y-2 max-h-72 overflow-y-auto pr-2 no-scrollbar">
                  {headings.map((h, idx) => (
                    <a
                      key={idx}
                      href={`#${h.id}`}
                      className={`block text-xs font-mono transition-colors py-1 ${
                        h.level === 1
                          ? "text-titanium-200 font-semibold"
                          : "text-titanium-400 pl-3 border-l border-white/10 hover:text-white"
                      }`}
                    >
                      {h.text}
                    </a>
                  ))}
                </nav>
              </details>
            </div>

            <div
              className="prose-editorial"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Bottom Next Article Recommendation */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                Next in Journal //
              </p>
              <Link
                href="/blog/swift"
                className="group block p-6 sm:p-8 rounded-3xl bg-[#11131C] border border-white/10 hover:border-accent/40 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-titanium-400">
                    Real-time collaboration • WebRTC & Socket.IO
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors">
                  Building Swift Chat: Turning a Simple Chat Idea into a Real-Time Collaboration App
                </h3>
              </Link>
            </div>
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 p-6 rounded-3xl bg-[#11131C]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-4 pb-3 border-b border-white/10">
                <BookOpen className="w-4 h-4" />
                <span>Table of Contents</span>
              </div>

              <nav className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-1 pr-2 scrollbar-thin">
                {headings.map((h, idx) => (
                  <a
                    key={idx}
                    href={`#${h.id}`}
                    className={`block text-xs font-mono transition-colors py-1 truncate hover:text-accent ${
                      h.level === 1
                        ? "text-titanium-200 font-semibold"
                        : "text-titanium-400 pl-3 border-l border-white/10"
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-titanium-400">
                <span>{readTime}</span>
                <span className="text-accent">{blogData.wordCount} words</span>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
