import React from 'react';
import { motion } from 'framer-motion';
import { Phone, BookUser } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 relative overflow-hidden" id="hero">
      <div className="container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">We Integrate</span>
              <span className="gradient-text glow-text block">AI Automations</span>
              <span className="block">For Your Buisness</span>
            </h1>
            <p className="text-neutral-300 text-lg md:text-xl mb-8 max-w-xl">
              Embrace AI to revolutionize your customer support, supercharge your lead generation, 
              and automate your workflows. Book a call to discuss a tailor-made strategy that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://calendly.com/milleniumautoai/30min" 
              className="btn-primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book a call to schedule an appointment"
            >
              <BookUser className="mr-2" size={20} />
              Book a Call
            </motion.a>
            <motion.a
              href="tel:+15098500659" 
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Call us at (509) 850-0659"
            >
              <Phone className="mr-2" size={20} />
              Let's Talk
            </motion.a>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            Or call us at (509) 850-0659
          </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="glass-card p-6 shadow-glow">
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                  alt="AI Technology"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              
              <motion.div 
                className="glass-card p-4 absolute -bottom-4 -left-4 shadow-glow-secondary"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                  <p className="text-white font-medium">AI Agent Online</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-card p-4 absolute -top-4 -right-4 shadow-glow-accent"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-primary-400 rounded-sm"></div>
                    <div className="w-2 h-5 bg-primary-500 rounded-sm"></div>
                    <div className="w-2 h-10 bg-primary-600 rounded-sm"></div>
                    <div className="w-2 h-7 bg-primary-500 rounded-sm"></div>
                    <div className="w-2 h-4 bg-primary-400 rounded-sm"></div>
                  </div>
                  <p className="text-white text-sm">Processing data</p>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};