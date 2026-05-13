'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer = () => {
    const mapUrl = "https://maps.google.com/maps?q=ESPERA+BÜTÜNCÜL+YAŞAM+MERKEZİ+Sinop&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <footer className="bg-pine dark:bg-background-dark pt-16 pb-12 relative overflow-hidden" id="contact">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-terracotta rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">

                {/* 1. Massive CTA Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between border-b border-ivory/10 pb-12 mb-12 gap-12 text-center lg:text-left">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl lg:text-5xl font-serif text-ivory leading-tight mb-4">
                            Yeni Bir <span className="italic font-light text-accent-terracotta">Hikayeye</span> <br />
                            Başlamak İçin...
                        </h2>
                        <p className="text-ivory/60 text-lg font-light max-w-xl mx-auto lg:mx-0">
                            Çocuğunuzun dünyasını keşfetmek ve ona eşlik etmek için bir adım atın.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href={siteConfig.links.esperaRandevu}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-accent-terracotta text-pine px-10 py-5 rounded-full text-lg font-bold transition-transform hover:scale-[1.02] text-center"
                        >
                            <span className="relative z-10">Randevu Oluştur</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href={`tel:${siteConfig.contact.phone1_clean}`}
                            className="px-10 py-5 rounded-full text-lg font-bold border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors text-center"
                        >
                            Bizi Arayın
                        </a>
                    </div>
                </div>

                {/* 2. Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative size-12 bg-ivory rounded-full flex items-center justify-center p-2">
                                <Image src="/logo_arkaplansiz.png" alt="Logo" width={40} height={40} className="object-contain" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="font-serif text-2xl tracking-tight text-ivory">Simge Uzun Kaya</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-accent-terracotta font-bold">Psikolojik Danışman</span>
                            </div>
                        </div>
                        <p className="text-ivory/60 text-sm font-light leading-relaxed mb-6">
                            Sinop merkezli kliniğimizde, çocukların ve ailelerin duygusal dünyalarına ışık tutuyor, oyunun iyileştirici gücüyle geleceği ilmek ilmek örüyoruz.
                        </p>
                        <a href={siteConfig.links.instagram} target="_blank" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory hover:bg-accent-terracotta hover:text-pine hover:border-accent-terracotta transition-all">
                            <InstagramIcon className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <h4 className="text-ivory font-bold uppercase tracking-widest text-xs mb-8">Navigasyon</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href={`tel:${siteConfig.contact.phone1_clean}`} className="text-ivory hover:text-accent-terracotta transition-colors text-lg font-light">
                                    {siteConfig.contact.phone1}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-ivory hover:text-accent-terracotta transition-colors text-lg font-light">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="text-ivory/60 text-sm leading-relaxed mt-2">
                                Gazi Cad. (Eski Kervansaray Karşısı)<br />
                                Merkez / SİNOP
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-5 h-[200px] md:h-auto min-h-[200px] rounded-3xl overflow-hidden border border-ivory/10">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Location Map"
                        ></iframe>
                    </div>

                </div>

                {/* 3. Bottom Bar */}
                <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-ivory/40 text-xs font-light tracking-wide">
                        © {new Date().getFullYear()} Simge Uzun Kaya. Tüm hakları saklıdır.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-accent-terracotta md:items-center">
                        <Link href="/privacy" className="hover:text-ivory transition-colors">Gizlilik Politikası</Link>
                        <Link href="/kvkk" className="hover:text-ivory transition-colors">KVKK Aydınlatma</Link>
                        <Link href="/terms" className="hover:text-ivory transition-colors">Hizmet Şartları</Link>
                        <Link href="/cookies" className="hover:text-ivory transition-colors">Çerez Politikası</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
