import React from "react";
import imgIPhone17MistBluePortrait from "@/app/assets/170813849b0ec03e90711c968791a17ab6e046ba.png";
import imgRectangle40299 from "@/app/assets/439e715248d6c072b4e144bf39049ca171d38fe2.png";
import imgFrame1984078902 from "@/app/assets/b52da504e3dd7ad970fbf0ea033d68b27a873f5c.png";
import imgEllipse1492 from "@/app/assets/575c0b4ac0d9b4eb3b3e041d70a2c5199c21892b.png";
import imgEllipse1493 from "@/app/assets/e563ddd21b7959bee73919490744ca4ccf7acd81.png";
import imgEllipse1494 from "@/app/assets/e549f871434f43dafe28369ca55e02fbc630195e.png";
import imgRectangle191579336 from "@/app/assets/d9f70bbeacd86ff1dfa52836119c609ca48560e7.png";
import imgRectangle191579337 from "@/app/assets/9b81b1daccfb6d93a83658e655a36f2fa4f5d3c9.png";
import imgRectangle191579338 from "@/app/assets/b418d07aee713092ab1edb053891971606448bcf.png";
import imgRectangle191579339 from "@/app/assets/0f72233beef1e3fe5a356ceb3bdc3bd5e44876cb.png";
import imgRectangle191579340 from "@/app/assets/ad0eb4a80e1b462c6eb65ac0281691caa6173812.png";
import imgRectangle191579341 from "@/app/assets/0dd2efe41b18483f07f52d7fc405b808a1272a83.png";
import imgFrame1984078927 from "@/app/assets/f71ce111af551be58429a51dd4c50705b34513c6.png";
import imgEllipse1 from "@/app/assets/109e9b5e821fef1d626e9a573fc3cfb29d71aee6.png";
import imgEllipse2 from "@/app/assets/d7d3ec57c2a49e050ab630f32d45271fba5cb6d7.png";
import imgEllipse3 from "@/app/assets/d478238078102d0181e2238d77d0c97ee81dc5e3.png";

import svgPaths from "../../imports/svg-ye5cnnbbxh";

export function PhoneMockup() {
  return (
    <div className="absolute top-0 left-0 w-full h-full scale-[0.85] origin-top md:scale-[0.95] xl:scale-100 flex justify-center">
      {/* Phone Hardware Frame */}
      <img 
        src={imgIPhone17MistBluePortrait}
        alt="iPhone Mockup" 
        className="absolute w-auto h-auto max-w-[390px] z-30 pointer-events-none -left-[35px] -top-[45px]" 
      />
      
      {/* Screen Content Container */}
      <div className="relative w-[316px] h-[682px] bg-[#16151a] rounded-[48px] overflow-hidden z-10 -ml-[2px]">
        
        {/* Top Header Background Image */}
        <div className="w-full h-[305px] relative">
          <img src={imgRectangle40299} alt="Building" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16151a] via-[#16151a]/60 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute top-[280px] left-0 w-full px-[14px] flex flex-col gap-5 pb-10">
          
          {/* Title Area */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-[19px] font-bold">Aventura ParkSquare</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white text-[11px]">Aventura, FL</span>
                <span className="bg-[#00b676]/10 text-[#00b676] text-[9.6px] px-2 py-1 rounded-full border border-[#00b676] flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00b676]" />
                  Active
                </span>
              </div>
              <span className="text-[#ff7a00] text-[11px] underline font-medium">12 mins drive</span>
            </div>
            <p className="text-white text-[11px]">Assigned Area: Level 2 · North Elevation</p>
          </div>

          {/* Today at Site Box */}
          <div className="bg-[#262626] rounded-[10px] p-2.5 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h4 className="text-white text-[13px] font-bold">Today at Site</h4>
              <span className="text-[#ff7a00] text-[11px] underline font-medium cursor-pointer">Start Timer</span>
            </div>
            <div className="grid grid-cols-2 gap-y-2 mt-1">
              <div className="flex flex-col">
                <span className="text-[#878787] text-[11px]">Assigned Area:</span>
                <span className="text-white text-[11px]">Level 2 · North Elevation</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#878787] text-[11px]">Assigned Task:</span>
                <span className="text-white text-[11px]">Architectural Facade</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#878787] text-[11px]">Priority:</span>
                <span className="text-white text-[11px]">Medium</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#878787] text-[11px]">Estimated Time:</span>
                <span className="text-white text-[11px]">Nov 6, 2025</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#878787] text-[11px]">Condition:</span>
                <span className="text-white text-[11px]">Partly Cloudy ⛅</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#878787] text-[11px]">Temperature:</span>
                <span className="text-white text-[11px]">16°F</span>
              </div>
            </div>
            <p className="text-[#878787] text-[11px] mt-1">Conditions for facade installation until 3 PM.</p>
          </div>

          {/* Site Location Map */}
          <div className="bg-[#262626] rounded-[10px] p-2.5 flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <h4 className="text-white text-[13px] font-bold">Site Location</h4>
              <span className="text-[#ff7a00] text-[11px] underline font-medium cursor-pointer">View Plan</span>
            </div>
            <div className="w-full h-[120px] rounded-[6px] overflow-hidden relative">
              <img src={imgFrame1984078902} alt="Map" className="w-full h-full object-cover" />
              {/* Map Avatars */}
              <img src={imgEllipse1492} className="absolute top-[40%] left-[45%] w-[19px] h-[19px] rounded-full border border-[#FBC6A0]" />
              <img src={imgEllipse1493} className="absolute top-[60%] left-[75%] w-[19px] h-[19px] rounded-full border border-[#A1EAB6]" />
              <img src={imgEllipse1494} className="absolute top-[20%] left-[15%] w-[19px] h-[19px] rounded-full border border-[#A2D2FF]" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
