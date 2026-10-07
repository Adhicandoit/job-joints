// Static fallback data for the home page. Shapes mirror what a real API should return,
// and icons are referenced by key (see lib/icons.js) so the data stays JSON-serialisable.

export const hero = {
  headline: 'The Premium Network for Elite Medical Professionals',
  subheadline: 'Connecting elite medical talent with top hospitals — transparent credentialing, effortless placement.',
  openings: '14k+',
  placements: [
    { id: 1, name: 'Dr. Aris Thorne', specialty: 'MD Cardiology' },
    { id: 2, name: 'Dr. Sarah Jenkins', specialty: 'MS Gynecology' },
    { id: 3, name: 'Dr. Ritesh Kumar', specialty: 'DM Neurology' },
  ],
};

export const ecosystems = [
  { id: 'doctors', icon: 'stethoscope', title: 'For Doctors', audience: 'Job Seekers', cta: 'Explore Placements', to: '/jobs',
    description: 'Full-time, research residency, and premium locum tenens positions at world-renowned networks.' },
  { id: 'institutions', icon: 'building', title: 'For Institutions', audience: 'Employers', cta: 'Source Talent', to: '/hospitals',
    description: 'Automated vetting to filter the top 2% of medical talent with institutional background verification.' },
  { id: 'credentialing', icon: 'shield', title: 'Instant Credentialing', audience: 'Both', cta: 'Learn How It Works', to: '/credentialing',
    description: 'Transparent verification tracking board certifications, clinical hours, and malpractice insurance.' },
];

export const filters = {
  categories: ['Doctor / Surgeon', 'Nurse', 'Professor / Academic', 'Administration / Management', 'Human Resource', 'Hospital Technician'],
  industries: ['Hospital / Clinics', 'Health Insurance', 'Healthcare Enterprises', 'NGO / Social Services', 'Industrial Health', 'Recruitment Agency', 'Laboratory / Diagnostics'],
  locations: ['Ahmedabad, Gujarat', 'Hyderabad, Telangana', 'Bengaluru, Karnataka', 'Mumbai, Maharashtra'],
};

export const staffTiers = [
  { id: 'super', label: 'Super Specialist Doctors', qualification: 'DM / MCh' },
  { id: 'specialist', label: 'Specialist Doctors', qualification: 'MD / MS' },
  { id: 'resident', label: 'Resident Doctors', qualification: 'DNB / RMO' },
  { id: 'nursing', label: 'Nursing', qualification: 'ANM / GNM / BSc / MSc' },
  { id: 'paramedical', label: 'Paramedical Staff', qualification: null },
  { id: 'auxiliary', label: 'Auxiliary Staff', qualification: null },
  { id: 'management', label: 'Hospital Management Staff', qualification: null },
];

export const jobs = [
  { id: 'j1', title: 'CTVS Surgeon MCH DrNB Consultant', city: 'Mangalore', state: 'Karnataka', type: 'Consultant', category: 'Doctor / Surgeon', industry: 'Hospital / Clinics' },
  { id: 'j2', title: 'CTVS Surgeon MCH DrNB Consultant', city: 'Salem', state: 'Tamil Nadu', type: 'Consultant', category: 'Doctor / Surgeon', industry: 'Hospital / Clinics' },
  { id: 'j3', title: 'Interventional Cardiologist DM', city: 'Hyderabad', state: 'Telangana', type: 'Full time', category: 'Doctor / Surgeon', industry: 'Hospital / Clinics' },
  { id: 'j4', title: 'Critical Care Nurse (ICU) BSc', city: 'Mumbai', state: 'Maharashtra', type: 'Full time', category: 'Nurse', industry: 'Hospital / Clinics' },
  { id: 'j5', title: 'Assistant Professor — Anatomy MD', city: 'Ahmedabad', state: 'Gujarat', type: 'Full time', category: 'Professor / Academic', industry: 'Hospital / Clinics' },
  { id: 'j6', title: 'Radiology Technician', city: 'Bengaluru', state: 'Karnataka', type: 'Full time', category: 'Hospital Technician', industry: 'Laboratory / Diagnostics' },
];

export const testimonials = [
  { id: 't1', quote: 'We secured two board-certified interventional cardiologists within 48 hours.', name: 'Dr. Ajay Varma', role: 'Chief Medical Officer', org: 'Delhi' },
  { id: 't2', quote: 'The credentialing dashboard gives us instant, transparent vetting.', name: 'Dr. Sushmita Biswal', role: 'Dean', org: 'Amity Institute of Health Sciences' },
  { id: 't3', quote: 'A dynamic portal and a mutually beneficial collaboration for medical universities.', name: 'Neeraj Agrawal', role: 'CSO', org: 'GLA University, Mathura' },
  { id: 't4', quote: 'They mapped highly qualified critical care nursing staff within days.', name: 'Dr. Kiran Shah', role: 'Director', org: 'Jupiter Hospitals' },
];

export const services = [
  { id: 's1', icon: 'graduation', title: 'Advanced Clinical Training', description: 'Certified hands-on training frameworks for executive practice careers.' },
  { id: 's2', icon: 'handshake', title: 'Elite Staff Sourcing', description: 'Recruit top-tier verified medical professionals with background matrices.' },
  { id: 's3', icon: 'target', title: 'Board Interview Mastery', description: 'Master hospital group interviews using AI simulator engines.' },
  { id: 's4', icon: 'zap', title: 'Streamlined Recruitment', description: 'Simplify hospital vacancy searches and clear logistical boundaries.' },
];

export const industries = [
  { id: 'super', icon: 'bed', title: 'Super Specialist Doctors', sub: 'DM / MCh', count: 23155 },
  { id: 'specialist', icon: 'pill', title: 'Specialist Doctors', sub: 'MD / MS', count: 11047 },
  { id: 'nursing', icon: 'hospital', title: 'Nursing', sub: 'ANM / GNM / BSc / MSc', count: 2770 },
  { id: 'paramedical', icon: 'flask', title: 'Paramedical Staff', sub: null, count: 2360 },
  { id: 'auxiliary', icon: 'scan', title: 'Auxiliary Staff', sub: null, count: 83 },
  { id: 'management', icon: 'file', title: 'Hospital Management Staff', sub: null, count: 42 },
];

export const stats = [
  { id: 'jobs', label: 'Jobs Posted', value: 1562 },
  { id: 'companies', label: 'Companies', value: 240 },
];
