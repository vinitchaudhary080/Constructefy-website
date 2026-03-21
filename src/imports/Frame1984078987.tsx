import clsx from "clsx";
import svgPaths from "./svg-ynni57z2c1";
type ButtonBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImage1Props>) {
  return (
    <div className={clsx("h-[32.068px] relative rounded-[8.017px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#404040] border-[0.802px] border-solid inset-0 pointer-events-none rounded-[8.017px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.802px] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12.827px] items-center relative size-full">{children}</div>
    </div>
  );
}
type ButtonBackgroundImageProps = {
  additionalClassNames?: string;
};

function ButtonBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[20px] text-black tracking-[-0.4px] whitespace-nowrap">
      <p className="leading-[28px]">{children}</p>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#262626] h-[15.232px] relative rounded-[3.207px] shrink-0 w-[14.08px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("h-[19.241px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function IconBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8.017px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.017 8.017">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function IconBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[11.224px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2238 11.2238">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_-0.19%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 524 2">
          {children}
        </svg>
      </div>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16.034px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[25.01%_37.53%_24.99%_37.47%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.34467 9.35316">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type TextBackgroundImageAndText5Props = {
  text: string;
};

function TextBackgroundImageAndText5({ text }: TextBackgroundImageAndText5Props) {
  return (
    <div className="absolute content-stretch flex h-[11.224px] items-start left-[8.02px] top-[21.65px] w-[23.368px]">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.827px] min-h-px min-w-px relative text-[#878787] text-[9.62px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type TextBackgroundImageAndText4Props = {
  text: string;
};

function TextBackgroundImageAndText4({ text }: TextBackgroundImageAndText4Props) {
  return (
    <BackgroundImage2>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.025px] left-[4.81px] text-[#878787] text-[8.017px] top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage2>
  );
}
type TextBackgroundImageAndText3Props = {
  text: string;
};

function TextBackgroundImageAndText3({ text }: TextBackgroundImageAndText3Props) {
  return (
    <BackgroundImage2>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.025px] left-[4.81px] text-[#878787] text-[8.017px] top-[2.01px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage2>
  );
}
type TextBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText2({ text, additionalClassNames = "" }: TextBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute content-stretch flex h-[11.224px] items-start left-[8.02px] w-[24.076px]", additionalClassNames)}>
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.827px] relative shrink-0 text-[#878787] text-[9.62px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.827px] left-0 text-[9.62px] text-white top-[0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute h-[12.827px] left-[8.02px] overflow-clip top-[6.41px]", additionalClassNames)}>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.827px] left-0 text-[9.62px] text-white top-[0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type TextBackgroundImageAndText1Props = {
  text: string;
};

function TextBackgroundImageAndText1({ text }: TextBackgroundImageAndText1Props) {
  return (
    <BackgroundImage2>
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.025px] left-[4.8px] text-[#878787] text-[8.017px] top-[2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </BackgroundImage2>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] relative shrink-0 text-[12.827px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[22.448px] items-center justify-center relative rounded-[13450276px] shrink-0 w-full">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] relative shrink-0 text-[12.827px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
};

function TextBackgroundImageAndText({ text }: TextBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex h-[22.448px] items-center justify-center relative rounded-[13450276px] shrink-0 w-full">
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] relative shrink-0 text-[#878787] text-[12.827px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        {text}
      </p>
    </div>
  );
}
type Icon3VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function Icon3VectorBackgroundImage({ additionalClassNames = "" }: Icon3VectorBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.8px_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4306 1.6034">
          <path d="M0.8017 0.8017H13.6289" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6034" />
        </svg>
      </div>
    </div>
  );
}

function Frame1984078961BackgroundImage() {
  return (
    <BackgroundImage>
      <path d="M1 1H523" id="Line 27" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.1" strokeWidth="2" />
    </BackgroundImage>
  );
}
type AnswerBackgroundImageAndTextProps = {
  text: string;
};

function AnswerBackgroundImageAndText({ text }: AnswerBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#e8e8e8] overflow-clip relative rounded-[70px] shrink-0 size-[24px]">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[calc(50%-4px)] text-[#16151a] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        {text}
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex gap-[88px] items-end left-[118px] top-[97px]">
        <div className="content-stretch flex flex-col gap-[87px] items-start relative shrink-0 w-[522px]">
          <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 w-full">
            <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#16151a] text-[0px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="text-[56px]">
                <span className="leading-[1.1]">{`How Constructefy `}</span>
                <span className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.1] text-[#f67011]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Works
                </span>
              </p>
            </div>
            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#262626] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[22px]">Constructefy fits into your existing construction workflow by connecting project plans, workforce activity, and on-site proof in a single system—without disrupting how teams work on the ground.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
            <div className="h-[5px] relative shrink-0 w-full">
              <div className="absolute h-0 left-px top-[4px] w-[478px]">
                <div className="absolute inset-[-1px_-0.21%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 2">
                    <path d="M1 1H479" id="Line 26" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.1" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute h-[5px] left-0 rounded-[20px] top-0 w-[277px]" data-name="Line" style={{ backgroundImage: "linear-gradient(169.333deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
            </div>
            <div className="content-stretch flex flex-col gap-[25px] items-end relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <div className="bg-[#e8e8e8] overflow-clip relative rounded-[70px] shrink-0 size-[24px]" data-name="Answer">
                    <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22px] left-[9.5px] text-[#16151a] text-[13px] top-px whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      1
                    </p>
                  </div>
                  <BackgroundImage3>Set up projects</BackgroundImage3>
                </div>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#262626] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Companies create projects and define site details, locations, and basic configurations in minutes, establishing a structured foundation before work begins.
                </p>
              </div>
              <BackgroundImage>
                <path d="M1 1H523" id="Line 26" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.1" strokeWidth="2" />
              </BackgroundImage>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <AnswerBackgroundImageAndText text="2" />
                  <BackgroundImage3>Upload plans</BackgroundImage3>
                </div>
              </div>
              <Frame1984078961BackgroundImage />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <AnswerBackgroundImageAndText text="3" />
                  <BackgroundImage3>Onboard workers via QR</BackgroundImage3>
                </div>
              </div>
              <Frame1984078961BackgroundImage />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <AnswerBackgroundImageAndText text="4" />
                  <BackgroundImage3>Execute work on site</BackgroundImage3>
                </div>
              </div>
              <Frame1984078961BackgroundImage />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                  <AnswerBackgroundImageAndText text="5" />
                  <BackgroundImage3>Track progress and decide</BackgroundImage3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#16151a] h-[642px] overflow-clip relative rounded-[16px] shrink-0 w-[590px]" data-name="Calendar">
          <div className="absolute h-[849px] left-[2px] top-0 w-[1152.844px]">
            <div className="absolute bg-[#16151a] content-stretch flex flex-col h-[71.351px] items-start left-0 pb-[0.802px] pt-[19.241px] px-[25.654px] top-0 w-[1152.844px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#1c1b20] border-b-[0.802px] border-solid inset-0 pointer-events-none" />
              <div className="content-stretch flex h-[32.068px] items-center justify-between relative shrink-0 w-full" data-name="Header">
                <ContainerBackgroundImage additionalClassNames="h-[28.861px] w-[175.378px]">
                  <ButtonBackgroundImage additionalClassNames="size-[19.241px]">
                    <div className="h-[19.241px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute bottom-1/4 left-[37.52%] right-[37.48%] top-1/4" data-name="Vector">
                        <div className="absolute inset-[-8.33%_-16.67%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4136 11.2238">
                            <path d={svgPaths.p2a45e840} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6034" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </ButtonBackgroundImage>
                  <div className="flex-[1_0_0] h-[28.861px] min-h-px min-w-px relative" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[28.861px] left-0 text-[19.241px] text-white top-[1.6px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Glass Facade Installation
                      </p>
                    </div>
                  </div>
                </ContainerBackgroundImage>
                <ContainerBackgroundImage additionalClassNames="h-[32.068px] w-[172.66px]">
                  <div className="flex-[1_0_0] h-[32.068px] min-h-px min-w-px relative rounded-[8.017px]" data-name="Button" style={{ backgroundImage: "linear-gradient(107.968deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }}>
                    <div className="flex flex-row items-center size-full">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.414px] items-center px-[12.827px] relative size-full">
                        <div className="relative shrink-0 size-[14.431px]" data-name="Icon">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4306 14.4306">
                            <g id="Icon">
                              <path d="M3.00781 7.21484H11.4257" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.20255" />
                              <path d="M7.21875 3.00586V11.4237" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.20255" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex-[1_0_0] h-[19.241px] min-h-px min-w-px relative" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[31.5px] text-[12.827px] text-center text-white top-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                              New Event
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ButtonBackgroundImage additionalClassNames="size-[19.241px]">
                    <div className="h-[19.241px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[69.42%_12.52%_12.49%_69.39%]" data-name="Vector">
                        <div className="absolute inset-[-23.04%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08278 5.08278">
                            <path d={svgPaths.p14aa5b40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6034" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[12.5%_20.87%_20.84%_12.47%]" data-name="Vector">
                        <div className="absolute inset-[-6.25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4306 14.4306">
                            <path d={svgPaths.p14119f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6034" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </ButtonBackgroundImage>
                  <ButtonBackgroundImage additionalClassNames="size-[19.241px]">
                    <div className="h-[19.241px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <Icon3VectorBackgroundImage additionalClassNames="inset-[20.84%_16.69%_79.16%_16.65%]" />
                      <Icon3VectorBackgroundImage additionalClassNames="inset-[49.99%_16.69%_50.01%_16.65%]" />
                      <Icon3VectorBackgroundImage additionalClassNames="inset-[79.17%_16.69%_20.83%_16.65%]" />
                    </div>
                  </ButtonBackgroundImage>
                </ContainerBackgroundImage>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[16.034px] items-center left-[30.47px] top-[88.99px] w-[1090.312px]">
              <div className="content-stretch flex h-[32.068px] items-center justify-between relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#1c1b20] h-[32.068px] relative rounded-[4.81px] shrink-0 w-[166.754px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#262626] border-[0.802px] border-solid inset-0 pointer-events-none rounded-[4.81px]" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8.017px] items-center justify-center p-[4.009px] relative size-full">
                    <ButtonBackgroundImage additionalClassNames="size-[16.034px]">
                      <IconBackgroundImage>
                        <path d={svgPaths.p36464600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33617" />
                      </IconBackgroundImage>
                    </ButtonBackgroundImage>
                    <div className="h-[24.051px] relative shrink-0 w-[108.229px]" data-name="Heading 2">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24.051px] left-0 text-[16.034px] text-white top-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                          October 2025
                        </p>
                      </div>
                    </div>
                    <ButtonBackgroundImage additionalClassNames="size-[16.034px]">
                      <IconBackgroundImage>
                        <path d={svgPaths.p3fa89b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33617" />
                      </IconBackgroundImage>
                    </ButtonBackgroundImage>
                  </div>
                </div>
                <div className="h-[32.068px] relative shrink-0 w-[389.244px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9.62px] items-start relative size-full">
                    <div className="bg-[#202020] h-[32.068px] relative rounded-[8.017px] shrink-0 w-[61.305px]" data-name="Button">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <BackgroundImage1 additionalClassNames="w-[35.651px]">
                          <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[17.9px] text-[#f9f9f9] text-[12.827px] text-center top-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                            Month
                          </p>
                        </BackgroundImage1>
                      </div>
                    </div>
                    <ButtonBackgroundImage1 additionalClassNames="w-[59.821px]">
                      <BackgroundImage1 additionalClassNames="w-[32.563px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[16.5px] text-[#989795] text-[12.827px] text-center top-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Week
                        </p>
                      </BackgroundImage1>
                    </ButtonBackgroundImage1>
                    <ButtonBackgroundImage1 additionalClassNames="w-[50.069px]">
                      <BackgroundImage1 additionalClassNames="w-[22.811px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[11.5px] text-[#989795] text-[12.827px] text-center top-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Day
                        </p>
                      </BackgroundImage1>
                    </ButtonBackgroundImage1>
                    <ButtonBackgroundImage1 additionalClassNames="w-[71.483px]">
                      <BackgroundImage1 additionalClassNames="w-[44.225px]">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[23px] text-[#989795] text-[12.827px] text-center top-[1.2px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Agenda
                        </p>
                      </BackgroundImage1>
                    </ButtonBackgroundImage1>
                    <div className="flex-[1_0_0] h-[32.068px] min-h-px min-w-px relative rounded-[8.017px]" data-name="Button">
                      <div aria-hidden="true" className="absolute border-[#404040] border-[0.802px] border-solid inset-0 pointer-events-none rounded-[8.017px]" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6.414px] items-center justify-center p-[0.802px] relative size-full">
                        <IconBackgroundImage1>
                          <path d="M3.74219 0.935547V2.80618" id="Vector" stroke="var(--stroke-0, #989795)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935316" />
                          <path d="M7.47656 0.935547V2.80618" id="Vector_2" stroke="var(--stroke-0, #989795)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935316" />
                          <path d={svgPaths.p117f1a00} id="Vector_3" stroke="var(--stroke-0, #989795)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935316" />
                          <path d="M1.40625 4.67578H9.8241" id="Vector_4" stroke="var(--stroke-0, #989795)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935316" />
                        </IconBackgroundImage1>
                        <div className="h-[16.034px] relative shrink-0 w-[45.553px]" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                            <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.034px] left-[22.7px] text-[#989795] text-[11.224px] text-center top-[0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                              Calendar
                            </p>
                          </div>
                        </div>
                        <IconBackgroundImage1>
                          <path d={svgPaths.p25a69700} id="Vector" stroke="var(--stroke-0, #989795)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.935316" />
                        </IconBackgroundImage1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#16151a] h-[711.909px] relative rounded-[11.224px] shrink-0 w-full" data-name="Container">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start p-[0.802px] relative size-full">
                    <div className="h-[45.697px] relative shrink-0 w-full" data-name="Container">
                      <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-solid inset-0 pointer-events-none" />
                      <div className="absolute border-[#262626] border-r-[0.802px] border-solid h-[44.895px] left-0 top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[64.42px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Sunday
                        </p>
                      </div>
                      <div className="absolute border-[#262626] border-r-[0.802px] border-solid h-[44.895px] left-[155.53px] top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[64.05px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Monday
                        </p>
                      </div>
                      <div className="absolute border-[#262626] border-r-[0.802px] border-solid h-[44.895px] left-[311.05px] top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[64.31px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Tuesday
                        </p>
                      </div>
                      <div className="absolute border-[#262626] border-r-[0.802px] border-solid h-[44.895px] left-[466.59px] top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[64.62px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Wednesday
                        </p>
                      </div>
                      <div className="absolute border-[#262626] border-r-[0.802px] border-solid h-[44.895px] left-[622.12px] top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[64.94px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Thursday
                        </p>
                      </div>
                      <div className="absolute border-[#262626] border-r-[0.802px] border-solid h-[44.895px] left-[777.65px] top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[64.36px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Friday
                        </p>
                      </div>
                      <div className="absolute h-[44.895px] left-[933.18px] top-0 w-[155.53px]" data-name="Container">
                        <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[19.241px] left-[65.41px] text-[#878787] text-[12.827px] text-center top-[14.03px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
                          Saturday
                        </p>
                      </div>
                    </div>
                    <div className="h-[664.609px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute bg-[#16151a] content-stretch flex flex-col h-[112.238px] items-start left-0 pb-[0.802px] pl-[9.62px] pr-[97.688px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <TextBackgroundImageAndText text="29" />
                      </div>
                      <div className="absolute bg-[#16151a] content-stretch flex flex-col h-[112.238px] items-start left-[155.53px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <TextBackgroundImageAndText text="30" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[311.05px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="1" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[466.59px] pb-[0.802px] pl-[9.62px] pr-[97.688px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="2" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[112.238px] items-start left-[622.12px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="3" />
                          </div>
                          <TextBackgroundImageAndText1 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#14cb49] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Site Inspection" additionalClassNames="w-[95.29px]" />
                          <TextBackgroundImageAndText2 text="09:00" additionalClassNames="top-[21.64px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[777.65px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="4" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[933.18px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-0 w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="5" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-0 pb-[0.802px] pl-[9.62px] pr-[97.688px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="6" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[132.28px] items-start left-[155.53px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="7" />
                          </div>
                          <TextBackgroundImageAndText3 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#178fff] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Design Review" additionalClassNames="w-[95.29px]" />
                          <TextBackgroundImageAndText2 text="14:00" additionalClassNames="top-[21.65px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[311.05px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="8" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[132.28px] items-start left-[466.59px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="9" />
                          </div>
                          <TextBackgroundImageAndText3 text="2" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[3.207px] h-[83.377px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#14cb49] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <BackgroundImageAndText2 text="Material Delivery" additionalClassNames="w-[95.283px]" />
                            <TextBackgroundImageAndText2 text="08:00" additionalClassNames="top-[21.65px]" />
                          </div>
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#ff9f2e] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <div className="absolute content-stretch flex gap-[3.207px] h-[12.827px] items-center left-[8.02px] top-[6.41px] w-[95.283px]" data-name="Container">
                              <div className="flex-[1_0_0] h-[12.827px] min-h-px min-w-px relative" data-name="Text">
                                <BackgroundImageAndText3 text="Safety Training" />
                              </div>
                              <IconBackgroundImage2>
                                <path d={svgPaths.p1947bb60} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p103bd300} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p36894a00} id="Vector_3" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.pe7d7280} id="Vector_4" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              </IconBackgroundImage2>
                            </div>
                            <TextBackgroundImageAndText2 text="13:00" additionalClassNames="top-[21.65px]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[622.12px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="10" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[777.65px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="11" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[933.18px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[112.24px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="12" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[175.572px] items-start left-0 pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="13" />
                          </div>
                          <TextBackgroundImageAndText4 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#b479f8] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Budget Meeting" additionalClassNames="w-[95.283px]" />
                          <TextBackgroundImageAndText2 text="10:00" additionalClassNames="top-[21.65px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[175.572px] items-start left-[155.53px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="14" />
                          </div>
                          <TextBackgroundImageAndText4 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#14cb49] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Quality Check" additionalClassNames="w-[95.29px]" />
                          <TextBackgroundImageAndText5 text="11:00" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[175.572px] items-start left-[311.05px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="15" />
                          </div>
                          <TextBackgroundImageAndText1 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#f67011] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <div className="absolute content-stretch flex gap-[3.207px] h-[12.827px] items-center left-[8.02px] top-[6.41px] w-[95.29px]" data-name="Container">
                            <div className="flex-[1_0_0] h-[12.827px] min-h-px min-w-px relative" data-name="Text">
                              <BackgroundImageAndText3 text="Crew Briefing" />
                            </div>
                            <IconBackgroundImage2>
                              <path d={svgPaths.p2b62f680} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              <path d={svgPaths.p34813b00} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              <path d={svgPaths.p284bc720} id="Vector_3" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              <path d={svgPaths.p3cb31ec0} id="Vector_4" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                            </IconBackgroundImage2>
                          </div>
                          <TextBackgroundImageAndText2 text="16:04" additionalClassNames="top-[21.65px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[175.572px] items-start left-[466.59px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#f67011] relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="16" />
                          </div>
                          <TextBackgroundImageAndText4 text="3" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[3.207px] h-[126.669px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#f67011] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <div className="absolute h-[12.827px] left-[8.02px] overflow-clip top-[6.41px] w-[95.283px]" data-name="Text">
                              <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.827px] left-0 text-[9.62px] text-white top-[0.8px] w-[110.635px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`Frame Alignment & Fixing`}</p>
                            </div>
                            <TextBackgroundImageAndText2 text="08:00" additionalClassNames="top-[21.65px]" />
                          </div>
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#178fff] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <BackgroundImageAndText2 text="Client Walkthrough" additionalClassNames="w-[95.283px]" />
                            <TextBackgroundImageAndText2 text="14:00" additionalClassNames="top-[21.65px]" />
                          </div>
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#f67011] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <div className="absolute content-stretch flex gap-[3.207px] h-[12.827px] items-center left-[8.02px] top-[6.41px] w-[95.283px]" data-name="Container">
                              <div className="flex-[1_0_0] h-[12.827px] min-h-px min-w-px relative" data-name="Text">
                                <BackgroundImageAndText3 text="Team Standup" />
                              </div>
                              <IconBackgroundImage2>
                                <path d={svgPaths.p2ffffa90} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p2b4e5680} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p36894a00} id="Vector_3" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p1f004240} id="Vector_4" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              </IconBackgroundImage2>
                            </div>
                            <TextBackgroundImageAndText2 text="16:04" additionalClassNames="top-[21.64px]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[175.572px] items-start left-[622.12px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="17" />
                          </div>
                          <TextBackgroundImageAndText1 text="2" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[3.207px] h-[83.377px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#f67011] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <div className="absolute content-stretch flex gap-[3.207px] h-[12.827px] items-center left-[8.02px] top-[6.41px] w-[95.29px]" data-name="Container">
                              <div className="flex-[1_0_0] h-[12.827px] min-h-px min-w-px relative" data-name="Text">
                                <BackgroundImageAndText3 text="Crew Briefing" />
                              </div>
                              <IconBackgroundImage2>
                                <path d={svgPaths.p2b62f680} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p103bd300} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p3c841050} id="Vector_3" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p1f004240} id="Vector_4" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              </IconBackgroundImage2>
                            </div>
                            <TextBackgroundImageAndText2 text="16:04" additionalClassNames="top-[21.65px]" />
                          </div>
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#ff9f2e] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <div className="absolute h-[12.827px] left-[8.02px] overflow-clip top-[6.41px] w-[95.29px]" data-name="Text">
                              <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[12.827px] left-0 text-[9.62px] text-white top-[0.8px] w-[104.221px]" style={{ fontVariationSettings: "'opsz' 9" }}>
                                Equipment Maintenance
                              </p>
                            </div>
                            <TextBackgroundImageAndText2 text="09:00" additionalClassNames="top-[21.65px]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[175.572px] items-start left-[777.65px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="18" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[175.572px] items-start left-[933.18px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[244.52px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="19" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[132.28px] items-start left-0 pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="20" />
                          </div>
                          <TextBackgroundImageAndText4 text="2" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[3.207px] h-[83.377px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#f67011] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <div className="absolute content-stretch flex gap-[3.207px] h-[12.827px] items-center left-[8.02px] top-[6.41px] w-[95.283px]" data-name="Container">
                              <div className="flex-[1_0_0] h-[12.827px] min-h-px min-w-px relative" data-name="Text">
                                <BackgroundImageAndText3 text="Crew Briefing" />
                              </div>
                              <IconBackgroundImage2>
                                <path d={svgPaths.p2b62f680} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p9d3d98} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p36894a00} id="Vector_3" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                                <path d={svgPaths.p24233100} id="Vector_4" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              </IconBackgroundImage2>
                            </div>
                            <TextBackgroundImageAndText2 text="16:04" additionalClassNames="top-[21.65px]" />
                          </div>
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#b479f8] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <BackgroundImageAndText2 text="Foundation Pour" additionalClassNames="w-[95.283px]" />
                            <TextBackgroundImageAndText2 text="06:00" additionalClassNames="top-[21.65px]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[132.28px] items-start left-[155.53px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="21" />
                          </div>
                          <TextBackgroundImageAndText4 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#178fff] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Architect Meeting" additionalClassNames="w-[95.29px]" />
                          <TextBackgroundImageAndText5 text="11:00" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[132.28px] items-start left-[311.05px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="22" />
                          </div>
                          <TextBackgroundImageAndText1 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#14cb49] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Steel Erection" additionalClassNames="w-[95.29px]" />
                          <TextBackgroundImageAndText2 text="07:00" additionalClassNames="top-[21.65px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[132.28px] items-start left-[466.59px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="23" />
                          </div>
                          <TextBackgroundImageAndText4 text="2" />
                        </div>
                        <div className="content-stretch flex flex-col gap-[3.207px] h-[83.377px] items-start relative shrink-0 w-full" data-name="Container">
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#f67011] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <BackgroundImageAndText2 text="Progress Review" additionalClassNames="w-[95.283px]" />
                            <TextBackgroundImageAndText2 text="15:00" additionalClassNames="top-[21.65px]" />
                          </div>
                          <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                            <div aria-hidden="true" className="absolute border-[#ff9f2e] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                            <BackgroundImageAndText2 text="Safety Audit" additionalClassNames="w-[95.283px]" />
                            <TextBackgroundImageAndText2 text="10:00" additionalClassNames="top-[21.65px]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[622.12px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="24" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[777.65px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="25" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[132.28px] items-start left-[933.18px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[420.09px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="26" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[112.238px] items-start left-0 pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="27" />
                          </div>
                          <TextBackgroundImageAndText4 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#b479f8] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <div className="absolute content-stretch flex gap-[3.207px] h-[12.827px] items-center left-[8.02px] top-[6.41px] w-[95.283px]" data-name="Container">
                            <div className="flex-[1_0_0] h-[12.827px] min-h-px min-w-px relative" data-name="Text">
                              <BackgroundImageAndText3 text="Weekly Planning" />
                            </div>
                            <IconBackgroundImage2>
                              <path d={svgPaths.p6d1d500} id="Vector" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              <path d={svgPaths.p623b100} id="Vector_2" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              <path d={svgPaths.p36894a00} id="Vector_3" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                              <path d={svgPaths.p1b9fe258} id="Vector_4" stroke="var(--stroke-0, #878787)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.668083" />
                            </IconBackgroundImage2>
                          </div>
                          <TextBackgroundImageAndText2 text="09:00" additionalClassNames="top-[21.64px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[155.53px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="28" />
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[311.05px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="29" />
                      </div>
                      <div className="absolute content-stretch flex flex-col gap-[6.414px] h-[112.238px] items-start left-[466.59px] pb-[0.802px] pl-[9.62px] pr-[10.422px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <div className="content-stretch flex h-[22.448px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                          <div className="relative rounded-[13450276px] shrink-0 size-[22.448px]" data-name="Text">
                            <BackgroundImageAndText1 text="30" />
                          </div>
                          <TextBackgroundImageAndText4 text="1" />
                        </div>
                        <div className="bg-[#262626] h-[40.085px] relative rounded-[3.207px] shrink-0 w-full" data-name="Container">
                          <div aria-hidden="true" className="absolute border-[#178fff] border-l-[1.603px] border-solid inset-0 pointer-events-none rounded-[3.207px]" />
                          <BackgroundImageAndText2 text="Month End Review" additionalClassNames="w-[95.283px]" />
                          <TextBackgroundImageAndText2 text="13:00" additionalClassNames="top-[21.64px]" />
                        </div>
                      </div>
                      <div className="absolute content-stretch flex flex-col h-[112.238px] items-start left-[622.12px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <BackgroundImageAndText text="31" />
                      </div>
                      <div className="absolute bg-[#16151a] content-stretch flex flex-col h-[112.238px] items-start left-[777.65px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-r-[0.802px] border-solid inset-0 pointer-events-none" />
                        <TextBackgroundImageAndText text="1" />
                      </div>
                      <div className="absolute bg-[#16151a] content-stretch flex flex-col h-[112.238px] items-start left-[933.18px] pb-[0.802px] pl-[9.62px] pr-[97.695px] pt-[9.62px] top-[552.37px] w-[155.53px]" data-name="CalendarDay">
                        <div aria-hidden="true" className="absolute border-[#262626] border-b-[0.802px] border-solid inset-0 pointer-events-none" />
                        <TextBackgroundImageAndText text="2" />
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#262626] border-[0.802px] border-solid inset-0 pointer-events-none rounded-[11.224px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}