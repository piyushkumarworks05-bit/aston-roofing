import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, Clock, ShieldAlert } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { StickyMobileCTA } from './components/layout/StickyMobileCTA';

// Pages
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import { ServiceAreas } from './pages/ServiceAreas';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

// Quote Modal Form
import { QuoteForm } from './components/ui/QuoteForm';

type PageType = 'home' | 'services' | 'projects' | 'about' | 'service-areas' | 'blog' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Sync state with URL location hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      const validPages: PageType[] = ['home', 'services', 'projects', 'about', 'service-areas', 'blog', 'contact'];
      if (hash && validPages.includes(hash as PageType)) {
        setCurrentPage(hash as PageType);
      } else {
        setCurrentPage('home');
      }
    };

    // Run on initial load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    window.location.hash = `#/${page}`;
    setCurrentPage(page as PageType);
  };

  const openQuoteModal = () => {
    setQuoteModalOpen(true);
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  };

  const closeQuoteModal = () => {
    setQuoteModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-brand-light font-sans selection:bg-brand-accent selection:text-brand-light-pure">
      
      {/* Premium Sticky Navigation bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        openQuoteModal={openQuoteModal}
      />

      {/* Main Multi-Page Page Transition Stage */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {currentPage === 'home' && (
              <Home onNavigate={handleNavigate} openQuoteModal={openQuoteModal} />
            )}
            {currentPage === 'services' && (
              <Services openQuoteModal={openQuoteModal} />
            )}
            {currentPage === 'projects' && (
              <Projects openQuoteModal={openQuoteModal} />
            )}
            {currentPage === 'about' && (
              <About openQuoteModal={openQuoteModal} />
            )}
            {currentPage === 'service-areas' && (
              <ServiceAreas openQuoteModal={openQuoteModal} />
            )}
            {currentPage === 'blog' && (
              <Blog openQuoteModal={openQuoteModal} />
            )}
            {currentPage === 'contact' && (
              <Contact openQuoteModal={openQuoteModal} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Flagship Detailed Footer */}
      <Footer onNavigate={handleNavigate} openQuoteModal={openQuoteModal} />

      {/* Mobile-only Persistent CTA Bar */}
      <StickyMobileCTA openQuoteModal={openQuoteModal} />

      {/* Cinematic Modal Dialog housing our Multi-step Quote request form */}
      <AnimatePresence>
        {quoteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuoteModal}
              className="absolute inset-0 bg-brand-primary/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl bg-brand-light overflow-y-auto max-h-[90vh] rounded-sm shadow-2xl border border-brand-border"
            >
              {/* Close Button */}
              <button
                onClick={closeQuoteModal}
                className="absolute right-4 top-4 p-2 text-brand-secondary hover:text-brand-accent transition-colors bg-brand-light-pure/60 border border-brand-border rounded-full cursor-pointer z-10"
                aria-label="Close dialog"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="pt-8">
                <QuoteForm onSuccess={() => {
                  // Keep open so they can inspect their generated receipt ticket
                }} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
