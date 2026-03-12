/**
 * Main App Component
 * Abide Church Website - Willoughby, Ohio
 */
import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Founders from './sections/Founders';
import MediaSection from './sections/MediaSection';
import Contact from './sections/Contact';
import WaitingPage from './sections/WaitingPage';
import Ministries from './sections/Ministries';
import Giving from './sections/Giving';
import Footer from './components/Footer';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <main className="py-10 px-4">
        <About />
        <Events />
        <Ministries />
        <Founders />
        <MediaSection />
        <Giving />
        <WaitingPage />
        <Contact />
        <Footer />
      </main>
    </MainLayout>
  );
}
