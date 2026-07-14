"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "会社概要", href: "/about" },
    { name: "ソリューション", href: "/solutions" },
    { name: "テクノロジー", href: "/technology" },
    { name: "導入事例", href: "/farms" },
    { name: "サステナビリティ", href: "/sustainability" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className="h-8 w-8 text-suiha-green group-hover:text-suiha-lime transition-colors" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-suiha-dark">翠葉ファームテック</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-suiha-charcoal hover:text-suiha-green transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-suiha-lime transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-suiha-green text-white text-sm font-semibold rounded-full hover:bg-suiha-dark transition-colors shadow-md hover:shadow-lg"
            >
              お問い合わせ
            </Link>
          </nav>

          <button
            className="md:hidden text-suiha-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-suiha-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 text-center px-5 py-3 bg-suiha-green text-white font-semibold rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
