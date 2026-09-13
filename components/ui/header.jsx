"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { ArrowUpRight } from "lucide-react";
import { useActiveSection } from "@/lib/useActiveSection";
import { usePathname } from "next/navigation";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const handleContactClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      setActiveSection("contact");
      const targetEl = document.getElementById("contact");
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", "#contact");
      }
    } else {
      setActiveSection("contact");
    }
  };

  const isContactActive = activeSection === "contact";

  return (
    <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 transition-all">
      <div className="max-w-6xl mx-auto px-5 py-2.5 rounded-full bg-[#11131C]/75 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40 flex items-center justify-between">
        {/* Brand Logo with Favicon */}
        <Link
          href="/"
          onClick={() => {
            if (isHomePage) {
              setActiveSection("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center p-1 group-hover:border-accent/40 transition-all overflow-hidden shadow-sm">
            <Image
              src="/logo.png"
              alt="Shivansh Kaushik Logo"
              width={28}
              height={28}
              priority
              unoptimized
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-base tracking-tight flex items-center">
              Shivansh<span className="text-accent">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Action Button & Mobile Nav */}
        <div className="flex items-center gap-3">
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={handleContactClick}
            className="hidden sm:inline-flex"
          >
            <Button
              size="sm"
              variant={isContactActive ? "default" : "secondary"}
              className={`gap-1 text-xs transition-all duration-200 ${
                isContactActive
                  ? "bg-accent text-[#090A0F] font-semibold shadow-lg shadow-sky-500/25 ring-2 ring-accent/40"
                  : "hover:border-accent/40"
              }`}
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
          <div className="md:hidden">
            <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
