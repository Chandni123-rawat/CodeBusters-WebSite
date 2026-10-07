import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * CoverflowSlider Component
 * 3D Cover Flow Carousel matching CodeBusters dark red-accented aesthetics.
 */
function CoverflowSlider({ members, title, subtitle }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const containerRef = useRef(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : members.length - 1));
  }, [members.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < members.length - 1 ? prev + 1 : 0));
  }, [members.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    else if (diff < -50) handlePrev();
    setTouchStartX(null);
  };

  if (!members || members.length === 0) return null;

  return (
    <div className="w-full py-12 select-none overflow-hidden" ref={containerRef}>
      {/* Section Header */}
      {title && (
        <div className="mb-10 px-4 max-w-7xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#7DD3FC] via-[#38BDF8] to-[#2E5CFF] uppercase drop-shadow-[0_2px_12px_rgba(56,189,248,0.3)]"
          >
            {title}
          </h2>
          <div className="h-0.5 w-16 bg-[#38BDF8] mt-2 mb-3 shadow-[0_0_10px_#38BDF8]" />
          {subtitle && (
            <p className="text-xs sm:text-sm font-mono tracking-wider text-[#9AA6C4] uppercase">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* 3D Coverflow Container */}
      <div 
        className="relative w-full h-[520px] flex items-center justify-center perspective-1200 px-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous member"
          className="absolute left-3 sm:left-8 md:left-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A0F1D]/80 hover:bg-[#15203B] text-white border border-white/15 hover:border-[#38BDF8]/70 flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <span className="text-2xl sm:text-3xl text-gray-300 group-hover:text-[#38BDF8] transition-colors leading-none -translate-x-0.5">‹</span>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next member"
          className="absolute right-3 sm:right-8 md:right-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#0A0F1D]/80 hover:bg-[#15203B] text-white border border-white/15 hover:border-[#38BDF8]/70 flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 group cursor-pointer"
        >
          <span className="text-2xl sm:text-3xl text-gray-300 group-hover:text-[#38BDF8] transition-colors leading-none translate-x-0.5">›</span>
        </button>

        {/* Carousel Deck */}
        <div className="relative w-full max-w-5xl h-full flex items-center justify-center preserve-3d">
          {members.map((member, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);

            // Hide cards that are too far away for performance and cleanliness
            if (absOffset > 3) return null;

            // Compute 3D transformation values
            const translateX = offset * (window.innerWidth < 640 ? 120 : 180);
            const translateZ = -absOffset * 140;
            const rotateY = offset < 0 ? 32 : offset > 0 ? -32 : 0;
            const scale = offset === 0 ? 1 : 0.84 - (absOffset - 1) * 0.08;
            const zIndex = 30 - absOffset * 5;
            const isActive = offset === 0;

            return (
              <div
                key={member.id || index}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  transition: 'all 500ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
                className={`absolute w-[260px] sm:w-[290px] md:w-[310px] h-[440px] sm:h-[470px] rounded-2xl overflow-hidden cursor-pointer select-none transition-shadow ${
                  isActive
                    ? 'border-2 border-[#38BDF8] shadow-[0_0_35px_rgba(56,189,248,0.45),0_15px_40px_rgba(0,0,0,0.8)] ring-1 ring-[#38BDF8]/50'
                    : 'border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:border-white/20'
                }`}
              >
                {/* Background Image / Space for image */}
                <div 
                  className={`w-full h-full relative flex flex-col justify-end transition duration-500 ${
                    isActive ? 'grayscale-0' : 'grayscale brightness-75 hover:brightness-90'
                  }`}
                >
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top brightness-105 contrast-[1.02]"
                    />
                  ) : (
                    /* Elegant placeholder slot for image */
                    <div className="absolute inset-0 bg-gradient-to-b from-[#141F3B] via-[#0E1528] to-[#070B16] flex flex-col items-center justify-center p-6 text-center">
                      {/* Stylized Avatar Silhouette / Initials */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 bg-[#192440]/60 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(56,189,248,0.2)] relative">
                        <div className="text-3xl sm:text-4xl font-bold font-cinzel text-white/70">
                          {member.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('')}
                        </div>
                        {isActive && (
                          <div className="absolute inset-0 rounded-full border border-[#38BDF8]/50 animate-ping opacity-25" />
                        )}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                        <span>PHOTO PLACEHOLDER</span>
                      </div>
                    </div>
                  )}

                  {/* Top Corner Ribbon / Tag if any */}
                  {member.tag && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded bg-[#060A15]/80 backdrop-blur border border-white/10 text-[10px] font-mono tracking-wider uppercase text-[#38BDF8]">
                        {member.tag}
                      </span>
                    </div>
                  )}

                  {/* Soft bottom gradient only behind text for legibility, leaving the face and photo completely bright */}
                  <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060A15] via-[#060A15]/85 to-transparent pointer-events-none" />

                  {/* Member Details */}
                  <div className="relative z-10 p-5 sm:p-6 text-left">
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide uppercase leading-tight drop-shadow-md">
                      {member.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-sans font-medium text-[#38BDF8] mt-1 tracking-wide">
                      {member.role}
                    </p>

                    {member.department && (
                      <p className="text-[11px] font-mono text-[#9AA6C4] mt-0.5">
                        {member.department}
                      </p>
                    )}

                    {member.phone && (
                      <p className="text-[11px] font-mono text-gray-400 mt-2 flex items-center gap-1.5">
                        <span>📞</span>
                        <span>{member.phone}</span>
                      </p>
                    )}

                    {member.details && (
                      <p className="text-[11px] text-[#9AA6C4] mt-1 leading-snug line-clamp-2">
                        {member.details}
                      </p>
                    )}

                    {/* Accent line at bottom of active card */}
                    <div className={`mt-3 h-0.5 transition-all duration-300 ${
                      isActive ? 'w-12 bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]' : 'w-6 bg-white/20'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination dots & Counter */}
      <div className="flex flex-col items-center justify-center mt-6 gap-2">
        <div className="flex items-center gap-2">
          {members.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex 
                  ? 'w-8 bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <p className="font-mono text-[11px] text-[#5B6685]">
          {activeIndex + 1} / {members.length} • Use ‹ › or swipe to explore
        </p>
      </div>
    </div>
  );
}

export default CoverflowSlider;
