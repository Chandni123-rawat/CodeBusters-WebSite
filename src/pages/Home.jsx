import { Link } from 'react-router-dom';
import cbLogo from '../assets/cb-logo.png';


const upcomingEvents = [
  {
    id: 1,
    title: "HackNight: Build in 12 Hours",
    description: "A short-format hackathon for teams of 2–4, open to all years.",
    date: "Sep 20 · 6 PM",
    location: "Seminar Hall B"
  },
  {
    id: 2,
    title: "Git & GitHub for Beginners",
    description: "Branching, PRs, and undoing your mistakes without crying.",
    date: "Sep 24 · 5 PM",
    location: "Lab 4, CS Block"
  },
  {
    id: 3,
    title: "CodeBusters Monthly CP Contest",
    description: "Rated round, DSA-heavy, open registration closes Sunday.",
    date: "Sep 28 · 10 AM",
    location: "Online"
  }
];


function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      

      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#2E5CFF]/15 rounded-full blur-[120px] pointer-events-none -top-20"></div>

        <div className="relative mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#2E5CFF] to-[#141F3B] border border-[#6E93FF]/40 flex items-center justify-center animate-badge-collision shadow-[0_0_35px_rgba(46,92,255,0.4)] relative overflow-hidden">
            {/* 1. Letters that slide, collide, and dissolve */}
            <div className="absolute inset-0 flex items-center justify-center animate-letters-container select-none">
              <span className="font-sans font-black text-5xl sm:text-6xl text-white inline-block animate-letter-c">
                C
              </span>
              <span className="font-sans font-black text-5xl sm:text-6xl text-[#6E93FF] inline-block animate-letter-b">
                B
              </span>
            </div>

            {/* 2. Official CodeBusters Logo that morphs in from the collision flash */}
            <img 
              src={cbLogo} 
              alt="CodeBusters Official Logo" 
              className="w-full h-full object-cover rounded-full animate-logo-morph relative z-10"
            />
          </div>
        </div>

        <div className="animate-fade-delayed">
          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-white mb-3">
            CodeBusters
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#9AA6C4] tracking-widest uppercase mb-10">
            build · ship · conquer
          </p>

          <a 
            href="#main-content"
            className="inline-flex flex-col items-center gap-2 text-xs font-mono text-[#5B6685] hover:text-[#6E93FF] transition animate-bounce cursor-pointer"
          >
            <span>scroll to enter</span>
            <span>↓</span>
          </a>
        </div>
      </section>

      <div id="main-content"></div>


      <div className="pt-16">
        <span className="font-mono text-xs text-[#6E93FF] tracking-wider uppercase bg-[#2E5CFF]/10 border border-[#2E5CFF]/30 px-3 py-1 rounded-full">
          discover → learn → participate → build → showcase
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#F3F5FB] mt-6 max-w-3xl leading-[1.1]">
          Where students stop watching tech happen, and start shipping it.
        </h1>
        <p className="text-[#9AA6C4] text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
          CodeBusters is a full-stack technical community — events, workshops, learning
          roadmaps, and a place to put your projects in front of people who'll actually use them.
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link
            to="/about"
            className="font-mono text-sm font-semibold px-6 py-3 rounded-lg bg-[#2E5CFF] text-white shadow-[0_8px_24px_-6px_rgba(46,92,255,0.5)] hover:bg-blue-600 transition"
          >
            About us
          </Link>
          <a
            href="#join"
            className="font-mono text-sm font-semibold px-6 py-3 rounded-lg border border-[#6E93FF]/35 text-[#F3F5FB] hover:bg-white/5 transition"
          >
            Get involved with us
          </a>
        </div>
      </div>


      <section className="mt-24 border-t border-white/10 pt-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-xs text-[#6E93FF] tracking-wider uppercase block mb-2">
              what's next
            </span>
            <h2 className="text-3xl font-bold text-white font-sans">
              Upcoming events
            </h2>
          </div>
          <Link to="/about" className="text-sm font-medium text-[#9AA6C4] hover:text-white transition">
            See all events →
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-[#0D1526] border border-white/10 rounded-xl p-6 hover:border-[#6E93FF]/40 hover:-translate-y-1 transition duration-200"
            >
              <div className="h-32 rounded-lg bg-gradient-to-br from-[#111B33] to-[#141F3B] border border-dashed border-white/10 flex items-center justify-center font-mono text-xs text-[#5B6685] mb-5">
                event_banner.png
              </div>

              <h4 className="text-lg font-bold text-white font-sans">
                {event.title}
              </h4>
              <p className="text-sm text-[#9AA6C4] mt-2 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5 font-mono text-xs text-[#5B6685]">
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}


export default Home;