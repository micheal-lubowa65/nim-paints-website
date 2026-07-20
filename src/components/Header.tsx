"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Gallery" },
  { href: "/color-visualizer", label: "Visualizer" },
  { href: "/paint-calculator", label: "Calculator" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const hasFullHero = pathname === "/" || pathname === "/about" || pathname === "/products" || pathname === "/projects" || pathname === "/paint-calculator" || pathname === "/contact" || pathname === "/color-visualizer";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Pages with full-bleed hero: transparent when at top, pill when scrolled
  // Other pages: always pill/solid
  const isTransparent = hasFullHero && !scrolled && !menuOpen;

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent backdrop-blur-sm border-b border-white/10"
          : "bg-white border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className={`w-full mx-auto flex justify-between items-center px-4 md:px-gutter h-16 md:h-20`}>
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/nim-logo-site-600x135.png"
            alt="NIM Paints"
            width={160}
            height={36}
            className="h-7 sm:h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? `font-bold border-b-2 pb-1 text-sm tracking-wide transition-colors duration-200 ${
                      isTransparent ? "text-white border-white" : "text-deep-forest border-flame-gold"
                    }`
                  : `text-sm tracking-wide transition-colors duration-200 ${
                      isTransparent
                        ? "text-white/80 hover:text-white"
                        : "text-deep-forest/70 hover:text-deep-forest"
                    }`
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#distributor-network"
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shrink-0 ${
              isTransparent
                ? "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                : "bg-deep-forest text-white hover:bg-deep-forest/80"
            }`}
          >
            Find Distributor
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-3 cursor-pointer shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isTransparent ? "bg-white" : "bg-deep-forest"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isTransparent ? "bg-white" : "bg-deep-forest"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isTransparent ? "bg-white" : "bg-deep-forest"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[80vh] border-t border-gray-200" : "max-h-0"}`}>
        <div className="px-gutter py-6 flex flex-col gap-4 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(link.href)
                  ? "text-deep-forest font-bold text-sm tracking-wide py-2"
                  : "text-deep-forest/60 hover:text-deep-forest text-sm tracking-wide py-2"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact#distributor-network" onClick={() => setMenuOpen(false)} className="bg-primary hover:bg-leaf-green text-on-primary px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-transform active:scale-95 mt-2">
            Find Distributor
          </Link>
        </div>
      </div>
    </nav>
  );
}
