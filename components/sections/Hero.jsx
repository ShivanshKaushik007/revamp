"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Lanyard from "@/components/ui/Lanyard";

const highlights = [
  {
    label: "Studying",
    value: "B.Tech CSE '27 · IET Lucknow",
    href: "#career",
  },
  {
    label: "Last Internship",
    value: "SWE Intern at Minitaka",
    href: "#career",
  },
  {
    label: "Hackathon",
    value: "4th / 430+ teams · Hack with UP",
    href: "#career",
  },
  {
    label: "Writing",
    value: "2 deep dives on Postgres & WebRTC →",
    href: "/blog",
    isRoute: true,
  },
];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = "shivanshkaushik1237@gmail.com";

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="home"
      className="relative pt-10 sm:pt-14 pb-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left z-10"
          >
            {/* Quiet human status line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-xs font-mono text-titanium-400">
              <span className="inline-flex items-center gap-2 text-titanium-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5BB98C] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5BB98C]" />
                </span>
                Open to 2027 SWE roles & internships
              </span>
              <span className="text-titanium-600">/</span>
              <span>
                Lucknow, IN{currentTime ? ` · ${currentTime} IST` : ""}
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="h1 text-titanium-50 mb-6">
              Building{" "}
              <span className="font-editorial text-accent font-normal tracking-normal text-[1.08em]">
                real-time
              </span>{" "}
              web apps and tools that feel fast.
            </h1>

            {/* Grounded First-Person Intro */}
            <p className="text-base sm:text-lg text-titanium-300 font-sans leading-relaxed max-w-xl mb-8">
              I'm <span className="text-titanium-50 font-medium">Shivansh Kaushik</span> — a CS undergrad at IET Lucknow and Technical Head at E-Cell. I like building products end-to-end, from Postgres schemas and WebSocket rooms down to the last interface detail.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="#work">
                <Button size="md" variant="primary" className="gap-2">
                  <span>See my work</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href="https://drive.google.com/file/d/1hGu1UvcQ64tME9tXWXm-22r_JTMZCFb9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="md" variant="secondary" className="gap-2">
                  <Download className="w-4 h-4 text-accent" />
                  <span>Resume</span>
                </Button>
              </a>

              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 h-11 px-4 rounded-full bg-transparent border border-surface-border hover:border-titanium-500 text-xs sm:text-sm font-mono text-titanium-300 hover:text-titanium-50 transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#5BB98C]" />
                    <span className="text-[#5BB98C]">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-titanium-400 group-hover:text-accent transition-colors" />
                    <span>{email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-titanium-400">
              {[
                {
                  icon: <FaGithub className="w-4 h-4" />,
                  href: "https://github.com/ShivanshKaushik007",
                  name: "GitHub",
                },
                {
                  icon: <FaLinkedinIn className="w-4 h-4" />,
                  href: "https://www.linkedin.com/in/shivansh-kaushik-b3165827a/",
                  name: "LinkedIn",
                },
                {
                  icon: <SiLeetcode className="w-4 h-4" />,
                  href: "https://leetcode.com/u/Shivansh_Kaushik/",
                  name: "LeetCode",
                },
                {
                  icon: <FaInstagram className="w-4 h-4" />,
                  href: "https://www.instagram.com/shivanshkaushik1237",
                  name: "Instagram",
                },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="inline-flex items-center gap-1.5 text-xs font-mono hover:text-accent transition-colors py-1"
                >
                  {s.icon}
                  <span className="hidden sm:inline">{s.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <Lanyard />
          </motion.div>
        </div>

        {/* Clean Editorial Index Strip (replaces generic CountUp stats) */}
        <div className="mt-12 pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const inner = (
              <div className="group flex flex-col gap-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-titanium-500">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-titanium-100 group-hover:text-accent transition-colors">
                  {item.value}
                </span>
              </div>
            );

            return item.isRoute ? (
              <Link key={idx} href={item.href}>
                {inner}
              </Link>
            ) : (
              <a key={idx} href={item.href}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
