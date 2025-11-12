import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Menu />
      <Experience />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
