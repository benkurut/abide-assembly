/**
 * Core Values Section - PAGE 3: Beliefs
 * Displays the 11 core values that define Abide Assembly of God
 */
import { motion } from 'framer-motion';

export default function CoreValues() {
  const values = [
    {
      title: 'Seek God First',
      scripture: 'Matthew 6:33',
      description: 'We prioritize our relationship with God above all else, seeking His kingdom and His righteousness in every decision and season of life.',
    },
    {
      title: 'Meditate on His Word',
      scripture: 'Joshua 1:8',
      description: 'We are committed to studying, memorizing, and meditating on Scripture, allowing God\'s Word to transform our hearts and minds.',
    },
    {
      title: 'Worship Him Alone',
      scripture: 'Exodus 20:3',
      description: 'Our worship is reserved for God alone. We gather to exalt Jesus, honor the Holy Spirit, and glorify the Father with authentic devotion.',
    },
    {
      title: 'Pray Without Ceasing',
      scripture: '1 Thessalonians 5:17',
      description: 'We believe in the power of prayer and maintain a posture of constant intercession for our families, church, city, and world.',
    },
    {
      title: 'Serve & Love Your Neighbor',
      scripture: 'Matthew 22:37-40',
      description: 'We demonstrate Christ\'s love through acts of service, compassion, and generosity toward those in our community and beyond.',
    },
    {
      title: 'Anointed by the Holy Spirit',
      scripture: 'Acts 1:8',
      description: 'We rely on the empowerment and gifting of the Holy Spirit to accomplish God\'s purpose and reach people with the gospel.',
    },
    {
      title: 'Building Lasting Relationships',
      scripture: '1 Thessalonians 5:11',
      description: 'We foster genuine community, vulnerability, and accountability among believers, walking alongside one another in faith and truth.',
    },
    {
      title: 'Disciple Making',
      scripture: 'Matthew 28:19-20',
      description: 'We are committed to helping others grow spiritually, multiply their faith, and pass on the gospel to the next generation.',
    },
    {
      title: 'Humility, Accountability & Sacrifice',
      scripture: 'Philippians 2:3-5',
      description: 'We walk humbly before God and one another, submit to accountability, and willingly sacrifice personal comfort for God\'s kingdom.',
    },
    {
      title: 'Spiritual Mentorship',
      scripture: '2 Timothy 2:2',
      description: 'We invest in discipling the next generation through mentorship, leadership development, and intentional spiritual guidance.',
    },
    {
      title: 'Missional Living',
      scripture: 'Matthew 5:14-16',
      description: 'We live with a kingdom mindset, recognizing that our lives are a mission field and seeking to reach the lost with Christ\'s love.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto my-20 px-4"
      id="beliefs"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-accent text-5xl md:text-5xl font-display font-bold mb-6 tracking-tight">
          Our Core Values
        </h2>
        <p className="text-slate-700 text-lg max-w-3xl mx-auto leading-relaxed">
          These 11 values form the spiritual foundation of Abide Assembly of God. They guide our decisions, shape our culture, and define how we live out our faith together as a community.
        </p>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8 hover:border-white/30 hover:bg-white/15 transition-all duration-300 flex flex-col h-full"
            variants={itemVariants}
          >
            <div className="flex-1">
              <h3 className="text-accent text-xl font-display font-bold mb-2 tracking-tight">
                {value.title}
              </h3>
              <p className="text-accent/70 text-sm font-semibold mb-4">
                {value.scripture}
              </p>
              <p className="text-slate-700 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <a
                href={`https://www.biblegateway.com/passage/?search=${encodeURIComponent(value.scripture)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-xs font-semibold hover:text-accent/80 transition-colors duration-200"
              >
                Read Scripture →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-12 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-accent text-3xl font-display font-bold mb-4 tracking-tight">
          Living Out These Values
        </h3>
        <p className="text-slate-700 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          These values aren't just words on a page—they are lived out daily through our worship, service, relationships, and mission. We invite you to join us as we pursue Christ together and seek to make a kingdom impact in Northeast Ohio and beyond.
        </p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-accent text-[#292e3d] font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect With Us
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
