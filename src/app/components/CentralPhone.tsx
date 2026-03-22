import { motion } from "motion/react";
import imgBuilding from "@/app/assets/439e715248d6c072b4e144bf39049ca171d38fe2.png";
import imgMap from "@/app/assets/b52da504e3dd7ad970fbf0ea033d68b27a873f5c.png";
import imgPhoneMockup from "@/app/assets/170813849b0ec03e90711c968791a17ab6e046ba.png";
import { Signal, Wifi, Battery, Menu, Grid, MapPin, CloudRain, Thermometer } from "lucide-react";

type CentralPhoneProps = {
  screenImageSrc?: string;
  screenAlt?: string;
};

export function CentralPhone({ screenImageSrc, screenAlt = "Platform screen preview" }: CentralPhoneProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative z-40 w-[340px] h-[710px] flex items-center justify-center drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
    >
      {/* Phone Hardware Mockup Overlay (if the image has transparency in center) */}
      <img src={imgPhoneMockup} alt="Phone Mockup" className="absolute inset-0 w-[360px] h-[730px] max-w-none -left-2.5 -top-2.5 z-30 pointer-events-none" />

      {/* App Screen Content */}
      <div className="absolute top-[12px] bottom-[12px] left-[12px] right-[12px] bg-[#111] rounded-[42px] overflow-hidden flex flex-col z-10 no-scrollbar">
        {screenImageSrc ? (
          <img src={screenImageSrc} alt={screenAlt} className="h-full w-full object-cover" />
        ) : (
          <>
            {/* Header & Status Bar area (transparent over image) */}
            <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent pb-6">
              {/* Status Bar */}
              <div className="flex justify-between items-center px-8 pt-3 pb-1 text-white">
                <span className="text-sm font-semibold pl-1">9:41</span>
                {/* Dynamic Island Area */}
                <div className="w-[100px] h-[30px] bg-black rounded-full" />
                <div className="flex items-center gap-1.5 opacity-90 pr-1">
                  <Signal className="w-4 h-4" />
                  <Wifi className="w-4 h-4" />
                  <Battery className="w-[22px] h-[11px]" />
                </div>
              </div>

              {/* App Nav */}
              <div className="flex justify-between items-center px-5 pt-2">
                <Menu className="w-6 h-6 text-white" />
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <div className="w-4 h-4 flex gap-0.5">
                    <div className="w-full h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-[2px] transform -skew-x-12" />
                    <div className="w-full h-full bg-gradient-to-b from-green-400 to-green-600 rounded-[2px] transform -skew-x-12" />
                  </div>
                  Stack
                </div>
                <Grid className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Building Image */}
            <div className="relative h-[300px] shrink-0">
              <img src={imgBuilding} alt="Building Site" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            </div>

            {/* Content Scroll Area */}
            <div className="flex-1 px-4 -mt-10 relative z-10 space-y-4 pb-10 overflow-y-auto">
              {/* Title Area */}
              <div>
                <h2 className="text-xl font-bold text-white mb-2">Aventura ParkSquare</h2>
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-white">Aventura, FL</span>
                    <span className="bg-green-500/10 text-green-500 border border-green-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Active
                    </span>
                  </div>
                  <span className="text-orange-500 flex items-center gap-1 underline font-medium">
                    <MapPin className="w-3 h-3" /> 12 mins drive
                  </span>
                </div>
                <p className="text-white/80 text-[11px] mt-2">Assigned Area: Level 2 · North Elevation</p>
              </div>

              {/* Today at Site Card */}
              <div className="bg-[#262626] rounded-xl p-3">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-white">Today at Site</h3>
                  <span className="text-orange-500 text-xs underline font-medium">Start Timer</span>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[11px]">
                  <div>
                    <p className="text-white/50 mb-0.5">Assigned Area:</p>
                    <p className="text-white">Level 2 · North Elevation</p>
                  </div>
                  <div>
                    <p className="text-white/50 mb-0.5">Assigned Task:</p>
                    <p className="text-white">Architectural Facade</p>
                  </div>
                  <div>
                    <p className="text-white/50 mb-0.5">Priority:</p>
                    <p className="text-white">Medium</p>
                  </div>
                  <div>
                    <p className="text-white/50 mb-0.5">Estimated Time:</p>
                    <p className="text-white">Nov 6, 2025</p>
                  </div>
                  <div>
                    <p className="text-white/50 mb-0.5">Condition:</p>
                    <p className="text-white flex items-center gap-1">Partly Cloudy <CloudRain className="w-3 h-3" /></p>
                  </div>
                  <div>
                    <p className="text-white/50 mb-0.5">Temperature:</p>
                    <p className="text-white flex items-center gap-1">16°F <Thermometer className="w-3 h-3" /></p>
                  </div>
                </div>
                <p className="text-white/50 text-[11px] mt-3">Conditions for facade installation until 3 PM.</p>
              </div>

              {/* Site Location Map Card */}
              <div className="bg-[#262626] rounded-xl p-3">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-white">Site Location</h3>
                  <span className="text-orange-500 text-xs underline font-medium">View Plan</span>
                </div>
                <div className="h-[200px] rounded-lg overflow-hidden relative">
                  <img src={imgMap} alt="Site Map" className="w-full h-full object-cover" />
                  <div className="absolute top-[40%] left-[40%] w-6 h-6 bg-orange-400/50 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white" />
                  </div>
                  <div className="absolute top-[60%] right-[30%] w-6 h-6 bg-green-400/50 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
