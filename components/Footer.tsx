'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                Where premium cuts meet artisanal grilling techniques. A culinary journey unlike any other.
              </p>
              <div className="h-0.5 w-16 bg-[#d4af37]" />
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
              <h4 className="text-white text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
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
              <h4 className="text-white text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span>123 Sahara Boulevard<br />Downtown District, NY 10001</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group">
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group">
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:info@saharagrill.com">info@saharagrill.com</a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Mon-Thu: 5:00 PM - 11:00 PM</p>
                    <p>Fri-Sun: 12:00 PM - 12:00 AM</p>
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
              <h4 className="text-white text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Follow Us
              </h4>
              <p className="text-gray-400 mb-6">
                Stay connected for exclusive updates, special events, and behind-the-scenes content.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
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
          className="pt-8 border-t border-zinc-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Sahara Grill. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50" />
    </footer>
  );
}
