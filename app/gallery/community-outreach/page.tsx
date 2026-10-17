import type { Metadata } from "next";
import GalleryPage, { type GalleryImage } from "../gallery-page";

export const metadata: Metadata = {
  title: "Community Cookstove Outreach",
  description: "A ZiRA community session focused on practical clean cooking education and cookstove demonstrations.",
};

const images: GalleryImage[] = [
  { src: "/gallery/community/community-8408.webp", width: 1800, height: 1200, alt: "Women gathered for a ZiRA clean cooking community session" },
  { src: "/gallery/community/community-8442.webp", width: 1800, height: 1200, alt: "Community members observing a practical clean cooking demonstration" },
  { src: "/gallery/community/community-8469.webp", width: 1800, height: 1200, alt: "ZiRA team and community participants with a clean cookstove" },
  { src: "/gallery/community/community-8475.webp", width: 1800, height: 1226, alt: "Community participants standing with a ZiRA clean cookstove" },
  { src: "/gallery/community/community-8484.webp", width: 1800, height: 1200, alt: "Women and ZiRA team members after the cookstove session" },
  { src: "/gallery/community/community-8499.webp", width: 1800, height: 1278, alt: "ZiRA outreach team members at the community event" },
  { src: "/gallery/community/community-8508.webp", width: 1800, height: 1219, alt: "ZiRA team members during the community outreach" },
  { src: "/gallery/community/community-8518.webp", width: 1398, height: 1800, alt: "A pot cooking over the ZiRA clean cookstove" },
  { src: "/gallery/community/community-8519.webp", width: 1800, height: 1287, alt: "A woman preparing food with a ZiRA clean cookstove" },
  { src: "/gallery/community/community-8522.webp", width: 1446, height: 1800, alt: "A woman demonstrating everyday cooking on a ZiRA stove" },
  { src: "/gallery/community/community-8526.webp", width: 1800, height: 1499, alt: "A ZiRA clean cookstove ready for use" },
  { src: "/gallery/community/community-8544.webp", width: 1800, height: 1200, alt: "Community participants examining the ZiRA clean cookstove" },
];

export default function CommunityOutreachPage() {
  return (
    <GalleryPage
      title="Community Cookstove Outreach"
      label="Clean cooking demonstration"
      description="A practical community session where women explored cleaner cooking, saw the ZiRA stove in use and discussed solutions that fit everyday meals, household budgets and local routines."
      hero={{ src: "/gallery/community/community-8492.webp", width: 1800, height: 1214, alt: "ZiRA team and community members gathered after a clean cooking outreach" }}
      images={images}
    />
  );
}
