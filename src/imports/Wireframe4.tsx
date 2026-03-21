import clsx from "clsx";
import imgImage from "@/app/assets/e4d87e0dfd7102b1c760f168040652be29c9e9ff.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#fbfbfb] text-[16px] w-full">
      <p className="leading-[22px]">{children}</p>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className={clsx("flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap", additionalClassNames)}>
      <p className="leading-[20px]">{children}</p>
    </div>
  );
}
type BtnBackgroundImageAndTextProps = {
  text: string;
};

function BtnBackgroundImageAndText({ text }: BtnBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[24px] shrink-0">
      <BackgroundImage additionalClassNames="text-white">{text}</BackgroundImage>
    </div>
  );
}

export default function Wireframe() {
  return (
    <div className="bg-black relative size-full" data-name="Wireframe - 4">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start leading-[0] left-[calc(50%+0.5px)] text-center top-[121px] w-[633px]">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[56px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p>
            <span className="leading-[1.1]">{`Solutions that `}</span>
            <span className="leading-[1.1] text-[#f67011]">scale</span>
            <span className="leading-[1.1]">{` with your `}</span>
            <span className="leading-[1.1] text-[#f67011]">company</span>
          </p>
        </div>
        <BackgroundImage1>Whether you’re managing a few sites or large-scale operations, Constructefy delivers the right level of control as your organization grows.</BackgroundImage1>
      </div>
      <div className="absolute h-[618px] left-[120px] overflow-clip rounded-[16px] top-[444px] w-[1200px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[16px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgImage} />
          <div className="absolute inset-0 rounded-[16px]" style={{ backgroundImage: "linear-gradient(-90deg, rgba(25, 25, 25, 0) 0%, rgb(25, 25, 25) 100%)" }} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[40px] top-[40px] w-[537px]">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[48px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="leading-[1.1]">{`Small `}</span>
            <span className="leading-[1.1] text-[#f67011]">Contractors</span>
          </p>
          <BackgroundImage1>Small contractors often manage sites through manual tracking and informal coordination, making it difficult to maintain consistent visibility and avoid disputes as daily work progresses.</BackgroundImage1>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[40px] top-[366px] w-[640px]">
          <div className="backdrop-blur-[15px] bg-[rgba(19,21,21,0.3)] relative rounded-[16px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_20px_0px_rgba(19,21,21,0.3)]" />
            <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[15px] text-white w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                At this stage, teams need a simple way to gain visibility without adding operational complexity. Constructefy enables quick project setup, effortless worker onboarding through QR codes, and basic attendance and proof capture—helping teams stay organized and reduce disputes from day one.
              </p>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start overflow-clip px-[34px] py-[16px] relative rounded-[100px] shrink-0" data-name="Link - Default">
            <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#16151a] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              <p className="leading-[24px]">Start Free</p>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.1)] content-stretch flex items-center left-[calc(50%+0.5px)] overflow-clip p-[6px] rounded-[24px] top-[357px]" data-name="Annual">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[24px] shrink-0" data-name="Btn 4" style={{ backgroundImage: "linear-gradient(110.853deg, rgb(246, 112, 17) 1.9549%, rgb(255, 159, 46) 100%)" }}>
          <BackgroundImage additionalClassNames="text-[#16151a]">Small Contractors</BackgroundImage>
        </div>
        <BtnBackgroundImageAndText text="Mid-Size Builders" />
        <BtnBackgroundImageAndText text="Large Enterprises" />
      </div>
    </div>
  );
}