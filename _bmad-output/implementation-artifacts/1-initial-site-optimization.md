# Story 1.1: Web Sitesi Temel İyileştirmeleri ve Mobil Navigasyon

Status: done

## Story

As a Site Sahibi,
I want mobil uyumlu navigasyon ve performanslı bileşenler,
so that kullanıcılar siteyi her cihazda sorunsuz ve hızlı kullanabilsin.

## Acceptance Criteria

1. Mobil hamburger menüsü hem açılmalı hem de kapanmalı.
2. Mobil menü açıldığında modern bir "backdrop-blur" efekti ile gelmeli.
3. Statik bileşenler (örn. ServicesSection) gereksiz 'use client' içermemeli (Server Component olmalı).
4. Sabit bilgiler (tel, mail vb.) merkezi bir config dosyasından çekilmeli.
5. İkonlar ana bileşenleri kirletmemeli, ayrı bileşenlerde tutulmalı.

## Tasks / Subtasks

- [x] Mobil navigasyon state yönetimi eklendi (AC: 1, 2)
  - [x] `Navbar.tsx` içine `useState` ve `toggle` eklendi.
  - [x] Overlay menü tasarımı yapıldı.
- [x] Performans optimizasyonu yapıldı (AC: 3)
  - [x] `ServicesSection.tsx` içindeki `'use client'` kaldırıldı.
- [x] Kod refactoring yapıldı (AC: 4, 5)
  - [x] `src/config/site.ts` oluşturuldu ve sabitler taşındı.
  - [x] Instagram ikonu `InstagramIcon.tsx` olarak ayrıldı.

### Review Follow-ups (AI)

- [x] [AI-Review][High] `<img>` etiketlerini `next/image` bileşeni ile değiştir (Navbar ve ServicesSection)
- [x] [AI-Review][High] Navigasyon linklerini `siteConfig` içine taşıyarak merkezi yönetimi sağla
- [ ] [AI-Review][Medium] `public` klasöründeki dağınık resimleri `/images/services/` altına taşı ve yolları güncelle
- [ ] [AI-Review][Low] Mobil menü için "exit-animation" ekleyerek UX'i iyileştir
- [ ] [AI-Review][Low] Resimler için açıklayıcı `alt` metinleri ekle (SEO)

## Dev Notes

- Next.js 15+ App Router kullanılıyor.
- Stil için Tailwind CSS tercih ediliyor.

## Dev Agent Record

### Agent Model Used

Antigravity (Claude 3.5 Sonnet tabanlı)

### File List

- `src/components/Navbar.tsx`
- `src/components/ServicesSection.tsx`
- `src/config/site.ts`
- `src/components/icons/InstagramIcon.tsx`
- `src/components/ContactFooterSection.tsx`
