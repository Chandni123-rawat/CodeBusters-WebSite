import { Link } from 'react-router-dom';
import cbLogo from '../assets/cb-logo.png';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060A15]/90 mt-28 py-14 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-3 text-white font-bold text-lg mb-3">
            <img src={cbLogo} alt="CodeBusters" className="w-7 h-7 rounded-lg object-cover" />
            <span className="font-sans font-extrabold tracking-wide">CodeBusters</span>
          </div>
          <p className="font-mono text-xs text-[#5B6685] max-w-sm">
            A technical community for students who'd rather build than just attend.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 font-sans text-sm">
          <div>
            <h4 className="font-bold text-white mb-3 text-xs uppercase font-mono tracking-wider text-[#6E93FF]">Explore</h4>
            <div className="flex flex-col gap-2 text-[#9AA6C4]">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-xs uppercase font-mono tracking-wider text-[#6E93FF]">Connect</h4>
            <div className="flex flex-col gap-2 text-[#9AA6C4]">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">Instagram</a>
              <a href="https://github.com/Chandni123-rawat/CodeBusters-WebSite" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#5B6685]">
        <p>© 2026 CodeBusters Club. All rights reserved.</p>
        <p>Built by CodeBusters Dev Team</p>
      </div>
    </footer>
  );
}

export default Footer;