import React, { useContext, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { LanguageContext } from '../App';

const Testimonials = () => {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: language === 'en' ? 'CTO, TechCorp' : 'CTO, TechCorp',
      content: language === 'en'
        ? 'First Floor transformed our entire business operations with their RPA solution. We saw a 70% reduction in manual processes and improved accuracy across all departments.'
        : 'First Floor transformó completamente nuestras operaciones empresariales con su solución RPA. Vimos una reducción del 70% en procesos manuales y mejor precisión en todos los departamentos.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      position: language === 'en' ? 'CEO, InnovateTech' : 'CEO, InnovateTech',
      content: language === 'en'
        ? 'The custom software development team at First Floor delivered exactly what we needed. Their attention to detail and technical expertise exceeded our expectations.'
        : 'El equipo de desarrollo de software personalizado de First Floor entregó exactamente lo que necesitábamos. Su atención al detalle y experiencia técnica superó nuestras expectativas.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      position: language === 'en' ? 'Operations Director, Global Solutions' : 'Directora de Operaciones, Soluciones Globales',
      content: language === 'en'
        ? 'Working with First Floor on our digital transformation was a game-changer. They understood our business needs and delivered solutions that drive real results.'
        : 'Trabajar con First Floor en nuestra transformación digital fue un cambio de juego. Entendieron nuestras necesidades empresariales y entregaron soluciones que generan resultados reales.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      position: language === 'en' ? 'IT Manager, FinancePro' : 'Gerente de IT, FinancePro',
      content: language === 'en'
        ? 'The mobile banking app developed by First Floor has received excellent user feedback. The security features and user experience are outstanding.'
        : 'La aplicación de banca móvil desarrollada por First Floor ha recibido excelentes comentarios de usuarios. Las características de seguridad y experiencia de usuario son sobresalientes.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'What Our' : 'Lo que Nuestros'} <span className="text-primary-400">
              {language === 'en' ? 'Clients Say' : 'Clientes Dicen'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Don\'t just take our word for it. Here\'s what our clients have to say about working with First Floor.'
              : 'No solo tomes nuestra palabra. Aquí está lo que nuestros clientes tienen que decir sobre trabajar con First Floor.'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 border border-gray-700">
            <div className="text-center">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary-400 mx-auto" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                "{currentTestimonialData.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <img
                  src={currentTestimonialData.image}
                  alt={currentTestimonialData.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">
                    {currentTestimonialData.name}
                  </h4>
                  <p className="text-gray-400">
                    {currentTestimonialData.position}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1">
                {[...Array(currentTestimonialData.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            {/* Testimonial Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 