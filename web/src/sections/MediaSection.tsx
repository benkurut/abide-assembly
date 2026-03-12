/**
 * MediaSection
 * Embeds the latest sermon/message from YouTube
 * Enhanced with multiple recent sermons display
 */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdPlayCircleOutline } from 'react-icons/md';

interface Sermon {
  id: string;
  title: string;
  videoId: string;
  date: string;
}

// Featured sermons - Update these IDs with your actual YouTube video IDs
const recentSermons: Sermon[] = [
  {
    id: '1',
    title: 'Latest Message',
    videoId: 'V9tsrAli5no',
    date: 'Recent'
  },
  {
    id: '2',
    title: 'Previous Message',
    videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
    date: 'Last Week'
  },
  {
    id: '3',
    title: 'Sunday Service',
    videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
    date: '2 Weeks Ago'
  }
];

export default function MediaSection() {
  const [selectedVideo, setSelectedVideo] = useState(recentSermons[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="max-w-6xl mx-auto my-20 bg-white/95 backdrop-blur rounded-2xl shadow-sm p-12 md:p-16"
      id="media"
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
        Recent Messages
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Watch our latest sermons and teachings
      </motion.p>

      {/* Main Video Player */}
      <motion.div
        className="flex justify-center rounded-xl overflow-hidden shadow-lg mb-8"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-video"
        />
      </motion.div>

      {/* Video Playlist */}
      <motion.div
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {recentSermons.map((sermon) => (
          <motion.button
            key={sermon.id}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              selectedVideo.id === sermon.id
                ? 'ring-4 ring-accent shadow-lg'
                : 'hover:shadow-md hover:scale-105'
            }`}
            onClick={() => setSelectedVideo(sermon)}
            variants={itemVariants}
          >
            <div className="relative">
              <img
                src={`https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`}
                alt={sermon.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <MdPlayCircleOutline className="text-white text-5xl" />
              </div>
            </div>
            <div className="bg-white p-3 text-left">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-2">
                {sermon.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{sermon.date}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a
          href="https://www.youtube.com/@CHANNEL_NAME"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent font-semibold hover:underline"
        >
          <span>View all sermons on YouTube</span>
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </motion.section>
  );
}
