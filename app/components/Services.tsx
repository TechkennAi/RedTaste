import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Search, BarChart3, Globe, Shield, Zap, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Custom Website Design',
    shortDescription: 'Bespoke websites tailored to your brand identity and business goals.',
    fullDescription: 'We create high-performance, visually stunning websites that represent your brand perfectly. Our websites are not just digital brochures; they are powerful tools designed to convert visitors into loyal customers.',
    usefulness: 'Increases brand credibility, provides a 24/7 digital storefront, and improves customer trust through professional presentation.',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    benefits: ['Mobile-first design', 'High conversion rates', 'Fast loading speeds'],
  },
  {
    id: 2,
    title: 'Business Profile Management',
    shortDescription: 'Expertly managed business profiles across platforms for maximum visibility.',
    fullDescription: 'We manage your digital footprint across Google, LinkedIn, and other key platforms. By maintaining consistent and engaging profiles, we ensure your business is easily discoverable and attractive to potential partners.',
    usefulness: 'Improves local SEO, ensures brand consistency across the web, and drives higher engagement from social platforms.',
    icon: <Layout className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    benefits: ['Google Business optimization', 'LinkedIn growth strategy', 'Consistent branding'],
  },
  {
    id: 3,
    title: 'SEO Optimization',
    shortDescription: 'Data-driven strategies to boost your search rankings and organic traffic.',
    fullDescription: 'Our SEO experts use the latest techniques to ensure your website ranks high on search engines. We focus on keyword research, technical SEO, and content strategy to drive sustainable organic growth.',
    usefulness: 'Reduces dependency on paid ads, brings in high-quality organic leads, and provides long-term digital authority.',
    icon: <Search className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    benefits: ['Keyword ranking growth', 'Technical SEO audits', 'Content strategy'],
  },
  {
    id: 4,
    title: 'Analytics & Reporting',
    shortDescription: 'Comprehensive insights into your digital performance with actionable reports.',
    fullDescription: 'We don\'t just deliver services; we prove their value. Our detailed analytics and reporting help you understand exactly how your digital investments are performing and where the next opportunities lie.',
    usefulness: 'Enables data-driven decision making, tracks ROI accurately, and identifies areas for business growth.',
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    benefits: ['Real-time dashboards', 'Monthly performance reviews', 'Goal tracking'],
  },
  {
    id: 5,
    title: 'Performance Optimization',
    shortDescription: 'Ultra-fast loading times and smooth user experiences that convert.',
    fullDescription: 'Speed is a feature. We optimize every aspect of your website to ensure it loads in the blink of an eye. Faster sites rank better on Google and have significantly lower bounce rates.',
    usefulness: 'Improves user experience, boosts search engine rankings, and prevents losing customers to slow loading times.',
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    benefits: ['Core Web Vitals optimization', 'Image compression', 'Code minification'],
  },
  {
    id: 6,
    title: 'Digital Security',
    shortDescription: 'State-of-the-art security measures to protect your business and data.',
    fullDescription: 'In an era of increasing digital threats, we keep your business safe. From SSL certificates to advanced firewalls and regular security patches, we ensure your data and your customers\' information are protected.',
    usefulness: 'Protects against data breaches, ensures regulatory compliance, and builds customer confidence in your digital platform.',
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    color: 'bg-blue-50',
    benefits: ['SSL/TLS encryption', 'Regular backups', 'Vulnerability scanning'],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We offer a wide range of services designed to help businesses establish a powerful and effective online presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.shortDescription}
              </p>
              <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Learn More <CheckCircle2 className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto p-8 lg:p-12"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col">
                <div className={`${selectedService.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-8`}>
                  {selectedService.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedService.title}
                </h3>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <div className="space-y-6 mb-10">
                  <div>
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Why it's useful</h4>
                    <p className="text-gray-700 font-medium">
                      {selectedService.usefulness}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Key Benefits</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.benefits.map(benefit => (
                        <div key={benefit} className="flex items-center space-x-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={() => setSelectedService(null)}
                    className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                  >
                    Inquire About This Service
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
