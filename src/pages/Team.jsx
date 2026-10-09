import { useState } from 'react';
import CoverflowSlider from '../components/CoverflowSlider';

// Faculty Mentors Data
const facultyMentors = [
  {
    id: 'piyush-vashistha',
    name: 'Mr. Piyush Vashistha',
    role: 'Faculty Mentor',
    department: 'CEA DEPARTMENT',
    details: 'Guiding CodeBusters vision, fostering engineering excellence, and nurturing student initiatives across technical domains.',
    image: '/Piyush_Vashistha.png',
    tag: 'Mentor'
  },
  {
    id: 'rishab-agarwal',
    name: 'Mr. Rishab Agarwal',
    role: 'Faculty Co-Mentor',
    department: 'Technical Trainer • CEA DEPARTMENT',
    details: 'Providing technical guidance, hands-on training, industry readiness mentoring, and architectural leadership.',
    image: '/Rishab.png',
    tag: 'Co-Mentor'
  }
];

// Core Heads / Leadership Data
const coreHeads = [
  {
    id: 'suryansh-saxena',
    name: 'Suryansh Saxena',
    role: 'President 🙂',
    department: 'Leadership & Strategy',
    details: 'Leading the club direction, strategic partnerships, and fostering a community where builders ship impactful tech.',
    image: '/Suryansh_Saxena.jpg',
    tag: 'Executive'
  },
  {
    id: 'kartik-gaur',
    name: 'Kartik Gaur',
    role: 'Vice President',
    department: 'Club Operations & Management',
    details: 'Coordinating cross-team synchronization, long-term roadmaps, and high-impact club initiatives.',
    image: '/Kartik_Gaur.jpg',
    tag: 'Executive'
  },
  {
    id: 'ishita-goyal',
    name: 'Ishita Goyal',
    role: 'General Secretary',
    department: 'Administration & Governance',
    details: 'Managing club administration, member communications, governance, and institutional liaison.',
    image: '/Ishita_Goyal.jpg',
    tag: 'Secretariat'
  },
  {
    id: 'aditi-agarwal',
    name: 'Aditi Agarwal',
    role: 'Technical Head',
    department: 'Technical & Engineering',
    details: 'Overseeing club technical architecture, technical challenges, and workshop curriculum.',
    image: '/Aditi_Agarwal.jpg',
    tag: 'Tech Lead'
  },
  {
    id: 'rudraksh-mishra',
    name: 'Rudraksh Mishra',
    role: 'Technical Head',
    department: 'Technical & Engineering',
    details: 'Leading tech initiatives, hackathon technical infrastructure, and open-source contributions.',
    image: '/RUDRAKSH_MISHRA.jpg',
    tag: 'Tech Lead'
  },
  {
    id: 'meenakshi-bhatt',
    name: 'Meenakshi Bhatt',
    role: 'Event Head',
    department: 'Events & Experiences',
    details: 'Directing flagship hackathons, technical speaker sessions, and experiential club events.',
    image: '/Meenakshi.jpg',
    tag: 'Events'
  },
  {
    id: 'sahil-chaudhary',
    name: 'Sahil Chaudhary',
    role: 'Development Team Head',
    department: 'Web & Software Engineering',
    details: 'Leading web platforms, full-stack product development, code reviews, and project pipelines.',
    image: '/Sahil_chaudhary.jpg',
    tag: 'Dev Head'
  },
  {
    id: 'shreya-seth',
    name: 'Shreya Seth',
    role: 'Design Head',
    department: 'UI/UX & Visual Identity',
    details: 'Crafting brand aesthetics, visual design systems, event banners, and digital experiences.',
    image: '/Shreya_Seth.jpg',
    tag: 'Design'
  },
  {
    id: 'nakul-saraswat',
    name: 'Nakul Saraswat',
    role: 'PR Head',
    department: 'Public Relations & Outreach',
    details: 'Managing outreach campaigns, student relations, university networks, and sponsorship liaisons.',
    image: '/Nakul_Saraswat.jpg',
    tag: 'PR'
  },
  {
    id: 'chandini-rawat',
    name: 'Chandini Rawat',
    role: 'Content Team Head',
    department: 'Content Strategy & Editorial',
    details: 'Guiding the storytelling, editorial voice, documentation, and technical newsletters of CodeBusters.',
    image: '/Chandani_Rawat.jpg',
    tag: 'Content'
  },
  {
    id: 'prakhar-kulshreshtha',
    name: 'Prakhar Kulshreshtha',
    role: 'Data Head',
    department: 'Data & Analytics',
    details: 'Spearheading data science initiatives, analytics workshops, and intelligent solutions.',
    image: '/PRAKHAR_KULSHRESHTHA.png',
    tag: 'Data'
  },
  {
    id: 'akash-gaurav',
    name: 'Akash Gaurav',
    role: 'Executive Head',
    department: 'Execution & Planning',
    details: 'Driving operational excellence, sprint execution, and inter-departmental workflows.',
    image: '/AKASH_GAURAV.jpg',
    tag: 'Executive'
  },
  {
    id: 'shivang-saxena',
    name: 'Shivang Saxena',
    role: 'Finance Lead',
    department: 'Finance & Resource Management',
    details: 'Managing club budget, event finances, logistical planning, and financial accountability.',
    image: '/Shivang_saxena.jpg',
    tag: 'Finance'
  },
  {
    id: 'shivangi-pandey',
    name: 'Shivangi Pandey',
    role: 'PR Lead',
    department: 'Public Relations & Media',
    details: 'Driving promotional strategies, campus engagement, and community collaborations.',
    image: '/Shivangi_pandey.jpg',
    tag: 'PR'
  }
];

