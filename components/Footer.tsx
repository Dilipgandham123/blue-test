'use client';

import { motion } from 'framer-motion';
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '#press' },
    ],
    Services: [
      { name: 'Video Conferencing', href: '#services' },
      { name: 'Audio Solutions', href: '#services' },
      { name: 'Display Systems', href: '#services' },
      { name: 'Integration', href: '#services' },
    ],
    Support: [
      { name: 'Help Center', href: '#support' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Warranty', href: '/warranty' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { Icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { Icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-700' },
    { Icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Bluejay<span className="text-blue-400">Innolabs</span>
                  </h3>
                  <p className="text-xs text-gray-500">Enterprise AV Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Transforming workspaces with innovative audio-video solutions and unmatched support.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {socialLinks.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center transition-all ${color} hover:text-white`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-white text-lg mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-block hover:translate-x-1 transform duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-slate-800"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <a href="mailto:info@bluejayinnolabs.com" className="text-white hover:text-blue-400 transition-colors">
                info@bluejayinnolabs.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Phone</p>
              <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Address</p>
              <p className="text-white">
                Hyderabad, Telangana<br />
                India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500"
          >
            © {currentYear} Bluejay Innolabs Pvt Ltd. All rights reserved.
          </motion.p>

          {/* Additional Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 text-gray-500"
          >
            <a href="#privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <span className="text-gray-700">•</span>
            <a href="#cookies" className="hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-slate-800"
        >
          <div className="px-4 py-2 bg-slate-800/50 rounded-lg text-xs text-gray-400">
            ISO 9001:2015 Certified
          </div>
          <div className="px-4 py-2 bg-slate-800/50 rounded-lg text-xs text-gray-400">
            5-Year Warranty
          </div>
          <div className="px-4 py-2 bg-slate-800/50 rounded-lg text-xs text-gray-400">
            24/7 Support
          </div>
          <div className="px-4 py-2 bg-slate-800/50 rounded-lg text-xs text-gray-400">
            Made in India
          </div>
        </motion.div>
      </div>
    </footer>
  );
}