import React from 'react';
import Image from 'next/image';

const ParentalGuidanceSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-accent-yellow/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-200 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-200 dark:border-orange-800/50">
              <span className="material-symbols-outlined text-sm">family_restroom</span>
              Ebeveyn Rehberliği
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main dark:text-white mb-6 leading-tight">
              Ebeveynleri Güçlendiriyor, <br />
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-coral">Aileleri Birleştiriyoruz</span>
            </h2>
            <p className="text-lg text-text-muted/80 dark:text-stone-300 mb-8 leading-relaxed">
              Çocuk yetiştirmek tek başına yürünmemesi gereken bir yolculuktur. Çocuğunuzun gelişimsel evrelerinde güven ve sakinlikle yol almanıza yardımcı olmak için özel danışmanlık ve stratejiler sunuyoruz.
            </p>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center text-yellow-700 dark:text-yellow-400">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </span>
                <span className="text-stone-600 dark:text-stone-300 text-lg">Günlük stres ve duygusal zorluklarla başa çıkmak için pratik araçlar.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center text-yellow-700 dark:text-yellow-400">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </span>
                <span className="text-stone-600 dark:text-stone-300 text-lg">Gelişimsel dönemleri ve davranışları anlama konusunda rehberlik.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-accent-yellow/20 flex items-center justify-center text-yellow-700 dark:text-yellow-400">
                  <span className="material-symbols-outlined text-base font-bold">check</span>
                </span>
                <span className="text-stone-600 dark:text-stone-300 text-lg">Çocuğunuzla daha güçlü, daha empatik bağlar kurma.</span>
              </li>
            </ul>
            <button className="inline-flex items-center justify-center h-14 px-8 rounded-xl bg-orange-100 text-primary-dark font-bold hover:bg-orange-200 dark:bg-orange-900/40 dark:text-orange-100 dark:hover:bg-orange-900/60 transition-all border border-orange-200 dark:border-orange-800">
              Ebeveyn Desteğini Keşfet
            </button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-stone-700 rotate-2 hover:rotate-0 transition-transform duration-500 group aspect-[4/3]">
              <Image
                alt="Ebeveyn ve çocuk parkta el ele yürüyor"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8Hf5ZIoBBNObsfSqTLwp2e7we7iojw3xmHcyK9NS9nPZ-Nq2OJvV36rgjaGgP063IMwMPf_zRr8tpJ-gmHNlJwD8qokgtKJ5IumU6_CcENPDx7r6BpO_OpnNxdqt0GAPpyr0ykbwgZP2A6GmIoeG0OF7bxZjLKRpVjbeC6QxWnXFus6XQvQINA0jLqGTPOwXGHU62xdqf-uZrvzcM6vvAytqEU029q1UgB4MAYZia-wjqSd5NaAADasRQdIehsjCbR_rQGCJX55h"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-bold text-2xl mb-2 font-display">"Çocuğunuzun en iyi terapisti sizsiniz."</p>
                <p className="text-base opacity-90 font-medium text-orange-100">Bu potansiyeli ortaya çıkarmanızda size yardımcı oluyoruz.</p>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-orange-100 dark:bg-stone-800 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-accent-yellow rounded-full blur-2xl opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentalGuidanceSection;
