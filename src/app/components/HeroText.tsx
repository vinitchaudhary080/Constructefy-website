import { motion } from "motion/react";

export function HeroText() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl w-full z-10">
      {/* Pill Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full p-1.5 pr-4 mb-8"
      >
        <div className="bg-[#131515] text-white text-xs font-medium px-3 py-1 rounded-full">
          New
        </div>
        <span className="text-white/90 text-sm">Built for contractors, developers & EPCs</span>
      </motion.div>

      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-6xl lg:text-[72px] font-medium leading-[1.1] text-white mb-6 tracking-tight"
      >
        Run your construction site with proof, not assumptions
      </motion.h1>

      {/* Subheading */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
      >
        Real-time workforce visibility, plan-linked execution, and on-site proof — built for modern construction teams.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <button className="w-full sm:w-auto bg-white text-[#131515] px-8 py-4 rounded-full font-medium text-base hover:bg-white/90 transition-colors">
          Book a Demo
        </button>
        <button className="w-full sm:w-auto bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-colors">
          Manager Login
        </button>
      </motion.div>
    </div>
  );
}
