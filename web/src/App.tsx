/**
 * Main App Component
 * Abide Church Website - Willoughby, Ohio
 */
import { lazy, Suspense } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './sections/Hero';

const About = lazy(() => import('./sections/About'));
const Events = lazy(() => import('./sections/Events'));
const Founders = lazy(() => import('./sections/Founders'));
const MediaSection = lazy(() => import('./sections/MediaSection'));
const Contact = lazy(() => import('./sections/Contact'));
const WaitingPage = lazy(() => import('./sections/WaitingPage'));
const Ministries = lazy(() => import('./sections/Ministries'));
const Giving = lazy(() => import('./sections/Giving'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <main className="py-10 px-4">
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <About />
          <Events />
          <Ministries />
          <Founders />
          <MediaSection />
          <Giving />
          <WaitingPage />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </MainLayout>
  );
}
