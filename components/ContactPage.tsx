'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar, Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ContactPage() {
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
      details: ['123 Sahara Boulevard', 'Centrum, Stockholm 10001'],
    },
    {
      icon: Phone,
      title: 'Ring Oss',
      details: ['+46 (8) 123-4567', '+46 (8) 765-4321'],
    },
    {
      icon: Mail,
      title: 'Maila Oss',
      details: ['reservationer@saharagrill.se', 'info@saharagrill.se'],
    },
    {
      icon: Clock,
      title: 'Öppettider',
      details: ['Mån-Tors: 17:00 - 23:00', 'Fre-Sön: 12:00 - 00:00'],
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
      <section className="py-20 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zinc-900/50 border border-zinc-800 p-6 hover:border-gold transition-all duration-300 group"
              >
                <info.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-zinc-400 text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
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
                  Reservation
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Book Your Table
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Fill out the form below and we'll confirm your reservation within 24 hours. 
                  For same-day reservations, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-zinc-900 border ${
                      errors.name ? 'border-red-500' : 'border-zinc-800'
                    } text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border ${
                        errors.email ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white mb-2 text-sm font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border ${
                        errors.phone ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300`}
                      placeholder="+1 (555) 123-4567"
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
                      Date *
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
                      } text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-white mb-2 text-sm font-medium">
                      <Clock className="inline w-4 h-4 mr-1" />
                      Time *
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900 border ${
                        errors.time ? 'border-red-500' : 'border-zinc-800'
                      } text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300`}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-xs mt-1">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-white mb-2 text-sm font-medium">
                      <Users className="inline w-4 h-4 mr-1" />
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                      <option value="9+">9+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm font-medium">
                    <MessageSquare className="inline w-4 h-4 mr-1" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                    placeholder="Dietary restrictions, allergies, special occasions, seating preferences..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: isSubmitting || isSuccess ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSuccess ? 1 : 0.98 }}
                  className={`w-full py-4 font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSuccess
                      ? 'bg-green-600 text-white'
                      : isSubmitting
                      ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                      : 'bg-gold text-black hover:bg-gold/90'
                  }`}
                >
                  {isSuccess ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      RESERVATION SUBMITTED
                    </>
                  ) : isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      SUBMITTING...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      CONFIRM RESERVATION
                    </>
                  )}
                </motion.button>

                <p className="text-zinc-500 text-xs text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
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
              <div className="bg-zinc-900/50 border border-zinc-800 p-8">
                <h3 className="font-serif text-2xl text-white mb-4">
                  Private Events & Catering
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Planning a special event? Our private dining rooms and catering services 
                  are perfect for celebrations, corporate events, and intimate gatherings.
                </p>
                <ul className="space-y-3 text-zinc-400 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Private dining rooms for 10-50 guests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Custom menu planning with our chef</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Full-service catering available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>Wine pairing and bar services</span>
                  </li>
                </ul>
                <motion.a
                  href="mailto:events@saharagrill.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-gold text-gold px-6 py-3 font-semibold tracking-wide hover:bg-gold hover:text-black transition-colors duration-300"
                >
                  INQUIRE ABOUT EVENTS
                </motion.a>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 p-8">
                <h3 className="font-serif text-2xl text-white mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Our reservations team is available to help you plan the perfect dining experience.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-lg font-semibold">+1 (555) 123-4567</span>
                  </a>
                  <a
                    href="mailto:reservations@saharagrill.com"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>reservations@saharagrill.com</span>
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
