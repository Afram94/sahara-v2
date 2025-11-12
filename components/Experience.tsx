'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Traditionell Grillkonst',
    description: 'Våra kockar behärskar den urgamla konsten att grilla över öppen låga, vilket ger köttet dess karakteristiska smak och saftighet.',
  },
  {
    title: 'Färska Råvaror Dagligen',
    description: 'Vi väljer noggrant ut de bästa ingredienserna varje dag för att garantera optimal kvalitet och smak i varje rätt.',
  },
  {
    title: 'Autentiska Smaker',
    description: 'Varje rätt är inspirerad av äkta recept från Mellanöstern, tillagade med passion och respekt för traditionen.',
  },
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

        {/* Features Section - Engaging Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - First Feature (Large) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:row-span-2"
            >
              <div className="relative h-full bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-500">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl group-hover:bg-[#d4af37]/10 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Large Number */}
                  <div className="mb-6">
                    <span 
                      className="text-8xl md:text-9xl font-bold text-[#d4af37]/20 leading-none"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      01
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {features[0].title}
                    </h3>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                      {features[0].description}
                    </p>
                  </div>

                  {/* Decorative Bottom Line */}
                  <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                      <span className="text-[#d4af37] text-sm font-medium tracking-wider">SIGNATURE TECHNIQUE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Two Smaller Features Stacked */}
            <div className="space-y-8">
              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 md:p-10 overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:-translate-y-1">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Number & Icon Combined */}
                    <div className="flex items-center justify-between mb-6">
                      <span 
                        className="text-6xl font-bold text-[#d4af37]/30"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        02
                      </span>
                      <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                    </div>

                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {features[1].title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {features[1].description}
                    </p>

                    {/* Progress Line */}
                    <div className="mt-6 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4d47c]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-3xl p-8 md:p-10 overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:-translate-y-1">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/0 to-[#d4af37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Number & Icon Combined */}
                    <div className="flex items-center justify-between mb-6">
                      <span 
                        className="text-6xl font-bold text-[#d4af37]/30"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        03
                      </span>
                      <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>

                    <h3
                      className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {features[2].title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                      {features[2].description}
                    </p>

                    {/* Progress Line */}
                    <div className="mt-6 h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4d47c]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

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
              src="/images/mezze-platter.jpg"
              alt="Sahara Grill Traditional Mezze"
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
