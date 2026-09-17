import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://www.greathelpplumbing.co.uk";
const businessName = "Great Help Plumbing & Electrics";
const phone = "+441174790289";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Great Help Plumbing & Electrics | Emergency Plumbing & Electrical Service",
    template: "%s | Great Help Plumbing & Electrics",
  },
  description:
    "Great Help Plumbing & Electrics is a family-run service providing fast emergency plumbing and electrical help, leak repairs, blocked drain support, pipework repairs, bathroom plumbing and electrical repairs.",
  keywords: [
    "Great Help Plumbing & Electrics",
    "emergency plumber",
    "emergency electrician",
    "plumbing service",
    "electrical service",
    "leak repair",
    "blocked drains",
    "bathroom plumbing",
    "electrical repairs",
    "pipe repairs",
  ],
  openGraph: {
    title: "Great Help Plumbing & Electrics",
    description:
      "Family-run plumbing and electrical help with emergency response typically within 30 minutes to 1 hour.",
    url: siteUrl,
    siteName: businessName,
    images: [
      {
        url: "/images/plumbing-hero.png",
        width: 1536,
        height: 1024,
        alt: "Professional plumbing and home repair service scene",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["Plumber", "Electrician"],
  name: businessName,
  url: siteUrl,
  telephone: phone,
  image: `${siteUrl}/images/plumbing-hero.png`,
  description:
    "Family-run plumbing and electrical service offering emergency support, leak repairs, blocked drain assistance, pipework, taps, toilets, bathroom plumbing and electrical repairs.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: "Service area available on request",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
