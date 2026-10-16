import { useState } from 'react';

// CodeBusters Placed Alumni Data
// Note: To add individual photos, place the image files in the /public/alumni/ folder
// and set the `image` property to '/alumni/filename.jpg'.
const alumniData = [
  {
    id: 1,
    name: "Durgesh Kumar",
    company: "Silicon Labs",
    offerType: "Direct Tech Placement",
    role: "Embedded & Hardware / Software Systems",
    image: "", // Upload photo here (e.g., '/alumni/durgesh.jpg')
    category: "Core Tech & Hardware",
    tags: ["Silicon Labs", "Embedded Systems", "CodeBusters GLAU"]
  },
  {
    id: 2,
    name: "Kriti Chaudhary",
    company: "Infosys",
    offerType: "Direct Tech Placement",
    role: "Software Engineering",
    image: "", // Upload photo here (e.g., '/alumni/kriti.jpg')
    category: "Enterprise Tech",
    tags: ["Infosys", "Software Engineering", "CodeBusters GLAU"]
  },
  {
    id: 3,
    name: "Teena Agrawal",
    company: "Octro",
    offerType: "Direct Tech Placement",
    role: "Game Development & Software Engineering",
    image: "", // Upload photo here (e.g., '/alumni/teena.jpg')
    category: "Gaming & Interactive Tech",
    tags: ["Octro", "Gaming Tech", "CodeBusters GLAU"]
  },
  {
    id: 4,
    name: "Pranjal Prajapati",
    company: "ZYPP & Capgemini",
    offerType: "Dual Placement Offer 🎉",
    role: "Dual Offer Achiever",
    image: "", // Upload photo here (e.g., '/alumni/pranjal.jpg')
    category: "Dual Placement Offers",
    tags: ["ZYPP", "Capgemini", "Dual Placement", "CodeBusters GLAU"]
  },
  {
    id: 5,
    name: "Raunak Mishra",
    company: "Cognizant",
    offerType: "Direct Corporate Placement",
    role: "Software Development",
    quote: "From classroom dreams to corporate reality, you've made us all proud!",
    image: "", // Upload photo here (e.g., '/alumni/raunak.jpg')
    category: "Enterprise Tech",
    tags: ["Cognizant", "Software Development", "CodeBusters GLAU"]
  },
  {
    id: 6,
    name: "Shiva Gaur",
    company: "Capgemini & Parkar",
    offerType: "Dual Placement Offer 🎉",
    role: "Dual Offer Achiever",
    image: "", // Upload photo here (e.g., '/alumni/shiva.jpg')
    category: "Dual Placement Offers",
    tags: ["Capgemini", "Parkar Digital", "Dual Placement", "CodeBusters GLAU"]
  },
  {
    id: 7,
    name: "Sneha Agarwal",
    company: "Capgemini & Cognizant",
    offerType: "Dual Placement Offer 🎉",
    role: "Dual Offer Achiever",
    image: "", // Upload photo here (e.g., '/alumni/sneha.jpg')
    category: "Dual Placement Offers",
    tags: ["Capgemini", "Cognizant", "Dual Placement", "CodeBusters GLAU"]
  }
];

const partnerCompanies = [
  "Silicon Labs", "Octro", "Capgemini", "Cognizant", "Infosys", "ZYPP", "Parkar"
];

const categories = ["All Alumni", "Dual Placement Offers", "Core Tech & Hardware", "Gaming & Interactive Tech", "Enterprise Tech"];

