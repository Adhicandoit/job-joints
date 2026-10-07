import { ArrowUpRight } from 'lucide-react';
import { getIndustries } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import { getIcon } from '../../lib/icons';
import { formatNumber } from '../../lib/format';
import AsyncBoundary from '../ui/AsyncBoundary';
import CardSkeletons from '../ui/CardSkeletons';
import CountUp from '../ui/CountUp';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Industries() {
  const state = useAsync(getIndustries);

  return (
    <section id="industries" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Jobs by Industry" title="Explore jobs across the healthcare fraternity"
          description="Browse openings by specialty and staff category." />

        <AsyncBoundary state={state} skeleton={<CardSkeletons count={6} cols="sm:grid-cols-2 lg:grid-cols-3" height="h-36" />} emptyText="Categories coming soon.">
          {(items) => (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((c, i) => {
                const Icon = getIcon(c.icon);
                return (
                  <Reveal key={c.id} delay={(i % 3) * 90}>
                    <a href={`/jobs?category=${c.id}`} className="card card-hover group flex items-center gap-5 p-6" aria-label={`${c.title}: ${formatNumber(c.count)} jobs`}>
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon className="h-7 w-7" aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-bold">{c.title}</h3>
                        {c.sub && <p className="truncate text-xs text-slate-500">{c.sub}</p>}
                        <p className="mt-1 font-display text-2xl font-extrabold text-brand-600"><CountUp value={c.count} /> <span className="text-sm font-medium text-slate-400">jobs</span></p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-500" aria-hidden />
                    </a>
                  </Reveal>
                );
              })}
            </div>
          )}
        </AsyncBoundary>
      </div>
    </section>
  );
}
