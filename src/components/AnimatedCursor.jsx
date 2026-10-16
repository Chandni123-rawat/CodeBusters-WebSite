import { useEffect, useState, useRef } from 'react';

/**
 * AnimatedCursor provides an ultra-smooth, futuristic cursor experience
 * reminiscent of modern developer tools like Cursor.com and OpenAI Codex:
 * - Fluid spring-interpolated trailing aura ring
 * - Crisp precision center dot
 * - Interactive magnetic hover scale over links, buttons, and cards
 * - Auto-hidden on touch/mobile devices
 */
function AnimatedCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable on devices that have a precise pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect clickable element hovers
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer');
      setIsHovered(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Smooth spring trailing loop for the outer glow ring
    const render = () => {
      // Linear interpolation (lerp)
      const ease = 0.16;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [visible]);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 hidden md:block ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    >
      {/* 1. Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.9)] pointer-events-none will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* 2. Fluid Trailing Halo / Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none will-change-transform transition-[width,height,margin,border-color,background-color] duration-200 ease-out flex items-center justify-center
          ${isHovered 
            ? '-ml-6 -mt-6 w-12 h-12 border border-[#8B78EE] bg-[#7C66E3]/15 shadow-[0_0_24px_rgba(139,120,238,0.5)] backdrop-blur-[1px]' 
            : isClicking 
            ? '-ml-4 -mt-4 w-8 h-8 border border-white/80 bg-white/20 shadow-[0_0_18px_rgba(255,255,255,0.6)]' 
            : '-ml-4 -mt-4 w-8 h-8 border border-[#6E93FF]/60 bg-[#4267E8]/10 shadow-[0_0_16px_rgba(110,147,255,0.35)]'
          }`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />
    </div>
  );
}

export default AnimatedCursor;
