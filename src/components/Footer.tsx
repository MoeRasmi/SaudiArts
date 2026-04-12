import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-20 px-6 lg:px-12 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-parchment)',
        borderTop: '1px solid var(--gold-line)',
        color: 'var(--text-muted)',
      }}
    >
      {/* Decorative gold gradient rule at top */}
      <div className="absolute top-0 left-0 w-full h-px gold-rule" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 relative z-10">
        <div className="md:col-span-1">
          <Link to="/" className="flex flex-col mb-8">
            <span className="text-3xl font-serif tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
              ALQALÁ
            </span>
            <span className="text-xs tracking-[0.5em] uppercase" style={{ color: 'var(--text-faint)' }}>
              Museum
            </span>
          </Link>
          <p className="text-xs font-sans leading-relaxed" style={{ color: 'var(--text-faint)' }}>
            {t('about.content')}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="uppercase tracking-widest text-[10px] font-bold" style={{ color: 'var(--gold)' }}>
            Museum
          </h4>
          <ul className="space-y-3 flex flex-col items-start rtl:items-end">
            <li><Link to="/about" className="text-xs transition-colors uppercase tracking-widest hover:opacity-100" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{t('nav.about')}</Link></li>
            <li><Link to="/works" className="text-xs transition-colors uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{t('nav.works')}</Link></li>
            <li><Link to="/private" className="text-xs transition-colors uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{t('nav.private')}</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="uppercase tracking-widest text-[10px] font-bold" style={{ color: 'var(--gold)' }}>
            Services
          </h4>
          <ul className="space-y-3 flex flex-col items-start rtl:items-end">
            <li><Link to="/services" className="text-xs transition-colors uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{t('nav.services')}</Link></li>
            <li><Link to="/gifting" className="text-xs transition-colors uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{t('nav.gifting')}</Link></li>
            <li><Link to="/inquire" className="text-xs transition-colors uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>{t('nav.inquire')}</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="uppercase tracking-widest text-[10px] font-bold" style={{ color: 'var(--gold)' }}>
            Contact
          </h4>
          <ul className="space-y-3 flex flex-col items-start rtl:items-end">
            <li className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Riyadh, Saudi Arabia</li>
            <li className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>inquire@alqala.museum</li>
            <li className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>+966 11 123 4567</li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest"
        style={{ borderTop: '1px solid var(--gold-line)', color: 'var(--text-faint)' }}
      >
        <span>© {year} ALQALÁ MUSEUM. ALL RIGHTS RESERVED.</span>
        <div className="flex space-x-6 rtl:space-x-reverse">
          <button className="transition-colors hover:opacity-100" style={{ color: 'var(--text-faint)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}>Privacy Policy</button>
          <button className="transition-colors" style={{ color: 'var(--text-faint)' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}>Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};