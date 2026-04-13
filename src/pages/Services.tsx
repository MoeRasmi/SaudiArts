import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-4xl mx-auto space-y-8 mb-24 lg:mb-32"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: 'var(--gold)' }}>
          {t('services.subtitle')}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight italic" style={{ color: '#1A1A1A' }}>
          {t('services.title')}
        </h1>
        <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic" style={{ color: 'var(--gold)' }}>
              {t('services.curation.title')}
            </h3>
            <p className="text-lg leading-relaxed font-sans" style={{ color: '#1A1A1A' }}>
              {t('services.curation.desc')}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif italic" style={{ color: 'var(--gold)' }}>
              {t('services.events.title')}
            </h3>
            <p className="text-lg leading-relaxed font-sans" style={{ color: '#1A1A1A' }}>
              {t('services.events.desc')}
            </p>
          </div>

          <div className="pt-8" style={{ borderTop: '1px solid var(--gold-line)' }}>
            <div className="text-[10px] uppercase tracking-widest mb-4" style={{ color: 'var(--text-faint)' }}>
              {t('services.contact')}
            </div>
            <a
              href={`mailto:${t('services.email')}`}
              className="text-2xl font-serif transition-colors"
              style={{ color: 'var(--gold)' }}
            >
              {t('services.email')}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700 luxury-glow">
            <img src="https://images.unsplash.com/photo-1544413647-b505615c5a82?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service Detail" />
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale-[15%] hover:grayscale-0 transition-all duration-700 mt-12 luxury-glow">
            <img src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service Detail" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;