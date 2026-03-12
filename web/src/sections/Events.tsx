/**
 * Events Section
 * Highlights upcoming gatherings and community moments
 */
import { motion } from 'framer-motion';
import { MdEvent, MdFavorite } from 'react-icons/md';
import { Accordion } from '../components/Accordion';

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const events = [
  {
    id: 'valentines-2026',
    title: "Valentine's Day Lunch for Couples",
    date: '2026-02-07',
    image: `${import.meta.env.BASE_URL}Valentines2025.jpg`,
    summary:
      'Many couples are carrying the pressures of life, work, parenting, and the added weight of building a life in a new country. This luncheon creates a space to relax, connect, and feel welcome while kids are cared for. It’s something meaningful, practical, and full of God’s love made visible.',
    quote:
      'Our role is to serve with the heart of Christ, show kindness, listen well, build trust, and trust God to work in ways we cannot. Pray for divine moments to share hope, for conversations marked by compassion, and for the Spirit to lead each interaction.',
    note:
      "As Abide, we are called to abide in Him, both individually and as a team. Apart from Him, we can do nothing, but with God, all things are possible. We don’t rely on our effort or skill, but on God’s presence among us. Let’s approach this with humility, joy, and expectancy.",
  },
];

const startOfToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);

const parseEventDate = (dateString: string) => new Date(`${dateString}T00:00:00`);

const getRelativeLabel = (eventDate: Date) => {
  const today = startOfToday();
  const diffDays = Math.round((eventDate.getTime() - today.getTime()) / 86400000);

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';

  return formatDate(eventDate);
};

export default function Events() {
  const today = startOfToday();
  const upcomingEvents = events.filter((event) => parseEventDate(event.date) >= today);
  const pastEvents = events.filter((event) => parseEventDate(event.date) < today);

  return (
    <section id="events" className="max-w-6xl mx-auto py-14 px-4">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
          <MdEvent className="text-lg" />
          Events & Gatherings
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 drop-shadow-2xl" style={{textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'}}>Events at Abide</h2>
        <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
          Every event we host is a chance to love people well. This is where faith meets friendship,
          and where community becomes a place of care.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10"
      >
        {upcomingEvents.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-8 text-center text-slate-500">
            No upcoming events are scheduled right now. Check back soon!
          </div>
        ) : (
          <Accordion
            items={upcomingEvents.map((event) => {
              const eventDate = parseEventDate(event.date);
              return {
                id: event.id,
                title: event.title,
                preview: `${getRelativeLabel(eventDate)} • ${event.summary.substring(0, 60)}...`,
                children: (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                      <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <MdFavorite className="text-base" />
                        {event.title}
                      </span>
                      <span className="text-slate-500">{getRelativeLabel(eventDate)} • {formatDate(eventDate)}</span>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-60 md:h-72 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-slate-600 leading-relaxed">{event.summary}</p>
                    <blockquote className="border-l-4 border-accent pl-4 text-slate-600 italic">
                      &ldquo;{event.quote}&rdquo;
                    </blockquote>
                    <p className="text-slate-600 leading-relaxed">{event.note}</p>
                  </div>
                ),
              };
            })}
            allowMultiple={true}
          />
        )}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12"
      >
        <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">Previously Held Events</h3>
        {pastEvents.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-6 text-center text-slate-500">
            No past events yet.
          </div>
        ) : (
          <Accordion
            items={pastEvents.map((event) => {
              const eventDate = parseEventDate(event.date);
              return {
                id: `past-${event.id}`,
                title: event.title,
                preview: `${formatDate(eventDate)} • ${event.summary.substring(0, 60)}...`,
                children: (
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-primary">
                      <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <MdFavorite className="text-base" />
                        {event.title}
                      </span>
                      <span className="text-slate-500">{formatDate(eventDate)}</span>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 md:h-64 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-slate-600 leading-relaxed">{event.summary}</p>
                  </div>
                ),
              };
            })}
            allowMultiple={true}
          />
        )}
      </motion.div>
    </section>
  );
}
