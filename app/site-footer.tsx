import Image from "next/image";
import { MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer section-shell">
      <div className="footer-brand">
        <Image src="/zira-logo.png" alt="ZiRA Green Futures Initiative" width={1642} height={578} sizes="180px" />
        <p>Equity · Inclusivity · Impact</p>
      </div>
      <div className="footer-location"><MapPin size={18} /> Abuja, Nigeria</div>
      <div className="footer-links"><a href="https://instagram.com/zira_green26">Instagram</a><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}
