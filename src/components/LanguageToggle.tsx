import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { LanguageContext } from '../App';

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-primary-400 hover:bg-gray-700 transition-colors border border-gray-700"
      title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
    >
      <Globe size={20} />
    </motion.button>
  );
};

export default LanguageToggle; 