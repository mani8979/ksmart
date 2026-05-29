import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                KS
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                KS <span className="text-primary">MART</span>
              </span>
            </div>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Your trusted local supermarket in Marripalem, committed to delivering fresh groceries and daily essentials with a smile.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Categories', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Categories</h4>
            <ul className="space-y-3">
              {['Fresh Groceries', 'Snacks & Beverages', 'Dairy Products', 'Household Essentials', 'Personal Care'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Store Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <span>KS MART, Main Road, near SBI ATM, Marripalem, AP – 531033</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:08981012344" className="hover:text-primary transition-colors">089810 12344</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:info@ksmart.com" className="hover:text-primary transition-colors">info@ksmart.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KS MART. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Designed with <span className="text-red-500">♥</span> modern premium UI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
