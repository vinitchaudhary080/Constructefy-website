import { HeroText } from "../components/HeroText";
import { Widgets } from "../components/Widgets";
import { FeatureSection } from "../components/FeatureSection";
import { ManagerSection } from "../components/ManagerSection";
import { WorkerSection } from "../components/WorkerSection";
import { PlatformSection } from "../components/PlatformSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import imgBgImage from "@/app/assets/ceaab6cd6d150b3d9d543f8e74d34447f7edc7af.png";
import frameSvgPaths from "../../imports/svg-ftrr29x6up";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Background Image & Overlay scoped to Hero */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src={imgBgImage} 
            alt="Construction site background" 
            className="absolute w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-[#131515]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131515]/90 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131515] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col flex-1">
          <main className="flex-1 flex flex-col items-center justify-start pt-16 md:pt-24 px-4 pb-32">
            <HeroText />
            <Widgets />
          </main>
        </div>

        {/* Bottom Curve SVG Integration */}
        <div className="absolute w-full left-0 bottom-0 z-20 pointer-events-none overflow-hidden">
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
            <svg 
              className="absolute bottom-0 left-0 w-full h-full" 
              fill="none" 
              preserveAspectRatio="none" 
              viewBox="0 0 1680 463.75"
            >
              <path d={frameSvgPaths.p1aa41700} fill="#F7F7F7" />
            </svg>
          </div>
        </div>
      </div>

      <FeatureSection />
      <ManagerSection />
      <WorkerSection />
      <PlatformSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
