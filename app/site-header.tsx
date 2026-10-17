import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";

export default function SiteHeader() {
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
            <Link href="/gallery/piko-outreach">Piko Outreach</Link>
            <Link href="/gallery/community-outreach">Community Outreach</Link>
          </div>
        </details>
      </nav>

      <div className="header-actions">
        <Link className="pill-button header-button" href="/#contact">
          Work with us <ArrowUpRight size={17} strokeWidth={2.2} />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={22} /></summary>
          <nav className="mobile-menu-panel" aria-label="Mobile navigation">
            <Link href="/#about">About</Link>
            <Link href="/#work">What we do</Link>
            <Link href="/#impact">Impact</Link>
            <span>Gallery</span>
            <Link className="mobile-sub-link" href="/gallery/piko-outreach">Piko Outreach</Link>
            <Link className="mobile-sub-link" href="/gallery/community-outreach">Community Outreach</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
