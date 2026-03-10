import React from 'react';

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
    <section className="py-32 bg-ivory dark:bg-background-dark relative overflow-hidden" id="credentials">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent-terracotta text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
              Akreditasyon
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-pine dark:text-ivory leading-tight">
              Eğitim ve <br />
              <span className="italic font-light text-accent-terracotta">Sertifikalar.</span>
            </h2>
          </div>
          <div className="lg:pb-4">
            <p className="text-xl text-pine/70 dark:text-ivory/70 max-w-sm font-light">
              Sürekli öğrenme ve güncel bilimsel yaklaşımlarla en iyi destek.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((cred, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between p-10 lg:p-14 bg-white dark:bg-pine/20 rounded-[40px] border border-pine/5 dark:border-ivory/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 min-h-[380px]"
            >
              <div className="flex justify-between items-start mb-16">
                <div className="w-20 h-20 rounded-[24px] bg-ivory dark:bg-pine border border-pine/10 dark:border-ivory/10 flex items-center justify-center text-pine dark:text-ivory group-hover:bg-accent-terracotta group-hover:text-pine group-hover:border-accent-terracotta transition-all duration-500">
                  <span className="material-symbols-outlined text-4xl">{cred.icon}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-terracotta opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-serif text-pine dark:text-ivory mb-4 leading-snug">
                  {cred.institution}
                </h3>
                <p className="text-pine/70 dark:text-ivory/70 font-light text-lg mb-6">
                  {cred.program}
                </p>
                <div className="w-12 h-[2px] bg-accent-terracotta/30 mb-6 group-hover:w-24 group-hover:bg-accent-terracotta transition-all duration-500" />
                <p className="text-xs uppercase tracking-[0.2em] text-accent-terracotta font-bold">
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