// Department Associates Data
const associatesData = [
  // Data Team
  { name: 'Yashvendra Kumar', team: 'Data Team', role: 'Data Associate', icon: '📊' },
  { name: 'Shravya Pandey', team: 'Data Team', role: 'Data Associate', icon: '📊' },

  // Development Team
  { name: 'Savita Chaudhary', team: 'Development Team', role: 'Frontend & Full-stack Dev', icon: '⚡' },
  { name: 'Aditi Sharma', team: 'Development Team', role: 'Web Developer', icon: '⚡' },
  { name: 'Sweety', team: 'Development Team', role: 'Software Developer', icon: '⚡' },
  { name: 'Naitik Goyal', team: 'Development Team', role: 'Full-Stack Developer', icon: '⚡' },

  // Content Team
  { name: 'Vanshika', team: 'Content Team', role: 'Content Strategist & Writer', icon: '✍️' },
  { name: 'Vimal', team: 'Content Team', role: 'Technical Writer', icon: '✍️' },

  // Event / PR Team
  { name: 'Amrit Mishra', team: 'Event / PR Team', role: 'Event Operations Associate', icon: '🎯🥇' },
  { name: 'Rachika Yadav', team: 'Event / PR Team', role: 'PR & Outreach Associate', icon: '🎯' },
  { name: 'Anshika Agarwal', team: 'Event / PR Team', role: 'Event Management Associate', icon: '🎯' },
  { name: 'Khushi Saini', team: 'Event / PR Team', role: 'Public Relations Associate', icon: '🎯' },
  { name: 'Reetika Chaudhary', team: 'Event / PR Team', role: 'Event Coordinator', icon: '🎯' },
  { name: 'Aadhya Kulshrestha', team: 'Event / PR Team', role: 'PR & Media Associate', icon: '🎯' },
  { name: 'Vaibhav Rathay', team: 'Event / PR Team', role: 'Logistics & Event Associate', icon: '🎯' },
  { name: 'Naitik Goyal', team: 'Event / PR Team', role: 'Outreach Associate', icon: '🎯' },

  // Design Team
  { name: 'Chetan Sharma', team: 'Design Team', role: 'Visual & Graphic Designer', icon: '🎨' },
];

const teamCategories = [
  'All Associates',
  'Development Team',
  'Data Team',
  'Content Team',
  'Event / PR Team',
  'Design Team'
];

