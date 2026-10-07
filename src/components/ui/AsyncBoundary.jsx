import { AlertTriangle, Inbox } from 'lucide-react';
import Button from './Button';

// Handles loading / error / empty states so sections only render the happy path.
// `isEmpty` lets callers define emptiness (defaults to an empty array).
export default function AsyncBoundary({ state, skeleton, emptyText = 'Nothing to show yet.', isEmpty, children }) {
  const { data, loading, error, reload } = state;

  if (loading) return skeleton ?? <div className="skeleton h-40 w-full" aria-busy="true" />;

  if (error) {
    return (
      <div role="alert" className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
        <AlertTriangle className="h-8 w-8 text-red-500" aria-hidden />
        <p className="font-medium text-red-700">We couldn’t load this section.</p>
        <Button variant="outline" size="sm" onClick={reload}>Try again</Button>
      </div>
    );
  }

  const empty = isEmpty ? isEmpty(data) : !data || (Array.isArray(data) && data.length === 0);
  if (empty) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-200 p-8 text-center text-slate-500">
        <Inbox className="h-8 w-8" aria-hidden />
        <p>{emptyText}</p>
      </div>
    );
  }

  return children(data);
}
