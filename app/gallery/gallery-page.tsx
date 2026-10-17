import Image from "next/image";
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
};

export default function GalleryPage({ title, label, description, hero, images }: GalleryPageProps) {
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
        </div>
      </section>

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
