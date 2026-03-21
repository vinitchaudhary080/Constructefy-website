import { motion } from "motion/react";
import imgJose from "@/app/assets/59fdacae7a0b16779678c96aafe78d9bdf732200.png";
import imgMary from "@/app/assets/a26ded36d767f75c9dcf9999f1f173b19c5ed397.png";
import imgRose from "@/app/assets/796ec32cf128f3cfe9341b38a9f32834b3d52dd8.png";
import imgLogistics from "@/app/assets/d039534e5e1fa984b0c0b0292c5bb8c76dfcffee.png";
import { Phone, MessageSquare, ThumbsUp, Play, Square, Pause } from "lucide-react";

export function FloatingCards() {
  return (
    <>
      {/* 1. Crew & Contacts - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-[12%] left-[2%] md:left-[5%] lg:left-[15%] xl:left-[20%] z-10 w-[300px] xl:w-[330px] hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#16151a] rounded-2xl shadow-2xl overflow-hidden border border-white/5 p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white font-semibold text-sm">Crew & Contacts</h3>
            <span className="text-orange-500 text-xs font-medium underline">View All</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="relative">
                <img src={imgJose} alt="Jose" className="w-10 h-10 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#16151a]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">Jose Martin</p>
                <p className="text-white/50 text-[11px]">Rhodes Furniture · Supervisor</p>
              </div>
              <div className="flex gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 pb-3">
              <div className="relative">
                <img src={imgMary} alt="Mary" className="w-10 h-10 rounded-full object-cover" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#16151a]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">Mary Freund</p>
                <p className="text-white/50 text-[11px]">Cut Rite Lawn Care · Supervisor</p>
              </div>
              <div className="flex gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>
          </div>
          <p className="text-white/40 text-xs mt-2">+4 others crew members</p>
        </motion.div>
      </motion.div>

      {/* 2. Voice Note - Middle Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-[42%] left-[-2%] md:left-[0%] lg:left-[10%] xl:left-[15%] z-20 w-[350px] hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="bg-[#16151a] rounded-2xl shadow-2xl border border-white/5 overflow-hidden"
        >
          {/* Top dark grey gradient area to simulate the real design */}
          <div className="h-10 bg-[#181818] absolute top-0 left-0 right-0" />
          
          <div className="relative p-5 pt-8 flex flex-col items-center text-center z-10">
            {/* Play bar visual */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] h-10 rounded-full bg-gradient-to-r from-orange-200/20 via-orange-500/20 to-orange-900/20 flex items-center px-4 gap-3">
               <div className="w-full h-2 flex items-center justify-between opacity-50">
                  {/* Fake waveform */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="w-[2px] bg-white rounded-full" style={{ height: `${Math.random() * 100 + 20}%` }} />
                  ))}
               </div>
            </div>

            {/* Profile pic popping out of play bar */}
            <div className="absolute top-8 left-6 w-7 h-7 rounded-full overflow-hidden border border-[#181818] z-20">
               <img src={imgRose} alt="Rose" className="w-full h-full object-cover" />
            </div>

            <div className="mt-12 flex flex-col items-start w-full">
              <h4 className="text-white font-semibold text-sm">Rose Bolton</h4>
              <p className="text-white/50 text-xs mb-3">5 mins 20 sec</p>
              <p className="text-white/80 text-xs text-left leading-relaxed">
                Lorem ipsum dolor sit amet camet non aliquam. Odio lacus vitae augue vestibulum etsdf rehygfg orcielnt...
              </p>
            </div>
            
            {/* Play button float */}
            <div className="absolute top-10 right-6 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg z-20">
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-orange-500 ml-1" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 3. Issue Card - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-[12%] left-[4%] md:left-[8%] lg:left-[18%] xl:left-[22%] z-10 w-[300px] xl:w-[350px] hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="bg-[#16151a] rounded-2xl shadow-2xl border border-white/5 p-4"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white text-base font-semibold mb-1">Misaligned Subframing</h3>
              <p className="text-white/60 text-sm">North Elevation · Level 2</p>
            </div>
            <div className="bg-red-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              Open
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-white/50 mb-5">
            <span>Reported by you</span>
            <span>Today 10:24 AM</span>
          </div>

          <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-[#16151a] font-bold text-sm px-6 py-2.5 rounded-lg shadow-md hover:from-orange-400 hover:to-orange-500 transition-all">
            View Issue
          </button>
        </motion.div>
      </motion.div>

      {/* 4. Project Status - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-[20%] right-[2%] md:right-[5%] lg:right-[15%] xl:right-[20%] z-10 w-[280px] xl:w-[316px] hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="space-y-2"
        >
          {/* Main Status */}
          <div className="bg-[#16151a] rounded-2xl shadow-2xl border border-white/5 p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-bold text-sm">Project Status</h3>
              <span className="text-orange-500 text-xs font-medium underline">View All Tasks</span>
            </div>
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-white/60">Fabrication</span>
              <span className="text-white font-medium">68% complete</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-white/20 rounded-full mb-3 overflow-hidden">
              <div className="w-[68%] h-full bg-gradient-to-l from-[#ffe9d9] via-orange-500 to-[#fd5001] rounded-full" />
            </div>
            <p className="text-white/60 text-xs">All clear, no updates or concerns at the moment.</p>
          </div>

          {/* Stats Row */}
          <div className="flex gap-2 h-[66px]">
            <div className="flex-1 bg-[#16151a] rounded-2xl shadow-lg border border-white/5 flex flex-col justify-center px-4">
              <span className="text-white/60 text-xs mb-1">Total Tasks</span>
              <span className="text-white font-bold">5</span>
            </div>
            <div className="flex-1 bg-[#16151a] rounded-2xl shadow-lg border border-white/5 flex flex-col justify-center px-4">
              <span className="text-white/60 text-xs mb-1">In Progress</span>
              <span className="text-orange-500 font-bold">3</span>
            </div>
            <div className="flex-1 bg-[#16151a] rounded-2xl shadow-lg border border-white/5 flex flex-col justify-center px-4">
              <span className="text-white/60 text-xs mb-1">Completed</span>
              <span className="text-green-500 font-bold">2</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 5. Timer - Middle Right */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-[48%] right-[0%] md:right-[2%] lg:right-[12%] xl:right-[16%] z-10 hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="bg-[#16151a] rounded-2xl shadow-2xl border border-white/5 w-[160px] h-[160px] flex flex-col items-center justify-center p-4 relative"
        >
          <div className="relative w-[130px] h-[130px] flex flex-col items-center justify-center">
            {/* SVG Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle cx="65" cy="65" r="58" stroke="white" strokeWidth="8" fill="none" strokeOpacity="0.1" />
              <circle cx="65" cy="65" r="58" stroke="#f67011" strokeWidth="8" fill="none" strokeDasharray="364" strokeDashoffset="120" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold text-white tracking-tighter mt-2">30:00</span>
            <div className="flex gap-1.5 mt-2">
              <button className="bg-white text-black text-[9px] font-medium rounded-full px-2.5 py-1.5 flex items-center gap-1 shadow-sm">
                <Play className="w-2.5 h-2.5 fill-current" /> Resume
              </button>
              <button className="bg-transparent border border-white/30 text-white text-[9px] font-medium rounded-full px-2.5 py-1.5 flex items-center gap-1">
                <Square className="w-2.5 h-2.5 fill-current" /> Stop
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 6. Logistics - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-[8%] right-[4%] md:right-[8%] lg:right-[18%] xl:right-[22%] z-20 w-[280px] xl:w-[320px] hidden md:block"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="bg-[#16151a] rounded-2xl shadow-2xl border border-white/5 p-4"
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src={imgLogistics} alt="Logistics" className="w-6 h-6 rounded-lg object-cover bg-gradient-to-r from-orange-500 to-orange-300 p-0.5" />
              <h3 className="text-white font-semibold text-sm">Logistics</h3>
            </div>
            <span className="text-white/50 text-[10px]">30 min ago</span>
          </div>
          
          <div className="text-white/90 text-xs leading-relaxed mb-4">
            Material delivery received at Gate B.
            <ul className="list-disc pl-4 mt-1 space-y-0.5 opacity-80">
              <li>42 steel beams unloaded</li>
              <li>Stored at Zone 3</li>
              <li>Crane schedule updated for 14:00 lift</li>
            </ul>
          </div>

          <div className="flex gap-4 text-white/80">
            <ThumbsUp className="w-4 h-4 cursor-pointer hover:text-white" />
            <MessageSquare className="w-4 h-4 cursor-pointer hover:text-white" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
