"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 mb-4">
                Get in Touch
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold">
              Contact <span className="gradient-text">Us</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Whether you're exploring partnerships, need support, or want to
              learn more about our products — we're here to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info & Image */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-700">
                      BlueJay Innovative Labs Pvt Ltd
                      <br />
                      Hyderabad, Telangana, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+91"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      +91 —————
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Mon-Fri, 9AM-6PM IST
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:support@bluejayinnolabs.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      support@bluejayinnolabs.com
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 z-10"></div>
                <Image
                  src="/Customer-Support-Team.jpg"
                  alt="Customer Support Team"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <form
                className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Form submitted! We will get back to you soon.");
                }}
              >
                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How can we help you?"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us more about your requirements..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms of Service
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section>
        <div className="container px-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.78544583164745!2d78.38274852641119!3d17.446136717397565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f99f76919f%3A0x5d051fb3c5688b4d!2sFervid%20Smart%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1763442982073!5m2!1sen!2sin"
              width="100%"
              height="420"
              className="border-0"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
}