import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-padding py-4 flex items-center justify-between">
        <div className="flex items-center">
          <motion.a 
            href="/" 
            className="text-2xl font-bold text-white flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text">Millenium Automation</span>
          </motion.a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
        <a 
            onClick={() => scrollToSection('features')} 
            className="nav-link cursor-pointer"
          >
            Solutions
          </a>
          <a 
            onClick={() => scrollToSection('services')} 
            className="nav-link cursor-pointer"
          >
            Services
          </a>
          <a 
            onClick={() => scrollToSection('process')} 
            className="nav-link cursor-pointer"
          >
            Process
          </a>
          <a 
            onClick={() => scrollToSection('aboutus')} 
            className="nav-link cursor-pointer"
          >
            About Us
          </a>
          <a 
            onClick={() => scrollToSection('cta')} 
            className="btn-primary"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral-900/95 backdrop-blur-lg"
        >
          <div className="container-padding py-4 flex flex-col space-y-4">
            <a 
              onClick={() => scrollToSection('services')} 
              className="nav-link py-2 px-4 w-full cursor-pointer"
            >
              Services
            </a>
            <a 
              onClick={() => scrollToSection('process')} 
              className="nav-link py-2 px-4 w-full cursor-pointer"
            >
              Process
            </a>
            <a 
              onClick={() => scrollToSection('features')} 
              className="nav-link py-2 px-4 w-full cursor-pointer"
            >
              Solutions
            </a>
            <a 
              onClick={() => scrollToSection('cta')} 
              className="btn-primary w-full"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};