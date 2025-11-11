'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait 300ms before starting the reveal animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1], // Custom ease-in-out
            delay: 0.3,
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-start justify-center pt-72 md:pt-72"
          style={{ pointerEvents: 'none' }}
        >
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Logo Lockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="relative z-10 text-center"
          >
            {/* Decorative Line Above */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] bg-[#d4af37] mx-auto mb-8"
            />

            {/* Logo Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-2"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                <span className="text-[#d4af37]">SAHARA</span>
              </h1>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                GRILL
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 text-sm md:text-base tracking-widest uppercase"
            >
              Experience Grilled Perfection
            </motion.p>

            {/* Decorative Line Below */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="h-[2px] bg-[#d4af37] mx-auto mt-8"
            />

            {/* Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-12 flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-2 h-2 bg-[#d4af37] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
                className="w-2 h-2 bg-[#d4af37] rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.4,
                }}
                className="w-2 h-2 bg-[#d4af37] rounded-full"
              />
            </motion.div>
          </motion.div>

          {/* Gradient Overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
