import { motion } from 'framer-motion';

const TechAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      
      {/* Central Tech Hub */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-3xl border-2 border-blue-500/30 bg-blue-50/50 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-blue-200/50"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-transparent animate-pulse" />
        
        {/* Animated Lines/Circuits */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: i * 90,
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 border border-blue-400/20 rounded-3xl"
          />
        ))}

        {/* Central Icon/Symbol (Simplified for Tech) */}
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
          >
            <div className="w-8 h-8 border-4 border-white/30 rounded-full border-t-white animate-spin" />
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-blue-200 rounded-full mt-6"
          />
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-blue-400 rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Floating Tech Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 10 : -10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-xl border border-blue-200 bg-white/40 backdrop-blur-xs flex items-center justify-center shadow-lg"
          style={{
            top: `${20 + i * 12}%`,
            left: `${15 + (i * 15) % 70}%`,
          }}
        >
          <div className={`w-2 h-2 rounded-full bg-blue-${(i % 3 + 4) * 100}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default TechAnimation;
