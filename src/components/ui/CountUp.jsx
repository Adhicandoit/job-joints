import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { formatNumber } from '../../lib/format';

// Animates from 0 to `value` once visible. Non-numeric values render as a dash.
export default function CountUp({ value, duration = 1400 }) {
  const [ref, inView] = useInView();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !Number.isFinite(value)) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{Number.isFinite(value) ? formatNumber(display) : '—'}</span>;
}
