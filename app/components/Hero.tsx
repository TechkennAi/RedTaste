import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import TechStackVisual from './TechStackVisual';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6">
              <CheckCircle size={16} />
              <span className="text-sm font-medium">Professional Web Solutions by Redtaste</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Elevate Your <span className="text-blue-600">Digital Presence</span> Today
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Redtaste Websolutions provides comprehensive digital services including custom websites, business profile management, SEO optimization, and more to help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact"
                className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio"
                className="flex items-center justify-center bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all"
              >
                View Portfolio
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-gray-500 text-sm">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">98%</p>
                <p className="text-gray-500 text-sm">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">24/7</p>
                <p className="text-gray-500 text-sm">Expert Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-auto"
          >
            <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full" />
            <div className="hidden lg:block">
              <Hero3D />
            </div>
            <div className="lg:hidden h-full">
              <TechStackVisual />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;
