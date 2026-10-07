import { useInView } from '../../hooks/useInView';
import { classNames } from '../../lib/format';

// Fades/slides children in when scrolled into view. `delay` is in ms (for staggering).
export default function Reveal({ children, delay = 0, className, as: Tag = 'div' }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={classNames('reveal', inView && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
