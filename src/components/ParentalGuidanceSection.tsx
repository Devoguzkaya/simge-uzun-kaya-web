import React from 'react';
import Image from 'next/image';

const ParentalGuidanceSection = () => {
  return (
    <section className="py-32 bg-ivory dark:bg-background-dark relative overflow-hidden">
      {/* Editorial Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-terracotta/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <div className="order-2 lg:order-1 flex flex-col items-start">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-accent-terracotta/30 text-accent-terracotta text-xs font-bold uppercase tracking-[0.2em] mb-10 bg-white/50 dark:bg-pine/50 backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">family_restroom</span>
              Ebeveyn Rehberliği
            </div>

            <h2 className="text-5xl lg:text-7xl font-serif text-pine dark:text-ivory leading-[1.1] mb-8">
              Ebeveynleri Güçlendiriyor, <br />
              <span className="italic font-light text-accent-terracotta">Aileleri Birleştiriyoruz.</span>
            </h2>

            <p className="text-xl text-pine/70 dark:text-ivory/70 mb-12 font-light leading-relaxed max-w-xl">
              Çocuk yetiştirmek tek başına yürünmemesi gereken bir yolculuktur. Çocuğunuzun gelişimsel evrelerinde güven ve sakinlikle yol almanıza yardımcı olmak için özel danışmanlık ve stratejiler sunuyoruz.
            </p>

            <ul className="space-y-6 mb-12 w-full max-w-xl">
              {[
                "Günlük stres ve duygusal zorluklarla başa çıkmak için pratik araçlar.",
                "Gelişimsel dönemleri ve davranışları anlama konusunda rehberlik.",
                "Çocuğunuzla daha güçlü, daha empatik bağlar kurma."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 border-b border-pine/5 dark:border-ivory/5 pb-6">
                  <span className="flex-shrink-0 mt-1 w-8 h-8 rounded-full border border-accent-terracotta/30 flex items-center justify-center text-accent-terracotta">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <span className="text-pine/80 dark:text-ivory/80 text-lg font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-12 py-5 rounded-full text-lg font-bold border border-pine/20 dark:border-ivory/20 text-pine dark:text-ivory hover:bg-pine hover:text-ivory transition-all outline-none">
              Ebeveyn Desteğini Keşfet
            </button>
          </div>

          <div className="order-1 lg:order-2 relative w-full aspect-[4/5] rounded-[48px] overflow-hidden group">
            <Image
              alt="Ebeveyn ve çocuk parkta el ele yürüyor"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK8Hf5ZIoBBNObsfSqTLwp2e7we7iojw3xmHcyK9NS9nPZ-Nq2OJvV36rgjaGgP063IMwMPf_zRr8tpJ-gmHNlJwD8qokgtKJ5IumU6_CcENPDx7r6BpO_OpnNxdqt0GAPpyr0ykbwgZP2A6GmIoeG0OF7bxZjLKRpVjbeC6QxWnXFus6XQvQINA0jLqGTPOwXGHU62xdqf-uZrvzcM6vvAytqEU029q1UgB4MAYZia-wjqSd5NaAADasRQdIehsjCbR_rQGCJX55h"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-pine mix-blend-multiply opacity-20 pointer-events-none" />

            <div className="absolute bottom-10 left-10 right-10 bg-ivory/90 backdrop-blur-md p-8 rounded-[32px] border border-ivory/20 hidden md:block group-hover:bg-white transition-colors duration-500">
              <p className="font-serif text-3xl text-pine mb-2">"Çocuğunuzun en iyi terapisti sizsiniz."</p>
              <p className="text-sm uppercase tracking-widest font-bold text-accent-terracotta">Simge Uzun Kaya</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParentalGuidanceSection;
