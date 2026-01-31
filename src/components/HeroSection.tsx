import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-50/50 to-transparent">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-yellow/30 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-blue/30 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider w-fit mx-auto lg:mx-0 border border-orange-200">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Yeni Danışan Kabul Ediliyor
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main dark:text-white leading-[1.15] tracking-tight">
              Minik Zihinleri <br className="hidden lg:block" />
              <span className="relative inline-block text-primary">
                Sevgiyle
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-yellow opacity-80" preserveAspectRatio="none" viewBox="0 0 100 10">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                </svg>
              </span>
              Büyütüyoruz
            </h1>
            <p className="text-lg text-text-muted/80 dark:text-stone-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Çocuğunuzun benzersiz yolculuğu için profesyonel psikolojik destek. Büyüme, anlama ve iyileşme için güvenli, sıcak bir alan sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all shadow-md shadow-primary/20">
                Randevu Oluştur
              </button>
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-white border-2 border-primary/20 text-primary font-bold hover:bg-orange-50 transition-colors dark:bg-white/5 dark:border-white/10 dark:text-white">
                Daha Fazla Bilgi
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 opacity-90">
              <div className="flex -space-x-3">
                <div className="size-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                  <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAklwsou_us2BO3Xbrq2zAxKmJ2ZW8-3Ouu2sVQdeRWgl3Erv7OpOsiEWbUGk61rCPlnMFPfWjGsoAekqofukyCpI75IEhUtkmhqdgdRJuMF0LAVDRFa1Nad5HaTbs46XlS5qA2buETteUX3tSZCxt18HJZMsm9vp2ifWwIU4ElUDiQDw9w9CXOuqDNYwFKh6x60v43rX1hbOOeNMITdw-Xa1nO2UP_NrHkOBjsEa7JCfQHK5TIAHvmrt0YXJyB54c6gXw31yEVELmg" alt="Mutlu çocuk 1" sizes="40px" />
                </div>
                <div className="size-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                  <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL0i84lKYNVsElCQPaZyqadAbqsh2b7Qe8gsb8ofas3BsUG66wOvqLqQvHFjvB9TxuoOsGcKkK7TSE5TQNgfwM1CG0zJcQS1asAyCPje52WjIUfTFHndUzUH5uMYjn5y0HnXL0co2xNlxDr02toMBHGAuZt-qhDjpokPo8_vgkLa1zOcICPDlECebelslGLk_2zTbs3Z8DrEuroDpt4RpYs0jgOJf-rLMA6OZbtOBXipwPUwDxxpXOHDtVpxq9a0FXYY_TmmMPewR9" alt="Mutlu çocuk 2" sizes="40px" />
                </div>
                <div className="size-10 rounded-full border-2 border-white relative overflow-hidden bg-gray-200">
                  <Image fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWnHdCe3P6bI1-pcch-_gZ4BDgSc2JHr8BsygGxG2ouiFrCoU28LubCYOVumTldA0acpiG29QQhWj0FEm8zuY80SjM9wzdhMU2QYhEDVtwVKa6RMSvzFimcmWNvM66c78tl7urJEID-n1HqBqr0EsVKCTGfuhnFAX36H1W-cfh0Q9MQTxo3R66GL8NdTQvqIbSlS_9kanBMu-KGvDSE_3koCCXZAMKsG0rj9qG6mRuKOG1k0U0_rlTuisKZhN15ZooQDTVzA5ys8wW" alt="Mutlu çocuk 3" sizes="40px" />
                </div>
              </div>
              <p className="text-sm font-semibold text-text-main dark:text-white">500+ Aile Tarafından Güveniliyor</p>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/10 transform rotate-2 hover:rotate-0 transition-all duration-500 border-4 border-white dark:border-stone-700">
              <Image
                alt="Renkli ahşap bloklarla oynayan çocuk"
                className="object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdl-WpOn3SORZxs6B-Sp-B-IFEuxx5ImWod6YvWFXiSz_-RNZe5CopZ76oysLTbPrHeY-6M4wo0t2pJ95bzd1kWI4NzRuErHVBtM3eOMwz4v38DqRtSF_0U0FcfjUn7pv3P0UMjXVcVI3gklxkKS1Med37Mv_mRI4QzfpEPi-18cIlCDwzc8ZxrlW324gQkcBiRpcwTjuFuaKZFgpR9IcmybgAFVAo3vif97JXCY_F8T1oM9szZlTosrxwn0CNEYwadBacEbThyJgG"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-stone-800 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce border border-orange-50" style={{ animationDuration: "3s" }}>
              <div className="bg-accent-yellow/20 p-2 rounded-lg text-yellow-600">
                <span className="material-symbols-outlined">sentiment_satisfied</span>
              </div>
              <div>
                <p className="text-xs text-stone-500 dark:text-stone-400">Mutluluk Skoru</p>
                <p className="text-sm font-bold text-text-main dark:text-white">%98 Pozitif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;