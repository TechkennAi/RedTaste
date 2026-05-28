import { motion } from 'framer-motion';
import { Layout, BarChart, MousePointer2, CheckCircle2 } from 'lucide-react';

const BusinessVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* Mockup Browser Window */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[340px] aspect-[4/3] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        {/* Browser Header */}
        <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4 space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>

        {/* Browser Content */}
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-1.5">
              <div className="h-2 w-24 bg-gray-100 rounded-full" />
              <div className="h-3 w-32 bg-blue-600/20 rounded-full" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Layout size={16} className="text-blue-600" />
            </div>
          </div>

          {/* Animated Chart Mockup */}
          <div className="bg-gray-50 rounded-xl p-4 h-24 flex items-end justify-between space-x-2">
            {[40, 70, 45, 90, 65, 80].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                className="w-full bg-blue-500 rounded-t-md"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3 space-x-2">
              <CheckCircle2 size={14} className="text-green-500" />
              <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
            </div>
            <div className="h-12 bg-gray-50 rounded-lg border border-gray-100 flex items-center px-3 space-x-2">
              <BarChart size={14} className="text-blue-500" />
              <div className="h-1.5 w-12 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>

        {/* Floating Cursor Animation */}
        <motion.div
          animate={{
            x: [0, 150, 80],
            y: [0, -60, -20],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 text-blue-600 pointer-events-none"
        >
          <MousePointer2 size={24} fill="currentColor" className="drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Decorative Background Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl -z-10" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -z-10" />
    </div>
  );
};

export default BusinessVisual;
