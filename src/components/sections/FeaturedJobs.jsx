import { getJobs } from '../../services/homeService';
import { useAsync } from '../../hooks/useAsync';
import AsyncBoundary from '../ui/AsyncBoundary';
import CardSkeletons from '../ui/CardSkeletons';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import JobCard from './JobCard';

const FEATURED_COUNT = 3;

export default function FeaturedJobs() {
  const state = useAsync(getJobs);

  return (
    <section id="featured-jobs" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured Jobs" title="Immediate openings at partner hospitals"
          description="Explore current openings at partner hospitals and clinics." />

        <AsyncBoundary state={state} skeleton={<CardSkeletons height="h-44" />} emptyText="No featured jobs right now.">
          {(jobs) => (
            <div className="grid gap-6 md:grid-cols-3">
              {jobs.slice(0, FEATURED_COUNT).map((job, i) => (
                <Reveal key={job.id} delay={i * 100}><JobCard job={job} /></Reveal>
              ))}
            </div>
          )}
        </AsyncBoundary>

        <div className="mt-12 text-center"><Button arrow href="/jobs">View All Jobs</Button></div>
      </div>
    </section>
  );
}
