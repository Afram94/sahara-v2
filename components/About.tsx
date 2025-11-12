'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Award, Flame } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'År Erfarenhet' },
  { icon: Users, value: '50K+', label: 'Nöjda Kunder' },
  { icon: Award, value: '25+', label: 'Vunna Priser' },
  { icon: Flame, value: '100%', label: 'Färska Ingredienser' },
];

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#d4af37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#d4af37]/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
            ref={imageRef}
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                style={{ y: imageY }}
                className="h-[500px] md:h-[600px]"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/mezze-platter.jpg)',
                  }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-[#d4af37] p-8 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <p className="text-5xl font-bold text-black mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  15+
                </p>
                <p className="text-black font-semibold">År av Excellens</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '80px' } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-0.5 bg-[#d4af37] mb-6"
              />
              
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Där Tradition Möter{' '}
                <span className="text-[#d4af37]">Gästfrihet</span>
              </h2>

              <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  På <span className="text-[#d4af37] font-semibold">Sahara Restaurang & Lounge</span> bjuder vi in dig
                  till en autentisk kulinarisk resa genom Libanon och Mellanöstern. Våra erfarna kockar
                  kombinerar klassiska recept med modern presentation för att skapa oförglömliga matupplevelser.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Från färska mezerätter och saftiga grillspecialiteter till smakrika shawarmas och traditionella
                  desserter – varje rätt är förberedd med passion och de finaste ingredienserna. Vi skapar minnen
                  kring god mat och varm gästfrihet.
                </motion.p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all duration-300 group"
                    >
                      <Icon className="text-[#d4af37] mb-3 group-hover:scale-110 transition-transform duration-300" size={32} />
                      <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {stat.value}
                      </p>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <motion.a
                  href="#contact"
                  className="inline-block px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8941f] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reservera Ditt Bord
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
