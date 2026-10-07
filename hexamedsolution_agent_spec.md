# Hexamedsolution.com — AI Agent Spec
**URL:** https://hexamedsolution.com/  
**Document Type:** Section-wise AI Agent Understanding Spec  
**Generated:** 2026-10-01  
**Purpose:** Enable AI agents to understand, navigate, and interact with this medical staffing portal section by section.

---

## 1. Website Identity & Domain Context

| Field | Value |
|-------|-------|
| **Brand Name** | Hexamedsolution (also "Hexamed Hub", "Medico Hub") |
| **Legal Entity** | Hexamedsolution Private Limited |
| **Domain** | hexamedsolution.com |
| **Category** | Healthcare Recruitment / Medical Staffing Portal |
| **Geography** | India (primary markets: Delhi, Mumbai, Bengaluru, Hyderabad, Ahmedabad, Noida HQ) |
| **Target Users** | Doctors, Surgeons, Nurses, Paramedical Staff, Hospitals, Medical Colleges |

**Agent Context:** This is a niche B2B/B2C recruitment marketplace. Any agent interacting with it must distinguish between two user modes — **Job Seeker** (medical professionals) and **Institution/Employer** (hospitals, medical colleges, clinics).

---

## 2. Navigation Structure

### 2.1 Primary Navigation Bar
```
Home | Find Jobs | For Hospitals | About Us | Contact Us
```
**Auth Controls:**
- `Employee Login` — existing registered users
- `Login / Register` — dual-purpose entry point

**Agent Notes:**
- "Find Jobs" leads to job search/listing
- "For Hospitals" is the employer/recruiter portal entry
- No direct "Employer Login" vs "Candidate Login" split at nav level; routing happens post-login
- Agent should detect user intent first (job seeker vs employer) before navigating

---

## 3. Hero Section

**Headline:** *"The Premium Network for Elite Medical Professionals"*  
**Sub-headline:** *"Connecting Elite Medical Talents With Top Hospitals"*  
**Value Proposition:** A curated hiring ecosystem exclusively for Doctors, Surgeons, and Premium Nursing staff. Emphasizes "glass-transparent credentialing" and "effortless placement."

### 3.1 Social Proof Ticker (Verified Placements)
| Placement | Specialty |
|-----------|-----------|
| Dr. Aris Thorne | MD Cardiology |
| Dr. Sarah Jenkins | MS Gynecology |
| Dr. Ritesh Kumar | DM Neurology |

**Agent Notes:**
- This section signals trust — verified real placements
- "14k+ Active Openings" is the headline metric for scale
- The hero CTA is `Search Portals` — agent should treat this as the primary discovery entry point

---

## 4. Tailored Ecosystems Section

**Section Title:** *"Tailored Ecosystems — Features engineered to make healthcare workforce logistics seamless, elegant, and secure."*

### 4.1 Feature Cards

| Card | Icon | Audience | Description | CTA |
|------|------|----------|-------------|-----|
| For Doctors | 🩺 | Job Seekers | Full-time, research residency, and premium locum tenens positions at world-renowned networks | `Explore Placements →` |
| For Institutions | 🏢 | Employers | Automated vetting to filter top 2% medical talent with institutional background verification | `Source Talent →` |
| Instant Credentialing | ✦ | Both | Transparent verification tracking board certifications, clinical hours, and malpractice insurance | `Learn Architecture →` |

**Agent Notes:**
- "Top 2%" is a key differentiator claim — useful for employer-facing agent messaging
- Credentialing is a primary feature, not secondary — agent workflows involving document verification should route here
- Each card links to a deeper sub-section; agent must follow respective CTAs per user type

---

## 5. Job Search Widget

**Section Label:** *"Drop Resume & Get Your Desired Job — Find Jobs, Employment & Career Opportunities"*

### 5.1 Search Input Fields
| Field | Placeholder | Input Type |
|-------|-------------|------------|
| What | e.g. Job Title | Text search |
| Where | e.g. City Name | Location search |

**CTA:** `🔍 Find Jobs`

### 5.2 Filter Panel (Left Sidebar / Accordion)

#### Categories
- Doctor / Surgeon
- Nurse
- Professor / Academic
- Administration / Management
- Human Resource
- Hospital Technician

#### Industry
- Hospital / Clinics
- Health Insurance
- Healthcare Enterprises
- NGO / Social Services
- Industrial Health
- Recruitment Agency
- Laboratory / Diagnostics

#### Locations
- Ahmedabad, Gujarat
- Hyderabad, Telangana
- Bengaluru, Karnataka
- Mumbai, Maharashtra

**Agent Notes:**
- Filter panels use accordion UI (`▲` toggle indicator)
- Both Category and Location filters support internal search (`🔍`)
- Agent must pass `what` (role/title) + `where` (city) as minimum required search params
- Industry and Category are secondary filters applied post-search or pre-search for refinement

