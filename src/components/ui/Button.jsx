import { ArrowRight } from 'lucide-react';
import { classNames } from '../../lib/format';

const VARIANTS = { primary: 'btn-primary', outline: 'btn-outline', light: 'btn-light' };

// Renders an <a> when `href` is given, otherwise a <button>.
// Swap the <a> for a router <Link> when routes are added.
export default function Button({ variant = 'primary', size, arrow = false, href, className, children, ...rest }) {
  const cls = classNames('btn', VARIANTS[variant], size === 'sm' && 'btn-sm', className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="btn-icon h-4 w-4" aria-hidden />}
    </>
  );
  return href ? (
    <a href={href} className={cls} {...rest}>{content}</a>
  ) : (
    <button type="button" className={cls} {...rest}>{content}</button>
  );
}
