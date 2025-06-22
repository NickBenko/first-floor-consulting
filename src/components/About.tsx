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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.title} <span className="text-primary-400">First Floor</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
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
              <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{t.mission.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.mission.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{t.vision.title}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.vision.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;