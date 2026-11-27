"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { useActiveSection } from "@/lib/useActiveSection";
import { Button } from "./button";

const links = [
  { name: "Home", path: "/#home", id: "home" },
  { name: "About", path: "/#about", id: "about" },
  { name: "Experience", path: "/#career", id: "career" },
  { name: "Work", path: "/#work", id: "work" },
  { name: "Toolkit", path: "/#skills", id: "skills" },
  { name: "Notes", path: "/#notes", id: "notes" },
  { name: "Contact", path: "/#contact", id: "contact" },
];

const MobileNav = ({ activeSection: propActive, setActiveSection: propSetActive }) => {
  const hookState = useActiveSection();
  const activeSection = propActive !== undefined ? propActive : hookState.activeSection;
  const setActiveSection = propSetActive || hookState.setActiveSection;
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const handleMobileNavClick = (link) => {
    if (isHomePage) {
      setActiveSection(link.id);
      const targetEl = document.getElementById(link.id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${link.id}`);
      }
    } else {
      setActiveSection(link.id);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="w-9 h-9 rounded-full bg-surface border border-surface-border flex items-center justify-center text-titanium-200 hover:text-titanium-50 hover:border-accent/50 transition-colors">
        <Menu className="w-4 h-4" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary/95 backdrop-blur-xl border-l border-surface-border p-6">
        <div className="mt-10 mb-8 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-surface-elevated border border-surface-border flex items-center justify-center p-1 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Shivansh Kaushik Logo"
              width={24}
              height={24}
              unoptimized
              className="w-full h-full object-contain rounded-sm"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-titanium-50 text-base">
              Shivansh<span className="text-accent">.</span>
            </h2>
            <p className="text-xs font-mono text-titanium-400">Software Engineer</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5 my-auto">
          {links.map((link, index) => {
            const isActive = activeSection === link.id;

            return (
              <SheetClose asChild key={link.id}>
                <Link
                  href={link.path}
                  onClick={() => handleMobileNavClick(link)}
                  className={`px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? "bg-accent/15 text-accent border border-accent/25"
                      : "text-titanium-300 hover:text-titanium-50 hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[11px] font-mono opacity-60">0{index + 1}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-surface-border">
          <SheetClose asChild>
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              onClick={() => handleMobileNavClick({ id: "contact" })}
              className="w-full block"
            >
              <Button className="w-full gap-2" variant="primary">
                <span>Say hello</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
