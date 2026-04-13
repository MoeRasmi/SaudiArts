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

  const newlyArrived = artworks.slice(0, 6);
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
          <h1 className="text-5xl md:text-6xl font-serif" style={{ color: 'var(--text)' }}>Works of Art</h1>
          <p style={{ color: 'var(--gold)' }} className="leading-relaxed text-lg mx-auto">
            A curated selection of objects defined by craftsmanship, material integrity, and historical presence.
          </p>
        </motion.div>
      </section>

      {/* FEATURED OBJECT SECTION */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          {featured.map((item, idx) => (
            <motion.div 
              key={`feat-${idx}`}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className="aspect-[4/5] bg-[var(--bg-stone)] overflow-hidden">
                {item.images?.[0]?.asset?.url && (
                  <img src={item.images[0].asset.url} alt={item.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="space-y-8 max-w-lg">
                <div className="space-y-2">
                  <h2 className="text-4xl font-serif" style={{ color: 'var(--text)' }}>{item.title}</h2>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--gold)]">
                    {item.category || item.categoryId} • {item.period}
                  </div>
                </div>
                <p style={{ color: 'var(--text)' }} className="leading-relaxed">
                  {(item.description || '').split('. ')[0] + '.'}
                </p>
                <div className="pt-4">
                  <Link to={`/artwork/${item.slug || item.id}`} className="inline-block mt-2 text-xs uppercase tracking-[0.2em] transition-colors pb-1 border-b" style={{ color: 'var(--text)', borderBottom: '2px solid var(--text)' }}>
                    View Object
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      )}

      {/* NEWLY ARRIVED HORIZONTAL SCROLLER */}
      {newlyArrived.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <h3 className="text-xl font-serif mb-6" style={{ color: 'var(--text)' }}>Newly Arrived</h3>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {newlyArrived.map((item, idx) => (
              <Link key={`new-${idx}`} to={`/artwork/${item.slug || item.id}`} className="min-w-[260px] block bg-[var(--bg-parchment)] border border-[var(--gold-line)] rounded-sm overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden bg-[var(--bg-parchment)]">
                  {item.images?.[0]?.asset?.url && (
                    <img src={item.images[0].asset.url} alt={item.title} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-4">
                  <div className="text-lg font-serif" style={{ color: 'var(--text)' }}>{item.title}</div>
                  <div className="text-xs text-[var(--text-faint)] mt-1">{item.period}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CONTROL BAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[var(--gold-line)] pb-6 text-xs uppercase tracking-widest" style={{ color: 'var(--text)' }}>
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
            <select value={sort} onChange={e => setSort(e.target.value)} className="bg-transparent outline-none cursor-pointer hover:text-[var(--gold)] hover:bg-transparent !p-0" style={{ color: 'var(--text)' }}>
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

      {/* CATEGORIES GRID (Folder style) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        {loading ? (
          <div className="text-center py-32 text-xs uppercase tracking-widest" style={{ color: 'var(--text)' }}>Loading Categories...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c: any, i: number) => (
              <div key={c.slug || i} className="block bg-[var(--bg-parchment)] border border-[var(--gold-line)] rounded-sm overflow-hidden">
                <Link to={`/works`} onClick={() => setFilter(c.slug)} className="block">
                  <div className="aspect-[4/3] bg-[var(--bg-parchment)] overflow-hidden">
                    {c.image && <img src={c.image} alt={c.title} className="w-full h-full object-cover" />}
                  </div>
                  <div className="p-6">
                    <div className="text-xl font-serif" style={{ color: 'var(--text)' }}>{c.title}</div>
                    <div className="text-sm mt-2" style={{ color: 'var(--text-faint)', minHeight: '1.4em' }}>{(c.description || '').split('\n')[0]}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* If filter selected, show filtered collection grid */}
      {filter !== 'all' && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          <h3 className="text-xl font-serif mb-6" style={{ color: 'var(--text)' }}>Collection</h3>
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
                  <Link to={`/artwork/${item.slug || item.id}`} className="group block relative aspect-[4/5] bg-[var(--bg-parchment)] overflow-hidden border border-[var(--gold-line)]">
                    {item.images?.[0]?.asset?.url && (
                      <img 
                        src={item.images[0].asset.url} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-transparent flex flex-col justify-end p-6">
                      <div className="bg-white/60 backdrop-blur-sm p-4 rounded-sm">
                        <h3 className="text-lg font-serif" style={{ color: 'var(--text)' }}>{item.title}</h3>
                        <div className="text-xs" style={{ color: 'var(--text-faint)' }}>{item.period}</div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      )}

    </div>
  );
};

export default Works;