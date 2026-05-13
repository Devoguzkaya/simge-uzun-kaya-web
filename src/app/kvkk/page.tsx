import Link from 'next/link';
import React from 'react';

export default function KVKKPolicy() {
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
                            KVKK<br />
                            <span className="italic font-light text-accent-terracotta normal-case">Aydınlatma.</span>
                        </h1>
                    </div>

                    <div className="lg:w-7/12 flex flex-col gap-12 pt-4">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-terracotta mb-4">
                            6698 Sayılı Kanun Uyarınca
                        </p>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">1. Giriş ve Veri Sorumlusu</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla **Simge Uzun Kaya**, kişisel verilerinizin hukuka ve dürüstlük kurallarına uygun olarak toplanmasını, saklanmasını ve gerektiğinde aktarılmasını sağlamak amacıyla bu Aydınlatma Metnini hazırlamıştır.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">2. Hangi Verilerinizi İşliyoruz?</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed mb-4">
                                Psikolojik danışmanlık hizmetini doğru planlayabilmek ve sunabilmek için:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-pine/80 font-light leading-relaxed marker:text-accent-terracotta">
                                <li><strong>Kimlik Verisi:</strong> Ad, soyad, T.C. Kimlik numarası (fatura süreçleri için).</li>
                                <li><strong>İletişim Verisi:</strong> Cep telefonu, e-posta.</li>
                                <li><strong>Özel Nitelikli Kişisel Veri:</strong> Danışmanlık ve terapi seanslarında gönüllü olarak paylaştığınız sağlık verileri, aile geçmişi ve psikiyatrik öykünüz.</li>
                            </ul>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">3. Verilerin İşlenme Amacı</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Kişisel verileriniz ve özel nitelikli kişisel verileriniz; psikolojik değerlendirme ve danışmanlık hizmetlerinin yürütülmesi, randevu planlamasının yapılması, yasal mali yükümlülüklerin (fatura) yerine getirilmesi amacıyla, KVKK’nın 5. ve 6. maddelerinde belirtilen şartlara dayalı olarak (Açık rıza, hakkın tesisi, kullanılması veya korunması) işlenmektedir.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">4. Verilerin Aktarımı</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                Tesisimizde yürütülen randevu ve karşılama süreçleri, Espera Yaşam Merkezi altyapısı kullanılarak sağlandığı için kimlik ve iletişim verileriniz yetkili sekreterya ile paylaşılabilmektedir. Bunun dışında verileriniz ancak hukuki zorunluluklar veya hayati risk durumunda kolluk kuvvetleri ile paylaşılır. Reklam veya pazarlama amaçlı hiçbir 3. tarafla bilgi paylaşımı yapılmaz.
                            </p>
                        </div>

                        <div className="border-t border-pine/10 pt-8">
                            <h2 className="text-3xl font-serif text-pine mb-6">5. KVKK Madde 11 Kapsamındaki Haklarınız</h2>
                            <p className="text-lg text-pine/80 font-light leading-relaxed">
                                KVKK madde 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, amacına uygun kullanılıp kullanılmadığını bilme, eksik/yanlış verilerin düzeltilmesini isteme ve silinmesini talep etme hakkınız bulunmaktadır. Taleplerinizi web sitemizdeki iletişim bilgilerinden bize ücretsiz ve yazılı olarak iletebilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
