"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  BookOpen,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import ClickSpark from "@/components/ui/ClickSpark";
import StarBorder from "@/components/ui/StarBorder";

const projects = [
  {
    id: "swift-chat",
    num: "01",
    title: "Swift Chat",
    tagline: "Real-time messaging, threads, and 1-to-1 WebRTC calling",
    category: "Real-Time",
    domain: "swift-qko3.onrender.com",
    featured: true,
    description:
      "A team chat app built with React, TypeScript, Express, MongoDB, and Socket.IO. Supports direct messages, group channels, threaded replies, file uploads via Cloudinary, cron-scheduled messages, and peer-to-peer audio/video calls.",
    trickyNote:
      "Getting WebRTC call teardown right—cleaning up media tracks, handling rejected offers, and logging call history back into the chat thread—took way more care than the messaging layer itself.",
    highlights: [
      "User-scoped & channel-scoped Socket.IO rooms with optional Redis adapter",
      "WebRTC signaling over Socket.IO for 1:1 voice and video calls",
      "Threaded replies, emoji reactions, mentions, and cron-scheduled sends",
    ],
    stack: ["React", "TypeScript", "Vite", "Node.js", "Socket.IO", "WebRTC", "MongoDB", "Redis"],
    image: "/assets/swift.png",
    live: "https://swift-qko3.onrender.com/",
    github: "https://github.com/ShivanshKaushik007/swift",
    blogUrl: "/blog/swift",
  },
  {
    id: "busy",
    num: "02",
    title: "Busy",
    tagline: "Issue & sprint tracker backed by PostgreSQL Row-Level Security",
    category: "Full-Stack",
    domain: "busy-one.vercel.app",
    featured: true,
    description:
      "A project and task management app built from the database up in ~16 hours with Next.js, TypeScript, and Supabase. Uses a finite state machine for task transitions, graph cycle detection for blockers, and audit logs.",
    trickyNote:
      "Instead of trusting every API handler to remember permission checks, Row-Level Security enforces workspace isolation inside Postgres itself—so even an overlooked query fails closed.",
    highlights: [
      "PostgreSQL Row-Level Security enforcing multi-project access rules",
      "Finite state machine preventing invalid task status jumps",
      "DFS cycle detection blocking circular task dependencies",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "RLS", "Server Actions"],
    image: "/assets/Busy.png",
    live: "https://busy-one.vercel.app",
    github: "https://github.com/ShivanshKaushik007/Busy",
    blogUrl: "/blog/busy",
  },
  {
    id: "livenote",
    num: "03",
    title: "LiveNote",
    tagline: "Multiplayer rich-text docs with live cursors and comments",
    category: "Real-Time",
    domain: "livenote-tau.vercel.app",
    description:
      "Collaborative document workspace built around Liveblocks so multiple people can edit the same doc, see live cursors, and leave anchored comments.",
    highlights: [
      "Conflict-free live editing and cursor presence via Liveblocks",
      "Document-level sharing permissions with Clerk authentication",
    ],
    stack: ["Next.js", "TypeScript", "Liveblocks", "Clerk", "Tailwind CSS"],
    image: "/assets/livenote.png",
    live: "https://livenote-tau.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/livenote",
  },
  {
    id: "fineasy",
    num: "04",
    title: "FinEasy",
    tagline: "Personal budget & expense tracker with AI spending notes",
    category: "Full-Stack",
    domain: "fin-easy.vercel.app",
    description:
      "Personal finance dashboard for tracking income streams, setting category budgets, and generating budget suggestions from recent spending patterns.",
    highlights: [
      "Category-wise budget tracking with interactive spending summaries",
      "OpenAI-powered expense review prompts and budget tips",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "OpenAI API"],
    image: "/assets/fineasy.png",
    live: "https://fin-easy.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/FinEasy",
  },
  {
    id: "ecell",
    num: "05",
    title: "E-Cell IET Lucknow",
    tagline: "Official web portal for our campus entrepreneurship cell",
    category: "Campus & Web",
    domain: "e-cell-iet-lko.vercel.app",
    description:
      "Campus entrepreneurship hub built and maintained for E-Cell IET Lucknow—handling summit announcements, speaker lineups, and registrations for 1,200+ students.",
    highlights: [
      "Event registration flows and summit schedules for campus-wide events",
      "Interactive 3D globe and smooth motion transitions",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    image: "/assets/Ecell.png",
    live: "https://e-cell-iet-lko.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/E-cell",
  },
  {
    id: "hult-prize",
    num: "06",
    title: "Hult Prize IET Lucknow",
    tagline: "Competition hub for the On-Campus Hult Prize edition",
    category: "Campus & Web",
    domain: "hult-iet-lko.vercel.app",
    description:
      "Event website built for the IET Lucknow On-Campus Hult Prize—guiding 50+ student teams through registration, round timelines, and pitch submissions.",
    highlights: [
      "Team registration & round-by-round schedule for 50+ teams",
      "Downloadable competition brochure and FAQ section",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    image: "/assets/Hult.png",
    live: "https://hult-iet-lko.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/hult",
  },
];

const categories = ["All", "Real-Time", "Full-Stack", "Campus & Web"];

const BrowserFrame = ({ domain, image, title, live, tall = false }) => (
  <a
    href={live}
    target="_blank"
    rel="noopener noreferrer"
    className="block rounded-xl overflow-hidden border border-surface-border bg-primary group/frame hover:border-accent/40 transition-colors"
  >
    {/* Minimal window chrome */}
    <div className="px-3.5 py-2 bg-surface-muted border-b border-surface-border flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-titanium-600 group-hover/frame:bg-[#E06C75] transition-colors" />
        <span className="w-2 h-2 rounded-full bg-titanium-600 group-hover/frame:bg-[#E5C07B] transition-colors" />
        <span className="w-2 h-2 rounded-full bg-titanium-600 group-hover/frame:bg-[#5BB98C] transition-colors" />
      </div>
      <span className="text-[11px] font-mono text-titanium-400 truncate max-w-[200px]">
        {domain}
      </span>
      <ArrowUpRight className="w-3.5 h-3.5 text-titanium-500 group-hover/frame:text-accent transition-colors" />
    </div>

    <div className={`relative w-full overflow-hidden bg-[#0E0E11] ${tall ? "h-[240px] sm:h-[310px]" : "h-48 sm:h-52"}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-top group-hover/frame:scale-[1.02] transition-transform duration-500 ease-out"
      />
    </div>
  </a>
);

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openNoteId, setOpenNoteId] = useState("swift-chat");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const gridProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
              03 / Selected Work
            </p>
            <h2 className="h2 text-titanium-50">
              Things I've{" "}
              <span className="font-editorial text-accent font-normal">
                built & shipped
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <ClickSpark
                key={cat}
                className="inline-flex !w-auto !h-auto shrink-0"
                sparkColor={["#F27D42", "#FAF8F5"]}
                sparkSize={8}
                sparkRadius={18}
                sparkCount={6}
                duration={340}
              >
                <button
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0 ${
                    activeCategory === cat
                      ? "bg-titanium-50 text-primary font-semibold"
                      : "text-titanium-400 hover:text-titanium-100 border border-surface-border"
                  }`}
                >
                  {cat}
                </button>
              </ClickSpark>
            ))}
          </div>
        </div>

        {/* Featured Case Studies (Swift Chat & Busy) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-8 mb-12">
            {featuredProjects.map((project, idx) => {
              const isNoteOpen = openNoteId === project.id;
              const reverse = idx % 2 === 1;

              return (
                <article
                  key={project.id}
                  className="rounded-2xl p-5 sm:p-8 bg-surface border border-surface-border hover:border-titanium-600 transition-colors overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className={`lg:col-span-6 min-w-0 ${reverse ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-3 mb-3 text-xs font-mono text-titanium-400">
                        <span className="text-accent">{project.num}</span>
                        <span>/</span>
                        <span>{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-titanium-50 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-accent font-medium mb-4">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-titanium-300 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <ul className="space-y-1.5 mb-5">
                        {project.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-titanium-300">
                            <span className="text-accent font-mono mt-0.5">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expandable candid engineering note */}
                      {project.trickyNote && (
                        <div className="mb-6">
                          <button
                            type="button"
                            onClick={() => setOpenNoteId(isNoteOpen ? null : project.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-titanium-300 hover:text-accent transition-colors"
                          >
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${
                                isNoteOpen ? "rotate-180 text-accent" : ""
                              }`}
                            />
                            <span>{isNoteOpen ? "Hide build note" : "Read what was tricky"}</span>
                          </button>

                          {isNoteOpen && (
                            <div className="mt-2.5 pl-3.5 border-l-2 border-accent/60 text-xs sm:text-sm text-titanium-300 leading-relaxed">
                              {project.trickyNote}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-primary border border-surface-border text-titanium-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-surface-border text-xs font-mono">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-titanium-50 hover:text-accent transition-colors font-semibold"
                        >
                          <span>Live app</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-titanium-400 hover:text-titanium-100 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source</span>
                        </a>

                        {project.blogUrl && (
                          <Link
                            href={project.blogUrl}
                            className="ml-auto inline-flex"
                          >
                            <StarBorder
                              as="span"
                              color="#F27D42"
                              trailColor="#FFD36E"
                              backgroundColor="#0C0C0E"
                              textColor="#F27D42"
                              borderColor="rgba(242, 125, 66, 0.28)"
                              radius={999}
                              thickness={1.1}
                              duration={4.5}
                              glow={0.45}
                              hover="reveal"
                              className="!px-3.5 !py-1.5 text-xs font-mono"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Read build log</span>
                              <ArrowRight className="w-3 h-3" />
                            </StarBorder>
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className={`lg:col-span-6 min-w-0 ${reverse ? "lg:order-1" : ""}`}>
                      <BrowserFrame
                        domain={project.domain}
                        image={project.image}
                        title={project.title}
                        live={project.live}
                        tall
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Remaining Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {gridProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 bg-surface border border-surface-border hover:border-titanium-600 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs font-mono text-titanium-400">
                    <span>
                      <span className="text-accent">{project.num}</span> / {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-titanium-100 transition-colors inline-flex items-center gap-1"
                      title="View source on GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>code</span>
                    </a>
                  </div>

                  <BrowserFrame
                    domain={project.domain}
                    image={project.image}
                    title={project.title}
                    live={project.live}
                  />

                  <h4 className="text-xl font-heading font-bold text-titanium-50 mt-5 mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-accent mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-titanium-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map((st) => (
                      <span
                        key={st}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary border border-surface-border text-titanium-400"
                      >
                        {st}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-surface-border flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-titanium-100 hover:text-accent transition-colors"
                    >
                      <span>Visit site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-titanium-500 truncate max-w-full">{project.domain}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
