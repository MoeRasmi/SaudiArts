import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sanityClient } from '../sanity/client';
import { ARTWORK_BY_SLUG_QUERY, ARTWORKS_QUERY } from '../sanity/queries';

const ArtworkPage: React.FC = () => {
  const { artworkId } = useParams(); // Using artworkId param which will be the slug
  const [art, setArt] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await sanityClient.fetch(ARTWORK_BY_SLUG_QUERY, { slug: artworkId });
        setArt(data);
        
        if (data && data.categoryId) {
          const allArts = await sanityClient.fetch(ARTWORKS_QUERY);
          const rel = allArts.filter((a: any) => (a.categoryId === data.categoryId || a.category === data.categoryId) && a.slug !== data.slug).slice(0, 3);
          setRelated(rel);
        }
      } catch (err) {
        console.error("Failed to fetch artwork", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [artworkId]);

  if (loading) {
    return <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center text-[#8C6A3B] text-xs uppercase tracking-widest">Loading...</div>;
  }

  if (!art) {
    return <div className="min-h-screen bg-[#F8F6F2] flex items-center justify-center text-[#6B6560]">Artwork not found.</div>;
  }

  const shortIntro = art.description ? art.description.split('. ')[0] + '.' : '';

  return (
    <div className="bg-[#F8F6F2] min-h-screen text-[#1C1A17] font-sans pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-8">
        <Link to="/works" className="text-[10px] uppercase tracking-widest text-[#8C6A3B] hover:text-[#1C1A17] hover:underline transition-colors">
          ← Back to Collection
        </Link>
      </div>

      {/* TOP SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT: GALLERY */}
        <div className="space-y-6 lg:sticky lg:top-32">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-[4/5] bg-[#EDE8DC] overflow-hidden rounded-sm">
            {art.images && art.images[activeImageIdx] && (
              <img 
                src={art.images[activeImageIdx].url} 
                alt={art.title} 
                className="w-full h-full object-cover grayscale-[5%]" 
              />
            )}
          </motion.div>
          {art.images && art.images.length > 1 && (
            <div className="grid grid-cols-5 gap-4">
              {art.images.map((img: any, idx: number) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImageIdx(idx)}
                  className={`aspect-square overflow-hidden bg-[#EDE8DC] border ${activeImageIdx === idx ? 'border-[#8C6A3B]' : 'border-transparent opacity-60 hover:opacity-100'} transition-all`}
                >
                  <img src={img.url} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-12 py-4">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif leading-tight">{art.title}</h1>
            <div className="text-[10px] uppercase tracking-widest text-[#8C6A3B] border-b border-[#D6CFC0] pb-6">
              {art.category || art.categoryId} • {art.period}
            </div>
            {art.price && (
              <div className="text-sm font-serif">Price: ${art.price.toLocaleString()}</div>
            )}
            <p className="text-[#6B6560] text-lg leading-relaxed pt-2">
              {shortIntro}
            </p>
          </div>

          {/* ESSENTIAL DETAILS */}
          <div className="grid grid-cols-2 gap-8 text-xs uppercase tracking-widest text-[#1C1A17] border-y border-[#D6CFC0] py-8">
            <div className="space-y-4">
              {art.dimensions && (
                <div>
                  <span className="text-[#9E9790] block mb-1">Dimensions</span>
                  {art.dimensions.height}{art.dimensions.unit} H 
                  {art.dimensions.width ? ` × ${art.dimensions.width}${art.dimensions.unit} W` : ''}
                  {art.dimensions.depth ? ` × ${art.dimensions.depth}${art.dimensions.unit} D` : ''}
                </div>
              )}
              {art.material && (
                <div>
                  <span className="text-[#9E9790] block mb-1">Material</span>
                  {art.material}
                </div>
              )}
            </div>
            <div className="space-y-4">
              {art.origin && (
                <div>
                  <span className="text-[#9E9790] block mb-1">Origin</span>
                  {art.origin}
                </div>
              )}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="prose prose-stone max-w-none text-[#1C1A17] space-y-6">
            <p className="whitespace-pre-wrap leading-relaxed text-sm">
              {art.description}
            </p>
          </div>

          {/* OBJECT DETAILS BLOCK */}
          <div className="bg-[#EDE8DC] p-8 space-y-6">
            <h3 className="text-sm uppercase tracking-widest text-[#8C6A3B] mb-6">Object Record</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-[#D6CFC0] pb-2">
                <span className="text-[#6B6560]">Category</span> <span>{art.category || art.categoryId}</span>
              </li>
              <li className="flex justify-between border-b border-[#D6CFC0] pb-2">
                <span className="text-[#6B6560]">Period</span> <span>{art.period}</span>
              </li>
              <li className="flex justify-between border-b border-[#D6CFC0] pb-2">
                <span className="text-[#6B6560]">Origin</span> <span>{art.origin}</span>
              </li>
              {art.id && (
                <li className="flex justify-between border-b border-[#D6CFC0] pb-2">
                  <span className="text-[#6B6560]">Reference</span> <span>REF-{art.id.padStart(4, '0')}</span>
                </li>
              )}
            </ul>
            
            {/* TRUST LINE */}
            <p className="text-[10px] uppercase tracking-widest text-[#9E9790] italic text-center pt-4">
              This object has been examined and catalogued with precise measurement and material verification.
            </p>
          </div>

          {/* CTA SECTION */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <Link to="/inquire" state={{ artwork: art.title, ref: art.id ? `REF-${art.id.padStart(4, '0')}` : art.slug }} className="flex-1 bg-[#1C1A17] text-[#F8F6F2] hover:bg-[#8C6A3B] transition-colors py-4 text-center text-xs uppercase tracking-widest">
              Enquire
            </Link>
            <Link to="/inquire" state={{ artwork: art.title, ref: art.slug, type: 'details' }} className="flex-1 border-2 border-[#1C1A17] text-[#1C1A17] hover:bg-[#1C1A17] hover:text-[#F8F6F2] transition-colors py-4 text-center text-xs uppercase tracking-widest">
              Request Details
            </Link>
          </div>

        </div>
      </section>

      {/* RELATED OBJECTS */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 border-t border-[#D6CFC0] pt-24">
          <h2 className="text-3xl font-serif mb-12 text-center">Related Objects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {related.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to={`/artwork/${item.slug || item.id}`} className="group block relative aspect-[4/5] bg-[#EDE8DC] overflow-hidden">
                  {item.images?.[0] && (
                    <img 
                      src={item.images[0].url} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#1C1A17]/0 group-hover:bg-[#1C1A17]/60 transition-colors duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-[#F8F6F2] text-lg font-serif">{item.title}</h3>
                      <div className="text-[#D4B06A] text-[9px] uppercase tracking-widest mt-2">
                        {item.category || item.categoryId} • {item.period}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default ArtworkPage;