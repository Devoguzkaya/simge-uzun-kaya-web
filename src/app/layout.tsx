import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Plus Jakarta Sans'ı import ediyoruz
import "./globals.css";

// Plus Jakarta Sans fontunu yüklüyoruz
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display", // Tailwind config'deki font-display ile eşleşiyor
});

export const metadata: Metadata = {
  title: "Simge Uzun Kaya - Psikolojik Danışman", // Güncellendi
  description: "Simge Uzun Kaya, çocuk ve aile psikolojisi alanında uzmanlaşmış bir psikolojik danışmandır. Çoçukların ve ebeveynlerin duygusal refahını desteklemek için güvenli ve destekleyici bir ortam sunar.", // Güncellendi
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // html etiketine "light" sınıfını ekledik.
    // Material Symbols Outlined fontunu doğrudan buraya import edemiyoruz, CSS'ten çekeceğiz.
    <html lang="tr" className="light">
      <body
        className={`${plusJakartaSans.variable} font-display antialiased bg-background-light dark:bg-background-dark text-text-main overflow-x-hidden selection:bg-primary/30`} // Tailwind sınıfları eklendi
      >
        {children}
      </body>
    </html>
  );
}
