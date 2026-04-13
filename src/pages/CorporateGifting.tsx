import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sanityClient } from '../sanity/client';
import { ARTWORKS_QUERY } from '../sanity/queries';

const CorporateGifting: React.FC = () => {
  const { t } = useTranslation();
  const [giftingItems, setGiftingItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGiftingItems = async () => {
      try {
        setLoading(true);
        const data = await sanityClient.fetch(ARTWORKS_QUERY);
        // Take a slice of premium items for gifting (or execute a specific GROQ later if needed)
        setGiftingItems(data.slice(0, 4));
      } catch (err) {
        console.error("Failed to fetch gifting items", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGiftingItems();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-center max-w-4xl mx-auto space-y-8 mb-24 lg:mb-32"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: 'var(--gold)' }}>
          {t('gifting.subtitle')}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight italic" style={{ color: 'var(--text)' }}>
          {t('gifting.title')}
        </h1>
        <div className="w-12 h-px mx-auto" style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }} />
        <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
          {t('gifting.desc')}
        </p>
      </motion.div>

      {loading ? (
        <div className="py-24 text-center text-xs uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
          Curating Collection...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {giftingItems.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
            >
              <Link to={`/artwork/${art.slug || art.id}`} className="group block space-y-4">
                <div
                  className="aspect-square overflow-hidden rounded-sm luxury-glow"
                  style={{ backgroundColor: 'var(--bg-parchment)' }}
                >
                  {art.images?.[0] && (
                    <img
                      src={art.images[0].url}
                      alt={art.title}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                    />
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif" style={{ color: 'var(--text)' }}>{art.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--gold)', opacity: 0.7 }}>
                    {art.period}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {/* Consultation CTA */}
      <div
        className="p-16 lg:p-24 text-center space-y-12 luxury-glow"
        style={{
          backgroundColor: 'var(--bg-parchment)',
          border: '1px solid var(--gold-line)',
        }}
      >
        <h3 className="text-3xl font-serif italic" style={{ color: 'var(--text)' }}>
          {t('gifting.consultation')}
        </h3>
        <p className="max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('gifting.consultationDesc')}
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 pt-8">
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--gold)', opacity: 0.7 }}>
              {t('gifting.callUs')}
            </div>
            <div className="text-xl font-serif tracking-wider" style={{ color: 'var(--text)' }}>
              {t('gifting.phone')}
            </div>
          </div>
          <div className="w-px h-12 hidden md:block" style={{ backgroundColor: 'var(--gold-line)' }} />
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--gold)', opacity: 0.7 }}>
              {t('gifting.email')}
            </div>
            <a
              href={`mailto:${t('gifting.emailAddress')}`}
              className="text-xl font-serif tracking-wider transition-colors underline-offset-8 hover:underline"
              style={{ color: 'var(--text)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
            >
              {t('gifting.emailAddress')}
            </a>
          </div>
        </div>

        <div className="pt-12">
          <Link
            to="/inquire"
            state={{ type: 'Gifting' }}
            className="inline-block px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500"
            style={{ backgroundColor: 'var(--gold)', color: '#F8F5EE' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#8B6F35')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
          >
            {t('gifting.requestCatalogue')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CorporateGifting;