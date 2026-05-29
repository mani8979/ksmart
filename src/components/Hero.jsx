import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:from-gray-900/95 dark:via-gray-900/80 dark:to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
          alt="Fresh Groceries Background" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-sm font-semibold mb-4 border border-green-200 dark:border-green-800">
              Welcome to KS MART
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Fresh Groceries <br/> 
              <span className="text-primary">Delivered with Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
              Your trusted supermarket in Marripalem for daily essentials, groceries, snacks, beverages, household items, and more.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="tel:08981012344" 
                className="flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <PhoneCall size={20} />
                Call Now
              </a>
              <a 
                href="https://maps.app.goo.gl/search/KS+MART+Marripalem" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Floating Glassmorphism Cards */}
          <div className="flex flex-wrap gap-4 mt-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 dark:border-gray-700/50 shadow-xl"
            >
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                <Star className="fill-current" size={24} />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-lg leading-none">4.1 Rating</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">47 Reviews</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 dark:border-gray-700/50 shadow-xl"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-lg leading-none">Marripalem</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Andhra Pradesh</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-4 rounded-2xl border border-white/40 dark:border-gray-700/50 shadow-xl hidden sm:flex"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-lg leading-none">089810 12344</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Free Delivery Available</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
