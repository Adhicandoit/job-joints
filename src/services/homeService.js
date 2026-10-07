import { request } from './api';
import * as fallback from '../data/home';

export const getHero = () => request('/home/hero', fallback.hero);
export const getEcosystems = () => request('/home/ecosystems', fallback.ecosystems);
export const getFilters = () => request('/jobs/filters', fallback.filters);
export const getStaffTiers = () => request('/home/staff-tiers', fallback.staffTiers);
export const getJobs = () => request('/jobs', fallback.jobs);
export const getTestimonials = () => request('/home/testimonials', fallback.testimonials);
export const getServices = () => request('/home/services', fallback.services);
export const getIndustries = () => request('/home/industries', fallback.industries);
export const getStats = () => request('/home/stats', fallback.stats);
