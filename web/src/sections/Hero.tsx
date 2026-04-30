/**
 * Hero Section
 * Main welcome section with church tagline and call-to-action buttons
 */
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white text-center py-24 px-5 rounded-b-3xl overflow-hidden">
      {/* Scripture Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-white/90 text-lg italic mb-3">John 15:4-5</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 leading-relaxed">
          "Abide in Me, and I in You… for apart from me you can do nothing."
        </h2>
      </motion.div>

      {/* Main Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        At Abide, We
      </motion.h1>

      {/* Core Values */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
          <p className="text-lg font-semibold text-accent">Abide in Christ</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
          <p className="text-lg font-semibold text-accent">Abide in One-Another</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
          <p className="text-lg font-semibold text-accent">Grow & Go</p>
        </div>
      </motion.div>

      {/* Subheadline */}
      <motion.p
        className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed mb-12"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
        Abide Church exists to help everyone seek the truth found in the person and work of Jesus Christ. A Bible-Based, Christ-Centered, and Spirit-Led church with a vision to serve the communities surrounding North-East Cleveland, OH.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
          Plan Your Visit <MdArrowForward className="text-lg" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/40">
          Watch Online <MdArrowForward className="text-lg" />
        </a>
        <a href="#" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/40">
          Get Connected <MdArrowForward className="text-lg" />
        </a>
      </motion.div>
    </section>
  );
}
