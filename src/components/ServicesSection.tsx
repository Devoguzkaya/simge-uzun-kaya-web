'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/services';

const ServicesSection = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Split services array using standard component structure and alternating layouts
  return (
    <section className="py-12 lg:py-16 bg-transparent text-pine dark:text-ivory relative overflow-hidden border-b border-pine/5 dark:border-ivory/5" id="services">
      {/* Editorial Decorative Blob */}
      <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-accent-terracotta/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
            Klinik Hizmetlerimiz
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif text-pine dark:text-ivory leading-[1.1] max-w-4xl">
            Sizin İçin En Doğru <br className="hidden md:block" />
            <span className="italic font-light text-accent-terracotta">Yol Haritası.</span>
          </h2>
        </div>

        {/* Dynamic Zigzag Services Render */}
        <div className="flex flex-col gap-20 lg:gap-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group`}>

                {/* Visual Side */}
                <div className={`relative w-full aspect-square rounded-3xl overflow-hidden ${isEven ? 'lg:order-1 lg:col-span-5' : 'lg:order-2 lg:col-span-5'} bg-pine/5 dark:bg-ivory/5`}>

                  {/* Play Button Overlay (Visible if video not playing) */}
                  <div className={`absolute inset-0 z-30 flex items-center justify-center transition-opacity duration-500 ${playingVideoId === service.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <button
                      onClick={() => setPlayingVideoId(service.id)}
                      className="group/btn w-20 h-20 bg-ivory/90 backdrop-blur-md text-pine border border-ivory/50 rounded-full flex items-center justify-center shadow-2xl hover:bg-accent-terracotta hover:text-ivory hover:border-accent-terracotta hover:scale-110 transition-all duration-500 z-30"
                      aria-label={`${service.title} videosunu oynat`}
                    >
                      <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                    </button>
                  </div>

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
                      <button
                        onClick={() => setPlayingVideoId(null)}
                        className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                  ) : (
                    <div className="absolute inset-0 transition-opacity duration-700 z-10">
                      <Image src={service.img} alt={service.title} fill className="object-cover transform transition-transform duration-[2000ms] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-pine mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-700" />
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className={`flex flex-col items-start ${isEven ? 'lg:order-2 lg:col-span-7' : 'lg:order-1 lg:col-span-7'}`}>
                  {/* Decorative Number */}
                  <span className="text-6xl lg:text-[100px] font-serif text-pine/5 dark:text-ivory/5 leading-none select-none mb-[-20px] lg:mb-[-30px] pointer-events-none font-bold">
                    {service.id}
                  </span>

                  <div className="relative z-10 w-full lg:max-w-lg">
                    <h3 className="text-2xl lg:text-4xl font-serif leading-[1.15] mb-6">
                      {service.title}
                    </h3>

                    <p className="text-pine/70 dark:text-ivory/70 text-base lg:text-lg font-light leading-relaxed mb-8">
                      {service.shortDesc}
                    </p>

                    <Link
                      href={`/hizmetlerimiz/${service.slug}`}
                      className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] group/link border border-pine/20 dark:border-ivory/20 px-8 py-4 rounded-full hover:bg-pine hover:text-ivory dark:hover:bg-ivory dark:hover:text-pine transition-all duration-300"
                    >
                      <span>Detaylı Bilgi</span>
                      <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
