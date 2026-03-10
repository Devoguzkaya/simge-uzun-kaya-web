'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-ivory dark:bg-background-dark pt-32 pb-20 lg:pt-40 lg:pb-0">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] bg-pine/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col items-center justify-center">

        {/* Massive Typographic Center */}
        <div className="w-full max-w-6xl flex flex-col items-center text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 rounded-full border border-accent-terracotta/30 text-accent-terracotta text-xs font-bold uppercase tracking-[0.2em] bg-ivory/50 dark:bg-pine/50 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent-terracotta animate-pulse"></span>
            Yeni Danışan Kabul Ediliyor
          </motion.div>

          <h1 className="text-[14vw] lg:text-[10vw] font-serif leading-[0.9] tracking-tight text-pine dark:text-ivory mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block"
            >
              Çocuk, Ergen
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="block italic font-light text-accent-terracotta my-2 lg:my-0"
            >
              & Aile
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block"
            >
              ve Yetişkin.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl lg:text-3xl text-pine/70 dark:text-ivory/70 font-light leading-relaxed max-w-3xl mx-auto mb-16"
          >
            Sinop&apos;un kalbinde, güvenle büyüme yolculuğunuza eşlik eden <span className="font-medium text-pine dark:text-ivory">profesyonel ve şefkatli</span> bir dokunuş.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href={siteConfig.links.esperaRandevu} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden bg-pine dark:bg-ivory text-ivory dark:text-pine px-12 py-5 rounded-full text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10">Randevu Oluştur</span>
              <div className="absolute inset-0 bg-accent-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="#services" className="px-12 py-5 rounded-full text-lg font-bold border border-pine/20 dark:border-ivory/20 text-pine dark:text-ivory hover:bg-pine/5 dark:hover:bg-ivory/5 transition-all outline-none">
              Daha Fazla Bilgi
            </a>
          </motion.div>
        </div>

        {/* Floating Asymmetric Image */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="absolute hidden lg:block right-[5%] top-[15%] w-[320px] aspect-[3/4] rounded-[48px] overflow-hidden shadow-2xl z-10 border-[6px] border-ivory/50 backdrop-blur-sm"
        >
          <Image
            alt="Psikolojik Danışman Simge Uzun Kaya"
            className="object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdl-WpOn3SORZxs6B-Sp-B-IFEuxx5ImWod6YvWFXiSz_-RNZe5CopZ76oysLTbPrHeY-6M4wo0t2pJ95bzd1kWI4NzZe5CopZ76oysLTbPrHeY-6M4wo0t2pJ95bzd1kWI4NzRuErHVBtM3eOMwz4v38DqRtSF_0U0FcfjUn7pv3P0UMjXVcVI3gklxkKS1Med37Mv_mRI4QzfpEPi-18cIlCDwzc8ZxrlW324gQkcBiRpcwTjuFuaKZFgpR9IcmybgAFVAo3vif97JXCY_F8T1oM9szZlTosrxwn0CNEYwadBacEbThyJgG"
            fill
            priority={true}
            sizes="320px"
          />
        </motion.div>

        {/* Bottom Metrics */}
        <div className="mt-32 pt-12 border-t border-pine/10 dark:border-ivory/10 flex flex-wrap justify-center gap-16 lg:gap-32 w-full max-w-5xl">
          {[
            { label: "Güven", value: "1000+", sub: "Aile Tarafından" },
            { label: "Deneyim", value: "8+", sub: "Yıl Uzmanlık" },
            { label: "Memnuniyet", value: "%98", sub: "Pozitif Geri Bildirim" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl lg:text-5xl font-serif text-pine dark:text-ivory mb-2">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent-terracotta font-bold">{stat.sub} {stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;