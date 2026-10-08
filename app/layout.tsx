import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://ziragreen.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZiRA Green Futures Initiative | Clean Cooking for Every Home",
    template: "%s | ZiRA Green Futures Initiative",
  },
  description: "Expanding access to affordable, cleaner and more efficient cooking solutions for underserved communities.",
  keywords: ["clean cooking", "clean cookstoves", "bio-briquettes", "climate education", "Nigeria", "energy access"],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "ZiRA Green Futures Initiative",
    title: "Better cooking. Brighter futures.",
    description: "Affordable, efficient and locally adapted clean cooking solutions for underserved communities.",
    images: [{ url: "/zira-og-image.jpg", width: 1200, height: 630, alt: "A woman cooking with a ZiRA clean cookstove" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better cooking. Brighter futures.",
    description: "Affordable, efficient and locally adapted clean cooking solutions for underserved communities.",
    images: ["/zira-og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b3d2e",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "ZiRA Green Futures Initiative",
  url: siteUrl,
  logo: `${siteUrl}/zira-logo.png`,
  description: "A social-impact NGO expanding access to cleaner, more efficient cooking across rural and peri-urban communities.",
  areaServed: "Nigeria",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+2349012335037",
    contactType: "general enquiries",
  },
  sameAs: ["https://instagram.com/zira_green26"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
