'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-32 pb-12 lg:pt-40 lg:pb-16 border-b border-pine/5 dark:border-ivory/5">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -right-[10%] w-[50%] h-[60%] bg-accent-spark/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[50%] bg-pine/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Text Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 relative z-20 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-pine/10 dark:border-ivory/10 text-pine/70 dark:text-ivory/70 text-xs font-bold uppercase tracking-[0.2em] bg-white/50 dark:bg-pine/50 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-accent-terracotta animate-pulse"></span>
              Çocuk, Ergen & Yetişkin Danışmanlığı
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-pine dark:text-ivory leading-[1.1]"
            >
              Ebeveynleri Güçlendiriyor,<br />
              <span className="italic font-light text-accent-terracotta">Aileleri Birleştiriyoruz.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg lg:text-xl text-pine/70 dark:text-ivory/70 font-light leading-relaxed max-w-md"
            >
              Sinop'un kalbinde, güvenle büyüme yolculuğunuza eşlik eden profesyonel bir dokunuş. Çocuk yetiştirme sürecinde yalnız değilsiniz.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4 w-full max-w-lg"
            >
              {[
                "Çocuk ve ergenler için sağaltıcı oyun terapisi",
                "Gelişimsel dönemleri anlama konusunda rehberlik",
                "Yetişkinler için bireysel ve çift danışmanlığı"
              ].map((item, i) => (
                <li key={i} className="flex items-center justify-center lg:justify-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-accent-terracotta/40 flex items-center justify-center text-accent-terracotta">
                    <span className="material-symbols-outlined text-[12px]">check</span>
                  </span>
                  <span className="text-pine/80 dark:text-ivory/80 text-base lg:text-lg font-light leading-snug">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <a
                href={siteConfig.links.esperaRandevu}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:min-w-[220px] text-center bg-accent-spark text-ivory px-8 py-4 rounded-full text-base font-bold transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
              >
                Randevu Oluştur
              </a>
              <a
                href="#services"
                className="w-full sm:min-w-[220px] text-center px-8 py-4 rounded-full text-base font-bold border border-pine/20 dark:border-ivory/20 text-pine dark:text-ivory hover:bg-pine/5 dark:hover:bg-ivory/5 transition-all hover:scale-[1.02] active:scale-95 outline-none"
              >
                Hizmetleri İncele
              </a>
            </motion.div>
          </div>

          {/* Right Image Side */}
          <div className="lg:col-span-5 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="relative w-full aspect-square lg:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl z-10 border border-pine/5 dark:border-ivory/5"
            >
              <Image
                alt="Ebeveyn ve çocuk rehberliği"
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-[1500ms]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8Hf5ZIoBBNObsfSqTLwp2e7we7iojw3xmHcyK9NS9nPZ-Nq2OJvV36rgjaGgP063IMwMPf_zRr8tpJ-gmHNlJwD8qokgtKJ5IumU6_CcENPDx7r6BpO_OpnNxdqt0GAPpyr0ykbwgZP2A6GmIoeG0OF7bxZjLKRpVjbeC6QxWnXFus6XQvQINA0jLqGTPOwXGHU62xdqf-uZrvzcM6vvAytqEU029q1UgB4MAYZia-wjqSd5NaAADasRQdIehsjCbR_rQGCJX55h"
                fill
                priority={true}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-pine mix-blend-multiply opacity-10 pointer-events-none" />
            </motion.div>

            {/* Quote Overlay */}
            <div className="absolute bottom-8 left-8 right-8 bg-ivory/90 backdrop-blur-md p-6 rounded-[32px] border border-ivory/20 shadow-xl z-20">
              <p className="font-serif text-2xl text-pine mb-1">"Çocuğunuzun en iyi terapisti sizsiniz."</p>
              <p className="text-xs uppercase tracking-widest font-bold text-accent-terracotta">Simge Uzun Kaya</p>
            </div>
          </div>
        </div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="grid grid-cols-2 gap-4 lg:gap-12 pt-8 lg:pt-12 border-t border-pine/10 dark:border-ivory/10 w-full">
            <div className="text-center lg:text-left">
              <span className="block text-3xl lg:text-4xl font-serif text-accent-terracotta mb-1">6+</span>
              <span className="text-[10px] lg:text-xs uppercase tracking-widest text-pine/60 dark:text-ivory/60">Yıllık Deneyim</span>
            </div>
            <div className="text-center lg:text-left">
              <span className="block text-3xl lg:text-4xl font-serif text-accent-terracotta mb-1">1500+</span>
              <span className="text-[10px] lg:text-xs uppercase tracking-widest text-pine/60 dark:text-ivory/60">Mutlu Danışan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;