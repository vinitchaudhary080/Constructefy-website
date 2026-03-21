import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen from "@/app/assets/228a6cfaa468a649412ba54b64b26fa0beee2b13.png";
import img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg from "@/app/assets/22d6b9a811fa2c3f805232b3db83c8032c3f3ddf.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant from "@/app/assets/058926f68746ff6057a345cd36826253ea2ffe3c.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant1 from "@/app/assets/e2b5d0dcb521a771029e30b94f0bd53039b96ef4.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant2 from "@/app/assets/3b1ceda0ee2e61be775aba00c3a14a5deaad5fb2.png";

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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="bg-[#878787] h-[20px] rounded-[4px] shrink-0 w-px" data-name="Vertical Divider" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
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

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex flex-col items-center left-[292.88px] top-0 w-[614px]">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16151a] text-[64px] text-center w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>
            <span className="leading-[1.1] text-[#f67011]">Browse</span>
            <span className="leading-[1.1]">{` by topic`}</span>
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[26px] items-start left-0 top-[142px] w-[1199.754px]">
        <div className="content-stretch flex flex-col font-medium gap-[16px] items-start leading-[0] relative shrink-0 w-[274.754px]">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center relative shrink-0 text-[#181f1f] text-[32px] tracking-[-0.4px] w-[228.73px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[38.4px]">Site Visibility</p>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center min-w-full not-italic relative shrink-0 text-[#6c6f75] text-[15px] tracking-[-0.3px] w-[min-content]">
            <p className="leading-[21.75px]">Know what’s happening on site—without chasing updates or relying on assumptions.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
          <div className="bg-white content-stretch flex flex-col gap-[31px] h-[692px] items-start p-[20px] relative rounded-[20px] shrink-0 w-[495px]" data-name="Frame">
            <div className="h-[346px] relative rounded-[12px] shrink-0 w-full" data-name="A man and woman sitting in a restaurant looking at a computer screen.">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen} />
            </div>
            <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                <OverlayText text="INNOVATIVE" />
                <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[14px] items-start relative shrink-0 w-full">
                  <p className="leading-[normal] relative shrink-0 text-[#16151a] text-[26px] tracking-[-0.4px] w-[523.86px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Why construction sites still run on assumptions
                  </p>
                  <div className="flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#262626] text-[15.5px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[21.6px]">Most delays and disputes don’t start on site—they start with missing visibility. Learn why traditional tracking fails and how real-time execution data changes outcomes.</p>
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
                    <p className="leading-[normal]">Adam Guild</p>
                  </div>
                </div>
                <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[normal]">15 min read</p>
                </div>
                <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[normal]">June 6, 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[384px]">
            <ListitemLink>
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="INNOVATIVE" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[#16151a] text-[20px] tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Harnessing technology to drive innovation and efficiency
                  </p>
                </div>
                <Helper text="25 min read" text1="July 20, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[106px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant} />
              </div>
            </ListitemLink>
            <ListitemLink>
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="SUSTAINABILITY" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[#16151a] text-[20px] tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Exploring eco-friendly practices for a greener future
                  </p>
                </div>
                <Helper text="30 min read" text1="August 15, 2025" />
              </div>
              <div className="relative rounded-[8px] shrink-0 size-[106px]" data-name="Person sitting at a laptop searching Google in a restaurant">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgPersonSittingAtALaptopSearchingGoogleInARestaurant1} />
              </div>
            </ListitemLink>
            <ListitemLink>
              <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0">
                <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[216px]">
                  <OverlayText text="USER EXPERIENCE" />
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[26px] min-w-full relative shrink-0 text-[#16151a] text-[20px] tracking-[-0.25px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Designing intuitive interfaces for improved usability
                  </p>
                </div>
                <Helper text="20 min read" text1="September 10, 2025" />
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