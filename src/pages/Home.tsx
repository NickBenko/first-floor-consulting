import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CogIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const benefits = [
    {
      icon: CheckCircleIcon,
      title: 'Reducción de errores y costes',
      description: 'Eliminamos errores manuales y optimizamos costes operativos'
    },
    {
      icon: ChartBarIcon,
      title: 'Incremento en la eficiencia',
      description: 'Automatizamos procesos para maximizar la productividad'
    },
    {
      icon: UserGroupIcon,
      title: 'Mejor experiencia del usuario',
      description: 'Interfaces intuitivas que mejoran la satisfacción'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Mejora tu competitividad',
      description: 'Gana terreno a tu competencia con tecnología avanzada'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Escalabilidad adaptada',
      description: 'Soluciones que crecen con tu negocio'
    }
  ];

  const process = [
    {
      icon: DocumentTextIcon,
      title: 'Análisis de Requerimientos',
      description: 'Entendemos tus necesidades específicas'
    },
    {
      icon: CogIcon,
      title: 'Diseño y Prototipo',
      description: 'Creamos soluciones personalizadas'
    },
    {
      icon: CodeBracketIcon,
      title: 'Desarrollo y Pruebas',
      description: 'Implementamos con calidad garantizada'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Implementación y Soporte',
      description: 'Acompañamiento continuo post-lanzamiento'
    }
  ];

  const testimonials = [
    {
      name: 'Juan Torres',
      date: '2024-09-27',
      content: 'Trabajamos con Softcode desde hace años, con un equipo de desarrollo y la experiencia ha sido muy positiva, siempre muy pendientes del trabajo de sus programadores y apoyando nuestros proyectos. Gracias por todo'
    },
    {
      name: 'Jose Maria Garcia',
      date: '2024-09-20',
      content: 'Una gran compañia, con profesionales de valía internacional. Nos ayudaron a desatascar un complicado proyectos de Apps. Muy recomendables!'
    },
    {
      name: 'Roberto',
      date: '2024-09-19',
      content: 'Mi relación con SOFTCODE viene desde hace muchos años. Desde que les conocí he trabajado todos mis desarrollos informáticos con ellos. Profesionalidad ante todo. Y buen trabajo en equipo.'
    }
  ];

  const projects = [
    { name: 'Mercapp', category: 'Herramienta de IMCOMMERCE' },
    { name: 'Tukicar', category: 'App sector de la movilidad' },
    { name: 'Psicovitalem', category: 'App para estado psicológico' },
    { name: 'Logística', category: 'Software de gestión logística' },
    { name: 'VLA', category: 'App para abogados' }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforma tu negocio con nuestros
              <span className="text-blue-600 block"> desarrollos de Software</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Nuestras soluciones de software personalizadas pueden revolucionar los procesos de tu empresa y llevar tu negocio al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                ¡Descubre Cómo Podemos Ayudarte!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Need Software Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¡Necesitas Software a Medida!
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                ¿Te enfrentas a procesos poco eficientes y a soluciones tecnológicas que no se adaptan a tus necesidades específicas?
              </p>
              <p>
                ¿Usas software genérico que no soluciona al 100% los procesos de tu empresa y ralentizan los procesos de tu empresa?
              </p>
              <p className="font-semibold text-blue-600">
                Somos expertos con más de 22 años de experiencia en diseñar software a medida para resolver estos problemas, ofreciendo soluciones únicas que impulsan la eficiencia y la rentabilidad de tu negocio.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                ¡Solicita una consulta gratuita hoy!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras soluciones de software a medida ofrecen beneficios clave para tu empresa:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              Agenda una reunión sin compromiso para analizar tu caso
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              No lo decimos nosotros, lo dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empresas líderes como Netflix, Amazon y Uber han transformado sus operaciones con software personalizado.
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Nuestras soluciones han ayudado a más de 150 empresas a alcanzar nuevos niveles de éxito.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Como desarrollamos tu software en Softcode?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos adaptamos a tu forma de trabajar y a las necesidades que mejor convengan a tu empresa, brindándote la máxima flexibilidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro equipo, tu departamento de desarrollo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              También podemos poner a tu disposición el equipo humano, In-House, que requiera tu proyecto. De esta manera nos integramos en tu empresa para trabajar codo con codo con el área de desarrollo de tu negocio.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Así obtendrás el máximo flujo de trabajo evitado los sobrecostes de HeadCount.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Algunos de nuestros trabajos
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600">
                  {project.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¡Empieza hoy mismo! y deja de perder tiempo y dinero
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            No esperes más para optimizar tus procesos y mejorar tu rentabilidad y competitividad. Danos la oportunidad de pondremos en contacto contigo para analizar cómo nuestras soluciones pueden solucionar las necesidades específicas de tu empresa.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg"
          >
            Contacta ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 