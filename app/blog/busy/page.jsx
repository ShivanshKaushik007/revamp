import Link from "next/link";
import Image from "next/image";
import { getBusyBlogData } from "@/lib/blog";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  ArrowRight,
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
        <h1 className="text-3xl font-bold text-titanium-50 mb-4">Post not found</h1>
        <Link href="/blog" className="text-accent hover:underline">
          Return to notes
        </Link>
      </div>
    );
  }

  const { frontmatter, headings, htmlContent, readTime } = blogData;

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

          <Link href="/" className="text-titanium-400 hover:text-titanium-100 transition-colors">
            / home
          </Link>
        </div>
      </div>

      <article className="container mx-auto max-w-6xl px-4 sm:px-6">
        <header className="border-b border-surface-border pb-10 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono text-titanium-400">
            <span className="text-accent font-semibold">Build Log</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {readTime}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              September 14, 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-titanium-50 tracking-tight leading-[1.12] mb-5 max-w-4xl">
            {frontmatter.title}
          </h1>

          <p className="text-base sm:text-lg text-titanium-300 leading-relaxed max-w-3xl mb-8">
            {frontmatter.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-surface-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center font-mono font-bold text-accent text-xs shrink-0">
                SK
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-titanium-50">
                  {frontmatter.author || "Shivansh Kaushik"}
                </p>
                <p className="text-xs font-mono text-titanium-400">
                  IET Lucknow
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 max-w-xl">
              {(frontmatter.tags || []).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-surface-border text-titanium-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Interface Preview */}
        <div className="mb-12 rounded-xl overflow-hidden border border-surface-border bg-primary">
          <div className="bg-surface-muted px-4 py-2.5 border-b border-surface-border flex items-center justify-between text-xs font-mono text-titanium-400">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E06C75]" />
                <span className="w-2 h-2 rounded-full bg-[#E5C07B]" />
                <span className="w-2 h-2 rounded-full bg-[#5BB98C]" />
              </div>
              <span className="ml-2 text-titanium-200">busy-one.vercel.app</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://busy-one.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-accent hover:underline"
              >
                <span>Live app</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/ShivanshKaushik007/Busy"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-[11px] text-titanium-300 hover:text-titanium-50"
              >
                <Github className="w-3 h-3" />
                <span>Source</span>
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[16/8.2] bg-[#0E0E11] overflow-hidden">
            <Image
              src="/Busy.png"
              alt="Busy Active Sprint Board Interface"
              fill
              priority
              className="object-cover object-top"
            />
          </div>

          <div className="px-4 py-2.5 bg-surface border-t border-surface-border text-xs font-mono text-titanium-400">
            Active Sprint Kanban Board with state-machine transitions, blockers, and keyboard shortcuts.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 max-w-none min-w-0">
            {/* Mobile TOC */}
            <div className="block lg:hidden mb-8 p-4 rounded-xl bg-surface border border-surface-border">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-mono text-accent uppercase tracking-wider font-semibold select-none">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Contents ({headings.length})</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-titanium-400 group-open:rotate-180 transition-transform" />
                </summary>
                <nav className="mt-4 pt-3 border-t border-surface-border space-y-2 max-h-72 overflow-y-auto pr-2 no-scrollbar">
                  {headings.map((h, idx) => (
                    <a
                      key={idx}
                      href={`#${h.id}`}
                      className={`block text-xs font-mono transition-colors py-1 ${
                        h.level === 1
                          ? "text-titanium-100 font-semibold"
                          : "text-titanium-400 pl-3 border-l border-surface-border hover:text-titanium-50"
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

            <div className="mt-16 pt-10 border-t border-surface-border">
              <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">
                Next note
              </p>
              <Link
                href="/blog/swift"
                className="group block p-6 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-titanium-400">
                    WebRTC · Socket.IO · MongoDB
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-xl font-heading font-bold text-titanium-50 group-hover:text-accent transition-colors">
                  Building Swift Chat: Turning a Simple Chat Idea into a Real-Time Collaboration App
                </h3>
              </Link>
            </div>
          </div>

          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 p-5 rounded-xl bg-surface border border-surface-border">
              <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-4 pb-3 border-b border-surface-border">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Contents</span>
              </div>

              <nav className="max-h-[calc(100vh-220px)] overflow-y-auto space-y-1 pr-2">
                {headings.map((h, idx) => (
                  <a
                    key={idx}
                    href={`#${h.id}`}
                    className={`block text-xs font-mono transition-colors py-1 truncate hover:text-accent ${
                      h.level === 1
                        ? "text-titanium-100 font-semibold"
                        : "text-titanium-400 pl-3 border-l border-surface-border"
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>

              <div className="mt-5 pt-4 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-titanium-400">
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
