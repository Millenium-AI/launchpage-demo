import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900/50 border-t border-neutral-800 pt-12 pb-6">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">Millenium Automation</h3>
              <p className="text-neutral-400 mb-4 max-w-md">
                We build intelligent AI automations to revolutionize your business processes, 
                enhance customer support, and supercharge lead generation.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:milleniumautoai@gmail.com" 
                  className="text-neutral-400 hover:text-primary transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">AI Chat Agents</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Lead Generation</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">CRM Integration</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Workflow Automation</a></li>
              </ul>
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Case Studies</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Millenium Automation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-neutral-500 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};