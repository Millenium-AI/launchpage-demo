import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, LineChart, Workflow } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Bot size={32} />,
      title: 'AI Chat Agents',
      description: 'Intelligent conversational agents that handle customer inquiries 24/7 with human-like understanding.',
    },
    {
      icon: <LineChart size={32} />,
      title: 'Lead Generation',
      description: 'Automated lead capture and qualification systems that convert visitors into valuable prospects.',
    },
    {
      icon: <Workflow size={32} />,
      title: 'CRM Integration',
      description: 'Seamless integration with your existing CRM to maintain a unified customer database.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and business processes with intelligent automation.',
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by Advanced <span className="gradient-text">AI Technology</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Our cutting-edge solutions combine artificial intelligence with proven business strategies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 group hover:border-primary-500/50 transition-colors duration-300"
            >
              <div className="mb-4 text-primary-500 group-hover:text-primary-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};