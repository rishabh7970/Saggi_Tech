import React from 'react';

type CountUpProps = {
  end: number;
  durationMs?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

// Easing function for a smooth animation curve
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  durationMs = 1200,
  decimals = 0,
  prefix = '',
  suffix = '',
  className
}) => {
  const [value, setValue] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement | null>(null);

  React.useEffect(() => {
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
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [started]);

  React.useEffect(() => {
    if (!started) return;

    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      setValue(end * eased);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, durationMs, end]);

  const formatted = React.useMemo(() => {
    const factor = Math.pow(10, decimals);
    const rounded = Math.round(value * factor) / factor;
    return `${prefix}${rounded.toFixed(decimals)}${suffix}`;
  }, [value, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
};

export default CountUp;



