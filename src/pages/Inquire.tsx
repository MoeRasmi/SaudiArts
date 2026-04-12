import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShieldCheck } from 'lucide-react';

const Inquire: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [inquiryType, setInquiryType] = useState('Acquisition');

  useEffect(() => {
    if (location.state?.type) {
      setInquiryType(location.state.type);
    }
  }, [location.state]);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: location.state?.artwork ? `I am interested in: ${location.state.artwork} (${location.state.ref})` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our specialists will contact you shortly.');
  };

  const infoBlocks = [
    { icon: MapPin,      labelKey: 'inquire.locationLabel',       valueKey: 'inquire.location' },
    { icon: Clock,       labelKey: 'inquire.response',            valueKey: 'inquire.responseTime' },
    { icon: ShieldCheck, labelKey: 'inquire.confidentiality',     valueKey: 'inquire.confidentialityText' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="space-y-16"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight italic" style={{ color: 'var(--text)' }}>
              {t('inquire.title')}
            </h1>
            <div className="w-16 h-px" style={{ backgroundColor: 'var(--gold)', opacity: 0.45 }} />
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {t('inquire.subtitle')}
            </p>
          </div>

          <div className="space-y-10">
            {infoBlocks.map(({ icon: Icon, labelKey, valueKey }) => (
              <div key={labelKey} className="flex items-start space-x-6 rtl:space-x-reverse group">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{
                    border: '1px solid var(--gold-line)',
                    color: 'var(--gold)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-glow)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Icon size={20} />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--gold)', opacity: 0.7 }}>
                    {t(labelKey)}
                  </div>
                  <div className="text-lg font-serif" style={{ color: 'var(--text)' }}>
                    {t(valueKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-10 lg:p-12 space-y-8 luxury-glow"
            style={{
              border: '1px solid var(--gold-line)',
              backgroundColor: 'var(--bg-parchment)',
            }}
          >
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest block ml-1" style={{ color: 'var(--text-faint)' }}>
                  {t('inquire.fields.name')}
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent py-4 outline-none font-serif text-lg transition-all"
                  style={{
                    borderBottom: '1px solid var(--stone-dark, #BEB5A4)',
                    color: 'var(--text)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--stone-dark, #BEB5A4)')}
                  placeholder={t('inquire.titlePlaceholder')}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest block ml-1" style={{ color: 'var(--text-faint)' }}>
                  {t('inquire.fields.email')}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent py-4 outline-none font-serif text-lg transition-all"
                  style={{
                    borderBottom: '1px solid var(--stone-dark, #BEB5A4)',
                    color: 'var(--text)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--gold)')}
                  onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--stone-dark, #BEB5A4)')}
                />
              </div>

              {/* Type */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest block ml-1" style={{ color: 'var(--text-faint)' }}>
                  {t('inquire.fields.type')}
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full bg-transparent py-4 outline-none font-serif text-lg transition-all appearance-none cursor-pointer"
                  style={{
                    borderBottom: '1px solid var(--stone-dark, #BEB5A4)',
                    color: 'var(--text)',
                    backgroundColor: 'var(--bg-parchment)',
                  }}
                >
                  <option value="Private Viewing" style={{ backgroundColor: '#EDE8DC', color: '#1C1A17' }}>{t('inquire.fields.types.viewing')}</option>
                  <option value="Acquisition"     style={{ backgroundColor: '#EDE8DC', color: '#1C1A17' }}>{t('inquire.fields.types.acquisition')}</option>
                  <option value="Commission"      style={{ backgroundColor: '#EDE8DC', color: '#1C1A17' }}>{t('inquire.fields.types.commission')}</option>
                  <option value="Gifting"         style={{ backgroundColor: '#EDE8DC', color: '#1C1A17' }}>{t('inquire.fields.types.gifting')}</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest block ml-1" style={{ color: 'var(--text-faint)' }}>
                  {t('inquire.fields.message')}
                </label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent p-4 outline-none font-serif text-lg transition-all resize-none mt-4"
                  style={{
                    border: '1px solid var(--gold-line)',
                    color: 'var(--text)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--gold-line)')}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-6 text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-700"
              style={{
                backgroundColor: 'var(--gold)',
                color: '#F8F5EE',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'var(--gold-muted, #8B6F35)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--gold)')}
            >
              {t('inquire.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Inquire;