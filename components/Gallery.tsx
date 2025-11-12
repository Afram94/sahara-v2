'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: '/images/mezze-platter.jpg',
    title: 'Traditionella Meze',
    span: 'row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031',
    title: 'Tomahawk Perfektion',
    span: 'row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070',
    title: 'Elegant Atmosfär',
    span: 'row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787',
    title: 'Blandad Grill Fest',
    span: 'row-span-1',
  },
  {
    url: '/images/cocktail_1.jpg',
    title: 'Lammdelikatess',
    span: 'row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070',
    title: 'Fräsande Excellens',
    span: 'row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2787',
    title: 'Grillad Lax',
    span: 'row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=2835',
    title: 'Perfekt Kryddad',
    span: 'row-span-1',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="relative py-20 md:py-32 bg-black">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
              Visuell <span className="text-[#d4af37]">Upplevelse</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              En glimt av vår kulinariska konst och eleganta atmosfär
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${image.span}`}
                onClick={() => setSelectedImage(image.url)}
              >
                {/* Image */}
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.url})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {image.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#d4af37] mt-2" />
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#d4af37] transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
