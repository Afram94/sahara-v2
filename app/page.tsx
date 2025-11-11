import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Menu />
      <Gallery />
    </main>
  );
}
