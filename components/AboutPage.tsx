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

  const stats = [
    { number: '15+', label: 'Years Excellence', icon: TrendingUp },
    { number: '50K+', label: 'Happy Guests', icon: Users },
    { number: '200+', label: 'Signature Dishes', icon: Star },
    { number: '25+', label: 'Master Chefs', icon: Award },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every dish is crafted with love and dedication to culinary excellence.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We source only the finest ingredients from trusted local suppliers.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with our guests and local community.',
    },
    {
      icon: Clock,
      title: 'Tradition',
      description: 'Honoring time-tested recipes while innovating for modern palates.',
    },
  ];

  const timeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded by Chef Michael Hassan with a vision to bring authentic grilling to the heart of the city.',
    },
    {
      year: '2013',
      title: 'First Award',
      description: "Received Michelin recognition and named 'Best Grill Restaurant' by Culinary Magazine.",
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Opened our signature smokehouse and introduced the famous 72-hour slow-cooked brisket.',
    },
    {
      year: '2020',
      title: 'Innovation',
      description: 'Launched farm-to-table program with local sustainable farms for fresh, organic ingredients.',
    },
    {
      year: '2025',
      title: 'Excellence',
      description: 'Celebrating over a decade of culinary innovation and customer satisfaction.',
    },
  ];

  const team = [
    {
      name: 'Chef Michael Hassan',
      role: 'Executive Chef & Founder',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop',
      bio: '20+ years experience in fine dining and grill mastery',
    },
    {
      name: 'Sarah Chen',
      role: 'Head Pastry Chef',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&auto=format&fit=crop',
      bio: 'Award-winning dessert innovator and culinary artist',
    },
    {
      name: 'David Rodriguez',
      role: 'Master Grillman',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop',
      bio: 'Specialist in live-fire cooking and smoke techniques',
    },
    {
      name: 'Emma Thompson',
      role: 'Sommelier',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop',
      bio: 'Expert wine curator with international certification',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="relative z-20 text-center px-4"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-light">
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
              Where Fire Meets
              <span className="block text-gold mt-2">Passion</span>
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Crafting extraordinary experiences through the art of flame and flavor since 2009
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-gold text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center group"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-serif text-4xl md:text-5xl text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-zinc-400 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                Since 2009
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                A Legacy of
                <span className="block text-gold mt-2">Culinary Excellence</span>
              </h2>
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                <p>
                  What began as a dream in a small kitchen has evolved into a culinary destination 
                  that celebrates the primal art of cooking with fire. Our founder, Chef Michael Hassan, 
                  brought together decades of global culinary experience to create something truly special.
                </p>
                <p>
                  Every dish tells a story—of carefully selected ingredients, masterful technique, 
                  and unwavering dedication to quality. We believe that dining is more than sustenance; 
                  it's an experience that engages all the senses and creates lasting memories.
                </p>
                <p>
                  From our signature wood-fired grills to our meticulously crafted cocktails, 
                  every element reflects our commitment to excellence and innovation. 
                  We honor tradition while fearlessly exploring new flavors and techniques.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop"
                    alt="Grilling"
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
      <section className="py-32 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="bg-black border border-zinc-800 p-8 h-full hover:border-gold transition-all duration-300">
                  <value.icon className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">
              Milestones & Moments
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative pl-8 pb-16 border-l border-zinc-800 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gold group-hover:scale-150 transition-transform duration-300" />
                
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

      {/* Team Section */}
      <section className="py-32 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
              Meet The Masters
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-white">
              Behind The Flames
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-xl text-white mb-1 group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gold text-sm mb-2 tracking-wide uppercase">
                  {member.role}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop"
            alt="Restaurant"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Experience The Difference
            </h2>
            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              Join us for an unforgettable culinary journey where every detail 
              is crafted to perfection. Reserve your table today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-black px-8 py-4 font-semibold tracking-wide hover:bg-gold/90 transition-colors duration-300"
              >
                RESERVE A TABLE
              </motion.a>
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gold text-gold px-8 py-4 font-semibold tracking-wide hover:bg-gold hover:text-black transition-colors duration-300"
              >
                VIEW OUR MENU
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
