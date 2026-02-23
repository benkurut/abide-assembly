/**
 * Footer Component
 * Displays copyright information and social links
 */
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-12 mt-20 rounded-t-3xl border-t border-slate-200 shadow-lg">
      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mb-6">
        <span
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="Facebook"
        >
          <FaFacebook />
        </span>
        <span
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </span>
        <span
          className="text-slate-200 hover:text-accent transition-colors duration-300 text-xl"
          aria-label="YouTube"
        >
          <FaYoutube />
        </span>
      </div>
      <p className="text-sm text-slate-300 mb-3">Connect with us on social media</p>
      <p className="text-slate-400 text-sm">&copy; 2026 Abide Church. All rights reserved.</p>
    </footer>
  );
}