function Team() {
  const [selectedCategory, setSelectedCategory] = useState('All Associates');

  const filteredAssociates = selectedCategory === 'All Associates'
    ? associatesData
    : associatesData.filter(a => a.team === selectedCategory);

  return (
    <div className="min-h-screen text-[#F3F5FB] pb-24">
      {/* Hero Banner Header */}
      <section className="relative pt-12 pb-8 px-6 text-center max-w-5xl mx-auto">
        <span className="font-mono text-xs text-[#6E93FF] tracking-wider uppercase bg-[#2E5CFF]/10 border border-[#2E5CFF]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
          The People Behind CodeBusters
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F5FB] tracking-tight leading-tight">
          Team CodeBusters
        </h1>

        <p className="font-sans text-base sm:text-lg text-[#9AA6C4] mt-5 max-w-2xl mx-auto leading-relaxed">
          The visionaries, mentors, student leaders, and engineers working behind the scenes
          to foster innovation, conduct premier hackathons, and build the future.
        </p>
      </section>

      {/* SECTION 1: FACULTY MENTORS (Cover Flow 3D Slider) */}
      <section className="mt-8 border-t border-b border-white/5 bg-[#060A15]/60 backdrop-blur-sm">
        <CoverflowSlider 
          members={facultyMentors}
          title="Meet Our Faculty Mentors"
          subtitle="Meet The Faculty Behind The Vision"
        />
      </section>

      {/* SECTION 2: CORE HEADS & LEADERSHIP (Cover Flow 3D Slider) */}
      <section className="mt-16 border-b border-white/5 bg-[#080D1D]/40 backdrop-blur-sm">
        <CoverflowSlider 
          members={coreHeads}
          title="Meet Our Core Leadership"
          subtitle="Meet The Minds Behind Innovation & Leadership"
        />
      </section>

      {/* SECTION 3: DEPARTMENT ASSOCIATES */}
      <section className="max-w-7xl mx-auto px-6 pt-20">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-[#F3F5FB] font-sans">
            Our Associates
          </h2>
          <div className="h-0.5 w-16 bg-[#2E5CFF] mt-2 mb-3 shadow-[0_0_10px_#2E5CFF]" />
          <p className="text-xs sm:text-sm font-mono tracking-wider text-[#9AA6C4] uppercase">
            The Powerhouse Driving Every CodeBusters Initiative
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {teamCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2E5CFF] text-white shadow-[0_0_18px_rgba(46,92,255,0.5)] border border-[#38BDF8]'
                  : 'bg-[#0D1526] text-[#9AA6C4] hover:text-white hover:bg-[#141F3B] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Associates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAssociates.map((assoc, idx) => (
            <div
              key={`${assoc.name}-${idx}`}
              className="group relative bg-[#0D1526]/80 backdrop-blur border border-white/10 hover:border-[#38BDF8]/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.2)] flex flex-col justify-between"
            >
              {/* Top Row: Placeholder Portrait Area */}
              <div className="w-full h-44 rounded-xl bg-gradient-to-b from-[#141F3B] via-[#0E1528] to-[#070B16] border border-white/5 relative overflow-hidden flex flex-col items-center justify-center mb-4 group-hover:border-[#38BDF8]/30 transition-colors">
                {/* Initials & Silhouette Avatar */}
                <div className="w-16 h-16 rounded-full bg-[#1A2644] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <span className="font-sans text-xl font-bold text-white/80">
                    {assoc.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('')}
                  </span>
                </div>

                {/* Photo space indicator */}
                <div className="absolute bottom-3 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#060A15]/80 border border-white/10 text-[9px] font-mono text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  <span>PHOTO SLOT</span>
                </div>

                {/* Team Tag */}
                <div className="absolute top-2.5 right-2.5">
                  <span className="text-sm">{assoc.icon}</span>
                </div>
              </div>

              {/* Associate Info */}
              <div>
                <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] mb-1">
                  {assoc.team}
                </span>

                <h3 className="font-sans text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors uppercase leading-snug">
                  {assoc.name}
                </h3>

                <p className="text-xs font-sans text-[#9AA6C4] mt-1">
                  {assoc.role}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#5B6685]">
                <span>CodeBusters Member</span>
                <span className="text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Team;
