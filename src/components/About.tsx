import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import { LanguageContext } from '../App';

const About = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "About",
      subtitle: "We are a leading technology consulting firm specializing in custom software development, digital transformation, and RPA solutions that drive business innovation and efficiency.",
      stats: [
        { icon: Users, number: '150+', label: 'Happy Clients' },
        { icon: Target, number: '200+', label: 'Projects Completed' },
        { icon: Award, number: '5+', label: 'Years Experience' },
        { icon: TrendingUp, number: '99%', label: 'Success Rate' },
      ],
      mission: {
        title: "Our Mission",
        description: "To empower businesses through innovative technology solutions that streamline operations, enhance productivity, and drive sustainable growth in the digital age."
      },
      vision: {
        title: "Our Vision",
        description: "To be the trusted technology partner for businesses worldwide, leading the digital transformation journey with cutting-edge solutions and exceptional service."
      }
    },
    es: {
      title: "Sobre",
      subtitle: "Somos una empresa líder de consultoría tecnológica especializada en desarrollo de software personalizado, transformación digital y soluciones RPA que impulsan la innovación y eficiencia empresarial.",
      stats: [
        { icon: Users, number: '150+', label: 'Clientes Satisfechos' },
        { icon: Target, number: '200+', label: 'Proyectos Completados' },
        { icon: Award, number: '5+', label: 'Años de Experiencia' },
        { icon: TrendingUp, number: '99%', label: 'Tasa de Éxito' },
      ],
      mission: {
        title: "Nuestra Misión",
        description: "Empoderar a las empresas a través de soluciones tecnológicas innovadoras que optimicen operaciones, mejoren la productividad e impulsen el crecimiento sostenible en la era digital."
      },
      vision: {
        title: "Nuestra Visión",
        description: "Ser el socio tecnológico de confianza para empresas de todo el mundo, liderando el viaje de transformación digital con soluciones de vanguardia y servicio excepcional."
      }
    }
  };

  const t = content[language];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.title} <span className="text-primary-400">First Floor</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16"
        >
          {t.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-800 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 lg:p-12 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t.mission.title}</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.mission.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 lg:p-12 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t.vision.title}</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t.vision.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;