'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FDFBF7] dark:bg-[#1A1A1A] pt-32 pb-20 lg:pt-40 lg:pb-0">
      {/* Background Decorative Elements - Organic Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[10%] -left-[5%] w-[50%] h-[60%] bg-[#E8F3E9] dark:bg-[#2D3A2E] rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[50%] bg-[#F3E9D2] dark:bg-[#3A332D] rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-0">

          {/* Left Side: Massive Typography (90% Visual Weight) */}
          <div className="w-full lg:w-[85%] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-[#D9C5A3] text-[#8B7355] text-xs font-bold uppercase tracking-[0.2em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] animate-pulse"></span>
              Yeni Danışan Kabul Ediliyor
            </motion.div>

            <h1 className="text-[12vw] lg:text-[10vw] font-serif leading-[0.85] tracking-[-0.04em] text-[#2C3E2D] dark:text-[#E8F3E9] mb-8 lg:mb-0">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="block"
              >
                Çocuk, Ergen <span className="italic font-light">& Aile</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="block pl-[10vw] lg:pl-[15vw] text-[#4A6741]"
              >
                ve Yetişkin.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-xl mt-12 lg:pl-[15vw]"
            >
              <p className="text-xl lg:text-2xl text-[#5C5C5C] dark:text-[#B0B0B0] font-light leading-relaxed mb-10">
                Sinop&apos;un kalbinde, çocuğunuzun dünyasına eşlik eden <span className="font-medium text-[#2C3E2D] dark:text-white">profesyonel ve şefkatli</span> bir dokunuş. Güvenle büyüme yolculuğuna davetlisiniz.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="group relative overflow-hidden bg-[#2C3E2D] text-[#FDFBF7] px-10 py-5 rounded-full text-lg font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <span className="relative z-10">Randevu Oluştur</span>
                  <div className="absolute inset-0 bg-[#4A6741] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
                <a href="#services" className="inline-flex items-center justify-center px-10 py-5 rounded-full text-lg font-bold border border-[#2C3E2D] text-[#2C3E2D] dark:border-[#E8F3E9] dark:text-[#E8F3E9] hover:bg-[#2C3E2D] hover:text-[#FDFBF7] dark:hover:bg-[#E8F3E9] dark:hover:text-[#1A1A1A] transition-all">
                  Daha Fazla Bilgi
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Asymmetric Visual (10% Space, but Deep Impact) */}
          <div className="w-full lg:w-[15%] relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "circOut" }}
              className="absolute w-[280px] lg:w-[450px] aspect-[3/4] lg:right-0 bg-white p-4 shadow-2xl shadow-black/5 rounded-[2rem] z-20 overflow-hidden border border-[#F3E9D2]"
            >
              <Image
                alt="Psikolojik Danışman Simge Uzun Kaya"
                className="object-cover rounded-[1.5rem]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdl-WpOn3SORZxs6B-Sp-B-IFEuxx5ImWod6YvWFXiSz_-RNZe5CopZ76oysLTbPrHeY-6M4wo0t2pJ95bzd1kWI4NzZe5CopZ76oysLTbPrHeY-6M4wo0t2pJ95bzd1kWI4NzRuErHVBtM3eOMwz4v38DqRtSF_0U0FcfjUn7pv3P0UMjXVcVI3gklxkKS1Med37Mv_mRI4QzfpEPi-18cIlCDwzc8ZxrlW324gQkcBiRpcwTjuFuaKZFgpR9IcmybgAFVAo3vif97JXCY_F8T1oM9szZlTosrxwn0CNEYwadBacEbThyJgG"
                fill
                priority={true}
                sizes="(max-width: 768px) 280px, 450px"
              />
              {/* Texture Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10 pointer-events-none" />
            </motion.div>

            {/* Layered Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-20 w-32 h-32 bg-[#D9C5A3] rounded-full blur-3xl opacity-40 z-10"
            />
          </div>

        </div>

        {/* Bottom Metrics: Staggered Fade In */}
        <div className="mt-20 lg:mt-32 pt-10 border-t border-[#E8F3E9] flex flex-wrap gap-12 lg:gap-24">
          {[
            { label: "Güven", value: "1000+", sub: "Aile Tarafından" },
            { label: "Deneyim", value: "8+", sub: "Yıl Uzmanlık" },
            { label: "Memnuniyet", value: "%98", sub: "Pozitif Geri Bildirim" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-3xl font-serif text-[#2C3E2D] dark:text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-widest text-[#8B7355] mt-1">{stat.sub} {stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;