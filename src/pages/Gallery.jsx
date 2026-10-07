import { useState } from 'react';

// CodeBusters Gallery Items featuring BuildCamp, Catalyst, TechWave and Club Life
const galleryItems = [
  {
    id: 1,
    title: 'BuildCamp: 4-Hour Hands-On AI Workshop',
    category: 'BuildCamp',
    tag: 'Flagship Event',
    date: 'Recent Edition',
    caption: 'Department of Computer Engineering & Applications and Code Busters Club is organizing a 4-Hour Hands-On AI Workshop - BuildCamp exclusively for B.Tech CSE 2nd Year (AI & Data Science Track).',
    image: '/buildcamp.png', 
    span: 'col-span-1 md:col-span-2 row-span-2',
    aspect: 'h-[360px] md:h-[420px]',
    description: 'Teams collaborating during the 4-Hour BuildCamp workshop to architect and build hands-on AI solutions under the mentorship of senior builders and faculty.'
  },
  {
    id: 2,
    title: 'Catalyst: Ideathon to Product Incubation',
    category: 'Catalyst',
    tag: 'Innovation Sprint',
    date: 'Recent Edition',
    caption: 'Where raw concepts transform into viable tech products.',
    image: '',
    span: 'col-span-1 row-span-2',
    aspect: 'h-[360px] md:h-[420px]',
    description: 'Participants pitching innovative problem statements and defensible tech solutions during the Catalyst technical symposium.'
  },
  {
    id: 3,
    title: 'TechWave: Podium Winners & Grand Trophy Ceremony',
    category: 'TechWave',
    tag: 'Victory Moment',
    date: 'Recent Edition',
    caption: 'Celebrating the brightest problem solvers and builders.',
    image: '',
    span: 'col-span-1 md:col-span-1 row-span-2',
    aspect: 'h-[360px] md:h-[420px]',
    description: 'Respected CEA faculty mentors and club leads presenting trophies, cash prizes, and certificates to winning teams at TechWave.'
  },
  {
    id: 4,
    title: 'Faculty Mentors & Dignitaries Panel',
    category: 'Catalyst',
    tag: 'Mentorship',
    date: 'Recent Edition',
    caption: 'Guiding the next wave of engineers and innovators.',
    image: '',
    span: 'col-span-1',
    aspect: 'h-[280px]',
    description: 'Mr. Piyush Vashistha, Mr. Rishab Agarwal, and guests evaluating project architectures and guiding participants.'
  },
  {
    id: 5,
    title: 'TechWave: Packed Auditorium Keynote',
    category: 'TechWave',
    tag: 'Community',
    date: 'Recent Edition',
    caption: 'Over 300+ eager tech minds gathered in one room.',
    image: '',
    span: 'col-span-1 md:col-span-2',
    aspect: 'h-[280px]',
    description: 'Opening keynote session at TechWave showcasing technological breakthroughs, system design, and AI advancements.'
  },
  {
    id: 6,
    title: 'BuildCamp: Midnight Debugging & Code Sprint',
    category: 'BuildCamp',
    tag: 'Hackathon Sprint',
    date: 'Recent Edition',
    caption: 'Debugging at 3 AM: When the code finally compiles.',
    image: '',
    span: 'col-span-1',
    aspect: 'h-[280px]',
    description: 'Late night sprint where teams work through complex API integrations, database queries, and frontend polishes.'
  },
  {
    id: 7,
    title: 'Grand Closing & Community Celebration',
    category: 'Club Life',
    tag: 'Celebration',
    date: 'Recent Edition',
    caption: 'The unforgettable energy of a united engineering community.',
    image: '',
    span: 'col-span-1 md:col-span-2',
    aspect: 'h-[280px]',
    description: 'Valedictory moments, roaring cheers, and club memories captured across our major flagship events.'
  },
  {
    id: 8,
    title: 'Hands-on Web & Cloud Architecture Workshop',
    category: 'Workshops',
    tag: 'Skill Sprint',
    date: 'Recent Edition',
    caption: 'Moving beyond theory into production-ready software.',
    image: '',
    span: 'col-span-1',
    aspect: 'h-[280px]',
    description: 'Interactive session led by CodeBusters technical and development team heads covering modern web frameworks.'
  },
  {
    id: 9,
    title: 'Catalyst: Jury Evaluations & Live Testing',
    category: 'Catalyst',
    tag: 'Jury Round',
    date: 'Recent Edition',
    caption: 'Defending system designs and answering technical challenges.',
    image: '',
    span: 'col-span-1',
    aspect: 'h-[280px]',
    description: 'Rigorous project evaluations focusing on scalability, code quality, edge-case resilience, and user experience.'
  }
];

