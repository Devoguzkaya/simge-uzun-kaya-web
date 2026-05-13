import Link from 'next/link';
import React from 'react';

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-ivory text-pine flex flex-col pt-32 pb-24 px-6 lg:px-12 selection:bg-accent-terracotta selection:text-ivory">
            <div className="max-w-[1440px] mx-auto w-full">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-16 hover:opacity-70 transition-opacity">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Ana Sayfaya Dön
                </Link>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-5/12 shrink-0">
                        <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] lg:sticky lg:top-32 text-pine uppercase">
                            Çerez<br />
                            <span className="italic font-light text-accent-terracotta normal-case">Politikası.</span>
                        </h1>
                    </div>

                    <div className="lg:w-7/12 flex flex-col gap-12 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-4">
                            Son Güncelleme: 10 Mart 2026
                        </p>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">1. Çerez (Cookie) Nedir?</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, telefon, tablet vb.) kaydedilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin daha verimli çalışmasını sağlamak ve kullanım istatistikleri çıkarmak için kullanılır.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">2. Ne Tür Çerezler Kullanıyoruz?</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed mb-4">
                                Web sitemizde asgari düzeyde ve tamamen anonim olarak çerez kullanılmaktadır. Reklam veya pazarlama amaçlı, cihazınızdan kişisel bilgi çeken çerezler (Facebook Piksel, Google Adsense vb.) sistemler <strong>kullanılmamaktadır.</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-pine/80 font-light leading-relaxed marker:text-accent-terracotta">
                                <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel fonksiyonlarının düzgün bir biçimde çalışabilmesi için şart olan teknik çerezlerdir.</li>
                                <li><strong>Analitik/Performans Çerezleri (Vercel Analytics):</strong> Web sitemizin hız ölçümlerini kontrol edebilmek ve ziyaret sayılarını metrik olarak görmek için Vercel altyapısının zorunlu kıldığı, kimliğinizi tespit etmeyen tamamen anonim analiz çerezleridir.</li>
                            </ul>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">3. Çerez Yönetimi ve Devre Dışı Bırakma</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                İnternet tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkânına sahipsiniz. Tarayıcı ayarlarınızdan çerezleri reddedebilir veya cihazınıza bir çerez gönderildiğinde uyarı verecek şekilde yapılandırabilirsiniz. Çerezleri kapatmanız donanımsal arızalara sebebiyet vermese de sitemizin bazı görsel fonksiyonlarının daha yavaş yüklenmesine neden olabilir.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
