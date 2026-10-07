export const formatNumber = (n) =>
  Number.isFinite(n) ? new Intl.NumberFormat('en-IN').format(n) : '—';

export const classNames = (...parts) => parts.filter(Boolean).join(' ');
