'use client';

import { useState } from 'react';
import IntroLoader from './IntroLoader';
import Hero from './Hero';
import Menu from './Menu';
import Experience from './Experience';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Footer from './Footer';

export default function HomePageWrapper() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}
      <main className="relative">
        <Hero />
        <Menu />
        <Experience />
        <Gallery />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
