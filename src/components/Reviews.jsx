import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Verma",
      date: "2 weeks ago",
      rating: 5,
      text: "Excellent local supermarket! They always have fresh vegetables and the store is very well organized. The staff is polite and helpful.",
      image: "https://i.pravatar.cc/150?u=1"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      date: "1 month ago",
      rating: 4,
      text: "Good place for daily groceries. Prices are reasonable and they offer home delivery which is a big plus for me. Highly recommended in Marripalem.",
      image: "https://i.pravatar.cc/150?u=2"
    },
    {
      id: 3,
      name: "Karthik Kumar",
      date: "3 months ago",
      rating: 5,
      text: "KS MART is my go-to store. Very clean, great stock of both local and branded items. Checkout is usually fast and hassle-free.",
      image: "https://i.pravatar.cc/150?u=3"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-yellow-500 fill-yellow-500" size={32} />
              <span className="text-4xl font-bold text-gray-900 dark:text-white">4.1</span>
              <span className="text-gray-500 dark:text-gray-400 mt-2">/ 5.0</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by our <span className="text-primary">Community</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              See what our customers have to say about their shopping experience at KS MART. We value every feedback!
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={prevReview}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextReview}
                className="w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* Right Carousel */}
          <div className="w-full md:w-2/3 relative h-[350px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
              >
                <Quote className="text-gray-200 dark:text-gray-700 absolute top-6 right-8 w-16 h-16 -z-0" />
                
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className={i < reviews[currentIndex].rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300 dark:text-gray-600"} 
                      />
                    ))}
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-8 line-clamp-4">
                    "{reviews[currentIndex].text}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 relative z-10 border-t border-gray-100 dark:border-gray-700 pt-4 mt-auto">
                  <img 
                    src={reviews[currentIndex].image} 
                    alt={reviews[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{reviews[currentIndex].name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{reviews[currentIndex].date} • Google Review</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Reviews;
