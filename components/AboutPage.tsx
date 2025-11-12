'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Clock, Heart, Users, TrendingUp, Star } from 'lucide-react';
import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const values = [
    {
      icon: Heart,
      title: 'Gästfrihet',
      description: 'Välkommen till vårt hem. Varje gäst är familj hos oss – äkta libanesisk hjärtlighet där du känner dig som hemma från första stunden.',
    },
    {
      icon: Award,
      title: 'Autenticitet',
      description: 'Recept från våra farmödrar, kryddor från Mellanöstern, kärlek i varje rätt. Detta är mat som berättar historier.',
    },
    {
      icon: Users,
      title: 'Gemenskap',
      description: 'Mat smakar bättre tillsammans. Vi skapar magiska stunder där skratt, berättelser och god mat förenar vänner och familj.',
    },
    {
      icon: Clock,
      title: 'Hantverk',
      description: 'Timmar av förberedelse, generationers kunskap, perfekt timing. Varje rätt är ett mästerverk skapat med passion och respekt.',
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Öppning',
      description: 'Sahara Restaurang & Lounge öppnar i hjärtat av Norrköping med en vision att dela autentiska libanesiska smaker.',
    },
    {
      year: '2024',
      title: 'Lounge Expansion',
      description: 'Introducerade vår loungeområde, en mysig plats för avkoppling med vänner och familj.',
    },
    {
      year: '2024',
      title: 'Lokalfavorit',
      description: 'Blev snabbt en omtyckt destination för autentisk mellanöstern mat i Norrköping.',
    },
    {
      year: '2025',
      title: 'Fortsatt Tillväxt',
      description: 'Expanderar menyn med fler traditionella rätter och moderna tolkningar av klassiker.',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-light">
              Vår Berättelse
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
              Där Smaker Möter
              <span className="block text-gold mt-2">Gästfrihet</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Delar autentiska libanesiska traditioner och mellanösterns rika matkultur sedan 2023
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gold text-xs tracking-widest uppercase">Scrolla</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* Brand Story Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                Sedan 2023
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Libanesisk Tradition i
                <span className="block text-gold mt-2">Hjärtat av Norrköping</span>
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  Sahara Restaurang & Lounge öppnade 2023 med en vision att dela den rika kulinariska 
                  traditionen från Libanon och Mellanöstern med Norrköpings matälskare. Vi erbjuder 
                  en äkta smakresa genom regionen med fokus på kvalitet och autenticitet.
                </p>
                <p>
                  Från färskberedda mezerätter och saftiga grillspecialiteter till smakrika shawarmas 
                  och traditionella desserter – varje rätt tillagas med kärlek och respekt för recept 
                  som överförts genom generationer. Vi kombinerar klassiska tekniker med moderna influenser.
                </p>
                <p>
                  Vår lounge skapar en varm och välkomnande atmosfär där vänner och familjer kan samlas, 
                  njuta av god mat och skapa minnen tillsammans. Oavsett om du äter hos oss, beställer 
                  takeaway eller hemleverans, lovar vi samma höga kvalitet och hjärtliga service.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/images/cocktail_1.jpg"
                    alt="Sahara Signature Cocktail"
                    className="w-full h-64 object-cover rounded-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop"
                    alt="Food preparation"
                    className="w-full h-48 object-cover rounded-sm"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop"
                    alt="Chef cooking"
                    className="w-full h-48 object-cover rounded-sm"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop"
                    alt="Restaurant ambiance"
                    className="w-full h-64 object-cover rounded-sm"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-black to-zinc-900/50" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Hjärtat av Sahara
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Vad Gör Oss Speciella
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Det är mer än mat – det är kärlek, tradition och gemenskap på varje tallrik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group relative"
              >
                
                <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 h-full hover:border-gold/50 transition-colors duration-300"
                  style={{ willChange: 'border-color' }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <value.icon className="w-14 h-14 text-gold" />
                  </div>
                  
                  <h3 className="font-serif text-2xl text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-base">
                    {value.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-gold to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Vår Resa
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">
              Milstolpar & Ögonblick
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative pl-8 pb-16 border-l border-zinc-800 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gold transition-transform duration-300 group-hover:scale-125" />
                
                <div className="mb-2">
                  <span className="font-serif text-3xl text-gold">{item.year}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop"
                alt="Restaurant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle, #d4af37 2px, transparent 2px)',
                backgroundSize: '40px 40px',
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 py-24 px-8 md:px-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Side - Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative z-20"
                >
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/30 rounded-full text-gold text-xs tracking-wider uppercase font-semibold">
                      Exklusiv Upplevelse
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                    Upplev
                    <span className="block text-gold mt-2">Skillnaden</span>
                  </h2>
                  
                  <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
                    Följ med oss på en oförglömlig kulinarisk resa där varje detalj 
                    är skapad till perfektion. Reservera ditt bord idag.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                    <motion.a
                      href="/menu"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold tracking-wide shadow-lg transition-shadow duration-200 hover:shadow-xl"
                      style={{ backgroundColor: '#d4af37', color: '#000000', willChange: 'transform' }}
                    >
                      <span className="flex items-center gap-2">
                        SE VÅR MENY
                        <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </motion.a>
                    
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/20 text-white font-semibold tracking-wide backdrop-blur-sm hover:border-gold/50 transition-colors duration-200"
                      style={{ willChange: 'transform' }}
                    >
                      <span>BOKA BORD</span>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right Side - Feature Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="grid grid-cols-2 gap-4"
                >
                  {[
                    { icon: '🍽️', title: 'Autentiska Rätter', desc: 'Traditionella recept' },
                    { icon: '✨', title: 'Premium Service', desc: 'Exceptionell gästfrihet' },
                    { icon: '🏆', title: 'Högsta Kvalitet', desc: 'Färska ingredienser' },
                    { icon: '❤️', title: 'Med Kärlek', desc: 'Varje detalj räknas' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
                      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
                      style={{ willChange: 'transform' }}
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-zinc-400 text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
