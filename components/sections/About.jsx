"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";

const notes = [
  {
    slug: "/blog/busy",
    date: "Sep 14, 2026",
    readTime: "31 min read",
    title: "How I Built Busy: Database-first task management with PostgreSQL RLS",
    summary:
      "Designing finite state machines, DFS dependency cycle checks, and Row-Level Security policies in ~16 hours.",
  },
  {
    slug: "/blog/swift",
    date: "Sep 04, 2026",
    readTime: "12 min read",
    title: "Building Swift Chat: Real-time rooms, threads, and WebRTC calls",
    summary:
      "Moving beyond a basic chat demo into Socket.IO rooms, Cloudinary media, cron schedules, and peer calling.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Human Story */}
          <div className="lg:col-span-7">
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
              04 / About
            </p>
            <h2 className="h2 text-titanium-50 mb-6">
              A little more{" "}
              <span className="font-editorial text-accent font-normal">
                context
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-titanium-300 leading-relaxed">
              <p>
                I'm currently in my third/fourth year studying Computer Science at{" "}
                <span className="text-titanium-100 font-medium">IET Lucknow</span>. Most of what I know came from picking a problem I didn't fully understand—like Postgres Row-Level Security or WebRTC peer state—and building an app around it until the edges stopped breaking.
              </p>
              <p>
                Outside of personal builds, I spend a lot of time working with student teams: running technical operations for{" "}
                <span className="text-titanium-100 font-medium">E-Cell</span> and{" "}
                <span className="text-titanium-100 font-medium">Hult Prize</span> on campus, and coordinating recruitment drives with the Training & Placement Cell.
              </p>
              <p className="text-titanium-400">
                Right now I'm looking for 2027 software engineering internships or full-time roles where I can work across the stack and learn from strong product engineers.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-titanium-400">
              <span className="inline-flex items-center gap-1.5 text-titanium-200">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Lucknow, India
              </span>
              <span>Open to Bengaluru · Delhi-NCR · Mumbai · Remote</span>
            </div>
          </div>

          {/* Right: Engineering Notes Preview */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-titanium-400 uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                Engineering Notes
              </span>
              <Link
                href="/blog"
                className="text-xs font-mono text-accent hover:underline"
              >
                All notes →
              </Link>
            </div>

            <div className="space-y-4">
              {notes.map((note) => (
                <Link
                  key={note.slug}
                  href={note.slug}
                  className="block p-5 rounded-xl bg-surface border border-surface-border hover:border-accent/50 transition-colors group"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-titanium-400 mb-2">
                    <span>{note.date}</span>
                    <span>{note.readTime}</span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-titanium-50 group-hover:text-accent transition-colors mb-2 leading-snug">
                    {note.title}
                  </h3>
                  <p className="text-xs text-titanium-300 leading-relaxed mb-3">
                    {note.summary}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-accent">
                    Read note <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
