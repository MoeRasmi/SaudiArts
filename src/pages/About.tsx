import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  const aboutImage = localStorage.getItem('about_image') ||
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1974&auto=format&fit=crop";

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Editorial Layout */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-2 lg:order-1 space-y-8"
        >
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: 'var(--gold)' }}>
              Heritage &amp; Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight italic" style={{ color: '#1A1A1A' }}>
              {t('about.title')}
            </h2>
          </div>

          <div className="w-16 h-px" style={{ backgroundColor: 'var(--gold)', opacity: 0.4 }} />

          <p
            className="text-lg leading-relaxed font-sans first-letter:text-4xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:mt-1"
            style={{ color: '#1A1A1A' }}
          >
            {t('about.content')}
          </p>

          <p className="text-sm leading-loose" style={{ color: '#1A1A1A' }}>
            At Alqalá, we believe that art is the ultimate bridge between generations. Our curated collections represent centuries of human achievement, from the delicate patterns of 14th-century ceramics to the formidable strength of royal armour. Each acquisition is a promise of preservation, ensuring that the legacy of heritage remains vibrant and accessible to those who appreciate the finer details of history.
          </p>

          <div className="pt-8">
            <div className="italic font-serif text-lg" style={{ color: 'var(--gold)' }}>
              "Preserving the whispers of history for the ears of the future."
            </div>
            <div className="text-[10px] uppercase tracking-widest mt-2" style={{ color: 'var(--text-faint)' }}>
              — The Curator
            </div>
          </div>
        </motion.div>

        {/* Strong Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="order-1 lg:order-2 aspect-[4/5] overflow-hidden rounded-sm luxury-glow"
          style={{ boxShadow: '0 4px 40px rgba(212, 175, 55, 0.12)' }}
        >
          <img
            src={aboutImage}
            alt="Museum Interior"
            className="w-full h-full object-cover grayscale-[10%] hover:scale-110 transition-transform duration-[3s]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;