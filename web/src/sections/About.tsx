/**
 * About Section - PAGE 2
 * Displays Who We Are, Vision, Mission, and Pastor Ben & Anu Kurut's Story
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

      {/* Who We Are */}
      <motion.div
        className="text-center mb-14 space-y-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h3 className="text-accent text-3xl font-display font-bold tracking-tight" variants={itemVariants}>
          Who We Are
        </motion.h3>
        <motion.p className="text-base leading-relaxed text-slate-700 max-w-3xl mx-auto" variants={itemVariants}>
          Abide Assembly of God is a Spirit-led, Bible-based, Christ-centered church located in Willoughby Hills, Ohio. We are a diverse, multicultural community of believers passionate about worshiping God, growing in His Word, and serving our neighbors with love and humility.
        </motion.p>
        <motion.p className="text-base leading-relaxed text-slate-700 max-w-3xl mx-auto" variants={itemVariants}>
          Our name is drawn from John 15, where Jesus calls to abide in Him as branches abide in the vine. We believe that apart from Him, we can do nothing. But rooted in Him, we bear much fruit.
        </motion.p>
        <motion.p className="text-base leading-relaxed text-slate-700 max-w-3xl mx-auto" variants={itemVariants}>
          We are affiliated with the Assemblies of God and launched with the prayerful support of our parent church, Calvary Assembly of God.
        </motion.p>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        className="space-y-6 mb-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300" variants={itemVariants}>
          <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Our Vision</h4>
          <p className="text-slate-700 leading-relaxed">
            To inspire and guide all people to seek the truth that brings abundant life, found only in and through Jesus Christ.
          </p>
        </motion.div>

        <motion.div className="backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300" variants={itemVariants}>
          <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Our Mission</h4>
          <p className="text-slate-700 leading-relaxed">
            Our mission is to Love God and Love People. We are a Bible-based, Christ-centered, and Spirit-led community that welcomes all people with love, compassion, and grace. We strive to nurture spiritual growth, foster authentic relationships, and serve our neighbors with love, humility, and generosity. Through worship, discipleship, and outreach, we seek to reflect Christ's love in the world, transforming lives for His glory.
          </p>
        </motion.div>
      </motion.div>

      {/* Our Story */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-accent text-3xl font-display font-bold mb-8 text-center tracking-tight">Our Story - Pastor Ben & Anu Kurut</h3>
        <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
          <p>
            Pastor Ben Kurut was born and raised in India and moved to the United States in March 2009. His wife, Anupama Jadhav, who came from a Hindu background, came to know Christ as her personal Lord and Savior after their marriage in December 2008. She later joined him in the US in December 2009. Together, they made Albany, New York, their home for only a few months. In what can only be described as a miraculous encounter, they were introduced to an Assemblies of God church through a friend they met online. On April 25, 2010, both Ben and Anu were baptized in Albany, a defining moment in their spiritual journey.
          </p>
          <p>
            Later that year, they relocated to New York City, where they became part of Bethlehem Punjabi Church (BPC). There, they quietly and faithfully served—Anu leading worship in Punjabi, Ben serving in sound and media ministry. This season was the seedbed of deep spiritual transformation.
          </p>
          <p>
            In 2013, God blessed them with a daughter, Athira, whose name is derived from a Hebrew word meaning "prayer." That same year, at just 29 years old, Ben was invited to serve on the church board. He accepted and served faithfully for three years. During this time, he was also part of launching a young adult ministry called Young Trailblazers and was given the privilege of teaching membership and baptism classes, something he had never imagined for himself.
          </p>
          <p>
            In 2018, when Ben lost his job in New York, God opened an unexpected door: a move to Cleveland, Ohio. What felt like a disruption soon revealed itself as a divine redirection. As they settled into Cleveland, God moved their hearts by the city's remarkable diversity—people from many nations, cultures, and backgrounds, side by side. Their hearts were stirred. The nations had come to them.
          </p>
          <p>
            Through prayer and a providential Sunday morning decision, they found Calvary Assembly of God. Pastor Dan DeLembo's sermon on destiny that day spoke directly to Ben's heart. Together, Pastor Ben and Anu sensed that Cleveland was home.
          </p>
          <p>
            God then opened the door for biblical and theological training through the Ohio School of Ministry, and the vision of church planting began to take shape—a church that would reflect the beautiful diversity around them and welcome people from every culture and nation.
          </p>
          <p>
            The road was not without hardship. In 2021, Anu suffered a ruptured brain aneurysm—18 days in the ICU, five days on a ventilator, a stroke, heart complications, and temporarily lost feeling in her right hand. It was a near-death experience. Yet by God's mercy and grace, she was completely healed and restored supernaturally.
          </p>
          <p>
            In 2022, what began as a two-month trip to India to visit family after 13 years turned into a 14-month ordeal when Ben's passport was held by the U.S. Consulate without explanation. Their daughter, a U.S. citizen, lost a full year of school. Ben lost his job. Their church and many friends stood faithfully by them, praying and even supporting them financially throughout. When they returned to the United States in August 2023, Ben was offered his same position at the same company—a quiet reminder of God's unwavering faithfulness.
          </p>
          <p>
            In 2024, their church planting application was approved by the Ohio Ministry Network (OMN), with Calvary AG stepping up to be their parent planter. Beginning in September 2024, they joined a year-long cohort with other church planters. In February 2025, with the support of faithful friends willing to be part of God's vision for Abide, they began gathering on Saturdays for prayer and discernment. They have since served the community through Kids Summer Camp, International Student Outreach, Back-to-School Outreach, and Christmas Outreach.
          </p>
          <p>
            They are now preparing for an official church launch in 2026—confident that God, who began this work, is faithful to complete it.
          </p>
        </div>
      </motion.div>

      {/* Affiliation */}
      <motion.div
        className="mt-12 backdrop-blur-sm bg-white/10 rounded-xl p-8 border border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-accent text-2xl font-display font-bold mb-4 tracking-tight">Our Affiliation</h4>
        <p className="text-slate-700 leading-relaxed">
          Abide Assembly of God is a church plant of Calvary Assembly of God and is affiliated with the Assemblies of God.
        </p>
      </motion.div>
    </motion.section>
  );
}
