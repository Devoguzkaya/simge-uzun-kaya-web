'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { InstagramIcon } from './icons/InstagramIcon';
import { motion } from 'framer-motion';

const Footer = () => {
    const mapUrl = "https://maps.google.com/maps?q=ESPERA+BÜTÜNCÜL+YAŞAM+MERKEZİ+Sinop&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <footer className="bg-stone-50 dark:bg-stone-950 pt-24 pb-12 relative overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* 1. CTA Section: Tanışmaya Hazır mısınız? */}
                <div className="bg-white dark:bg-stone-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-orange-900/5 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 border border-orange-100 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                    <div className="max-w-xl text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-4 italic">Tanışmaya hazır mısınız?</h2>
                        <p className="text-lg text-text-muted/80 dark:text-stone-400 mb-0">Sizi dinlemek için buradayız. Aileniz için doğru kişi olup olmadığımızı görmek adına ücretsiz 15 dakikalık bir ön görüşme planlayın.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        <a
                            href={siteConfig.links.esperaRandevu}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-10 py-5 rounded-2xl bg-primary text-white text-lg font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 whitespace-nowrap"
                        >
                            Randevu Oluştur
                        </a>
                        <a
                            href={`tel:${siteConfig.contact.phone1_clean}`}
                            className="flex items-center justify-center px-10 py-5 rounded-2xl bg-white dark:bg-stone-800 text-text-main dark:text-white text-lg font-bold border border-orange-100 dark:border-white/10 hover:bg-orange-50 dark:hover:bg-stone-700 transition-all shadow-sm whitespace-nowrap"
                        >
                            Hemen Arayın
                        </a>
                    </div>
                </div>

                {/* 2. Main Footer Content: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand & Bio */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-4">
                            <Image src="/logo_arkaplansiz.png" alt="Logo" width={48} height={48} className="h-12 w-auto" />
                            <div>
                                <h3 className="text-xl font-black text-text-main dark:text-white leading-none">Simge Uzun Kaya</h3>
                                <p className="text-sm text-primary font-bold mt-1 uppercase tracking-widest">Psikolojik Danışman</p>
                            </div>
                        </div>
                        <p className="text-text-muted/80 dark:text-stone-400 leading-relaxed text-sm">
                            Sinop merkezli kliniğimizde, çocukların ve ailelerin duygusal dünyalarına ışık tutuyor, oyunun iyileştirici gücüyle geleceği ilmek ilmek örüyoruz.
                        </p>
                        <div className="flex gap-4">
                            <a href={siteConfig.links.instagram} target="_blank" className="size-10 rounded-full border border-orange-200 dark:border-white/10 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                                <InstagramIcon className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact & Map Previews */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-12 gap-12">
                        <div className="sm:col-span-4 space-y-6">
                            <h4 className="text-text-main dark:text-white font-bold uppercase tracking-widest text-xs">İletişim</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                                    <p className="text-sm text-text-muted/70 dark:text-stone-400">Gazi Cad. (Eski Kervansaray Karşısı), Merkez / SİNOP</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">call</span>
                                    <a href={`tel:${siteConfig.contact.phone1_clean}`} className="text-sm text-text-muted/70 dark:text-stone-400 hover:text-primary">{siteConfig.contact.phone1}</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-sm">mail</span>
                                    <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-text-muted/70 dark:text-stone-400 hover:text-primary">{siteConfig.contact.email}</a>
                                </li>
                            </ul>
                        </div>

                        {/* Minimal Map Box - Now LARGER */}
                        <div className="sm:col-span-8 relative min-h-[250px] rounded-3xl overflow-hidden border border-orange-100 dark:border-white/5 shadow-inner">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Location Map"
                                className="w-full h-full transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>

                </div>

                {/* 3. Bottom Bar */}
                <div className="border-t border-orange-100 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-stone-500 dark:text-stone-500 font-medium">
                        © {new Date().getFullYear()} Simge Uzun Kaya. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-stone-400 dark:text-stone-600">
                        <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
                        <a href="#" className="hover:text-primary transition-colors">KVKK</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
