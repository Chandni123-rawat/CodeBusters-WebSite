import instaIcon from '../assets/insta.jpeg';
import githubIcon from '../assets/github.png';

function About() {
  const domains = [
    "DSA", "Web Development", "AI / ML", "App Development",
    "Git & GitHub", "Cloud", "Cybersecurity", "Competitive Programming"
  ];

  const objectives = [
    { title: "Run events", desc: "Hackathons, contests, and tech talks through the semester." },
    { title: "Teach, don't just talk", desc: "Workshops led by seniors and alumni, not slideware." },
    { title: "Curate resources", desc: "Roadmaps so you don't waste a semester picking a tutorial." },
    { title: "Showcase work", desc: "A real audience for projects that would otherwise sit on GitHub." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <span className="font-mono text-xs text-[#5B6685] uppercase tracking-wider">
        about the club
      </span>
      <h1 className="font-serif text-4xl md:text-6xl font-medium text-[#F3F5FB] mt-2 mb-16">
        A technical club, run like one.
      </h1>
      <div className="grid md:grid-cols-2 gap-12 pb-16 border-b border-white/10">
        <div className="bg-[#0D1526] p-8 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 font-sans">Mission</h3>
          <p className="text-[#9AA6C4] leading-relaxed">
            To give every student, regardless of where they're starting from, a direct path
            from curiosity to a working project — through events, mentorship, and a community
            that builds in public.
          </p>
        </div>
        <div className="bg-[#0D1526] p-8 rounded-xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-3 font-sans">Vision</h3>
          <p className="text-[#9AA6C4] leading-relaxed">
            To be recognised not as an informational college club page, but as a professional
            technical community students actively choose to be part of.
          </p>
        </div>
      </div>
      <div className="py-16 border-b border-white/10">
        <span className="font-mono text-xs text-[#6E93FF] uppercase tracking-wider block mb-3">
          what we focus on
        </span>
        <h2 className="text-3xl font-bold text-[#F3F5FB] mb-8 font-sans">Technical domains</h2>
        <div className="flex flex-wrap gap-3">
          {domains.map((domain, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-white/10 bg-[#0D1526] text-[#9AA6C4] text-sm font-medium hover:border-[#6E93FF]/40 hover:text-white transition"
            >
              {domain}
            </span>
          ))}
        </div>
      </div>
      <div className="py-16">
        <span className="font-mono text-xs text-[#6E93FF] uppercase tracking-wider block mb-3">
          club objectives
        </span>
        <h2 className="text-3xl font-bold text-[#F3F5FB] mb-8 font-sans">What CodeBusters actually does</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((item, index) => (
            <div key={index} className="bg-[#0D1526] p-6 rounded-xl border border-white/10 hover:border-[#6E93FF]/40 transition">
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-[#9AA6C4] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 bg-[#0D1526] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="font-mono text-xs text-[#6E93FF] uppercase tracking-wider block mb-2">
              connect with us
            </span>
            <h3 className="text-2xl font-bold text-white font-sans mb-3">
              Have questions? Let's talk.
            </h3>
            <p className="text-sm text-[#9AA6C4] mb-6 leading-relaxed">
              Whether you want to collaborate, join upcoming hackathons, or just say hi — our DMs are always open.
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-[#F3F5FB] hover:text-[#6E93FF] transition group"
              >
                <span className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center overflow-hidden group-hover:scale-110 transition">
                  <img src={instaIcon} alt="Instagram" className="w-5 h-5 rounded object-cover" />
                </span>
                <span>Follow on Instagram <span className="text-xs text-[#5B6685] font-mono">→ @codebusters</span></span>
              </a>
              <a
                href="https://github.com/Chandni123-rawat/CodeBusters-WebSite" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm font-medium text-[#F3F5FB] hover:text-[#6E93FF] transition group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:scale-110 transition">
                  <img src={githubIcon} alt="GitHub" className="w-5 h-5 object-contain" />
                </span>
                <span>on GitHub <span className="text-xs text-[#5B6685] font-mono">→ /codebusters-club</span></span>
              </a>
            </div>
          </div>
          <div className="bg-[#060A15]/70 border border-white/10 p-5 rounded-xl">
            <h4 className="font-mono text-xs text-[#6E93FF] uppercase mb-3">quick message</h4>
            <input 
              type="text" 
              placeholder="Your college email" 
              className="w-full bg-[#111B33] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-[#5B6685] mb-3 focus:outline-none focus:border-[#2E5CFF]"
            />
            <textarea 
              placeholder="Your queries" 
              rows="2"
              className="w-full bg-[#111B33] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-[#5B6685] mb-3 focus:outline-none focus:border-[#2E5CFF] resize-none"
            />
            <button className="w-full font-mono text-xs font-semibold py-2.5 rounded-lg bg-[#2E5CFF] text-white hover:bg-blue-600 transition shadow-[0_4px_16px_rgba(46,92,255,0.35)]">
              send_message()
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;