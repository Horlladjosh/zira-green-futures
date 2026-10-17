"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileMenuOpen);
    document.documentElement.classList.toggle("menu-open", mobileMenuOpen);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="ZiRA home">
        <Image src="/zira-logo.png" alt="ZiRA Green Futures Initiative" width={1642} height={578} sizes="168px" />
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/#about">About</Link>
        <Link href="/#work">What we do</Link>
        <Link href="/#impact">Impact</Link>
        <details className="nav-dropdown">
          <summary>Gallery <ChevronDown size={15} strokeWidth={2.2} /></summary>
          <div className="nav-dropdown-menu">
            <Link href="/gallery/piko-outreach">Community Sensitization</Link>
            <Link href="/gallery/community-outreach">Community Demonstration</Link>
          </div>
        </details>
      </nav>

      <div className="header-actions">
        <a className="pill-button header-button" href="#contact">
          Get in touch <ArrowUpRight size={17} strokeWidth={2.2} />
        </a>
        <div className={`mobile-menu${mobileMenuOpen ? " is-open" : ""}`}>
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Mobile navigation" aria-hidden={!mobileMenuOpen}>
            <Link href="/#about" onClick={closeMobileMenu}>About</Link>
            <Link href="/#work" onClick={closeMobileMenu}>What we do</Link>
            <Link href="/#impact" onClick={closeMobileMenu}>Impact</Link>
            <span>Gallery</span>
            <Link className="mobile-sub-link" href="/gallery/piko-outreach" onClick={closeMobileMenu}>Community Sensitization</Link>
            <Link className="mobile-sub-link" href="/gallery/community-outreach" onClick={closeMobileMenu}>Community Demonstration</Link>
            <a className="pill-button mobile-menu-cta" href="#contact" onClick={closeMobileMenu}>
              Get in touch <ArrowUpRight size={18} strokeWidth={2.2} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
