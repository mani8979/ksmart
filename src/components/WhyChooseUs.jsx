import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, DollarSign, ShieldCheck, HeartHandshake, Zap, ShoppingBag } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { title: 'Fresh Products', desc: 'Daily handpicked fresh groceries directly sourced for quality.', icon: <Leaf size={32} /> },
    { title: 'Affordable Prices', desc: 'Best deals and reasonable pricing to help you save more every day.', icon: <DollarSign size={32} /> },
    { title: 'Trusted Local Store', desc: 'Your friendly neighborhood supermarket with a track record of trust.', icon: <ShieldCheck size={32} /> },
    { title: 'Friendly Service', desc: 'Our staff is always ready to help you find what you need with a smile.', icon: <HeartHandshake size={32} /> },
    { title: 'Fast Shopping', desc: 'Optimized store layout and quick checkouts for your convenience.', icon: <Zap size={32} /> },
    { title: 'Daily Essentials', desc: 'Everything you need to run your home, available under one roof.', icon: <ShoppingBag size={32} /> },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Why Choose <span className="text-primary">KS MART?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            We go above and beyond to ensure you have the best shopping experience in Marripalem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-700/30 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:bg-white dark:hover:bg-gray-800 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
