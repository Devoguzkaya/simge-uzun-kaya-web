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
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'bg-ivory/80 dark:bg-pine/90 backdrop-blur-lg border-b border-pine/5 dark:border-ivory/5 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative size-12 overflow-hidden flex items-center justify-center rounded-full bg-pine/5 dark:bg-ivory/5">
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
            <span className="font-serif text-2xl tracking-tight text-pine dark:text-ivory">Simge Uzun Kaya</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent-terracotta font-bold">Psikolojik Danışman</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              className="relative text-sm font-medium text-pine dark:text-ivory group overflow-hidden tracking-wide"
              href={item.href}
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item.label}</span>
              <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-accent-terracotta">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="relative group/randevu hidden sm:block">
            <Link
              className="inline-flex px-8 py-3 rounded-full bg-accent-spark text-ivory text-sm font-bold tracking-wide transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95"
              href={siteConfig.links.esperaRandevu}
              target="_blank"
            >
              Randevu Al
            </Link>
          </div>

          <button
            className="md:hidden size-10 flex items-center justify-center rounded-full bg-pine/5 dark:bg-ivory/5 text-pine dark:text-ivory"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
          </button>
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
            <div className="bg-ivory/95 dark:bg-pine/95 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pine/10 dark:border-ivory/10 flex flex-col gap-6">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  className="text-2xl font-serif text-pine dark:text-ivory hover:text-accent-terracotta transition-colors"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="mt-4 flex items-center justify-center rounded-full bg-pine text-ivory py-5 text-lg font-bold"
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