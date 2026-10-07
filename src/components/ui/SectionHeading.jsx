import { classNames } from '../../lib/format';
import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  return (
    <Reveal className={classNames('mx-auto mb-12 max-w-2xl', align === 'center' ? 'text-center' : 'text-left mx-0')}>
      {eyebrow && (
        <span className={classNames('mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
          light ? 'bg-white/10 text-accent-400' : 'bg-brand-50 text-brand-600')}>
          {eyebrow}
        </span>
      )}
      <h2 className={classNames('text-3xl font-extrabold sm:text-4xl', light && 'text-white')}>{title}</h2>
      {description && <p className={classNames('mt-4 text-lg', light ? 'text-white/70' : 'text-slate-600')}>{description}</p>}
    </Reveal>
  );
}
