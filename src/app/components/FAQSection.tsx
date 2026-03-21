import { motion } from "motion/react";
import svgPaths from "../../imports/svg-lhpid86qs0";

const QA_LIST = [
  {
    q: "Who is Constructefy for?",
    a: "Constructefy is designed for construction companies, contractors, developers, and EPCs who need better visibility, control, and proof across one or multiple sites."
  },
  {
    q: "Is worker training required?",
    a: "No formal training is needed. The worker app is simple, intuitive, and built for quick on-site adoption with minimal guidance."
  },
  {
    q: "What features does Constructefy offer?",
    a: "Constructefy includes real-time reporting, project tracking, resource management, and compliance checks to streamline construction operations."
  },
  {
    q: "How does Constructefy ensure data security?",
    a: "Constructefy employs encryption, regular security audits, and user access controls to safeguard project data."
  },
  {
    q: "Can Constructefy integrate with other software?",
    a: "Yes, Constructefy can seamlessly integrate with various project management and accounting software to enhance workflow and data consistency."
  }
];

function LogoAvatar() {
  const paths = svgPaths as any;
  return (
    <div className="w-[30px] h-[29px] relative">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.7985 27.7631">
        {paths?.p15c64480 && <path d={paths.p15c64480} fill="#F67011" />}
        {(paths?.p2f7b4f00 || paths?.p811dc00) && <path d={paths.p2f7b4f00 || paths.p811dc00} fill="#14CB49" />}
        {(paths?.p3d7e6500 || paths?.p80eb180) && <path d={paths.p3d7e6500 || paths.p80eb180} fill="#FF9F2E" />}
        {paths?.p147b1c80 && <path d={paths.p147b1c80} fill="#F84241" />}
        {paths?.p2ebded80 && (
          <g>
            <path d={paths.p2ebded80} fill="#178FFF" />
            <path d={paths.p2ebded80} fill="black" fillOpacity="0.2" />
          </g>
        )}
      </svg>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-white w-full py-24 px-4 font-['DM_Sans'] relative z-10 overflow-hidden">
      <div className="max-w-[953px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-[10px] items-center text-center max-w-[739px] mx-auto mb-16 md:mb-20"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#16151a] leading-[1.1] tracking-tight text-balance">
            You ask questions,<br />
            we <span className="text-[#f67011]">answer them</span>
          </h2>
          <p className="text-[#262626] text-[16px] leading-[22px]">
            Everything you need to know before bringing Constructefy to your site.
          </p>
        </motion.div>

        {/* Q&A List */}
        <div className="w-full flex flex-col gap-10 md:gap-14">
          {QA_LIST.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 w-full">
              
              {/* Question */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex justify-start"
              >
                <div className="bg-[#f67011] text-black font-medium text-[16px] leading-[24px] px-[24px] py-[13px] rounded-[30px] max-w-[90%] md:max-w-[80%] inline-block shadow-sm">
                  {item.q}
                </div>
              </motion.div>
              
              {/* Answer */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end items-start gap-2"
              >
                <div className="bg-[#e8e8e8] p-[24px] rounded-tl-[20px] rounded-tr-[6px] rounded-bl-[20px] rounded-br-[20px] text-[#16151a] text-[16px] leading-[22px] max-w-[480px] w-full shadow-sm border border-[#fbfbfb]">
                  {item.a}
                </div>
                <div className="w-[48px] h-[48px] rounded-full bg-[#16151a] flex items-center justify-center shrink-0 shadow-sm hidden sm:flex">
                  <LogoAvatar />
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}