import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ShoppingCart, Home, Info, Grid, Phone, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <Home size={20} /> },
    { name: 'About', to: 'about', icon: <Info size={20} /> },
    { name: 'Categories', to: 'categories', icon: <Grid size={20} /> },
    { name: 'Contact', to: 'contact', icon: <Phone size={20} /> },
  ];

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              KS
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled || darkMode ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
              KS <span className="text-primary">MART</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500} 
              className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-green-600 transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Visit Store
            </Link>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 dark:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (optional if using bottom nav) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.to} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-800 dark:text-gray-200 font-medium text-lg border-b dark:border-gray-800 pb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-40 flex justify-around items-center py-3 pb-safe shadow-[0_-5px_15px_-10px_rgba(0,0,0,0.1)]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center justify-center text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary active-class:text-primary"
          >
            {link.icon}
            <span className="text-[10px] mt-1 font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
