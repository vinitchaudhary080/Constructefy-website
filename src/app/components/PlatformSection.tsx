import { motion } from "motion/react";
import { 
  Menu, Grid, Search, Mic, MapPin, 
  Layers, Play, Square, FileText, ChevronUp, Home, 
  MessageCircle, Heart, ArrowRight, ArrowLeft
} from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export function PlatformSection() {
  return (
    <section className="bg-[#131515] w-full pt-20 pb-32 relative z-10 font-['DM_Sans'] overflow-hidden flex flex-col items-center">
      
      {/* Text Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 items-center text-center max-w-3xl px-4 z-20"
      >
        <h2 className="text-[36px] leading-[1.1] md:text-5xl lg:text-[56px] font-medium tracking-tight text-[#f67011]">
          one platform
        </h2>
        <p className="text-[#fbfbfb] text-[16px] leading-[22px] max-w-2xl text-center">
          Constructefy brings planning, workforce management, execution tracking, and on-site proof together, giving teams complete visibility and control from a single system.
        </p>
      </motion.div>

      {/* Phones Carousel */}
      <div className="relative w-full max-w-[1400px] h-auto min-h-[600px] mt-16 md:mt-24 flex justify-center items-center gap-8 px-4">
        
        {/* Glow behind center phone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f67011]/50 blur-[100px] rounded-full z-0 pointer-events-none mix-blend-color-dodge" />

        {/* Far Left Phone (Home Feed) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden xl:flex w-[260px] h-[564px] bg-[#16151a] rounded-[20px] flex-col overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] z-10 shrink-0 scale-[0.85] origin-right border border-white/10"
        >
          {/* Header */}
          <div className="h-7 w-full flex justify-center items-end pb-1 bg-[#16151a]">
            <div className="w-[80px] h-[20px] bg-black rounded-full" />
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-[#16151a]/80 backdrop-blur-md">
            <Menu className="w-4 h-4 text-white" />
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-500 to-blue-600" />
              <span className="font-bold text-xs">Home</span>
            </div>
            <Grid className="w-4 h-4 text-white" />
          </div>
          {/* Content */}
          <div className="flex-1 p-3 flex flex-col gap-3">
            <div className="border-b border-white/10 pb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-gradient-to-tr from-blue-400 to-purple-500" />
                  <span className="font-semibold text-[10px]">Ben</span>
                </div>
                <span className="text-[#b1b1b1] text-[9px]">1 min ago</span>
              </div>
              <p className="text-[10px] text-white/90">Electrical work was completed in the lobby.</p>
              <div className="flex gap-2 mt-2">
                <Heart className="w-3.5 h-3.5 text-white/70" />
                <MessageCircle className="w-3.5 h-3.5 text-white/70" />
              </div>
            </div>
            <div className="border-b border-white/10 pb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-blue-500" />
                  <span className="font-semibold text-[10px]">IoT Sensors</span>
                </div>
                <span className="text-[#b1b1b1] text-[9px]">10 min ago</span>
              </div>
              <p className="text-[10px] text-white/90">
                📡 Vibration levels increased on Tower Crane 02.<br/>
                Above threshold for 3 consecutive readings.<br/>
                Monitoring mode activated automatically.
              </p>
            </div>
            <div className="border-b border-white/10 pb-3">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-orange-500" />
                  <span className="font-semibold text-[10px]">Crew 7</span>
                </div>
                <span className="text-[#b1b1b1] text-[9px]">12 min ago</span>
              </div>
              <p className="text-[10px] text-white/90">
                Drywall installation completed on <b>Level 02</b>.<br/>
                Zero reworks reported.
              </p>
              <div className="mt-2 h-[100px] bg-white/10 rounded-md" />
            </div>
          </div>
          {/* Bottom Nav */}
          <div className="h-[50px] bg-[#1c1b20]/90 border-t border-white/5 flex justify-around items-center px-4 mt-auto">
            <Home className="w-5 h-5 text-[#f67011]" />
            <Search className="w-5 h-5 text-[#878787]" />
            <Layers className="w-5 h-5 text-[#878787]" />
            <MessageCircle className="w-5 h-5 text-[#878787]" />
          </div>
        </motion.div>

        {/* Mid Left Phone (Signal/Issues) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-[260px] h-[564px] bg-[#16151a] rounded-[20px] flex-col overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] z-20 shrink-0 scale-95 border border-white/10"
        >
          {/* Header */}
          <div className="h-7 w-full flex justify-center items-end pb-1 bg-[#16151a]">
            <div className="w-[80px] h-[20px] bg-black rounded-full" />
          </div>
          <div className="flex justify-between items-center px-4 py-3 bg-[#16151a]/80 backdrop-blur-md">
            <Menu className="w-4 h-4 text-white" />
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-yellow-500 to-orange-600" />
              <span className="font-bold text-xs">Signal</span>
            </div>
            <Grid className="w-4 h-4 text-white" />
          </div>
          {/* Content */}
          <div className="flex-1 p-3 flex flex-col gap-3">
            <div className="bg-[#262626] rounded-lg h-8 flex items-center px-3 gap-2">
              <Search className="w-3.5 h-3.5 text-[#878787]" />
              <span className="text-[#878787] text-[10px] flex-1">Search</span>
              <Mic className="w-3.5 h-3.5 text-[#878787]" />
            </div>
            <div className="flex gap-1.5 overflow-hidden">
              <div className="bg-[#fde2cf] text-[#f67011] px-3 py-1 rounded-full text-[9px] font-medium ring-1 ring-[#f67011]">All</div>
              <div className="bg-white/10 text-white px-3 py-1 rounded-full text-[9px] border border-white/10">Open</div>
              <div className="bg-white/10 text-white px-3 py-1 rounded-full text-[9px] border border-white/10">In Progress</div>
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <div className="bg-[#262626] rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-semibold text-[11px]">Misaligned Subframing</h5>
                    <p className="text-[#878787] text-[9px]">North Elevation · Level 2</p>
                  </div>
                  <div className="bg-[#f84241] text-white px-1.5 py-0.5 rounded-full text-[8px] flex items-center gap-1">
                    <div className="w-1 h-1 bg-white rounded-full" /> Open
                  </div>
                </div>
                <div className="flex justify-between text-[9px] text-[#878787] mb-2">
                  <span>Reported by you</span>
                  <span>Today 10:24 AM</span>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-[#16151a] text-[9px] font-bold py-1 px-3 rounded text-center w-max">
                  View Issue
                </div>
              </div>
              
              <div className="bg-[#262626] rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h5 className="font-semibold text-[11px]">Damaged ACM Panel</h5>
                    <p className="text-[#878787] text-[9px]">South Elevation · Level 1</p>
                  </div>
                  <div className="bg-[#ff9f2e] text-[#16151a] px-1.5 py-0.5 rounded-full text-[8px] flex items-center gap-1 font-medium">
                    <div className="w-1 h-1 bg-[#16151a] rounded-full" /> In Progress
                  </div>
                </div>
                <div className="flex justify-between text-[9px] text-[#878787] mb-2">
                  <span>Assigned to Supervisor</span>
                  <span>Updated 30 mins ago</span>
                </div>
                <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-[#16151a] text-[9px] font-bold py-1 px-3 rounded text-center w-max">
                  View Issue
                </div>
              </div>
            </div>
          </div>
          {/* FAB */}
          <div className="absolute bottom-[60px] right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-4 h-[2px] bg-[#16151a] absolute rounded" />
            <div className="h-4 w-[2px] bg-[#16151a] absolute rounded" />
          </div>
          {/* Bottom Nav */}
          <div className="h-[50px] bg-[#1c1b20]/90 border-t border-white/5 flex justify-around items-center px-4 mt-auto z-10">
            <Home className="w-5 h-5 text-[#878787]" />
            <Search className="w-5 h-5 text-[#878787]" />
            <Layers className="w-5 h-5 text-[#f67011]" />
            <MessageCircle className="w-5 h-5 text-[#878787]" />
          </div>
        </motion.div>

        {/* Center Phone (Stack) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-30 flex items-center justify-center shrink-0"
        >
          <div className="w-[320px] h-[682px] relative shadow-[0px_40px_100px_0px_rgba(246,112,17,0.3)] rounded-[48px]">
            <PhoneMockup />
          </div>
        </motion.div>

        {/* Mid Right Phone (Tickr/Timer) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex w-[260px] h-[564px] bg-[#16151a] rounded-[20px] flex-col overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] z-20 shrink-0 scale-95 border border-white/10"
        >
          {/* Header */}
          <div className="h-7 w-full flex justify-center items-end pb-1 bg-[#16151a]">
            <div className="w-[80px] h-[20px] bg-black rounded-full" />
          </div>
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/5">
            <Menu className="w-4 h-4 text-white" />
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-blue-500" />
              <span className="font-bold text-xs">Tickr</span>
            </div>
            <Grid className="w-4 h-4 text-white" />
          </div>
          {/* Content */}
          <div className="flex-1 flex flex-col items-center relative px-4 pt-4">
            <div className="w-full flex justify-between items-center mb-10">
              <div className="bg-[#fff8f3] text-[#f67011] px-2.5 py-1 rounded-full text-[10px] font-medium flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f67011]" /> Break
              </div>
              <FileText className="w-4 h-4 text-white" />
            </div>

            {/* Circular Timer */}
            <div className="relative w-[180px] h-[180px] flex items-center justify-center mb-10">
              <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                <circle cx="90" cy="90" r="80" fill="none" stroke="#2C2C2C" strokeWidth="12" />
                <circle cx="90" cy="90" r="80" fill="none" stroke="#F88D41" strokeWidth="12" strokeDasharray="502" strokeDashoffset="350" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col items-center gap-3 z-10">
                <div className="text-[28px] font-bold tracking-tight">30:00</div>
                <div className="flex gap-2">
                  <button className="bg-white text-[#16151a] px-3 py-1.5 rounded-full text-[9px] font-medium flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 fill-[#16151a]" /> Resume
                  </button>
                  <button className="bg-transparent border border-white text-white px-3 py-1.5 rounded-full text-[9px] font-medium flex items-center gap-1">
                    <Square className="w-2.5 h-2.5 fill-white" /> Stop
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <span className="text-xs text-white/80">Why are you pausing?</span>
              <div className="bg-[#262626] rounded-lg p-2.5 flex justify-between items-center">
                <span className="text-xs">Break</span>
                <ChevronUp className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
          {/* Bottom Nav */}
          <div className="h-[50px] bg-[#1c1b20]/90 border-t border-white/5 flex justify-around items-center px-4 mt-auto">
            <Home className="w-5 h-5 text-[#878787]" />
            <Search className="w-5 h-5 text-[#878787]" />
            <Layers className="w-5 h-5 text-[#878787]" />
            <MessageCircle className="w-5 h-5 text-[#878787]" />
          </div>
        </motion.div>

        {/* Far Right Phone (Splash) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden xl:flex w-[260px] h-[564px] bg-[#16151a] rounded-[20px] flex-col overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] z-10 shrink-0 relative scale-[0.85] origin-left border border-white/10"
        >
          {/* Status Bar */}
          <div className="h-7 w-full flex justify-center items-end pb-1 bg-transparent absolute top-0 z-20">
            <div className="w-[80px] h-[20px] bg-black rounded-full" />
          </div>
          
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract Logo" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16151a] via-[#16151a]/80 to-transparent" />

          {/* Constructefy Logo */}
          <div className="absolute top-10 left-4 flex items-center gap-2 z-20">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-orange-500 to-blue-600" />
            <span className="font-bold text-[14px]">constructefy</span>
          </div>

          <div className="mt-auto px-4 pb-8 z-20 flex flex-col gap-4">
            <div>
              <h3 className="text-[18px] font-medium mb-1">Welcome to Constructefy</h3>
              <p className="text-[11px] text-[#b1b1b1]">One stop solution to get all the details effortlessly on-site.</p>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#16151a] font-bold text-xs shadow-lg">
              Get Started
            </button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Interface Description */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 flex flex-col items-center z-20 w-full px-4 text-center gap-12"
      >
        {/* Stack App Icon */}
        <div className="w-[56px] h-[56px] rounded-[14px] bg-[#16151a] border border-white/10 flex items-center justify-center shadow-lg relative">
          <div className="w-8 h-8 relative flex flex-col items-center justify-center gap-[2px]">
            {/* Recreating the Stack icon using colored shapes */}
            <div className="w-[18px] h-[6px] bg-[#F67011] rounded-sm transform skew-x-[-20deg]" />
            <div className="w-[20px] h-[6px] bg-[#14CB49] rounded-sm transform skew-x-[-20deg]" />
            <div className="w-[22px] h-[6px] bg-[#178FFF] rounded-sm transform skew-x-[-20deg]" />
          </div>
        </div>
        
        {/* Text and Arrows */}
        <div className="flex items-center justify-center gap-8 md:gap-16 w-full max-w-[800px]">
          <button className="w-12 h-12 rounded-full bg-[#262626] border border-white/5 flex shrink-0 items-center justify-center hover:bg-[#333] transition-colors shadow-lg">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          
          <p className="text-[#fbfbfb] text-[16px] leading-[22px] max-w-[530px]">
            Assign, monitor, and manage work linked directly to plans and locations to ensure clear execution and accountability on site.
          </p>

          <button className="w-12 h-12 rounded-full bg-[#262626] border border-white/5 flex shrink-0 items-center justify-center hover:bg-[#333] transition-colors shadow-lg">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* CTA Button */}
        <button className="mt-4 px-[34px] py-[16px] rounded-[100px] bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#131515] font-medium text-[16px] shadow-lg hover:opacity-90 transition-opacity">
          Learn More
        </button>
      </motion.div>

    </section>
  );
}