import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageToggle from "./components/LanguageToggle";

// Language context
export const LanguageContext = React.createContext({
  language: 'es' as 'en' | 'es',
  setLanguage: (lang: 'en' | 'es') => {},
});

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-black text-white transition-colors duration-300">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Top controls - only language toggle */}
        <div className="fixed top-24 right-4 z-30 flex items-center space-x-4">
          <LanguageToggle />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main className="relative z-10">
          <Hero language={language} />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
