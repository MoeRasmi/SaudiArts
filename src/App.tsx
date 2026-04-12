import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeLanguageProvider } from './components/ThemeLanguageProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './i18n';

// Pages (to be created)
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import CategoryPage from './pages/CategoryPage';
import ArtworkPage from './pages/ArtworkPage';
import PrivateViewing from './pages/PrivateViewing';
import Services from './pages/Services';
import CorporateGifting from './pages/CorporateGifting';
import Inquire from './pages/Inquire';
import Admin from './pages/SanityStudioPage';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SiteLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-24 lg:pt-32 pb-20 overflow-hidden relative" style={{ backgroundColor: 'var(--bg)' }}>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:categoryId" element={<CategoryPage />} />
            <Route path="/artwork/:artworkId" element={<ArtworkPage />} />
            <Route path="/private" element={<PrivateViewing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gifting" element={<CorporateGifting />} />
            <Route path="/inquire" element={<Inquire />} />
          </Routes>
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeLanguageProvider>
      <Router>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<SiteLayout />} />
        </Routes>
      </Router>
    </ThemeLanguageProvider>
  );
};

export default App;