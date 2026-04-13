import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sanityClient } from '../sanity/client';
import { ARTWORKS_QUERY, CATEGORIES_QUERY } from '../sanity/queries';

const Works: React.FC = () => {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('latest');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [arts, cats] = await Promise.all([
          sanityClient.fetch(ARTWORKS_QUERY),
          sanityClient.fetch(CATEGORIES_QUERY)
        ]);
        setArtworks(arts || []);
        setCategories(cats || []);
      } catch (err) {
        console.error("Failed to fetch sanity data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const featured = artworks.slice(0, 1);
  
  let filtered = filter === 'all' 
    ? artworks 
    : artworks.filter(a => a.categoryId === filter || a.category === filter);
    
  if (sort === 'latest') {
    // Already sorted by latest in GROQ
  } else if (sort === 'alphabetical') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }

  // Extract dimension helper
  const getDims = (desc: string) => {
    if (!desc) return '';
    const match = desc.match(/([^.]+(width|height|cm)[^.]*\.)/i);
    return match ? match[0] : '';
  };

  return (
    <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] font-sans overflow-hidden">
      {/* HERO */}
      <section className="py-32 flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-[600px] mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif" style={{ color: '#1A1A1A' }}>Works of Art</h1>
          <p style={{ color: 'var(--gold)' }} className="leading-relaxed text-lg mx-auto">
            A curated selection of objects defined by craftsmanship, material integrity, and historical presence.
          </p>
        </motion.div>
      </section>

      {/* FEATURED OBJECT SECTION */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-32">
          {featured.map((item, idx) => (
            <motion.div 
              key={`feat-${idx}`}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="aspect-[4/5] bg-[var(--bg-stone)] overflow-hidden">
                {item.images?.[0]?.asset?.url && (
                  <img src={item.images[0].asset.url} alt={item.title} className="w-full h-full object-cover grayscale-[15%]" />
                )}
              </div>
              <div className="space-y-8 max-w-lg">
                <div className="space-y-2">
                  <h2 className="text-4xl font-serif" style={{ color: '#1A1A1A' }}>{item.title}</h2>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--gold)]">
                    {item.category || item.categoryId} • {item.period}
                  </div>
                </div>
                <p style={{ color: '#1A1A1A' }} className="leading-relaxed">
                  {(item.description || '').split('. ')[0] + '.'}
                </p>
                {item.dimensions && (
                  <div className="text-xs uppercase tracking-widest text-[#999999]">
                    Dims: {item.dimensions.height} {item.dimensions.unit} H 
                    {item.dimensions.width ? ` × ${item.dimensions.width} ${item.dimensions.unit} W` : ''}
                  </div>
                )}
                <div className="pt-4">
                  <Link to={`/artwork/${item.slug || item.id}`} className="inline-block border-b border-[#1A1A1A] pb-1 text-xs uppercase tracking-widest hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors" style={{ color: '#1A1A1A' }}>
                    View Object
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* CONTROL BAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[var(--gold-line)] pb-6 text-xs uppercase tracking-widest" style={{ color: '#1A1A1A' }}>
          <div className="flex space-x-8 mb-4 md:mb-0 overflow-x-auto w-full md:w-auto">
            <button onClick={() => setFilter('all')} className={`hover:text-[var(--gold)] transition-colors whitespace-nowrap ${filter === 'all' ? 'text-[var(--gold)]' : ''}`}>All</button>
            {categories.map(c => (
              <button key={c.slug} onClick={() => setFilter(c.slug)} className={`hover:text-[var(--gold)] transition-colors whitespace-nowrap ${filter === c.slug ? 'text-[var(--gold)]' : ''}`}>
                {c.title}
              </button>
            ))}
          </div>
          <div className="flex space-x-6 items-center w-full md:w-auto justify-end">
            <span className="opacity-50">Sort</span>
            <select value={sort} onChange={e => setSort(e.target.value)} className="bg-transparent outline-none cursor-pointer hover:text-[var(--gold)] hover:bg-transparent !p-0" style={{ color: '#1A1A1A' }}>
              <option value="latest">Latest Addition</option>
              <option value="alphabetical">A - Z</option>
            </select>
          </div>
        </div>
      </section>

      {/* TRUST TEXT */}
      <div className="text-center mb-20 px-6 max-w-2xl mx-auto">
        <p className="text-sm font-serif italic text-[var(--gold)]">
          "Every object is physically verified and catalogued with precise measurement and material assessment."
        </p>
      </div>

      {/* COLLECTION GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        {loading ? (
          <div className="text-center py-32 text-xs uppercase tracking-widest" style={{ color: '#1A1A1A' }}>Loading Collection...</div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            <AnimatePresence>
              {filtered.map((item, idx) => (
                <motion.div
                  key={item._id || item.id || idx}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/artwork/${item.slug || item.id}`} className="group block relative aspect-[4/5] bg-[#FDFBF7] overflow-hidden">
                    {item.images?.[0]?.asset?.url && (
                      <img 
                        src={item.images[0].asset.url} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    
                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/60 transition-colors duration-500 flex flex-col justify-end p-8 pb-10 opacity-0 group-hover:opacity-100">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 space-y-3">
                        <h3 className="text-[#F8F6F2] text-2xl font-serif leading-tight">{item.title}</h3>
                        <div className="text-[var(--gold)] text-[10px] uppercase tracking-widest border-b border-[var(--gold)]/30 pb-3">
                          {item.category || item.categoryId} • {item.period}
                        </div>
                        <div className="text-[#E0D9CC] text-xs leading-relaxed pt-2">
                          {item.dimensions?.height 
                            ? `${item.dimensions.height}${item.dimensions.unit} H` 
                            : getDims(item.description)}
                        </div>
                        <div className="inline-block mt-4 text-[9px] uppercase tracking-widest px-2 py-1 border border-[var(--gold)]/30 text-[var(--gold)]">
                          Private Collection
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

    </div>
  );
};

export default Works;