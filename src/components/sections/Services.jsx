import { getServices } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import { getIcon } from '../../lib/icons';
import AsyncBoundary from '../ui/AsyncBoundary';
import CardSkeletons from '../ui/CardSkeletons';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function Services() {
  const state = useAsync(getServices);

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="JobJoints Hub" title="Where medical innovation meets placement logistics" />

        <AsyncBoundary state={state} skeleton={<CardSkeletons count={4} cols="sm:grid-cols-2 lg:grid-cols-4" height="h-52" />} emptyText="Services coming soon.">
          {(items) => (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((s, i) => {
                const Icon = getIcon(s.icon);
                return (
                  <Reveal key={s.id} delay={i * 90}>
                    <article className="card card-hover group relative h-full overflow-hidden p-6">
                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-[3]" />
                      <div className="relative">
                        <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                          <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <h3 className="text-lg font-bold">{s.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </AsyncBoundary>

        <div className="mt-12 text-center"><Button arrow href="/login">Get Started Now</Button></div>
      </div>
    </section>
  );
}
