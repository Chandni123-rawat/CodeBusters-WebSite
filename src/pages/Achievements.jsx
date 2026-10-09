function Achievements() {
  const achievements = [
    {
      id: 1,
      badge: "HACKATHON WINNER",
      title: "1st Place - HackNight 12-Hour Sprint",
      description: "Awarded top prize out of 50+ participating teams for building a real-time collaborative developer workspace tool.",
      tags: ["1st Place", "Hackathon", "AI/ML"],
      date: "Oct 2026",
      actionText: "View Certificate"
    },
    {
      id: 2,
      badge: "CERTIFICATION",
      title: "AWS Certified Solutions Architect",
      description: "Validated club mentor skill in designing high-availability, scalable distributed cloud architectures and DevOps pipelines.",
      tags: ["AWS", "Cloud Architecture", "DevOps"],
      date: "Aug 2026",
      actionText: "Verify Credential"
    },
    {
      id: 3,
      badge: "COMPETITIVE PROGRAMMING",
      title: "Top 5% - Monthly CP Contest",
      description: "Placed in the top 5th percentile across algorithm and data structure speed rounds with 100% test case pass rates.",
      tags: ["DSA", "Algorithms", "Ranked"],
      date: "May 2026",
      actionText: "Profile Link"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs text-[#6E93FF] tracking-wider uppercase bg-[#2E5CFF]/10 border border-[#2E5CFF]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
          MILESTONES & HONORS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F5FB] tracking-tight leading-tight">
          Club Achievements
        </h1>
        <p className="text-[#9AA6C4] text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed font-sans">
          From hackathon podium finishes to industry certifications, celebrating CodeBusters milestones and competitive wins.
        </p>
      </div>

      {/* Stats Summary Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="bg-[#0D1526] border border-white/10 rounded-xl p-5 text-center">
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">14</div>
          <div className="font-mono text-xs text-[#5B6685] mt-1.5 uppercase">Hackathon Wins</div>
        </div>
        <div className="bg-[#0D1526] border border-white/10 rounded-xl p-5 text-center">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#38BDF8] font-sans">62</div>
          <div className="font-mono text-xs text-[#5B6685] mt-1.5 uppercase">Open Source PRs</div>
        </div>
        <div className="bg-[#0D1526] border border-white/10 rounded-xl p-5 text-center">
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-sans">210+</div>
          <div className="font-mono text-xs text-[#5B6685] mt-1.5 uppercase">Minds Mentored</div>
        </div>
        <div className="bg-[#0D1526] border border-white/10 rounded-xl p-5 text-center">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#7DD3FC] font-sans">100%</div>
          <div className="font-mono text-xs text-[#5B6685] mt-1.5 uppercase">Student Built</div>
        </div>
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-[#0D1526] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#38BDF8]/40 hover:-translate-y-1 transition duration-200 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <div>
              <span className="font-mono text-[11px] font-semibold text-[#6E93FF] tracking-wider uppercase px-2.5 py-1 rounded bg-[#2E5CFF]/15 border border-[#2E5CFF]/30 inline-block mb-4">
                {item.badge}
              </span>

              <h3 className="font-sans text-xl font-bold text-white group-hover:text-[#38BDF8] transition">
                {item.title}
              </h3>

              <p className="text-sm text-[#9AA6C4] mt-2.5 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#9AA6C4]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 font-mono text-xs">
              <span className="text-[#5B6685]">{item.date}</span>
              <a
                href="#"
                className="py-1.5 px-3 rounded-lg border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#7DD3FC] hover:bg-[#38BDF8]/20 transition"
              >
                {item.actionText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
