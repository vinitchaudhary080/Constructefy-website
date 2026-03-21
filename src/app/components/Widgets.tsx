import { motion } from "motion/react";
import { Menu, Search, Mic, Grid, Play, Signal, Wifi, Battery } from "lucide-react";
import Center from "../../imports/Center";

export function Widgets() {
  return (
    <div className="relative mt-24 w-full flex justify-center max-w-5xl mx-auto min-h-[560px]">
      {/* Center Phone Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-[348px] h-[560px] z-20 shrink-0"
      >
        <Center />
      </motion.div>

      {/* Left Widget (Timer) */}
      <motion.div 
        initial={{ opacity: 0, x: -50, y: 0 }}
        animate={{ opacity: 1, x: 0, y: [-10, 10, -10] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.8 },
          x: { duration: 0.8, delay: 0.8 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-10 left-0 xl:-left-20 z-30 hidden lg:flex"
      >
        <div className="w-[230px] bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_0_4px_rgba(255,255,255,0.05)] p-8 flex flex-col items-center justify-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="64" cy="64" r="56" stroke="white" strokeWidth="12" fill="none" strokeOpacity="0.1" />
              <circle cx="64" cy="64" r="56" stroke="#f67011" strokeWidth="12" fill="none" strokeDasharray="351.8" strokeDashoffset="246" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white tracking-tighter">30:00</span>
              <button className="mt-3 bg-white text-black text-xs font-medium rounded-full px-3 py-1.5 flex items-center gap-1 hover:bg-gray-100 transition-colors shadow-sm">
                <Play className="w-3 h-3 fill-current" /> Resume
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Widget (Issue Card) */}
      <motion.div 
        initial={{ opacity: 0, x: 50, y: 0 }}
        animate={{ opacity: 1, x: 0, y: [10, -10, 10] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 1 },
          x: { duration: 0.8, delay: 1 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
        }}
        className="absolute top-40 right-0 xl:-right-20 z-30 hidden lg:block"
      >
        <div className="w-[300px] bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_0_4px_rgba(255,255,255,0.05)] p-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white text-sm font-semibold mb-0.5">Misaligned Subframing</h3>
              <p className="text-white/60 text-xs">North Elevation · Level 2</p>
            </div>
            <div className="bg-red-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Open
            </div>
          </div>
          
          <div className="flex justify-between text-[11px] text-white/50 mb-4">
            <span>Reported by you</span>
            <span>Today 10:24 AM</span>
          </div>

          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold text-xs py-2 rounded-lg shadow-md hover:from-orange-400 hover:to-orange-500 transition-all">
            View Issue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
