'use client';

import { motion } from 'framer-motion';
import { 
  Mic, 
  Video, 
  Monitor, 
  Wifi, 
  Shield, 
  Settings,
  Headphones,
  Zap,
  Award
} from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Video,
    title: 'HD Video Systems',
    description: 'Crystal-clear 4K video conferencing solutions for seamless remote collaboration.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Mic,
    title: 'Professional Audio',
    description: 'State-of-the-art audio systems with noise cancellation and spatial sound.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Monitor,
    title: 'Display Solutions',
    description: 'Interactive displays and projection systems for impactful presentations.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Wifi,
    title: 'Wireless Integration',
    description: 'Seamless wireless connectivity for all your devices and systems.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Shield,
    title: 'Secure Systems',
    description: 'Enterprise-grade security with encrypted communications and access control.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Settings,
    title: 'Custom Integration',
    description: 'Tailored solutions that integrate perfectly with your existing infrastructure.',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Zap,
    title: 'Fast Deployment',
    description: 'Quick installation and setup with minimal disruption to your operations.',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Award-winning solutions trusted by Fortune 500 companies worldwide.',
    color: 'from-teal-500 to-teal-600'
  }
];

export default function Features() {
  return (
    <section id="services" className="py-10 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 mb-6">
            Complete <span className="gradient-text">AV Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From design to deployment, we provide end-to-end audio-video solutions 
            that transform how your organization communicates and collaborates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <Link href={'/product/productavs'}>
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-display mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
</Link>
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Ready to Transform Your Workspace?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our solutions can meet your specific needs
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}