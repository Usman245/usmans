'use client';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Main';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import Contact from './components/Contact';
import Left from './components/Left';
import Right from './components/Right'
import ParticlesBackground from './ParticlesBackground'

export default function Home() {
 
  

  return (
    <div className="relative text-white">
  <ParticlesBackground id='tsparticles'/>
    <div className="content cursor-pointer">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Left />
      <Right />
    </div>
  </div>
  
  );
}
