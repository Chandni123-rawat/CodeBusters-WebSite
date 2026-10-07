import { Link } from 'react-router-dom';
import cbLogo from '../assets/cb-logo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#060A15]/80 backdrop-blur sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-3 text-white font-bold text-lg">
        <img 
          src={cbLogo} 
          alt="CodeBusters Logo" 
          className="w-8 h-8 rounded-lg object-cover shadow-[0_0_15px_rgba(46,92,255,0.4)]" 
        />
        <span className="font-sans font-extrabold tracking-wide">CodeBusters</span>
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium text-[#9AA6C4]">
        <Link to="/" className="hover:text-white transition">Home</Link>
        <Link to="/about" className="hover:text-white transition">About</Link>
        <Link to="/team" className="hover:text-white transition">Team</Link>
        <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
      </div>
      <a 
        href="#join"
        className="font-mono text-xs font-semibold px-4 py-2 rounded-md bg-[#2E5CFF] text-white shadow-[0_4px_16px_rgba(46,92,255,0.35)] hover:bg-blue-600 transition"
      >
        Get involved
      </a>
    </nav>
  );
}

export default Navbar;