---

## 6. About / Company Description Block

**Brand Reference:** Medico Hub Healthcare Recruitment (operational brand name used in copy)

**Positioning Statement:** *"Privately held, very popular in Hospitals/Medical Colleges, Nursing Staff industry. Works with a nation contributing to society."*

### 6.1 Staff Categories Placed

| Tier | Qualification |
|------|--------------|
| Super Specialist Doctors | DM / MCh |
| Specialist Doctors | MD / MS |
| Resident Doctors | DNB / RMO |
| Nursing | ANM / GNM / BSc / MSc |
| Paramedical Staff | — |
| Auxiliary Staff | — |
| Hospital Management Staff | — |

**Agent Notes:**
- When classifying a candidate or job post, use this tier structure as the taxonomy
- Degree abbreviations are standard Indian medical qualification codes — agent should recognize: DM (Doctorate of Medicine), MCh (Magister Chirurgiae), MD (Doctor of Medicine), MS (Master of Surgery), DNB (Diplomate of National Board), RMO (Resident Medical Officer)

---

## 7. Featured Jobs Section

**Section Title:** *"Featured Jobs — Explore immediate job openings available at partner hospitals and clinics."*  
**CTA:** `View All Jobs`

### 7.1 Sample Job Cards (Live at Scrape Time)

| Job Title | Location | Job Type |
|-----------|----------|----------|
| Shirting-Suiting Salesman | Gorakhpur, Uttar Pradesh | Full time |
| CTVS Surgeon MCH DrNB Consultant | Mangalore, Karnataka | Consultant |
| CTVS Surgeon MCH DrNB Consultant | Salem, Tamil Nadu | Consultant |

**Agent Notes:**
- Job cards contain: Title, Location (City + State), Employment Type, and a `More Details` CTA
- Employment types observed: `Full time`, `Consultant` — agent should handle both
- Note: "Shirting-Suiting Salesman" appears to be a data anomaly (non-medical listing) — agent should flag or filter non-healthcare roles in QA workflows
- CTVS = Cardiothoracic and Vascular Surgery — highly specialized surgical role

---

## 8. Testimonials Section

**Section Title:** *"Elite Testimonials — Real feedback from global healthcare institutions and board-certified practitioners"*  
**UI:** Carousel with `←` / `→` navigation

### 8.1 Testimonial Data

| Quote Summary | Name | Title / Organization |
|---------------|------|---------------------|
| Secured two board-certified interventional cardiologists within 48 hours | Dr. Ajay Varma | Chief Medical Officer, Delhi |
| Credentialing data dashboard provides instant, transparent vetting | Dr. Sushmita Biswal | Dean, Amity Institute of Health Sciences |
| Dynamic portal with mutually beneficial collaboration for medical universities | Neeraj Agrawal | CSO, GLA University, Mathura |
| Mapped highly qualified critical care nursing staff within days | Dr. Kiran Shah | Director, Jupiter Hospitals |

**Agent Notes:**
- Key performance claims: 48-hour placement, instant credentialing, days-scale nursing staffing
- Testimonials are from: CMOs, Deans, CSOs, Hospital Directors — targeting decision-makers
- Agent generating pitch or summary content should leverage these as proof points

---

## 9. HEXAMED HUB — Services Section

**Tagline:** *"Where medical innovations meet placement logistics."*

### 9.1 Service Offerings

| Service | Icon | Description |
|---------|------|-------------|
| Advanced Clinical Training | 🎓 | Certified hands-on training frameworks for executive practice careers |
| Elite Staff Sourcing | 🤝 | Recruit top-tier verified medical professionals with background matrices |
| Board Interview Mastery | 🎯 | Master hospital group interviews using AI simulator engines |
| Streamlined Recruitment | ⚡ | Simplify hospital vacancy searches and clear logistical boundaries |

**CTA:** `GET STARTED NOW`

**Agent Notes:**
- "AI simulator engines" for interview prep is a notable product feature — agent can reference this for candidate onboarding flows
- This section targets both candidates (training, interview) and institutions (sourcing, recruitment)
- `GET STARTED NOW` should be treated as the primary conversion CTA for this section

---

## 10. Jobs by Industry Section

**Section Title:** *"Explore jobs by Industry — Explore all the Industries in Healthcare Fraternity."*

### 10.1 Industry Job Counts

| Category | Icon | Job Count |
|----------|------|-----------|
| Super Specialists Doctors (DM/MCh) | 🛏️ | 23,155 |
| Specialists Doctors (MD/MS) | 💊 | 11,047 |
| Nursing (ANM/GNM/BSc/MSc) | 🏛️ | 2,770 |
| Paramedical Staff | 🧪 | 2,360 |
| Auxiliary Staff | 🩻 | 83 |
| Hospital Management Staff | 📄 | 42 |

