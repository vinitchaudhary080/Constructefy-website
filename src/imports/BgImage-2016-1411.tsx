import clsx from "clsx";
import svgPaths from "./svg-zmljzv2qxi";
import img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg from "@/app/assets/22d6b9a811fa2c3f805232b3db83c8032c3f3ddf.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen from "@/app/assets/250ca5d7cd23297d78b8fe541debed57de2f6b57.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant from "@/app/assets/5e71b09f32ba146171f61bf46b72c3e8f11ca6c7.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant1 from "@/app/assets/3c1e67f2a936fc5f3e51d1f99a9e7509a6125092.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant2 from "@/app/assets/36d72b48a9b7d2489ee29070ffe648a78f395b53.png";

function ListitemLink({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[rgba(251,250,250,0.15)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[16px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between p-[16px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fbfbfb] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="bg-[#878787] h-[20px] rounded-[4px] shrink-0 w-px" data-name="Vertical Divider" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fbfbfb] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}
type OverlayTextProps = {
  text: string;
};

function OverlayText({ text }: OverlayTextProps) {
  return (
    <div className="bg-[rgba(255,183,128,0.1)] content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[1000px] shrink-0">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffb780] text-[11px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16.5px]">{text}</p>
      </div>
    </div>
  );
}
type ConstructefyVector1Props = {
  additionalClassNames?: string;
};

function ConstructefyVector1({ additionalClassNames = "" }: ConstructefyVector1Props) {
  return (
    <div className={clsx("absolute h-[12.194px] top-[29.7px] w-[10.726px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7262 12.1942">
        <path d={svgPaths.p2e653180} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}
type ConstructefyVectorProps = {
  additionalClassNames?: string;
};

function ConstructefyVector({ additionalClassNames = "" }: ConstructefyVectorProps) {
  return (
    <div className={clsx("absolute h-[16.126px] top-[25.55px] w-[8.829px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.82888 16.126">
        <path d={svgPaths.pe470f0} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="mynaui:chevron-down">
            <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function BgImage() {
  return (
    <div className="bg-black relative size-full" data-name="BG Image">
      <div className="absolute aspect-[1440/464] blur-[12.5px] bottom-[-261px] left-0 right-0" data-name="Frame">
        <div className="absolute inset-[0_-8.33%_0.05%_-8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 463.75">
            <path d={svgPaths.p1aa41700} fill="var(--fill-0, #F7F7F7)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex gap-[20px] items-center left-1/2 opacity-70 top-[26px]">
        <Text text="Product" />
        <Text text="Solutions" />
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Why Constructefy
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Resources
        </p>
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contact
        </p>
      </div>
      <div className="absolute contents left-[120px] top-[19px]">
        <div className="absolute h-[32px] left-[120px] overflow-clip top-[19px] w-[33.196px]" data-name="assets 3 1">
          <div className="absolute inset-[-0.01%_0_-0.67%_0.02%]" data-name="Layer 1">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.1896 32.2145">
              <g id="Layer 1">
                <path d={svgPaths.p1ad9ff80} fill="var(--fill-0, #F67011)" id="Vector" />
                <path d={svgPaths.p372c4800} fill="var(--fill-0, #14CB49)" id="Vector_2" />
                <path d={svgPaths.p3357f000} fill="var(--fill-0, #FF9F2E)" id="Vector_3" />
                <path d={svgPaths.p2060b940} fill="var(--fill-0, #F84241)" id="Vector_4" />
                <g id="Vector_5">
                  <path d={svgPaths.p36c5c880} fill="var(--fill-0, #178FFF)" />
                  <path d={svgPaths.p36c5c880} fill="var(--fill-1, black)" fillOpacity="0.2" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute contents left-[164.09px] top-[24.45px]" data-name="constructefy">
          <div className="absolute h-[15.954px] left-[285.36px] top-[30.14px] w-[10.338px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3381 15.9537">
              <path d={svgPaths.p3f27d300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute h-[17.225px] left-[276.21px] top-[24.45px] w-[8.807px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.80732 17.2248">
              <path d={svgPaths.p1b498100} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute h-[12.194px] left-[264.63px] top-[29.7px] w-[10.726px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7262 12.1942">
              <path d={svgPaths.p2c8c600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <ConstructefyVector additionalClassNames="left-[254.76px]" />
          <ConstructefyVector1 additionalClassNames="left-[243.4px]" />
          <div className="absolute h-[11.753px] left-[231.46px] top-[30.14px] w-[10.317px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3165 11.7525">
              <path d={svgPaths.p34a9c780} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute h-[11.537px] left-[222.55px] top-[30.14px] w-[7.772px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.77244 11.5371">
              <path d={svgPaths.p3a243e00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <ConstructefyVector additionalClassNames="left-[212.06px]" />
          <div className="absolute h-[11.516px] left-[200.91px] top-[30.16px] w-[10.392px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.392 11.5155">
              <path d={svgPaths.p3a747300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute h-[11.763px] left-[188.88px] top-[29.91px] w-[10.317px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3165 11.7633">
              <path d={svgPaths.pc58fd80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute h-[12.194px] left-[175.46px] top-[29.7px] w-[11.793px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7934 12.1942">
              <path d={svgPaths.p2013e000} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <ConstructefyVector1 additionalClassNames="left-[164.09px]" />
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[20px] items-center left-[1058px] top-[15px]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] opacity-70 relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Book a demo
        </p>
        <div className="bg-white content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="Link - Primary">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[21px]">Buy Constructefy</p>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.15)] h-px left-1/2 top-[69px] w-[1200px]" data-name="Divider" />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[27px] items-start left-1/2 top-[476px] w-[1200px]">
        <div className="bg-[rgba(251,250,250,0.15)] h-[337px] relative rounded-[20px] shrink-0 w-full" data-name="Frame">
          <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[447px] top-[32px] w-[553.76px]">
            <OverlayText text="FEATURED" />
            <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[14px] items-start leading-[0] relative shrink-0 w-full">
              <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-white tracking-[-0.4px] w-[523.86px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[40px]">Why construction sites still run on assumptions</p>
              </div>
              <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#fbfbfb] text-[15.5px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[21.6px]">Most delays and disputes don’t start on site—they start with missing visibility. Learn why traditional tracking fails and how real-time execution data changes outcomes.</p>
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[11px] items-center left-[447px] top-[281px]">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="66bbc3a4a97d06e4b8c0f371_adam-profile%20(1).jpg">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg} />
                </div>
              </div>
              <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14.9px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[normal]">Adam Guild</p>
              </div>
            </div>
            <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fbfbfb] text-[15px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[normal]">15 min read</p>
            </div>
            <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fbfbfb] text-[15px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[normal]">June 6, 2025</p>
            </div>
          </div>
          <div className="absolute h-[309px] left-[14px] rounded-[12px] top-[14px] w-[402px]" data-name="A man and woman sitting in a restaurant looking at a computer screen.">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
              <img alt="" className="absolute h-full left-[-7.55%] max-w-none top-0 w-[115.11%]" src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[24px] h-[204px] items-center relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <ListitemLink>
              <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-[216.39px]">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[199.76px]">
                  <OverlayText text="Workforce Management" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    From plans to proof: closing the execution gap on site
                  </p>
                </div>
                <Helper text="22 min read" text1="May 6, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[90px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant} />
              </div>
            </ListitemLink>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <ListitemLink>
              <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-[216.39px]">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="Supply Chain Optimization" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Navigating disruptions and building resilience in logistics
                  </p>
                </div>
                <Helper text="18 min read" text1="June 15, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[90px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant1} />
              </div>
            </ListitemLink>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <ListitemLink>
              <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-[216.39px]">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="Digital Transformation" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[20px] text-white tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Harnessing technology to drive innovation and efficiency
                  </p>
                </div>
                <Helper text="25 min read" text1="July 20, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[90px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant2} />
              </div>
            </ListitemLink>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[20px] items-center leading-[0] left-[316px] text-center text-white top-[174px] w-[808px]">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center min-w-full relative shrink-0 text-[72px] tracking-[-1px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[80px]">Insights for modern construction operations</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-[764px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">Perspectives on site visibility, workforce execution, and data-driven decision-making—written for construction companies managing real projects at scale.</p>
        </div>
      </div>
    </div>
  );
}