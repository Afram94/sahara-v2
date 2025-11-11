'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Hem', href: '/' },
    { name: 'Om Oss', href: '/about' },
    { name: 'Meny', href: '/menu' },
    { name: 'Galleri', href: '/#gallery' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section with Newsletter */}
        <div className="py-16 border-b border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Håll Dig <span className="text-[#d4af37]">Uppdaterad</span>
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Prenumerera på vårt nyhetsbrev för exklusiva erbjudanden, evenemangsuppdateringar och kulinariska nyheter.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors duration-300 rounded-lg"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#d4af37] text-black font-semibold rounded-lg hover:bg-[#b8941f] transition-colors duration-300"
                >
                  Prenumerera
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-3 gap-6 text-center"
            >
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>15+</div>
                <div className="text-gray-400 text-sm">År</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>50K+</div>
                <div className="text-gray-400 text-sm">Nöjda Gäster</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#d4af37] mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>4.9</div>
                <div className="text-gray-400 text-sm">Betyg</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Main Links */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <h3
                  className="text-3xl font-bold mb-4 cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  <span className="text-[#d4af37]">SAHARA</span>
                  <span className="text-white ml-2">GRILL</span>
                </h3>
              </Link>
              <p className="text-gray-400 leading-relaxed mb-6">
                Där premium kött möter hantverksmässiga grilltekniker. En kulinarisk resa utöver det vanliga.
              </p>
              <div className="h-0.5 w-16 bg-[#d4af37] mb-6" />
              
              {/* Social Links with Better Styling */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                <div className="w-1 h-6 bg-[#d4af37] rounded-full" />
                Snabblänkar
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#d4af37] group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                <div className="w-1 h-6 bg-[#d4af37] rounded-full" />
                Kontakta Oss
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>123 Sahara Boulevard<br />Centrum, Stockholm 10001</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group">
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  <a href="tel:+46851234567">+46 (8) 123-4567</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group">
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:info@saharagrill.se">info@saharagrill.se</a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Mån-Tors: 17:00 - 23:00</p>
                    <p>Fre-Sön: 12:00 - 00:00</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white text-lg font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                <div className="w-1 h-6 bg-[#d4af37] rounded-full" />
                Följ Oss
              </h4>
              <p className="text-gray-400 mb-6">
                Håll kontakten för exklusiva uppdateringar, specialevenemang och bakom kulisserna-innehåll.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-8 border-t border-zinc-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Sahara Grill. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                Integritetspolicy
              </Link>
              <span className="text-zinc-700">•</span>
              <Link href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                Användarvillkor
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
