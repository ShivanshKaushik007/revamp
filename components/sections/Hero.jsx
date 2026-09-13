"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Download,
  ArrowRight,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Lanyard from "@/components/ui/Lanyard";
import Stats from "@/components/ui/Stats";

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
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between pt-8 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative, Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col text-left z-10"
          >
            {/* Live Status & Time Chips */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>Available for Engineering Roles</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-titanium-300">
                <MapPin className="w-3.5 h-3.5 text-titanium-400" />
                <span>Lucknow, IN</span>
                {currentTime && (
                  <>
                    <span className="text-white/20">•</span>
                    <Clock className="w-3 h-3 text-titanium-400" />
                    <span>{currentTime} IST</span>
                  </>
                )}
              </div>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="h1 text-white font-heading font-extrabold tracking-tight leading-[1.08] mb-5">
              Architecting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-sky-300 to-white">
                real-time systems
              </span>{" "}
              with design precision.
            </h1>

            {/* Personal Value Proposition */}
            <p className="text-base sm:text-lg text-titanium-300 font-sans leading-relaxed max-w-2xl mb-8">
              Hi, I'm <strong className="text-white font-semibold">Shivansh Kaushik</strong> — 
              a Full-Stack Software Engineer and Technical Head at E-Cell IET Lucknow. 
              I design resilient distributed architectures (WebSockets, WebRTC, multi-tenant databases) 
              paired with tactile, high-craft user interfaces.
            </p>

            {/* Action Bar: Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a href="#work">
                <Button size="md" variant="default" className="gap-2 text-sm font-semibold">
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href="https://drive.google.com/file/d/1zK3OaLAySnfmUmpQZJyUfCMZeQn__r5I/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="md" variant="secondary" className="gap-2 text-sm font-medium">
                  <Download className="w-4 h-4 text-accent" />
                  <span>Resume CV</span>
                </Button>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="group relative inline-flex items-center gap-2 h-12 px-4 rounded-full bg-white/[0.03] border border-white/10 hover:border-accent/40 text-xs sm:text-sm font-mono text-titanium-300 hover:text-white transition-all active:scale-[0.98]"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-titanium-400 group-hover:text-accent transition-colors" />
                    <span className="truncate max-w-[180px] sm:max-w-none">{email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Dock */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-titanium-400 mr-2">
                Connect //
              </span>
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
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-titanium-300 hover:text-accent hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Unique Centerpiece - 3D Physics Lanyard Pass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Ambient Backlight for 3D Lanyard */}
            <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <Lanyard />
          </motion.div>
        </div>

        {/* Integrated Metric Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.07]">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
