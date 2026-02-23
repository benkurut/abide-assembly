/**
 * MediaSection
 * Embeds the latest sermon/message from YouTube
 */
import { motion } from 'framer-motion';

export default function MediaSection() {
  return (
    <motion.section
      className="max-w-5xl mx-auto my-20 bg-white/95 backdrop-blur rounded-2xl shadow-sm p-12 md:p-16 text-center"
      id="media"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-accent text-5xl md:text-5xl font-display font-bold mt-0 mb-10 tracking-tight"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Latest Message
      </motion.h2>

      <motion.div
        className="flex justify-center rounded-xl overflow-hidden shadow-md"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/embed/V9tsrAli5no"
          title="Latest Message"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="max-w-3xl"
        />
      </motion.div>
    </motion.section>
  );
}
