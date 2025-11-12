'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Check if restaurant is currently open
  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes; // Convert to minutes since midnight

      // Monday = Closed
      if (day === 1) {
        setIsOpen(false);
        return;
      }

      // Tuesday-Thursday: 16:00-23:00
      if (day >= 2 && day <= 4) {
        setIsOpen(currentTime >= 16 * 60 && currentTime < 23 * 60);
        return;
      }

      // Friday-Saturday: 16:00-00:00 (next day)
      // Handle after midnight (00:00-01:00) as still open from previous day
      if (day === 5 || day === 6) {
        setIsOpen(currentTime >= 16 * 60 || currentTime < 1 * 60);
        return;
      }

      // Sunday after midnight (00:00-01:00) - still open from Saturday
      if (day === 0 && currentTime < 1 * 60) {
        setIsOpen(true);
        return;
      }

      // Sunday: 16:00-23:00
      if (day === 0) {
        setIsOpen(currentTime >= 16 * 60 && currentTime < 23 * 60);
        return;
      }

      setIsOpen(false);
    };

    // Check immediately
    checkOpenStatus();

    // Then check every minute
    const interval = setInterval(checkOpenStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Namn krävs';
    if (!formData.email.trim()) {
      newErrors.email = 'E-post krävs';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-post är ogiltig';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefon krävs';
    if (!formData.date) newErrors.date = 'Datum krävs';
    if (!formData.time) newErrors.time = 'Tid krävs';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Besök Oss',
      details: ['Fredriksdalsgatan 28', '602 23 Norrköping, Sverige'],
      link: 'https://maps.google.com/?q=Fredriksdalsgatan+28,+602+23+Norrköping',
      linkText: 'Öppna i kartor',
    },
    {
      icon: Phone,
      title: 'Ring Oss',
      details: ['+46 70 744 84 42'],
      link: 'tel:+46707448442',
      linkText: 'Ring nu',
    },
    {
      icon: Mail,
      title: 'Maila Oss',
      details: ['info@sahararestaurang.se', 'bokning@sahararestaurang.se'],
      link: 'mailto:info@sahararestaurang.se',
      linkText: 'Skicka mail',
    },
    {
      icon: Clock,
      title: 'Öppettider',
      details: [
        'Tisdag - Torsdag: 16:00 - 23:00',
        'Fredag - Lördag: 16:00 - 00:00',
        'Söndag: 16:00 - 23:00',
        'Måndag: Stängt',
      ],
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          className="relative z-20 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block font-light">
            Kontakta Oss
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight">
            Reservera Din
            <span className="block text-gold mt-2">Upplevelse</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Vi ser fram emot att servera dig en oförglömlig kulinarisk upplevelse
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card Background with Gradient Border Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-gold/30 via-gold/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                
                <div className="relative bg-zinc-900/80 backdrop-blur-md border border-zinc-800/50 rounded-xl p-6 hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-5">
                    <div className="relative inline-flex">
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 p-3.5 rounded-lg border border-zinc-700/50 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-500">
                        <info.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-serif text-lg mb-4 tracking-wide group-hover:text-gold transition-colors duration-300">
                    {info.title}
                  </h3>
                  
                  {/* Details */}
                  <div className="space-y-2 mb-auto">
                    {info.details.map((detail, idx) => (
                      <p 
                        key={idx} 
                        className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>

                  {/* Action Link */}
                  {info.link && (
                    <a
                      href={info.link}
                      className="mt-6 pt-4 border-t border-zinc-800/50 group-hover:border-gold/20 transition-colors duration-300 flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-medium"
                    >
                      <span>{info.linkText}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}

                  {/* Opening Hours Special Styling */}
                  {!info.link && (
                    <div className="mt-4 pt-4 border-t border-zinc-800/50">
                      <div className="flex items-center gap-2 text-xs">
                        <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                        <span className={isOpen ? 'text-green-400' : 'text-red-400'}>
                          {isOpen ? 'Öppet nu' : 'Stängt'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <span className="text-gold text-sm tracking-[0.3em] uppercase mb-4 block">
                  Bordsbokning
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Boka Ditt Bord
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Fyll i formuläret nedan så bekräftar vi din bokning inom 24 timmar. 
                  För bokning samma dag, vänligen ring oss direkt.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
                    Fullständigt Namn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-zinc-900 border ${
                      errors.name ? 'border-red-500' : 'border-zinc-800'
                    } text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300`}
                    placeholder="Ditt namn"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
                      E-postadress *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border ${
                        errors.email ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300`}
                      placeholder="din@epost.se"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 text-sm font-medium">
                      Telefonnummer *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border ${
                        errors.phone ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300`}
                      placeholder="+46 70 123 45 67"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Date, Time & Guests */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-white mb-2 text-sm font-medium">
                      <Calendar className="inline w-4 h-4 mr-1" />
                      Datum *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full bg-zinc-900 border ${
                        errors.date ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-white mb-2 text-sm font-medium">
                      <Clock className="inline w-4 h-4 mr-1" />
                      Tid *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border ${
                        errors.time ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300`}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-white mb-2 text-sm font-medium">
                      <Users className="inline w-4 h-4 mr-1" />
                      Antal Gäster
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'gäst' : 'gäster'}
                        </option>
                      ))}
                      <option value="9+">9+ gäster</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm font-medium">
                    <MessageSquare className="inline w-4 h-4 mr-1" />
                    Särskilda Önskemål (Valfritt)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                    placeholder="Allergier, specialkost, högtider, sittplatspreferenser..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSuccess
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                      : 'bg-gold text-black hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20'
                  }`}
                >
                  {isSuccess ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      BOKNING MOTTAGEN
                    </>
                  ) : isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SKICKAR...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      BEKRÄFTA BOKNING
                    </>
                  )}
                </motion.button>

                <p className="text-zinc-500 text-xs text-center">
                  Genom att skicka detta formulär godkänner du vår integritetspolicy och användarvillkor.
                </p>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative h-[400px] bg-zinc-900 border border-zinc-800 overflow-hidden group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2075.4167890123456!2d16.18634!3d58.59167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c2e7e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sFredriksdalsgatan%2028%2C%20602%2023%20Norrk%C3%B6ping!5e0!3m2!1ssv!2sse!4v1234567890123!5m2!1ssv!2sse"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:filter-none transition-all duration-500"
                />
              </div>

              {/* Private Events */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
                <h3 className="font-serif text-2xl text-white mb-4">
                  Privata Event & Catering
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Planerar du ett speciellt evenemang? Våra privata matsalar och cateringtjänster 
                  är perfekta för firanden, företagsevent och intima sammankomster.
                </p>
                <ul className="space-y-3 text-zinc-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Privata matsalar för 30-200 gäster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Anpassad menyplanering med vår kock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Fullservice catering tillgänglig</span>
                  </li>
                </ul>
                <motion.a
                  href="mailto:info@sahararestaurang.se"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-gold text-gold px-6 py-3 rounded-lg font-semibold tracking-wide hover:bg-gold hover:text-black transition-colors duration-300"
                >
                  FRÅGA OM EVENT
                </motion.a>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 rounded-xl p-8">
                <h3 className="font-serif text-2xl text-white mb-4">
                  Behöver Du Hjälp Direkt?
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Vårt bokningsteam finns tillgängligt för att hjälpa dig planera den perfekta matupplevelsen.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+46707448442"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-semibold">+46 70 744 84 42</span>
                  </a>
                  <a
                    href="mailto:info@sahararestaurang.se"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@sahararestaurang.se</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
