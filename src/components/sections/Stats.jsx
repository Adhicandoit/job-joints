import { getStats } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import AsyncBoundary from '../ui/AsyncBoundary';
import CountUp from '../ui/CountUp';
import Reveal from '../ui/Reveal';

export default function Stats() {
  const state = useAsync(getStats);

  return (
    <section id="stats" className="py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Building stronger healthcare teams every day</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">Connecting skilled medical professionals with leading hospitals through a smarter hiring experience.</p>
        </Reveal>

        <div className="mt-12">
          <AsyncBoundary state={state} skeleton={<div className="skeleton mx-auto h-32 max-w-xl" />} emptyText="Stats coming soon.">
            {(items) => (
              <div className="mx-auto grid max-w-xl gap-6 sm:grid-cols-2">
                {items.map((s, i) => (
                  <Reveal key={s.id} delay={i * 120}>
                    <div className="card card-hover bg-gradient-to-br from-brand-50 to-white p-8">
                      <p className="font-display text-5xl font-extrabold text-brand-600"><CountUp value={s.value} /></p>
                      <p className="mt-2 font-medium text-slate-600">{s.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </AsyncBoundary>
        </div>
      </div>
    </section>
  );
}
