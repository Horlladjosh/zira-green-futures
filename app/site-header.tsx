"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    const handleToggle = () => {
      document.body.classList.toggle("menu-open", menu.open);
    };

    menu.addEventListener("toggle", handleToggle);
    return () => {
      menu.removeEventListener("toggle", handleToggle);
      document.body.classList.remove("menu-open");
    };
  }, []);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.removeAttribute("open");
    document.body.classList.remove("menu-open");
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
        <details className="mobile-menu" ref={mobileMenuRef}>
          <summary aria-label="Toggle navigation">
            <Menu className="menu-open-icon" size={22} />
            <X className="menu-close-icon" size={22} />
          </summary>
          <nav className="mobile-menu-panel" aria-label="Mobile navigation">
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
        </details>
      </div>
    </header>
  );
}
