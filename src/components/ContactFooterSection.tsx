import Link from 'next/link';
import React from 'react';

const ContactFooterSection = () => {
  return (
    <section className="bg-primary/5 dark:bg-stone-900 pt-20 pb-10" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-stone-800 rounded-[2rem] p-8 md:p-12 shadow-xl shadow-orange-900/5 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-100 dark:border-stone-700 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">Tanışmaya hazır mısınız?</h2>
            <p className="text-text-muted/80 dark:text-stone-400 mb-8">Sizi dinlemek için buradayız. Aileniz için doğru kişi olup olmadığımızı görmek adına ücretsiz 15 dakikalık bir ön görüşme planlayın.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-orange-100 dark:bg-stone-700 dark:border-stone-600 hover:bg-orange-50 dark:hover:bg-stone-600 transition-colors text-text-main dark:text-white font-medium shadow-sm" href="tel:+905551234567">
                <span className="material-symbols-outlined text-primary">call</span>
                +90 555 123 4567
              </a>
              <a className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-orange-100 dark:bg-stone-700 dark:border-stone-600 hover:bg-orange-50 dark:hover:bg-stone-600 transition-colors text-text-main dark:text-white font-medium shadow-sm" href="mailto:iletisim@simgeuzunkaya.com">
                <span className="material-symbols-outlined text-primary">mail</span>
                iletisim@simgeuzunkaya.com
              </a>
            </div>
          </div>
          <div className="relative z-10">
            <button className="flex items-center justify-center w-full sm:w-auto h-16 px-10 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white text-lg font-bold hover:shadow-lg hover:shadow-primary/40 transition-all transform hover:-translate-y-1 shadow-md shadow-primary/20">
              Randevu Alın
            </button>
            <p className="text-xs text-center text-stone-500 mt-3">Sevk gerekmez</p>
          </div>
        </div>
        <div className="border-t border-orange-200 dark:border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">psychology</span>
            <span className="font-bold text-text-main dark:text-white">Simge Uzun Kaya</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-stone-500 dark:text-stone-400">
            <Link className="hover:text-primary transition-colors" href="#">Gizlilik Politikası</Link>
            <Link className="hover:text-primary transition-colors" href="#">Hizmet Şartları</Link>
          </div>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition-all border border-orange-50 dark:border-stone-700" href="#">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center text-stone-400 hover:text-primary hover:shadow-md transition-all border border-orange-50 dark:border-stone-700" href="#">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
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
