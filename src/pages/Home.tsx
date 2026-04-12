import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://res.cloudinary.com/deaimh9zu/image/upload/e_improve,e_sharpen/v1775147255/image_yv41ff.jpg"
          alt="Alqala Museum"
          className="w-full h-full object-cover"
        />
        {/* Warm sepia scrim — preserves drama without pure black */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(28,26,23,0.35) 0%, rgba(28,26,23,0.55) 60%, rgba(28,26,23,0.75) 100%)' }} />
      </div>

      {/* Header Logo — Centered at top */}
      <div className="absolute top-8 left-0 right-0 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid #C5A059' }}>
              <span className="text-lg font-serif" style={{ color: '#C5A059' }}>AQ</span>
            </div>
            <div>
              <span className="text-xl font-serif tracking-wider" style={{ color: '#C5A059' }}>ALQALÁ</span>
              <span className="block text-[8px] tracking-[0.3em] uppercase" style={{ color: '#C5A059' }}>Museum</span>
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
          className="backdrop-blur-sm p-6 md:p-8"
          style={{
            backgroundColor: 'rgba(248,245,238,0.10)',
            border: '1px solid rgba(184,150,78,0.25)',
          }}
        >
          <h1 className="text-2xl md:text-3xl font-serif leading-tight mb-4" style={{ color: '#FFFFFF' }}>
            {t('hero.title')}
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
            {t('hero.subtitle', 'Where heritage meets contemporary artistry')}
          </p>
          <Link
            to="/works"
            className="inline-block mt-6 text-xs uppercase tracking-[0.2em] transition-colors pb-1"
            style={{ color: '#C5A059', borderBottom: '1px solid #C5A059' }}
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
          className="backdrop-blur-sm px-4 py-2"
          style={{
            backgroundColor: 'rgba(248,245,238,0.08)',
            border: '1px solid rgba(184,150,78,0.22)',
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#C5A059' }}>
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
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #C5A059, transparent)' }} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;