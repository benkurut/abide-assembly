/**
 * Contact Section
 * Prayer request form with validation and Web3Forms email integration
 */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast, Toaster } from 'sonner';
import { MdAccessTime, MdEmail, MdLocationOn, MdWbSunny } from 'react-icons/md';

const prayerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  prayer: z.string().min(10, 'Prayer request must be at least 10 characters').max(1000),
});

type PrayerFormData = z.infer<typeof prayerSchema>;

interface WeatherData {
  temperature: number;
  windSpeed: number;
  code: number;
}

const serviceTimes = ['Sunday 10 AM EST'];
const mapQuery = 'Willoughby, OH';
const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=41.6398&longitude=-81.4065&current_weather=true&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America/New_York';

const weatherDescriptions: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mostly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Rime fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Heavy showers',
  82: 'Violent showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Severe thunderstorm',
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PrayerFormData>({
    resolver: zodResolver(prayerSchema),
  });

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherError, setWeatherError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(weatherUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Weather response not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (!isMounted || !data?.current_weather) return;
        setWeather({
          temperature: data.current_weather.temperature,
          windSpeed: data.current_weather.windspeed,
          code: data.current_weather.weathercode,
        });
      })
      .catch(() => {
        if (isMounted) {
          setWeatherError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

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
        className="max-w-5xl mx-auto my-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg p-12 md:p-16"
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
          className="max-w-md mx-auto backdrop-blur-sm bg-white/10 rounded-xl shadow-lg p-8 mb-12 border border-white/20"
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
              className="w-full px-4 py-2.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white/15 text-slate-800 placeholder-slate-600 transition-all"
            />
            {errors.name && <p className="text-amber-300 text-sm mt-2 font-medium">{errors.name.message}</p>}
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email')}
              className="w-full px-4 py-2.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white/15 text-slate-800 placeholder-slate-600 transition-all"
            />
            {errors.email && <p className="text-amber-300 text-sm mt-2 font-medium">{errors.email.message}</p>}
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Prayer Request</label>
            <textarea
              placeholder="Share your prayer request with us..."
              rows={4}
              {...register('prayer')}
              className="w-full px-4 py-2.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent focus:bg-white/15 text-slate-800 placeholder-slate-600 resize-none transition-all"
            />
            {errors.prayer && <p className="text-amber-300 text-sm mt-2 font-medium">{errors.prayer.message}</p>}
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
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="backdrop-blur-sm bg-white/10 rounded-xl shadow-lg p-8 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-5">
              <MdLocationOn className="text-accent text-3xl" />
              <h3 className="text-xl font-semibold text-slate-900">Visit Us</h3>
            </div>
            <p className="text-slate-700 mb-6">{mapQuery}</p>

            <div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
              <MdAccessTime className="text-accent text-2xl" />
              Service Times
            </div>
            <ul className="text-slate-700 mb-6 space-y-1">
              {serviceTimes.map((time) => (
                <li key={time}>{time}</li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-3 text-slate-900 font-semibold">
              <MdWbSunny className="text-accent text-2xl" />
              Current Weather
            </div>
            {weather ? (
              <div className="text-slate-700">
                <p className="text-2xl font-semibold text-primary">
                  {Math.round(weather.temperature)}°F
                </p>
                <p className="text-sm">
                  {weatherDescriptions[weather.code] || 'Current conditions'} · Wind {Math.round(weather.windSpeed)} mph
                </p>
              </div>
            ) : (
              <p className="text-slate-600 text-sm">
                {weatherError ? 'Weather unavailable right now.' : 'Loading weather...'}
              </p>
            )}
          </motion.div>

          <motion.div
            className="backdrop-blur-sm bg-white/10 rounded-xl shadow-lg overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300"
            variants={itemVariants}
          >
            <iframe
              title="Abide Church location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-72 md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-1 gap-8 max-w-md mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="backdrop-blur-sm bg-white/10 rounded-xl shadow-lg p-8 flex items-start gap-5 border border-white/20 hover:border-white/30 hover:bg-white/15 transition-all duration-300"
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
