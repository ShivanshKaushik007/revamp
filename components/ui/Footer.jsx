import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-10 px-4 sm:px-6 bg-primary">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="text-sm font-heading font-semibold text-titanium-50">
            Shivansh Kaushik
          </p>
          <p className="text-xs font-mono text-titanium-400">
            Lucknow, India · © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-titanium-400">
          <Link href="/blog" className="hover:text-titanium-100 transition-colors">
            Notes
          </Link>
          <a
            href="https://github.com/ShivanshKaushik007"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-titanium-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shivansh-kaushik-b3165827a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-titanium-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-titanium-300 hover:text-accent transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
