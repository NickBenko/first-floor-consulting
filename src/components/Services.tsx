import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Database, Shield, Smartphone, Globe } from 'lucide-react';
import { LanguageContext } from '../App';

const Services = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Our",
      highlight: "Services",
      subtitle: "We offer comprehensive technology solutions to help your business thrive in the digital age.",
      services: [
        {
          icon: Code,
          title: 'Custom Software Development',
          description: 'Tailored software solutions designed to meet your specific business needs and requirements.',
          features: ['Web Applications', 'Desktop Software', 'API Development', 'Legacy System Integration']
        },
        {
          icon: Zap,
          title: 'Digital Transformation',
          description: 'Comprehensive digital transformation strategies to modernize your business operations.',
          features: ['Process Automation', 'Cloud Migration', 'Data Analytics', 'Workflow Optimization']
        },
        {
          icon: Database,
          title: 'RPA Solutions',
          description: 'Robotic Process Automation to streamline repetitive tasks and improve efficiency.',
          features: ['Process Mapping', 'Bot Development', 'Integration', 'Monitoring & Analytics']
        },
        {
          icon: Shield,
          title: 'Cybersecurity',
          description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
          features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
        },
        {
          icon: Smartphone,
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
          features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization']
        },
        {
          icon: Globe,
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and services to support your growing business needs.',
          features: ['AWS/Azure/GCP', 'Serverless', 'DevOps', 'Cost Optimization']
        }
      ],
      cta: {
        title: "Ready to Transform Your Business?",
        subtitle: "Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.",
        button: "Get Free Consultation"
      }
    },
    es: {
      title: "Nuestros",
      highlight: "Servicios",
      subtitle: "Ofrecemos soluciones tecnológicas integrales para ayudar a tu negocio a prosperar en la era digital.",
      services: [
        {
          icon: Code,
          title: 'Desarrollo de Software Personalizado',
          description: 'Soluciones de software a medida diseñadas para satisfacer las necesidades específicas de tu negocio.',
          features: ['Aplicaciones Web', 'Software de Escritorio', 'Desarrollo de APIs', 'Integración de Sistemas Legacy']
        },
        {
          icon: Zap,
          title: 'Transformación Digital',
          description: 'Estrategias integrales de transformación digital para modernizar las operaciones de tu negocio.',
          features: ['Automatización de Procesos', 'Migración a la Nube', 'Análisis de Datos', 'Optimización de Flujos de Trabajo']
        },
        {
          icon: Database,
          title: 'Soluciones RPA',
          description: 'Automatización Robótica de Procesos para optimizar tareas repetitivas y mejorar la eficiencia.',
          features: ['Mapeo de Procesos', 'Desarrollo de Bots', 'Integración', 'Monitoreo y Análisis']
        },
        {
          icon: Shield,
          title: 'Ciberseguridad',
          description: 'Soluciones de seguridad avanzadas para proteger tus activos digitales y garantizar el cumplimiento.',
          features: ['Auditorías de Seguridad', 'Pruebas de Penetración', 'Cumplimiento', 'Respuesta a Incidentes']
        },
        {
          icon: Smartphone,
          title: 'Desarrollo Móvil',
          description: 'Aplicaciones móviles nativas y multiplataforma para iOS y Android.',
          features: ['Apps Nativas', 'Multiplataforma', 'Diseño UI/UX', 'Optimización App Store']
        },
        {
          icon: Globe,
          title: 'Soluciones en la Nube',
          description: 'Infraestructura y servicios en la nube escalables para apoyar las necesidades crecientes de tu negocio.',
          features: ['AWS/Azure/GCP', 'Serverless', 'DevOps', 'Optimización de Costos']
        }
      ],
      cta: {
        title: "¿Listo para Transformar tu Negocio?",
        subtitle: "Hablemos de cómo nuestras soluciones tecnológicas pueden ayudarte a alcanzar tus objetivos empresariales y mantenerte adelante de la competencia.",
        button: "Obtener Consulta Gratuita"
      }
    }
  };

  const t = content[language];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.title} <span className="text-primary-400">{t.highlight}</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {t.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 p-8 lg:p-10 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="bg-primary-500/20 rounded-full w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center mb-6 group-hover:bg-primary-500/30 transition-colors">
                <service.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary-400" />
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400 text-lg">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600/20 to-primary-500/20 p-8 lg:p-12 rounded-xl border border-primary-500/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              {t.cta.title}
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
              {t.cta.subtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-lg"
            >
              {t.cta.button}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 