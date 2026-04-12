import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ContextType {
  isDark: boolean;
  toggleTheme: () => void;
  lang: string;
  changeLang: (lng: string) => void;
}

const ThemeLanguageContext = createContext<ContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'en');

  // Apply language direction
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => setIsDark(!isDark);

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <ThemeLanguageContext.Provider value={{ isDark, toggleTheme, lang, changeLang }}>
      <div className={`${isDark ? 'bg-charcoal text-ivory' : 'bg-ivory text-charcoal'} min-h-screen`}>
        {children}
      </div>
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLang = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) throw new Error('useThemeLang must be used within ThemeLanguageProvider');
  return context;
};