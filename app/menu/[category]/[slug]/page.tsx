'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { menuData } from '@/lib/menuData';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { ChevronLeft, Star } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function MenuItemPage() {
  const params = useParams();
  const category = menuData.find((cat) => cat.id === params.category);
  const item = category?.items.find((item) => item.slug === params.slug);

  if (!item || !category) {
    notFound();
  }

  return (
    <main className="relative bg-black min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
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
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#d4af37] transition-colors"
            >
              <ChevronLeft size={20} />
              Back to Menu
            </Link>
          </motion.div>

          {/* Item Detail */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 flex items-center justify-center gap-1"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#d4af37] fill-[#d4af37]" size={20} />
                ))}
                <span className="ml-2 text-gray-400">(4.9/5.0)</span>
              </motion.div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full mb-6">
                <span className="text-[#d4af37] text-sm font-semibold">{category.name}</span>
              </div>

              {/* Name */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {item.name}
              </h1>

              {/* Price */}
              <div className="text-5xl font-bold text-[#d4af37] mb-6">{item.price}</div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-zinc-900/50 border border-white/10 text-gray-300 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{item.description}</p>

              {/* Divider */}
              <div className="h-px bg-white/10 my-8" />

              {/* Additional Info */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Preparation Time</span>
                  <span className="text-white font-semibold">15-20 mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Serving Size</span>
                  <span className="text-white font-semibold">1-2 persons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Allergens</span>
                  <span className="text-white font-semibold">Check with staff</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  className="flex-1 px-8 py-4 bg-[#d4af37] text-black font-semibold rounded-full hover:bg-[#b8941f] transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reserve & Order
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  className="flex-1 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Call to Order
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Related Items */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20"
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              More from <span className="text-[#d4af37]">{category.name}</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items
                .filter((i) => i.slug !== item.slug)
                .slice(0, 3)
                .map((relatedItem) => (
                  <Link
                    key={relatedItem.slug}
                    href={`/menu/${category.id}/${relatedItem.slug}`}
                    className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-[#d4af37]/50 transition-all duration-500"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${relatedItem.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {relatedItem.name}
                      </h3>
                      <p className="text-[#d4af37] font-bold mt-2">{relatedItem.price}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
