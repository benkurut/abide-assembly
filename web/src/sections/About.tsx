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
      className="max-w-5xl mx-auto my-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-12 md:p-16"
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
        About Abide Assembly of God
      </motion.h2>

      <motion.div
        className="text-center mb-10 space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="bg-accent/20 border border-accent/30 rounded-xl p-6 mb-6" variants={itemVariants}>
          <h3 className="text-accent text-2xl font-bold mb-2">🎉 Official Launch: May 24th, 2026</h3>
          <p className="text-slate-700">Join us for our first service and the beginning of our journey together!</p>
        </motion.div>
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
        <motion.div className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300" variants={itemVariants}>
          <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Vision</h4>
          <p className="text-slate-700 leading-relaxed">
            To inspire and guide all people to seek the truth that sets them free and leads to abundant life, found only in and through Jesus Christ.
          </p>
        </motion.div>

        <motion.div className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300" variants={itemVariants}>
          <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Mission</h4>
          <p className="text-slate-700 leading-relaxed">
            Our mission is to Love God and Love People. To be a Bible-based, Christ-centered, and Spirit-led community that welcomes all people with love, compassion, and grace. We strive to nurture spiritual growth, foster authentic relationships, and serve our neighbors with love, humility, and generosity. Through worship, discipleship, and outreach, we seek to reflect Christ's love in the world, transforming lives for His glory.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-accent text-3xl font-display font-bold mb-8 text-center tracking-tight">Our Story</h3>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            Pastor Ben and Anu Kurut's journey began in India, where they grew up in Hindu families. After moving to the United States, they encountered Jesus Christ and experienced a profound transformation. In 2010, they were baptized in Albany, New York, marking the beginning of their walk with the Lord.
          </p>
          <p>
            For many years, they served faithfully at Bethel Pentecostal Church (BPC) in Albany, growing in their faith and ministry. In 2013, God blessed them with their daughter, Athira, who became a source of immense joy and purpose in their lives.
          </p>
          <p>
            In 2021, Pastor Ben faced a life-threatening challenge when he suffered a brain aneurysm. Through prayer, medical intervention, and God's healing grace, he made a remarkable recovery, strengthening their faith and calling to ministry.
          </p>
          <p>
            The years 2022-2023 brought another trial as they navigated complex passport issues that tested their resolve and trust in God's timing. Despite these challenges, their commitment to serving the Lord remained unwavering.
          </p>
          <p>
            In 2024-2025, after years of prayerful preparation and seeking God's direction, they received approval to plant Abide Assembly of God. What began as a vision has now become reality, and we are excited to launch our first service on May 24th, 2026.
          </p>
          <p>
            Today, Abide Assembly of God stands as a testament to God's faithfulness and the power of perseverance. We invite you to join us as we worship, grow, and serve together in our community.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
