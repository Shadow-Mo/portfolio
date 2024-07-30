import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/contact/Contact.js';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
