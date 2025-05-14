import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      <div className="container-padding">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 blur-3xl" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with{' '}
                <span className="gradient-text">AI Automation</span>?
              </h2>
              <p className="text-neutral-300 text-lg mb-8">
                Book a free consultation call to discuss how we can help automate and scale your business operations.
              </p>
              
              <motion.a
                href="https://calendly.com/milleniumautoai/30min"
                className="btn-primary inline-flex items-center text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};