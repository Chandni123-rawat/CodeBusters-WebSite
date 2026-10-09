import { useState } from 'react';

const sessionsData = [
  {
    id: 1,
    type: 'event',
    badge: 'Flagship Summit',
    date: 'November 02, 2026 • 10:00 AM',
    location: 'Main University Auditorium & Online',
    title: 'Annual Tech Innovation Summit',
    description: 'Meet founders, developers, and industry experts. Experience live keynote talks, tech showcases, and open networking with top engineering leaders.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    seats: '120 Seats Left',
    btnText: 'Book Free Pass →'
  },
  {
    id: 2,
    type: 'event',
    badge: 'Community Sprint',
    date: 'November 15, 2026 • 6:00 PM',
    location: 'Innovation Lab, CS Block',
    title: 'Community Demo & Networking Night',
    description: 'Present your side projects, receive constructive feedback from peers, and connect with fellow student creators across web, AI, and systems engineering.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    seats: '45 Seats Left',
    btnText: 'RSVP for Event →'
  },
  {
    id: 3,
    type: 'workshop',
    badge: 'Flagship AI Workshop',
    date: 'November 22, 2026 • 2:00 PM',
    location: 'Advanced AI Lab, CS Block',
    title: 'BuildCamp: 4-Hour Hands-On AI Workshop',
    description: 'Organized by CEA & CodeBusters Club exclusively for B.Tech CSE 2nd Year (AI & Data Science Track). Architect and deploy real neural network pipelines under faculty and builder mentorship.',
    image: '/buildcamp.png',
    seats: '60 Seats Left',
    btnText: 'Register for Workshop →'
  },
  {
    id: 4,
    type: 'workshop',
    badge: 'Hands-on Lab',
    date: 'December 05, 2026 • 3 Hours',
    location: 'Lab 4, CS Block',
    title: 'Hands-on Web Development Lab',
    description: 'Learn modern React, Tailwind CSS, and full-stack integration step-by-step by building interactive live projects from scratch.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    seats: '35 Seats Left',
    btnText: 'Join Workshop →'
  },
  {
    id: 5,
    type: 'workshop',
    badge: 'Design System',
    date: 'December 12, 2026 • 2.5 Hours',
    location: 'Design Studio & Virtual Stream',
    title: 'UI/UX Design Systems in Figma',
    description: 'Masterclass on architecting scalable design tokens, component libraries, typography hierarchy, and auto-layout systems ready for engineering handoff.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    seats: '50 Seats Left',
    btnText: 'Join Workshop →'
  },
  {
    id: 6,
    type: 'event',
    badge: 'Hackathon',
    date: 'December 20, 2026 • 6:00 PM',
    location: 'Seminar Hall B',
    title: 'HackNight: Build in 12 Hours',
    description: 'A fast-paced overnight hackathon for teams of 2–4 open to all years. Free fuel, pizza, mentorship, and cloud credits with prizes for top builds.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    seats: '25 Teams Left',
    btnText: 'Register Team →'
  }
];

