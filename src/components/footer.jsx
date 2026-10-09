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
              <Link to="/projects" className="hover:text-white transition">Projects</Link>
              <Link to="/achievements" className="hover:text-white transition">Achievements</Link>
              <Link to="/team" className="hover:text-white transition">Team</Link>
              <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3 text-xs uppercase font-mono tracking-wider text-[#6E93FF]">Connect</h4>
            <div className="flex flex-col gap-2.5 text-[#9AA6C4]">
              <a 
                href="https://www.instagram.com/codebusters_glau/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition inline-flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-[#9AA6C4] group-hover:text-pink-400 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/m/company/codebusters-glau/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition inline-flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-[#9AA6C4] group-hover:text-[#0A66C2] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Chandni123-rawat/CodeBusters-WebSite" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition inline-flex items-center gap-2 group"
              >
                <svg className="w-4 h-4 text-[#9AA6C4] group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
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