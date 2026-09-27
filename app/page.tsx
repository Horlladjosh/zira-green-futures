import Counter from "./counter";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Flame,
  HandHeart,
  Leaf,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

const approachIcons = [BookOpen, Flame, Leaf, HandHeart];
const approach = [
  ["01", "Sensitise", "Practical education on cleaner cooking and healthier homes."],
  ["02", "Demonstrate", "Hands-on sessions that make new solutions easy to understand."],
  ["03", "Bring access closer", "Last-mile distribution for stoves and locally adapted fuels."],
  ["04", "Create livelihoods", "Young people distribute solutions while women lead adoption."],
];

const programmes = [
  [Users, "Community advocacy", "Conversations designed with the people who will use the solutions."],
  [Flame, "Clean cooking demos", "Practical sessions that turn awareness into confident daily use."],
  [BookOpen, "Climate education", "Clear, local learning that connects cooking choices to climate action."],
  [HandHeart, "Last-mile access", "Efficient cookstoves and bio-briquettes brought closer to households."],
];

const team = [
  ["Rinret Best", "Founder", "/team/rinret.webp"],
  ["Hauwa Barde", "Program Manager & Business Development", "/team/hauwa.webp"],
  ["Petke Mangni", "Community Liaison Officer", "/team/petke-cropped.webp"],
  ["Deborah Yakubu", "Administration & Logistics", "/team/deborah.webp"],
];

function WhatsAppIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.493.654.666-2.431-.156-.25a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.59-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.589-6.592 6.589Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.066-.315-.099-.445.1-.133.197-.513.646-.627.775-.116.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.984-.59-.525-.983-1.175-1.103-1.372-.116-.198-.013-.305.089-.404.09-.088.197-.23.296-.345.1-.116.133-.198.198-.33.066-.133.033-.25-.017-.348-.05-.099-.445-1.075-.611-1.47-.16-.389-.323-.336-.445-.342-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.526.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.131 1.397 2.132 3.383 2.992.47.205.84.326 1.129.418.475.151.904.129 1.246.078.38-.058 1.171-.48 1.338-.943.164-.462.164-.858.116-.943-.05-.084-.182-.132-.38-.23Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ZiRA home">
          <Image src="/zira-logo.png" alt="ZiRA Green Futures Initiative" width={1642} height={578} sizes="168px" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">What we do</a>
          <a href="#solutions">Solutions</a>
          <a href="#impact">Impact</a>
        </nav>
        <a className="pill-button header-button" href="#contact">
          Work with us <ArrowUpRight size={17} strokeWidth={2.2} />
        </a>
      </header>

      <section className="hero" id="top">
        <Image
          src="/zira-clean-cooking-hero.png"
          alt="A woman preparing a meal with an efficient biomass cookstove"
          className="hero-image"
          fill
          preload
          sizes="100vw"
        />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow light">Clean cooking. Closer to home.</p>
          <h1>Better cooking.<br /><span>Brighter futures.</span></h1>
          <div className="hero-bottom">
            <p>We help underserved communities move to affordable, efficient cooking solutions that last.</p>
            <a className="circle-link" href="#about" aria-label="Learn more"><ArrowDown size={24} /></a>
          </div>
        </div>
      </section>

      <section className="statement section-shell" id="about">
        <div className="statement-mark" aria-hidden="true"><span /><span /><span /></div>
        <div>
          <p className="eyebrow">Why ZiRA exists</p>
          <h2>Clean cooking should not depend on where a family lives.</h2>
          <div className="statement-copy">
            <p>ZiRA Green Futures Initiative is a social-impact NGO expanding access to cleaner, more efficient cooking across rural and peri-urban communities.</p>
            <a className="text-link" href="#work">See our approach <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="mission section-shell" id="mission">
        <div className="mission-number">
          <div className="stove-illustration" aria-hidden="true">
            <Image src="/clean-cookstove-concept.png" alt="" width={1222} height={1287} sizes="(max-width: 640px) 360px, 460px" />
          </div>
          <Counter /><p>households by 2030</p>
        </div>
        <div className="mission-copy">
          <p className="eyebrow">Our mission</p>
          <h2>Cleaner air. Lower household costs. More green livelihoods.</h2>
          <p>Our mission is to support 50,000 households to adopt affordable, energy-efficient and locally adapted clean cooking solutions.</p>
        </div>
      </section>

      <section className="approach-section" id="work">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <p className="eyebrow light">How change reaches a household</p>
            <h2>Awareness is only the beginning.</h2>
          </div>
          <div className="approach-grid">
            {approach.map(([number, title, copy], index) => { const Icon = approachIcons[index]; return (
              <article className="approach-card" key={number}>
                <span className={`feature-icon tone-${index % 3}`}><Icon size={34} strokeWidth={1.8} /></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ); })}
          </div>
        </div>
      </section>

      <section className="programmes section-shell">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Local action, built to travel further.</h2>
        </div>
        <div className="programme-grid">
          {programmes.map(([Icon, title, copy], index) => {
            const CardIcon = Icon as typeof Users;
            return (
              <article className="programme-card" key={title as string}>
                <span className={`feature-icon tone-${index % 3}`}><CardIcon size={38} strokeWidth={1.8} /></span>
                <h3>{title as string}</h3><p>{copy as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="section-shell solutions-inner">
          <div className="solutions-intro">
            <p className="eyebrow light">Practical solutions</p>
            <h2>Designed for everyday cooking.</h2>
            <p>Affordable tools and fuels that fit local routines, reduce waste and help households cook with greater confidence.</p>
          </div>
          <div className="solution-list">
            <article>
              <span className="solution-icon"><Flame size={27} /></span>
              <div><p className="solution-kicker">01 / Cookware</p><h3>Efficient biomass cookstoves</h3></div>
              <ArrowUpRight size={24} />
            </article>
            <article>
              <span className="solution-icon amber"><Leaf size={27} /></span>
              <div><p className="solution-kicker">02 / Clean fuel</p><h3>Bio-briquettes</h3></div>
              <ArrowUpRight size={24} />
            </article>
          </div>
        </div>
      </section>

      <section className="field-impact" id="impact">
        <div className="section-shell field-impact-inner">
          <div className="field-impact-media">
            <Image
              src="/piko-outreach.webp"
              alt="ZiRA team engaging women during the Piko Village clean cooking outreach"
              width={1800}
              height={1200}
              sizes="(max-width: 980px) calc(100vw - 56px), 56vw"
            />
          </div>
          <div className="field-impact-copy">
            <p className="eyebrow light">Impact · Piko Village</p>
            <h2>Listening first. Building solutions that fit.</h2>
            <p>ZiRA’s outreach in Piko Village engaged 20 women and revealed complete reliance on firewood, long hours spent collecting fuel, and strong willingness to adopt affordable clean-cooking alternatives.</p>
            <a className="pill-button report-button" href="https://drive.google.com/file/d/1WwkbS2cdBKiB76SP5BrjDfkHQyV_EV0W/view" target="_blank" rel="noreferrer">
              Read our report <ArrowUpRight size={18} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      <section className="team-section section-shell">
        <div className="section-heading team-heading">
          <div><p className="eyebrow">The team</p><h2>Community first, from idea to delivery.</h2></div>
          <Users size={48} strokeWidth={1.25} />
        </div>
        <div className="team-grid">
          {team.map(([name, role, photo]) => (
            <article className="team-card" key={name}>
              <div className="team-photo">
                <Image src={photo} alt={`${name}, ${role}`} fill sizes="(max-width: 640px) calc(100vw - 34px), (max-width: 980px) 50vw, 25vw" />
              </div>
              <div className="team-card-copy">
                <h3>{name}</h3><p>{role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell contact-inner">
          <div><p className="eyebrow light">Build the transition with us</p><h2>Let’s bring clean cooking closer.</h2></div>
          <div className="contact-actions">
            <a className="contact-link" href="https://wa.me/2349012335037"><WhatsAppIcon /> WhatsApp us <ArrowUpRight size={19} /></a>
            <a className="contact-link" href="tel:+2349012335037"><Phone size={21} /> 0901 233 5037 <ArrowUpRight size={19} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="footer-brand">
          <Image src="/zira-logo.png" alt="ZiRA Green Futures Initiative" width={1642} height={578} sizes="180px" />
          <p>Equity · Inclusivity · Impact</p>
        </div>
        <div className="footer-location"><MapPin size={18} /> Abuja, Nigeria</div>
        <div className="footer-links"><a href="https://instagram.com/zira_green26">Instagram</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
