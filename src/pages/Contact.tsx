import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  const services = [
    'Desarrollo de Software a Medida',
    'Desarrollo de Aplicaciones Móviles',
    'Desarrollo Web',
    'Automatización de Procesos',
    'Ciberseguridad y Compliance',
    'Business Intelligence',
    'Migración a la Nube',
    'Consultoría Tecnológica',
    'Otro'
  ];

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Dirección',
      details: ['Paseo de la Castellana, 259 C', 'Cuatro Torres Business Area, 28046 Madrid'],
      link: 'https://maps.google.com'
    },
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      details: ['91 804 55 46'],
      link: 'tel:918045546'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['info@softcode.es'],
      link: 'mailto:info@softcode.es'
    },
    {
      icon: ClockIcon,
      title: 'Horario de Atención',
      details: ['Lunes - Viernes: 9:00 - 18:00', 'Sábado: 10:00 - 14:00'],
      link: null
    }
  ];

  return (
    <div className="flex-1 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para transformar tu negocio con tecnología? Hablemos de tu proyecto 
            y exploremos cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu Empresa"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Consiento el uso de mis datos para los fines indicados en la política de privacidad
                  </label>
                </div>
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="marketing" className="text-sm text-gray-600">
                    Consiento el uso de mis datos personales para recibir publicidad de su entidad
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
              >
                Hablemos sin compromiso
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Información de Contacto
            </h2>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>{detail}</div>
                        ))}
                      </a>
                    ) : (
                      <div className="text-gray-600">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>{detail}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                ¿Por qué elegir SoftCode?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Consulta inicial gratuita</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Precios y plazos transparentes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Soporte y mantenimiento continuo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Más de 22 años de experiencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">✓</span>
                  <span>Más de 150 empresas satisfechas</span>
                </li>
              </ul>
            </div>

            {/* Additional Contact Channels */}
            <div className="mt-8 space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Proveedor</h4>
                <p className="text-sm text-gray-600 mb-2">Canal de comunicación para Proveedores o Posibles Proveedores.</p>
                <a href="mailto:Proveedores@softcode.es" className="text-blue-600 hover:text-blue-700 text-sm">
                  Proveedores@softcode.es
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Empleo o Becas</h4>
                <p className="text-sm text-gray-600 mb-2">Canal de comunicación para temas de Empleo o Becas.</p>
                <a href="mailto:Empleo.Becas@softcode.es" className="text-blue-600 hover:text-blue-700 text-sm">
                  Empleo.Becas@softcode.es
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 