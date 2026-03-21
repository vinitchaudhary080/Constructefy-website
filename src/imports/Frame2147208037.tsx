import clsx from "clsx";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen from "@/app/assets/ecec96be967f32b388c038755c630dd95d080a86.png";
import img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg from "@/app/assets/22d6b9a811fa2c3f805232b3db83c8032c3f3ddf.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen1 from "@/app/assets/b07a4a6a9c6d61376c3867fcf61341a13afccd02.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen2 from "@/app/assets/b831a97c10602d2509726fad2912f3decd669bb1.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative rounded-[12px] shrink-0", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">{children}</div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Wrapper additionalClassNames="size-[24px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg} />
      </Wrapper>
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16151a] text-[14.9px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#16151a] text-[20px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}
type OverlayTextProps = {
  text: string;
};

function OverlayText({ text }: OverlayTextProps) {
  return (
    <div className="bg-[#fde2cf] content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[1000px] shrink-0">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f67011] text-[11px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16.5px]">{text}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[72px] items-center left-[120px] top-[54px] w-[1200px]">
        <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] relative shrink-0 text-center w-[614px]">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#16151a] text-[64px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p>
              <span className="leading-[1.1]">{`Latest `}</span>
              <span className="leading-[1.1] text-[#f67011]">Insights</span>
            </p>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#262626] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[22px]">Recent thinking on how construction teams improve visibility, reduce risk, and gain control across active sites.</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[38px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[762px]">
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <Wrapper additionalClassNames="h-[199px] w-[260px]">
                <img alt="" className="absolute h-full left-[-7.55%] max-w-none top-0 w-[115.11%]" src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen} />
              </Wrapper>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[42px] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                  <OverlayText text="FEATURED" />
                  <Text text="How linking daily work directly to drawings helps teams eliminate confusion, reduce rework, and gain confidence in progress." />
                </div>
                <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
                  <Text1 text="Adam Guild" />
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
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <div className="h-[199px] relative rounded-[12px] shrink-0 w-[260px]" data-name="A man and woman sitting in a restaurant looking at a computer screen.">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen1} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[42px] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                  <OverlayText text="INSIGHTFUL" />
                  <Text text="Exploring the impact of collaborative design tools on enhancing team communication and creativity in projects." />
                </div>
                <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
                  <Text1 text="Sara Lee" />
                  <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[normal]">20 min read</p>
                  </div>
                  <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[normal]">July 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <div className="h-[199px] relative rounded-[12px] shrink-0 w-[260px]" data-name="A man and woman sitting in a restaurant looking at a computer screen.">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen2} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[42px] items-start min-h-px min-w-px relative">
                <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
                  <OverlayText text="INNOVATIVE" />
                  <Text text="Utilizing AI-driven analytics to predict project outcomes and streamline workflow for more efficient team performance." />
                </div>
                <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
                  <Text1 text="Michael Chen" />
                  <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[normal]">25 min read</p>
                  </div>
                  <div className="bg-[#878787] h-[20px] shrink-0 w-px" data-name="Vertical Divider" />
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#16151a] text-[15px] tracking-[-0.3px] whitespace-nowrap">
                    <p className="leading-[normal]">August 22, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f1f1f2] h-[544px] relative rounded-[16px] shrink-0 w-[400px]" data-name="Background">
            <div className="absolute inset-0 overflow-clip" data-name="Container">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] left-[calc(50%+0.09px)] text-[#181f1f] text-[32px] text-center top-[144.79px] tracking-[-0.4px] w-[311.68px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[38.4px]">Subscribe to our blog</p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40.75px] justify-center leading-[21.75px] left-[calc(50%+0.16px)] not-italic text-[#181f1f] text-[15px] text-center top-[209.55px] tracking-[-0.3px] w-[296.135px]">
                <p className="mb-0">{`We'll send you our best ideas on restaurant`}</p>
                <p>marketing and growing your online sales.</p>
              </div>
              <div className="absolute h-[130.5px] left-[40px] right-[40px] top-[287.68px]" data-name="Form">
                <div className="absolute bg-white border border-[rgba(255,255,255,0.16)] border-solid h-[56px] left-0 overflow-clip right-0 rounded-[8px] top-[2.5px]" data-name="Input">
                  <div className="absolute h-[21px] left-[24px] overflow-clip right-[24px] top-[16.5px]" data-name="Container">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-0 text-[#757575] text-[15.5px] top-[10px] w-[124.23px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                      <p className="leading-[normal]">Enter your email*</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#2664ff] h-[56px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_0px_60px_0px_rgba(255,255,255,0.2)] top-[74.5px]" data-name="Input">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-0.7px)] text-[16px] text-center text-white top-1/2 tracking-[-0.16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                    <p className="leading-[16px]">Subscribe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}