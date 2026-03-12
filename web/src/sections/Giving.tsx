/**
 * Giving Section
 * Information about giving and supporting the ministry
 */
import { motion } from 'framer-motion';
import { MdVolunteerActivism, MdTrendingUp, MdGroups, MdHeartBroken } from 'react-icons/md';
import { Accordion } from '../components/Accordion';

const givingImpact = [
  {
    id: 'community',
    title: 'Community Outreach',
    description: 'Your giving supports our community programs, food drives, and assistance to those in need.',
    icon: MdGroups,
  },
  {
    id: 'ministry',
    title: 'Ministry Growth',
    description: 'Through your generosity, we expand our children\'s, women\'s, and men\'s ministries.',
    icon: MdTrendingUp,
  },
  {
    id: 'missions',
    title: 'Local & Global Missions',
    description: 'Your contributions help us support mission work and serve beyond our congregation.',
    icon: MdVolunteerActivism,
  },
  {
    id: 'care',
    title: 'Care & Support',
    description: 'We help church members during times of crisis, grief, and transition.',
    icon: MdHeartBroken,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Giving() {
  return (
    <motion.section
      className="max-w-6xl mx-auto my-20 px-4"
      id="giving"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
          <MdVolunteerActivism className="text-lg" />
          Giving & Support
        </div>
        <h2 className="text-accent text-5xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight text-white" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'}}>
          Give with Purpose
        </h2>
        <p className="text-slate-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Giving is an act of worship and faith. When you give to Abide Church, your generosity directly impacts lives and strengthens our community's ability to fulfill God's mission.
        </p>
      </motion.div>

      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        <Accordion
          items={givingImpact.map((impact) => {
            const IconComponent = impact.icon;
            return {
              id: impact.id,
              title: impact.title,
              preview: impact.description,
              children: (
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="text-accent text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-primary mb-2 tracking-tight">
                        {impact.title}
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {impact.description}
                      </p>
                      <p className="text-sm text-slate-600 mt-3">
                        Your generous giving directly enables this ministry and creates lasting impact in our community.
                      </p>
                    </div>
                  </div>
                </div>
              ),
            };
          })}
          allowMultiple={true}
        />
      </motion.div>

      <motion.div
        className="bg-gradient-to-br from-primary via-primary to-secondary text-white rounded-2xl p-12 md:p-16 text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
          Ways to Give
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <motion.div className="bg-white/10 backdrop-blur rounded-xl p-6" variants={item}>
            <h4 className="font-semibold text-xl mb-3">During Service</h4>
            <p className="text-white/90">Offerings are welcomed during our Sunday worship gatherings.</p>
          </motion.div>

          <motion.div className="bg-white/10 backdrop-blur rounded-xl p-6" variants={item}>
            <h4 className="font-semibold text-xl mb-3">Online Transfer</h4>
            <p className="text-white/90">Set up secure online giving through our mobile app or website.</p>
          </motion.div>

          <motion.div className="bg-white/10 backdrop-blur rounded-xl p-6" variants={item}>
            <h4 className="font-semibold text-xl mb-3">Contact Us</h4>
            <p className="text-white/90">Reach out to discuss special gifts or planned giving opportunities.</p>
          </motion.div>
        </div>

        <motion.p
          className="text-white/85 mb-8 text-lg italic leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."<br />
          <span className="text-accent font-semibold">— 2 Corinthians 9:7</span>
        </motion.p>

        <motion.a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Have Questions? Get in Touch
        </motion.a>
      </motion.div>

      <motion.div
        className="mt-16 bg-slate-50 rounded-xl p-10 border border-slate-200"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-display font-bold text-primary mb-4 tracking-tight">
          Transparency & Trust
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Abide Church is committed to stewardship and transparency. All contributions are tax-deductible and used according to church governance principles. We believe in handling your generosity with integrity and honor, ensuring every dollar serves God's purpose in our community and beyond.
        </p>
      </motion.div>
    </motion.section>
  );
}
