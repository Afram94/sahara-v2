'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Hem', href: '/' },
    { name: 'Om Oss', href: '/about' },
    { name: 'Meny', href: '/menu' },
    { name: 'Kontakt', href: '/contact' },
  ];

  return (
    <footer className="relative bg-black">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            
            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <Link href="/" className="inline-block mb-6 group">
                  <h3 className="font-serif text-4xl font-bold transition-all duration-300">
                    <span className="text-gold group-hover:text-gold/80">SAHARA</span>
                    <span className="text-white ml-2 group-hover:text-zinc-300">LOUNGE</span>
                  </h3>
                </Link>
                
                <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
                  Autentiska libanesiska smaker i hjärtat av Norrköping. En kulinarisk upplevelse där tradition möter modern elegans.
                </p>

                <div className="flex gap-3">
                  <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }} className="group relative w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Instagram className="w-5 h-5 text-zinc-400 group-hover:text-gold transition-colors duration-300 relative z-10" />
                  </motion.a>
                  
                  <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }} className="group relative w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Facebook className="w-5 h-5 text-zinc-400 group-hover:text-gold transition-colors duration-300 relative z-10" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                <h4 className="text-white text-sm font-semibold mb-6 tracking-wider uppercase">Navigation</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href} className="text-zinc-400 hover:text-gold transition-colors duration-300 text-sm inline-block relative group">
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h4 className="text-white text-sm font-semibold mb-6 tracking-wider uppercase">Kontakt & Öppettider</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-gold" />
                    </div>
                    <div className="text-zinc-400 text-sm">
                      <p className="text-white font-medium mb-1">Besök Oss</p>
                      <p>Fredriksdalsgatan 28</p>
                      <p>602 23 Norrköping, Sverige</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-gold" />
                    </div>
                    <div className="text-zinc-400 text-sm">
                      <p className="text-white font-medium mb-1">Ring Oss</p>
                      <a href="tel:+46707448442" className="hover:text-gold transition-colors duration-300">+46 70 744 84 42</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-gold" />
                    </div>
                    <div className="text-zinc-400 text-sm">
                      <p className="text-white font-medium mb-1">Maila Oss</p>
                      <a href="mailto:info@sahararestaurang.se" className="hover:text-gold transition-colors duration-300">info@sahararestaurang.se</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                      <Clock className="w-4 h-4 text-gold" />
                    </div>
                    <div className="text-zinc-400 text-sm">
                      <p className="text-white font-medium mb-1">Öppettider</p>
                      <p>Tisdag - Torsdag: 16:00 - 23:00</p>
                      <p>Fredag - Lördag: 16:00 - 00:00</p>
                      <p>Söndag: 16:00 - 23:00</p>
                      <p className="text-red-400 mt-1">Måndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="py-6 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-zinc-600">© {new Date().getFullYear()} Sahara Restaurang & Lounge. Alla rättigheter förbehållna.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-zinc-600 hover:text-gold transition-colors duration-300">Integritetspolicy</Link>
              <span className="text-zinc-800">•</span>
              <Link href="#" className="text-zinc-600 hover:text-gold transition-colors duration-300">Användarvillkor</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
