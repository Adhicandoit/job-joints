import ErrorBoundary from '../components/ErrorBoundary';
import Hero from '../components/sections/Hero';
import Ecosystems from '../components/sections/Ecosystems';
import JobSearch from '../components/sections/JobSearch';
import About from '../components/sections/About';
import FeaturedJobs from '../components/sections/FeaturedJobs';
import Testimonials from '../components/sections/Testimonials';
import Services from '../components/sections/Services';
import Industries from '../components/sections/Industries';
import Stats from '../components/sections/Stats';

const SECTIONS = [Hero, Ecosystems, JobSearch, About, FeaturedJobs, Testimonials, Services, Industries, Stats];

export default function Home() {
  return (
    <>
      {SECTIONS.map((Section) => (
        <ErrorBoundary key={Section.name}><Section /></ErrorBoundary>
      ))}
    </>
  );
}
