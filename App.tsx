
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full tech-grid-background z-0"></div>
      <div className="absolute top-0 left-[-20%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[150px] filter z-0"></div>
      <div className="absolute bottom-0 right-[-20%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[150px] filter z-0"></div>
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
