import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Wrench, Plus, LayoutGrid } from "lucide-react";

export function ManagerSection() {
  return (
    <section className="bg-[#0A0A0A] w-full pt-32 pb-32 px-4 relative z-10 font-['DM_Sans'] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-32">
        
        {/* Top Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <h2 className="text-[40px] leading-[1.1] md:text-5xl lg:text-[56px] font-medium tracking-tight">
            Built for every role across the entire <span className="text-[#f67011]">construction site</span>
          </h2>
          <p className="text-[#fbfbfb] text-base md:text-lg leading-relaxed max-w-2xl opacity-90">
            Constructefy aligns everyone on the construction site around a single, reliable system—making adoption easy for workers and control effortless for managers.
          </p>
        </motion.div>

        {/* Middle Split Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full"
        >
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="bg-white text-[#131515] text-sm font-medium px-5 py-2 rounded-full w-max shadow-sm">
              For Managers
            </div>
            <h3 className="text-[36px] leading-[1.1] md:text-5xl lg:text-[48px] font-medium tracking-tight">
              Total visibility and control <br className="hidden md:block" />
              <span className="text-[#f67011]">across sites</span>
            </h3>
          </div>
          <div className="max-w-md pb-2">
            <p className="text-[#fbfbfb] text-base leading-relaxed opacity-90">
              Constructefy gives management teams real-time insight into workforce activity, progress, and risk—without chasing updates.
            </p>
          </div>
        </motion.div>

        {/* Bottom Card Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-[380px]"
        >
          {/* Live Dashboard Card */}
          <div className="bg-[#16151a] rounded-[14px] overflow-hidden border border-white/5 h-[470px] relative shadow-2xl">
            <div className="p-7">
              <h4 className="text-[24px] font-semibold tracking-[-0.4px] text-white mb-3">Live dashboards</h4>
              <p className="text-white/50 text-[16px] leading-[24px] max-w-[280px]">
                Monitor attendance, site activity, and progress in real time from a single view.
              </p>
            </div>

            {/* Kanban Mockup container - absolutely positioned to overflow right and bottom */}
            <div className="absolute top-[170px] left-5 w-[650px] h-[350px] bg-[#16151a] rounded-[14px] border border-orange-500/15 overflow-hidden flex flex-col shadow-2xl">
              
              {/* Fake Browser/App Chrome */}
              <div className="h-[43px] border-b border-white/5 flex items-center justify-between px-5">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#f84241]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff9f2e]" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#14cb49]" />
                </div>
                <img src="https://images.unsplash.com/photo-1767381392938-c95d24cd5873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHNtYWxsJTIwZmFjZXxlbnwxfHx8fDE3NzM3Mzk0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Profile" className="w-[22px] h-[22px] rounded-full object-cover border border-white/10" />
              </div>

              {/* Kanban Header 1 */}
              <div className="h-[44px] border-b border-white/5 flex items-center justify-between px-4">
                <div className="flex items-center gap-2 text-white">
                  <ChevronLeft className="w-4 h-4 text-white/50" />
                  <span className="font-bold text-xs">Glass Facade Installation</span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-[5px] px-2.5 py-1.5 flex items-center gap-1 shadow-sm">
                    <Plus className="w-3 h-3 text-white" />
                    <span className="text-[8px] font-medium text-white">New Event</span>
                  </button>
                  <div className="flex gap-2 text-white/40">
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <div className="w-3.5 h-3.5 border border-current rounded-[3px] flex items-center justify-center">
                      <div className="w-1.5 h-[1px] bg-current" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Kanban Header 2 */}
              <div className="h-[40px] flex items-center justify-between px-4 pt-2">
                <div className="bg-[#1c1b20] border border-white/5 rounded-[3px] px-1.5 py-1 flex items-center gap-1.5 h-[20px]">
                  <ChevronLeft className="w-2.5 h-2.5 text-white/60" />
                  <span className="text-[10px] font-medium text-white">October 2025</span>
                  <ChevronRight className="w-2.5 h-2.5 text-white/60" />
                </div>
                <div className="flex gap-1.5 h-[20px]">
                  <div className="border border-white/10 rounded-[5px] px-3 flex items-center justify-center text-[8px] text-[#989795]">Weekly</div>
                  <div className="border border-white/10 rounded-[5px] px-2.5 flex items-center justify-center text-[8px] text-[#989795]">Daily</div>
                  <div className="bg-[#262626] border border-white/10 rounded-[5px] px-2 flex items-center justify-center gap-1">
                    <LayoutGrid className="w-2.5 h-2.5 text-white" />
                    <span className="text-[7px] text-white">Kanban</span>
                  </div>
                </div>
              </div>

              {/* Kanban Columns Area */}
              <div className="flex-1 px-4 pb-4 pt-2 flex gap-3 overflow-hidden">
                
                {/* Column 1: In Progress */}
                <div className="flex-1 flex flex-col min-w-[212px]">
                  <div className="bg-[#14cb49] text-[#16151a] font-medium text-[9px] h-[23.5px] flex items-center justify-center rounded-t-[5px]">
                    In Progress
                  </div>
                  <div className="flex-1 bg-[#1c1b20] rounded-b-[5px] p-1.5 flex flex-col gap-1.5 relative">
                    
                    {/* Task 1 */}
                    <div className="bg-[#16151a] rounded-[8px] p-2 flex flex-col gap-1.5 shadow-sm border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#f84241] text-[#16151a] text-[6px] px-1.5 py-[3px] rounded-full font-medium leading-none">High Priority</span>
                        <div className="flex items-center gap-1 text-[7px] text-white"><Calendar className="w-[9px] h-[9px]" /> Nov 12, 2025</div>
                      </div>
                      <div className="text-[8px] text-white mt-0.5">Summit Plaza — HVAC Duct Setup</div>
                      <div className="flex justify-between items-center mt-1 w-full">
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><MapPin className="w-2 h-2" /> Austin, TX</div>
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><Wrench className="w-2 h-2" /> Installation</div>
                        </div>
                        <div className="flex items-center gap-1 text-[7px] text-[#878787] whitespace-nowrap">
                          <div className="w-[4px] h-[4px] rounded-full bg-[#14cb49] ring-1 ring-[#14cb49]/30" /> 80% Done
                        </div>
                      </div>
                    </div>
                    
                    {/* Task 2 */}
                    <div className="bg-[#16151a] rounded-[8px] p-2 flex flex-col gap-1.5 shadow-sm border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#ff9f2e] text-[#16151a] text-[6px] px-1.5 py-[3px] rounded-full font-medium leading-none">Medium Priority</span>
                        <div className="flex items-center gap-1 text-[7px] text-white"><Calendar className="w-[9px] h-[9px]" /> Nov 15, 2025</div>
                      </div>
                      <div className="text-[8px] text-white mt-0.5">Tower Heights — Electrical Wiring</div>
                      <div className="flex justify-between items-center mt-1 w-full">
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><MapPin className="w-2 h-2" /> Dallas, TX</div>
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><Wrench className="w-2 h-2" /> Installation</div>
                        </div>
                        <div className="flex items-center gap-1 text-[7px] text-[#878787] whitespace-nowrap">
                          <div className="w-[4px] h-[4px] rounded-full bg-[#14cb49] ring-1 ring-[#14cb49]/30" /> 65% Done
                        </div>
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div className="bg-[#16151a] rounded-[8px] p-2 flex flex-col gap-1.5 shadow-sm border border-white/5 relative">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#f84241] text-[#16151a] text-[6px] px-1.5 py-[3px] rounded-full font-medium leading-none">High Priority</span>
                        <div className="flex items-center gap-1 text-[7px] text-white"><Calendar className="w-[9px] h-[9px]" /> Nov 10, 2025</div>
                      </div>
                      <div className="text-[8px] text-white mt-0.5">Skyline Complex — Foundation Inspection</div>
                    </div>
                    
                    {/* Bottom fade for column */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1b20] to-transparent pointer-events-none rounded-b-[5px]" />
                  </div>
                </div>

                {/* Column 2: Pending */}
                <div className="flex-1 flex flex-col min-w-[212px]">
                  <div className="bg-[#ff9f2e] text-[#16151a] font-medium text-[9px] h-[23.5px] flex items-center justify-center rounded-t-[5px]">
                    Pending
                  </div>
                  <div className="flex-1 bg-[#1c1b20] rounded-b-[5px] p-1.5 flex flex-col gap-1.5 relative">
                    
                    {/* Task 1 */}
                    <div className="bg-[#16151a] rounded-[8px] p-2 flex flex-col gap-1.5 shadow-sm border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#f84241] text-[#16151a] text-[6px] px-1.5 py-[3px] rounded-full font-medium leading-none">High Priority</span>
                        <div className="flex items-center gap-1 text-[7px] text-white"><Calendar className="w-[9px] h-[9px]" /> Nov 20, 2025</div>
                      </div>
                      <div className="text-[8px] text-white mt-0.5">Harbor View — Steel Framework Assembly</div>
                      <div className="flex justify-between items-center mt-1 w-full">
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><MapPin className="w-2 h-2" /> Austin, TX</div>
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><Wrench className="w-2 h-2" /> Assembly</div>
                        </div>
                        <div className="flex items-center gap-1 text-[7px] text-[#878787] whitespace-nowrap">
                          <div className="w-[4px] h-[4px] rounded-full bg-[#14cb49] ring-1 ring-[#14cb49]/30" /> 30% Done
                        </div>
                      </div>
                    </div>
                    
                    {/* Task 2 */}
                    <div className="bg-[#16151a] rounded-[8px] p-2 flex flex-col gap-1.5 shadow-sm border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#ff9f2e] text-[#16151a] text-[6px] px-1.5 py-[3px] rounded-full font-medium leading-none">Medium Priority</span>
                        <div className="flex items-center gap-1 text-[7px] text-white"><Calendar className="w-[9px] h-[9px]" /> Nov 15, 2025</div>
                      </div>
                      <div className="text-[8px] text-white mt-0.5">Metro Center — Plumbing Installation</div>
                      <div className="flex justify-between items-center mt-1 w-full">
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><MapPin className="w-2 h-2" /> Houston, TX</div>
                          <div className="flex items-center gap-0.5 text-[7px] text-[#878787]"><Wrench className="w-2 h-2" /> Plumbing</div>
                        </div>
                        <div className="flex items-center gap-1 text-[7px] text-[#878787] whitespace-nowrap">
                          <div className="w-[4px] h-[4px] rounded-full bg-[#14cb49] ring-1 ring-[#14cb49]/30" /> 45% Done
                        </div>
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div className="bg-[#16151a] rounded-[8px] p-2 flex flex-col gap-1.5 shadow-sm border border-white/5 relative">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#14cb49] text-[#16151a] text-[6px] px-1.5 py-[3px] rounded-full font-medium leading-none">Low Priority</span>
                        <div className="flex items-center gap-1 text-[7px] text-white"><Calendar className="w-[9px] h-[9px]" /> Nov 22, 2025</div>
                      </div>
                      <div className="text-[8px] text-white mt-0.5">Riverside Plaza — HVAC System Check</div>
                    </div>
                    
                    {/* Bottom fade for column */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1c1b20] to-transparent pointer-events-none rounded-b-[5px]" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}