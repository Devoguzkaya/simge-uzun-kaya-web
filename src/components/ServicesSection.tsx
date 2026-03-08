'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    id: "01",
    title: "Çocuk, Ergen & Yetişkin",
    desc: "6 aydan itibaren her gelişim evresine özel duygusal destek ve danışmanlık.",
    img: "/images/services/1.png",
    videoId: "dQw4w9WgXcQ" // TODO: Simge Hanım'ın video linki gelecek
  },
  {
    id: "02",
    title: "Oyun Terapisi",
    desc: "Çocukların dünyayı anlamlandırma yolu olan oyunu kullanarak çözüm odaklı terapi süreci.",
    img: "/images/services/oyunterapisi.png",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "03",
    title: "Moxo Dikkat Testi",
    desc: "Dikkat, dürtüsellik ve hiperaktivite performansını ölçen bilgisayar destekli klinik test.",
    img: "/images/services/moxo.png",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "04",
    title: "Attentioner Programı",
    desc: "7-18 yaş arası dikkat ve odaklanma becerilerini geliştiren nöropsikolojik tabanlı eğitim.",
    img: "/images/services/attention2.png",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "05",
    title: "Sınav Danışmanlığı",
    desc: "Sınav kaygısı ve motivasyon yönetimiyle öğrencilerin başarılarını zirveye taşıma.",
    img: "/images/services/exam.png",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "06",
    title: "Online Danışmanlık",
    desc: "Mesafe fark etmeksizin, güvenli dijital platformlar üzerinden ev konforunda destek.",
    img: "/images/services/online.png",
    videoId: "dQw4w9WgXcQ"
  }
];

const ServicesSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-white dark:bg-[#1A1A1A]" id="services">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#8B7355] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Uzmanlık Alanları
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] leading-tight">
              Klinik <br />
              <span className="italic font-light">Hizmetlerimiz.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-xl text-[#5C5C5C] dark:text-[#B0B0B0] max-w-md font-light">
              Bilimsel temelli ve empati odaklı yaklaşımlarımızla her yaş grubuna özel destek.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E8F3E9] dark:border-[#2D3A2E]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-10 lg:p-12 border-b border-r border-[#E8F3E9] dark:border-[#2D3A2E] hover:bg-[#FDFBF7] dark:hover:bg-[#2D3A2E]/20 transition-colors duration-500 min-h-[450px] overflow-hidden cursor-pointer"
              onClick={() => playingVideoId === service.id ? setPlayingVideoId(null) : setPlayingVideoId(service.id)}
            >
              <div className="relative z-30 flex justify-between items-start mb-12">
                <span className="text-sm font-bold text-[#8B7355] border border-[#D9C5A3] rounded-full px-4 py-1 bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-sm">
                  {service.id}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${playingVideoId === service.id ? 'bg-red-600 border-red-600 text-white' : 'border-[#E8F3E9] bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-sm group-hover:bg-[#4A6741] group-hover:border-[#4A6741] group-hover:text-white'}`}>
                  <span className="material-symbols-outlined text-sm">{playingVideoId === service.id ? 'close' : 'play_arrow'}</span>
                </div>
              </div>

              <div className={`relative z-10 transition-opacity duration-300 ${playingVideoId === service.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <h3 className="text-2xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#5C5C5C] dark:text-[#B0B0B0] font-light leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined mr-2 text-base">smart_display</span>
                  Videoyu İzle
                </div>
              </div>

              {/* Video Player or Hover Image Reveal */}
              {playingVideoId === service.id ? (
                <div className="absolute inset-0 z-20 bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${service.videoId}?autoplay=1&controls=1`}
                    title={service.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700 z-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
