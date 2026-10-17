import { ArrowUpRight, Mail, Phone } from "lucide-react";

function WhatsAppIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.493.654.666-2.431-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.59-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.589-6.592 6.589Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.066-.315-.099-.445.1-.133.197-.513.646-.627.775-.116.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.984-.59-.525-.983-1.175-1.103-1.372-.116-.198-.013-.305.089-.404.09-.088.197-.23.296-.345.1-.116.133-.198.198-.33.066-.133.033-.25-.017-.348-.05-.099-.445-1.075-.611-1.47-.16-.389-.323-.336-.445-.342-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.526.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.131 1.397 2.132 3.383 2.992.47.205.84.326 1.129.418.475.151.904.129 1.246.078.38-.058 1.171-.48 1.338-.943.164-.462.164-.858.116-.943-.05-.084-.182-.132-.38-.23Z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="section-shell contact-inner">
        <div><p className="eyebrow light">Build the transition with us</p><h2>Let’s bring clean cooking closer.</h2></div>
        <div className="contact-actions">
          <a className="contact-link" href="https://wa.me/2349012335037"><WhatsAppIcon /> WhatsApp us <ArrowUpRight size={19} /></a>
          <a className="contact-link" href="mailto:info@ziragreen.org"><Mail size={21} /> info@ziragreen.org <ArrowUpRight size={19} /></a>
          <a className="contact-link" href="tel:+2349012335037"><Phone size={21} /> 0901 233 5037 <ArrowUpRight size={19} /></a>
        </div>
      </div>
    </section>
  );
}
