import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'es';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    en: {
      title: "Transform Your Business with",
      highlight: "Custom Software Solutions",
      subtitle: "We specialize in custom software development, digital transformation, and RPA solutions that drive innovation and efficiency.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Watch Demo",
      scrollText: "Scroll to explore"
    },
    es: {
      title: "Transforma tu Negocio con",
      highlight: "Soluciones de Software Personalizadas",
      subtitle: "Nos especializamos en desarrollo de software personalizado, transformación digital y soluciones RPA que impulsan la innovación y eficiencia.",
      ctaPrimary: "Comenzar",
      ctaSecondary: "Ver Demo",
      scrollText: "Desplázate para explorar"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-gray-600/20 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [180, 360, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.title}{' '}
          <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            {t.highlight}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="group bg-primary-600 text-white px-10 py-4 rounded-lg text-lg lg:text-xl font-semibold flex items-center gap-2 hover:bg-primary-700 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.ctaPrimary}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="group bg-gray-800 text-white px-10 py-4 rounded-lg text-lg lg:text-xl font-semibold flex items-center gap-2 hover:bg-gray-700 hover:text-primary-300 transition-all duration-300 border border-gray-600 hover:border-primary-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-5 h-5" />
            {t.ctaSecondary}
          </motion.button>
        </motion.div>

        {/* Scroll indicator - positioned between buttons and section end */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-primary-400 transition-colors flex flex-col items-center gap-3 mx-auto focus:outline-none px-6 py-4 rounded-lg hover:bg-gray-800/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-lg lg:text-xl font-medium">{t.scrollText}</span>
            <ChevronDown className="w-8 h-8 lg:w-10 lg:h-10" />
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Y2EzYWYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
    </section>
  );
};

export default Hero; 