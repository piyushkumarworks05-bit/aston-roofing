import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // duration in ms
  label: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1500,
  label
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMilestones = 60; // 60 frames per second
    const stepTime = Math.abs(Math.floor(duration / totalMilestones));
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalMilestones;
      // Ease out quad
      const easedProgress = progress * (2 - progress);
      const nextCount = Math.floor(easedProgress * end);

      if (currentFrame >= totalMilestones) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(nextCount);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, hasStarted]);

  return (
    <div ref={elementRef} className="text-center p-6 font-sans">
      <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-brand-accent mb-2 tabular-nums">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-widest font-semibold text-brand-secondary">
        {label}
      </div>
    </div>
  );
};
