'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Stockholm, Sverige',
    rating: 5,
    quote: 'Wagyu Tomahawk var exceptionell. Varje detalj talar om kvalitet och passion.',
  },
  {
    name: 'James Kennedy',
    location: 'Göteborg, Sverige',
    rating: 5,
    quote: 'Absolut fantastiskt! Live grillupplevelsen är fascinerande. Perfekt för speciella tillfällen.',
  },
  {
    name: 'Emma Laurent',
    location: 'Malmö, Sverige',
    rating: 5,
    quote: 'Sommelieren hjälpte oss hitta den perfekta vinparringen. En oförglömlig kulinarisk resa.',
  },
  {
    name: 'Michael Chen',
    location: 'Uppsala, Sverige',
    rating: 5,
    quote: 'Som kock själv är jag imponerad av precisionen. Detta är grillning upphöjd till en konstform.',
  },
  {
    name: 'David Martinez',
    location: 'Lund, Sverige',
    rating: 5,
    quote: 'Atmosfären är sofistikerad men ändå välkomnande. Service var oklanderlig från början till slut.',
  },
  {
    name: 'Sophia Williams',
    location: 'Linköping, Sverige',
    rating: 5,
    quote: 'Varje rätt var en uppenbarelse. Kockens uppmärksamhet på detaljer är extraordinär.',
  },
];

// Initials avatars (no images needed)
const reviewerInitials = ['SM', 'JK', 'EL', 'MC', 'DM'];
const avatarColors = ['#d4af37', '#b8941f', '#c9a227', '#a07810', '#d4af37'];

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[320px] sm:w-[350px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.div
        className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group cursor-pointer"
        whileHover={{
          y: -8,
          scale: 1.02,
          borderColor: 'rgba(212, 175, 55, 0.5)',
          boxShadow: '0 20px 40px -12px rgba(212, 175, 55, 0.15), 0 8px 16px -8px rgba(212, 175, 55, 0.1)',
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Hover gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10">
          {/* Name and Location */}
          <div className="flex items-start gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full border-2 border-[#d4af37]/30 flex-shrink-0 flex items-center justify-center group-hover:scale-110 group-hover:border-[#d4af37]/60 transition-all duration-300 text-black text-xs font-bold"
              style={{ backgroundColor: '#d4af37' }}
            >
              {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold text-base truncate group-hover:text-[#d4af37] transition-colors duration-400">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-sm truncate">{testimonial.location}</p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-300 text-sm leading-relaxed flex-1">
            "{testimonial.quote}"
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  
  // Split testimonials into two rows
  const row1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)]; // Duplicate for seamless loop
  const row2 = [...testimonials.slice(3), ...testimonials.slice(3)]; // Duplicate for seamless loop
  
  // Calculate animation distance (card width + gap)
  const cardWidth = 350; // 350px + 24px gap
  const gap = 24;
  const totalWidth = (cardWidth + gap) * 3; // 3 original cards
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-semibold tracking-wide">
                Kundrecensioner
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Gäster Som Slutade
              <span className="block text-[#d4af37] mt-2">Leta.</span>
            </h2>

            {/* Avatars and Rating */}
            <div className="space-y-4">
              {/* Overlapping Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {reviewerInitials.map((initials, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 text-black text-xs font-bold"
                      style={{ zIndex: reviewerInitials.length - index, backgroundColor: avatarColors[index] }}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Text */}
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-gray-300 font-semibold">
                  4.9/5 <span className="text-gray-400 font-normal">Baserat på 1K+ recensioner</span>
                </p>
              </div>
            </div>

            {/* Optional Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Gå med tusentals nöjda gäster som upptäckte sin nya favoritrestaurang på Sahara Grill.
            </p>
          </motion.div>

          {/* Right Column - Multi-row Scrolling Testimonials */}
          <div 
            className="relative w-full space-y-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Row 1 - Scrolling Left */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: isPaused ? undefined : [-totalWidth, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ width: 'fit-content' }}
              >
                {row1.map((testimonial, index) => (
                  <TestimonialCard
                    key={`row1-${testimonial.name}-${index}`}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </motion.div>
              
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>

            {/* Row 2 - Scrolling Right (opposite direction) - Hidden on mobile, visible on md+ */}
            <div className="relative overflow-hidden hidden md:block">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: isPaused ? undefined : [0, -totalWidth],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{ width: 'fit-content' }}
              >
                {row2.map((testimonial, index) => (
                  <TestimonialCard
                    key={`row2-${testimonial.name}-${index}`}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </motion.div>
              
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
