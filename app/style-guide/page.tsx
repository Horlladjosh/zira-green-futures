import Link from "next/link";
import Image from "next/image";
import styles from "./style-guide.module.css";

const colours = [
  ["ZiRA green", "#47A60E", styles.ziraGreen],
  ["ZiRA yellow", "#FEB50E", styles.ziraYellow],
  ["ZiRA blue", "#4797C8", styles.ziraBlue],
  ["Forest", "#0B3D2E", styles.forest],
  ["Ink", "#092B21", styles.ink],
  ["Paper", "#F6F7F0", styles.paper],
];

const spacing = ["8", "12", "16", "24", "32", "48", "64", "96"];

export const metadata = {
  title: "Style Guide | ZiRA Green Futures Initiative",
  robots: { index: false, follow: false },
};

export default function StyleGuide() {
  return (
    <main className={styles.guide}>
      <header className={styles.header}>
        <Image src="/zira-logo.png" alt="ZiRA Green Futures Initiative" width={1642} height={578} sizes="180px" />
        <Link href="/">View website</Link>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>Design system · v1.0</p>
        <h1>Simple, bold and grounded in community.</h1>
        <p>
          The ZiRA system uses confident typography, generous space and the three
          colours from the organisation’s identity. Components are designed to
          stay readable and balanced from small phones to wide desktop screens.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>01</span><h2>Colour</h2>
        </div>
        <div className={styles.colourGrid}>
          {colours.map(([name, value, className]) => (
            <article className={styles.colourCard} key={name}>
              <div className={`${styles.swatch} ${className}`} />
              <h3>{name}</h3><p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>02</span><h2>Typography</h2>
        </div>
        <div className={styles.typeStack}>
          <article><span>Display</span><h2>Better cooking.<br />Brighter futures.</h2></article>
          <article><span>Section heading</span><h3>Local action, built to travel further.</h3></article>
          <article><span>Card heading</span><h4>Clean cooking demonstrations</h4></article>
          <article><span>Body</span><p>Clear, direct language makes ZiRA’s work accessible to communities, partners and supporters.</p></article>
          <article><span>Eyebrow</span><strong>HOW CHANGE REACHES A HOUSEHOLD</strong></article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>03</span><h2>Spacing</h2>
        </div>
        <div className={styles.spacingList}>
          {spacing.map((value) => (
            <div key={value}><span>{value}px</span><i style={{ width: `${value}px` }} /></div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <span>04</span><h2>Interface</h2>
        </div>
        <div className={styles.componentGrid}>
          <article className={styles.lightPanel}>
            <p className={styles.eyebrow}>Primary action</p>
            <button className={styles.primaryButton}>Work with us ↗</button>
            <a className={styles.textLink}>See our approach ↗</a>
          </article>
          <article className={styles.darkPanel}>
            <span className={styles.icon}>♧</span>
            <h3>Climate education</h3>
            <p>Clear, local learning that connects cooking choices to climate action.</p>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.responsiveSection}`}>
        <div className={styles.sectionTitle}>
          <span>05</span><h2>Responsive rules</h2>
        </div>
        <div className={styles.rulesGrid}>
          <article><strong>Desktop</strong><span>981px and above</span><p>Four-column cards, split sections and full navigation.</p></article>
          <article><strong>Tablet</strong><span>641px–980px</span><p>Two-column cards, stacked content and simplified navigation.</p></article>
          <article><strong>Mobile</strong><span>Up to 640px</span><p>Single-column flow, tighter gutters and touch-friendly actions.</p></article>
        </div>
      </section>
    </main>
  );
}
