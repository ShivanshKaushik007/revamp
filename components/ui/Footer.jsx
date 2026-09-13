import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Terminal, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 px-4 sm:px-6 bg-[#07080D]">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand Monogram & Copyright with Favicon */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center p-1 overflow-hidden shadow-sm">
            <Image
              src="/logo.png"
              alt="Shivansh Kaushik Logo"
              width={28}
              height={28}
              unoptimized
              className="w-full h-full object-contain rounded-md"
            />
          </div>


          <div>
            <p className="text-sm font-heading font-semibold text-white">
              Shivansh Kaushik
            </p>
            <p className="text-xs font-mono text-titanium-400">
              © {new Date().getFullYear()} • Designed with craft & engineering rigor
            </p>
          </div>
        </div>

        {/* Center: Tech Stack Colophon */}
        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-titanium-400">
          <span>Engineered with Next.js 14</span>
          <span>•</span>
          <span>Three.js & Rapier</span>
          <span>•</span>
          <span>Tailwind CSS</span>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-6">
          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs font-mono text-titanium-400 hover:text-accent transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
