import React, { useState } from 'react';
import { SERVICE_AREAS } from '../data/roofingData';
import { MapPin, Search, Phone, Check, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ServiceAreasProps {
  openQuoteModal: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ openQuoteModal }) => {
  const [zipQuery, setZipQuery] = useState('');
  const [zipResult, setZipResult] = useState<{ isServiced: boolean; areaName?: string } | null>(null);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = zipQuery.trim().replace(/\s/g, '');
    if (!cleanQuery) return;

    // Simulate checking against regional bounds
    // We check if the query matches digits in 60001 - 60599 range
    const num = parseInt(cleanQuery, 10);
    if (!isNaN(num) && num >= 60000 && num <= 60600) {
      // Find a matching service area based on simulated codes
      let matchedArea = SERVICE_AREAS[0].city;
      if (num >= 60201 && num <= 60250) matchedArea = SERVICE_AREAS[1].city;
      else if (num >= 60301 && num <= 60380) matchedArea = SERVICE_AREAS[2].city;
      else if (num >= 60010 && num <= 60050) matchedArea = SERVICE_AREAS[3].city;
      else if (num >= 60401 && num <= 60460) matchedArea = SERVICE_AREAS[4].city;
      else if (num >= 60510 && num <= 60599) matchedArea = SERVICE_AREAS[5].city;

      setZipResult({ isServiced: true, areaName: matchedArea });
    } else {
      setZipResult({ isServiced: false });
    }
  };

  return (
    <div className="bg-brand-light font-sans pt-24 min-h-screen">
      
      {/* Editorial Title Header */}
      <section className="py-16 md:py-24 bg-brand-primary text-brand-light-pure border-b border-brand-secondary">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
            LOCAL SEO OPERATIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
            Our Regional Locations
          </h1>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
            Aston Roofing maintains dedicated local dispatch crews throughout multiple premium counties. We coordinate directly with local municipal inspectors to guarantee compliance.
          </p>
        </div>
      </section>

      {/* ZIP Eligibility Check Widget */}
      <section className="max-w-3xl mx-auto px-4 py-12 -mt-10 relative z-10">
        <div className="bg-brand-light-pure border border-brand-border p-6 md:p-8 rounded-sm shadow-sm space-y-4 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">DISPATCH VERIFICATION</span>
          <h4 className="text-lg font-serif font-medium text-brand-primary">Verify Diagnostic Dispatch Eligibility</h4>
          <p className="text-xs text-brand-secondary max-w-md mx-auto">
            Input your 5-digit ZIP or postal code to verify if your site sits within our active 2-hour forensic inspection team radius.
          </p>

          <form onSubmit={handleZipCheck} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-secondary" />
              <input
                type="text"
                value={zipQuery}
                onChange={(e) => {
                  setZipQuery(e.target.value);
                  setZipResult(null);
                }}
                maxLength={5}
                placeholder="e.g. 60205"
                className="w-full pl-10 pr-4 py-2.5 border border-brand-border rounded-sm text-sm focus:outline-none focus:border-brand-accent bg-transparent transition-colors font-mono"
              />
            </div>
            <Button
              type="submit"
              variant="accent"
              className="text-xs uppercase tracking-wider font-bold py-2.5 px-6"
            >
              Verify Code
            </Button>
          </form>

          {/* Results feedback with slide-in animation */}
          {zipResult && (
            <div className="pt-4 max-w-md mx-auto text-left font-sans text-xs">
              {zipResult.isServiced ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200/50 rounded-sm flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-success flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-brand-primary">Site Eligible for Dispatch</span>
                    <p className="text-brand-secondary mt-0.5">
                      Your location is serviced by our <span className="font-semibold text-brand-accent">{zipResult.areaName}</span> branch. Our 2-hour response window is currently active.
                    </p>
                    <button
                      onClick={openQuoteModal}
                      className="mt-2 text-brand-accent hover:text-brand-accent-hover font-semibold underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      Book Free Inspection <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-amber-50 border border-amber-200/50 rounded-sm flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center flex-shrink-0 font-bold font-mono text-xs">!</div>
                  <div>
                    <span className="block font-bold text-amber-900">Custom Dispatch Required</span>
                    <p className="text-amber-800 mt-0.5">
                      That ZIP falls outside our standard 2-hour automated dispatch zones. However, our specialty commercial and custom copper crews cover remote states. Please call directly.
                    </p>
                    <a
                      href="tel:5551234567"
                      className="mt-2 text-brand-accent hover:text-brand-accent-hover font-semibold underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      Call Dispatch (555) 123-4567
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Crawlable local SEO Blocks */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-12 pb-24">
        <h2 className="text-xl font-serif font-semibold text-brand-primary border-b border-brand-border pb-3 uppercase tracking-wider font-mono">
          Crawlable Regional Directories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_AREAS.map((sa) => (
            <div
              key={sa.id}
              className="bg-brand-light-pure border border-brand-border p-6 md:p-8 rounded-sm space-y-5 shadow-sm hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="block text-[10px] font-mono text-brand-accent uppercase tracking-widest font-bold">BRANCH COORDINATES</span>
                  <h3 className="text-xl font-serif font-bold text-brand-primary">{sa.city}</h3>
                  <span className="block text-xs font-mono text-brand-secondary">ZIP Code Range: {sa.postalCodePattern}</span>
                </div>
                <div className="p-2.5 bg-brand-light text-brand-accent rounded-sm">
                  <MapPin className="h-5 w-5 stroke-[1.5]" />
                </div>
              </div>

              {/* Unique copy for localized SEO */}
              <p className="text-xs text-brand-secondary leading-relaxed font-sans">
                {sa.description} Our localized crews understand regional wind ratios, localized drainage problems, and specific county planning codes to execute flawless installations.
              </p>

              {/* Primary Local Services list */}
              <div className="space-y-3 pt-4 border-t border-brand-border">
                <span className="block text-[10px] font-mono text-brand-accent uppercase font-bold">Active Local Specializations</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-primary">
                  {sa.primaryServices.map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-success stroke-[2.5]" />
                      <span className="font-medium">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Link to Call */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs">
                <span className="text-brand-secondary font-mono">Operating Distance: {sa.distance}</span>
                <a
                  href="tel:5551234567"
                  className="font-mono font-bold text-brand-accent hover:text-brand-accent-hover inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Dial Local Crew <Phone className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Quote CTA before footer */}
      <section className="bg-brand-primary text-brand-light-pure py-16 text-center border-t border-brand-secondary">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block font-bold font-mono">REGIONAL COVERAGE GUARANTEE</span>
          <p className="text-base md:text-lg italic font-serif text-brand-border/90">
            "Each of our county branches carries identical multi-million liability policies and certified GAF credentials. We guarantee structural perfection on every slope, regardless of regional boundaries."
          </p>
        </div>
      </section>

    </div>
  );
};
