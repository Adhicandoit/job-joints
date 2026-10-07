import { BadgeCheck, Search } from 'lucide-react';
import { getHero } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import { hero as heroFallback } from '../../data/home';
import Button from '../ui/Button';

// The hero is above the fold, so we render the bundled copy immediately
// and only layer in live placements/metrics when they arrive.
export default function Hero() {
  const { data } = useAsync(getHero);
  const hero = { ...heroFallback, ...(data ?? {}) };
  const placements = hero.placements?.length ? hero.placements : heroFallback.placements;
  const ticker = [...placements, ...placements, ...placements, ...placements];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-float rounded-full bg-brand-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-80 w-80 animate-float rounded-full bg-accent-400/30 blur-3xl [animation-delay:-4s]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" /></span>
          {hero.openings} Active Openings
        </span>

        <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.1] sm:text-6xl [animation-delay:100ms]">
          {hero.headline}
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-slate-600 [animation-delay:200ms]">{hero.subheadline}</p>

        <div className="animate-fade-up mt-10 flex flex-wrap justify-center gap-4 [animation-delay:300ms]">
          <Button href="#find-jobs" arrow><Search className="h-4 w-4" aria-hidden />Search Portals</Button>
          <Button variant="outline" href="#ecosystems">How it works</Button>
        </div>
      </div>

      <div className="relative mt-16" aria-label="Verified placements">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">Verified placements</p>
        <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
            {ticker.map((p, i) => (
              <li key={`${p.id}-${i}`} className="card flex items-center gap-3 px-5 py-3 shadow-sm">
                <BadgeCheck className="h-5 w-5 text-accent-500" aria-hidden />
                <div className="text-left">
                  <p className="text-sm font-semibold">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.specialty}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