**Agent Notes:**
- Super Specialists have the highest listing volume (23k+) — likely primary revenue segment
- Hospital Management has very low listings (42) — niche or early-stage offering
- Total approximate job listings: ~39,457 (vs. "14k+ Active Openings" in hero — discrepancy may reflect different counting logic or stale copy)

---

## 11. Stats / Trust Signals Section

**Tagline:** *"Building Stronger Healthcare Teams Every Day. Connecting skilled medical professionals with leading hospitals through a smarter hiring experience."*

| Metric | Value |
|--------|-------|
| Jobs Posted | 1,562 |
| Companies | 240 |

**Agent Notes:**
- "1,562 Jobs Posted" vs "14k+ Active Openings" in hero — significant inconsistency; agent should not use both as authoritative simultaneously
- 240 companies indicates employer network size — useful for institutional sales agents

---

## 12. Footer Section

### 12.1 Industry Verticals Listed
- Medical College
- Hospitals
- Dental
- Nursing
- IT & Diagnostics

### 12.2 Quick Links
- Home Base
- About Us
- Insights Blog
- Doctor Recruitment
- Doctor Jobs In India

### 12.3 Contact Information
| Channel | Value |
|---------|-------|
| Address | Sector-4, Noida, Uttar Pradesh, India - 201301 |
| Phone | +91-7982648017 |
| Email | doctors@hexamedsolution.com |

### 12.4 Legal
- © 2024–2026, Hexamedsolution Private Limited
- Privacy Policy
- Terms & Conditions

**Agent Notes:**
- Primary contact email `doctors@hexamedsolution.com` — agent communication workflows should use this for healthcare professional outreach
- HQ is Noida, UP — relevant for jurisdiction, compliance, and routing Indian regulatory queries
- "IT & Diagnostics" in verticals suggests tech-adjacent healthcare roles may be in scope

---

## 13. Agent Interaction Map

### 13.1 User Intent → Routing Table

| User Intent | Section to Invoke | Key CTA |
|-------------|-------------------|---------|
| Find a job as a doctor/nurse | Hero → Job Search Widget | `Find Jobs` |
| Hire medical staff for hospital | Tailored Ecosystems → For Institutions | `Source Talent →` |
| Verify credentials of a candidate | Tailored Ecosystems → Instant Credentialing | `Learn Architecture →` |
| Prepare for a hospital interview | HEXAMED HUB Services | `GET STARTED NOW` |
| Browse open roles by specialty | Jobs by Industry | Category cards |
| Contact the company | Footer | Phone / Email |
| Register / Login | Nav bar | `Login / Register` |

### 13.2 Data Anomalies & Agent Flags

| Anomaly | Description | Recommended Action |
|---------|-------------|-------------------|
| Non-medical job listing | "Shirting-Suiting Salesman" appears in Featured Jobs | Flag for QA; exclude from medical-role recommendation flows |
| Job count discrepancy | Hero says "14k+ Active Openings"; Stats block says "1,562 Jobs Posted"; Industry total ~39k | Use page-level figures only in context; do not cross-compare without source validation |
| "Global" claim vs India focus | Testimonials say "global healthcare institutions" but all entities are India-based | Treat as India-only platform unless explicitly expanded |

### 13.3 Taxonomy Reference (Indian Medical Qualifications)

| Abbreviation | Full Form | Tier |
|-------------|-----------|------|
| DM | Doctorate of Medicine | Super Specialist |
| MCh | Magister Chirurgiae (Master of Surgery) | Super Specialist |
| MD | Doctor of Medicine | Specialist |
| MS | Master of Surgery | Specialist |
| DNB | Diplomate of National Board | Resident |
| RMO | Resident Medical Officer | Resident |
| BSc Nursing / MSc Nursing | Bachelor/Master of Science in Nursing | Nursing |
| GNM | General Nursing and Midwifery | Nursing |
| ANM | Auxiliary Nursing Midwifery | Nursing |

---

## 14. Summary for AI Agent Initialization

```yaml
platform: hexamedsolution.com
type: healthcare_recruitment_portal
region: India
primary_users:
  - job_seekers: [doctors, surgeons, nurses, paramedical_staff]
  - employers: [hospitals, medical_colleges, clinics, diagnostics_labs]
key_features:
  - job_search: true
  - credential_verification: true
  - interview_preparation: true
  - staff_sourcing: true
contact:
  phone: "+91-7982648017"
  email: "doctors@hexamedsolution.com"
  address: "Sector-4, Noida, UP, India - 201301"
data_flags:
  - job_count_inconsistency: true
  - non_medical_listing_detected: true
auth_flows:
  - login_register: combined
  - employee_login: separate
nav_sections:
  - home
  - find_jobs
  - for_hospitals
  - about_us
  - contact_us
```

---

*End of Spec — Hexamedsolution.com AI Agent Understanding Document*
