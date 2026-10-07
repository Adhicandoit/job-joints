import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/site';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'bg-white/85 shadow-sm backdrop-blur-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <a href={to} className="group relative rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600">
                {label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded bg-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" href="/employee-login">Employee Login</Button>
          <Button size="sm" href="/login">Login / Register</Button>
        </div>

        <button className="rounded-lg p-2 text-ink transition-colors hover:bg-brand-50 lg:hidden" onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-up border-t border-slate-100 bg-white px-4 pb-6 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}><a href={to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-brand-50">{label}</a></li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <Button variant="outline" href="/employee-login">Employee Login</Button>
            <Button href="/login">Login / Register</Button>
          </div>
        </div>
      )}
    </header>
  );
}
