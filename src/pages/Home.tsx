import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sanityClient } from '../sanity/client';
import { SITE_SETTINGS_QUERY } from '../sanity/queries';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await sanityClient.fetch(SITE_SETTINGS_QUERY);
        setSettings(data);
      } catch (err) {
        console.error("Failed to fetch site settings", err);
      }
    };
    fetchSettings();
  }, []);

  const heroImage = settings?.aboutImage || "https://res.cloudinary.com/deaimh9zu/image/upload/e_improve,e_sharpen/v1775147255/image_yv41ff.jpg";
  const heroTitle = isRTL ? settings?.heroTagline_ar : settings?.heroTagline;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImage}
          alt="Alqala Museum"
          className="w-full h-full object-cover"
        />
        {/* Elegant light-diffusing scrim */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(250,249,246,0.15) 0%, rgba(250,249,246,0.35) 60%, rgba(250,249,246,0.65) 100%)' }} />
      </div>

      {/* Header Logo — Centered at top, Black */}
          <div className="absolute top-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: `1px solid var(--text)` }}>
              <span className="text-lg font-serif" style={{ color: 'var(--text)' }}>AQ</span>
            </div>
            <div>
              <span className="text-xl font-serif tracking-wider" style={{ color: 'var(--text)' }}>ALQALÁ</span>
              <span className="block text-[8px] tracking-[0.3em] uppercase" style={{ color: 'var(--text)' }}>Museum</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Text Overlay — Bottom Left */}
      <div className={`absolute bottom-24 ${isRTL ? 'right-8 md:right-16' : 'left-8 md:left-16'} z-20 max-w-md`}>
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="backdrop-blur-md p-8 md:p-10 luxury-glow shadow-2xl"
          style={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            border: '1px solid var(--gold-line)',
          }}
        >
          <h1 className="text-3xl md:text-4xl font-serif leading-tight mb-4" style={{ color: 'var(--text)' }}>
            {heroTitle || t('hero.title')}
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#4A4A4A' }}>
            {t('hero.subtitle', 'Where heritage meets contemporary artistry')}
          </p>
          <Link
            to="/works"
            className="inline-block mt-6 text-xs uppercase tracking-[0.2em] transition-colors pb-1"
            style={{ color: 'var(--text)', borderBottom: '2px solid var(--text)' }}
          >
            {t('hero.cta', 'Discover')}
          </Link>
        </motion.div>
      </div>

      {/* Est. badge — Bottom Right */}
      <div className={`absolute bottom-8 ${isRTL ? 'left-8' : 'right-8'} z-20`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="backdrop-blur-md px-6 py-3 shadow-xl"
          style={{
            backgroundColor: 'rgba(255,255,255,0.92)',
            border: '1px solid var(--gold-line)',
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text)' }}>
            {t('hero.microritm', 'Est. 1978')}
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--gold), transparent)' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;