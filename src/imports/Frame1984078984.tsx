import clsx from "clsx";
import svgPaths from "./svg-wovbt1s99r";
import imgEllipse3 from "@/app/assets/642e0955b983f8deec8335f70375d5e9d7a494a4.png";
type ContainerBackgroundImage11Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage11Props>) {
  return (
    <div className={clsx("bg-[#1c1b20] relative rounded-bl-[5px] rounded-br-[5px] shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[6px] items-start pt-[6px] px-[6px] relative size-full">{children}</div>
    </div>
  );
}

function TaskCardBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#16151a] h-[62px] relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[6px] items-start pt-[8px] px-[8px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[8388600px] shrink-0 size-[8px]">
      <div aria-hidden="true" className="absolute border border-[#14cb49] border-solid inset-0 pointer-events-none rounded-[8388600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[7px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
        {children}
      </svg>
    </div>
  );
}
type ButtonBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImage2Props>) {
  return (
    <div className={clsx("h-[20px] relative rounded-[5px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#404040] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.5px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage9Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage9Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}
type ButtonBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImage1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12px] relative shrink-0 w-full">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12px] left-0 text-[8px] text-white top-[0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {children}
      </p>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[10px] relative shrink-0 w-[54.645px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <div className={clsx("h-[10px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[2px] items-center relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage5Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage4Props>) {
  return <BackgroundImage5 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</BackgroundImage5>;
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return <BackgroundImage5 additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>{children}</BackgroundImage5>;
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[9px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        {children}
      </svg>
    </div>
  );
}

function ContainerBackgroundImage8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[10px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[0.004px] relative size-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage2>
      <g id="Icon">{children}</g>
    </BackgroundImage2>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div className={clsx("overflow-clip relative shrink-0 w-full", additionalClassNames)}>
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">{children}</div>
      </div>
    </div>
  );
}

function IconBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage additionalClassNames="h-[10px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 5.83333">
        {children}
      </svg>
    </BackgroundImage>
  );
}
type TextBackgroundImageAndText3Props = {
  text: string;
};

function TextBackgroundImageAndText3({ text }: TextBackgroundImageAndText3Props) {
  return (
    <BackgroundImage3 additionalClassNames="h-[10px]">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10px] left-0 text-[#878787] text-[7px] top-[0.5px] w-[37px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage3>
  );
}

function ButtonBackgroundImage() {
  return (
    <div className="content-stretch flex gap-[4px] h-[26px] items-center justify-center p-px relative rounded-[5px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <BackgroundImage1>
        <path d="M1.875 4.5H7.125" id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        <path d="M4.5 1.875V7.125" id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
      </BackgroundImage1>
      <BackgroundImage4 additionalClassNames="h-[12px] w-[32.766px]">
        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12px] left-[16.5px] text-[#878787] text-[8px] text-center top-[0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          {"Add Task"}
        </p>
      </BackgroundImage4>
    </div>
  );
}

function ContainerBackgroundImage7() {
  return (
    <BackgroundImage6 additionalClassNames="w-[61.473px]">
      <IconBackgroundImage1 />
      <TextBackgroundImageAndText1 text="San Antonio, TX" />
    </BackgroundImage6>
  );
}
type ContainerBackgroundImage6Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage6({ additionalClassNames = "" }: ContainerBackgroundImage6Props) {
  return (
    <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full">
      <ContainerBackgroundImageAndText text="Medium Priority" additionalClassNames="bg-[#ff9f2e] w-[49.676px]" />
      <BackgroundImage7>
        <IconBackgroundImage />
        <TextBackgroundImageAndText text="Nov 18, 2025" />
      </BackgroundImage7>
    </div>
  );
}

function ContainerBackgroundImage5() {
  return (
    <BackgroundImage6 additionalClassNames="w-[42.91px]">
      <IconBackgroundImage2 />
      <TextBackgroundImageAndText1 text="Inspection" />
    </BackgroundImage6>
  );
}

function ContainerBackgroundImage4() {
  return (
    <BackgroundImage6 additionalClassNames="w-[49.785px]">
      <IconBackgroundImage1 />
      <TextBackgroundImageAndText1 text="Houston, TX" />
    </BackgroundImage6>
  );
}

function ContainerBackgroundImage3() {
  return (
    <BackgroundImage7>
      <IconBackgroundImage />
      <TextBackgroundImageAndText text="Nov 10, 2025" />
    </BackgroundImage7>
  );
}

function ContainerBackgroundImage2() {
  return (
    <BackgroundImage6 additionalClassNames="w-[43.164px]">
      <IconBackgroundImage1 />
      <TextBackgroundImageAndText1 text="Dallas, TX" />
    </BackgroundImage6>
  );
}
type TextBackgroundImageAndText2Props = {
  text: string;
};

function TextBackgroundImageAndText2({ text }: TextBackgroundImageAndText2Props) {
  return (
    <BackgroundImage3 additionalClassNames="h-[10px]">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10px] left-0 text-[#878787] text-[7px] top-[0.5px] w-[33px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage3>
  );
}

function ContainerBackgroundImage1() {
  return (
    <BackgroundImage6 additionalClassNames="w-[44.469px]">
      <IconBackgroundImage2 />
      <TextBackgroundImageAndText1 text="Installation" />
    </BackgroundImage6>
  );
}

function IconBackgroundImage2() {
  return (
    <BackgroundImage2>
      <g clipPath="url(#clip0_2_1779)" id="Icon">
        <path d={svgPaths.pb891b80} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
      </g>
      <defs>
        <clipPath id="clip0_2_1779">
          <rect fill="white" height="9" width="9" />
        </clipPath>
      </defs>
    </BackgroundImage2>
  );
}

function ContainerBackgroundImage() {
  return (
    <BackgroundImage6 additionalClassNames="w-[43.168px]">
      <IconBackgroundImage1 />
      <TextBackgroundImageAndText1 text="Austin, TX" />
    </BackgroundImage6>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <BackgroundImage3 additionalClassNames="h-[10px]">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10px] left-0 text-[#878787] text-[7px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage3>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage1>
      <path d={svgPaths.p3de7e580} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
      <path d={svgPaths.p27bbb200} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
    </BackgroundImage1>
  );
}
type HeadingBackgroundImageAndText1Props = {
  text: string;
};

function HeadingBackgroundImageAndText1({ text }: HeadingBackgroundImageAndText1Props) {
  return <BackgroundImage8>{text}</BackgroundImage8>;
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <BackgroundImage3 additionalClassNames="h-[10px]">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10px] left-0 text-[7px] text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage3>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage2>
      <g clipPath="url(#clip0_2_1743)" id="Icon">
        <path d="M3 0.75V2.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        <path d="M6 0.75V2.25" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        <path d={svgPaths.p24ec9a00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
        <path d="M1.125 3.75H7.875" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
      </g>
      <defs>
        <clipPath id="clip0_2_1743">
          <rect fill="white" height="9" width="9" />
        </clipPath>
      </defs>
    </BackgroundImage2>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContainerBackgroundImageAndText({ text, additionalClassNames = "" }: ContainerBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames={clsx("h-[12px] relative rounded-[8388600px] shrink-0", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[8px] left-[4px] text-[#16151a] text-[6px] top-[2.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage5>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingBackgroundImageAndText({ text, additionalClassNames = "" }: HeadingBackgroundImageAndTextProps) {
  return (
    <BackgroundImage5 additionalClassNames={clsx("h-[13.5px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[13.5px] left-0 text-[#16151a] text-[9px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </BackgroundImage5>
  );
}

function Icon3BackgroundImage() {
  return (
    <div className="absolute inset-[-0.5px_-6.25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
        <path d="M0.5 0.5H8.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-[120px] top-[120.66px] w-[739px]">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[0px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="text-[56px]">
            <span className="leading-[1.1]">{`Built for every role across the entire `}</span>
            <span className="leading-[1.1] text-[#f67011]">construction site</span>
          </p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#fbfbfb] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[22px]">Constructefy aligns everyone on the construction site around a single, reliable system—making adoption easy for workers and control effortless for managers.</p>
        </div>
      </div>
      <div className="absolute h-[162px] left-[120px] top-[393.66px] w-[1200px]">
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-0 top-0 w-[537px]">
          <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[20px] py-[8px] relative rounded-[100px] shrink-0" data-name="Desktop">
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#131515] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[normal]">For Managers</p>
            </div>
          </div>
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[0px] text-[48px] text-white w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="leading-[1.1]">{`Total visibility and control `}</span>
            <span className="leading-[1.1] text-[#f67011]">across sites</span>
          </p>
        </div>
        <div className="absolute bottom-[32.66px] flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] left-[830px] text-[#fbfbfb] text-[16px] translate-y-1/2 w-[370px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[22px]">Constructefy gives management teams real-time insight into workforce activity, progress, and risk—without chasing updates.</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.1)] h-[470px] left-[120px] overflow-clip rounded-[10px] top-[611.66px] w-[380px]" data-name="Image">
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[13px] items-start leading-[0] left-1/2 overflow-clip top-[24px] w-[340px]" data-name="Text">
          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-white tracking-[-0.4px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[28px]">Live dashboards</p>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">Monitor attendance, site activity, and progress in real time from a single view.</p>
          </div>
        </div>
        <div className="absolute bg-[#16151a] border border-[rgba(246,112,17,0.15)] border-solid h-[314px] left-[20px] overflow-clip rounded-[14px] top-[169.34px] w-[383px]" data-name="Kanban Detail">
          <div className="absolute content-stretch flex items-center justify-between left-[-1px] px-[20px] py-[10px] top-[-43px] w-[720px]">
            <div aria-hidden="true" className="absolute border-[#262626] border-[0.5px] border-solid inset-0 pointer-events-none" />
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <div className="col-1 h-[18px] ml-0 mt-0 overflow-clip relative row-1 w-[18.673px]" data-name="assets 3 1">
                <div className="absolute inset-[0_-0.01%_0_0]" data-name="Layer 1">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6741 17.9998">
                    <g id="Layer 1">
                      <path d={svgPaths.p3a547880} fill="var(--fill-0, #F67011)" id="Vector" />
                      <path d={svgPaths.p1ecde3a0} fill="var(--fill-0, #14CB49)" id="Vector_2" />
                      <path d={svgPaths.p3baeb480} fill="var(--fill-0, #FF9F2E)" id="Vector_3" />
                      <path d={svgPaths.p3053b000} fill="var(--fill-0, #F84241)" id="Vector_4" />
                      <g id="Vector_5">
                        <path d={svgPaths.p17417c80} fill="var(--fill-0, #178FFF)" />
                        <path d={svgPaths.p17417c80} fill="var(--fill-1, black)" fillOpacity="0.2" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="col-1 h-[12.173px] ml-[24.8px] mt-[3.06px] relative row-1 w-[74.026px]" data-name="constructefy">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.0261 12.1732">
                  <g id="constructefy">
                    <path d={svgPaths.p209f2d00} fill="var(--fill-0, white)" id="Vector" />
                    <path d={svgPaths.pfafae00} fill="var(--fill-0, white)" id="Vector_2" />
                    <path d={svgPaths.p7276580} fill="var(--fill-0, white)" id="Vector_3" />
                    <path d={svgPaths.p1655c180} fill="var(--fill-0, white)" id="Vector_4" />
                    <path d={svgPaths.p38f66580} fill="var(--fill-0, white)" id="Vector_5" />
                    <path d={svgPaths.p3b7212f0} fill="var(--fill-0, white)" id="Vector_6" />
                    <path d={svgPaths.pfe87100} fill="var(--fill-0, white)" id="Vector_7" />
                    <path d={svgPaths.p15a7f500} fill="var(--fill-0, white)" id="Vector_8" />
                    <path d={svgPaths.p225fe400} fill="var(--fill-0, white)" id="Vector_9" />
                    <path d={svgPaths.p1d53a900} fill="var(--fill-0, white)" id="Vector_10" />
                    <path d={svgPaths.p15ef9800} fill="var(--fill-0, white)" id="Vector_11" />
                    <path d={svgPaths.pb06b780} fill="var(--fill-0, white)" id="Vector_12" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0">
              <div className="relative shrink-0 size-[22px]">
                <img alt="" className="absolute block max-w-none size-full" height="22" src={imgEllipse3} width="22" />
              </div>
            </div>
          </div>
          <div className="absolute bg-[#16151a] content-stretch flex flex-col h-[44.5px] items-start left-0 pb-[0.5px] pt-[12px] px-[16px] top-[-1px] w-[719px]" data-name="Container">
            <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Header">
              <ContainerBackgroundImage9 additionalClassNames="h-[18px] w-[109.379px]">
                <ButtonBackgroundImage1 additionalClassNames="size-[12px]">
                  <BackgroundImage additionalClassNames="h-[12px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 7">
                      <path d="M3.5 6.5L0.5 3.5L3.5 0.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </BackgroundImage>
                </ButtonBackgroundImage1>
                <BackgroundImage3 additionalClassNames="h-[18px]">
                  <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[18px] left-0 text-[12px] text-white top-px whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Glass Facade Installation
                  </p>
                </BackgroundImage3>
              </ContainerBackgroundImage9>
              <ContainerBackgroundImage9 additionalClassNames="h-[20px] w-[107.684px]">
                <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[5px]" data-name="Button" style={{ backgroundImage: "linear-gradient(107.968deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }}>
                  <div className="flex flex-row items-center size-full">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[8px] relative size-full">
                      <BackgroundImage1>
                        <path d="M1.875 4.5H7.125" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                        <path d="M4.5 1.875V7.125" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                      </BackgroundImage1>
                      <BackgroundImage3 additionalClassNames="h-[12px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12px] left-[20px] text-[8px] text-center text-white top-[0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          New Event
                        </p>
                      </BackgroundImage3>
                    </div>
                  </div>
                </div>
                <ButtonBackgroundImage1 additionalClassNames="size-[12px]">
                  <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[69.42%_12.52%_12.5%_69.4%]" data-name="Vector">
                      <div className="absolute inset-[-23.04%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17 3.17">
                          <path d="M2.67 2.67L0.5 0.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                      <div className="absolute inset-[-6.25%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                          <path d={svgPaths.p2a600700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </ButtonBackgroundImage1>
                <ButtonBackgroundImage1 additionalClassNames="size-[12px]">
                  <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                    <div className="absolute inset-[20.83%_16.67%_79.17%_16.67%]" data-name="Vector">
                      <Icon3BackgroundImage />
                    </div>
                    <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
                      <Icon3BackgroundImage />
                    </div>
                    <div className="absolute inset-[79.17%_16.67%_20.83%_16.67%]" data-name="Vector">
                      <Icon3BackgroundImage />
                    </div>
                  </div>
                </ButtonBackgroundImage1>
              </ContainerBackgroundImage9>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[19.5px] top-[54.5px] w-[679px]">
            <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
              <div className="bg-[#1c1b20] h-[20px] relative rounded-[3px] shrink-0 w-[104px]" data-name="Container">
                <div aria-hidden="true" className="absolute border-[#262626] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[3px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[2.5px] relative size-full">
                  <ButtonBackgroundImage1 additionalClassNames="size-[10px]">
                    <IconBackgroundImage3>
                      <path d={svgPaths.p3802abe} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                    </IconBackgroundImage3>
                  </ButtonBackgroundImage1>
                  <BackgroundImage4 additionalClassNames="h-[15px] w-[67.5px]">
                    <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[15px] left-0 text-[10px] text-white top-[0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      October 2025
                    </p>
                  </BackgroundImage4>
                  <ButtonBackgroundImage1 additionalClassNames="size-[10px]">
                    <IconBackgroundImage3>
                      <path d={svgPaths.p99c5d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
                    </IconBackgroundImage3>
                  </ButtonBackgroundImage1>
                </div>
              </div>
              <div className="h-[20px] relative shrink-0 w-[153.004px]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
                  <ButtonBackgroundImage2 additionalClassNames="w-[43.086px]">
                    <BackgroundImage4 additionalClassNames="h-[12px] w-[26.086px]">
                      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12px] left-[13px] text-[#989795] text-[8px] text-center top-[0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                        Weekly
                      </p>
                    </BackgroundImage4>
                  </ButtonBackgroundImage2>
                  <ButtonBackgroundImage2 additionalClassNames="w-[34.781px]">
                    <BackgroundImage4 additionalClassNames="h-[12px] w-[17.781px]">
                      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12px] left-[9px] text-[#989795] text-[8px] text-center top-[0.75px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                        Daily
                      </p>
                    </BackgroundImage4>
                  </ButtonBackgroundImage2>
                  <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[5px]" data-name="Button">
                    <div aria-hidden="true" className="absolute border-[#262626] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[5px]" />
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center justify-center p-[0.5px] relative size-full">
                      <IconBackgroundImage4>
                        <g clipPath="url(#clip0_2_1784)" id="Icon">
                          <path d={svgPaths.p1876e680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
                          <path d={svgPaths.p3aa26c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
                          <path d={svgPaths.p1a0b440} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
                          <path d={svgPaths.p3ffdad80} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_1784">
                            <rect fill="white" height="7" width="7" />
                          </clipPath>
                        </defs>
                      </IconBackgroundImage4>
                      <BackgroundImage4 additionalClassNames="h-[10px] w-[24.137px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[10px] left-[12.5px] text-[7px] text-center text-white top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Kanban
                        </p>
                      </BackgroundImage4>
                      <IconBackgroundImage4>
                        <g id="Icon">
                          <path d={svgPaths.p1593fe00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.583333" />
                        </g>
                      </IconBackgroundImage4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[413.5px] relative rounded-[7px] shrink-0 w-full" data-name="KanbanView">
              <div className="overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex items-start p-[10.5px] relative size-full">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="col-1 content-stretch flex flex-col h-[401.5px] items-start ml-0 mt-0 relative row-1 w-[212.551px]" data-name="Container">
                      <div className="bg-[#14cb49] h-[23.5px] relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center pr-[0.004px] relative size-full">
                            <HeadingBackgroundImageAndText text="In Progress" additionalClassNames="w-[46.02px]" />
                          </div>
                        </div>
                      </div>
                      <ContainerBackgroundImage11 additionalClassNames="h-[310px]">
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="High Priority" additionalClassNames="bg-[#f84241] w-[40.676px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 12, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Summit Plaza — HVAC Duct Setup" />
                          <ContainerBackgroundImage8>
                            <ContainerBackgroundImage />
                            <ContainerBackgroundImage1 />
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="80% Done" />
                            </BackgroundImage6>
                          </ContainerBackgroundImage8>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Medium Priority" additionalClassNames="bg-[#ff9f2e] w-[49.676px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 15, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Tower Heights — Electrical Wiring" />
                          <div className="content-stretch flex h-[10px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImage2 />
                            <ContainerBackgroundImage1 />
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="65% Done" />
                            </BackgroundImage6>
                          </div>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="High Priority" additionalClassNames="bg-[#f84241] w-[40.676px]" />
                            <ContainerBackgroundImage3 />
                          </div>
                          <HeadingBackgroundImageAndText1 text="Skyline Complex — Foundation Inspection" />
                          <div className="content-stretch flex h-[10px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImage4 />
                            <ContainerBackgroundImage5 />
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="90% Done" />
                            </BackgroundImage6>
                          </div>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <ContainerBackgroundImage6 />
                          <HeadingBackgroundImageAndText1 text="Gateway Center — Glass Panel Installation" />
                          <ContainerBackgroundImage8>
                            <ContainerBackgroundImage7 />
                            <ContainerBackgroundImage1 />
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="55% Done" />
                            </BackgroundImage6>
                          </ContainerBackgroundImage8>
                        </TaskCardBackgroundImage>
                        <ButtonBackgroundImage />
                      </ContainerBackgroundImage11>
                    </div>
                    <div className="col-1 content-stretch flex flex-col h-[401.5px] items-start ml-[225.97px] mt-0 relative row-1 w-[212.551px]" data-name="Container">
                      <div className="bg-[#ff9f2e] content-stretch flex h-[23.5px] items-center justify-center relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Container">
                        <HeadingBackgroundImageAndText text="Pending" additionalClassNames="w-[33.031px]" />
                      </div>
                      <ContainerBackgroundImage11 additionalClassNames="h-[378px]">
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="High Priority" additionalClassNames="bg-[#f84241] w-[40.676px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 20, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Harbor View — Steel Framework Assembly" />
                          <ContainerBackgroundImage8>
                            <ContainerBackgroundImage />
                            <BackgroundImage6 additionalClassNames="w-[41.344px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Assembly" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="30% Done" />
                            </BackgroundImage6>
                          </ContainerBackgroundImage8>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <ContainerBackgroundImage6 />
                          <HeadingBackgroundImageAndText1 text="Metro Center — Plumbing Installation" />
                          <div className="content-stretch flex h-[10px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImage4 />
                            <BackgroundImage6 additionalClassNames="w-[40.184px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Plumbing" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="45% Done" />
                            </BackgroundImage6>
                          </div>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Low Priority" additionalClassNames="bg-[#14cb49] w-[39.344px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 22, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Riverside Plaza — HVAC System Check" />
                          <ContainerBackgroundImage8>
                            <ContainerBackgroundImage2 />
                            <ContainerBackgroundImage5 />
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="20% Done" />
                            </BackgroundImage6>
                          </ContainerBackgroundImage8>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Medium Priority" additionalClassNames="bg-[#ff9f2e] w-[49.676px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 25, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Central Park Tower — Roofing Materials" />
                          <ContainerBackgroundImage8>
                            <BackgroundImage6 additionalClassNames="w-[56.648px]">
                              <IconBackgroundImage1 />
                              <TextBackgroundImageAndText1 text="Fort Worth, TX" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[35.129px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Roofing" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="15% Done" />
                            </BackgroundImage6>
                          </ContainerBackgroundImage8>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Low Priority" additionalClassNames="bg-[#14cb49] w-[39.344px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 28, 2025" />
                            </BackgroundImage7>
                          </div>
                          <BackgroundImage8>{`Lakeside Apartments — Paint & Finish`}</BackgroundImage8>
                          <ContainerBackgroundImage8>
                            <ContainerBackgroundImage />
                            <BackgroundImage6 additionalClassNames="w-[39.016px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Finishing" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[42.695px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText2 text="10% Done" />
                            </BackgroundImage6>
                          </ContainerBackgroundImage8>
                        </TaskCardBackgroundImage>
                        <ButtonBackgroundImage />
                      </ContainerBackgroundImage11>
                    </div>
                    <div className="col-1 content-stretch flex flex-col h-[401.5px] items-start ml-[451.95px] mt-0 relative row-1 w-[212.551px]" data-name="Container">
                      <div className="bg-[#178fff] content-stretch flex h-[23.5px] items-center justify-center relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Container">
                        <HeadingBackgroundImageAndText text="Completed" additionalClassNames="w-[43.523px]" />
                      </div>
                      <ContainerBackgroundImage11 additionalClassNames="h-[242px]">
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Low Priority" additionalClassNames="bg-[#14cb49] w-[39.344px]" />
                            <ContainerBackgroundImage3 />
                          </div>
                          <HeadingBackgroundImageAndText1 text="Gateway Building — Foundation Work" />
                          <div className="content-stretch flex h-[10px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImage7 />
                            <BackgroundImage6 additionalClassNames="w-[46.027px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Foundation" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[46.586px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText3 text="100% Done" />
                            </BackgroundImage6>
                          </div>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Low Priority" additionalClassNames="bg-[#14cb49] w-[39.344px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 08, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Oakwood Residence — Electrical Setup" />
                          <div className="content-stretch flex h-[10px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImage2 />
                            <BackgroundImage6 additionalClassNames="w-[39.398px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Electrical" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[46.586px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText3 text="100% Done" />
                            </BackgroundImage6>
                          </div>
                        </TaskCardBackgroundImage>
                        <TaskCardBackgroundImage>
                          <div className="content-stretch flex h-[12px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImageAndText text="Low Priority" additionalClassNames="bg-[#14cb49] w-[39.344px]" />
                            <BackgroundImage7>
                              <IconBackgroundImage />
                              <TextBackgroundImageAndText text="Nov 05, 2025" />
                            </BackgroundImage7>
                          </div>
                          <HeadingBackgroundImageAndText1 text="Sunset Tower — Fire Safety Installation" />
                          <div className="content-stretch flex h-[10px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                            <ContainerBackgroundImage4 />
                            <BackgroundImage6 additionalClassNames="w-[30.848px]">
                              <IconBackgroundImage2 />
                              <TextBackgroundImageAndText1 text="Safety" />
                            </BackgroundImage6>
                            <BackgroundImage6 additionalClassNames="w-[46.586px]">
                              <ContainerBackgroundImage10>
                                <div className="bg-[#14cb49] rounded-[8388600px] shrink-0 size-[4px]" data-name="Container" />
                              </ContainerBackgroundImage10>
                              <TextBackgroundImageAndText3 text="100% Done" />
                            </BackgroundImage6>
                          </div>
                        </TaskCardBackgroundImage>
                        <ButtonBackgroundImage />
                      </ContainerBackgroundImage11>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#262626] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[7px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}