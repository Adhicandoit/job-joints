import { getEcosystems } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import { getIcon } from '../../lib/icons';
import AsyncBoundary from '../ui/AsyncBoundary';
import CardSkeletons from '../ui/CardSkeletons';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Ecosystems() {
  const state = useAsync(getEcosystems);

  return (
    <section id="ecosystems" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Tailored Ecosystems" title="Built for how healthcare really hires"
          description="Features engineered to make healthcare workforce logistics seamless, elegant, and secure." />

        <AsyncBoundary state={state} skeleton={<CardSkeletons />} emptyText="Ecosystems will appear here soon.">
          {(items) => (
            <div className="grid gap-6 md:grid-cols-3">
              {items.map((item, i) => {
                const Icon = getIcon(item.icon);
                return (
                  <Reveal key={item.id} delay={i * 100}>
                    <article className="card card-hover group flex h-full flex-col p-8">
                      <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white">
                        <Icon className="h-7 w-7" aria-hidden />
                      </div>
                      <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-500">{item.audience}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="mt-3 flex-1 text-slate-600">{item.description}</p>
                      <Button variant="outline" size="sm" arrow href={item.to} className="mt-6 self-start">{item.cta}</Button>
                    </article>
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
