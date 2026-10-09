function Projects() {
  const projects = [
    {
      id: 1,
      title: "DevPulse Analytics",
      description: "Real-time developer dashboard tracking team pull requests, build health, and commit velocity across repositories.",
      tags: ["React", "Node.js", "TailwindCSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/Chandni123-rawat/CodeBusters-WebSite"
    },
    {
      id: 2,
      title: "Distributed Task Engine",
      description: "High-throughput task queue written in Go, optimized for background jobs, worker pools, and async webhooks.",
      tags: ["Go", "Redis", "Docker"],
      demoUrl: "#",
      githubUrl: "https://github.com/Chandni123-rawat/CodeBusters-WebSite"
    },
    {
      id: 3,
      title: "Smart Campus Portal",
      description: "Unified student hub for community events, technical workshops, room bookings, and club resources.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      demoUrl: "#",
      githubUrl: "https://github.com/Chandni123-rawat/CodeBusters-WebSite"
    },
    {
      id: 4,
      title: "CampusEats",
      description: "Pre-order canteen food and skip the long lunch queue between lecture slots. Supports order status tracking.",
      tags: ["React Native", "Node.js", "MongoDB"],
      demoUrl: "#",
      githubUrl: "https://github.com/Chandni123-rawat/CodeBusters-WebSite"
    },
    {
      id: 5,
      title: "ResuMate",
      description: "AI resume reviewer trained on 500+ shortlisted applicant resumes. Provides ATS scoring and formatting suggestions.",
      tags: ["Python", "FastAPI", "AI/ML"],
      demoUrl: "#",
      githubUrl: "https://github.com/Chandni123-rawat/CodeBusters-WebSite"
    },
    {
      id: 6,
      title: "ChainVote",
      description: "Tamper-evident voting platform for hostel council and student representative elections using smart contracts.",
      tags: ["Solidity", "Blockchain", "Web3"],
      demoUrl: "#",
      githubUrl: "https://github.com/Chandni123-rawat/CodeBusters-WebSite"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs text-[#6E93FF] tracking-wider uppercase bg-[#2E5CFF]/10 border border-[#2E5CFF]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
          PORTFOLIO & SHOWCASE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-[#F3F5FB] tracking-tight leading-tight">
          Where ideas turn into code, and projects start shipping.
        </h1>
        <p className="text-[#9AA6C4] text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed font-sans">
          Explore full-stack software applications, competitive hackathon entries, and open-source tools built by CodeBusters members.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0D1526] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#38BDF8]/40 hover:-translate-y-1 transition duration-200 group shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
          >
            <div>
              {/* Media placeholder */}
              <div className="h-36 rounded-xl bg-gradient-to-br from-[#111B33] to-[#141F3B] border border-dashed border-white/10 flex items-center justify-center font-mono text-xs text-[#5B6685] mb-5 group-hover:border-[#38BDF8]/30 transition">
                <span>{project.title.toLowerCase().replace(/\s+/g, '_')}.png</span>
              </div>

              <h3 className="font-sans text-xl font-bold text-white group-hover:text-[#6E93FF] transition">
                {project.title}
              </h3>

              <p className="text-sm text-[#9AA6C4] mt-2.5 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#7DD3FC]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer with Links */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5 font-mono text-xs">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-lg border border-white/10 text-center text-[#9AA6C4] hover:text-white hover:bg-white/5 transition"
              >
                Source Code
              </a>
              <a
                href={project.demoUrl}
                className="flex-1 py-2 rounded-lg bg-[#2E5CFF] text-white text-center font-semibold hover:bg-blue-600 transition shadow-[0_2px_12px_rgba(46,92,255,0.3)]"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
