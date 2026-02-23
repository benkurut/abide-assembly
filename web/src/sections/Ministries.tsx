/**
 * Ministries Section
 * Displays our church's key ministry areas
 */
import { motion } from 'framer-motion';
import { MdPeople, MdFemale, MdMale } from 'react-icons/md';

const ministries = [
  {
    id: 'childrens',
    name: "Children's Ministry",
    icon: MdPeople,
    description: "Our children's ministry is dedicated to providing a safe, loving, and engaging environment where young hearts can learn about Jesus in age-appropriate ways. Through activities, games, and biblical lessons, we help children grow in faith and develop a deep connection with God.",
    values: ['Safe & Nurturing', 'Bible-Focused', 'Fun & Engaging', 'Spiritual Growth'],
  },
  {
    id: 'womens',
    name: "Women's Ministry",
    icon: MdFemale,
    description: "Our women's ministry creates a space for connection, growth, and encouragement. We gather for Bible studies, prayer, fellowship, and service opportunities, supporting one another in our walks with Christ and helping each other navigate life's challenges with faith and wisdom.",
    values: ['Community & Fellowship', 'Spiritual Maturity', 'Mutual Support', 'Life Application'],
  },
  {
    id: 'mens',
    name: "Men's Ministry",
    icon: MdMale,
    description: "Our men's ministry empowers men to be strong leaders in their faith, families, and communities. Through men's groups, accountability partnerships, and service opportunities, we encourage spiritual depth, integrity, and a commitment to living out Christ's teachings in every area of life.",
    values: ['Leadership', 'Accountability', 'Godly Character', 'Community Service'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Ministries() {
  return (
    <motion.section
      className="max-w-6xl mx-auto my-20 px-4"
      id="ministries"
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
          <MdPeople className="text-lg" />
          Our Ministries
        </div>
        <h2 className="text-accent text-5xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight text-white" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'}}>
          Growing Together in Faith
        </h2>
        <p className="text-slate-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Each ministry at Abide Church is designed to help our community members grow spiritually, build meaningful relationships, and live out God's purpose for their lives.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {ministries.map((ministry) => {
          const IconComponent = ministry.icon;
          return (
            <motion.div
              key={ministry.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={item}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <IconComponent className="text-accent text-3xl" />
              </div>

              <h3 className="text-2xl font-display font-bold text-primary mb-3 tracking-tight">
                {ministry.name}
              </h3>

              <p className="text-slate-700 leading-relaxed mb-6">
                {ministry.description}
              </p>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900 mb-3">Key Values</p>
                {ministry.values.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm text-slate-700">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        className="mt-16 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-10 md:p-14 text-center border border-accent/20"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="text-2xl font-display font-bold text-primary mb-4 tracking-tight">
          Get Involved
        </h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Want to join a ministry? We'd love to have you! Reach out to us through our prayer request form or contact us directly to learn more about getting involved.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-accent text-primary px-7 py-3 rounded-lg font-semibold hover:shadow-md transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.section>
  );
}
