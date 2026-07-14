import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  openQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  openQuoteModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Portfolio' },
    { id: 'about', label: 'Our Story' },
    { id: 'service-areas', label: 'Locations' },
    { id: 'blog', label: 'Intel' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-brand-primary/95 border-b border-brand-secondary backdrop-blur-md py-4'
            : 'bg-gradient-to-b from-brand-primary/70 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <div className="h-10 w-10 flex items-center justify-center bg-brand-accent text-brand-light-pure rounded-sm transition-transform duration-300 group-hover:scale-105">
              <Shield className="h-5 w-5 fill-current" />
            </div>
            <div>
              <span className="block text-lg font-serif font-semibold tracking-wider text-brand-light-pure leading-none">
                ASTON
              </span>
              <span className="block text-[9px] font-mono tracking-[0.25em] text-brand-accent uppercase mt-0.5 leading-none">
                ROOFING SYSTEMS
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-xs uppercase tracking-widest font-semibold transition-all relative py-1 cursor-pointer ${
                    isActive ? 'text-brand-accent' : 'text-brand-border hover:text-brand-light-pure'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Call / CTA Area */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:5551234567"
              className="flex items-center gap-2 text-xs font-mono text-brand-border hover:text-brand-accent transition-colors font-semibold"
            >
              <Phone className="h-4 w-4 text-brand-accent" />
              <span>(555) 123-4567</span>
            </a>
            <Button
              variant="accent"
              size="sm"
              onClick={openQuoteModal}
              className="flex items-center gap-1.5 font-semibold"
            >
              Get Free Quote <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-border hover:text-brand-light-pure focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-brand-primary z-30 flex flex-col justify-between p-6 lg:hidden font-sans border-t border-brand-secondary"
          >
            <div className="space-y-6 pt-4">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`block w-full text-left text-2xl font-serif font-medium transition-colors cursor-pointer ${
                      isActive ? 'text-brand-accent' : 'text-brand-border'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="space-y-4 border-t border-brand-secondary pt-6 pb-20">
              <a
                href="tel:5551234567"
                className="flex items-center justify-center gap-3 w-full py-4 bg-brand-secondary text-brand-light-pure font-mono text-sm font-semibold rounded-sm border border-brand-border/10"
              >
                <Phone className="h-4 w-4 text-brand-accent animate-pulse" />
                (555) 123-4567 (Emergency Line)
              </a>
              <Button
                variant="accent"
                className="w-full text-sm font-semibold py-4"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
              >
                Request Free Inspection
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
