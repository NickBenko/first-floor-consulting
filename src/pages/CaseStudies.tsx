import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Mercapp - Herramienta de IMCOMMERCE',
      company: 'Empresa de Comercio Electrónico',
      industry: 'E-commerce',
      challenge: 'Necesidad de una plataforma de comercio electrónico personalizada que se adaptara a los procesos específicos del negocio',
      solution: 'Desarrollo de una aplicación web completa con gestión de inventario, procesamiento de pedidos y análisis de ventas',
      results: [
        'Aumento de ventas online en un 150%',
        'Reducción del tiempo de procesamiento de pedidos en un 70%',
        'Mejora de la experiencia del cliente',
        'ROI del 300% en el primer año'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe']
    },
    {
      title: 'Tukicar - App Sector de la Movilidad',
      company: 'Empresa de Transporte',
      industry: 'Movilidad',
      challenge: 'Necesidad de una aplicación móvil para gestionar flotas de vehículos y optimizar rutas',
      solution: 'Desarrollo de aplicación móvil nativa con sistema de geolocalización y gestión de flotas',
      results: [
        'Optimización de rutas en un 40%',
        'Reducción de costes de combustible en un 25%',
        'Mejora de la eficiencia operativa',
        'Más de 10,000 usuarios activos'
      ],
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Psicovitalem - App para Estado Psicológico',
      company: 'Centro de Psicología',
      industry: 'Salud Mental',
      challenge: 'Necesidad de una aplicación para seguimiento del estado psicológico de pacientes',
      solution: 'Desarrollo de aplicación móvil con cuestionarios personalizados y seguimiento de progreso',
      results: [
        'Mejora del seguimiento de pacientes en un 80%',
        'Reducción del tiempo de evaluación en un 60%',
        'Mayor engagement de pacientes',
        'Cumplimiento de normativas de privacidad'
      ],
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Logística - Software de Gestión Logística',
      company: 'Empresa de Logística',
      industry: 'Logística',
      challenge: 'Sistema heredado que causaba ineficiencias y errores en la gestión de almacenes',
      solution: 'Desarrollo de software personalizado para gestión integral de logística y almacenes',
      results: [
        'Reducción de errores en un 90%',
        'Aumento de la eficiencia operativa en un 50%',
        'Optimización del uso de almacenes',
        'Ahorro de 500K€ anuales en costes operativos'
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      title: 'VLA - App para Abogados',
      company: 'Despacho de Abogados',
      industry: 'Legal',
      challenge: 'Necesidad de digitalizar procesos legales y mejorar la gestión de casos',
      solution: 'Desarrollo de aplicación web para gestión de casos, documentación y seguimiento legal',
      results: [
        'Reducción del tiempo de gestión de casos en un 65%',
        'Mejora de la organización documental',
        'Mayor eficiencia en procesos legales',
        'Cumplimiento de normativas de protección de datos'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Docker']
    },
    {
      title: 'Sistema de Automatización Industrial',
      company: 'Empresa Manufacturera',
      industry: 'Manufactura',
      challenge: 'Procesos manuales que limitaban la producción y causaban errores',
      solution: 'Implementación de sistema de automatización industrial con monitorización en tiempo real',
      results: [
        'Aumento de la producción en un 35%',
        'Reducción de errores en un 85%',
        'Monitorización en tiempo real de 20 líneas de producción',
        'ROI del 250% en 12 meses'
      ],
      technologies: ['Python', 'PLC', 'SCADA', 'SQL Server', 'Azure']
    }
  ];

  return (
    <div className="flex-1 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Casos de Éxito
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo hemos ayudado a empresas de diversos sectores a transformar 
            sus operaciones y lograr resultados extraordinarios a través de la tecnología.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="font-semibold">{study.company}</span>
                      <span>•</span>
                      <span>{study.industry}</span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Caso de Éxito
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Desafío</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Solución</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Tecnologías</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Resultados</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-start"
                      >
                        <span className="text-green-600 mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Listo para Empezar tu Historia de Éxito?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Hablemos de cómo podemos ayudarte a transformar tu negocio con soluciones tecnológicas 
              adaptadas a tus necesidades específicas.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              Solicita una Consulta Gratuita
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies; 