import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Desarrollo de Software a Medida',
      description: 'Creamos soluciones de software personalizadas que se adaptan perfectamente a los procesos específicos de tu empresa.',
      features: ['Análisis de requerimientos', 'Diseño personalizado', 'Desarrollo ágil', 'Implementación y soporte'],
      benefits: ['Optimización de procesos', 'Reducción de costes', 'Mayor eficiencia', 'Escalabilidad']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android.',
      features: ['Apps nativas', 'Desarrollo multiplataforma', 'UI/UX optimizado', 'Integración con sistemas'],
      benefits: ['Mejor experiencia de usuario', 'Acceso desde cualquier lugar', 'Funcionalidades avanzadas', 'Mantenimiento continuo']
    },
    {
      icon: GlobeAltIcon,
      title: 'Desarrollo Web',
      description: 'Creamos sitios web y aplicaciones web modernas, responsivas y optimizadas.',
      features: ['Diseño responsivo', 'Optimización SEO', 'Integración de sistemas', 'Mantenimiento web'],
      benefits: ['Presencia online profesional', 'Mejor posicionamiento', 'Funcionalidades avanzadas', 'Soporte técnico']
    },
    {
      icon: CogIcon,
      title: 'Automatización de Procesos',
      description: 'Automatizamos tus procesos empresariales para aumentar la eficiencia y reducir errores.',
      features: ['Análisis de procesos', 'Automatización RPA', 'Integración de sistemas', 'Monitoreo continuo'],
      benefits: ['Reducción de errores', 'Ahorro de tiempo', 'Mayor productividad', 'Escalabilidad']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Ciberseguridad y Compliance',
      description: 'Protegemos tu empresa con soluciones de seguridad avanzadas y cumplimiento normativo.',
      features: ['Auditorías de seguridad', 'Implementación de medidas', 'Cumplimiento normativo', 'Formación del equipo'],
      benefits: ['Protección de datos', 'Cumplimiento legal', 'Confianza de clientes', 'Reducción de riesgos']
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence',
      description: 'Transformamos tus datos en información valiosa para la toma de decisiones estratégicas.',
      features: ['Análisis de datos', 'Dashboards personalizados', 'Reportes automáticos', 'Predicciones avanzadas'],
      benefits: ['Mejor toma de decisiones', 'Visibilidad del negocio', 'Identificación de oportunidades', 'Optimización de recursos']
    },
    {
      icon: CloudArrowUpIcon,
      title: 'Migración a la Nube',
      description: 'Migramos tu infraestructura a la nube para mayor flexibilidad y escalabilidad.',
      features: ['Evaluación de infraestructura', 'Migración planificada', 'Optimización de costes', 'Soporte post-migración'],
      benefits: ['Reducción de costes', 'Mayor flexibilidad', 'Escalabilidad', 'Mejor rendimiento']
    },
    {
      icon: UserGroupIcon,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramos a tu empresa en la transformación digital y optimización tecnológica.',
      features: ['Evaluación tecnológica', 'Roadmap de transformación', 'Selección de tecnologías', 'Acompañamiento'],
      benefits: ['Estrategia clara', 'Mejor ROI', 'Reducción de riesgos', 'Competitividad']
    }
  ];

  return (
    <div className="flex-1 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales diseñadas para ayudar a tu empresa 
            a prosperar en el panorama digital. Desde la estrategia hasta la implementación, estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Beneficios:</h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-600">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas una Solución Personalizada?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada empresa es única. Podemos crear soluciones personalizadas adaptadas a tus 
            necesidades y requisitos específicos.
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
  );
};

export default Services; 