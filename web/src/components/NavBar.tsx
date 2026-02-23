/**
 * NavBar Component
 * Top navigation bar with church branding and quick links
 */
import { MdHome } from 'react-icons/md';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm px-4 md:px-8 py-4 sticky top-0 z-50 border-b border-slate-100">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <MdHome className="text-primary text-2xl" />
          <span className="text-2xl font-display font-bold text-primary tracking-tight">Abide</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-2">
        <a
          href="#founders"
          className="text-xs md:text-sm px-3 md:px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
        >
          Founders
        </a>
        <a
          href="#events"
          className="text-xs md:text-sm px-3 md:px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
        >
          Events
        </a>
        <a
          href="#about"
          className="text-xs md:text-sm px-3 md:px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#media"
          className="text-xs md:text-sm px-3 md:px-4 py-2 text-primary hover:bg-primary/5 rounded-lg transition-colors duration-300"
        >
          Message
        </a>
        <a
          href="#contact"
          className="text-xs md:text-sm px-3 md:px-4 py-2 bg-accent text-primary rounded-lg hover:shadow-md transition-all duration-300 font-semibold"
        >
          Prayer Request
        </a>
        </div>
      </div>
    </nav>
  );
}
