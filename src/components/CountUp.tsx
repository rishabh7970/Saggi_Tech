import React, { useState, useEffect, useRef, useMemo } from 'react';

type CountUpProps = {
  end: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  useCommas?: boolean;
};

// Premium Quart easing for a heavier, more "expensive" physics feel.
// It starts fast but decelerates much more smoothly at the very end.
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  durationMs = 2000, // 2 seconds for a deliberate, confident animation
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  useCommas = true, // Defaulting to true for professional formatting (e.g., 1,000)
}) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  // Trigger animation when the element scrolls into view
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  // Animation Loop
  useEffect(() => {
    if (!started) return;

    // Accessibility feature: Respect OS-level settings for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setValue(end);
      return;
    }

    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutQuart(t);
      
      setValue(end * eased);
      
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(end); // Force exact final value on completion
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, durationMs, end]);

  // Number Formatting (Adding commas and handling decimals)
  const formatted = useMemo(() => {
    let formattedNumber: string;

    if (useCommas) {
      // Formats 1000000 to 1,000,000
      formattedNumber = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }).format(value);
    } else {
      const factor = Math.pow(10, decimals);
      const rounded = Math.round(value * factor) / factor;
      formattedNumber = rounded.toFixed(decimals);
    }

    return `${prefix}${formattedNumber}${suffix}`;
  }, [value, decimals, prefix, suffix, useCommas]);

  return (
    <span 
      ref={ref} 
      // 'tabular-nums' ensures numbers take up the same width, preventing layout jiggle during animation
      className={`inline-block tabular-nums tracking-tight ${className}`}
    >
      {formatted}
    </span>
  );
};

export default CountUp;