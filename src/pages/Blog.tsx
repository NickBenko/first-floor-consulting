import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'El Futuro de la Transformación Digital en 2024',
      excerpt: 'Descubre las tendencias clave y tecnologías que darán forma a las estrategias de transformación digital en el próximo año.',
      author: 'María García',
      date: '15 de Diciembre, 2024',
      readTime: '5 min de lectura',
      category: 'Transformación Digital',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Construyendo Infraestructura Cloud Escalable con AWS',
      excerpt: 'Aprende las mejores prácticas para diseñar e implementar soluciones cloud escalables que crezcan con tu negocio.',
      author: 'Carlos López',
      date: '10 de Diciembre, 2024',
      readTime: '8 min de lectura',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Analítica de Datos: De Insights a Acción',
      excerpt: 'Cómo transformar datos crudos en insights empresariales accionables que impulsen la toma de decisiones y el crecimiento.',
      author: 'Ana Rodríguez',
      date: '5 de Diciembre, 2024',
      readTime: '6 min de lectura',
      category: 'Analítica de Datos',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mejores Prácticas de Ciberseguridad para Pymes',
      excerpt: 'Medidas de seguridad esenciales que toda pequeña empresa debe implementar para protegerse contra amenazas cibernéticas.',
      author: 'David Torres',
      date: '30 de Noviembre, 2024',
      readTime: '7 min de lectura',
      category: 'Ciberseguridad',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'El Auge de la IA en Aplicaciones Empresariales',
      excerpt: 'Explorando cómo la inteligencia artificial está revolucionando los procesos empresariales y creando nuevas oportunidades.',
      author: 'Laura Wang',
      date: '25 de Noviembre, 2024',
      readTime: '9 min de lectura',
      category: 'Inteligencia Artificial',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'DevOps: Conectando Desarrollo y Operaciones',
      excerpt: 'Entendiendo los principios y prácticas que hacen de DevOps algo esencial para el desarrollo de software moderno.',
      author: 'Alejandro Martínez',
      date: '20 de Noviembre, 2024',
      readTime: '6 min de lectura',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = [
    'Todos los Posts',
    'Transformación Digital',
    'Cloud Computing',
    'Analítica de Datos',
    'Ciberseguridad',
    'Inteligencia Artificial',
    'DevOps'
  ];

  return (
    <div className="flex-1 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente actualizado con las últimas ideas, tendencias y mejores prácticas en tecnología 
            y transformación digital.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-700">{blogPosts[0].author}</span>
                  </div>
                  <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">•</span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-700 text-sm">{post.author}</span>
                  </div>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para recibir las últimas ideas y actualizaciones 
            directamente en tu bandeja de entrada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Introduce tu email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 