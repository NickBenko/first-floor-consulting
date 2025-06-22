import React, { useContext, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { LanguageContext } from '../App';

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: language === 'en' ? 'E-commerce Platform' : 'Plataforma de E-commerce',
      description: language === 'en' 
        ? 'A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.'
        : 'Una solución completa de e-commerce con gestión avanzada de inventario, procesamiento de pagos y panel de análisis.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: language === 'en' ? 'Web Development' : 'Desarrollo Web'
    },
    {
      title: language === 'en' ? 'RPA Automation Suite' : 'Suite de Automatización RPA',
      description: language === 'en'
        ? 'Robotic Process Automation solution that streamlines repetitive tasks across multiple business processes.'
        : 'Solución de Automatización Robótica de Procesos que optimiza tareas repetitivas en múltiples procesos empresariales.',
      technologies: ['Python', 'UiPath', 'SQL Server', 'Power BI'],
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: language === 'en' ? 'RPA Solutions' : 'Soluciones RPA'
    },
    {
      title: language === 'en' ? 'Mobile Banking App' : 'App de Banca Móvil',
      description: language === 'en'
        ? 'Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.'
        : 'Aplicación segura de banca móvil con autenticación biométrica, transacciones en tiempo real y herramientas de planificación financiera.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'AWS'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: language === 'en' ? 'Mobile Development' : 'Desarrollo Móvil'
    },
    {
      title: language === 'en' ? 'Data Analytics Dashboard' : 'Panel de Análisis de Datos',
      description: language === 'en'
        ? 'Real-time data analytics platform with interactive visualizations, predictive modeling, and automated reporting.'
        : 'Plataforma de análisis de datos en tiempo real con visualizaciones interactivas, modelado predictivo y reportes automatizados.',
      technologies: ['Python', 'React', 'PostgreSQL', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
      category: language === 'en' ? 'Data Analytics' : 'Análisis de Datos'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'Our' : 'Nuestros'} <span className="text-primary-400">
              {language === 'en' ? 'Projects' : 'Proyectos'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Explore our portfolio of successful projects that demonstrate our expertise in technology solutions.'
              : 'Explora nuestro portafolio de proyectos exitosos que demuestran nuestra experiencia en soluciones tecnológicas.'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-80 lg:h-full">
                <img
                  src={currentProjectData.image}
                  alt={currentProjectData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentProjectData.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentProjectData.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentProjectData.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-3">
                    {language === 'en' ? 'Technologies Used' : 'Tecnologías Utilizadas'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProjectData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={currentProjectData.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink size={18} />
                    {language === 'en' ? 'Live Demo' : 'Demo en Vivo'}
                  </motion.a>
                  <motion.a
                    href={currentProjectData.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                  >
                    <Github size={18} />
                    {language === 'en' ? 'View Code' : 'Ver Código'}
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevProject}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gray-800 p-3 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-colors border border-gray-700"
            >
              <ChevronLeft size={24} />
            </motion.button>
            
            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-primary-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProject}
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

export default Projects; 