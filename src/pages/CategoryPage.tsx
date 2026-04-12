import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { sanityClient } from '../sanity/client';
import { ARTWORKS_QUERY } from '../sanity/queries';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  const { t } = useTranslation();
  const [artworks, setArtworks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryArts = async () => {
      try {
        setLoading(true);
        const data = await sanityClient.fetch(ARTWORKS_QUERY);
        const filtered = data.filter((a: any) => 
          a.category === categoryId || a.categoryId === categoryId
        );
        setArtworks(filtered);
      } catch (err) {
        console.error("Failed to fetch category arts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryArts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center text-[#8C6A3B] text-xs uppercase tracking-widest">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="mb-20 space-y-4">
        <Link to="/works" className="text-[10px] uppercase tracking-widest hover:underline" style={{ color: 'var(--gold)' }}>
          ← {t('nav.works')}
        </Link>
        <h2 className="text-5xl md:text-6xl font-serif tracking-tight italic" style={{ color: 'var(--text)' }}>
          {t(`works.categories.${categoryId}`)}
        </h2>
        <div className="w-16 h-px" style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }} />
        <p className="max-w-2xl text-sm leading-relaxed tracking-wide" style={{ color: 'var(--text-muted)' }}>
          A collection of rare {t(`works.categories.${categoryId}`).toLowerCase()}, showcasing the pinnacle of historical craftsmanship and artistic expression from various eras.
        </p>
      </div>

      {artworks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {artworks.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
            >
              <Link to={`/artwork/${art.slug || art.id}`} className="group block space-y-6">
                <div
                  className="aspect-[3/4] overflow-hidden rounded-sm luxury-glow"
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
                <div className="space-y-2">
                  <h3
                    className="text-xl font-serif transition-colors duration-500"
                    style={{ color: 'var(--text)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
                  >
                    {art.title}
                  </h3>
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--text-faint)' }}>
                    <span>{art.origin}</span>
                    <span style={{ color: 'var(--gold)', opacity: 0.7 }}>{art.period}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      ) : (
        <div
          className="py-24 text-center rounded-lg"
          style={{ border: '1px dashed var(--gold-line)' }}
        >
          <p className="italic font-serif" style={{ color: 'var(--text-faint)' }}>
            The collection for this category is currently being curated.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;