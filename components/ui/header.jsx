import Link from "next/link";
import { Button } from "./button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 pt-4 pb-2 px-4 sm:px-6 transition-all">
      <div className="max-w-6xl mx-auto px-5 py-2.5 rounded-full bg-[#11131C]/75 backdrop-blur-xl border border-white/[0.08] shadow-2xl shadow-black/40 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-white/10 flex items-center justify-center text-sm font-heading font-extrabold text-white group-hover:border-accent/40 group-hover:text-accent transition-all">
            SK
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-white text-base tracking-tight flex items-center">
              Shivansh<span className="text-accent">.</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center">
          <Nav />
        </div>

        {/* Action Button & Mobile Nav */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex">
            <Button size="sm" variant="default" className="gap-1 text-xs">
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </a>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
