'use client';

import React from 'react';

const MapSection = () => {
    // Daha sağlam ve hata vermeyen Google Maps Embed URL (Query bazlı)
    const mapUrl = "https://maps.google.com/maps?q=ESPERA+BÜTÜNCÜL+YAŞAM+MERKEZİ+Sinop&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <section className="py-24 bg-white dark:bg-stone-900" id="location">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Konumumuz</span>
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-6">Ofisimize Bekleriz</h2>
                        <p className="text-lg text-text-muted/80 dark:text-stone-400 mb-8 leading-relaxed">
                            Sinop merkezde, kolayca ulaşabileceğiniz lokasyonumuzda sizleri ağırlamaktan mutluluk duyarız.
                            Espera Bütüncül Yaşam Merkezi bünyesinde profesyonel ve huzurlu bir ortamda hizmet veriyoruz.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-orange-100 dark:bg-orange-500/10 text-primary flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white">Adres</h4>
                                    <p className="text-text-muted/70 dark:text-stone-400 text-sm">Gazi Cad. (Eski Kervansaray Karşısı), Merkez / SİNOP</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-accent-blue flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white">Çalışma Saatleri</h4>
                                    <p className="text-text-muted/70 dark:text-stone-400 text-sm">Pazartesi - Cumartesi: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/3ed2c18be4f19f41"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-10 inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
                        >
                            Yol Tarifi Al
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                    </div>

                    <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Espera Bütüncül Yaşam Merkezi Konumu"
                            className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
