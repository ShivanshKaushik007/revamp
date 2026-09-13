"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { useActiveSection } from "@/lib/useActiveSection";
import { Button } from "./button";

const links = [
  { name: "Overview", path: "/#home", id: "home" },
  { name: "Featured Projects", path: "/#work", id: "work" },
  { name: "Career & Leadership", path: "/#career", id: "career" },
  { name: "Technical Stack", path: "/#skills", id: "skills" },
  { name: "About Blueprint", path: "/#about", id: "about" },
  { name: "Contact", path: "/#contact", id: "contact" },
  { name: "Journal (Blog)", path: "/blog", id: "blog" },
];

const MobileNav = ({ activeSection: propActive, setActiveSection: propSetActive }) => {
  const hookState = useActiveSection();
  const activeSection = propActive !== undefined ? propActive : hookState.activeSection;
  const setActiveSection = propSetActive || hookState.setActiveSection;
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  const handleMobileNavClick = (link) => {
    if (link.id === "blog") {
      setActiveSection("blog");
      return;
    }

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
      <SheetTrigger className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-titanium-200 hover:text-white hover:border-accent/40 transition-all">
        <Menu className="w-5 h-5 text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#0C0E16]/95 backdrop-blur-2xl border-l border-white/10 p-6">
        <div className="mt-12 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-white/15 flex items-center justify-center p-1.5 overflow-hidden shadow-sm">
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
              <h2 className="font-heading font-bold text-white text-lg">
                Shivansh<span className="text-accent">.</span>
              </h2>
              <p className="text-xs font-mono text-titanium-400">Full-Stack Engineer</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-2.5 my-auto">
          {links.map((link, index) => {
            const isActive = activeSection === link.id;

            return (
              <SheetClose asChild key={link.id}>
                <Link
                  href={link.path}
                  onClick={() => handleMobileNavClick(link)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? "bg-accent/15 text-accent border border-accent/30 font-semibold shadow-sm"
                      : "text-titanium-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono opacity-60">0{index + 1}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-white/10">
          <SheetClose asChild>
            <a
              href="#contact"
              onClick={() => handleMobileNavClick({ id: "contact" })}
              className="w-full block"
            >
              <Button className="w-full gap-2" variant="default">
                <span>Start a Project</span>
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