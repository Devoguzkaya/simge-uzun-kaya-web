import React from 'react';
import { motion } from 'framer-motion';

const credentials = [
  {
    institution: "Marmara Üniversitesi",
    program: "Psikolojik Danışmanlık ve Rehberlik",
    type: "Lisans Eğitimi",
    icon: "school"
  },
  {
    institution: "Ondokuz Mayıs Üniversitesi",
    program: "Evlilik ve Aile Danışmanlığı",
    type: "Yüksek Lisans Eğitimi",
    icon: "workspace_premium"
  },
  {
    institution: "Oyun Terapisi Derneği",
    program: "Sertifikalı Oyun Terapisti",
    type: "Uluslararası Akreditasyon",
    icon: "psychology"
  }
];

const CredentialsSection = () => {
  return (
    <section className="py-32 bg-[#FDFBF7] dark:bg-[#1A1A1A] relative overflow-hidden" id="credentials">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#8B7355] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Akreditasyon
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] leading-tight">
              Eğitim ve <br />
              <span className="italic font-light">Sertifikalar.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-xl text-[#5C5C5C] dark:text-[#B0B0B0] max-w-sm font-light">
              Sürekli öğrenme ve güncel bilimsel yaklaşımlarla en iyi destek.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#E8F3E9] dark:border-[#2D3A2E]">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-10 lg:p-12 border-b border-r border-[#E8F3E9] dark:border-[#2D3A2E] hover:bg-white dark:hover:bg-[#2D3A2E]/20 transition-colors duration-500 min-h-[350px]"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-16 h-16 rounded-2xl bg-[#FDFBF7] border border-[#E8F3E9] dark:bg-[#1A1A1A] dark:border-[#2D3A2E] flex items-center justify-center text-[#4A6741] group-hover:bg-[#4A6741] group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">{cred.icon}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B7355] bg-[#E8F3E9]/50 px-3 py-1 rounded-full">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] mb-3 leading-snug">
                  {cred.institution}
                </h3>
                <p className="text-[#5C5C5C] dark:text-[#B0B0B0] font-light mb-4">
                  {cred.program}
                </p>
                <div className="w-8 h-[1px] bg-[#D9C5A3] mb-4 group-hover:w-16 transition-all duration-500" />
                <p className="text-xs uppercase tracking-widest text-[#8B7355] font-bold">
                  {cred.type}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CredentialsSection;
