import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';
import { Languages, Menu, X } from 'lucide-react';
import { useThemeLang } from './ThemeLanguageProvider';
import { cn } from '../utils/cn';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const { lang, changeLang } = useThemeLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.about'), to: '/about' },
    { label: t('nav.works'), to: '/works' },
    { label: t('nav.private'), to: '/private' },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.gifting'), to: '/gifting' },
    { label: t('nav.inquire'), to: '/inquire' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 h-24 flex items-center px-6 lg:px-12",
        scrolled
          ? "border-b"
          : "bg-transparent"
      )}
      style={scrolled ? {
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottomColor: 'var(--gold-line)',
      } : undefined}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        {/* Logo — Black */}
        <Link to="/" className="flex flex-col items-center group">
          <span
            className="text-2xl lg:text-3xl font-serif tracking-widest uppercase transition-all duration-500 group-hover:scale-105"
            style={{ color: '#1A1A1A' }}
          >
            ALQALÁ
          </span>
          <span
            className="text-[10px] tracking-[0.5em] uppercase"
            style={{ color: 'var(--text-faint)' }}
          >
            Museum
          </span>
        </Link>

        {/* Desktop Nav — 25% larger, black text */}
        <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn(
                "text-sm uppercase tracking-widest font-sans transition-all duration-300",
                isActive
                  ? "border-b border-current"
                  : "hover:opacity-70"
              )}
              style={({ isActive }) => ({
                color: isActive ? 'var(--gold)' : '#1A1A1A',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop — Language only */}
        <div className="hidden lg:flex items-center space-x-6 rtl:space-x-reverse">
          <button
            onClick={() => changeLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center space-x-2 rtl:space-x-reverse transition-all duration-300 hover:opacity-70"
            style={{ color: '#1A1A1A' }}
          >
            <Languages size={16} />
            <span className="text-[10px] uppercase tracking-widest">
              {lang === 'en' ? 'AR' : 'EN'}
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: '#1A1A1A' }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "fixed inset-0 z-40 lg:hidden flex flex-col items-center justify-center transition-all duration-700",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}
        style={{ backgroundColor: 'var(--bg)' }}
      >
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest font-serif transition-colors duration-300"
              style={{ color: '#1A1A1A' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1A1A1A')}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="flex space-x-8 rtl:space-x-reverse pt-8 w-full justify-center"
            style={{ borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}
          >
            <button
              onClick={() => changeLang(lang === 'en' ? 'ar' : 'en')}
              className="uppercase text-xs tracking-widest"
              style={{ color: 'var(--gold)' }}
            >
              {lang === 'en' ? 'Arabic' : 'English'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};