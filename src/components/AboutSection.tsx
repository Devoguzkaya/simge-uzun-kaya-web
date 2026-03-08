import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-32 bg-[#FDFBF7] dark:bg-[#1A1A1A] relative overflow-hidden" id="about">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E8F3E9] dark:bg-[#2D3A2E] rounded-full blur-[150px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Side (40%) */}
          <div className="w-full lg:w-[40%] relative">
            <div className="relative aspect-[3/4] w-full max-w-[450px] mx-auto rounded-t-full rounded-b-[2rem] overflow-hidden border border-[#D9C5A3]">
              <Image
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                alt="Simge Uzun Kaya"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQv29dIQQ5uZNiMGgeMiKXGNO2gB7jYm4skHPJiXcx-bcAo-5dBqw5IwtKtMMVxvyIZjucCtEslBAfXWKL7PfF_AAVH6yukj7Z3r72-D7OtnDb9OCl8HICic_9_PqruOiXkxfaKs8ZOsebJm1KCpF5_QCLLTIyG6vlPGkf3fkA9z1J6xwN24NsxVTfCwSrQBKgxHl8LgpPtySb3m3gq0UnWujbZ8udQB2uzht7Ng0cKsQWXAjAh--ysF4kLB1qz7nAN5GWyQ3ILiZ2"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-[#4A6741] mix-blend-multiply opacity-20 pointer-events-none" />
            </div>
          </div>

          {/* Text Side (60%) */}
          <div className="w-full lg:w-[60%] flex flex-col items-start">
            <span className="text-[#8B7355] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Hakkımda
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] leading-tight mb-8">
              Çocukların dilini anlamak, <br className="hidden md:block" />
              <span className="italic font-light">onların dünyasında</span> var olmaktır.
            </h2>
            
            <div className="space-y-6 text-[#5C5C5C] dark:text-[#B0B0B0] text-lg font-light leading-relaxed max-w-2xl">
              <p>
                Sinop&apos;ta 10 yılı aşkın süredir çocukların karmaşık duygusal dünyalarında yol almalarına yardımcı olan, kendini işine adamış bir psikolojik danışmanım. Yaklaşımım, çocukların kendilerini güvende hissetmelerini sağlayan sıcak, empatik bir bağ ile klinik uzmanlığı dengeler.
              </p>
              <p>
                Her çocuğun oyun, sanat veya sohbet yoluyla kendine özgü bir ifade dili olduğuna inanıyorum. Amacım, bu dili çözmek ve hem çocuğu hem de ailesini güçlendirmektir.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 border-t border-[#E8F3E9] dark:border-[#2D3A2E] pt-8 w-full max-w-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-serif text-[#4A6741] dark:text-[#E8F3E9]">Psikoloji Doktora</span>
                <span className="text-[10px] uppercase tracking-widest text-[#8B7355] font-bold">Akademik Temel</span>
              </div>
              <div className="w-px h-12 bg-[#E8F3E9] dark:bg-[#2D3A2E] hidden md:block"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-serif text-[#4A6741] dark:text-[#E8F3E9]">Empati Odaklı</span>
                <span className="text-[10px] uppercase tracking-widest text-[#8B7355] font-bold">Terapi Yaklaşımı</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
