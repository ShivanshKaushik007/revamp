"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  BookOpen,
  Radio,
  Layers,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "swift-chat",
    num: "01",
    title: "Swift Chat",
    tagline: "Enterprise-grade real-time collaboration with WebRTC & WebSockets",
    category: "Real-time & Distributed",
    type: "Flagship",
    description:
      "A full-stack, distributed messaging and voice/video calling platform engineered for high-throughput teams. Features ephemeral typing indicators, channel broadcasting, thread hierarchies, Redis-backed socket scaling, and peer-to-peer WebRTC signaling.",
    highlights: [
      "Sub-50ms message latency with Socket.IO & Redis adapter",
      "P2P WebRTC audio/video calling with ICE/STUN signaling",
      "Background scheduled message delivery via cron workers",
      "End-to-end security with JWTs, bcrypt & rate limiting",
    ],
    stack: ["React", "TypeScript", "Node.js", "Socket.io", "WebRTC", "Redis", "MongoDB", "Cloudinary"],
    image: "/assets/swift.png",
    live: "https://swift-qko3.onrender.com/",
    github: "https://github.com/ShivanshKaushik007/swift",
    blogUrl: "/blog/swift",
  },
  {
    id: "busy",
    num: "02",
    title: "Busy",
    tagline: "Multi-project task platform with PostgreSQL RLS & state machines",
    category: "Full-Stack",
    type: "Featured",
    description:
      "A production-style project and task management system built with Next.js, Supabase, and PostgreSQL. Features a finite state machine task lifecycle, graph cycle detection for dependencies, immutable audit logs, and bulletproof Row-Level Security.",
    highlights: [
      "Database-enforced security with PostgreSQL Row Level Security",
      "Finite state machine preventing illegal task status transitions",
      "Graph traversal algorithm detecting & reporting circular dependencies",
      "Server actions as a type-safe transactional backend pipeline",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Row Level Security", "Server Actions"],
    image: "/assets/Busy.png",
    live: "https://busy-one.vercel.app",
    github: "https://github.com/ShivanshKaushik007/Busy",
    blogUrl: "/blog/busy",
  },
  {
    id: "livenote",
    num: "03",
    title: "LiveNote",
    tagline: "Concurrent collaborative document editor inspired by Google Docs",
    category: "Full-Stack",
    type: "Featured",
    description:
      "Real-time multi-user document engine allowing frictionless parallel editing, presence tracking, live cursor streaming, and conflict-free text synchronization.",
    highlights: [
      "Real-time state synchronization via Liveblocks & WebSockets",
      "Granular permission and room access control with Clerk auth",
      "Dynamic document commenting and live cursor position broadcasting",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Liveblocks", "Clerk", "Shadcn UI"],
    image: "/assets/livenote.png",
    live: "https://livenote-tau.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/livenote",
  },

  {
    id: "fineasy",
    num: "03",
    title: "FinEasy",
    tagline: "AI-assisted financial forecasting & expense analytics platform",
    category: "AI & Full-Stack",
    type: "Featured",
    description:
      "Intelligent personal finance suite providing automatic transaction categorization, spending heatmaps, and OpenAI-driven predictive budget recommendations.",
    highlights: [
      "AI-driven expenditure anomaly detection and budget coaching",
      "Interactive data visualizations and categorized ledger exports",
      "Responsive responsive dashboard with real-time currency converters",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "OpenAI API"],
    image: "/assets/fineasy.png",
    live: "https://fin-easy.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/FinEasy",
  },
  {
    id: "ecell",
    num: "04",
    title: "E-Cell IET Lucknow",
    tagline: "Flagship digital portal for premier college entrepreneurship cell",
    category: "Platform",
    type: "Featured",
    description:
      "High-performance organizational web application serving 1,200+ students, mentors, and corporate partners. Hosts event registration pipelines, hackathon registries, and sponsor portals.",
    highlights: [
      "Handled 1,200+ event registrations with zero downtime",
      "Modern design system with interactive animations and fast load times",
      "Centralized event schedules, guest speaker rosters, and team directories",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    image: "/assets/Ecell.png",
    live: "https://e-cell-iet-lko.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/E-cell",
  },
  {
    id: "hult-prize",
    num: "05",
    title: "Hult Prize IET Lucknow",
    tagline: "Official social entrepreneurship competition portal",
    category: "Platform",
    type: "Standard",
    description:
      "Interactive competition portal facilitating student team registrations, pitch deck submissions, and event live-streams for the On-Campus Hult Prize edition.",
    highlights: [
      "Streamlined registration flow for 50+ startup challenge teams",
      "Dynamic timeline and stage-by-stage competition announcements",
    ],
    stack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    image: "/assets/Hult.png",
    live: "https://hult-iet-lko.vercel.app/",
    github: "https://github.com/ShivanshKaushik007/hult",
  },
];

const categories = ["All Works", "Real-time & Distributed", "Full-Stack", "Platform"];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredProjects =
    activeCategory === "All Works"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const flagship = projects[0];
  const gridProjects = filteredProjects.filter((p) => p.id !== "swift-chat");

  return (
    <section id="work" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Engineering Works</span>
            </div>
            <h2 className="h2 text-white font-heading font-extrabold">
              Featured Systems & Case Studies.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-titanium-300 font-sans leading-relaxed">
            Real-world web platforms engineered with scalability, low latency, and meticulously crafted interfaces in mind.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto no-scrollbar pb-2 flex-nowrap sm:flex-wrap">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 shrink-0 ${
                activeCategory === cat
                  ? "bg-accent text-primary font-semibold shadow-lg shadow-sky-500/20"
                  : "bg-white/[0.03] border border-white/10 text-titanium-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 1. Flagship Showcase Card (Swift Chat) */}
        {(activeCategory === "All Works" || activeCategory === "Real-time & Distributed") && (
          <div className="mb-12 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#121420] via-[#0F111B] to-[#0A0B10] border border-white/10 hover:border-accent/40 shadow-2xl transition-all duration-500 relative overflow-hidden group">
            {/* Subtle glow orb */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column: Case Study Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold flex items-center gap-1.5">
                      <Radio className="w-3 h-3 animate-pulse" />
                      FLAGSHIP SYSTEM
                    </span>
                    <span className="text-xs font-mono text-titanium-400">#01 // REAL-TIME</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-heading font-extrabold text-white mb-2 tracking-tight">
                    {flagship.title}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-4 font-sans">
                    {flagship.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-titanium-300 leading-relaxed mb-6 font-sans">
                    {flagship.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {flagship.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-titanium-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {flagship.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-titanium-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                  <a href={flagship.live} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="md" variant="default" className="w-full sm:w-auto justify-center gap-2">
                      <span>Live Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </a>

                  <a href={flagship.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button size="md" variant="secondary" className="w-full sm:w-auto justify-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </Button>
                  </a>

                  {flagship.blogUrl && (
                    <Link href={flagship.blogUrl} className="w-full sm:w-auto">
                      <Button size="md" variant="outline" className="w-full sm:w-auto justify-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Architecture Journal</span>
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Visual Frame */}
              <div className="lg:col-span-6">
                <a
                  href={flagship.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden border border-white/10 bg-[#090A10] p-3 shadow-2xl group/img"
                >
                  <div className="relative h-[280px] sm:h-[380px] w-full rounded-xl overflow-hidden bg-[#12141F]">
                    <Image
                      src={flagship.image}
                      alt={flagship.title}
                      fill
                      className="object-contain p-4 group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-titanium-300 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                      <span>WebRTC • Socket.IO Mesh</span>
                      <span className="text-accent flex items-center gap-1">
                        Inspect App <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 2. Bento Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence>
            {gridProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-3xl p-6 sm:p-8 bg-[#11131C]/90 border border-white/[0.08] hover:border-accent/30 hover:bg-[#141624] transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-titanium-500">
                      {project.num}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-titanium-400 mb-4">
                    {project.tagline}
                  </p>

                  {/* Image Preview Box */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden border border-white/10 bg-[#090A0F] mb-6 group/box"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4 group-hover/box:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C12]/90 via-transparent to-transparent" />
                  </a>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-titanium-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-titanium-400">
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((st, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-titanium-400"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-white transition-colors"
                    >
                      <span>Launch Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    {project.blogUrl && (
                      <Link
                        href={project.blogUrl}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-titanium-400 hover:text-accent transition-colors"
                      >
                        <span>Deep Dive</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-titanium-300 hover:text-white hover:border-accent/40 transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Work;
