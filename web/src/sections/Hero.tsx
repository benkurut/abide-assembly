/**
 * Hero Section
 * Main welcome section with church tagline and call-to-action buttons
 */
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white text-center py-28 px-5 rounded-b-3xl overflow-hidden">
      <motion.h1
        className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Welcome to Abide Church
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
      >
        A Christ-centered community in Willoughby, Ohio. Find faith, freedom, and family with us.
      </motion.p>
      <motion.p
        className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
        You are expected here—a divine appointment. Rooted in Christ, open to every nation, walking together in grace. Whether you're taking your first step toward faith or seeking a deeper connection, there is a place for you at the table.
      </motion.p>
      <motion.p
        className="text-xl md:text-2xl text-accent font-semibold mt-8 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
      >
        Remain in Him. Grow in Grace. Experience Life.
      </motion.p>
      
      {/* Daily Bible Verse */}
      <motion.div 
        className="backdrop-blur-md bg-white/20 rounded-2xl p-8 max-w-3xl mx-auto mt-12 border border-white/30 shadow-2xl hover:bg-white/25 transition-all duration-300"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3">
          Daily Verse
        </h3>
        <blockquote className="text-lg md:text-xl text-white leading-relaxed italic mb-4">
          "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
        </blockquote>
        <p className="text-right text-sm font-semibold text-white/80">
          — John 3:16 (NIV)
        </p>
      </motion.div>
    </section>
  );
}