function Events() {
  const [filter, setFilter] = useState('all');
  const [selectedSession, setSelectedSession] = useState(null);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', roll: '' });

  const filteredSessions = filter === 'all'
    ? sessionsData
    : sessionsData.filter(item => item.type === filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-[#F3F5FB]">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="font-mono text-xs text-[#6E93FF] tracking-wider uppercase bg-[#2E5CFF]/10 border border-[#2E5CFF]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
          CodeBusters Calendar & Sessions
        </span>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F5FB] tracking-tight leading-tight">
          Events & Workshops
        </h1>

        <p className="text-[#9AA6C4] text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed font-sans">
          Join our upcoming hackathons, innovation summits, and hands-on developer labs. Build. Learn. Innovate.
        </p>

        {/* Filter Navigation */}
        <div className="inline-flex p-1.5 rounded-xl bg-[#0D1526] border border-white/10 mt-8 gap-2 shadow-lg">
          {[
            { id: 'all', label: '⚡ All Sessions' },
            { id: 'event', label: '📅 Events' },
            { id: 'workshop', label: '🛠️ Workshops' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2 rounded-lg text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#2E5CFF] text-white shadow-[0_0_18px_rgba(46,92,255,0.5)] border border-[#38BDF8]'
                  : 'text-[#9AA6C4] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSessions.map(session => (
          <div
            key={session.id}
            className="group bg-[#0D1526]/90 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:border-[#38BDF8]/60 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(56,189,248,0.2)] transition-all duration-500 flex flex-col"
          >
            {/* Banner Image with Graceful Fallback */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#162344] via-[#0E1528] to-[#070B16]">
              {session.image ? (
                <img
                  src={session.image}
                  alt={session.title}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
              ) : null}

              {/* Placeholder fallback container */}
              <div className={`w-full h-full flex flex-col items-center justify-center p-4 ${session.image ? 'hidden' : 'flex'}`}>
                <span className="text-3xl mb-1">⚡</span>
                <span className="text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase">
                  {session.badge}
                </span>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1526] via-transparent to-transparent pointer-events-none" />

              {/* Badge Overlay */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#060A15]/85 backdrop-blur border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] shadow-sm">
                  {session.badge}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-md bg-[#2E5CFF]/30 border border-[#38BDF8]/30 backdrop-blur text-[10px] font-mono text-[#7DD3FC]">
                  {session.seats}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-2">
                <span>📅</span>
                <span>{session.date}</span>
              </div>

              <h3 className="font-sans text-lg sm:text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2 leading-snug">
                {session.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#9AA6C4] leading-relaxed mb-5 flex-1 line-clamp-3">
                {session.description}
              </p>

              <div className="text-[11px] font-mono text-[#5B6685] mb-5 flex items-center gap-1.5 pt-3 border-t border-white/5">
                <span>📍</span>
                <span className="truncate">{session.location}</span>
              </div>

              <button
                onClick={() => {
                  setSelectedSession(session);
                  setRegistered(false);
                  setFormData({ name: '', email: '', roll: '' });
                }}
                className="w-full font-mono text-xs font-semibold py-3 rounded-xl bg-[#2E5CFF] text-white hover:bg-[#38BDF8] hover:text-[#060A15] transition-all duration-300 shadow-[0_4px_16px_rgba(46,92,255,0.3)] cursor-pointer tracking-wider uppercase"
              >
                {session.btnText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Registration / RSVP Modal */}
      {selectedSession && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedSession(null)}
        >
          <div 
            className="relative max-w-md w-full bg-[#0D1526] border border-[#38BDF8]/40 rounded-2xl p-7 shadow-[0_0_50px_rgba(56,189,248,0.3)] animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSession(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>

            {!registered ? (
              <>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[10px] font-mono text-[#38BDF8] uppercase tracking-wider mb-2">
                  <span>●</span> {selectedSession.badge}
                </div>

                <h3 className="font-sans text-xl font-bold text-white mb-2 leading-tight">
                  {selectedSession.title}
                </h3>

                <p className="font-mono text-xs text-[#38BDF8] mb-1">
                  📅 {selectedSession.date}
                </p>
                <p className="font-mono text-xs text-[#9AA6C4] mb-6">
                  📍 {selectedSession.location}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-[#9AA6C4] mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Amrit Mishra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060A15] border border-white/15 text-white text-sm focus:border-[#38BDF8] focus:shadow-[0_0_12px_rgba(56,189,248,0.25)] focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#9AA6C4] mb-1.5 uppercase tracking-wider">
                      University Email / Roll No.
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. student@gla.ac.in or 2315000..."
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#060A15] border border-white/15 text-white text-sm focus:border-[#38BDF8] focus:shadow-[0_0_12px_rgba(56,189,248,0.25)] focus:outline-none transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#2E5CFF] hover:bg-[#38BDF8] hover:text-[#060A15] text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(46,92,255,0.4)] cursor-pointer mt-2"
                  >
                    Confirm Registration
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#38BDF8]/20 border border-[#38BDF8] text-[#38BDF8] text-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                  ✓
                </div>

                <h3 className="font-sans text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                  Registration Confirmed!
                </h3>

                <p className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-3">
                  Pass #{Math.floor(100000 + Math.random() * 900000)} Generated
                </p>

                <p className="text-sm text-[#9AA6C4] font-sans mb-6 leading-relaxed">
                  Congratulations <span className="text-white font-semibold">{formData.name || 'Builder'}</span>! You are officially registered for <span className="text-[#38BDF8] font-semibold">{selectedSession.title}</span>. Details have been logged for your check-in.
                </p>

                <button
                  onClick={() => setSelectedSession(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#2E5CFF] text-white hover:bg-[#38BDF8] hover:text-[#060A15] text-xs font-mono tracking-wider uppercase transition cursor-pointer font-bold"
                >
                  Close Pass
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
