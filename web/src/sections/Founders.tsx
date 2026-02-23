/**
 * Founders Section
 * Displays information about the founding pastors Ben & Anu and their daughter Athira
 */
import { motion } from 'framer-motion';

export default function Founders() {
  const photoUrl = `${import.meta.env.BASE_URL}PHOTO-2025-12-15-09-49-35.jpg`;

  return (
    <motion.section
      className="max-w-5xl mx-auto my-20 bg-slate-50/95 backdrop-blur rounded-2xl shadow-sm p-12 md:p-16 flex flex-col items-center"
      id="founders"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-accent text-5xl md:text-5xl font-display font-bold mt-0 mb-12 tracking-tight"
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Meet The Kurut's
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <motion.img
          src={photoUrl}
          alt="Ben, Anu, and Athira Kurut - Founders of Abide Church"
          className="w-56 md:w-72 h-auto rounded-2xl shadow-md object-cover transition-transform duration-300 hover:shadow-lg hover:scale-105"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="max-w-md space-y-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <h3 className="text-3xl font-display font-bold text-accent mb-2 tracking-tight">Ben & Anu Kurut</h3>
            <p className="text-sm text-slate-600 font-medium mb-4">Founding Pastors</p>
            <p className="text-base leading-relaxed text-slate-700">
              Ben and Anu Kurut are the founding pastors of Abide, a welcoming church in Willoughby, Ohio. Their vision is to help people find faith, freedom, and family in Christ. They are passionate about serving the community and nurturing spiritual growth through Bible-based teaching, authentic relationships, and compassionate ministry.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-2xl font-display font-bold text-accent mb-2 tracking-tight">Athira</h4>
            <p className="text-base leading-relaxed text-slate-700">
              Their only daughter, Athira, is a joyful part of the Abide family and brings energy and warmth to our community.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
