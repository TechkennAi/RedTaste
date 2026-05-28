import { motion } from 'framer-motion';
import { Globe, Search, UserCheck, ShieldCheck, Zap, Code2 } from 'lucide-react';

const TechStackVisual = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 lg:p-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full -z-10" />

      {/* Main 3D Stack Container */}
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] flex items-center justify-center perspective-[1000px]">
        
        {/* Layer 3: Base Infrastructure (Bottom) */}
        <motion.div
          animate={{ 
            rotateX: 45, 
            rotateZ: -25,
            y: [20, 30, 20],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-full h-full bg-white/40 backdrop-blur-md rounded-[40px] border border-white/50 shadow-xl flex flex-col p-6 space-y-4 origin-center -z-30 translate-y-16 scale-90 opacity-60"
        >
          <div className="h-4 w-1/2 bg-gray-200/50 rounded-full" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gray-100/50 rounded-2xl" />
            <div className="h-20 bg-gray-100/50 rounded-2xl" />
          </div>
          <div className="h-32 bg-gray-50/50 rounded-3xl" />
        </motion.div>

        {/* Layer 2: Business Profile & SEO (Middle) */}
        <motion.div
          animate={{ 
            rotateX: 45, 
            rotateZ: -25,
            y: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute w-full h-full bg-white/60 backdrop-blur-lg rounded-[40px] border border-white/80 shadow-2xl flex flex-col p-6 space-y-6 origin-center -z-20 translate-y-8 scale-95 opacity-80"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <UserCheck size={20} />
            </div>
            <div className="space-y-2 flex-1">
              <div className="h-2.5 w-2/3 bg-blue-200 rounded-full" />
              <div className="h-2 w-1/2 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="flex-1 bg-blue-50/30 rounded-3xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center text-blue-600">
              <Search size={24} />
              <div className="text-xs font-bold uppercase tracking-widest">SEO Active</div>
            </div>
            <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"
              />
            </div>
          </div>
        </motion.div>

        {/* Layer 1: Premium Website (Top) */}
        <motion.div
          animate={{ 
            rotateX: 45, 
            rotateZ: -25,
            y: [-20, -10, -20],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute w-full h-full bg-white rounded-[40px] border border-blue-100 shadow-[0_20px_50px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden origin-center -z-10 -translate-y-8"
        >
          {/* Mockup Header */}
          <div className="h-10 bg-gray-50/80 border-b border-gray-100 flex items-center px-6 space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <div className="flex-1 ml-4 h-4 bg-gray-200/50 rounded-full" />
          </div>
          
          {/* Mockup Body */}
          <div className="p-6 space-y-6 flex-1 bg-gradient-to-b from-white to-blue-50/30">
            <div className="flex justify-between items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Globe size={24} />
              </div>
              <div className="text-right space-y-1">
                <div className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">Performance</div>
                <div className="text-lg font-bold text-gray-900 leading-none">99.9%</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="h-6 w-full bg-gray-900 rounded-lg flex items-center px-3">
                <div className="h-1.5 w-1/3 bg-white/20 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-white rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center">
                  <ShieldCheck size={16} className="text-green-500 mb-2" />
                  <div className="h-1 w-8 bg-gray-100 rounded-full" />
                </div>
                <div className="p-3 bg-white rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center">
                  <Zap size={16} className="text-yellow-500 mb-2" />
                  <div className="h-1 w-8 bg-gray-100 rounded-full" />
                </div>
              </div>
            </div>

            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-auto h-20 w-full bg-blue-600 rounded-2xl flex items-center justify-center text-white"
            >
              <Code2 size={32} strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Interactive Icons */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-blue-600 border border-blue-50 z-20"
        >
          <Zap size={32} fill="currentColor" className="opacity-20" />
          <Zap size={32} className="absolute" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-10 -left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-500 border border-blue-50 z-20"
        >
          <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
        </motion.div>

      </div>
    </div>
  );
};

export default TechStackVisual;
