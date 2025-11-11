'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Flame, Award, ChefHat } from 'lucide-react';
import Link from 'next/link';

const menuCategories = [
  {
    id: 'signature',
    name: 'Signature Grills',
    icon: Award,
    items: [
      {
        name: 'Wagyu Tomahawk Steak',
        description: 'Premium 32oz bone-in ribeye, grilled to perfection with herb butter',
        price: '$89',
        tags: ['Chef\'s Special', 'Premium'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
      },
      {
        name: 'Mixed Grill Platter',
        description: 'Lamb chops, beef tenderloin, chicken skewers, and grilled vegetables',
        price: '$68',
        tags: ['Popular', 'For Sharing'],
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787',
      },
      {
        name: 'Ribeye Premium Cut',
        description: '16oz dry-aged ribeye with truffle mashed potatoes',
        price: '$54',
        tags: ['Premium'],
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
      },
    ],
  },
  {
    id: 'specialties',
    name: 'House Specialties',
    icon: ChefHat,
    items: [
      {
        name: 'Grilled Salmon Fillet',
        description: 'Fresh Atlantic salmon with lemon herb sauce and asparagus',
        price: '$42',
        tags: ['Healthy Choice'],
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2787',
      },
      {
        name: 'BBQ Baby Back Ribs',
        description: 'Slow-cooked ribs with signature BBQ glaze and coleslaw',
        price: '$38',
        tags: ['Popular'],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069',
      },
      {
        name: 'Grilled Lamb Rack',
        description: 'New Zealand lamb with rosemary jus and roasted vegetables',
        price: '$52',
        tags: ['Chef\'s Special'],
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=2070',
      },
    ],
  },
  {
    id: 'smokehouse',
    name: 'Smokehouse',
    icon: Flame,
    items: [
      {
        name: 'Smoked Brisket',
        description: '12-hour smoked beef brisket with BBQ beans and cornbread',
        price: '$36',
        tags: ['Smoked 12hrs'],
        image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2787',
      },
      {
        name: 'Pulled Pork Platter',
        description: 'Slow-smoked pulled pork with three house-made sauces',
        price: '$32',
        tags: ['Popular'],
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
      },
      {
        name: 'Smoked Chicken Wings',
        description: 'Hickory-smoked wings with buffalo or honey BBQ sauce',
        price: '$24',
        tags: ['Appetizer'],
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
            Our <span className="text-[#d4af37]">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Crafted with passion, grilled to perfection. Every dish tells a story.
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
              View Full Menu (25+ Items)
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
