import clsx from "clsx";
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("-translate-y-1/2 absolute flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] text-[14px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}
type PlanBackgroundImageProps = {
  additionalClassNames?: string;
};

function PlanBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<PlanBackgroundImageProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[71px] items-start p-[24px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345.333 1">
          {children}
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex gap-[10px] items-center justify-center px-[103px] py-[12px] relative w-full">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[24px]">{text}</p>
        </div>
        <div className="absolute inset-[0_0.33px_0_0] rounded-[24px]" data-name="Border">
          <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px]" />
        </div>
      </div>
    </div>
  );
}
type LinkPrimaryBackgroundImageAndTextProps = {
  text: string;
};

function LinkPrimaryBackgroundImageAndText({ text }: LinkPrimaryBackgroundImageAndTextProps) {
  return (
    <div className="bg-black relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)] shrink-0 w-full">
      <BackgroundImageAndText text={text} />
    </div>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage1>
      <line id="Line 30" stroke="var(--stroke-0, black)" strokeOpacity="0.1" x2="345.333" y1="0.5" y2="0.5" />
    </BackgroundImage1>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute content-stretch flex flex-col gap-[48px] items-center left-0 top-[242px] w-[1240px]">
        <div className="bg-[rgba(0,0,0,0.1)] h-[48px] overflow-clip relative rounded-[24px] shrink-0 w-[250px]" data-name="Annual">
          <div className="absolute bg-black h-[40px] right-[4px] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[4px] w-[147px]" data-name="Ghost" />
          <BackgroundImage2 additionalClassNames="left-[23.89px] text-[#16151a] top-[23.5px]">Monthly</BackgroundImage2>
          <div className="absolute h-[40px] right-[4px] rounded-[24px] top-[4px] w-[147px]" data-name="Btn 2">
            <BackgroundImage2 additionalClassNames="left-[19.95px] text-white top-[19.5px]">Annual</BackgroundImage2>
            <div className="absolute h-[20px] left-[73.34px] overflow-clip top-[10px] w-[61.72px]" data-name="Tag Wrapper">
              <div className="absolute bottom-0 left-0 overflow-clip rounded-[10px] top-0 w-[61.72px]" data-name="Variant 1" style={{ backgroundImage: "linear-gradient(106.474deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }}>
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] left-[calc(50%+0.18px)] text-[10px] text-black text-center top-[10px] uppercase w-[50.072px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[15px]">Save 20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full">
          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[20px]" data-name="Plan">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[47px] items-center p-[24px] relative w-full">
                <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[10px] items-start relative shrink-0 tracking-[-0.64px] w-[147.861px] whitespace-nowrap">
                      <p className="leading-[38.4px] relative shrink-0 text-[32px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Starter
                      </p>
                      <p className="leading-[normal] relative shrink-0 text-[#f67011] text-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        $0/month
                      </p>
                    </div>
                    <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                      For teams getting started with basic site visibility and workforce tracking across a small number of projects.
                    </p>
                  </div>
                  <BackgroundImage />
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Up to 2 projects
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Variant 1">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Up to 10 workers
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Worker app access (always free)
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        QR-based workforce onboarding
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 2">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Attendance tracking
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Variant 3">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Photo-based proof of work
                      </p>
                    </div>
                    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 4">
                      <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Project performance analytics
                      </p>
                    </div>
                  </div>
                </div>
                <LinkPrimaryBackgroundImageAndText text="Start Free" />
              </div>
            </div>
          </div>
          <PlanBackgroundImage additionalClassNames="bg-[#1a1a1a]">
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[10px] items-start relative shrink-0 tracking-[-0.64px] w-[147.861px] whitespace-nowrap">
                  <p className="leading-[38.4px] relative shrink-0 text-[32px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Growth
                  </p>
                  <p className="leading-[normal] relative shrink-0 text-[#f67011] text-[28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    $99/month
                  </p>
                </div>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  For growing teams looking for advanced tracking and reporting capabilities.
                </p>
              </div>
              <BackgroundImage1>
                <line id="Line 30" stroke="var(--stroke-0, white)" strokeOpacity="0.1" x2="345.333" y1="0.5" y2="0.5" />
              </BackgroundImage1>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Up to 15 projects
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Unlimited workers
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Worker app access
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    QR-based workforce onboarding
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 2">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Attendance tracking
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Variant 3">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Photo-based proof of work
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 4">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Project performance analytics
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.2)] shrink-0 w-full" data-name="Link - Primary" style={{ backgroundImage: "linear-gradient(124.584deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }}>
              <BackgroundImageAndText text="Start Free" />
            </div>
            <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center overflow-clip px-[8px] py-[3px] right-[29.62px] rounded-[20px] top-[calc(50%-263px)]" data-name="Variant 1" style={{ backgroundImage: "linear-gradient(112.995deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }}>
              <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-black text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[15px]">most popular</p>
              </div>
            </div>
          </PlanBackgroundImage>
          <PlanBackgroundImage additionalClassNames="bg-white">
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[10px] items-start relative shrink-0 tracking-[-0.64px] w-[147.861px]">
                  <p className="leading-[38.4px] relative shrink-0 text-[32px] text-black w-[148px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Pro
                  </p>
                  <p className="leading-[normal] relative shrink-0 text-[#f67011] text-[28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    $249/month
                  </p>
                </div>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  For larger organizations needing premium features and custom solutions.
                </p>
              </div>
              <BackgroundImage />
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Unlimited projects
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Unlimited workers
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Worker app access
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 1">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    QR-based workforce onboarding
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 2">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Attendance tracking
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Variant 3">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Photo-based proof of work
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="Variant 4">
                  <div className="rounded-[3px] shrink-0 size-[6px]" data-name="Bullet" style={{ backgroundImage: "linear-gradient(95.4738deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }} />
                  <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Project performance analytics
                  </p>
                </div>
              </div>
            </div>
            <LinkPrimaryBackgroundImageAndText text="Start Free" />
          </PlanBackgroundImage>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-1/2 text-center top-0 w-[808px]">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#16151a] text-[56px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[1.1]">Workers are always free. Companies pay for visibility.</p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#262626] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[22px]">Constructefy fits into your existing construction workflow by connecting project plans, workforce activity, and on-site proof in a single system—without disrupting how teams work on the ground.</p>
        </div>
      </div>
    </div>
  );
}