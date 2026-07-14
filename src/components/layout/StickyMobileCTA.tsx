import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface StickyMobileCTAProps {
  openQuoteModal: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ openQuoteModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-primary/95 border-t border-brand-secondary/80 backdrop-blur-md p-3 grid grid-cols-2 gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.15)] font-sans">
      {/* Click to Call */}
      <a
        href="tel:5551234567"
        className="flex items-center justify-center gap-2.5 bg-brand-secondary text-brand-light-pure py-3 rounded-sm border border-brand-border/10 text-xs uppercase tracking-widest font-bold font-sans active:scale-[0.98] transition-transform duration-100"
      >
        <Phone className="h-4.5 w-4.5 text-brand-accent animate-pulse" />
        Call Now
      </a>

      {/* Trigger Modal */}
      <button
        onClick={openQuoteModal}
        className="flex items-center justify-center gap-2.5 bg-brand-accent text-brand-light-pure py-3 rounded-sm text-xs uppercase tracking-widest font-bold font-sans active:scale-[0.98] transition-transform duration-100 cursor-pointer"
      >
        <Calendar className="h-4.5 w-4.5" />
        Get Quote
      </button>
    </div>
  );
};