function Alumni() {
  const [selectedCategory, setSelectedCategory] = useState("All Alumni");

  const filteredAlumni = selectedCategory === "All Alumni"
    ? alumniData
    : alumniData.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-[#F3F5FB]">
      {/* 1. Page Header */}
      <div className="mb-14">
        <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase bg-[#38BDF8]/10 border border-[#38BDF8]/30 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          CodeBusters Hall of Fame
        </span>
        <h1 className="font-sans text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-4">
          Our Placed Alumni
        </h1>
        <p className="text-[#9AA6C4] text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
          From hands-on coding rounds at CodeBusters to launching careers at Silicon Labs, Octro, Capgemini, Cognizant, Infosys, ZYPP, and Parkar.
        </p>
      </div>

      {/* 2. Key Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0D1526]/85 backdrop-blur-md border border-white/10 mb-14 shadow-xl">
        <div>
          <div className="font-sans text-3xl sm:text-4xl font-black text-[#38BDF8]">3+</div>
          <div className="text-xs sm:text-sm text-[#9AA6C4] mt-1">Dual Placement Offers</div>
        </div>
        <div>
          <div className="font-sans text-3xl sm:text-4xl font-black text-[#6E93FF]">7+</div>
          <div className="text-xs sm:text-sm text-[#9AA6C4] mt-1">Top Tech Companies</div>
        </div>
        <div>
          <div className="font-sans text-3xl sm:text-4xl font-black text-[#A78BFA]">100%</div>
          <div className="text-xs sm:text-sm text-[#9AA6C4] mt-1">Core Tech Placements</div>
        </div>
        <div>
          <div className="font-sans text-3xl sm:text-4xl font-black text-[#34D399]">GLAU</div>
          <div className="text-xs sm:text-sm text-[#9AA6C4] mt-1">CodeBusters Community</div>
        </div>
      </div>

      {/* 3. Placement Partner Companies Ticker */}
      <div className="mb-12">
        <span className="font-mono text-xs text-[#5B6685] tracking-wider uppercase block mb-3.5">
          Where CodeBusters alumni get placed
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {partnerCompanies.map((comp, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 rounded-xl bg-[#0B1222] border border-white/10 text-xs sm:text-sm font-semibold text-[#CBD5E1] hover:border-[#38BDF8]/40 hover:text-white transition shadow-sm"
            >
              {comp}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Filter Pills */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#2E5CFF] text-white shadow-[0_0_18px_rgba(46,92,255,0.5)] border border-[#38BDF8]'
                : 'bg-[#0D1526] text-[#9AA6C4] border border-white/10 hover:border-white/20 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 5. Alumni Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filteredAlumni.map((alum) => (
          <div
            key={alum.id}
            className="p-6 rounded-2xl bg-[#0D1526]/85 backdrop-blur-md border border-white/10 hover:border-[#38BDF8]/50 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6),0_0_20px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Card Header with Photo / Avatar Slot */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  {alum.image ? (
                    <img
                      src={alum.image}
                      alt={alum.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-[#38BDF8]/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}

                  {/* Fallback avatar when image is not yet uploaded */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#1D4ED8] via-[#2563EB] to-[#38BDF8] items-center justify-center font-black text-white text-xl shadow-[0_0_15px_rgba(56,189,248,0.3)] ${alum.image ? 'hidden' : 'flex'}`}>
                    {alum.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-lg text-white group-hover:text-[#38BDF8] transition">
                      {alum.name}
                    </h3>
                    <p className="text-[11px] font-mono text-[#38BDF8] font-medium">
                      {alum.offerType}
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Highlight Box */}
              <div className="mb-4 p-3 rounded-xl bg-[#070D1C] border border-white/5">
                <span className="text-[10px] font-mono uppercase text-[#5B6685] tracking-wider block mb-1">
                  Placed At
                </span>
                <span className="font-sans font-extrabold text-base text-white text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#38BDF8]">
                  {alum.company}
                </span>
              </div>

              {alum.quote && (
                <p className="text-xs text-[#94A3B8] italic leading-relaxed mb-4 p-2.5 rounded-lg bg-white/5 border border-white/5">
                  "{alum.quote}"
                </p>
              )}
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {alum.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#9AA6C4]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="pt-3.5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#9AA6C4]">
                <span className="text-[#38BDF8] font-medium">{alum.category}</span>
                <span className="text-[11px] text-[#5B6685]">CodeBusters Alumni</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Connect to Alumni Circle */}
      <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#070D1C] via-[#0B1530] to-[#0E1A3D] border border-[#6E93FF]/30 text-center relative overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-xl mx-auto">
          <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider block mb-2">
            CodeBusters Network
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-black text-white mb-3">
            Proud of our Placed Builders
          </h2>
          <p className="text-sm text-[#9AA6C4] leading-relaxed mb-6">
            Congratulations to our placed members! Are you an alumnus? Connect back with CodeBusters to mentor incoming batches and guide upcoming hackathons.
          </p>
          <a
            href="https://www.linkedin.com/m/company/codebusters-glau/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl bg-[#2E5CFF] text-white hover:bg-blue-600 transition shadow-[0_4px_20px_rgba(46,92,255,0.4)]"
          >
            <span>Connect on LinkedIn</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Alumni;
