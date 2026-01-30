import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background-light py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-900/5 border border-orange-100">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Ana Sayfaya Dön
                </Link>

                <h1 className="text-4xl font-black text-text-main mb-8">Gizlilik Politikası</h1>

                <div className="prose prose-orange max-w-none space-y-6 text-text-muted/80 leading-relaxed">
                    <p className="font-semibold text-text-main">Son Güncelleme: 30 Ocak 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">1. Veri Sorumlusu</h2>
                        <p>
                            Simge Uzun Kaya (bundan böyle "Biz" veya "Danışmanlık" olarak anılacaktır), danışanlarımızın ve web sitemizi ziyaret edenlerin kişisel verilerinin korunmasına büyük önem vermekteyiz. Bu politika, hangi verileri topladığımızı ve nasıl kullandığımızı açıklar.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">2. Toplanan Veriler</h2>
                        <p>Aşağıdaki durumlarda kişisel verileriniz işlenebilir:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>İletişim formunu doldurduğunuzda; adınız, soyadınız, telefon numaranız ve e-posta adresiniz.</li>
                            <li>Randevu taleplerinde; çocuk ve aile ile ilgili temel ön bilgiler.</li>
                            <li>Web sitemizi ziyaret ettiğinizde; çerezler (cookies) aracılığıyla anonim kullanım verileri.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">3. Verilerin Kullanım Amacı</h2>
                        <p>Topladığımız verileri şu amaçlarla kullanıyoruz:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Sizinle iletişime geçmek ve randevu süreçlerini yönetmek.</li>
                            <li>Danışmanlık hizmetlerimizin kalitesini artırmak.</li>
                            <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">4. Veri Güvenliği ve Paylaşımı</h2>
                        <p>
                            Kişisel verileriniz, yasal zorunluluklar veya açık rızanız dışında kesinlikle üçüncü taraflarla paylaşılmaz. Verileriniz, yetkisiz erişimi engellemek amacıyla güvenli sunucularda saklanmaktadır. Psikolojik danışmanlık süreci içerisindeki tüm görüşmeler etik kurallar gereği gizli tutulur.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">5. Haklarınız</h2>
                        <p>
                            KVKK kapsamında; verilerinizin silinmesini talep etme, işlenip işlenmediğini öğrenme ve hatalı verilerin düzeltilmesini isteme haklarına sahipsiniz. Haklarınızı kullanmak için iletisim@simgeuzunkaya.com adresinden bizimle iletişime geçebilirsiniz.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
