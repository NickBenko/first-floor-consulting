import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { LanguageContext } from '../App';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  const content = {
    en: {
      description: "Leading technology consulting firm specializing in custom software development, digital transformation, and RPA solutions that drive business innovation.",
      services: "Services",
      servicesList: [
        "Custom Software",
        "Digital Transformation", 
        "RPA Solutions",
        "Cloud Services",
        "Cybersecurity"
      ],
      contact: "Contact",
      address: "New York, NY",
      phone: "+1 (555) 123-4567",
      email: "info@firstfloor.com",
      copyright: "All rights reserved.",
      links: [
        "Privacy Policy",
        "Terms of Service", 
        "Cookie Policy"
      ]
    },
    es: {
      description: "Empresa líder de consultoría tecnológica especializada en desarrollo de software personalizado, transformación digital y soluciones RPA que impulsan la innovación empresarial.",
      services: "Servicios",
      servicesList: [
        "Software Personalizado",
        "Transformación Digital",
        "Soluciones RPA", 
        "Servicios en la Nube",
        "Ciberseguridad"
      ],
      contact: "Contacto",
      address: "Nueva York, NY",
      phone: "+1 (555) 123-4567",
      email: "info@firstfloor.com",
      copyright: "Todos los derechos reservados.",
      links: [
        "Política de Privacidad",
        "Términos de Servicio",
        "Política de Cookies"
      ]
    }
  };

  const t = content[language];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="w-full px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-400 mb-4">First Floor</h3>
              <p className="text-gray-300 mb-6 max-w-lg text-lg">
                {t.description}
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-primary-400 hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">{t.services}</h4>
            <ul className="space-y-3">
              {t.servicesList.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-lg">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg lg:text-xl font-semibold text-white mb-4">{t.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400 text-lg">
                <Mail size={18} className="mr-3 text-primary-400" />
                <span>{t.email}</span>
              </div>
              <div className="flex items-center text-gray-400 text-lg">
                <Phone size={18} className="mr-3 text-primary-400" />
                <span>{t.phone}</span>
              </div>
              <div className="flex items-center text-gray-400 text-lg">
                <MapPin size={18} className="mr-3 text-primary-400" />
                <span>{t.address}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-base">
            © {currentYear} First Floor. {t.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {t.links.map((link, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-primary-400 text-base transition-colors">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 