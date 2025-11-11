'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Award, Flame } from 'lucide-react';

const stats = [
  { icon: Clock, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Award, value: '25+', label: 'Awards Won' },
  { icon: Flame, value: '100%', label: 'Fresh Ingredients' },
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
                    backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)',
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
                <p className="text-black font-semibold">Years of Excellence</p>
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
                Where Tradition Meets{' '}
                <span className="text-[#d4af37]">Innovation</span>
              </h2>

              <div className="space-y-4 text-gray-400 text-lg leading-relaxed mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  At <span className="text-[#d4af37] font-semibold">Sahara Grill</span>, we believe that great food
                  starts with great ingredients. Our master chefs combine time-honored grilling techniques with
                  modern culinary innovation to create unforgettable dining experiences.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Every cut of meat is carefully selected, every vegetable freshly sourced, and every dish is
                  prepared with passion and precision. We don't just serve food – we create memories.
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
                  Reserve Your Table
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
