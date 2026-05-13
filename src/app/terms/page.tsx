import Link from 'next/link';
import React from 'react';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-ivory text-pine flex flex-col pt-32 pb-24 px-6 lg:px-12 selection:bg-accent-terracotta selection:text-ivory">
            <div className="max-w-[1440px] mx-auto w-full">
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-16 hover:opacity-70 transition-opacity">
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                    Ana Sayfaya Dön
                </Link>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-5/12 shrink-0">
                        <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] lg:sticky lg:top-32 text-pine">
                            Hizmet<br />
                            <span className="italic font-light text-accent-terracotta">Şartları.</span>
                        </h1>
                    </div>

                    <div className="lg:w-7/12 flex flex-col gap-12 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-4">
                            Son Güncelleme: 10 Mart 2026
                        </p>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">1. Hizmet Kapsamı</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Simge Uzun Kaya tarafından sunulan hizmetler; çocuk psikolojisi, aile ve ergen danışmanlığı alanlarını kapsayan profesyonel danışmanlık hizmetleridir. Psikiyatrik bir tanı konulmaz veya ilaçlı tedavi uygulanmaz. Web sitemiz üzerinden veya iletişim kanallarımızla randevu talebi oluşturulması ile süreç resmi olarak başlar. <strong>Ön görüşme hizmeti sunulmamakta olup</strong>, planlanan tüm randevular doğrudan değerlendirme veya terapi seansı olarak işleme alınır.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">2. Randevu ve İptal Politikası</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed mb-4">
                                Psikolojik danışmanlık, yapılandırılmış ve düzenli katılım gerektiren bir süreçtir. Çerçeveyi korumak ve diğer danışanların hakkını ihlal etmemek adına aşağıdaki iptal kuralları uygulanır:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-pine/80 font-light leading-relaxed marker:text-accent-terracotta">
                                <li>Gelemeyeceğiniz randevuları <strong>en az 24 saat</strong> öncesinden bildirmeniz esastır.</li>
                                <li>Son 24 saat içerisinde yapılan iptallerde veya habersiz katılım sağlanmayan randevularda, o seans gerçekleşmiş sayılarak seans ücretinin tahsilatı talep edilir.</li>
                                <li>Gecikmeli katılımlarda seans süresi uzatılmaz, planlanan bitiş saatinde seans sonlandırılır.</li>
                            </ul>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">3. Etik Kurallar ve Sınırlar</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Tüm danışmanlık süreçleri Türk Psikologlar Derneği etik yönetmeliğine sıkı sıkıya bağlı olarak yürütülür. Formüle edilen "Terapötik İttifak"ın doğası gereği, danışan ve uzman arasındaki ilişki profesyonel sınırlarla korunur. Şiddet, istismar şüphesi veya kişinin kendisine/başkasına zarar verme riski taşıdığı "Acil ve Hayati" durumlar haricinde danışan gizliliği mutlak şekilde korunur. Hayati risk taşıyan durumlarda ise sır saklama yükümlülüğü kaldırılarak resmi mercilere veya yasal vasilere derhal bildirim yapılır.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">4. Ödeme ve Ücretlendirme</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Danışmanlık ücretleri her seans bitiminde veya öncesinde nakit, kredi kartı veya havale yöntemiyle tahsil edilir. Yılın belirli dönemlerinde oluşabilecek ücret güncellemeleri, mevcut danışanlara önceden mutlaka duyurulur.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">5. Telif Hakları</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Bu web sitesindeki tasarımlar, yazılar ve blog içerikleri Simge Uzun Kaya markasına aittir ve DMCA telif haklarıyla korunmaktadır. Kaynak gösterilse dahi ticari amaçlı kullanımı izne tabidir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
