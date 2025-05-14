import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, Settings, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Discovery',
      description: 'We analyze your business needs and identify automation opportunities.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Strategy',
      description: 'Our team develops a customized automation strategy for your business.',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Implementation',
      description: 'We set up and configure your AI automation solutions.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Launch & Optimize',
      description: 'Your solution goes live with ongoing optimization and support.',
    },
  ];

  return (
    <section id="process" className="section-padding relative">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A streamlined approach to implementing AI automation in your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-4 text-primary-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-400">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-primary-500/50 to-transparent -translate-y-1/2 transform z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};