/**
 * Main App Component
 * Abide Church Website - Willoughby, Ohio
 */
import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Leaders from './sections/Leaders';
import CoreValues from './sections/CoreValues';
import Events from './sections/Events';
import MediaSection from './sections/MediaSection';
import Contact from './sections/Contact';
import Ministries from './sections/Ministries';
import Giving from './sections/Giving';
import Footer from './components/Footer';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <main className="py-10 px-4">
        <About />
        <Leaders />
        <CoreValues />
        <Events />
        <Ministries />
        <MediaSection />
        <Giving />
        <Contact />
        <Footer />
      </main>
    </MainLayout>
  );
}
