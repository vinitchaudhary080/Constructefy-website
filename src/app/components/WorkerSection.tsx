import { motion } from "motion/react";
import { 
  Menu, Grid, Search, Mic, SlidersHorizontal, MapPin, 
  Layers, Play, Square, FileText, ChevronUp, Home, 
  CloudRain, Phone, MessageCircle 
} from "lucide-react";

export function WorkerSection() {
  return (
    <section className="bg-[#0A0A0A] w-full pt-16 pb-32 px-4 relative z-10 font-['DM_Sans'] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Top Split Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full"
        >
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="bg-white text-[#131515] text-sm font-medium px-5 py-2 rounded-full w-max shadow-sm">
              For Workers
            </div>
            <h3 className="text-[36px] leading-[1.1] md:text-5xl lg:text-[48px] font-medium tracking-tight">
              Designed for effortless <br className="hidden md:block" />
              <span className="text-[#f67011]">on-site execution</span>
            </h3>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-[#fbfbfb] text-base leading-relaxed opacity-90">
              Constructefy keeps work simple on the ground—clear instructions, minimal input, and no unnecessary admin slowing workers down.
            </p>
          </div>
        </motion.div>

        {/* 3 Columns of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white/5 rounded-[14px] border border-white/5 h-[470px] overflow-hidden relative shadow-2xl flex flex-col"
          >
            <div className="px-8 pt-8 pb-4 text-center flex flex-col items-center z-10 relative">
              <h4 className="text-[24px] font-semibold text-white mb-3">Simple mobile app</h4>
              <p className="text-white/50 text-[16px] leading-[24px]">
                An intuitive app that works in real site conditions, requiring minimal training to get started.
              </p>
            </div>
            
            <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[340px] h-[500px] bg-[#16151a] rounded-t-[20px] border border-orange-500/15 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
              {/* App Status Bar */}
              <div className="h-7 w-full flex justify-center items-end pb-1">
                <div className="w-[100px] h-[24px] bg-black rounded-full" />
              </div>
              
              {/* App Header */}
              <div className="flex justify-between items-center px-4 py-3">
                <Menu className="w-5 h-5 text-white" />
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-gradient-to-br from-orange-500 to-blue-600" />
                  <span className="font-bold text-sm">Stack</span>
                </div>
                <Grid className="w-5 h-5 text-white" />
              </div>

              {/* App Search */}
              <div className="px-4 py-2 flex gap-3 items-center">
                <div className="flex-1 bg-[#262626] rounded-lg h-10 flex items-center px-3 gap-2">
                  <Search className="w-4 h-4 text-[#878787]" />
                  <span className="text-[#878787] text-sm flex-1">Search</span>
                  <Mic className="w-4 h-4 text-[#878787]" />
                </div>
                <SlidersHorizontal className="w-5 h-5 text-white" />
              </div>

              {/* App Filters */}
              <div className="px-4 py-2 flex gap-2 overflow-hidden scrollbar-hide">
                <div className="bg-[#fde2cf] text-[#f67011] px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ring-1 ring-[#f67011]">All</div>
                <div className="bg-[#262626] text-white px-4 py-1.5 rounded-full text-xs whitespace-nowrap border border-[#5a5a5a]">Residential</div>
                <div className="bg-[#262626] text-white px-4 py-1.5 rounded-full text-xs whitespace-nowrap border border-[#5a5a5a]">Commercial</div>
              </div>

              {/* App List */}
              <div className="px-4 pt-3 flex flex-col gap-3">
                {/* List Item 1 */}
                <div className="bg-[#262626] rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-[14px]">Aventura ParkSquare</h5>
                      <p className="text-[#878787] text-xs">Aventura, FL</p>
                    </div>
                    <div className="bg-[#f3fcf6] border border-[#00b676] text-[#00b676] px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#00b676] rounded-full" /> Active
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1 text-xs">
                      <div><span className="text-[#878787]">Role:</span> <span className="font-medium">Facade Installer</span></div>
                      <div><span className="text-[#878787]">Today:</span> <span className="font-medium">2 tasks pending</span></div>
                    </div>
                    <div className="text-xs"><span className="text-[#ff9f2e] font-medium">68%</span> <span className="text-[#878787]">complete</span></div>
                  </div>
                </div>

                {/* List Item 2 */}
                <div className="bg-[#262626] rounded-xl p-4 flex flex-col gap-3 opacity-60">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-semibold text-[14px]">Matheson Residence</h5>
                      <p className="text-[#878787] text-xs">Aventura, FL</p>
                    </div>
                    <div className="bg-[#f3fcf6] border border-[#00b676] text-[#00b676] px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#00b676] rounded-full" /> Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#4c2e18] rounded-[14px] h-[470px] overflow-hidden relative shadow-2xl flex flex-col border border-[#4c2e18]/50"
          >
            <div className="px-8 pt-8 pb-4 text-center flex flex-col items-center z-10 relative">
              <h4 className="text-[24px] font-semibold text-white mb-3">Clear, area-based instructions</h4>
              <p className="text-white/80 text-[16px] leading-[24px]">
                Tasks and work areas are clearly defined, reducing confusion, errors, and rework on site.
              </p>
            </div>
            
            <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[340px] h-[500px] bg-[#16151a] rounded-t-[20px] border border-orange-500/15 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
              
              {/* App Content Scrolled */}
              <div className="flex flex-col px-3 pt-6 gap-3 pb-10">
                <div className="flex flex-col gap-1.5 px-1">
                  <h4 className="font-bold text-xl">Aventura ParkSquare</h4>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-xs">Aventura, FL</span>
                      <div className="bg-[#00b676]/10 border border-[#00b676] text-[#00b676] px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1">
                        <div className="w-1 h-1 bg-[#00b676] rounded-full" /> Active
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[#ff7a00] text-xs font-medium underline">
                      <MapPin className="w-3 h-3" /> 12 mins drive
                    </div>
                  </div>
                  <div className="text-xs mt-1 text-white/90">Assigned Area: Level 2 · North Elevation</div>
                </div>

                {/* Box 1: Today at Site */}
                <div className="bg-[#262626] rounded-xl p-3 flex flex-col gap-3 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Today at Site</span>
                    <span className="text-[#ff7a00] text-xs font-medium underline">Start Timer</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-[11px] leading-relaxed">
                    <div>
                      <div className="text-[#878787]">Assigned Area:</div>
                      <div>Level 2 · North Elevation</div>
                    </div>
                    <div>
                      <div className="text-[#878787]">Assigned Task:</div>
                      <div>Architectural Facade</div>
                    </div>
                    <div>
                      <div className="text-[#878787]">Priority:</div>
                      <div>Medium</div>
                    </div>
                    <div>
                      <div className="text-[#878787]">Estimated Time:</div>
                      <div>Nov 6, 2025</div>
                    </div>
                    <div>
                      <div className="text-[#878787]">Condition:</div>
                      <div className="flex items-center gap-1">Partly Cloudy <CloudRain className="w-3 h-3" /></div>
                    </div>
                    <div>
                      <div className="text-[#878787]">Temperature:</div>
                      <div>16°F</div>
                    </div>
                  </div>
                </div>

                {/* Box 2: Site Location */}
                <div className="bg-[#262626] rounded-xl p-3 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Site Location</span>
                    <span className="text-[#ff7a00] text-xs font-medium underline">View Plan</span>
                  </div>
                  <div className="h-[90px] rounded-lg bg-black/40 overflow-hidden relative border border-white/5 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white/20" />
                    {/* Fake map dots */}
                    <div className="absolute top-3 left-8 w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"/></div>
                    <div className="absolute bottom-3 right-8 w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-green-400"/></div>
                  </div>
                </div>

                {/* Box 3: Project Status */}
                <div className="bg-[#262626] rounded-xl p-3 flex flex-col gap-3 relative">
                   <div className="flex justify-between items-center">
                    <span className="font-bold text-sm">Project Status</span>
                    <span className="text-[#ff7a00] text-xs font-medium underline">View All Tasks</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#878787]">Fabrication</span>
                    <span>68% complete</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#878787]/30 rounded-full overflow-hidden">
                    <div className="w-[68%] h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
                  </div>
                  
                  {/* Faded overlay at bottom to suggest scrolling */}
                  <div className="absolute -bottom-1 -left-1 -right-1 h-12 bg-gradient-to-t from-[#16151a] to-transparent pointer-events-none rounded-b-xl" />
                </div>
              </div>

            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/5 rounded-[14px] border border-white/5 h-[470px] overflow-hidden relative shadow-2xl flex flex-col"
          >
            <div className="px-8 pt-8 pb-4 text-center flex flex-col items-center z-10 relative">
              <h4 className="text-[24px] font-semibold text-white mb-3">No paperwork or disputes</h4>
              <p className="text-white/50 text-[16px] leading-[24px]">
                Work logs are captured automatically, ensuring transparent records and eliminating manual registers and payment disputes.
              </p>
            </div>
            
            <div className="absolute top-[170px] left-1/2 -translate-x-1/2 w-[340px] h-[500px] bg-[#16151a] rounded-t-[20px] border border-orange-500/15 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
              {/* App Status Bar */}
              <div className="h-7 w-full flex justify-center items-end pb-1">
                <div className="w-[100px] h-[24px] bg-black rounded-full" />
              </div>
              
              {/* App Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b border-white/5">
                <Menu className="w-5 h-5 text-white" />
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 via-orange-500 to-blue-500" />
                  <span className="font-bold text-sm">Tickr</span>
                </div>
                <Grid className="w-5 h-5 text-white" />
              </div>

              {/* App Body */}
              <div className="flex-1 flex flex-col items-center relative px-4 pt-4">
                
                <div className="w-full flex justify-between items-center mb-8">
                  <div className="bg-[#fff8f3] text-[#f67011] px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f67011]" /> Break
                  </div>
                  <FileText className="w-5 h-5 text-white" />
                </div>

                {/* Circular Timer Mockup */}
                <div className="relative w-[200px] h-[200px] flex items-center justify-center mb-8">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#2C2C2C" strokeWidth="16" />
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#F88D41" strokeWidth="16" strokeDasharray="565" strokeDashoffset="400" strokeLinecap="round" />
                  </svg>
                  <div className="flex flex-col items-center gap-3 z-10">
                    <div className="text-[32px] font-bold tracking-tight">30:00</div>
                    <div className="flex gap-2">
                      <button className="bg-white text-[#16151a] px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1.5">
                        <Play className="w-3 h-3 fill-[#16151a]" /> Resume
                      </button>
                      <button className="bg-transparent border border-white text-white px-3 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1.5">
                        <Square className="w-3 h-3 fill-white" /> Stop
                      </button>
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col gap-2">
                  <span className="text-sm">Why are you pausing?</span>
                  <div className="bg-[#262626] rounded-lg p-3 flex justify-between items-center">
                    <span className="text-sm">Break</span>
                    <ChevronUp className="w-4 h-4 text-white" />
                  </div>
                </div>

              </div>
              
              {/* Bottom Nav */}
              <div className="absolute bottom-[30px] left-0 right-0 h-[60px] bg-[#1c1b20]/90 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-8 z-20">
                <Home className="w-6 h-6 text-[#f67011]" />
                <Search className="w-6 h-6 text-[#878787]" />
                <div className="relative">
                  <Layers className="w-6 h-6 text-[#878787]" />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full flex items-center justify-center text-[9px] font-bold">2</div>
                </div>
                <MessageCircle className="w-6 h-6 text-[#878787]" />
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}