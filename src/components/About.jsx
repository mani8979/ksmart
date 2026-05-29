import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ThumbsUp, Package, Clock } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { label: 'Reviews', value: '47+', icon: <ThumbsUp className="text-primary" size={28} /> },
    { label: 'Happy Customers', value: '1000+', icon: <ShieldCheck className="text-primary" size={28} /> },
    { label: 'Products', value: '500+', icon: <Package className="text-primary" size={28} /> },
    { label: 'Stock', value: 'Daily Fresh', icon: <Clock className="text-primary" size={28} /> },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1974&auto=format&fit=crop" 
                alt="Store Interior" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-10 -left-6 w-32 h-32 bg-yellow-200 dark:bg-yellow-900/40 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-6 w-40 h-40 bg-green-200 dark:bg-green-900/40 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your Premium <span className="text-primary">Local Supermarket</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Located conveniently in Marripalem, KS MART is dedicated to providing you with the freshest groceries and highest quality daily essentials. We believe in affordable pricing without compromising on quality or customer service.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                Whether you need fresh stock for your daily household needs or special ingredients for a weekend feast, we've got you covered with our extensive range of products.
              </p>
            </motion.div>

            {/* Animated Counters */}
            <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 bg-white dark:bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
