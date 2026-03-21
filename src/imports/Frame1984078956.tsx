import imgAvatarE0DlVq4CHxgNchbshOdAc7MG7WJpg from "@/app/assets/7c099c24b314556510391c6f89bf13ae86ef4208.png";
import imgAvatarHYfCvJ3IVdEznEOwIQiiAxWOsPyJpg from "@/app/assets/faa7c28468f622ca6432913bd1b338d851ee939e.png";
import imgAvatarPfX9Sn5QRme6ICfMisneY4YIt7IJpg from "@/app/assets/818fa522f3c02b93a112715072de5246be375218.png";
import imgAvatarBphS41HVtvFcNiuHkZkxk8ImJkJpg from "@/app/assets/cacb6081eac5d6dab43f57b4174221e6adc14554.png";
import imgAvatarCyc5Vq0ZcK8UEe5JBbm51FtJq0Jpg from "@/app/assets/55005efb2c0a8148957acdca0762857e70adcdad.png";
import imgAvatarGDcaZh5Xt6HqSu2VbK2SnAwJpg from "@/app/assets/5aced9fa5db548b1152229fa76dfe97d0de95c61.png";
import imgAvatarP0SSNnMlhW7AdaGkZFmKhl828BYJpg from "@/app/assets/e19ec47d8c3bc36d2dbc984e34d0e2303acb7679.png";
import imgAvatarAvatar from "@/app/assets/d3a3a61e7bcb246d44c4f15304f086184f3d28b1.png";
import imgAvatarW13V3Wo2YwDah4YBxCcZc70EsJpg from "@/app/assets/eb9176ec4d22f2f19fdfba8299634ecb145e1036.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ fontVariationSettings: "'opsz' 14" }} className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#494d4d] text-[18px] w-full">
      <p className="leading-[24px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[25px] shrink-0 size-[50px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">{children}</div>
    </div>
  );
}

function Desktop({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[20px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start p-[26px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type InfoProps = {
  text: string;
  text1: string;
};

function Info({ text, text1 }: InfoProps) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start leading-[0] overflow-clip relative shrink-0">
      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[22px] justify-center relative shrink-0 text-[#131515] text-[18px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="flex flex-col font-['DM_Sans:9pt_Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#494d4d] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        <p className="leading-[normal]">{text1}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative size-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] relative shrink-0 text-center w-[739px]">
        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#16151a] text-[0px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="text-[56px]">
            <span className="leading-[1.1]">{`Trusted by `}</span>
            <span className="leading-[1.1] text-[#f67011]">construction teams</span>
            <span className="leading-[1.1]">{` on the ground`}</span>
          </p>
        </div>
        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#262626] text-[16px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[22px]">Everything you need to know before bringing Constructefy to your site.</p>
        </div>
      </div>
      <div className="h-[767px] relative shrink-0 w-full">
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[120px] top-0 w-[380px]">
          <Desktop>
            <Wrapper1>For the first time, we have clear visibility into who worked where and for how long. Time disputes have dropped significantly.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarE0DlVq4CHxgNchbshOdAc7MG7WJpg} />
                </Wrapper>
                <Info text="Ethan Miller" text1="Operations Head, EPC Company" />
              </div>
            </div>
          </Desktop>
          <Desktop>
            <Wrapper1>Audit-ready reports and on-site photo proof have made compliance and client reporting much easier for teams.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarHYfCvJ3IVdEznEOwIQiiAxWOsPyJpg} />
                </Wrapper>
                <Info text="Ava Rodriguez" text1="Senior Engineer, Real Estate Developer" />
              </div>
            </div>
          </Desktop>
          <Desktop>
            <Wrapper1>Real-time tracking has dramatically improved our project management, allowing us to allocate resources more effectively.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarPfX9Sn5QRme6ICfMisneY4YIt7IJpg} />
                </Wrapper>
                <Info text="Sophia Chen" text1="Project Manager, Construction Firm" />
              </div>
            </div>
          </Desktop>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[530px] top-0 w-[380px]">
          <Desktop>
            <Wrapper1>We have streamlined communication between teams, leading to increased efficiency in project execution.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarBphS41HVtvFcNiuHkZkxk8ImJkJpg} />
                </Wrapper>
                <Info text="Liam Johnson" text1="Team Lead, Software Development" />
              </div>
            </div>
          </Desktop>
          <Desktop>
            <Wrapper1>The integration of automated alerts has minimized delays, ensuring projects stay on schedule.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarCyc5Vq0ZcK8UEe5JBbm51FtJq0Jpg} />
                </Wrapper>
                <Info text="Mia Smith" text1="Product Owner, Tech Startup" />
              </div>
            </div>
          </Desktop>
          <Desktop>
            <Wrapper1>Enhanced collaboration tools have fostered a culture of innovation and creativity within our teams.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarGDcaZh5Xt6HqSu2VbK2SnAwJpg} />
                </Wrapper>
                <Info text="Noah Brown" text1="Design Director, Marketing Agency" />
              </div>
            </div>
          </Desktop>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[940px] top-0 w-[380px]">
          <Desktop>
            <Wrapper1>Our improved data analytics have provided insights that help us anticipate challenges before they arise.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarP0SSNnMlhW7AdaGkZFmKhl828BYJpg} />
                </Wrapper>
                <Info text="Olivia Davis" text1="Analytics Manager, Financial Services" />
              </div>
            </div>
          </Desktop>
          <Desktop>
            <Wrapper1>{`By leveraging predictive modeling, we've increased our strategic planning capabilities significantly.`}</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarAvatar} />
                </Wrapper>
                <Info text="James Wilson" text1="Chief Strategy Officer, Consulting Firm" />
              </div>
            </div>
          </Desktop>
          <Desktop>
            <Wrapper1>This shift has empowered our teams to make proactive decisions that enhance overall performance.</Wrapper1>
            <div className="h-[50px] overflow-clip relative shrink-0 w-full" data-name="Bottom">
              <div className="absolute bottom-0 content-stretch flex gap-[10px] items-center left-0 overflow-clip" data-name="Top">
                <Wrapper>
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAvatarW13V3Wo2YwDah4YBxCcZc70EsJpg} />
                </Wrapper>
                <Info text="Isabella Martinez" text1="Senior Analyst, Market Research Firm" />
              </div>
            </div>
          </Desktop>
        </div>
        <div className="-translate-x-1/2 absolute bg-[#f7f7f7] blur-[32px] bottom-0 h-[163px] left-1/2 w-[1440px]" data-name="Overlay" />
        <div className="-translate-x-1/2 absolute bg-[#1c1b20] bottom-[50px] content-stretch flex flex-col items-start left-[calc(50%+0.5px)] overflow-clip px-[34px] py-[16px] rounded-[100px]" data-name="Link - Default">
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[24px]">View Success Stories</p>
          </div>
        </div>
      </div>
    </div>
  );
}