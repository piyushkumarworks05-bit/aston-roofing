import React, { useState } from 'react';
import { PROJECTS } from '../data/roofingData';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { Calendar, MapPin, Tag, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ProjectsProps {
  openQuoteModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ openQuoteModal }) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Specialty'>('All');
  const [selectedProjId, setSelectedProjId] = useState<string | null>(PROJECTS[0].id);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  const selectedProj = PROJECTS.find((p) => p.id === selectedProjId) || PROJECTS[0];

  return (
    <div className="bg-brand-light font-sans pt-24 min-h-screen">
      
      {/* Editorial Title Header */}
      <section className="py-16 md:py-24 bg-brand-primary text-brand-light-pure border-b border-brand-secondary">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
            CRAFTED REALIZATIONS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
            Case-Study Portfolio
          </h1>
          <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
          <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
            Examine our archive of premium residential replacements, flat-roof commercial low-slope systems, and custom standing-seam copper installations.
          </p>
        </div>
      </section>

      {/* Main Grid Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['All', 'Residential', 'Commercial', 'Specialty'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                // Auto reset selected project if it doesn't match filter
                const matches = PROJECTS.filter((p) => cat === 'All' || p.category === cat);
                if (matches.length > 0 && !matches.some((m) => m.id === selectedProjId)) {
                  setSelectedProjId(matches[0].id);
                }
              }}
              className={`px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all duration-300 rounded-sm cursor-pointer ${
                filter === cat
                  ? 'bg-brand-accent text-brand-light-pure'
                  : 'bg-brand-light-pure border border-brand-border text-brand-secondary hover:border-brand-accent/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Grid: Filtered Cards Directory */}
          <div className="lg:col-span-5 space-y-6">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-secondary font-bold px-2">
              Browse Cases ({filteredProjects.length})
            </span>
            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2">
              {filteredProjects.map((proj) => {
                const isSelected = selectedProjId === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProjId(proj.id)}
                    className={`w-full text-left p-4 md:p-6 border rounded-sm transition-all duration-300 flex gap-4 group cursor-pointer ${
                      isSelected
                        ? 'border-brand-accent bg-brand-light-pure shadow-sm'
                        : 'border-brand-border bg-transparent hover:border-brand-accent/50'
                    }`}
                  >
                    <div className="h-16 w-16 md:h-20 md:w-20 rounded-sm overflow-hidden bg-brand-primary flex-shrink-0">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-brand-accent font-bold">
                        <span>{proj.category}</span>
                        <span>·</span>
                        <span>{proj.year}</span>
                      </div>
                      <h3 className="text-sm md:text-base font-serif font-bold text-brand-primary truncate mt-1">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-brand-secondary truncate mt-0.5">
                        {proj.location}
                      </p>
                    </div>
                    <div className="flex items-center text-brand-accent">
                      <ChevronRight className="h-5 w-5 stroke-[1.5]" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Area: Large Selected Case Study Canvas */}
          <div className="lg:col-span-7 bg-brand-light-pure border border-brand-border p-6 md:p-10 rounded-sm shadow-sm space-y-8">
            
            {/* Header coordinates */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent-light text-brand-accent text-[10px] font-mono tracking-widest uppercase font-bold rounded-sm">
                <Tag className="h-3 w-3" /> {selectedProj.category} Division
              </span>
              <div className="flex items-center gap-4 text-xs text-brand-secondary font-mono">
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand-accent" /> {selectedProj.location}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-brand-accent" /> Completed {selectedProj.year}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3.5xl font-serif font-semibold text-brand-primary">
                {selectedProj.title}
              </h2>
              <p className="text-sm text-brand-secondary leading-relaxed font-sans">
                {selectedProj.description}
              </p>
            </div>

            {/* Before / After Section (if exists) */}
            {selectedProj.beforeImage && selectedProj.afterImage ? (
              <div className="space-y-4 pt-6 border-t border-brand-border">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">Interactive Restoration View</h4>
                <BeforeAfterSlider
                  items={[
                    {
                      id: selectedProj.id,
                      title: selectedProj.title,
                      before: selectedProj.beforeImage,
                      after: selectedProj.afterImage,
                      desc: 'Full forensic remediation'
                    }
                  ]}
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full overflow-hidden border border-brand-border rounded-sm bg-brand-primary">
                <img
                  src={selectedProj.image}
                  alt={selectedProj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Highlighting Material Specs */}
            <div className="space-y-4 pt-6 border-t border-brand-border">
              <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">Technical Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {selectedProj.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-success flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-brand-primary font-medium font-sans leading-tight">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking Link */}
            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="block text-[10px] font-mono text-brand-accent uppercase font-bold">ESTATE UPGRADE</span>
                <p className="text-xs text-brand-secondary">Request a similar high-end installation on your property.</p>
              </div>
              <Button
                variant="accent"
                onClick={openQuoteModal}
                className="w-full sm:w-auto text-xs uppercase tracking-widest font-bold py-3 flex items-center justify-center gap-1.5"
              >
                Inquire For Estimate <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

          </div>

        </div>

      </section>

      {/* Trust Quote CTA before footer */}
      <section className="bg-brand-primary text-brand-light-pure py-16 text-center border-t border-brand-secondary">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block font-bold">PORTFOLIO ASSURANCE</span>
          <p className="text-base md:text-lg italic font-serif text-brand-border/90">
            "We treat every shingles replacement, low-slope roof, and copper gutter layout with surgical precision. Each completed structure represents our brand's physical legacy."
          </p>
        </div>
      </section>

    </div>
  );
};
