import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { CentralPhone } from "./CentralPhone";
import imgLeftOne from "@/app/assets/left-1.png";
import imgLeftTwo from "@/app/assets/left-2.png";
import imgRightOne from "@/app/assets/right-1.png";
import imgRightTwo from "@/app/assets/right-2.png";

type ScreenItem = {
  alt: string;
  imageSrc?: string;
  key: string;
};

const platformScreens: ScreenItem[] = [
  { key: "left-2", imageSrc: imgLeftTwo, alt: "Left platform screen 2" },
  { key: "left-1", imageSrc: imgLeftOne, alt: "Left platform screen 1" },
  { key: "center-default", alt: "Main platform screen" },
  { key: "right-1", imageSrc: imgRightOne, alt: "Right platform screen 1" },
  { key: "right-2", imageSrc: imgRightTwo, alt: "Right platform screen 2" },
];

function wrapIndex(index: number) {
  return (index + platformScreens.length) % platformScreens.length;
}

function SidePhonePreview({
  imageSrc,
  alt,
  className,
}: {
  alt: string;
  className?: string;
  imageSrc?: string;
}) {
  return (
    <motion.div
      layout
      className={`hidden md:flex w-[260px] h-[564px] bg-[#16151a] rounded-[20px] flex-col overflow-hidden shadow-[0px_20px_40px_rgba(0,0,0,0.4)] shrink-0 border border-white/10 ${className ?? ""}`}
    >
      <div className="h-7 w-full flex justify-center items-end pb-1 bg-[#16151a]">
        <div className="w-[80px] h-[20px] bg-black rounded-full" />
      </div>
      <div className="relative flex-1 overflow-hidden bg-[#111]">
        {imageSrc ? (
          <img src={imageSrc} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center px-8 text-center text-sm leading-6 text-white/65">
            Current main platform screen
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function PlatformSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const leftFar = platformScreens[wrapIndex(activeIndex - 2)];
  const leftNear = platformScreens[wrapIndex(activeIndex - 1)];
  const center = platformScreens[activeIndex];
  const rightNear = platformScreens[wrapIndex(activeIndex + 1)];
  const rightFar = platformScreens[wrapIndex(activeIndex + 2)];

  return (
    <section className="bg-[#131515] w-full pt-20 pb-32 relative z-10 font-['DM_Sans'] overflow-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 items-center text-center max-w-3xl px-4 z-20"
      >
        <h2 className="text-[36px] leading-[1.1] md:text-5xl lg:text-[56px] font-medium tracking-tight text-[#fbfbfb] max-w-5xl">
          Everything you need to run your site
          <span className="text-[#f67011]">—one platform</span>
        </h2>
        <p className="text-[#fbfbfb] text-[16px] leading-[22px] max-w-2xl text-center">
          Constructefy brings planning, workforce management, execution tracking, and on-site proof together, giving teams complete visibility and control from a single system.
        </p>
      </motion.div>

      <div className="relative w-full max-w-[1400px] h-auto min-h-[600px] mt-16 md:mt-24 flex justify-center items-center gap-6 xl:gap-8 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#f67011]/50 blur-[100px] rounded-full z-0 pointer-events-none mix-blend-color-dodge" />

        <SidePhonePreview
          imageSrc={leftFar.imageSrc}
          alt={leftFar.alt}
          className="hidden xl:flex z-10 scale-[0.85] origin-right"
        />

        <SidePhonePreview
          imageSrc={leftNear.imageSrc}
          alt={leftNear.alt}
          className="z-20 scale-95"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-30 flex items-center justify-center shrink-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={center.key}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <CentralPhone screenImageSrc={center.imageSrc} screenAlt={center.alt} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <SidePhonePreview
          imageSrc={rightNear.imageSrc}
          alt={rightNear.alt}
          className="z-20 scale-95"
        />

        <SidePhonePreview
          imageSrc={rightFar.imageSrc}
          alt={rightFar.alt}
          className="hidden xl:flex z-10 scale-[0.85] origin-left"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-24 flex flex-col items-center z-20 w-full px-4 text-center gap-12"
      >
        <div className="w-[56px] h-[56px] rounded-[14px] bg-[#16151a] border border-white/10 flex items-center justify-center shadow-lg relative">
          <div className="w-8 h-8 relative flex flex-col items-center justify-center gap-[2px]">
            <div className="w-[18px] h-[6px] bg-[#F67011] rounded-sm transform skew-x-[-20deg]" />
            <div className="w-[20px] h-[6px] bg-[#14CB49] rounded-sm transform skew-x-[-20deg]" />
            <div className="w-[22px] h-[6px] bg-[#178FFF] rounded-sm transform skew-x-[-20deg]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-16 w-full max-w-[800px]">
          <button
            type="button"
            aria-label="Show left screen in the center phone"
            onClick={() => setActiveIndex((current) => wrapIndex(current - 1))}
            className="w-12 h-12 rounded-full bg-[#262626] border border-white/5 flex shrink-0 items-center justify-center hover:bg-[#333] transition-colors shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          <p className="text-[#fbfbfb] text-[16px] leading-[22px] max-w-[530px]">
            Assign, monitor, and manage work linked directly to plans and locations to ensure clear execution and accountability on site.
          </p>

          <button
            type="button"
            aria-label="Show right screen in the center phone"
            onClick={() => setActiveIndex((current) => wrapIndex(current + 1))}
            className="w-12 h-12 rounded-full bg-[#262626] border border-white/5 flex shrink-0 items-center justify-center hover:bg-[#333] transition-colors shadow-lg"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <button className="mt-4 px-[34px] py-[16px] rounded-[100px] bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[#131515] font-medium text-[16px] shadow-lg hover:opacity-90 transition-opacity">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
