'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Users, Flame } from 'lucide-react';
import Link from 'next/link';

const menuCategories = [
  {
    id: 'popular',
    name: 'Populär',
    icon: Star,
    items: [
      {
        name: 'Ostrullar',
        description: 'Serveras med friterad mozzarella ost i filodeg',
        price: '69 kr',
        tags: ['Populär', 'Förrätt'],
        image: '/images/Ostrullar.jpg',
      },
      {
        name: 'Arabisk Shawarma',
        description: 'Serveras med pommes och Cream toum',
        price: '149 kr',
        tags: ['Populär'],
        image: '/images/Arabisk_Shawarma.jpg',
      },
      {
        name: 'Kycklingspett',
        description: '2 st kycklingspett med grillade grönsaker',
        price: '169 kr',
        tags: ['Populär'],
        image: '/images/Kycklingspett.jpg',
      },
    ],
  },
  {
    id: 'familjebricka',
    name: 'Familjebricka',
    icon: Users,
    items: [
      {
        name: 'Stor Bricka 12 Spett',
        description: 'Serveras med 4 st shish kebab, 4 st kycklingspett, 4 st fläskfilespett och 8 st valfria kalla meza',
        price: '1 049 kr',
        tags: ['För Delning', 'Familj'],
        image: '/images/stor_bricka_12_spett.jpg',
      },
      {
        name: 'Mellan Bricka 8 Spett',
        description: 'Serveras med 3 st shish kebab, 3 st kycklingspett, 2 st fläskfilespett och 6 st valfria kalla meza',
        price: '849 kr',
        tags: ['För Delning', 'Familj'],
        image: '/images/mellan_bricka_8_spett.jpg',
      },
      {
        name: 'Liten Bricka 4 Spett',
        description: 'Serveras med 2 st shish kebab, 2 st kycklingspett och 4 st valfria kalla meza',
        price: '450 kr',
        tags: ['För Delning'],
        image: '/images/liten_bricka_4_spett.jpg',
      },
    ],
  },
  {
    id: 'grillratter',
    name: 'Grillrätter',
    icon: Flame,
    items: [
      {
        name: 'Shish Kebab',
        description: '2 st nöttfärsspett med grillade grönsaker',
        price: '169 kr',
        tags: ['Populär'],
        image: '/images/Shish_Kebab1.jpg',
      },
      {
        name: 'Urfa Kebab',
        description: '2 st nöttfärsspett med grillade grönsaker. Stark',
        price: '169 kr',
        tags: ['Stark'],
        image: '/images/Urfa_Kebab.jpg',
      },
      {
        name: 'Fläskfilespett',
        description: '2 st fläskfiléspett med grillade grönsaker',
        price: '169 kr',
        tags: [],
        image: '/images/flaskfilespett.jpg',
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('popular');

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
