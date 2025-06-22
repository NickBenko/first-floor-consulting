import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex-1 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre SoftCode
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo de expertos tecnológicos apasionados dedicados a ayudar a las empresas 
            a tener éxito en la era digital a través de soluciones innovadoras y orientación estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Empoderar a las empresas con soluciones tecnológicas de vanguardia que impulsen el crecimiento, 
              mejoren la eficiencia y creen ventajas competitivas duraderas en un panorama digital en constante evolución.
            </p>
            <p className="text-lg text-gray-600">
              Creemos que la tecnología debe ser un habilitador, no una barrera. Nuestro enfoque 
              se centra en entender tus desafíos empresariales únicos y entregar soluciones 
              personalizadas que se alineen con tus objetivos estratégicos.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Por qué Elegirnos?
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Más de 22 años de experiencia en la industria</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Profesionales tecnológicos certificados</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Historial probado de proyectos exitosos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Soporte y mantenimiento continuo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Precios competitivos y facturación transparente</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Más de 150 empresas satisfechas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovación</h3>
              <p className="text-gray-600">
                Nos mantenemos a la vanguardia de las tendencias tecnológicas para entregar soluciones innovadoras 
                que den a nuestros clientes una ventaja competitiva.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excelencia</h3>
              <p className="text-gray-600">
                Mantenemos los más altos estándares de calidad en todo lo que hacemos, desde 
                la consulta inicial hasta la entrega final y más allá.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Asociación</h3>
              <p className="text-gray-600">
                Construimos relaciones a largo plazo con nuestros clientes, trabajando como 
                socios de confianza para lograr sus objetivos empresariales.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Quieres saber cómo podemos ayudarte?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contacta con nosotros y analizaremos tu caso sin compromiso
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
          >
            Contacta ahora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 