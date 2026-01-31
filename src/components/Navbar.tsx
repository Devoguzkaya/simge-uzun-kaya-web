'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { siteConfig } from '@/config/site';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full nav-glass border-b border-orange-50 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="size-14 relative overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo_arkaplansiz.png"
                  alt="Simge Uzun Kaya Logo"
                  width={56}
                  height={56}
                  className="h-full w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-tight">Simge Uzun Kaya</h1>
                <p className="text-xs text-text-muted/80 font-medium">Psikolojik Danışman</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                className="text-sm font-semibold text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="hidden sm:flex items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
              href={siteConfig.links.esperaRandevu}
              target="_blank"
            >
              Randevu Al
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-main dark:text-white hover:bg-orange-50 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-orange-100 dark:border-white/10 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              className="p-3 text-center text-base font-semibold text-text-main hover:bg-orange-50 dark:text-white dark:hover:bg-white/5 rounded-xl transition-colors"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="flex items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white text-base font-bold px-6 py-3 transition-all shadow-lg shadow-primary/20"
            href={siteConfig.links.esperaRandevu}
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            Randevu Al
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;