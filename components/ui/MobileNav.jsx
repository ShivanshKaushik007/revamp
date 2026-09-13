"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./button";

const links = [
  { name: "Overview", path: "/#home" },
  { name: "Featured Projects", path: "/#work" },
  { name: "Career & Leadership", path: "/#career" },
  { name: "Technical Stack", path: "/#skills" },
  { name: "About Blueprint", path: "/#about" },
  { name: "Contact", path: "/#contact" },
  { name: "Journal (Blog)", path: "/blog" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setActiveHash("/blog");
      return;
    }
    const updateActiveHash = () => {
      setActiveHash(window.location.hash || "#home");
    };
    updateActiveHash();
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, [pathname]);

  return (
    <Sheet>
      <SheetTrigger className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-titanium-200 hover:text-white hover:border-accent/40 transition-all">
        <Menu className="w-5 h-5 text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#0C0E16]/95 backdrop-blur-2xl border-l border-white/10 p-6">
        <div className="mt-12 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-surface-elevated border border-white/15 flex items-center justify-center font-bold text-accent">
              SK
            </div>
            <div>
              <h2 className="font-heading font-bold text-white text-lg">
                Shivansh<span className="text-accent">.</span>
              </h2>
              <p className="text-xs font-mono text-titanium-400">Full-Stack Engineer</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-3 my-auto">
          {links.map((link, index) => {
            const isJournal = link.path === "/blog";
            const isActive = isJournal
              ? activeHash === "/blog"
              : activeHash === link.path.replace("/", "");

            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  onClick={() => setActiveHash(isJournal ? "/blog" : link.path.replace("/", ""))}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "text-titanium-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono opacity-50">0{index + 1}</span>
                </Link>
              </SheetClose>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-white/10">
          <SheetClose asChild>
            <a href="#contact" className="w-full block">
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