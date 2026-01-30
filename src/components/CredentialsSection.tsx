import React from 'react';

const CredentialsSection = () => {
  return (
    <section className="py-20 bg-orange-50/30 dark:bg-black/20" id="credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-white mb-4">Sertifikalar ve Üyelikler</h2>
          <p className="text-text-muted/80 dark:text-stone-400 max-w-2xl mx-auto">Sürekli öğrenme ve profesyonel akreditasyon yoluyla en yüksek standartlarda bakım sağlama.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-sm border border-orange-100 dark:border-stone-700 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h4 className="font-bold text-text-main dark:text-white text-lg leading-tight mb-2">Marmara Üniversitesi</h4>
            <p className="text-sm text-stone-500 dark:text-stone-400">Psikolojik Danışmanlık ve Rehberlik</p>
            <p className="text-xs text-stone-400 mt-2 font-medium">Lisans Eğitimi</p>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-sm border border-orange-100 dark:border-stone-700 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span>
            </div>
            <h4 className="font-bold text-text-main dark:text-white text-lg leading-tight mb-2">19 Mayıs Üniversitesi</h4>
            <p className="text-sm text-stone-500 dark:text-stone-400">Aile Danışmanlığı</p>
            <p className="text-xs text-stone-400 mt-2 font-medium">Yüksek Lisans</p>
          </div>

          <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 shadow-sm border border-orange-100 dark:border-stone-700 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
              <span className="material-symbols-outlined text-3xl">award_star</span>
            </div>
            <h4 className="font-bold text-text-main dark:text-white text-lg leading-tight mb-2">Oyun Terapisi Sertifikası</h4>
            <p className="text-sm text-stone-500 dark:text-stone-400">Oyun Terapisi Derneği</p>
            <p className="text-xs text-stone-400 mt-2 font-medium">Kayıtlı Oyun Terapisti</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
