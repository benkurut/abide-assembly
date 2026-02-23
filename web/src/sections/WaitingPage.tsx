/**
 * Waiting Page Component
 * Temporary launch date and waiting page for upcoming features
 */
import { motion } from 'framer-motion';
import { MdDateRange, MdNotifications } from 'react-icons/md';

export default function WaitingPage() {
  const launchDate = new Date('2026-03-01'); // Adjust as needed
  const now = new Date();
  const daysLeft = Math.ceil((launchDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section className="max-w-5xl mx-auto my-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-sm p-12 md:p-16">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-3 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <MdNotifications className="text-lg" />
          Coming Soon
        </div>

        <motion.h2
          className="text-accent text-5xl md:text-5xl font-display font-bold mt-4 mb-6 tracking-tight text-white"
          style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'}}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Exciting Updates Ahead
        </motion.h2>

        <motion.p
          className="text-lg text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're preparing something special for our community. Stay tuned for new features, ministries, and ways to connect with Abide Church.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white rounded-xl p-8 shadow-md"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-primary text-2xl font-bold">
              <MdDateRange />
              {daysLeft} Days
            </div>
            <p className="text-slate-600 text-sm">Until Launch</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200" />
          <div className="text-center">
            <div className="text-accent text-2xl font-bold mb-2">
              {launchDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <p className="text-slate-600 text-sm">Launch Date</p>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 text-slate-600 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "Wait for the Lord; be strong and take heart and wait for the Lord." — Psalm 27:14
        </motion.p>
      </motion.div>
    </section>
  );
}
