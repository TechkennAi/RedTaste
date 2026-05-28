import { Facebook, Twitter, Instagram, Linkedin, X as CloseIcon, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    title: 'Custom Website Design',
    description: 'We create high-performance, visually stunning websites that represent your brand perfectly. Our websites are not just digital brochures; they are powerful tools designed to convert visitors into loyal customers.',
    benefits: ['Mobile-first design', 'High conversion rates', 'Fast loading speeds'],
  },
  {
    title: 'SEO Optimization',
    description: 'Our SEO experts use the latest techniques to ensure your website ranks high on search engines. We focus on keyword research, technical SEO, and content strategy to drive sustainable organic growth.',
    benefits: ['Keyword ranking growth', 'Technical SEO audits', 'Content strategy'],
  },
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to reach your target audience and grow your brand online.',
    benefits: ['Social media management', 'Paid advertising', 'Email marketing'],
  },
  {
    title: 'Business Strategy',
    description: 'Data-driven business strategies to help you navigate the digital landscape and achieve your goals.',
    benefits: ['Market analysis', 'Growth planning', 'ROI optimization'],
  },
];

const legalContent = {
  'Privacy Policy': {
    description: 'Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.',
    benefits: ['Data encryption', 'No third-party selling', 'Transparency'],
  },
  'Terms of Service': {
    description: 'By using our services, you agree to these terms. They outline our responsibilities and yours.',
    benefits: ['Service guarantees', 'User responsibilities', 'Legal compliance'],
  },
  'Cookie Policy': {
    description: 'We use cookies to improve your experience on our site. This policy explains what cookies we use and why.',
    benefits: ['Personalization', 'Site performance', 'User preferences'],
  },
};

const Footer = () => {
  const [selectedItem, setSelectedItem] = useState<{ title: string; description: string; benefits: string[] } | null>(null);

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 block">
              Redtaste Websolutions
            </span>
            <p className="text-gray-600 mb-8 max-w-xs">
              Empowering businesses with cutting-edge digital solutions and professional web experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.title}>
                  <button
                    onClick={() => setSelectedItem(service)}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Redtaste Websolutions Inc. All rights reserved.
          </p>
          <div className="flex space-x-8">
            {Object.entries(legalContent).map(([title, content]) => (
              <button
                key={title}
                onClick={() => setSelectedItem({ title, ...content })}
                className="text-gray-500 text-sm hover:text-blue-600 transition-colors"
              >
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto p-8 lg:p-12"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20"
              >
                <CloseIcon size={24} />
              </button>

              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedItem.title}
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Overview</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedItem.benefits.map(benefit => (
                        <div key={benefit} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
