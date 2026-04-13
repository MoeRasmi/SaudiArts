import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivateViewing: React.FC = () => {
  const { t } = useTranslation();

  const blocks = [
    { title: t('private.salon'),       desc: t('private.salonDesc') },
    { title: t('private.curator'),     desc: t('private.curatorDesc') },
    { title: t('private.appointment'), desc: t('private.appointmentDesc') },
  ];

  return (
    <div
      className="min-h-screen -mt-24 lg:-mt-32 pt-24 lg:pt-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Subtle parchment texture background image */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 40%, var(--bg) 100%)' }} />
        <img
          src="https://images.unsplash.com/photo-1544413647-b505615c5a82?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover blur-sm grayscale"
          alt="Background"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center max-w-2xl mx-auto space-y-12 mb-32"
        >
          <div className="w-px h-24 mx-auto" style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }} />
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic tracking-tight" style={{ color: '#1A1A1A' }}>
            {t('private.title')}
          </h1>
          <p className="uppercase text-xs tracking-[0.5em] leading-relaxed" style={{ color: 'var(--gold)' }}>
            {t('private.description')}
          </p>
          <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {blocks.map((block, idx) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="p-10 space-y-8 group transition-all duration-700 luxury-glow"
              style={{
                border: '1px solid var(--gold-line)',
                backgroundColor: 'var(--bg-parchment)',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.45)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--gold-line)')}
            >
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--gold)', opacity: 0.65 }}>
                0{idx + 1}
              </span>
              <h3 className="text-2xl font-serif tracking-wide italic" style={{ color: '#1A1A1A' }}>
                {block.title}
              </h3>
              <p className="text-sm leading-loose font-sans" style={{ color: '#1A1A1A' }}>
                {block.desc}
              </p>
              <div className="pt-4" style={{ borderTop: '1px solid var(--gold-line)' }}>
                <Link
                  to="/inquire"
                  state={{ type: 'Private Viewing' }}
                  className="text-[10px] uppercase tracking-[0.3em] transition-colors"
                  style={{ color: 'var(--gold)' }}
                >
                  {t('private.requestAccess')} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 2 }}
          className="mt-40 text-center space-y-8"
        >
          <p className="italic font-serif text-xl max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            "{t('private.quote')}"
          </p>
          <div className="w-24 h-px mx-auto" style={{ backgroundColor: 'var(--gold)', opacity: 0.25 }} />
        </motion.div>
      </div>
    </div>
  );
};

export default PrivateViewing;