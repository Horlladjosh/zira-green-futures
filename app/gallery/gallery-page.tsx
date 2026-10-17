import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ContactSection from "../contact-section";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type GalleryPageProps = {
  title: string;
  label: string;
  description: string;
  hero: GalleryImage;
  images: GalleryImage[];
  reportHref?: string;
  video?: {
    src: string;
    poster: string;
    title: string;
  };
};

export default function GalleryPage({ title, label, description, hero, images, reportHref, video }: GalleryPageProps) {
  return (
    <main id="top">
      <SiteHeader />

      <section className="gallery-hero">
        <Image
          src={hero.src}
          alt={hero.alt}
          className="gallery-hero-image"
          fill
          priority
          sizes="100vw"
        />
        <div className="gallery-hero-wash" />
        <div className="gallery-hero-content section-shell">
          <p>{label}</p>
          <h1>{title}</h1>
          <div className="gallery-hero-summary">{description}</div>
          {reportHref && (
            <a className="pill-button gallery-report-button" href={reportHref} target="_blank" rel="noreferrer">
              Read our report <ArrowUpRight size={18} strokeWidth={2.2} />
            </a>
          )}
        </div>
      </section>

      {video && (
        <section className="gallery-video-section section-shell" aria-labelledby="gallery-video-title">
          <div className="gallery-video-heading">
            <h2 id="gallery-video-title">{video.title}</h2>
            <p>Watch the community demonstration unfold, from introducing the stove to preparing a meal together.</p>
          </div>
          <video controls preload="metadata" poster={video.poster} playsInline>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </section>
      )}

      <section className="gallery-section section-shell" aria-label={`${title} photographs`}>
        <div className="gallery-intro">
          <h2>Highlights from the community engagement</h2>
        </div>
        <div className="masonry-gallery">
          {images.map((image) => (
            <figure className="gallery-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 720px) calc(100vw - 32px), (max-width: 1100px) 48vw, 31vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
