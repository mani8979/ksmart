import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBasket, Cookie, CupSoda, Milk, SprayCan, HandMetal, PenTool, Snowflake } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Groceries', icon: <ShoppingBasket size={32} />, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop' },
    { name: 'Snacks', icon: <Cookie size={32} />, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=600&auto=format&fit=crop' },
    { name: 'Beverages', icon: <CupSoda size={32} />, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop' },
    { name: 'Dairy Products', icon: <Milk size={32} />, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop' },
    { name: 'Household Essentials', icon: <SprayCan size={32} />, image: 'https://images.unsplash.com/photo-1584824486509-112e4181f1ce?q=80&w=600&auto=format&fit=crop' },
    { name: 'Personal Care', icon: <HandMetal size={32} />, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop' },
    { name: 'Stationery', icon: <PenTool size={32} />, image: 'https://images.unsplash.com/photo-1583485088034-697b5a541b36?q=80&w=600&auto=format&fit=crop' },
    { name: 'Frozen Foods', icon: <Snowflake size={32} />, image: 'https://images.unsplash.com/photo-1580959375944-cbfa8a21ba8d?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Shop by <span className="text-primary">Categories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our wide range of premium products neatly organized for your convenience.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-square bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col items-center text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
