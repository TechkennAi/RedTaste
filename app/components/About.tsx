import { motion } from 'framer-motion';
import { Users, Target, Award, Rocket } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '8+', icon: <Award className="w-6 h-6 text-blue-600" /> },
    { label: 'Team Experts', value: '15+', icon: <Users className="w-6 h-6 text-blue-600" /> },
    { label: 'Success Rate', value: '99%', icon: <Target className="w-6 h-6 text-blue-600" /> },
    { label: 'Projects Launched', value: '200+', icon: <Rocket className="w-6 h-6 text-blue-600" /> },
  ];

  return (
    <section id="about" className="pt-12 pb-20 lg:pt-32 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through <span className="text-blue-600">Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Redtaste Websolutions, we are a team of passionate developers, designers, and digital strategists dedicated to helping businesses navigate the digital landscape. Our mission is to provide high-quality, scalable web solutions that drive real results.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Founded with the vision of making professional web services accessible to businesses of all sizes, we've grown into a full-service digital agency. We combine technical expertise with a deep understanding of business goals to create digital experiences that resonate with users and deliver ROI.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
