import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ContextType {
  lang: string;
  changeLang: (lng: string) => void;
}

const ThemeLanguageContext = createContext<ContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  // Apply language direction
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <ThemeLanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLang = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error('useThemeLang must be used within ThemeLanguageProvider');
  return context;
};