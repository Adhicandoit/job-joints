import { CheckCircle2 } from 'lucide-react';
import { getStaffTiers } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import AsyncBoundary from '../ui/AsyncBoundary';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  const state = useAsync(getStaffTiers);

  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading align="left" eyebrow="About JobJoints" title="Healthcare recruitment, done right"
            description="A privately held platform trusted by hospitals, medical colleges and nursing institutions to place the right people in the right roles — and contribute to the community they serve." />
        </Reveal>

        <AsyncBoundary state={state} skeleton={<div className="skeleton h-72" />} emptyText="Staff categories coming soon.">
          {(tiers) => (
            <ul className="grid gap-3 sm:grid-cols-2">
              {tiers.map((t, i) => (
                <Reveal as="li" key={t.id} delay={i * 70}>
                  <div className="card card-hover flex h-full items-start gap-3 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden />
                    <div>
                      <p className="font-semibold leading-snug">{t.label}</p>
                      {t.qualification && <p className="mt-0.5 text-sm text-slate-500">{t.qualification}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}
        </AsyncBoundary>
      </div>
    </section>
  );
}
