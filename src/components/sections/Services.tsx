import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, BarChart3, Cog } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: '24/7 Customer Support',
      description: 'AI-powered chat agents that provide instant, accurate responses to customer inquiries around the clock.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Knowledge Base'],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Lead Generation',
      description: 'Automated systems that identify, engage, and nurture potential customers through your sales funnel.',
      features: ['Lead Scoring', 'Automated Follow-ups', 'Conversion Optimization'],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and reporting to track performance and optimize your automation strategy.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Performance Metrics'],
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'Process Automation',
      description: 'Streamline your business operations with intelligent workflow automation solutions.',
      features: ['Workflow Design', 'Integration Support', 'Process Optimization'],
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered automation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary-500/10 text-primary-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-neutral-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-neutral-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};