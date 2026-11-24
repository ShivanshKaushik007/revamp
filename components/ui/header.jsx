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
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-surface-border">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Mark */}
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
          <div className="w-7 h-7 rounded-md bg-surface-elevated border border-surface-border flex items-center justify-center p-0.5 group-hover:border-accent/50 transition-colors overflow-hidden">
            <Image
              src="/logo.png"
              alt="Shivansh Kaushik Logo"
              width={24}
              height={24}
              priority
              unoptimized
              className="w-full h-full object-contain rounded-sm"
            />
          </div>
          <span className="font-heading font-bold text-titanium-50 text-base tracking-tight">
            shivansh<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
        </div>

        {/* Action & Mobile Nav */}
        <div className="flex items-center gap-3">
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            onClick={handleContactClick}
            className="hidden sm:inline-flex"
          >
            <Button
              size="sm"
              variant={isContactActive ? "primary" : "secondary"}
              className="gap-1.5 text-xs"
            >
              <span>Say hello</span>
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