const categories = [
  'All Moments',
  'BuildCamp',
  'Catalyst',
  'TechWave',
  'Workshops',
  'Prize Ceremonies',
  'Club Life'
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Moments');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filteredItems = activeCategory === 'All Moments'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen text-[#F3F5FB] pb-24">
      {/* Top Banner / Breadcrumb */}
      <section className="pt-12 pb-4 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono mb-4 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            CodeBusters Chronicles
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#2E5CFF] uppercase drop-shadow-[0_2px_12px_rgba(56,189,248,0.3)]">
            EVENTS & CLUB GALLERY
          </h1>

          <div className="h-0.5 w-20 bg-[#38BDF8] mt-2 mb-3 shadow-[0_0_10px_#38BDF8]" />

          <p className="text-xs sm:text-sm font-mono tracking-wider text-[#9AA6C4] uppercase">
            Reliving BuildCamp • Catalyst • TechWave & Signature Club Moments
          </p>
        </div>

        {/* Filter Pills in Theme Blue */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2E5CFF] text-white shadow-[0_0_18px_rgba(46,92,255,0.5)] border border-[#38BDF8]'
                  : 'bg-[#0D1526] text-[#9AA6C4] hover:text-white hover:bg-[#141F3B] border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Grid Gallery Showcase */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#38BDF8]/60 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(56,189,248,0.25)] ${item.span} ${item.aspect} bg-[#0D1526]`}
            >
              {/* Image or Image Placeholder Slot */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Sleek Dark Tech Placeholder Container */
                <div className="w-full h-full bg-gradient-to-br from-[#162344] via-[#0E1528] to-[#070B16] flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:from-[#1b2b52] transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#38BDF8]/40 transition-all shadow-lg">
                    <span className="text-2xl">📸</span>
                  </div>

                  <span className="text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase">
                    {item.tag}
                  </span>

                  <span className="text-[10px] font-mono text-[#5B6685] mt-1">
                    Image Space Reserved
                  </span>
                </div>
              )}

              {/* Tag in top-left */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#060A15]/85 backdrop-blur border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#38BDF8] shadow-sm">
                  {item.category}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur text-[10px] font-mono text-gray-300">
                  {item.date}
                </span>
              </div>

              {/* Subtle bottom gradient only behind caption for readability */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#060A15] via-[#060A15]/80 to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-white uppercase leading-snug group-hover:text-[#38BDF8] transition-colors">
                  {item.title}
                </h3>

                {item.caption && (
                  <p className="font-serif italic text-xs sm:text-sm text-[#F3F5FB]/90 mt-1.5 leading-relaxed line-clamp-2">
                    "{item.caption}"
                  </p>
                )}

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#5B6685]">
                  <span>Click to view details</span>
                  <span className="text-[#38BDF8] group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Preview Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0D1526] border border-[#38BDF8]/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-[#2E5CFF] text-white flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>

            {/* Photo / Placeholder Display */}
            <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-[#182649] via-[#0E1528] to-[#070B16] flex flex-col items-center justify-center relative p-6">
              {selectedPhoto.image ? (
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">📸</span>
                  </div>
                  <h4 className="font-cinzel text-xl text-white font-bold uppercase">{selectedPhoto.title}</h4>
                  <p className="text-xs font-mono text-[#38BDF8] mt-1">Image slot reserved for future upload</p>
                </div>
              )}
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-[#060A15]">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] uppercase">
                  {selectedPhoto.category} • {selectedPhoto.tag}
                </span>
                <span className="text-xs font-mono text-[#9AA6C4]">{selectedPhoto.date}</span>
              </div>

              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white uppercase mt-2">
                {selectedPhoto.title}
              </h2>

              <p className="font-serif italic text-sm text-[#38BDF8] mt-1">
                "{selectedPhoto.caption}"
              </p>

              <p className="text-sm text-[#9AA6C4] mt-3 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
