import { motion } from "motion/react";
import { CentralPhone } from "./CentralPhone";
import { FloatingCards } from "./FloatingCards";

export function FeatureSection() {
  return (
    <section className="bg-[#F7F7F7] w-full pt-12 pb-32 px-4 relative z-10 font-['DM_Sans']">
      <div className="max-w-4xl mx-auto text-center space-y-24">
        {/* Top Text Block */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-[48px] leading-tight font-medium text-[#131515] tracking-tight"
        >
          Construction companies operate with limited site visibility—uncertain labor allocation, disputed hours, missing proof, plan-execution gaps, and unmanaged operational risk.
        </motion.h2>

        {/* Middle Text Block */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#f67011] tracking-tight drop-shadow-sm"
            style={{ textShadow: "0px 2px 10px rgba(191,57,0,0.3)" }}
          >
            Introducing Constructefy
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-[#1a1a1a] leading-relaxed max-w-2xl mx-auto"
          >
            Constructefy gives construction companies a single source of truth for on-site execution. Plans, workforce activity, and on-ground proof come together in real time—so decisions are based on facts, not assumptions.
          </motion.p>
        </div>
      </div>

      {/* Complex Graphic Section */}
      <div className="relative max-w-6xl mx-auto mt-20 lg:mt-32 h-[800px] flex justify-center items-center">
        {/* Orange glowing background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[600px] bg-gradient-to-r from-[#f67011] to-[#ff9f2e] blur-[80px] rounded-[100%] opacity-60 mix-blend-multiply pointer-events-none" />

        <CentralPhone />
        <FloatingCards />
      </div>
    </section>
  );
}
