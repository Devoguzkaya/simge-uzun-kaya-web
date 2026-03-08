'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className={`relative flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-xl shadow-lg border border-[#E8F3E9]/50' : 'bg-transparent'}`}>
          
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative size-12 overflow-hidden flex items-center justify-center rounded-full bg-[#E8F3E9] dark:bg-[#2D3A2E]">
              <Image
                src="/logo_arkaplansiz.png"
                alt="Simge Uzun Kaya Logo"
                width={40}
                height={40}
                priority={true}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight text-[#2C3E2D] dark:text-[#E8F3E9]">Simge Uzun Kaya</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] font-bold">Psikolojik Danışman</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                className="relative text-sm font-bold text-[#2C3E2D] dark:text-[#E8F3E9] group overflow-hidden"
                href={item.href}
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#4A6741]">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link
              className="hidden sm:inline-flex px-8 py-3 rounded-full bg-[#2C3E2D] dark:bg-[#E8F3E9] text-[#FDFBF7] dark:text-[#1A1A1A] text-sm font-bold transition-all hover:scale-[1.05] hover:shadow-xl active:scale-95"
              href={siteConfig.links.esperaRandevu}
              target="_blank"
            >
              Randevu Al
            </Link>

            <button
              className="md:hidden size-10 flex items-center justify-center rounded-full bg-[#E8F3E9] dark:bg-[#2D3A2E] text-[#2C3E2D] dark:text-[#E8F3E9]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full p-6"
          >
            <div className="bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl border border-[#E8F3E9] flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  className="text-2xl font-serif text-[#2C3E2D] dark:text-[#E8F3E9] hover:text-[#4A6741] transition-colors"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="mt-4 flex items-center justify-center rounded-full bg-[#2C3E2D] text-[#FDFBF7] py-5 text-lg font-bold"
                href={siteConfig.links.esperaRandevu}
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                Randevu Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;