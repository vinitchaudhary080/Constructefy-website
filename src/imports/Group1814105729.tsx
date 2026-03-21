import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen from "@/app/assets/3dc26e0761f6c1cdd90536a3f604f094b44d047b.png";
import img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg from "@/app/assets/22d6b9a811fa2c3f805232b3db83c8032c3f3ddf.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant from "@/app/assets/49f15cde739d19694982e693d9c49a559033647f.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant1 from "@/app/assets/008e43af9219be3f514432345e19ad2cc5d883cd.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant2 from "@/app/assets/a85399cb68bca179b4d434607e523a7cb44e46fb.png";

function ListitemLink({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[220px] relative rounded-[16px] shrink-0 w-full">
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
    <div className="bg-[rgba(253,226,207,0.5)] content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[1000px] shrink-0">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#cf5f10] text-[11px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16.5px]">{text}</p>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-0 left-0 top-0 w-[1199.754px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1199.75 1">
            <line id="Line 32" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="1199.75" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[26px] items-start left-0 top-[64px] w-[1199.754px]">
        <div className="content-stretch flex flex-col font-medium gap-[16px] items-start leading-[0] relative shrink-0 w-[274.754px]">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#181f1f] text-[32px] tracking-[-0.4px] w-[228.73px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[38.4px]">Safety Protocols</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[#6c6f75] text-[15px] tracking-[-0.3px] w-[min-content]">
            <p className="leading-[21.75px]">Understand the essential safety measures to protect workers and ensure compliance.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <div className="bg-white content-stretch flex flex-col gap-[31px] h-[692px] items-start p-[20px] relative rounded-[20px] shrink-0 w-[495px]" data-name="Frame">
            <div className="h-[346px] relative rounded-[12px] shrink-0 w-full" data-name="A man and woman sitting in a restaurant looking at a computer screen.">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen} />
            </div>
            <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                <OverlayText text="SAFETY" />
                <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[14px] items-start relative shrink-0 w-full">
                  <p className="leading-[normal] relative shrink-0 text-[#16151a] text-[26px] tracking-[-0.4px] w-[523.86px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    The importance of safety training on construction sites
                  </p>
                  <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#262626] text-[15.5px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[21.6px]">Training is key to reducing accidents. Discover the latest in safety training methods and how they transform site culture.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="66bbc3a4a97d06e4b8c0f371_adam-profile%20(1).jpg">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                      <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg} />
                    </div>
                  </div>
                  <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16151a] text-[14.9px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[normal]">Lisa Carr</p>
                  </div>
                </div>
                <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[normal]">18 min read</p>
                </div>
                <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[normal]">May 22, 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[384px]">
            <ListitemLink>
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="TECHNOLOGY" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[#16151a] text-[20px] tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Leveraging AI for predictive maintenance
                  </p>
                </div>
                <Helper text="22 min read" text1="August 5, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[106px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant} />
              </div>
            </ListitemLink>
            <ListitemLink>
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="COLLABORATION" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[#16151a] text-[20px] tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Building strong teams for project success
                  </p>
                </div>
                <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[normal]">27 min read</p>
                  </div>
                  <div className="bg-[#878787] h-[20px] rounded-[4px] shrink-0 w-px" data-name="Vertical Divider" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[normal]">September 15, 2025</p>
                  </div>
                </div>
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[106px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant1} />
              </div>
            </ListitemLink>
            <ListitemLink>
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="EFFICIENCY" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[#16151a] text-[20px] tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Streamlining workflows to boost productivity
                  </p>
                </div>
                <Helper text="24 min read" text1="October 3, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[106px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant2} />
              </div>
            </ListitemLink>
          </div>
        </div>
      </div>
    </div>
  );
}