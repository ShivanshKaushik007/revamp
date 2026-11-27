"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import ClickSpark from "@/components/ui/ClickSpark";
import StarBorder from "@/components/ui/StarBorder";

const notes = [
  {
    slug: "/blog/tnp",
    date: "Mar 10, 2026",
    readTime: "16 min read",
    tag: "Institutional Web",
    title: "Shipping IET Lucknow's Placement Portal on placement.ietlucknow.ac.in",
    summary:
      "Interactive story covering the 49-commit migration, 99.7 MB media fixes, Chart.js demographics, hydration bugs, and Nodemailer SMTP routing.",
  },
  {
    slug: "/blog/busy",
    date: "Sep 14, 2026",
    readTime: "31 min read",
    tag: "Databases & State",
    title: "How I Built Busy: Database-first task management with PostgreSQL RLS",
    summary:
      "Designing finite state machines, DFS dependency cycle checks, and Row-Level Security policies from the database up in ~16 hours.",
  },
  {
    slug: "/blog/swift",
    date: "Sep 04, 2026",
    readTime: "12 min read",
    tag: "Real-Time & WebRTC",
    title: "Building Swift Chat: Real-time rooms, threads, and WebRTC calls",
    summary:
      "Moving beyond a basic chat demo into Socket.IO rooms, Cloudinary media, cron-scheduled messages, and 1-to-1 peer calling.",
  },
];

const Notes = () => {
  return (
    <section id="notes" className="py-20 sm:py-24 border-t border-surface-border">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2.5">
              05 / Notes
            </p>
            <h2 className="h2 text-titanium-50">
              Engineering{" "}
              <span className="font-editorial text-accent font-normal">
                notes & build logs
              </span>
            </h2>
          </div>

          <ClickSpark
            className="inline-flex !w-auto !h-auto"
            sparkColor={["#F27D42", "#FFD36E", "#FAF8F5"]}
            sparkSize={9}
            sparkRadius={20}
            sparkCount={8}
            duration={360}
          >
            <Link href="/blog" className="inline-flex">
              <StarBorder
                as="span"
                color="#F27D42"
                trailColor="#FFD36E"
                backgroundColor="#131317"
                textColor="#F2EFE9"
                borderColor="rgba(242, 239, 233, 0.12)"
                radius={999}
                thickness={1.2}
                duration={4.2}
                glow={0.45}
                hover="reveal"
                className="!px-4 !py-2 text-xs font-mono"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>All notes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </StarBorder>
            </Link>
          </ClickSpark>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={note.slug}
              className="group p-6 sm:p-7 rounded-2xl bg-surface border border-surface-border hover:border-accent/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-titanium-400 mb-4">
                  <span className="text-accent">{note.tag}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {note.date}
                    </span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent" />
                      {note.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-heading font-bold text-titanium-50 group-hover:text-accent transition-colors mb-3 leading-snug">
                  {note.title}
                </h3>

                <p className="text-sm text-titanium-300 leading-relaxed mb-6">
                  {note.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 text-accent">
                  <span>Read build log</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-titanium-500">{note.slug}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notes;
