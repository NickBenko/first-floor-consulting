# First Floor Consulting - Sitio Web Profesional

![First Floor Consulting](https://img.shields.io/badge/First%20Floor-Consulting-blue?style=for-the-badge&logo=react)

Un sitio web moderno y profesional para First Floor Consulting, una empresa de consultoría tecnológica especializada en desarrollo de software personalizado, transformación digital y RPA (Automatización de Procesos Robóticos).

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con modo oscuro permanente
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Responsive**: Optimizado para todos los dispositivos
- **Multilingüe**: Soporte completo para Español e Inglés
- **Performance**: Carga rápida y optimizada
- **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📋 Secciones del Sitio

- **Hero**: Sección principal con llamadas a la acción
- **Sobre Nosotros**: Información de la empresa y misión
- **Servicios**: Desarrollo de software, transformación digital, RPA
- **Proyectos**: Portafolio de trabajos realizados
- **Testimonios**: Opiniones de clientes
- **Contacto**: Formulario de contacto con validación

## 🎨 Paleta de Colores

- **Fondo**: Gris oscuro (#111827)
- **Texto**: Blanco y grises claros
- **Acento**: Azul real (#3B82F6)
- **Elementos secundarios**: Grises medios

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/NickBenko/first-floor-consulting.git
cd first-floor-consulting
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:
```bash
npm start
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

### Scripts Disponibles

- `npm start` - Ejecuta el proyecto en modo desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm test` - Ejecuta las pruebas
- `npm run eject` - Expone la configuración de webpack (irreversible)

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🌐 Despliegue

El sitio está configurado para desplegarse automáticamente en GitHub Pages.

### Despliegue Manual

1. Construye el proyecto:
```bash
npm run build
```

2. Sube los cambios a GitHub:
```bash
git add .
git commit -m "Update build"
git push
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Hero.tsx        # Sección principal
│   ├── About.tsx       # Sobre nosotros
│   ├── Services.tsx    # Servicios
│   ├── Projects.tsx    # Proyectos
│   ├── Testimonials.tsx # Testimonios
│   ├── Contact.tsx     # Contacto
│   ├── Footer.tsx      # Pie de página
│   ├── Navbar.tsx      # Navegación
│   └── LanguageToggle.tsx # Selector de idioma
├── pages/              # Páginas (legacy)
├── App.tsx             # Componente principal
└── index.tsx           # Punto de entrada
```

## 🔧 Configuración

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
REACT_APP_SITE_URL=https://nickbenko.github.io/first-floor-consulting
```

### Personalización
- **Colores**: Modifica `tailwind.config.js`
- **Contenido**: Edita los componentes en `src/components/`
- **Idiomas**: Actualiza las traducciones en el contexto de idioma

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**First Floor Consulting**
- Email: info@firstfloorconsulting.com
- Sitio Web: [https://firstfloorconsulting.com](https://firstfloorconsulting.com)

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Framework de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones
- [Lucide React](https://lucide.dev/) - Iconos

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub! 