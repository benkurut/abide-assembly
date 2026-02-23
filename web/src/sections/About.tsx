/**
 * About Section
 * Displays information about Abide Church's mission and values
 */
import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="max-w-5xl mx-auto my-20 bg-white/95 backdrop-blur rounded-2xl shadow-sm p-12 md:p-16"
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-accent text-5xl md:text-5xl font-display font-bold mt-0 mb-8 text-center tracking-tight"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Abide Church
      </motion.h2>

      <motion.div
        className="text-center mb-10 space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.p className="text-lg italic text-accent leading-relaxed" variants={itemVariants}>
          Jesus says in John 14:6, "I am the way, and the truth, and the life. No one comes to the Father except through me."
        </motion.p>
        <motion.p className="text-base leading-relaxed text-slate-700 max-w-3xl mx-auto" variants={itemVariants}>
          We the church, exist to help everyone seek the truth that will set them free, leads them to eternal life, and gives them the abundant life that comes by receiving Jesus Christ as their Lord and Savior.
        </motion.p>
      </motion.div>

      <motion.h3
        className="text-accent text-3xl font-display font-bold mt-12 mb-10 text-center tracking-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Love God, Love People
      </motion.h3>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="bg-slate-50 rounded-xl p-8 border border-slate-100" variants={itemVariants}>
          <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Vision</h4>
          <p className="text-slate-700 leading-relaxed">
            To inspire and guide all people to seek the truth that sets them free and leads to abundant life, found only in and through Jesus Christ.
          </p>
        </motion.div>

        <motion.div className="bg-slate-50 rounded-xl p-8 border border-slate-100" variants={itemVariants}>
          <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Mission</h4>
          <p className="text-slate-700 leading-relaxed">
            Our mission is to Love God and Love People. To be a Bible-based, Christ-centered, and Spirit-led community that welcomes all people with love, compassion, and grace. We strive to nurture spiritual growth, foster authentic relationships, and serve our neighbors with love, humility, and generosity. Through worship, discipleship, and outreach, we seek to reflect Christ's love in the world, transforming lives for His glory.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
