import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/roofingData';
import { Clock, User, ArrowLeft, ArrowRight, ShieldCheck, Bookmark, Share2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface BlogProps {
  openQuoteModal: () => void;
}

export const Blog: React.FC<BlogProps> = ({ openQuoteModal }) => {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = BLOG_POSTS.find((b) => b.id === selectedPostId);

  const handleBackToGrid = () => {
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-light font-sans pt-24 min-h-screen">
      
      {/* Dynamic View switching based on whether an article is open */}
      {!selectedPost ? (
        <div key="blog-grid">
          {/* Editorial Title Header */}
          <section className="py-16 md:py-24 bg-brand-primary text-brand-light-pure border-b border-brand-secondary">
            <div className="max-w-5xl mx-auto px-4 md:px-8 text-center space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-accent font-bold block">
                ROOFING SPECS & INTEL
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight">
                Architectural Journals
              </h1>
              <div className="h-0.5 w-12 bg-brand-accent mx-auto mt-4" />
              <p className="text-sm md:text-base text-brand-border/70 max-w-xl mx-auto leading-relaxed">
                Forensic reviews, shingle composition comparisons, insurance claim pathways, and cool-roof thermodynamic analysis written by our lead engineers.
              </p>
            </div>
          </section>

          {/* Blog Post Index Grid */}
          <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-secondary font-bold mb-8 px-2">
              Recent Scientific Journals ({BLOG_POSTS.length})
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.id}
                  className="bg-brand-light-pure border border-brand-border rounded-sm overflow-hidden flex flex-col justify-between hover:border-brand-accent/30 transition-all duration-300"
                >
                  <div>
                    <div className="h-56 overflow-hidden bg-brand-primary relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-brand-primary/80 backdrop-blur-sm text-brand-accent border border-brand-accent/20 px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-sm font-bold">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-3.5">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-brand-secondary uppercase">
                        <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-brand-accent" /> {post.author.name}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-brand-accent" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-serif font-bold text-brand-primary leading-tight hover:text-brand-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs text-brand-secondary leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:px-8 md:pb-8 pt-0 flex justify-between items-center border-t border-brand-border/40 mt-4">
                    <span className="text-[10px] font-mono text-brand-secondary">{post.date}</span>
                    <button
                      onClick={() => {
                        setSelectedPostId(post.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-brand-accent font-bold hover:text-brand-accent-hover cursor-pointer"
                    >
                      Read Journal <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : (
        /* Full Article Details Reader Mode */
        <div key="blog-reader" className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          <Button
            variant="secondary"
            onClick={handleBackToGrid}
            className="flex items-center gap-2 text-xs uppercase tracking-widest mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Index
          </Button>

          <article className="bg-brand-light-pure border border-brand-border p-6 md:p-12 rounded-sm shadow-sm space-y-8 font-sans">
            
            {/* Meta row info */}
            <div className="flex flex-wrap items-center gap-4 border-b border-brand-border pb-6">
              <span className="px-3 py-1 bg-brand-accent-light text-brand-accent text-[10px] font-mono tracking-widest uppercase font-bold rounded-sm">
                {selectedPost.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-brand-secondary font-mono">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-accent" /> {selectedPost.readTime}</span>
                <span>·</span>
                <span>Published {selectedPost.date}</span>
              </div>
            </div>

            {/* Main title */}
            <h1 className="text-3xl md:text-5xl font-serif font-medium text-brand-primary tracking-tight leading-tight">
              {selectedPost.title}
            </h1>

            {/* Author card section */}
            <div className="flex items-center gap-3.5 p-4 bg-brand-light border border-brand-border rounded-sm max-w-md">
              <img
                src={selectedPost.author.avatar}
                alt={selectedPost.author.name}
                referrerPolicy="no-referrer"
                className="h-10 w-10 rounded-full object-cover grayscale"
              />
              <div>
                <span className="block text-xs font-bold text-brand-primary">{selectedPost.author.name}</span>
                <span className="block text-[10px] text-brand-accent font-mono uppercase tracking-widest font-semibold">{selectedPost.author.role}</span>
              </div>
            </div>

            {/* Large full cover photo */}
            <div className="relative aspect-video w-full overflow-hidden border border-brand-border rounded-sm bg-brand-primary">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main full paragraphs content text with elegant markup rendering style */}
            <div className="prose max-w-none text-brand-primary font-sans space-y-6 text-sm md:text-base leading-relaxed">
              {selectedPost.content.split('\n\n').map((para, idx) => {
                if (para.startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-xl font-serif font-semibold text-brand-primary pt-4 mt-6">
                      {para.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (para.startsWith('*')) {
                  return (
                    <ul key={idx} className="space-y-2.5 pl-5 list-disc text-brand-secondary">
                      {para.split('\n').map((li, lIdx) => (
                        <li key={lIdx} className="font-sans text-xs md:text-sm">
                          {li.replace('*', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-brand-secondary">
                    {para}
                  </p>
                );
              })}
            </div>

            {/* Dynamic CTA Footer on Reader */}
            <div className="p-6 md:p-8 bg-brand-light border border-brand-border rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 pt-8 mt-12">
              <div className="space-y-1 text-center md:text-left">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-accent font-bold">PROPERTY ASSESSMENT</span>
                <h4 className="text-sm font-serif font-bold text-brand-primary">Require a forensic storm damage audit?</h4>
                <p className="text-xs text-brand-secondary">Our certified adjusters work with all property insurance carriers.</p>
              </div>
              <Button
                variant="accent"
                onClick={openQuoteModal}
                className="w-full md:w-auto text-xs uppercase tracking-widest font-bold py-3 flex items-center justify-center gap-1.5"
              >
                Inquire For Inspection <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

          </article>
        </div>
      )}

      {/* Trust Quote CTA before footer */}
      <section className="bg-brand-primary text-brand-light-pure py-16 text-center border-t border-brand-secondary">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold block font-bold font-mono">EDUCATIONAL INTEGRITY</span>
          <p className="text-base md:text-lg italic font-serif text-brand-border/90">
            "An informed homeowner is our absolute best client. We commit to transparency, scientific materials metrics, and honest structural assessments."
          </p>
        </div>
      </section>

    </div>
  );
};
