/**
 * Contact Section
 * Prayer request form with validation and Web3Forms email integration
 */
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { MdEmail } from 'react-icons/md';

const prayerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  prayer: z.string().min(10, 'Prayer request must be at least 10 characters').max(1000),
});

type PrayerFormData = z.infer<typeof prayerSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PrayerFormData>({
    resolver: zodResolver(prayerSchema),
  });

  const onSubmit = async (data: PrayerFormData) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9fa9da44-13f5-4b73-b546-b1c001353680',
          subject: `Prayer Request from ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.prayer,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(`Thank you ${data.name}! Your prayer request has been sent.`);
        reset();
      } else {
        toast.error('Failed to submit prayer request. Please try calling us directly.');
      }
    } catch (error) {
      console.error('Prayer request error:', error);
      toast.error('Failed to submit prayer request. Please try calling us directly.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Toaster position="top-center" />
      <motion.section
        className="max-w-5xl mx-auto my-20 bg-slate-50/95 backdrop-blur rounded-2xl shadow-sm p-12 md:p-16"
        id="contact"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-accent text-5xl md:text-5xl font-display font-bold mt-0 mb-4 text-center tracking-tight"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Prayer Requests
        </motion.h2>

        <motion.p
          className="text-center text-slate-700 mb-12 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We care about you and your journey. Share your prayer request below, and our team will intercede for you.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto bg-white rounded-xl shadow-sm p-8 mb-12 border border-slate-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register('name')}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-800 transition-all"
            />
            {errors.name && <p className="text-amber-600 text-sm mt-2 font-medium">{errors.name.message}</p>}
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email')}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-800 transition-all"
            />
            {errors.email && <p className="text-amber-600 text-sm mt-2 font-medium">{errors.email.message}</p>}
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Prayer Request</label>
            <textarea
              placeholder="Share your prayer request with us..."
              rows={4}
              {...register('prayer')}
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-slate-800 resize-none transition-all"
            />
            {errors.prayer && <p className="text-amber-600 text-sm mt-2 font-medium">{errors.prayer.message}</p>}
          </motion.div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-primary font-semibold py-3 rounded-lg hover:shadow-md hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            variants={itemVariants}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Prayer Request'}
          </motion.button>
        </motion.form>

        <motion.div
          className="grid md:grid-cols-1 gap-8 max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-sm p-8 flex items-start gap-5 border border-slate-100 hover:shadow-md transition-shadow"
            variants={itemVariants}
          >
            <MdEmail className="text-accent text-3xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <a href="mailto:benkurut@gmail.com" className="text-accent font-semibold hover:opacity-80 transition-opacity">
                benkurut@gmail.com
              </a>
              <p className="text-sm text-slate-600 mt-2">Ben & Anu Kurut</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-12 text-center text-slate-700 leading-relaxed italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          "Cast all your anxiety on Him because He cares for you."<br />
          <span className="text-accent font-medium">— 1 Peter 5:7</span>
        </motion.p>
      </motion.section>
    </>
  );
}
