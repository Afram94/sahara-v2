'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Clock, Heart, Star, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: Award,
    title: 'Prisbelönt Kvalitet',
    stat: '15+ Utmärkelser',
    description: 'Erkänd av Michelin Guide och White Guide för enastående mat och service.',
    highlight: true,
  },
  {
    icon: Shield,
    title: '100% Färska Ingredienser',
    stat: 'Dagliga Leveranser',
    description: 'Direktkontakt med lokala gårdar och leverantörer för högsta kvalitet.',
    highlight: false,
  },
  {
    icon: Clock,
    title: 'Garanterad Tillredning',
    stat: 'Perfekt Varje Gång',
    description: 'Våra mästerkockar säkerställer att varje rätt når din exakta önskade nivå.',
    highlight: false,
  },
  {
    icon: Heart,
    title: 'Hållbar Matkultur',
    stat: 'Miljöcertifierad',
    description: 'Engagerade i hållbar matproduktion och minskning av matsvinn.',
    highlight: true,
  },
];

const socialProof = [
  { metric: '50K+', label: 'Nöjda Gäster Årligen' },
  { metric: '4.9/5.0', label: 'Genomsnittligt Betyg' },
  { metric: '95%', label: 'Återvändande Kunder' },
];

export default function Experience() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-semibold">Varför Välj Oss</span>
          </motion.div>
          
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Skillnaden Som <span className="text-[#d4af37]">Räknas</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Mer än bara mat – en omsorgsfullt kurerad upplevelse där varje detalj betyder något
          </p>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto mb-20"
        >
          {socialProof.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-2">
                <div className="text-3xl md:text-5xl font-bold text-[#d4af37]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {item.metric}
                </div>
                <div className="absolute -top-1 -right-1">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#d4af37]" />
                </div>
              </div>
              <p className="text-gray-400 text-xs md:text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative bg-zinc-900/50 backdrop-blur-sm border ${
                    benefit.highlight ? 'border-[#d4af37]/50' : 'border-zinc-800'
                  } rounded-2xl p-8 hover:border-[#d4af37] transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d4af37]/20 h-full overflow-hidden`}
                >
                  {/* Highlight Badge */}
                  {benefit.highlight && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-3 py-1 bg-[#d4af37] rounded-full">
                        <Star className="w-3 h-3 text-black fill-black" />
                        <span className="text-black text-xs font-bold">Populär</span>
                      </div>
                    </div>
                  )}

                  {/* Animated Background Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#d4af37]/5 rounded-full blur-3xl group-hover:bg-[#d4af37]/10 transition-all duration-500" />

                  <div className="relative">
                    {/* Icon & Stat */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-7 h-7 text-[#d4af37]" strokeWidth={1.5} />
                      </div>
                      <div className="text-right">
                        <div className="text-[#d4af37] text-sm font-bold">{benefit.stat}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-2xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-[15px]">
                      {benefit.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: benefit.highlight ? '95%' : '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4d47c]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image Showcase with Overlay Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden group"
        >
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070"
              alt="Sahara Grill Interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </div>

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Upplev Skillnaden Själv
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Besök oss och upptäck varför tusentals gäster väljer Sahara Grill för sina mest minnesvärd måltider
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8941f] transition-all duration-300 shadow-lg shadow-[#d4af37]/30"
                  >
                    Se Vår Fullständiga Meny
                  </motion.a>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                  >
                    Boka Bord Nu
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
