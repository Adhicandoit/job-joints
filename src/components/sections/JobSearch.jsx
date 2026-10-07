import { useMemo, useState } from 'react';
import { ChevronUp, MapPin, Search } from 'lucide-react';
import { getFilters, getJobs } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import { classNames } from '../../lib/format';
import AsyncBoundary from '../ui/AsyncBoundary';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import JobCard from './JobCard';

const GROUPS = [
  { key: 'categories', label: 'Categories', field: 'category', searchable: true },
  { key: 'industries', label: 'Industry', field: 'industry' },
  { key: 'locations', label: 'Locations', field: 'location', searchable: true },
];

function FilterGroup({ group, options, selected, onToggle }) {
  const [open, setOpen] = useState(true);
  const [q, setQ] = useState('');
  const visible = options.filter((o) => o.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="border-b border-slate-100 py-4 last:border-0">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}
        className="flex w-full items-center justify-between font-display font-semibold">
        {group.label}
        <ChevronUp className={classNames('h-4 w-4 text-slate-400 transition-transform duration-300', !open && 'rotate-180')} aria-hidden />
      </button>
      <div className={classNames('grid transition-all duration-300', open ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0')}>
        <div className="overflow-hidden">
          {group.searchable && (
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search ${group.label.toLowerCase()}`}
                className="input !py-2 text-sm" aria-label={`Search ${group.label}`} />
            </div>
          )}
          <ul className="space-y-1">
            {visible.map((o) => (
              <li key={o}>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-brand-50">
                  <input type="checkbox" checked={selected.includes(o)} onChange={() => onToggle(o)} className="h-4 w-4 accent-brand-500" />
                  {o}
                </label>
              </li>
            ))}
            {visible.length === 0 && <li className="px-2 py-1.5 text-sm text-slate-400">No matches</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

const matches = (job, { what, where, selected }) => {
  const w = what.trim().toLowerCase();
  const l = where.trim().toLowerCase();
  const loc = `${job.city ?? ''}, ${job.state ?? ''}`.toLowerCase();
  if (w && !`${job.title} ${job.category ?? ''}`.toLowerCase().includes(w)) return false;
  if (l && !loc.includes(l)) return false;
  if (selected.categories.length && !selected.categories.includes(job.category)) return false;
  if (selected.industries.length && !selected.industries.includes(job.industry)) return false;
  if (selected.locations.length && !selected.locations.some((s) => s.toLowerCase().split(',')[0] === (job.city ?? '').toLowerCase())) return false;
  return true;
};

export default function JobSearch() {
  const filtersState = useAsync(getFilters);
  const jobsState = useAsync(getJobs);
  const [what, setWhat] = useState('');
  const [where, setWhere] = useState('');
  const [selected, setSelected] = useState({ categories: [], industries: [], locations: [] });
  const [submitted, setSubmitted] = useState({ what: '', where: '' });

  const toggle = (key) => (value) =>
    setSelected((s) => ({ ...s, [key]: s[key].includes(value) ? s[key].filter((v) => v !== value) : [...s[key], value] }));

  const results = useMemo(
    () => (jobsState.data ?? []).filter((j) => matches(j, { ...submitted, selected })),
    [jobsState.data, submitted, selected],
  );

  const onSubmit = (e) => { e.preventDefault(); setSubmitted({ what, where }); };
  const reset = () => { setWhat(''); setWhere(''); setSubmitted({ what: '', where: '' }); setSelected({ categories: [], industries: [], locations: [] }); };

  return (
    <section id="find-jobs" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Find Jobs" title="Drop your resume & get your desired job"
          description="Find jobs, employment and career opportunities across India’s healthcare network." />

        <Reveal>
          <form onSubmit={onSubmit} className="card mx-auto mb-8 grid max-w-4xl gap-3 p-3 shadow-xl shadow-brand-500/5 sm:grid-cols-[1fr_1fr_auto]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden />
              <input className="input" value={what} onChange={(e) => setWhat(e.target.value)} placeholder="What — e.g. Job Title" aria-label="Job title" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden />
              <input className="input" value={where} onChange={(e) => setWhere(e.target.value)} placeholder="Where — e.g. City Name" aria-label="City" />
            </div>
            <Button type="submit"><Search className="h-4 w-4" aria-hidden />Find Jobs</Button>
          </form>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <Reveal>
            <aside className="card p-5" aria-label="Filters">
              <AsyncBoundary state={filtersState} isEmpty={(d) => !d} emptyText="Filters unavailable.">
                {(f) => GROUPS.map((g) => (
                  <FilterGroup key={g.key} group={g} options={f[g.key] ?? []} selected={selected[g.key]} onToggle={toggle(g.key)} />
                ))}
              </AsyncBoundary>
            </aside>
          </Reveal>

          <div>
            <AsyncBoundary state={jobsState}
              skeleton={<div className="grid gap-5 sm:grid-cols-2">{[0, 1, 2, 3].map((i) => <div key={i} className="skeleton h-44" />)}</div>}
              emptyText="No jobs are listed right now. Please check back soon.">
              {() => (
                <>
                  <p className="mb-4 text-sm text-slate-500" aria-live="polite">{results.length} {results.length === 1 ? 'job' : 'jobs'} found</p>
                  {results.length === 0 ? (
                    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500">
                      <p>No jobs match your search.</p>
                      <Button variant="outline" size="sm" onClick={reset}>Clear filters</Button>
                    </div>
                  ) : (
                    <div className="grid gap-5 sm:grid-cols-2">{results.map((j) => <JobCard key={j.id} job={j} />)}</div>
                  )}
                </>
              )}
            </AsyncBoundary>
          </div>
        </div>
      </div>
    </section>
  );
}
