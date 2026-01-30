import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-orange-50 dark:bg-background-dark/90 dark:border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">psychology</span>
            </div>
            <div>
              <h1 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-tight">Simge Uzun Kaya</h1>
              <p className="text-xs text-text-muted/80 font-medium">Psikolojik Danışman</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-semibold text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors" href="#">Ana Sayfa</Link>
            <Link className="text-sm font-semibold text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors" href="#about">Hakkımda</Link>
            <Link className="text-sm font-semibold text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors" href="#services">Hizmetler</Link>
            <Link className="text-sm font-semibold text-text-main hover:text-primary dark:text-white dark:hover:text-primary transition-colors" href="#credentials">Uzmanlıklar</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link className="hidden sm:flex items-center justify-center rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 transition-all transform hover:scale-105 shadow-lg shadow-primary/20" href="#contact">
              Randevu Al
            </Link>
            <button className="md:hidden p-2 text-text-main dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;