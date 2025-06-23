import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LanguageContext } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useContext(LanguageContext);

  const navigation = [
    { name: language === 'en' ? 'Home' : 'Inicio', href: '#home' },
    { name: language === 'en' ? 'About' : 'Nosotros', href: '#about' },
    { name: language === 'en' ? 'Services' : 'Servicios', href: '#services' },
    { name: language === 'en' ? 'Projects' : 'Proyectos', href: '#projects' },
    { name: language === 'en' ? 'Contact' : 'Contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <span className="text-3xl lg:text-4xl font-bold text-primary-400">
              First Floor
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navigation.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 rounded-md text-base lg:text-lg font-medium transition-colors duration-200 text-gray-300 hover:text-white"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-base lg:text-lg"
            >
              {language === 'en' ? 'Get Quote' : 'Cotizar'}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-md text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left mt-6 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-lg"
              >
                {language === 'en' ? 'Get Quote' : 'Cotizar'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 