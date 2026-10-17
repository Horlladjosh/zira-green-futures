import type { Metadata } from "next";
import GalleryPage, { type GalleryImage } from "../gallery-page";

export const metadata: Metadata = {
  title: "Community Sensitization",
  description: "ZiRA's clean cooking community entry and baseline outreach in Piko Village, Bwari Area Council, Abuja.",
};

const images: GalleryImage[] = [
  { src: "/gallery/piko/piko-014.webp", width: 1800, height: 1206, alt: "ZiRA team members with community representatives in Piko Village" },
  { src: "/gallery/piko/piko-022.webp", width: 1800, height: 1252, alt: "Piko Village participants holding ZiRA clean cooking materials" },
  { src: "/gallery/piko/piko-024.webp", width: 1800, height: 1200, alt: "A focus group discussion with women in Piko Village" },
  { src: "/gallery/piko/piko-030.webp", width: 1800, height: 1379, alt: "Women taking part in the Piko Village baseline discussion" },
  { src: "/gallery/piko/piko-034.webp", width: 1800, height: 1200, alt: "ZiRA team listening to women during a Piko Village discussion" },
  { src: "/gallery/piko/piko-040.webp", width: 1350, height: 1800, alt: "A traditional three-stone cooking fire in Piko Village" },
  { src: "/gallery/piko/piko-048.webp", width: 1169, height: 928, alt: "A woman beside collected firewood in Piko Village" },
  { src: "/gallery/piko/piko-050.webp", width: 1169, height: 974, alt: "A large stack of household firewood in Piko Village" },
  { src: "/gallery/piko/piko-058.webp", width: 1800, height: 1200, alt: "Women reviewing clean cooking information during the outreach" },
  { src: "/gallery/piko/piko-060.webp", width: 1800, height: 1200, alt: "Piko Village women discussing clean cooking materials together" },
];

export default function PikoOutreachPage() {
  return (
    <GalleryPage
      title="Community Sensitization"
      label="Piko Village · Abuja · April 2026"
      description="ZiRA met with 20 women in Piko Village to understand daily cooking realities, health concerns and what an affordable transition to cleaner cooking should look like."
      hero={{ src: "/gallery/piko/piko-020.webp", width: 1800, height: 1200, alt: "Women and ZiRA team members in a Piko Village focus group discussion" }}
      images={images}
    />
  );
}
