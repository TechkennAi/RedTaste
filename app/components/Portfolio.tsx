import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured e-commerce solution with real-time inventory tracking, secure payments, and a custom admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: 'SaaS Analytics Dashboard',
    category: 'UI/UX Design',
    description: 'A comprehensive analytics dashboard for SaaS businesses, focusing on user behavior and subscription metrics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'Recharts'],
    link: '#',
  },
  {
    id: 3,
    title: 'Corporate Identity System',
    category: 'Branding',
    description: 'A complete rebranding project for a global logistics firm, including logo design, brand guidelines, and digital assets.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    tags: ['Branding', 'Design', 'Strategy'],
    link: '#',
  },
  {
    id: 4,
    title: 'Real Estate Portal',
    category: 'Web Development',
    description: 'A modern real estate platform with advanced search filters, map integration, and virtual tour capabilities.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Google Maps API', 'Firebase'],
    link: '#',
  },
  {
    id: 5,
    title: 'Health & Wellness App',
    category: 'Mobile Solutions',
    description: 'A cross-platform mobile application for tracking fitness goals, nutrition, and mental health metrics.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'TypeScript', 'Supabase'],
    link: '#',
  },
  {
    id: 6,
    title: 'AI Content Platform',
    category: 'SEO Optimization',
    description: 'An AI-powered content generation and SEO optimization tool for digital marketing agencies.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['OpenAI API', 'Python', 'FastAPI'],
    link: '#',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Discover how Redtaste Websolutions helps businesses transform their digital vision into reality.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all"
          >
            View All Projects <ExternalLink className="ml-2 w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-8">
                <p className="text-blue-400 font-medium mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex items-center text-white/80 text-sm font-semibold group-hover:text-white transition-colors">
                  View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 my-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="aspect-square lg:aspect-auto h-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
                    {selectedProject.category}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  <div className="mb-10">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all w-full sm:w-auto"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
