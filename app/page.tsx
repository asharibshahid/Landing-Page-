"use client"

import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Code, Palette, Zap, ShoppingCart } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-white text-blue-700 rounded-lg shadow-lg transition-all"
  >
    <Icon className="w-8 h-8 mx-auto mb-3" />
    <h3 className="text-xl font-bold">{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      {/* Header Section */}
      <motion.header 
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl mx-auto text-center py-12 px-6"
      >
        <h1 className="text-5xl font-bold mb-6">
          Stunning Websites for Your Business{' '}
          <span className="inline-block animate-bounce">🚀</span>
        </h1>
        <p className="text-xl">
          I create high-performing, beautiful websites using Next.js, Tailwind, GSAP & Sanity.
        </p>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="text-3xl font-semibold mb-4">Want a high-converting website?</h2>
        <p className="text-lg mb-8">
          I specialize in creating fast, animated, and visually appealing websites 
          for SaaS, eCommerce, and personal brands.
        </p>
        <motion.a
          href="/ContactUs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition"
        >
          Get a Free Website Audit
        </motion.a>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="mt-24 w-full max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <ServiceCard
            icon={Code}
            title="Next.js & Tailwind Websites"
            description="Blazing fast and highly scalable modern websites."
          />
          <ServiceCard
            icon={Palette}
            title="UI/UX Focused Design"
            description="Beautiful, user-friendly, and conversion-focused designs."
          />
          <ServiceCard
            icon={Zap}
            title="GSAP Animations"
            description="Engaging animations that enhance user experience."
          />
          <ServiceCard
            icon={ShoppingCart}
            title="eCommerce & SaaS Solutions"
            description="Optimized solutions for online stores and SaaS businesses."
          />
        </motion.div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center px-6 pb-12"
      >
        <h2 className="text-3xl font-semibold mb-4">Let's Build Something Amazing!</h2>
        <p className="text-lg mb-8">
          Get in touch for a <strong>FREE UI/UX Website Audit</strong> or to discuss your project.
        </p>
        <motion.a
          href="/ContactUs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition"
        >
          <Mail className="w-5 h-5 mr-2" />
          Contact Me
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer className="mt-12 py-6 text-center text-sm opacity-80">
        <p>© 2025 Asharib | Web Developer & UI/UX Designer</p>
      </footer>
    </div>
  );
}
