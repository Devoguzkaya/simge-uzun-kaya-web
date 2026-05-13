import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-transparent relative overflow-hidden border-b border-pine/5 dark:border-ivory/5" id="about">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-12 w-full max-w-5xl">
          <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
            Hakkımda
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-pine dark:text-ivory leading-[1.1] mx-auto tracking-tight">
            Çocukların dilini anlamak, <br className="hidden md:block" />
            <span className="italic font-light text-accent-terracotta">onların dünyasında</span> var olmaktır.
          </h2>
        </div>

        {/* Editorial Layout: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start w-full max-w-6xl">

          {/* Subtle Image Column */}
          <div className="lg:col-span-4 relative w-full aspect-square rounded-3xl overflow-hidden group">
            <Image
              className="object-cover filter grayscale hover:grayscale-0 transition-all duration-[1500ms]"
              alt="Simge Uzun Kaya"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQv29dIQQ5uZNiMGgeMiKXGNO2gB7jYm4skHPJiXcx-bcAo-5dBqw5IwtKtMMVxvyIZjucCtEslBAfXWKL7PfF_AAVH6yukj7Z3r72-D7OtnDb9OCl8HICic_9_PqruOiXkxfaKs8ZOsebJm1KCpF5_QCLLTIyG6vlPGkf3fkA9z1J6xwN24NsxVTfCwSrQBKgxHl8LgpPtySb3m3gq0UnWujbZ8udQB2uzht7Ng0cKsQWXAjAh--ysF4kLB1qz7nAN5GWyQ3ILiZ2"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-pine mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity duration-1000" />
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-lg lg:text-xl text-pine/80 dark:text-ivory/80 leading-relaxed font-light mb-8">
              <span className="text-6xl lg:text-7xl font-serif text-accent-terracotta float-none lg:float-left mr-0 lg:mr-6 mt-2 mb-4 lg:mb-2 leading-none">S</span>
              imge Uzun Kaya olarak, Sinop'ta çocuk, ergen ve yetişkin danışanlarımıza profesyonel psikolojik destek sunuyoruz. İnsanın kendi iç dünyasına yaptığı yolculuğun, en kıymetli yolculuk olduğuna inanıyoruz.
            </p>

            {/* Micro-Stats / Credentials Line */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6 pt-10 border-t border-pine/10 dark:border-ivory/10 w-full">
              <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl lg:text-3xl font-serif text-pine dark:text-ivory">Psikoloji Doktora</span>
                <span className="text-[10px] uppercase tracking-widest text-accent-terracotta font-bold">Akademik Temel</span>
              </div>
              <div className="flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl lg:text-3xl font-serif text-pine dark:text-ivory">Empati Odaklı</span>
                <span className="text-[10px] uppercase tracking-widest text-accent-terracotta font-bold">Terapi Yaklaşımı</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
