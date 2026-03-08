'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { InstagramIcon } from './icons/InstagramIcon';

const Footer = () => {
    const mapUrl = "https://maps.google.com/maps?q=ESPERA+BÜTÜNCÜL+YAŞAM+MERKEZİ+Sinop&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <footer className="bg-[#2C3E2D] dark:bg-[#1A1A1A] pt-32 pb-12 relative overflow-hidden" id="contact">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4A6741] rounded-full blur-[150px] opacity-20 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">

                {/* 1. Massive CTA Section */}
                <div className="flex flex-col lg:flex-row items-end justify-between border-b border-[#E8F3E9]/20 pb-20 mb-20 gap-12">
                    <div className="max-w-3xl">
                        <span className="text-[#D9C5A3] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
                            İletişim
                        </span>
                        <h2 className="text-6xl lg:text-8xl font-serif text-[#FDFBF7] leading-[0.9]">
                            Tanışmaya <br />
                            <span className="italic font-light text-[#D9C5A3]">hazır mısınız?</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href={siteConfig.links.esperaRandevu}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden bg-[#D9C5A3] text-[#2C3E2D] px-10 py-5 rounded-full text-lg font-bold transition-transform hover:scale-[1.02] text-center"
                        >
                            <span className="relative z-10">Randevu Oluştur</span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                        <a
                            href={`tel:${siteConfig.contact.phone1_clean}`}
                            className="px-10 py-5 rounded-full text-lg font-bold border border-[#E8F3E9]/30 text-[#FDFBF7] hover:bg-[#E8F3E9]/10 transition-colors text-center"
                        >
                            Bizi Arayın
                        </a>
                    </div>
                </div>

                {/* 2. Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* Brand */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="relative size-12 bg-[#FDFBF7] rounded-full flex items-center justify-center p-2">
                                <Image src="/logo_arkaplansiz.png" alt="Logo" width={40} height={40} className="object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-serif text-xl tracking-tight text-[#FDFBF7]">Simge Uzun Kaya</span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D9C5A3] font-bold">Psikolojik Danışman</span>
                            </div>
                        </div>
                        <p className="text-[#E8F3E9]/60 text-sm font-light leading-relaxed">
                            Sinop merkezli kliniğimizde, çocukların ve ailelerin duygusal dünyalarına ışık tutuyor, oyunun iyileştirici gücüyle geleceği ilmek ilmek örüyoruz.
                        </p>
                        <a href={siteConfig.links.instagram} target="_blank" className="w-10 h-10 rounded-full border border-[#E8F3E9]/20 flex items-center justify-center text-[#FDFBF7] hover:bg-[#D9C5A3] hover:text-[#2C3E2D] hover:border-[#D9C5A3] transition-all">
                            <InstagramIcon className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-3 flex flex-col gap-6">
                        <h4 className="text-[#D9C5A3] font-bold uppercase tracking-widest text-[10px]">İletişim Bilgileri</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href={`tel:${siteConfig.contact.phone1_clean}`} className="text-[#FDFBF7] hover:text-[#D9C5A3] transition-colors text-lg font-light">
                                    {siteConfig.contact.phone1}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${siteConfig.contact.email}`} className="text-[#FDFBF7] hover:text-[#D9C5A3] transition-colors text-lg font-light">
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li className="text-[#E8F3E9]/60 text-sm leading-relaxed mt-2">
                                Gazi Cad. (Eski Kervansaray Karşısı)<br />
                                Merkez / SİNOP
                            </li>
                        </ul>
                    </div>

                    {/* Map */}
                    <div className="md:col-span-5 h-[200px] md:h-auto min-h-[200px] rounded-3xl overflow-hidden border border-[#E8F3E9]/10">
                        <iframe
                            src={mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) opacity(0.8)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Location Map"
                        ></iframe>
                    </div>

                </div>

                {/* 3. Bottom Bar */}
                <div className="border-t border-[#E8F3E9]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[#E8F3E9]/40 text-xs font-light tracking-wide">
                        © {new Date().getFullYear()} Simge Uzun Kaya. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#D9C5A3]">
                        <Link href="/privacy" className="hover:text-[#FDFBF7] transition-colors">Gizlilik Politikası</Link>
                        <Link href="/terms" className="hover:text-[#FDFBF7] transition-colors">KVKK</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
