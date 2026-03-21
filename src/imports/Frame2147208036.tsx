import clsx from "clsx";
import svgPaths from "./svg-ucars7i5iv";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
        <g id="Layer 1">{children}</g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <Wrapper additionalClassNames="inset-[2.37%_1.97%_1.89%_2.03%]">
      <path d={svgPaths.p15c64480} fill="var(--fill-0, #F67011)" id="Vector" />
      <path d={svgPaths.p2f7b4f00} fill="var(--fill-0, #14CB49)" id="Vector_2" />
      <path d={svgPaths.p3d7e6500} fill="var(--fill-0, #FF9F2E)" id="Vector_3" />
      <path d={svgPaths.p147b1c80} fill="var(--fill-0, #F84241)" id="Vector_4" />
      <g id="Vector_5">
        <path d={svgPaths.p2ebded80} fill="var(--fill-0, #178FFF)" />
        <path d={svgPaths.p2ebded80} fill="var(--fill-1, black)" fillOpacity="0.2" />
      </g>
    </Wrapper>
  );
}

function Layer() {
  return (
    <Wrapper additionalClassNames="inset-[2.36%_1.97%_1.9%_2.03%]">
      <path d={svgPaths.p15c64480} fill="var(--fill-0, #F67011)" id="Vector" />
      <path d={svgPaths.p811dc00} fill="var(--fill-0, #14CB49)" id="Vector_2" />
      <path d={svgPaths.p80eb180} fill="var(--fill-0, #FF9F2E)" id="Vector_3" />
      <path d={svgPaths.p147b1c80} fill="var(--fill-0, #F84241)" id="Vector_4" />
      <g id="Vector_5">
        <path d={svgPaths.p2ebded80} fill="var(--fill-0, #178FFF)" />
        <path d={svgPaths.p2ebded80} fill="var(--fill-1, black)" fillOpacity="0.2" />
      </g>
    </Wrapper>
  );
}
type AnswerTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AnswerText({ text, additionalClassNames = "" }: AnswerTextProps) {
  return (
    <div className={clsx("bg-[#e8e8e8] relative rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[6px] shrink-0 w-[480px]", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[22px] left-[24px] text-[#16151a] text-[16px] top-[24px] w-[431px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          {text}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#fbfbfb] border-solid inset-0 pointer-events-none rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[6px]" />
    </div>
  );
}
type QuestionWrapperDesktopTextProps = {
  text: string;
};

function QuestionWrapperDesktopText({ text }: QuestionWrapperDesktopTextProps) {
  return (
    <div className="absolute bg-[#f67011] content-stretch flex items-center justify-center left-0 overflow-clip px-[24px] py-[13px] rounded-[30px] top-0">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[24px]">{text}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[64px] items-center left-[244px] top-[70px] w-[953px]">
        <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 text-center w-[739px]">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#16151a] text-[0px] text-[56px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.1] mb-0">You ask questions,</p>
            <p>
              <span className="leading-[1.1]">{`we `}</span>
              <span className="leading-[1.1] text-[#f67011]">answer them</span>
            </p>
          </div>
          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#262626] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[22px]">Everything you need to know before bringing Constructefy to your site.</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
          <div className="h-[184px] relative shrink-0 w-full">
            <QuestionWrapperDesktopText text="Who is Constructefy for?" />
            <div className="absolute content-stretch flex gap-[8px] items-start right-0 top-[64px]">
              <AnswerText text="Constructefy is designed for construction companies, contractors, developers, and EPCs who need better visibility, control, and proof across one or multiple sites." additionalClassNames="h-[120px]" />
              <div className="bg-[#16151a] overflow-clip relative rounded-[48px] shrink-0 size-[48px]" data-name="Variant 1 → Picture → Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29px] left-[calc(50%-1px)] overflow-clip top-1/2 w-[30px]" data-name="assets 3 1">
                  <Layer />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[184px] relative shrink-0 w-full">
            <QuestionWrapperDesktopText text="Is worker training required?" />
            <div className="absolute content-stretch flex gap-[8px] items-start right-0 top-[64px]">
              <AnswerText text="No formal training is needed. The worker app is simple, intuitive, and built for quick on-site adoption with minimal guidance." additionalClassNames="h-[120px]" />
              <div className="bg-[#16151a] overflow-clip relative rounded-[48px] shrink-0 size-[48px]" data-name="Variant 1 → Picture → Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29px] left-[calc(50%-1px)] overflow-clip top-1/2 w-[30px]" data-name="assets 3 1">
                  <Layer />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[184px] relative shrink-0 w-full">
            <QuestionWrapperDesktopText text="What features does Constructefy offer?" />
            <div className="absolute content-stretch flex gap-[8px] items-start right-0 top-[64px]">
              <AnswerText text="Constructefy includes real-time reporting, project tracking, resource management, and compliance checks to streamline construction operations." additionalClassNames="h-[120px]" />
              <div className="bg-[#16151a] overflow-clip relative rounded-[48px] shrink-0 size-[48px]" data-name="Variant 1 → Picture → Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29px] left-[calc(50%-1px)] overflow-clip top-1/2 w-[30px]" data-name="assets 3 1">
                  <Layer />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[156px] relative shrink-0 w-full">
            <QuestionWrapperDesktopText text="How does Constructefy ensure data security?" />
            <div className="absolute content-stretch flex gap-[8px] items-start right-0 top-[64px]">
              <AnswerText text="Constructefy employs encryption, regular security audits, and user access controls to safeguard project data." additionalClassNames="h-[92px]" />
              <div className="bg-[#16151a] overflow-clip relative rounded-[48px] shrink-0 size-[48px]" data-name="Variant 1 → Picture → Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29px] left-[calc(50%-1px)] overflow-clip top-1/2 w-[30px]" data-name="assets 3 1">
                  <Layer1 />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[184px] relative shrink-0 w-full">
            <QuestionWrapperDesktopText text="Can Constructefy integrate with other software?" />
            <div className="absolute content-stretch flex gap-[8px] items-start right-0 top-[64px]">
              <AnswerText text="Yes, Constructefy can seamlessly integrate with various project management and accounting software to enhance workflow and data consistency." additionalClassNames="h-[120px]" />
              <div className="bg-[#16151a] overflow-clip relative rounded-[48px] shrink-0 size-[48px]" data-name="Variant 1 → Picture → Avatar">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29px] left-[calc(50%-1px)] overflow-clip top-1/2 w-[30px]" data-name="assets 3 1">
                  <Layer1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}