'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, NY',
    rating: 5,
    quote: 'The Wagyu Tomahawk was exceptional. Every detail speaks of quality and passion.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop',
  },
  {
    name: 'James Kennedy',
    location: 'Los Angeles, CA',
    rating: 5,
    quote: 'Absolutely stunning! The live grill experience is mesmerizing. Perfect for special occasions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
  },
  {
    name: 'Emma Laurent',
    location: 'Chicago, IL',
    rating: 5,
    quote: 'The sommelier helped us find the perfect wine pairing. An unforgettable culinary journey.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    rating: 5,
    quote: 'As a chef myself, I\'m impressed by the precision. This is grilling elevated to an art form.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop',
  },
  {
    name: 'David Martinez',
    location: 'Miami, FL',
    rating: 5,
    quote: 'The ambiance is sophisticated yet welcoming. Service was impeccable from start to finish.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
  },
  {
    name: 'Sophia Williams',
    location: 'Seattle, WA',
    rating: 5,
    quote: 'Every course was a revelation. The chef\'s attention to detail is extraordinary.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop',
  },
];

// Sample avatars for the overlapping display
const reviewerAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop',
];

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
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4af37]/30 flex-shrink-0 group-hover:scale-110 group-hover:border-[#d4af37]/60 transition-all duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
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
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Guests That Stopped
              <span className="block text-[#d4af37] mt-2">Searching.</span>
            </h2>

            {/* Avatars and Rating */}
            <div className="space-y-4">
              {/* Overlapping Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {reviewerAvatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border-2 border-black overflow-hidden hover:scale-110 transition-transform duration-300"
                      style={{ zIndex: reviewerAvatars.length - index }}
                    >
                      <img
                        src={avatar}
                        alt={`Reviewer ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
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
                  4.9/5 <span className="text-gray-400 font-normal">Based on 1K+ reviews</span>
                </p>
              </div>
            </div>

            {/* Optional Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Join thousands of satisfied guests who discovered their new favorite dining destination at Sahara Grill.
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
