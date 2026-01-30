import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark/50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50/50 dark:bg-stone-800/30 rounded-[2rem] p-8 lg:p-12 overflow-hidden relative border border-orange-100 dark:border-stone-700">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-yellow via-primary to-accent-coral"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full aspect-[3/4] md:aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative z-10">
                <img className="w-full h-full object-cover object-center" data-alt="Simge Uzun Kaya portresi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQv29dIQQ5uZNiMGgeMiKXGNO2gB7jYm4skHPJiXcx-bcAo-5dBqw5IwtKtMMVxvyIZjucCtEslBAfXWKL7PfF_AAVH6yukj7Z3r72-D7OtnDb9OCl8HICic_9_PqruOiXkxfaKs8ZOsebJm1KCpF5_QCLLTIyG6vlPGkf3fkA9z1J6xwN24NsxVTfCwSrQBKgxHl8LgpPtySb3m3gq0UnWujbZ8udQB2uzht7Ng0cKsQWXAjAh--ysF4kLB1qz7nAN5GWyQ3ILiZ2" />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-2xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-coral/20 rounded-full blur-xl z-0"></div>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Hakkımda</span>
                <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Merhaba, ben Simge Uzun Kaya.</h2>
                <p className="text-text-muted/80 dark:text-stone-300 text-lg leading-relaxed mb-4">
                  10 yılı aşkın süredir çocukların karmaşık duygusal dünyalarında yol almalarına yardımcı olan, kendini işine adamış bir psikolojik danışmanım. Yaklaşımım, çocukların kendilerini güvende hissetmelerini sağlayan sıcak, empatik bir bağ ile klinik uzmanlığı dengeler.
                </p>
                <p className="text-text-muted/80 dark:text-stone-300 text-lg leading-relaxed">
                  Her çocuğun oyun, sanat veya sohbet yoluyla kendine özgü bir ifade dili olduğuna inanıyorum. Amacım, bu dili çözmek ve hem çocuğu hem de ailesini güçlendirmektir.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="bg-white dark:bg-stone-800 py-2 px-4 rounded-lg shadow-sm border border-orange-100 dark:border-stone-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">school</span>
                  <span className="text-sm font-semibold text-text-main dark:text-white">Psikoloji Doktora</span>
                </div>
                <div className="bg-white dark:bg-stone-800 py-2 px-4 rounded-lg shadow-sm border border-orange-100 dark:border-stone-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-coral text-xl">favorite</span>
                  <span className="text-sm font-semibold text-text-main dark:text-white">Empati Odaklı</span>
                </div>
              </div>
              <div className="mt-4">
                <img className="h-12 opacity-60 dark:invert hue-rotate-15 sepia" data-alt="Simge Uzun Kaya imzası" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW0JjgOI-E-Dr_34sOTHhxgG01x3FOCNp2BoFp8JBOufpTuDcUL5j4TiS5-ZkcFHpfVL4sTpzlltcd5JfS5HyAi_89ydRJk3gNVsIS77ug2KAzRWd7R7W0j3kIB7OAXYBdxHuJrDvLAP3q5omNGzWJwR8bPnkECb1ClrQLlAXUg6oEM2rF9QZ-YiohVdTJy4dw5Ct8scvgVtroWDjxs1CLOIyEKhsIuAq8xAje4bE4AjtS9VEzN860Ohrfg5rKkvu4DTpRJe4aSDQA" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
