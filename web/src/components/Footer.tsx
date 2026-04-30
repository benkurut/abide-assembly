/**
 * Footer Component
 * Displays copyright information and social links
 */
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-12 mt-20 rounded-t-3xl border-t border-slate-200 shadow-lg">
      {/* Quick Links */}
      <div className="flex justify-center gap-8 mb-8 flex-wrap">
        <a href="#worship" className="text-slate-300 hover:text-accent transition-colors">
          Worship
        </a>
        <a href="#" className="text-slate-300 hover:text-accent transition-colors">
          Plan Your Visit
        </a>
        <a href="#ministries" className="text-slate-300 hover:text-accent transition-colors">
          Ministries
        </a>
        <a href="#giving" className="text-slate-300 hover:text-accent transition-colors">
          Give
        </a>
        <a href="#contact" className="text-slate-300 hover:text-accent transition-colors">
          Contact
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.facebook.com/share/1FEANoRzPs/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="mailto:contact@abideassembly.com"
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="Email"
        >
          <MdEmail />
        </a>
      </div>

      <p className="text-sm text-slate-300 mb-2">Connect with us</p>
      <p className="text-slate-400 text-xs mb-6">
        Abide Assembly of God<br />
        28870 Chardon Rd, Willoughby Hills, OH 44092<br />
        Sundays at 4:00 PM
      </p>
      <p className="text-slate-400 text-sm">&copy; 2026 Abide Assembly of God. All rights reserved.</p>
    </footer>
  );
}
