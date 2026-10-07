import { Mail, MapPin, Phone } from 'lucide-react';
import { FOOTER, SITE } from '../../data/site';
import Logo from '../ui/Logo';

const YEAR = new Date().getFullYear();
const linkCls = 'inline-block text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white';

export default function Footer() {
  const { contact } = SITE;
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm text-white/70">{SITE.tagline}.</p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Industries</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER.verticals.map((v) => <li key={v} className="text-white/70">{v}</li>)}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER.quickLinks.map(({ label, to }) => <li key={label}><a href={to} className={linkCls}>{label}</a></li>)}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden />{contact.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden /><a href={`tel:${contact.phone}`} className="hover:text-white">{contact.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden /><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {YEAR} {SITE.legalName}. All rights reserved.</p>
          <ul className="flex gap-6">
            {FOOTER.legal.map(({ label, to }) => <li key={label}><a href={to} className="hover:text-white">{label}</a></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
