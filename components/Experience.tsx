'use client';

import { motion } from 'framer-motion';
import { Flame, Wine, Users, Calendar } from 'lucide-react';

const experiences = [
  {
    icon: Flame,
    title: 'Live Grillstation',
    description: 'Se våra mästerkockar tillreda din måltid på vår signatur öppen flamma med precision och konst.',
  },
  {
    icon: Wine,
    title: 'Expert Sommelier',
    description: 'Kuraterat vinurval med personliga parrekommendationer från vår certifierade vinexpert.',
  },
  {
    icon: Users,
    title: 'Privat Matsal',
    description: 'Intima utrymmen för firanden och affärsmöten med anpassade menyer och dedikerad service.',
  },
  {
    icon: Calendar,
    title: 'Speciella Evenemang',
    description: 'Anpassade menyer och full-service catering för bröllop, företagsevenemang och oförglömliga fester.',
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 md:py-32 bg-zinc-900 overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop)',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/95 to-black" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 bg-[#d4af37] mx-auto mb-6"
          />
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Sahara <span className="text-[#d4af37]">Upplevelsen</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Upptäck vad som gör att äta hos oss verkligen exceptionellt
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#d4af37]/10 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {experience.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-0.5 bg-[#d4af37] w-0 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Redo att uppleva den finaste grillningen?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-block px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8941f] transition-all duration-300 transform hover:scale-105"
            >
              Utforska Vår Meny
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Boka Din Upplevelse
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
