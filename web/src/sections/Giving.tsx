/**
 * Giving Section
 * Information about giving and supporting the ministry
 */
import { motion } from 'framer-motion';
import { MdVolunteerActivism, MdQrCode, MdCardGiftcard } from 'react-icons/md';

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
          Partner With Us
        </div>
        <h2 className="text-accent text-5xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight text-white" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'}}>
          Give & Support
        </h2>
        <p className="text-slate-700 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          Your generosity makes it possible for us to worship, disciple, and serve our community. Every gift is an act of faith that helps Abide reach more people with the love of Jesus - here in Willoughby Hills and around the world.
        </p>
        <p className="text-white/85 text-lg italic leading-relaxed max-w-2xl mx-auto">
          "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          <br />
          <span className="text-accent font-semibold">— 2 Corinthians 9:7</span>
        </p>
      </motion.div>

      {/* Ways to Give */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { duration: 0.6, staggerChildren: 0.15 },
          },
        }}
      >
        {/* Online Giving */}
        <motion.div
          className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 border border-accent/30 hover:shadow-lg transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MdCardGiftcard className="text-accent text-3xl" />
            <h3 className="text-xl font-semibold text-primary">Online Giving</h3>
          </div>
          <p className="text-slate-700 mb-4">Securely give online through our partner platform. Set up one-time or recurring gifts.</p>
          <a href="https://tithe.ly/give" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent/80 transition-colors">
            Give Online →
          </a>
        </motion.div>

        {/* QR Code */}
        <motion.div
          className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 border border-accent/30 hover:shadow-lg transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MdQrCode className="text-accent text-3xl" />
            <h3 className="text-xl font-semibold text-primary">QR Code</h3>
          </div>
          <p className="text-slate-700 mb-4">Scan the QR code with your phone to quickly access our online giving page.</p>
          <div className="bg-white rounded-lg p-3 w-24 h-24 mx-auto">
            <img src={`${import.meta.env.BASE_URL}QR-giving.png`} alt="Giving QR Code" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* In Person */}
        <motion.div
          className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-8 border border-accent/30 hover:shadow-lg transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MdVolunteerActivism className="text-accent text-3xl" />
            <h3 className="text-xl font-semibold text-primary">In Person</h3>
          </div>
          <p className="text-slate-700 mb-4">Offering is received during our Sunday service at 4:00 PM.</p>
          <p className="text-sm text-slate-600">
            <strong>Service Time:</strong><br />Sundays at 4:00 PM<br />28870 Chardon Rd<br />Willoughby Hills, OH 44092
          </p>
        </motion.div>
      </motion.div>

      {/* Tax Deductible Info */}
      <motion.div
        className="bg-slate-50 rounded-xl p-10 border border-slate-200 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-display font-bold text-primary mb-3 tracking-tight">Tax-Deductible Giving</h3>
        <p className="text-slate-700 leading-relaxed">
          All gifts to Abide Assembly of God are tax-deductible. We are a registered 501(c)(3) nonprofit organization that falls under the umbrella of the Assemblies of God. Your generosity is handled with integrity and complete transparency.
        </p>
      </motion.div>
    </motion.section>
  );
}
