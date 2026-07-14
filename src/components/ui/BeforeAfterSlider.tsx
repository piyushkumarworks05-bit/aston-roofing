import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles, AlertCircle } from 'lucide-react';

interface SliderItem {
  id: string;
  title: string;
  before: string;
  after: string;
  desc: string;
}

interface BeforeAfterSliderProps {
  items: SliderItem[];
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = items[activeIdx] || items[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
  };

  return (
    <div className="w-full font-sans max-w-4xl mx-auto">
      {/* Navigation selectors */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveIdx(idx);
              setSliderPosition(50);
            }}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-all duration-300 rounded-sm cursor-pointer ${
              activeIdx === idx
                ? 'bg-brand-accent border-brand-accent text-brand-light-pure'
                : 'bg-transparent border-brand-border text-brand-secondary hover:border-brand-accent/50'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Main Slider Canvas */}
      <div
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden border border-brand-border rounded-sm shadow-md cursor-ew-resize select-none no-select bg-brand-primary"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* After Image (Full Background) */}
        <img
          src={activeItem.after}
          alt="After Restoration"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        />
        <div className="absolute right-4 bottom-4 bg-brand-success/90 backdrop-blur-sm text-brand-light-pure px-3 py-1 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 rounded-sm">
          <Sparkles className="h-3 w-3" />
          After
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 h-full overflow-hidden select-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={activeItem.before}
            alt="Before Restoration"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
          />
          <div className="absolute left-4 bottom-4 bg-brand-error/90 backdrop-blur-sm text-brand-light-pure px-3 py-1 text-xs font-semibold uppercase tracking-widest flex items-center gap-1.5 rounded-sm">
            <AlertCircle className="h-3 w-3" />
            Before
          </div>
        </div>

        {/* Sliding Bar Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-brand-light-pure shadow-[0_0_8px_rgba(0,0,0,0.5)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-light-pure bg-brand-accent text-brand-light-pure shadow-lg flex items-center justify-center transition-transform duration-200 active:scale-110">
            <ChevronsLeftRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm italic text-brand-secondary">
          {activeItem.desc} — Drag the white slider center bar left and right to reveal the transformation.
        </p>
      </div>
    </div>
  );
};
