import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-ivory text-pine flex flex-col pt-32 pb-24 px-6 lg:px-12 selection:bg-accent-terracotta selection:text-ivory">
            <div className="max-w-[1440px] mx-auto w-full">
                {/* Return Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-16 hover:opacity-70 transition-opacity">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Ana Sayfaya Dön
                </Link>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    {/* 90/10 Left side - Devasa Başlık */}
                    <div className="lg:w-5/12 shrink-0">
                        <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] lg:sticky lg:top-32 text-pine">
                            Gizlilik<br />
                            <span className="italic font-light text-accent-terracotta">Politikası.</span>
                        </h1>
                    </div>

                    {/* 90/10 Right side - Temiz blok */}
                    <div className="lg:w-7/12 flex flex-col gap-12 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-4">
                            Son Güncelleme: 10 Mart 2026
                        </p>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">1. Veri Sorumlusu</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Simge Uzun Kaya (bundan böyle "Biz" veya "Danışmanlık" olarak anılacaktır), danışanlarımızın ve web sitemizi ziyaret edenlerin kişisel verilerinin korunmasına büyük önem vermekteyiz. Bu politika, hangi verileri topladığımızı ve nasıl kullandığımızı açıklar.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">2. Toplanan Veriler ve Özel Nitelikli Kişisel Veriler</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed mb-4">Aşağıdaki durumlarda kişisel verileriniz işlenebilir:</p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-pine/80 font-light leading-relaxed marker:text-accent-terracotta">
                                <li><strong>Kimlik ve İletişim:</strong> Adınız, soyadınız, telefon numaranız ve e-posta adresiniz.</li>
                                <li><strong>Özel Nitelikli Kişisel Veriler:</strong> Randevu ve seans taleplerinde beyan ettiğiniz çocuk, ergen veya yetişkin birey ile ilgili ruhsal durum, psikolojik değerlendirme ve sağlık raporlarına dair ön bilgiler.</li>
                                <li><strong>Dijital İzler:</strong> Web sitemizi ziyaret ettiğinizde çerezler (cookies) aracılığıyla elde edilen anonim cihaz ve kullanım verileri.</li>
                            </ul>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">3. Verilerin İşlenme Amacı ve Paylaşımı</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed mb-4">
                                Topladığımız sağlık, iletişim ve diğer kişisel verileri yalnızca randevu süreçlerini planlamak ve danışmanlık hizmetini doğru sunabilmek için işliyoruz.
                            </p>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                <strong>ÖNEMLİ:</strong> Randevu alma işlemlerimiz, ortak altyapısını kullandığımız Espera Yaşam Merkezi üzerinden gerçekleşmektedir. Randevu sürecinin yönetilebilmesi, faturalandırma ve kayıt oluşturulabilmesi amacıyla kişisel verileriniz Espera Yaşam Merkezi altyapısı ile paylaşılmaktadır. Bunun dışında hiçbir veriniz üçüncü kişi veya reklam şirketleriyle paylaşılmaz.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">4. Veri Güvenliği</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Psikolojik danışmanlık süreci içerisindeki tüm görüşmeler etik kurallar gereği gizli tutulur. Dijital ortamda paylaştığınız özel nitelikli veriler, yetkisiz erişimi engellemek amacıyla gerekli tüm siber güvenlik önlemleri alınarak şifreli sunucularda saklanmaktadır.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">5. Haklarınız</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                KVKK ve ilgili yasal mevzuat kapsamında; verilerinizin silinmesini talep etme, işlenip işlenmediğini öğrenme, işlenen verilerinizin kime aktarıldığını bilme haklarına sahipsiniz. Haklarınızı kullanmak için iletişim numaralarımız üzerinden bize her zaman ulaşabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
