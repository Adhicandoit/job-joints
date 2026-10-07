export default function Logo({ light = false }) {
  return (
    <a href="/" className="group inline-flex items-center gap-2.5" aria-label="JobJoints home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg transition-transform duration-300 group-hover:rotate-12">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
      <span className={`font-display text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Job<span className="text-brand-500">Joints</span>
      </span>
    </a>
  );
}
