'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const [showLoader, setShowLoader] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Intro Loading Overlay */}
      {showLoader && (
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          {/* Logo - Centered in Viewport */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center px-4"
          >
            {/* Top Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1px] bg-[#d4af37] mx-auto mb-8"
            />

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#d4af37] mb-2"
              style={{ fontFamily: 'var(--font-playfair)' }}
              initial={{ letterSpacing: '-0.05em' }}
              animate={{ letterSpacing: '0.1em' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              SAHARA
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white text-2xl md:text-3xl tracking-[0.3em] font-light mb-8"
            >
              GRILL
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 text-sm md:text-base tracking-widest uppercase mb-8"
            >
              Upplev Grillad Perfektion
            </motion.p>

            {/* Bottom Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="h-[1px] bg-[#d4af37] mx-auto mb-8"
            />

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="flex gap-2 justify-center"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#d4af37]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Hero Section */}
      <section
        id="home"
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-black"
      >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069)',
            filter: 'brightness(0.4)',
          }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4"
      >
        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-[#d4af37] mb-8"
        />

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          <span className="text-white">Autentiska</span>
          <br />
          <span className="text-[#d4af37]">Libanesiska Smaker</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed"
        >
          Upptäck Mellanösterns rika smaker i hjärtat av Norrköping.
          <br className="hidden md:block" />
          Från färska mezerätter till grillspecialiteter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <motion.a
            href="#menu"
            className="px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8941f] transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Se Meny
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Boka Bord
          </motion.a>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80px' }}
          transition={{ duration: 1, delay: 1.3 }}
          className="h-[2px] bg-[#d4af37]"
        />

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center text-[#d4af37]"
          >
            <span className="text-sm mb-2 font-light">Scrolla för att utforska</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
    </>
  );
}
