import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white/50 dark:bg-stone-900/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main dark:text-white mb-4">
          Hizmet Alanlarımız
        </h2>
        <p className="text-lg text-text-muted/80 dark:text-stone-400 max-w-2xl mx-auto">
          6 aydan itibaren her yaş grubuna özel, bilimsel temelli ve empati odaklı danışmanlık yaklaşımlarımızla yanınızdayız.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Çocuk, Ergen & Yetişkin Danışmanlığı */}
          <div className="flex flex-col bg-white dark:bg-stone-800 rounded-3xl p-8 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Çocuk, Ergen & Yetişkin</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
              6 aydan itibaren her gelişim evresine özel duygusal destek ve danışmanlık.
            </p>
            <div className="mt-auto w-full h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/services/1.png"
                alt="Çocuk, Ergen ve Yetişkin Danışmanlığı"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* 2. Deneyimsel Oyun Terapisi */}
          <div className="flex flex-col bg-white dark:bg-stone-800 rounded-3xl p-8 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-accent-yellow/10 flex items-center justify-center mb-6 text-yellow-600 group-hover:bg-accent-yellow group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Oyun Terapisi</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
              Çocukların dünyayı anlamlandırma yolu olan oyunu kullanarak çözüm odaklı terapi süreci.
            </p>
            <div className="mt-auto w-full h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/services/oyunterapisi.png"
                alt="Deneyimsel Oyun Terapisi Seansı"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* 3. Moxo Dikkat Testi */}
          <div className="flex flex-col bg-white dark:bg-stone-800 rounded-3xl p-8 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6 text-orange-600 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">timer</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Moxo Dikkat Testi</h3>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-2">Moxo Dikkat Testi</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-8 leading-relaxed">
              Dikkat, dürtüsellik ve hiperaktivite performansını ölçen bilgisayar destekli klinik test.
            </p>
            <div className="mt-auto w-full h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/services/moxo.png"
                alt="Moxo Dikkat Testi Uygulaması"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* 4. Attentioner Dikkat Programı */}
          <div className="flex flex-col bg-white dark:bg-stone-800 rounded-3xl p-8 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-accent-coral/10 flex items-center justify-center mb-6 text-rose-500 group-hover:bg-accent-coral group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Attentioner Programı</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
              7-18 yaş arası dikkat ve odaklanma becerilerini geliştiren nöropsikolojik tabanlı eğitim.
            </p>
            <div className="mt-auto w-full h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/services/attention2.png"
                alt="Attentioner Dikkat Programı Eğitimi"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* 5. Sınav Danışmanlığı */}
          <div className="flex flex-col bg-white dark:bg-stone-800 rounded-3xl p-8 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Sınav Danışmanlığı</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
              Sınav kaygısı ve motivasyon yönetimiyle öğrencilerin başarılarını zirveye taşıma.
            </p>
            <div className="mt-auto w-full h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/services/exam.png"
                alt="Öğrenciler için Sınav Danışmanlığı ve Rehberlik"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* 6. Online Danışmanlık */}
          <div className="flex flex-col bg-white dark:bg-stone-800 rounded-3xl p-8 border border-orange-100 dark:border-stone-700 shadow-xl shadow-orange-900/5 hover:-translate-y-2 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">videocam</span>
            </div>
            <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Online Danışmanlık</h3>
            <p className="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
              Mesafe fark etmeksizin, güvenli dijital platformlar üzerinden ev konforunda destek.
            </p>
            <div className="mt-auto w-full h-48 rounded-2xl bg-gray-100 overflow-hidden relative">
              <Image
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                src="/images/services/online.png"
                alt="Güvenli Platformlar üzerinden Online Danışmanlık"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
