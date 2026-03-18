'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Users, UtensilsCrossed, Star, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const features = [
  {
    icon: Users,
    title: 'Privata Matsalar',
    description: 'Exklusiva utrymmen för 30–200 gäster, perfekta för alla typer av evenemang.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Anpassad Menyplanering',
    description: 'Arbeta direkt med vår kock för att skapa en skräddarsydd meny som passar ditt evenemang.',
  },
  {
    icon: Star,
    title: 'Fullservice Catering',
    description: 'Vi tar hand om allt – från mat och dryck till service och uppdukning.',
  },
];

const eventTypes = [
  {
    title: 'Företagsevent',
    description: 'Professionella middagar, konferensavslutningar och företagsfiranden i elegant miljö.',
    emoji: '🏢',
  },
  {
    title: 'Privata Fester',
    description: 'Bröllop, födelsdagsfiranden, jubileer och alla tillfällen som förtjänar det bästa.',
    emoji: '🎉',
  },
  {
    title: 'Intima Sammankomster',
    description: 'Familjemiddagar och mindre sällskap som vill njuta av en exklusiv upplevelse.',
    emoji: '🕯️',
  },
  {
    title: 'Catering Utomhus',
    description: 'Vi levererar vår kulinariska konst direkt till din plats för utomhusevenemang.',
    emoji: '🌿',
  },
];

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
            <img
              src="/images/stor_bricka_12_spett.jpg"
              alt="Private Events at Sahara Lounge"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            className="relative z-20 text-center px-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-0.5 bg-[#d4af37] mx-auto mb-8"
            />
            <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 block font-light">
              Sahara Lounge
            </span>
            <h1
              className="font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Privata Event &{' '}
              <span className="text-[#d4af37]">Catering</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Planerar du ett speciellt evenemang? Låt oss skapa en oförglömlig upplevelse för dig och dina gäster.
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-0.5 bg-[#d4af37] mx-auto mt-8"
            />
          </motion.div>
        </section>

        {/* Intro Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 block">
                  Din Vision, Vår Passion
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  En Upplevelse Utöver Det Vanliga
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Planerar du ett speciellt evenemang? Våra privata matsalar och cateringtjänster 
                  är perfekta för firanden, företagsevent och intima sammankomster. Vi tar hand 
                  om varje detalj så att du kan fokusera på det som verkligen betyder något – 
                  att njuta av stunden med dina nära och kära.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {[
                    'Privata matsalar för 30–200 gäster',
                    'Anpassad menyplanering med vår kock',
                    'Fullservice catering tillgänglig',
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2 text-zinc-300"
                    >
                      <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zinc-900/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 block">
                Vad Vi Erbjuder
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Allt för Ditt Evenemang
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-zinc-900/80 border border-zinc-800 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-colors duration-300"
                >
                  <div className="mb-6">
                    <feature.icon className="w-12 h-12 text-[#d4af37]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#d4af37] to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 block">
                Evenemang Vi Arrangerar
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                För Varje Tillfälle
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {eventTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-[#d4af37]/40 transition-colors duration-300"
                >
                  <div className="text-4xl mb-4">{type.emoji}</div>
                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {type.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-3xl max-w-5xl mx-auto">
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/mezze-platter.jpg"
                  alt="Sahara Event"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
              </div>

              {/* Decorative dots */}
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #d4af37 2px, transparent 2px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              <div className="relative z-10 py-20 px-8 md:px-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl"
                >
                  <span className="inline-block px-4 py-1.5 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-xs tracking-wider uppercase font-semibold mb-6">
                    Kontakta Oss
                  </span>
                  <h2
                    className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Låt Oss Planera
                    <span className="block text-[#d4af37] mt-2">Ditt Evenemang</span>
                  </h2>
                  <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
                    Kontakta oss idag för att diskutera ditt evenemang och hur vi kan göra det 
                    till ett oförglömligt minne.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="tel:+46707448442"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8941f] transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5" />
                      +46 70 744 84 42
                    </motion.a>
                    <motion.a
                      href="mailto:info@sahararestaurang.se"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-[#d4af37]/50 transition-colors duration-300"
                    >
                      <Mail className="w-5 h-5" />
                      info@sahararestaurang.se
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
