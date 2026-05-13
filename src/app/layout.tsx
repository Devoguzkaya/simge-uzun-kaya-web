import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Simge Uzun Kaya | Sinop Psikolojik Danışman & Oyun Terapisti",
    template: "%s | Simge Uzun Kaya"
  },
  description: "Sinop'ta çocuk, ergen ve aile psikolojisi alanında uzman kadromuzla yanınızdayız. Deneyimsel Oyun Terapisi, Moxo Dikkat Testi ve profesyonel psikolojik destek.",
  keywords: ["Sinop Psikolog", "Sinop Psikolojik Danışman", "Oyun Terapisi Sinop", "Simge Uzun Kaya", "Çocuk Psikoloğu Sinop", "Moxo Testi Sinop"],
  authors: [{ name: "Simge Uzun Kaya" }],
  creator: "Simge Uzun Kaya",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://simgeuzunkaya.com",
    title: "Simge Uzun Kaya | Sinop Psikolojik Danışman",
    description: "Sinop'ta çocuk ve aile odaklı profesyonel psikolojik destek.",
    siteName: "Simge Uzun Kaya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simge Uzun Kaya | Sinop Psikolojik Danışman",
    description: "Sinop'ta çocuk ve aile odaklı profesyonel psikolojik destek.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Simge Uzun Kaya Psikolojik Danışmanlık",
  "image": "https://simgeuzunkaya.com/logo.png", // Domain olunca güncellenecek
  "@id": "https://simgeuzunkaya.com",
  "url": "https://simgeuzunkaya.com",
  "telephone": "+905522610057",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gazi Cad. (Eski Kervansaray Karşısı)",
    "addressLocality": "Sinop",
    "addressRegion": "Merkez",
    "postalCode": "57000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.00639,
    "longitude": 35.11305
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/sinop.psikolojikdanismanlik/"
  ]
};

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // html etiketine "light" sınıfını ekledik.
    <html lang="tr" className="light" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} font-sans antialiased text-text-main overflow-x-hidden`}
        aria-label="Root layout"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
