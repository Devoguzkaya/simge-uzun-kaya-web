import Link from 'next/link';
import React from 'react';
import { siteConfig } from '@/config/site';
import { InstagramIcon } from './icons/InstagramIcon';

const ContactFooterSection = () => {
  return (
    <section className="bg-primary/5 dark:bg-stone-900 pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-stone-800 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-orange-900/5 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-100 dark:border-stone-700 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">Tanışmaya hazır mısınız?</h2>
            <p className="text-text-muted/80 dark:text-stone-400 mb-8">Sizi dinlemek için buradayız. Aileniz için doğru kişi olup olmadığımızı görmek adına ücretsiz 15 dakikalık bir ön görüşme planlayın.</p>
            <div className="flex flex-col gap-3 items-start">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-orange-100 dark:bg-stone-700 dark:border-stone-600 hover:bg-orange-50 dark:hover:bg-stone-600 transition-colors text-text-main dark:text-white font-medium shadow-sm w-full sm:w-auto" href={`tel:${siteConfig.contact.phone1_clean}`}>
                <span className="material-symbols-outlined text-primary">call</span>
                {siteConfig.contact.phone1}
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-orange-100 dark:bg-stone-700 dark:border-stone-600 hover:bg-orange-50 dark:hover:bg-stone-600 transition-colors text-text-main dark:text-white font-medium shadow-sm w-full sm:w-auto" href={`tel:${siteConfig.contact.phone2_clean}`}>
                <span className="material-symbols-outlined text-primary">call</span>
                {siteConfig.contact.phone2}
              </a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-orange-100 dark:bg-stone-700 dark:border-stone-600 hover:bg-orange-50 dark:hover:bg-stone-600 transition-colors text-text-main dark:text-white font-medium shadow-sm w-full sm:w-auto" href={`mailto:${siteConfig.contact.email}`}>
                <span className="material-symbols-outlined text-primary">mail</span>
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
          <div className="relative z-10 w-full sm:w-auto">
            <a
              href={siteConfig.links.esperaRandevu}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-16 px-10 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-lg font-bold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1 shadow-md shadow-primary/20"
            >
              Espera üzerinden Randevu Alın
            </a>
            <p className="text-xs text-center text-stone-500 mt-3">Yönlendirme: Espera Yaşam Merkezi</p>
          </div>
        </div>
        <div className="border-t border-orange-200 dark:border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo_arkaplansiz.png" alt="Simge Uzun Kaya Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold text-text-main dark:text-white">Simge Uzun Kaya</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-stone-500 dark:text-stone-400">
            <Link className="hover:text-primary transition-colors" href="/privacy">Gizlilik Politikası</Link>
            <Link className="hover:text-primary transition-colors" href="/terms">Hizmet Şartları</Link>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition-all border border-orange-50 dark:border-stone-700"
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram'da Takip Et">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-stone-400">
          © {new Date().getFullYear()} Simge Uzun Kaya. Tüm hakları saklıdır.
        </div>
      </div>
    </section>
  );
};

export default ContactFooterSection;
