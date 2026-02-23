/**
 * WelcomeModal Component
 * Displays a friendly welcome message on page load
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Check if user has already seen the welcome modal
    const hasSeenWelcome = localStorage.getItem('abide-welcome-seen');
    if (hasSeenWelcome) {
      setIsOpen(false);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('abide-welcome-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-11/12 max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary via-primary to-secondary text-white p-8 text-center relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <MdClose className="text-2xl" />
                </button>

                <h2 className="text-3xl font-display font-bold mt-2 mb-4 tracking-tight">
                  Welcome to Abide
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Welcome to our faith community! We're delighted you're here. Explore our church, connect with our ministries, and join us on a journey of faith, freedom, and family.
                </p>
                <div className="text-sm text-white/75 italic mb-6">
                  "Come to me, all you who are weary and burdened, and I will give you rest." — Matthew 11:28
                </div>

                <button
                  onClick={handleClose}
                  className="w-full bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Let's Explore
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
