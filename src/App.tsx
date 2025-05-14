import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { CallToAction } from './components/sections/CallToAction';
import { Footer } from './components/layout/Footer';
import { ParticlesBackground } from './components/ui/ParticlesBackground';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Process />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;