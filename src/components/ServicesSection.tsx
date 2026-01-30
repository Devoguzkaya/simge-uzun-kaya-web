'use client';

import React, { useRef } from 'react';

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      if (direction === 'left') {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 overflow-hidden relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-3">Terapi Hizmetleri</h2>
          <p className="text-text-muted/80 dark:text-stone-400">Çocuğunuzun gelişimsel ihtiyaçlarını desteklemek için tasarlanmış özel tedavileri keşfedin.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-gray-200 dark:border-stone-700 flex items-center justify-center hover:bg-orange-50 dark:hover:bg-stone-800 transition-colors text-text-main dark:text-white"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar pb-10 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8 space-x-6 snap-x snap-mandatory"
      >
        <div className="w-0 sm:w-2 shrink-0"></div>
        
        <div className="snap-start shrink-0 w-80 md:w-96 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 dark:shadow-none hover:-translate-y-1 transition-transform duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-accent-yellow/20 flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">extension</span>
          </div>
          <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Oyun Terapisi</h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
            Çocukların düşüncelerini ve duygularını ifade edecek sözel dile sahip olmadıkları durumlarda, kendilerini ifade etmelerine yardımcı olmak için oyunu kullanır.
          </p>
          <div className="w-full h-48 rounded-xl bg-gray-100 overflow-hidden relative">
            <img className="w-full h-full object-cover" data-alt="Renkli oyuncaklar" src="" /> 
            <a className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-white text-text-main" href="#">Detaylar</a>
          </div>
        </div>

        <div className="snap-start shrink-0 w-80 md:w-96 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 dark:shadow-none hover:-translate-y-1 transition-transform duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">diversity_3</span>
          </div>
          <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Aile Danışmanlığı</h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
            Ailenin sağlığını ve işlevselliğini etkileyen belirli sorunları ele almak, bağları güçlendirmek ve iletişimi geliştirmek için tasarlanmıştır.
          </p>
          <div className="w-full h-48 rounded-xl bg-gray-100 overflow-hidden relative">
            <img className="w-full h-full object-cover" data-alt="El ele tutuşan aile" src="" /> 
            <a className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-white text-text-main" href="#">Detaylar</a>
          </div>
        </div>

        <div className="snap-start shrink-0 w-80 md:w-96 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 dark:shadow-none hover:-translate-y-1 transition-transform duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-accent-blue/20 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">self_improvement</span>
          </div>
          <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Kaygı Yönetimi</h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
            Çocuklara günlük durumlarda kaygılarını anlamaları ve yönetmeleri için pratik araçlar ve stratejiler sunar.
          </p>
          <div className="w-full h-48 rounded-xl bg-gray-100 overflow-hidden relative">
            <img className="w-full h-full object-cover" data-alt="Sakin su yüzeyi" src="" /> 
            <a className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-white text-text-main" href="#">Detaylar</a>
          </div>
        </div>

        <div className="snap-start shrink-0 w-80 md:w-96 bg-white dark:bg-stone-800 rounded-2xl p-6 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 dark:shadow-none hover:-translate-y-1 transition-transform duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-accent-coral/20 flex items-center justify-center mb-6 text-rose-500 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">psychology_alt</span>
          </div>
          <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Eğitsel Değerlendirmeler</h3>
          <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
            Öğrenme güçlü ve zayıf yönlerini belirlemek ve akademik başarının önünü açmak için kapsamlı değerlendirmeler.
          </p>
          <div className="w-full h-48 rounded-xl bg-gray-100 overflow-hidden relative">
            <img className="w-full h-full object-cover" data-alt="Açık kitap" src="" /> 
            <a className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-white text-text-main" href="#">Detaylar</a>
          </div>
        </div>

        <div className="w-0 sm:w-2 shrink-0"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
