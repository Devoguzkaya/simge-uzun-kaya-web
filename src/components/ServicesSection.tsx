'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    id: "01",
    title: "Çocuk, Ergen & Yetişkin",
    desc: "6 aydan itibaren her gelişim evresine özel duygusal destek ve danışmanlık.",
    img: "/images/services/1.png",
    videoId: "dQw4w9WgXcQ"
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
    <section className="py-32 lg:py-48 bg-pine text-ivory relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-accent-terracotta/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Content */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Uzmanlık Alanları
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-ivory leading-tight">
              Klinik <span className="italic font-light text-accent-terracotta">Hizmetlerimiz.</span>
            </h2>
          </div>
          <div className="md:pb-4 max-w-sm">
            <p className="text-ivory/70 text-lg lg:text-xl font-light leading-relaxed">
              Bilimsel temelli ve empati odaklı yaklaşımlarımızla her yaş grubuna özel destek.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar -mx-6 px-6 lg:-mx-12 lg:px-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[500px] lg:w-[600px] flex flex-col justify-between p-10 lg:p-14 bg-ivory text-pine rounded-[40px] snap-center hover:-translate-y-2 transition-transform duration-500 min-h-[500px] overflow-hidden cursor-pointer"
              onClick={() => playingVideoId === service.id ? setPlayingVideoId(null) : setPlayingVideoId(service.id)}
            >
              {/* Item Meta */}
              <div className="relative z-30 flex justify-between items-start mb-12">
                <span className="text-xs font-bold font-serif text-accent-terracotta border border-accent-terracotta/30 rounded-full px-5 py-2 bg-ivory/90 backdrop-blur-sm">
                  {service.id}
                </span>
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${playingVideoId === service.id ? 'bg-red-600 border-red-600 text-white' : 'border-pine/20 bg-ivory/90 backdrop-blur-sm group-hover:bg-accent-terracotta group-hover:border-accent-terracotta group-hover:text-pine'}`}>
                  <span className="material-symbols-outlined">{playingVideoId === service.id ? 'close' : 'play_arrow'}</span>
                </div>
              </div>

              {/* Item Content */}
              <div className={`relative z-10 transition-opacity duration-300 ${playingVideoId === service.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <h3 className="text-3xl lg:text-4xl font-serif text-pine mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-pine/70 font-light text-lg lg:text-xl leading-relaxed max-w-sm">
                  {service.desc}
                </p>
                <div className="mt-8 flex items-center text-sm font-bold text-accent-terracotta opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined mr-2">smart_display</span>
                  Videoyu İzle
                </div>
              </div>

              {/* Video/Image Backing */}
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
                  <Image src={service.img} alt={service.title} fill className="object-cover" />
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
