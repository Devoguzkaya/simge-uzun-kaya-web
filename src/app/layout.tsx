import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Plus Jakarta Sans'ı import ediyoruz
import "./globals.css";

// Plus Jakarta Sans fontunu yüklüyoruz
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"], // Tüm ağırlıkları ekledik
  variable: "--font-display",
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
  "telephone": "+905054363957",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Meydan Kapı Mah. 222. Sk. No:2 Kat:2", // Adres bilgisine göre güncellenebilir
    "addressLocality": "Sinop",
    "addressRegion": "Merkez",
    "postalCode": "57000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.0267, // Sinop Yaklaşık Koordinat
    "longitude": 35.1511
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
    "https://www.instagram.com/pdrsimgeuzunkaya/"
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
    <html lang="tr" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-main overflow-x-hidden selection:bg-primary/30`} // Tailwind sınıfları eklendi
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
