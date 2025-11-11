'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Flame, Award, ChefHat } from 'lucide-react';
import Link from 'next/link';

const menuCategories = [
  {
    id: 'signature',
    name: 'Signatur Grillar',
    icon: Award,
    items: [
      {
        name: 'Wagyu Tomahawk Stek',
        description: 'Premium 32oz ben-in ribeye, grillad till perfektion med örtsmör',
        price: '890 kr',
        tags: ['Kockens Special', 'Premium'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
      },
      {
        name: 'Blandad Grill Tallrik',
        description: 'Lammkotletter, oxfilé, kycklingspett och grillade grönsaker',
        price: '680 kr',
        tags: ['Populär', 'För Delning'],
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787',
      },
      {
        name: 'Ribeye Premium Skär',
        description: '16oz dry-aged ribeye med tryffelmosa potatis',
        price: '540 kr',
        tags: ['Premium'],
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
      },
    ],
  },
  {
    id: 'specialties',
    name: 'Husets Specialiteter',
    icon: ChefHat,
    items: [
      {
        name: 'Grillad Laxfilé',
        description: 'Färsk Atlantisk lax med citronörtssås och sparris',
        price: '420 kr',
        tags: ['Hälsosamt Val'],
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2787',
      },
      {
        name: 'BBQ Baby Back Revbensspjäll',
        description: 'Långkokt revbensspjäll med signatur BBQ-glasyr och coleslaw',
        price: '380 kr',
        tags: ['Populär'],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
      },
      {
        name: 'Grillad Lammrack',
        description: 'Nyzeeländskt lamm med rosmarin jus och rostade grönsaker',
        price: '520 kr',
        tags: ['Kockens Special'],
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070',
      },
    ],
  },
  {
    id: 'smokehouse',
    name: 'Rökhus',
    icon: Flame,
    items: [
      {
        name: 'Rökt Brisket',
        description: '12-timmars rökt oxbringa med BBQ bönor och majsbröd',
        price: '360 kr',
        tags: ['Rökt 12 timmar'],
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2787',
      },
      {
        name: 'Pulled Pork Tallrik',
        description: 'Långrökt pulled pork med tre hemgjorda såser',
        price: '320 kr',
        tags: ['Populär'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
      },
      {
        name: 'Rökta Kycklingvingar',
        description: 'Hickory-rökta vingar med buffalo eller honung BBQ sås',
        price: '240 kr',
        tags: ['Aptitretare'],
        image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=2835',
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('signature');

  const activeMenu = menuCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
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
            Vår <span className="text-[#d4af37]">Meny</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Skapad med passion, grillad till perfektion. Varje rätt berättar en historia.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {menuCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  activeCategory === category.id
                    ? 'bg-[#d4af37] text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <Icon size={20} />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeMenu?.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-[#d4af37]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
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
                      className="px-3 py-1 bg-[#d4af37] text-black text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#d4af37]">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                
                {/* Hover Effect Line */}
                <div className="h-0.5 bg-[#d4af37] mt-4 w-0 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/menu">
            <button
              className="px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Se Fullständig Meny (25+ Rätter)
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
