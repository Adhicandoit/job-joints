import { Briefcase, MapPin } from 'lucide-react';
import Button from '../ui/Button';

export default function JobCard({ job }) {
  const location = [job.city, job.state].filter(Boolean).join(', ') || 'Location not specified';
  return (
    <article className="card card-hover flex h-full flex-col p-6">
      <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-400/15 px-3 py-1 text-xs font-semibold text-accent-500">
        <Briefcase className="h-3.5 w-3.5" aria-hidden />{job.type ?? 'Full time'}
      </span>
      <h3 className="text-lg font-bold leading-snug">{job.title}</h3>
      <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500"><MapPin className="h-4 w-4" aria-hidden />{location}</p>
      <Button variant="outline" size="sm" arrow href={`/jobs/${job.id}`} className="mt-6 self-start">More Details</Button>
    </article>
  );
}
