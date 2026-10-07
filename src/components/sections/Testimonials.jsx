import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { getTestimonials } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import { classNames } from '../../lib/format';
import AsyncBoundary from '../ui/AsyncBoundary';
import SectionHeading from '../ui/SectionHeading';

const AUTOPLAY_MS = 6000;

function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;
  const go = (d) => setIndex((i) => (i + d + count) % count);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const arrow = 'grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-all duration-200 hover:scale-110 hover:bg-white hover:text-brand-700 active:scale-90';

  return (
    <div className="mx-auto max-w-3xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((t, i) => (
            <figure key={t.id} className="w-full shrink-0 px-2" aria-hidden={i !== index}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12">
                <Quote className="mx-auto mb-6 h-9 w-9 text-accent-400" aria-hidden />
                <blockquote className="text-xl font-medium leading-relaxed text-white sm:text-2xl">“{t.quote}”</blockquote>
                <figcaption className="mt-8">
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="text-sm text-white/60">{[t.role, t.org].filter(Boolean).join(', ')}</p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-6">
          <button className={arrow} onClick={() => go(-1)} aria-label="Previous testimonial"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-2">
            {items.map((t, i) => (
              <button key={t.id} onClick={() => setIndex(i)} aria-label={`Go to testimonial ${i + 1}`}
                className={classNames('h-2 rounded-full transition-all duration-300', i === index ? 'w-8 bg-accent-400' : 'w-2 bg-white/30 hover:bg-white/60')} />
            ))}
          </div>
          <button className={arrow} onClick={() => go(1)} aria-label="Next testimonial"><ChevronRight className="h-5 w-5" /></button>
        </div>
      )}
    </div>
  );
}

export default function Testimonials() {
  const state = useAsync(getTestimonials);
  return (
    <section id="testimonials" className="bg-gradient-to-br from-ink to-brand-700 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading light eyebrow="Elite Testimonials" title="Trusted by leaders in healthcare"
          description="Real feedback from healthcare institutions and board-certified practitioners." />
        <AsyncBoundary state={state} skeleton={<div className="skeleton mx-auto h-64 max-w-3xl opacity-20" />} emptyText="Testimonials coming soon.">
          {(items) => <Carousel items={items} />}
        </AsyncBoundary>
      </div>
    </section>
  );
}
