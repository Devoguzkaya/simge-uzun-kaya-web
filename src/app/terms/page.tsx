import Link from 'next/link';
import React from 'react';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background-light py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-900/5 border border-orange-100">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:gap-3 transition-all">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Ana Sayfaya Dön
                </Link>

                <h1 className="text-4xl font-black text-text-main mb-8">Hizmet Şartları</h1>

                <div className="prose prose-orange max-w-none space-y-6 text-text-muted/80 leading-relaxed">
                    <p className="font-semibold text-text-main">Son Güncelleme: 30 Ocak 2026</p>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">1. Hizmet Kapsamı</h2>
                        <p>
                            Simge Uzun Kaya tarafından sunulan hizmetler; çocuk psikolojisi, aile danışmanlığı ve eğitsel değerlendirme alanlarını kapsayan profesyonel danışmanlık hizmetleridir. Bu web sitesi üzerinden randevu talebi oluşturulması, bir danışman-danışan ilişkisinin kurulduğu anlamına gelmez; bu ilişki ancak ilk görüşme ve karşılıklı onay sonrasında başlar.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">2. Randevu ve İptal Koşulları</h2>
                        <p>
                            Planlanan randevulara zamanında katılım esastır. Gelemeyeceğiniz randevuları en az 24 saat öncesinden bildirmeniz rica olunur. Bu süre zarfında bildirilmeyen iptaller, danışmanlık sürecinin verimliliğini etkileyebileceği için değerlendirmeye alınacaktır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">3. Etik Kurallar ve Gizlilik</h2>
                        <p>
                            Tüm danışmanlık süreçleri Türk Psikologlar Derneği etik yönetmeliğine uygun olarak yürütülür. Danışan gizliliği en üst düzeyde korunur. Ancak, danışanın kendisine veya bir başkasına zarar verme riski gibi hayati durumlarda yasal zorunluluklar gereği bildirim yapılabilir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">4. Kullanım Hakları</h2>
                        <p>
                            Bu web sitesinde yer alan tüm metinler, logolar ve görseller Simge Uzun Kaya'ya aittir. İzinsiz kopyalanması veya ticari amaçla kullanılması yasaktır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-text-main mb-4">5. Sorumluluk Reddi</h2>
                        <p>
                            Web sitemizde paylaşılan bilgiler bilgilendirme amaçlıdır ve profesyonel bir tıbbi tanı veya tedavi yerine geçmez. Acil durumlarda lütfen en yakın sağlık kuruluşuna başvurun.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
