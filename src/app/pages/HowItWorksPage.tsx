import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { HowItWorksSection } from "../components/HowItWorksSection";

export default function HowItWorksPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black bg-[#000000]">
        {/* Text Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-5 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight"
            style={{ lineHeight: '1.1' }}
          >
            From site activity to management control
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-white/90 max-w-lg mx-auto leading-relaxed"
          >
            Constructefy is designed for construction companies that need reliable visibility, verified execution, and confident decision-making across sites—without operational disruption.
          </motion.p>
        </div>

        {/* Three Phone Mockups */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="relative flex items-center justify-center gap-4 md:gap-8 lg:gap-12 -mb-32 md:-mb-40 lg:-mb-48 z-10">
            {/* Left Phone - Timer */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="bg-gradient-to-b from-[#131515]/30 to-[#131515]/80 rounded-2xl p-10 shadow-[0_0_0_6px_rgba(255,255,255,0.1)] backdrop-blur-sm border border-white/20 w-[200px] lg:w-[228px]">
                {/* Timer Circle */}
                <div className="relative w-full aspect-square mb-4">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 164 164">
                    <circle cx="82" cy="82" r="70" fill="#2C2C2C" />
                    <circle cx="82" cy="82" r="70" fill="none" stroke="#878787" strokeWidth="8" />
                    <circle 
                      cx="82" 
                      cy="82" 
                      r="70" 
                      fill="none" 
                      stroke="#F88D41" 
                      strokeWidth="8"
                      strokeDasharray="440"
                      strokeDashoffset="110"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold">30:00</p>
                    </div>
                  </div>
                </div>
                {/* Resume Button */}
                <div className="bg-white rounded-full px-4 py-2.5 flex items-center justify-center gap-2 mx-auto w-fit">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 2L11 7L3 12V2Z" stroke="#16151A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#16151a] text-xs font-medium">Resume</span>
                </div>
              </div>
            </motion.div>

            {/* Center Phone - Project List */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-[30px] border border-white/20 shadow-[0_0_0_6px_rgba(255,255,255,0.1)] overflow-hidden w-[280px] md:w-[320px] lg:w-[348px]">
                {/* Phone Status Bar */}
                <div className="flex items-center justify-between px-6 py-3 text-white text-xs">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="w-1 h-2.5 bg-white rounded-sm" />
                      <div className="w-1 h-3 bg-white rounded-sm" />
                      <div className="w-1 h-3.5 bg-white rounded-sm" />
                      <div className="w-1 h-4 bg-white rounded-sm" />
                    </div>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="white" className="ml-1">
                      <path d="M0 5.5C2.5 2 5 0.5 7.5 0.5C10 0.5 12.5 2 15 5.5C12.5 9 10 10.5 7.5 10.5C5 10.5 2.5 9 0 5.5Z" />
                    </svg>
                    <div className="w-6 h-3 bg-white/35 border border-white rounded-sm ml-1" />
                  </div>
                </div>

                {/* App Header */}
                <div className="px-4 py-2 flex items-center justify-between backdrop-blur-sm">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M4 7H20M4 12H20M4 17H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-sm bg-gradient-to-br from-red-500 via-orange-500 to-blue-500" />
                    <span className="text-white text-sm font-bold">Stack</span>
                  </div>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <circle cx="6" cy="6" r="1.5" fill="white" />
                    <circle cx="12.5" cy="6" r="1.5" fill="white" />
                    <circle cx="19" cy="6" r="1.5" fill="white" />
                    <circle cx="6" cy="12.5" r="1.5" fill="white" />
                    <circle cx="12.5" cy="12.5" r="1.5" fill="white" />
                    <circle cx="19" cy="12.5" r="1.5" fill="white" />
                    <circle cx="6" cy="19" r="1.5" fill="white" />
                    <circle cx="12.5" cy="19" r="1.5" fill="white" />
                    <circle cx="19" cy="19" r="1.5" fill="white" />
                  </svg>
                </div>

                {/* Search Bar */}
                <div className="px-4 py-4">
                  <div className="bg-[#262626]/50 rounded-lg px-3 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="8" cy="8" r="5.5" stroke="#878787" strokeWidth="1.5" />
                        <path d="M12 12L16 16" stroke="#878787" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[#878787] text-sm">Search</span>
                    </div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 4V14M9 14C9 14 7 12 7 10M9 14C9 14 11 12 11 10" stroke="#878787" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="px-4 flex items-center gap-2 mb-4">
                  <div className="bg-[#f67011] px-4 py-1.5 rounded-full border border-[#f67011]">
                    <span className="text-white text-xs font-medium">All</span>
                  </div>
                  <div className="px-4 py-1.5">
                    <span className="text-white text-xs">Residential</span>
                  </div>
                </div>

                {/* Project Cards */}
                <div className="px-4 space-y-3 pb-6">
                  <div className="bg-[#262626]/40 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-white text-sm font-semibold">Aventura ParkSquare</p>
                        <p className="text-white/70 text-xs">Aventura, FL</p>
                      </div>
                      <div className="bg-[#14cb49]/20 px-2 py-1 rounded-full">
                        <span className="text-[#14cb49] text-xs font-medium">Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span>Role: <span className="text-white font-medium">Facade Installer</span></span>
                      <span className="text-[#ff9f2e] font-semibold">68% <span className="text-white font-normal">complete</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Phone - Issue Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20 shadow-[0_0_0_6px_rgba(255,255,255,0.1)] p-4 w-[280px] lg:w-[302px]">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white text-sm font-semibold">Misaligned Subframing</p>
                      <p className="text-white/60 text-xs">North Elevation · Level 2</p>
                    </div>
                    <div className="bg-[#f84241] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#f84241]">
                      <div className="w-1 h-1 bg-white rounded-full" />
                      <span className="text-white text-[10px] font-medium">Open</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Reported by you</span>
                    <span>Today 10:24 AM</span>
                  </div>
                  <button 
                    className="w-full bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#16151a] text-xs font-bold py-2.5 rounded-lg"
                  >
                    View Issue
                  </button>
                </div>
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

      {/* How It Works Main Section */}
      <HowItWorksSection />

      {/* Pricing Cards Section */}
      <section className="bg-white py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#16151a] mb-4 leading-[1.1]">
              Workers are always free. Companies pay for visibility.
            </h2>
            <p className="text-base text-[#262626] leading-relaxed max-w-3xl mx-auto">
              Constructefy fits into your existing construction workflow by connecting project plans, workforce activity, and on-site proof in a single system—without disrupting how teams work on the ground.
            </p>
          </motion.div>

          {/* Monthly/Annual Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="relative bg-black/10 rounded-3xl p-1 w-[250px] h-12">
              <div className="absolute inset-1 flex items-center justify-between">
                <button 
                  onClick={() => setBillingPeriod('monthly')}
                  className={`flex-1 text-sm font-medium z-10 transition-colors ${
                    billingPeriod === 'monthly' ? 'text-white' : 'text-[#16151a]'
                  }`}
                >
                  Monthly
                </button>
                <button 
                  onClick={() => setBillingPeriod('annual')}
                  className={`flex-1 text-sm font-medium z-10 relative transition-colors ${
                    billingPeriod === 'annual' ? 'text-white' : 'text-[#16151a]'
                  }`}
                >
                  Annual
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                    Save 20%
                  </span>
                </button>
              </div>
              <motion.div 
                className="absolute top-1 bottom-1 w-[93px] bg-black rounded-3xl shadow-sm"
                animate={{
                  left: billingPeriod === 'monthly' ? '4px' : 'auto',
                  right: billingPeriod === 'annual' ? '4px' : 'auto',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>
          </motion.div>

          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[20px] p-6"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className="text-[32px] font-medium text-black mb-2.5 tracking-tight">
                      Starter
                    </h3>
                    <p className="text-[28px] font-medium text-[#f67011] mb-5">
                      $0/month
                    </p>
                    <p className="text-base text-black/50 leading-relaxed">
                      For teams getting started with basic site visibility and workforce tracking across a small number of projects.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/10 my-10" />

                  {/* Features */}
                  <div className="space-y-2">
                    {[
                      'Up to 2 projects',
                      'Up to 10 workers',
                      'Worker app access (always free)',
                      'QR-based workforce onboarding',
                      'Attendance tracking',
                      'Photo-based proof of work',
                      'Project performance analytics',
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#f67011] to-[#ff9f2e] shrink-0" />
                        <span className="text-base text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-12 w-full bg-black text-white py-3 rounded-3xl text-base font-medium hover:bg-black/90 transition-colors shadow-sm">
                  Start Free
                </button>
              </div>
            </motion.div>

            {/* Growth Plan - Most Popular */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1a1a1a] rounded-[20px] p-6 relative"
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-3 right-8 bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-black text-[10px] font-bold px-2 py-1.5 rounded-full uppercase">
                Most Popular
              </div>

              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className="text-[32px] font-medium text-white mb-2.5 tracking-tight">
                      Growth
                    </h3>
                    <p className="text-[28px] font-medium text-[#f67011] mb-5">
                      {billingPeriod === 'monthly' ? '$99' : '$79'}/month
                    </p>
                    <p className="text-base text-white/50 leading-relaxed">
                      For growing teams looking for advanced tracking and reporting capabilities.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 my-10" />

                  {/* Features */}
                  <div className="space-y-2">
                    {[
                      'Up to 15 projects',
                      'Unlimited workers',
                      'Worker app access',
                      'QR-based workforce onboarding',
                      'Attendance tracking',
                      'Photo-based proof of work',
                      'Project performance analytics',
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#f67011] to-[#ff9f2e] shrink-0" />
                        <span className="text-base text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-12 w-full bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-white py-3 rounded-3xl text-base font-medium hover:opacity-90 transition-opacity shadow-sm">
                  Start Free
                </button>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[20px] p-6"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-5">
                    <h3 className="text-[32px] font-medium text-black mb-2.5 tracking-tight">
                      Pro
                    </h3>
                    <p className="text-[28px] font-medium text-[#f67011] mb-5">
                      {billingPeriod === 'monthly' ? '$249' : '$199'}/month
                    </p>
                    <p className="text-base text-black/50 leading-relaxed">
                      For larger organizations needing premium features and custom solutions.
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/10 my-10" />

                  {/* Features */}
                  <div className="space-y-2">
                    {[
                      'Unlimited projects',
                      'Unlimited workers',
                      'Worker app access',
                      'QR-based workforce onboarding',
                      'Attendance tracking',
                      'Photo-based proof of work',
                      'Project performance analytics',
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-sm bg-gradient-to-r from-[#f67011] to-[#ff9f2e] shrink-0" />
                        <span className="text-base text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="mt-12 w-full bg-black text-white py-3 rounded-3xl text-base font-medium hover:bg-black/90 transition-colors shadow-sm">
                  Start Free
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}