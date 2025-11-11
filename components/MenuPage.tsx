'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { menuData } from '@/lib/menuData';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const sectionRef = useRef(null);

  const activeMenu = menuData.find((cat) => cat.id === activeCategory);

  return (
    <>
      <Navigation />
      <section ref={sectionRef} className="relative pt-32 pb-20 md:pb-32 bg-black min-h-screen overflow-hidden">
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
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-0.5 bg-[#d4af37] mx-auto mb-6"
          />
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Vår <span className="text-[#d4af37]">Fullständiga Meny</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Utforska vårt kompletta urval av grillad perfektion, handgjorda cocktails och färska drycker
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {menuData.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  activeCategory === category.id
                    ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Category Description */}
        <motion.div
          key={`desc-${activeCategory}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {activeMenu?.description}
          </p>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {activeMenu?.items.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#d4af37] text-black text-xs font-semibold rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick View Link */}
                <Link
                  href={`/menu/${activeCategory}/${item.slug}`}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronRight className="text-[#d4af37]" size={20} />
                </Link>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300 flex-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#d4af37] ml-3">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>

                {/* Order/View Button */}
                <Link
                  href={`/menu/${activeCategory}/${item.slug}`}
                  className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#b8941f] transition-colors duration-300 text-sm font-semibold"
                >
                  Visa Detaljer
                  <ChevronRight size={16} />
                </Link>

                {/* Hover Effect Line */}
                <div className="h-0.5 bg-[#d4af37] mt-4 w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Items Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          Visar {activeMenu?.items.length} rätter i {activeMenu?.name}
        </motion.div>

        {/* Back to Home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300"
          >
            Tillbaka till Startsidan
          </Link>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
}
