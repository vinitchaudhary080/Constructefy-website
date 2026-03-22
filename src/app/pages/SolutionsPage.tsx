import { motion } from "motion/react";
import { useState } from "react";
import svgPaths from "../../imports/svg-eyj3dapk4e";
import svgPathsEngineers from "../../imports/svg-usn9ymugo4";
import svgPathsSafety from "../../imports/svg-uatfdbdh12";
import svgPathsContractors from "../../imports/svg-zs53m29twq";
import imgFrame1984079030 from "@/app/assets/713b082e7aeb67749e07b78f112cdd5c419d110c.png";
import imgFrame1984079031 from "@/app/assets/5443a299bbcacbe5a06e06cdda6cb138ec6ac224.png";
import imgFrame1984079032 from "@/app/assets/ca26cd112778214e0b970083590aae98e0c08b8b.png";
import imgFrame1984079033 from "@/app/assets/bba16641a22c0f6213fdb6e6bf31ef140695958a.png";
import imgScaleImage from "@/app/assets/e4d87e0dfd7102b1c760f168040652be29c9e9ff.png";
import svgPathsLogo from "../../imports/svg-ucars7i5iv";
import { TestimonialsSection } from "../components/TestimonialsSection";

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState<'small' | 'mid' | 'large'>('small');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#131515] min-h-[800px] lg:min-h-[900px] overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 md:pt-32 lg:pt-40 pb-32 md:pb-40 lg:pb-48">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium text-white mb-5 leading-tight tracking-tight">
              Solutions built for real construction operations
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              Constructefy adapts to different roles and company sizes, delivering clarity, control, and verified execution across every stage of construction.
            </p>
          </motion.div>

          {/* Phone Mockups */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            {/* Left Phone - Timer */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 lg:left-[10%] top-12 md:top-16 lg:top-20 w-[180px] md:w-[200px] lg:w-[228px] z-20"
            >
              <div className="relative rounded-[16px] overflow-hidden shadow-[0_0_0_6px_rgba(255,255,255,0.1)] border border-white/20">
                {/* Gradient Background */}
                <div className="bg-gradient-to-b from-[#131515]/30 to-[#131515]/80 p-8 md:p-10 lg:p-12">
                  {/* Timer Circle */}
                  <div className="relative w-[120px] md:w-[140px] lg:w-[164px] h-[120px] md:h-[140px] lg:h-[164px] mx-auto mb-4">
                    {/* Gray circle background */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 164 164">
                      <circle
                        cx="82"
                        cy="82"
                        r="70"
                        fill="none"
                        stroke="#2C2C2C"
                        strokeWidth="12"
                      />
                      <circle
                        cx="82"
                        cy="82"
                        r="70"
                        fill="none"
                        stroke="#878787"
                        strokeWidth="12"
                        strokeDasharray="440"
                        strokeDashoffset="220"
                      />
                      <circle
                        cx="82"
                        cy="82"
                        r="70"
                        fill="none"
                        stroke="#F88D41"
                        strokeWidth="12"
                        strokeDasharray="440"
                        strokeDashoffset="110"
                      />
                    </svg>
                    {/* Time Display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl md:text-2xl lg:text-[21px] font-bold text-white">30:00</span>
                    </div>
                  </div>
                  {/* Resume Button */}
                  <button className="bg-white flex items-center gap-2 px-3 py-2 rounded-[18px] mx-auto">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 2L11 7L3 12V2Z" stroke="#16151A" strokeWidth="1.14" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <span className="text-[#16151a] text-[10px] font-medium">Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Center Phone - Project List */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[280px] md:w-[320px] lg:w-[348px] z-30"
            >
              <div className="relative bg-black/40 backdrop-blur-sm rounded-[30px] overflow-hidden shadow-[0_0_0_6px_rgba(255,255,255,0.1)] border border-white/20">
                {/* Phone Status Bar */}
                <div className="flex items-center justify-between px-6 py-3 text-white text-xs">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-2.5 bg-white rounded-sm" />
                      <div className="w-1 h-3 bg-white rounded-sm" />
                      <div className="w-1 h-3.5 bg-white rounded-sm" />
                      <div className="w-1 h-4 bg-white rounded-sm" />
                    </div>
                    <svg width="18" height="13" viewBox="0 0 18 13" fill="white" className="ml-0.5">
                      <path d="M15.5 6.5C15.5 5 14 3.5 12 2.5C10 1.5 8 1 6 1C4 1 2 1.5 0 3.5" stroke="white" strokeWidth="1.3" fill="none"/>
                    </svg>
                    <div className="w-6 h-3 bg-white/35 border border-white rounded-sm relative">
                      <div className="absolute inset-0.5 bg-white rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 py-2 flex items-center justify-between backdrop-blur-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6H21M3 12H21M3 18H21" stroke="white" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 relative flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="drop-shadow-sm">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#178FFF" />
                        <path d="M2 12L12 17L22 12" stroke="#FF9F2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="#F84241" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white text-xs font-bold">Stack</span>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.77">
                    <circle cx="5" cy="5" r="1.3" />
                    <circle cx="12" cy="5" r="1.3" />
                    <circle cx="19" cy="5" r="1.3" />
                    <circle cx="5" cy="12" r="1.3" />
                    <circle cx="12" cy="12" r="1.3" />
                    <circle cx="19" cy="12" r="1.3" />
                    <circle cx="5" cy="19" r="1.3" />
                    <circle cx="12" cy="19" r="1.3" />
                    <circle cx="19" cy="19" r="1.3" />
                  </svg>
                </div>

                {/* Search Bar */}
                <div className="px-4 mt-4">
                  <div className="bg-[#262626]/50 rounded-lg px-3 py-2.5 flex items-center gap-2">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <circle cx="9" cy="9" r="6.2" stroke="#878787" strokeWidth="1.33" />
                      <path d="M14 14L17.5 17.5" stroke="#878787" strokeWidth="1.33" strokeLinecap="round" />
                    </svg>
                    <span className="text-[#878787] text-[14px]">Search</span>
                    <div className="ml-auto">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M7 4V10C7 11 7.5 12 8.5 12C9.5 12 10 11 10 10V4M10 16V17M8 17H10H12M7 7H10" stroke="#878787" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="px-4 mt-3 flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <button className="bg-[#f67011] text-white text-[12px] font-medium px-4 py-2 rounded-[16px] whitespace-nowrap border border-[#f67011]">
                    All
                  </button>
                  <button className="bg-[#262626]/50 text-white text-[12px] px-4 py-2 rounded-[16px] whitespace-nowrap border border-[#5a5a5a]">
                    Residential
                  </button>
                  <button className="bg-[#262626]/50 text-white text-[12px] px-4 py-2 rounded-[16px] whitespace-nowrap border border-[#5a5a5a]">
                    Commercial
                  </button>
                  <button className="bg-[#262626]/50 text-white text-[12px] px-4 py-2 rounded-[16px] whitespace-nowrap border border-[#5a5a5a]">
                    Recurring
                  </button>
                </div>

                {/* Project Cards */}
                <div className="px-4 mt-3 pb-4 space-y-3">
                  {/* Project 1 */}
                  <div className="bg-[#262626]/40 rounded-lg p-3.5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white text-[14px] font-semibold mb-0.5">Aventura ParkSquare</h4>
                        <p className="text-white/70 text-[12px]">Aventura, FL</p>
                      </div>
                      <div className="bg-[#f3fcf6] border border-[#00b676] px-2 py-1 rounded-lg flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#00b676]" />
                        <span className="text-[#00b676] text-[10px] font-medium">Active</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#878787] text-[12px]">
                          Role: <span className="text-white font-medium">Facade Installer</span>
                        </p>
                        <p className="text-[#878787] text-[12px]">
                          Today: <span className="text-white font-medium">2 tasks pending</span>
                        </p>
                      </div>
                      <p className="text-[12px] mt-auto">
                        <span className="text-[#ff9f2e] font-semibold">68%</span> <span className="text-white">complete</span>
                      </p>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="bg-[#262626]/40 rounded-lg p-3.5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white text-[14px] font-semibold mb-0.5">Matheson Residence</h4>
                        <p className="text-white/70 text-[12px]">Aventura, FL</p>
                      </div>
                      <div className="bg-[#f3fcf6] border border-[#00b676] px-2 py-1 rounded-lg flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#00b676]" />
                        <span className="text-[#00b676] text-[10px] font-medium">Active</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#878787] text-[12px]">
                          Role: <span className="text-white font-medium">Facade Installer</span>
                        </p>
                        <p className="text-[#878787] text-[12px]">
                          Today: <span className="text-white font-medium">2 tasks pending</span>
                        </p>
                      </div>
                      <p className="text-[12px] mt-auto">
                        <span className="text-[#ff9f2e] font-semibold">68%</span> <span className="text-white">done</span>
                      </p>
                    </div>
                  </div>

                  {/* Project 3 - Highlighted */}
                  <div className="bg-[#262626] rounded-lg p-3.5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white text-[14px] font-semibold mb-0.5">Carlson Backyard</h4>
                        <p className="text-white/70 text-[12px]">Aventura, FL</p>
                      </div>
                      <div className="bg-[#f3fcf6] border border-[#00b676] px-2 py-1 rounded-lg flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-[#00b676]" />
                        <span className="text-[#00b676] text-[10px] font-medium">Active</span>
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-[#878787] text-[12px]">
                          Role: <span className="text-white font-medium">Facade Installer</span>
                        </p>
                        <p className="text-[#878787] text-[12px]">
                          Today: <span className="text-white font-medium">2 tasks pending</span>
                        </p>
                      </div>
                      <p className="text-[12px] mt-auto">
                        <span className="text-[#ff9f2e] font-semibold">68%</span> <span className="text-white">done</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Phone - Issue Alert */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute right-0 lg:right-[10%] top-24 md:top-28 lg:top-32 w-[240px] md:w-[280px] lg:w-[302px] z-20"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-[16px] overflow-hidden shadow-[0_0_0_6px_rgba(255,255,255,0.1)] border border-white/20 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-white text-[14px] font-semibold mb-1">Misaligned Subframing</h4>
                    <p className="text-white/70 text-[12px]">North Elevation · Level 2</p>
                  </div>
                  <div className="bg-[#f84241] border border-[#f84241] px-2.5 py-1.5 rounded-[15px] flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="text-white text-[10px] font-medium leading-none">Open</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 text-[12px] text-[rgba(251,251,251,0.6)]">
                  <p>Reported by you</p>
                  <p>Today 10:24 AM</p>
                </div>
                <button className="mt-4 bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#16151a] text-[12px] font-bold px-4 py-2.5 rounded-lg w-full">
                  View Issue
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blurred Fog Effect at Bottom */}
        <div className="absolute aspect-[1440/464] blur-[12.5px] bottom-[-234px] left-0 right-0 pointer-events-none">
          <div className="absolute inset-[0_-8.33%_0.05%_-8.33%]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 463.75">
              <path 
                d="M0 0V463.75H1680V0C1109.26 291.329 304.095 121.387 0 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#16151a] mb-2.5 leading-[1.1]">
              Solutions by <span className="text-[#f67011]">role on site</span>
            </h2>
            <p className="text-base text-[#262626] leading-[22px] max-w-3xl mx-auto">
              Each role faces different challenges. Constructefy gives every team the visibility and tools they need to execute with confidence.
            </p>
          </motion.div>

          {/* For Project Managers Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[20px] p-10 md:p-14 max-w-[1160px] mx-auto"
          >
            {/* Card Title */}
            <h3 className="text-[32px] md:text-[48px] font-semibold text-[#16151a] mb-12 leading-[1.1] tracking-[-1.44px]">
              For Project <span className="text-[#f67011]">Managers</span>
            </h3>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left - Image */}
              <div className="w-full lg:w-[352px] shrink-0">
                <div className="rounded-[10px] overflow-hidden aspect-[352/469]">
                  <img 
                    src={imgFrame1984079030} 
                    alt="Project Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="flex-1 flex flex-col gap-16 lg:gap-[100px]">
                {/* Description */}
                <p className="text-[20px] md:text-[24px] font-medium text-[#6e6e73] leading-[34px] tracking-[-0.4px] max-w-[539px]">
                  Project managers lack real-time visibility into site progress, workforce allocation, and execution status across projects.
                </p>

                {/* Features and Outcome */}
                <div className="flex flex-col gap-9">
                  {/* Three Icon Features */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-9">
                    {/* Feature 1 */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d="M11.375 11.375V22.75" stroke="url(#paint0_linear_icon1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d="M3.5 11.375H24.5" stroke="url(#paint1_linear_icon1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d={svgPaths.p30a14e00} stroke="url(#paint2_linear_icon1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <defs>
                            <linearGradient id="paint0_linear_icon1" x1="11.393" x2="12.4674" y1="11.7774" y2="11.7864" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_icon1" x1="3.87869" x2="8.34678" y1="11.4104" y2="20.4019" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_icon1" x1="3.87869" x2="26.1467" y1="5.86901" y2="8.42969" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Live plan-linked dashboards
                      </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d={svgPaths.p3587c200} fill="url(#paint0_linear_icon2)" />
                          <path d={svgPaths.p38d42fb8} stroke="url(#paint1_linear_icon2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d={svgPaths.p15d278c0} stroke="url(#paint2_linear_icon2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <defs>
                            <linearGradient id="paint0_linear_icon2" x1="12.3131" x2="16.0393" y1="7.12478" y2="7.48185" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_icon2" x1="8.0959" x2="21.1847" y1="3.18211" y2="4.15765" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_icon2" x1="3.03546" x2="25.5885" y1="17.2351" y2="23.7633" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Area-based workforce tracking
                      </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <path d={svgPaths.p33a57300} stroke="url(#paint0_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d="M14 3.50098L18.0119 14.7338" stroke="url(#paint1_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d={svgPaths.p1ab8a180} stroke="url(#paint2_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d={svgPaths.p208dc870} stroke="url(#paint3_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d={svgPaths.p2ffb5fc0} stroke="url(#paint4_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d={svgPaths.p3316cc00} stroke="url(#paint5_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <path d="M23.093 8.75L15.3711 17.8402" stroke="url(#paint6_linear_icon3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          <defs>
                            <linearGradient id="paint0_linear_icon3" x1="3.87869" x2="26.2359" y1="4.24367" y2="6.38611" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_icon3" x1="14.0723" x2="18.3777" y1="3.8983" y2="4.04566" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_icon3" x1="5.11787" x2="15.0003" y1="8.82596" y2="14.0147" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_icon3" x1="5.04553" x2="13.2873" y1="10.4819" y2="11.1528" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_icon3" x1="10.0607" x2="14.3661" y1="13.665" y2="13.8124" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_icon3" x1="11.571" x2="21.4534" y1="17.1841" y2="22.3729" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_icon3" x1="15.5103" x2="23.7522" y1="9.07154" y2="9.74245" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Photo-backed execution proof
                      </p>
                    </div>
                  </div>

                  {/* Outcome Box */}
                  <div className="bg-[rgba(232,232,232,0.75)] rounded-[14px] p-4">
                    <div className="inline-flex items-center justify-center px-2 py-0.5 rounded-[70px] mb-2.5" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(232, 232, 232) 0%, rgb(232, 232, 232) 100%)' }}>
                      <span className="text-[13px] font-semibold text-[#16151a] leading-[22px]">
                        Outcome
                      </span>
                    </div>
                    <p className="text-sm text-[#262626] leading-[22px]">
                      Managers gain continuous, verified visibility across sites, enabling faster decisions, fewer disputes, predictable timelines, and confident project control backed by real-time, on-ground data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Site Engineers Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[20px] p-10 md:p-14 max-w-[1160px] mx-auto mt-12"
          >
            {/* Card Title */}
            <h3 className="text-[32px] md:text-[48px] font-semibold text-[#16151a] mb-12 leading-[1.1] tracking-[-1.44px]">
              For Site <span className="text-[#f67011]">Engineers</span>
            </h3>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left - Content */}
              <div className="flex-1 flex flex-col gap-16 lg:gap-[100px] order-2 lg:order-1">
                {/* Description */}
                <p className="text-[20px] md:text-[24px] font-medium text-[#6e6e73] leading-[34px] tracking-[-0.4px] max-w-[515px]">
                  Site engineers face unclear instructions, frequent plan changes, and manual reporting that slow daily execution.
                </p>

                {/* Features and Outcome */}
                <div className="flex flex-col gap-9">
                  {/* Three Icon Features */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-9">
                    {/* Feature 1 - Plan-linked task instructions */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_engineers_1)">
                            <path d="M11.375 11.375V22.75" stroke="url(#paint0_linear_engineers_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M3.5 11.375H24.5" stroke="url(#paint1_linear_engineers_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsEngineers.p30a14e00} stroke="url(#paint2_linear_engineers_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_engineers_1" x1="11.393" x2="12.4674" y1="11.7774" y2="11.7864" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_engineers_1" x1="3.87869" x2="8.34678" y1="11.4104" y2="20.4019" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_engineers_1" x1="3.87869" x2="26.1467" y1="5.86901" y2="8.42969" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_engineers_1">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Plan-linked task instructions
                      </p>
                    </div>

                    {/* Feature 2 - Area-wise execution tracking */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_engineers_2)">
                            <path d={svgPathsEngineers.p3587c200} fill="url(#paint0_linear_engineers_2)" />
                            <path d={svgPathsEngineers.p38d42fb8} stroke="url(#paint1_linear_engineers_2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsEngineers.p15d278c0} stroke="url(#paint2_linear_engineers_2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_engineers_2" x1="12.3131" x2="16.0393" y1="7.12478" y2="7.48185" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_engineers_2" x1="8.0959" x2="21.1847" y1="3.18211" y2="4.15765" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_engineers_2" x1="3.03546" x2="25.5885" y1="17.2351" y2="23.7633" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_engineers_2">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Area-wise execution tracking
                      </p>
                    </div>

                    {/* Feature 3 - On-site photo updates */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_engineers_3)">
                            <path d={svgPathsEngineers.p33a57300} stroke="url(#paint0_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M14 3.50098L18.0119 14.7338" stroke="url(#paint1_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsEngineers.p1ab8a180} stroke="url(#paint2_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsEngineers.p208dc870} stroke="url(#paint3_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsEngineers.p2ffb5fc0} stroke="url(#paint4_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsEngineers.p3316cc00} stroke="url(#paint5_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M23.093 8.75L15.3711 17.8402" stroke="url(#paint6_linear_engineers_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_engineers_3" x1="3.87869" x2="26.2359" y1="4.24367" y2="6.38611" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_engineers_3" x1="14.0723" x2="18.3777" y1="3.8983" y2="4.04566" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_engineers_3" x1="5.11787" x2="15.0003" y1="8.82596" y2="14.0147" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_engineers_3" x1="5.04553" x2="13.2873" y1="10.4819" y2="11.1528" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_engineers_3" x1="10.0607" x2="14.3661" y1="13.665" y2="13.8124" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_engineers_3" x1="11.571" x2="21.4534" y1="17.1841" y2="22.3729" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_engineers_3" x1="15.5103" x2="23.7522" y1="9.07154" y2="9.74245" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_engineers_3">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        On-site photo updates
                      </p>
                    </div>
                  </div>

                  {/* Outcome Box */}
                  <div className="bg-[rgba(232,232,232,0.75)] rounded-[14px] p-4">
                    <div className="inline-flex items-center justify-center px-2 py-0.5 rounded-[70px] mb-2.5" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(232, 232, 232) 0%, rgb(232, 232, 232) 100%)' }}>
                      <span className="text-[13px] font-semibold text-[#16151a] leading-[22px]">
                        Outcome
                      </span>
                    </div>
                    <p className="text-sm text-[#262626] leading-[22px]">
                      Engineers execute work with clarity and alignment to plans, reduce rework, simplify daily coordination, and maintain accurate on-site updates without time-consuming manual reporting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="w-full lg:w-[352px] shrink-0 order-1 lg:order-2">
                <div className="rounded-[10px] overflow-hidden aspect-[352/469]">
                  <img 
                    src={imgFrame1984079031} 
                    alt="Site Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Safety Officers Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[20px] p-10 md:p-14 max-w-[1160px] mx-auto mt-12"
          >
            {/* Card Title */}
            <h3 className="text-[32px] md:text-[48px] font-semibold text-[#16151a] mb-12 leading-[1.1] tracking-[-1.44px]">
              For Safety <span className="text-[#f67011]">Officers</span>
            </h3>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left - Image */}
              <div className="w-full lg:w-[352px] shrink-0">
                <div className="rounded-[10px] overflow-hidden aspect-[352/469]">
                  <img 
                    src={imgFrame1984079032} 
                    alt="Safety Officer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="flex-1 flex flex-col gap-16 lg:gap-[100px]">
                {/* Description */}
                <div className="px-4">
                  <p className="text-[20px] md:text-[24px] font-medium text-[#6e6e73] leading-[34px] tracking-[-0.4px] max-w-[515px]">
                    Safety officers lack timely visibility into site risks, delayed incident reporting, and reliable safety documentation.
                  </p>
                </div>

                {/* Features and Outcome */}
                <div className="flex flex-col gap-9">
                  {/* Three Icon Features */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 px-4">
                    {/* Feature 1 - Instant issue reporting from site */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_safety_1)">
                            <path d="M11.375 11.375V22.75" stroke="url(#paint0_linear_safety_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M3.5 11.375H24.5" stroke="url(#paint1_linear_safety_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsSafety.p30a14e00} stroke="url(#paint2_linear_safety_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_safety_1" x1="11.393" x2="12.4674" y1="11.7774" y2="11.7864" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_safety_1" x1="3.87869" x2="8.34678" y1="11.4104" y2="20.4019" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_safety_1" x1="3.87869" x2="26.1467" y1="5.86901" y2="8.42969" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_safety_1">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Instant issue reporting from site
                      </p>
                    </div>

                    {/* Feature 2 - Time-stamped photo evidence */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_safety_2)">
                            <path d={svgPathsSafety.p3587c200} fill="url(#paint0_linear_safety_2)" />
                            <path d={svgPathsSafety.p38d42fb8} stroke="url(#paint1_linear_safety_2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsSafety.p15d278c0} stroke="url(#paint2_linear_safety_2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_safety_2" x1="12.3131" x2="16.0393" y1="7.12478" y2="7.48185" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_safety_2" x1="8.0959" x2="21.1847" y1="3.18211" y2="4.15765" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_safety_2" x1="3.03546" x2="25.5885" y1="17.2351" y2="23.7633" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_safety_2">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Time-stamped photo evidence
                      </p>
                    </div>

                    {/* Feature 3 - Centralized safety records */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_safety_3)">
                            <path d={svgPathsSafety.p33a57300} stroke="url(#paint0_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M14 3.50098L18.0119 14.7338" stroke="url(#paint1_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsSafety.p1ab8a180} stroke="url(#paint2_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsSafety.p208dc870} stroke="url(#paint3_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsSafety.p2ffb5fc0} stroke="url(#paint4_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsSafety.p3316cc00} stroke="url(#paint5_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M23.093 8.75L15.3711 17.8402" stroke="url(#paint6_linear_safety_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_safety_3" x1="3.87869" x2="26.2359" y1="4.24367" y2="6.38611" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_safety_3" x1="14.0723" x2="18.3777" y1="3.8983" y2="4.04566" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_safety_3" x1="5.11787" x2="15.0003" y1="8.82596" y2="14.0147" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_safety_3" x1="5.04553" x2="13.2873" y1="10.4819" y2="11.1528" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_safety_3" x1="10.0607" x2="14.3661" y1="13.665" y2="13.8124" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_safety_3" x1="11.571" x2="21.4534" y1="17.1841" y2="22.3729" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_safety_3" x1="15.5103" x2="23.7522" y1="9.07154" y2="9.74245" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_safety_3">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Centralized safety records
                      </p>
                    </div>
                  </div>

                  {/* Outcome Box */}
                  <div className="bg-[rgba(232,232,232,0.75)] rounded-[14px] p-4">
                    <div className="inline-flex items-center justify-center px-2 py-0.5 rounded-[70px] mb-2.5" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(232, 232, 232) 0%, rgb(232, 232, 232) 100%)' }}>
                      <span className="text-[13px] font-semibold text-[#16151a] leading-[22px]">
                        Outcome
                      </span>
                    </div>
                    <p className="text-sm text-[#262626] leading-[22px]">
                      Safety teams identify risks earlier, maintain reliable documentation, strengthen compliance, and improve overall site safety through real-time reporting and verifiable, centralized safety records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* For Contractors Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[20px] p-10 md:p-14 max-w-[1160px] mx-auto mt-12"
          >
            {/* Card Title */}
            <h3 className="text-[32px] md:text-[48px] font-semibold text-[#16151a] mb-12 leading-[1.1] tracking-[-1.44px]">
              For <span className="text-[#f67011]">Contractors</span>
            </h3>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Left - Content */}
              <div className="flex-1 flex flex-col gap-16 lg:gap-[100px] order-2 lg:order-1">
                {/* Description */}
                <div className="">
                  <p className="text-[20px] md:text-[24px] font-medium text-[#6e6e73] leading-[34px] tracking-[-0.4px] max-w-[515px]">
                    Contractors face labor disputes and payment issues due to missing work proof and fragmented site records.
                  </p>
                </div>

                {/* Features and Outcome */}
                <div className="flex flex-col gap-9">
                  {/* Three Icon Features */}
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-9">
                    {/* Feature 1 - Verified attendance by location */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_contractors_1)">
                            <path d="M11.375 11.375V22.75" stroke="url(#paint0_linear_contractors_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M3.5 11.375H24.5" stroke="url(#paint1_linear_contractors_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsContractors.p30a14e00} stroke="url(#paint2_linear_contractors_1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_contractors_1" x1="11.393" x2="12.4674" y1="11.7774" y2="11.7864" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_contractors_1" x1="3.87869" x2="8.34678" y1="11.4104" y2="20.4019" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_contractors_1" x1="3.87869" x2="26.1467" y1="5.86901" y2="8.42969" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_contractors_1">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Verified attendance by location
                      </p>
                    </div>

                    {/* Feature 2 - Photo-based proof of work */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_contractors_2)">
                            <path d={svgPathsContractors.p3587c200} fill="url(#paint0_linear_contractors_2)" />
                            <path d={svgPathsContractors.p38d42fb8} stroke="url(#paint1_linear_contractors_2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsContractors.p15d278c0} stroke="url(#paint2_linear_contractors_2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_contractors_2" x1="12.3131" x2="16.0393" y1="7.12478" y2="7.48185" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_contractors_2" x1="8.0959" x2="21.1847" y1="3.18211" y2="4.15765" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_contractors_2" x1="3.03546" x2="25.5885" y1="17.2351" y2="23.7633" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_contractors_2">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Photo-based proof of work
                      </p>
                    </div>

                    {/* Feature 3 - Centralized execution visibility */}
                    <div className="flex flex-col gap-3 min-w-[140px] flex-1">
                      <div className="bg-[#262626] rounded-[7.5px] w-11 h-11 flex items-center justify-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                          <g clipPath="url(#clip0_contractors_3)">
                            <path d={svgPathsContractors.p33a57300} stroke="url(#paint0_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M14 3.50098L18.0119 14.7338" stroke="url(#paint1_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsContractors.p1ab8a180} stroke="url(#paint2_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsContractors.p208dc870} stroke="url(#paint3_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsContractors.p2ffb5fc0} stroke="url(#paint4_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d={svgPathsContractors.p3316cc00} stroke="url(#paint5_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                            <path d="M23.093 8.75L15.3711 17.8402" stroke="url(#paint6_linear_contractors_3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
                          </g>
                          <defs>
                            <linearGradient id="paint0_linear_contractors_3" x1="3.87869" x2="26.2359" y1="4.24367" y2="6.38611" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_contractors_3" x1="14.0723" x2="18.3777" y1="3.8983" y2="4.04566" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_contractors_3" x1="5.11787" x2="15.0003" y1="8.82596" y2="14.0147" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_contractors_3" x1="5.04553" x2="13.2873" y1="10.4819" y2="11.1528" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_contractors_3" x1="10.0607" x2="14.3661" y1="13.665" y2="13.8124" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_contractors_3" x1="11.571" x2="21.4534" y1="17.1841" y2="22.3729" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_contractors_3" x1="15.5103" x2="23.7522" y1="9.07154" y2="9.74245" gradientUnits="userSpaceOnUse">
                              <stop stopColor="#F67011" />
                              <stop offset="1" stopColor="#FF9F2E" />
                            </linearGradient>
                            <clipPath id="clip0_contractors_3">
                              <rect fill="white" height="28" width="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-black leading-tight whitespace-nowrap sm:whitespace-normal">
                        Centralized execution visibility
                      </p>
                    </div>
                  </div>

                  {/* Outcome Box */}
                  <div className="bg-[rgba(232,232,232,0.75)] rounded-[14px] p-4">
                    <div className="inline-flex items-center justify-center px-2 py-0.5 rounded-[70px] mb-2.5" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(232, 232, 232) 0%, rgb(232, 232, 232) 100%)' }}>
                      <span className="text-[13px] font-semibold text-[#16151a] leading-[22px]">
                        Outcome
                      </span>
                    </div>
                    <p className="text-sm text-[#262626] leading-[22px]">
                      Contractors reduce disputes, ensure fair payments, improve trust with stakeholders, and gain stronger control over execution by relying on verified, transparent, and location-linked site data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Image */}
              <div className="w-full lg:w-[352px] shrink-0 order-1 lg:order-2">
                <div className="rounded-[10px] overflow-hidden aspect-[352/469]">
                  <img 
                    src={imgFrame1984079033} 
                    alt="Contractor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions that Scale Section */}
      <section className="bg-black py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 max-w-[633px] mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white mb-2.5 leading-[1.1]">
              Solutions that <span className="text-[#f67011]">scale</span> with your <span className="text-[#f67011]">company</span>
            </h2>
            <p className="text-base text-[#fbfbfb] leading-[22px]">
              Whether you're managing a few sites or large-scale operations, Constructefy delivers the right level of control as your organization grows.
            </p>
          </motion.div>

          {/* Tab Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center mb-12 md:mb-16"
          >
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[24px] p-1.5 flex md:inline-flex w-full md:w-auto flex-col md:flex-row gap-1.5 md:gap-0">
              <button
                onClick={() => setActiveTab('small')}
                className={`px-5 py-2.5 rounded-[24px] text-sm font-medium transition-all duration-300 w-full md:w-auto md:whitespace-nowrap ${
                  activeTab === 'small'
                    ? 'bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#16151a]'
                    : 'text-white'
                }`}
              >
                Small Contractors
              </button>
              <button
                onClick={() => setActiveTab('mid')}
                className={`px-5 py-2.5 rounded-[24px] text-sm font-medium transition-all duration-300 w-full md:w-auto md:whitespace-nowrap ${
                  activeTab === 'mid'
                    ? 'bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#16151a]'
                    : 'text-white'
                }`}
              >
                Mid-Size Builders
              </button>
              <button
                onClick={() => setActiveTab('large')}
                className={`px-5 py-2.5 rounded-[24px] text-sm font-medium transition-all duration-300 w-full md:w-auto md:whitespace-nowrap ${
                  activeTab === 'large'
                    ? 'bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#16151a]'
                    : 'text-white'
                }`}
              >
                Large Enterprises
              </button>
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-[1200px] mx-auto"
          >
            <div className="relative rounded-[16px] overflow-hidden h-[500px] md:h-[618px]">
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={imgScaleImage} 
                  alt="Construction Professional" 
                  className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                />
                <div 
                  className="absolute inset-0 rounded-[16px]"
                  style={{ 
                    backgroundImage: 'linear-gradient(90deg, rgb(25, 25, 25) 0%, rgba(25, 25, 25, 0) 100%)' 
                  }}
                />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex flex-col justify-between md:justify-between gap-8 md:gap-0 p-6 md:p-10">
                {/* Top Content */}
                <div className="max-w-[537px]">
                  <h3 className="text-3xl md:text-[48px] font-medium text-white mb-3 md:mb-4 leading-[1.1]">
                    {activeTab === 'small' && (
                      <>Small <span className="text-[#f67011]">Contractors</span></>
                    )}
                    {activeTab === 'mid' && (
                      <>Mid-Size <span className="text-[#f67011]">Builders</span></>
                    )}
                    {activeTab === 'large' && (
                      <>Large <span className="text-[#f67011]">Enterprises</span></>
                    )}
                  </h3>
                  <p className="text-sm md:text-base text-[#fbfbfb] leading-[20px] md:leading-[22px]">
                    {activeTab === 'small' && 
                      "Small contractors often manage sites through manual tracking and informal coordination, making it difficult to maintain consistent visibility and avoid disputes as daily work progresses."
                    }
                    {activeTab === 'mid' && 
                      "Mid-size builders juggle multiple projects simultaneously, requiring better coordination across teams, real-time progress tracking, and standardized workflows to maintain quality and meet deadlines."
                    }
                    {activeTab === 'large' && 
                      "Large enterprises need enterprise-grade controls, multi-project dashboards, advanced reporting, and seamless integration with existing systems to manage complex operations at scale."
                    }
                  </p>
                </div>

                {/* Bottom Content */}
                <div className="max-w-[640px]">
                  {/* Glass Card */}
                  <div className="backdrop-blur-[15px] bg-[rgba(19,21,21,0.3)] rounded-[16px] border border-[rgba(255,255,255,0.1)] shadow-[0px_10px_20px_0px_rgba(19,21,21,0.3)] p-4 mb-4 md:mb-5">
                    <p className="text-[14px] md:text-[15px] text-white leading-[22px] md:leading-[26px]">
                      {activeTab === 'small' && 
                        "At this stage, teams need a simple way to gain visibility without adding operational complexity. Constructefy enables quick project setup, effortless worker onboarding through QR codes, and basic attendance and proof capture—helping teams stay organized and reduce disputes from day one."
                      }
                      {activeTab === 'mid' && 
                        "Growing teams need scalable tools that don't slow them down. Constructefy provides role-based dashboards, automated reporting, photo-verified execution, and centralized documentation—enabling better coordination, faster issue resolution, and confident scaling without sacrificing control."
                      }
                      {activeTab === 'large' && 
                        "Enterprise operations demand proven reliability and deep visibility. Constructefy delivers advanced analytics, multi-site oversight, compliance tracking, API integrations, and dedicated support—empowering leadership with data-driven insights and execution confidence across the entire portfolio."
                      }
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button className="bg-white text-[#16151a] text-base font-medium px-[34px] py-4 rounded-[100px] hover:bg-[#f7f7f7] transition-colors w-full md:w-auto">
                    Start Free
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="bg-[#f7f7f7] py-12 md:py-16 lg:py-[70px] px-4 relative overflow-hidden">
        <div className="max-w-[953px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12 lg:mb-[64px] max-w-[739px] mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[56px] font-medium text-[#16151a] mb-2 md:mb-2.5 leading-[1.1]">
              You ask questions,<br />we <span className="text-[#f67011]">answer them</span>
            </h2>
            <p className="text-sm md:text-base text-[#262626] leading-[20px] md:leading-[22px]">
              Everything you need to know before bringing Constructefy to your site.
            </p>
          </motion.div>

          {/* Q&A List */}
          <div className="flex flex-col gap-10 md:gap-14">
            {/* Q&A 1 */}
            <div className="flex flex-col gap-4 w-full">
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="bg-[#f67011] text-black font-medium text-[16px] leading-[24px] px-[24px] py-[13px] rounded-[30px] max-w-[90%] md:max-w-[80%] inline-block shadow-sm">
                  Who is Constructefy for?
                </div>
              </motion.div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end items-start gap-2"
              >
                <div className="bg-[#e8e8e8] p-[24px] rounded-tl-[20px] rounded-tr-[6px] rounded-bl-[20px] rounded-br-[20px] text-[#16151a] text-[16px] leading-[22px] max-w-[480px] w-full shadow-sm border border-[#fbfbfb]">
                  Constructefy is designed for construction companies, contractors, developers, and EPCs who need better visibility, control, and proof across one or multiple sites.
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-[#16151a] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
                  <div className="w-[30px] h-[29px] relative">
                    <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
                      <path d={svgPathsLogo.p15c64480} fill="#F67011" />
                      <path d={svgPathsLogo.p2f7b4f00} fill="#14CB49" />
                      <path d={svgPathsLogo.p3d7e6500} fill="#FF9F2E" />
                      <path d={svgPathsLogo.p147b1c80} fill="#F84241" />
                      <path d={svgPathsLogo.p2ebded80} fill="#178FFF" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Q&A 2 */}
            <div className="flex flex-col gap-4 w-full">
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="bg-[#f67011] text-black font-medium text-[16px] leading-[24px] px-[24px] py-[13px] rounded-[30px] max-w-[90%] md:max-w-[80%] inline-block shadow-sm">
                  Is worker training required?
                </div>
              </motion.div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end items-start gap-2"
              >
                <div className="bg-[#e8e8e8] p-[24px] rounded-tl-[20px] rounded-tr-[6px] rounded-bl-[20px] rounded-br-[20px] text-[#16151a] text-[16px] leading-[22px] max-w-[480px] w-full shadow-sm border border-[#fbfbfb]">
                  No formal training is needed. The worker app is simple, intuitive, and built for quick on-site adoption with minimal guidance.
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-[#16151a] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
                  <div className="w-[30px] h-[29px] relative">
                    <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
                      <path d={svgPathsLogo.p15c64480} fill="#F67011" />
                      <path d={svgPathsLogo.p2f7b4f00} fill="#14CB49" />
                      <path d={svgPathsLogo.p3d7e6500} fill="#FF9F2E" />
                      <path d={svgPathsLogo.p147b1c80} fill="#F84241" />
                      <path d={svgPathsLogo.p2ebded80} fill="#178FFF" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Q&A 3 */}
            <div className="flex flex-col gap-4 w-full">
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="bg-[#f67011] text-black font-medium text-[16px] leading-[24px] px-[24px] py-[13px] rounded-[30px] max-w-[90%] md:max-w-[80%] inline-block shadow-sm">
                  What features does Constructefy offer?
                </div>
              </motion.div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end items-start gap-2"
              >
                <div className="bg-[#e8e8e8] p-[24px] rounded-tl-[20px] rounded-tr-[6px] rounded-bl-[20px] rounded-br-[20px] text-[#16151a] text-[16px] leading-[22px] max-w-[480px] w-full shadow-sm border border-[#fbfbfb]">
                  Constructefy includes real-time reporting, project tracking, resource management, and compliance checks to streamline construction operations.
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-[#16151a] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
                  <div className="w-[30px] h-[29px] relative">
                    <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
                      <path d={svgPathsLogo.p15c64480} fill="#F67011" />
                      <path d={svgPathsLogo.p2f7b4f00} fill="#14CB49" />
                      <path d={svgPathsLogo.p3d7e6500} fill="#FF9F2E" />
                      <path d={svgPathsLogo.p147b1c80} fill="#F84241" />
                      <path d={svgPathsLogo.p2ebded80} fill="#178FFF" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Q&A 4 */}
            <div className="flex flex-col gap-4 w-full">
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="bg-[#f67011] text-black font-medium text-[16px] leading-[24px] px-[24px] py-[13px] rounded-[30px] max-w-[90%] md:max-w-[80%] inline-block shadow-sm">
                  How does Constructefy ensure data security?
                </div>
              </motion.div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end items-start gap-2"
              >
                <div className="bg-[#e8e8e8] p-[24px] rounded-tl-[20px] rounded-tr-[6px] rounded-bl-[20px] rounded-br-[20px] text-[#16151a] text-[16px] leading-[22px] max-w-[480px] w-full shadow-sm border border-[#fbfbfb]">
                  Constructefy employs encryption, regular security audits, and user access controls to safeguard project data.
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-[#16151a] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
                  <div className="w-[30px] h-[29px] relative">
                    <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
                      <path d={svgPathsLogo.p15c64480} fill="#F67011" />
                      <path d={svgPathsLogo.p811dc00} fill="#14CB49" />
                      <path d={svgPathsLogo.p80eb180} fill="#FF9F2E" />
                      <path d={svgPathsLogo.p147b1c80} fill="#F84241" />
                      <path d={svgPathsLogo.p2ebded80} fill="#178FFF" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Q&A 5 */}
            <div className="flex flex-col gap-4 w-full">
              {/* Question */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="bg-[#f67011] text-black font-medium text-[16px] leading-[24px] px-[24px] py-[13px] rounded-[30px] max-w-[90%] md:max-w-[80%] inline-block shadow-sm">
                  Can Constructefy integrate with other software?
                </div>
              </motion.div>

              {/* Answer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end items-start gap-2"
              >
                <div className="bg-[#e8e8e8] p-[24px] rounded-tl-[20px] rounded-tr-[6px] rounded-bl-[20px] rounded-br-[20px] text-[#16151a] text-[16px] leading-[22px] max-w-[480px] w-full shadow-sm border border-[#fbfbfb]">
                  Yes, Constructefy can seamlessly integrate with various project management and accounting software to enhance workflow and data consistency.
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-[#16151a] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
                  <div className="w-[30px] h-[29px] relative">
                    <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
                      <path d={svgPathsLogo.p15c64480} fill="#F67011" />
                      <path d={svgPathsLogo.p811dc00} fill="#14CB49" />
                      <path d={svgPathsLogo.p80eb180} fill="#FF9F2E" />
                      <path d={svgPathsLogo.p147b1c80} fill="#F84241" />
                      <path d={svgPathsLogo.p2ebded80} fill="#178FFF" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
