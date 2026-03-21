import { motion } from "motion/react";
import imgRectangle40299 from "@/app/assets/439e715248d6c072b4e144bf39049ca171d38fe2.png";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Establish a single source of truth",
      description:
        "Start building clarity across your projects by uploading existing drawings and defining execution areas. Plans become the foundation for all workforce activity and reporting.",
      bullets: [
        "Project creation and configuration",
        "Plan and drawing uploads",
        "Definition of work zones and areas",
      ],
      image: imgRectangle40299,
      projectName: "Aventura ParkSquare",
      location: "Los Angeles, CA",
      status: "07 Days Remaining",
    },
    {
      number: "02",
      title: "Onboard the workforce without friction",
      description:
        "Each site generates a unique QR code that connects workers directly to the correct project. No accounts, credentials, or manual onboarding site required.",
      bullets: [
        "Site-specific QR generation",
        "Instant worker onboarding",
        "Zero login or setup overhead",
      ],
      image: imgRectangle40299,
      projectName: "Downtown Plaza",
      location: "Los Angeles, CA",
      status: "Yesterday at Site",
    },
    {
      number: "03",
      title: "Capture execution in real time",
      description:
        "As work progresses, activity is captured directly from the site and linked to plans, locations, and time—creating accurate, photo-verified execution data.",
      bullets: [
        "Area-based clock-ins",
        "Task-level tracking",
        "Photo-based proof capture",
        "Issue reporting from the field",
      ],
      image: imgRectangle40299,
      projectName: "Harbor View Plaza",
      location: "Seattle, WA",
      status: "Last week at Site",
    },
    {
      number: "04",
      title: "Monitor sites as work happens",
      description:
        "Managers and teams gain real-time visibility into workforce presence, productivity, and progress across all active sites.",
      bullets: [
        "Live dashboards",
        "Workforce and activity insights",
        "Early detection of delays and issues",
      ],
      image: imgRectangle40299,
      projectName: "Riverside Complex",
      location: "Portland, OR",
      status: "Next week at Site",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium text-[#16151a] mb-4 leading-[1.1]">
            How the <span className="text-[#f67011]">platform works</span> in practice
          </h2>
          <p className="text-base md:text-lg text-[#262626] leading-relaxed max-w-2xl mx-auto">
            A structured workflow that connects plans, people, and proof—turning on-site activity into reliable management insight.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Content */}
              <div className="flex-1 flex gap-6">
                {/* Number Badge and Divider */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-[#262626] rounded-[10px] w-[68px] h-[68px] flex items-center justify-center shrink-0">
                    <span
                      className="text-[39px] font-medium leading-[1.1]"
                      style={{
                        background: "linear-gradient(94.84deg, #f67011 1.95%, #ff9f2e 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Vertical dashed line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block w-0.5 flex-1 min-h-[200px] border-l-2 border-dashed border-[#E0E0E1]" />
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl md:text-4xl lg:text-[48px] font-medium text-[#16151a] mb-4 leading-[1.1]">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-[#262626] leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#f67011] to-[#ff9f2e] shrink-0" />
                        <span className="text-base text-[#262626]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="bg-[#16151a] rounded-[30px] overflow-hidden w-[280px] md:w-[320px] shadow-2xl border border-white/10">
                    {/* Phone Status Bar */}
                    <div className="flex items-center justify-between px-6 py-3 text-white text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                          <div className="w-1 h-2.5 bg-white rounded-sm" />
                          <div className="w-1 h-3 bg-white rounded-sm" />
                          <div className="w-1 h-3.5 bg-white rounded-sm" />
                          <div className="w-1 h-4 bg-white rounded-sm" />
                        </div>
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="white" className="ml-1">
                          <path d="M0 5.5C2.5 2 5 0.5 7.5 0.5C10 0.5 12.5 2 15 5.5C12.5 9 10 10.5 7.5 10.5C5 10.5 2.5 9 0 5.5Z" />
                        </svg>
                        <div className="w-6 h-3 bg-white/35 border border-white rounded-sm ml-1" />
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-4 py-2 flex items-center justify-between backdrop-blur-sm">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path d="M3 5H18M3 10H18M3 15H18" stroke="white" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-red-500 via-orange-500 to-blue-500" />
                        <span className="text-white text-xs font-bold">Stack</span>
                      </div>
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <circle cx="5" cy="5" r="1.3" fill="white" />
                        <circle cx="10.5" cy="5" r="1.3" fill="white" />
                        <circle cx="16" cy="5" r="1.3" fill="white" />
                        <circle cx="5" cy="10.5" r="1.3" fill="white" />
                        <circle cx="10.5" cy="10.5" r="1.3" fill="white" />
                        <circle cx="16" cy="10.5" r="1.3" fill="white" />
                        <circle cx="5" cy="16" r="1.3" fill="white" />
                        <circle cx="10.5" cy="16" r="1.3" fill="white" />
                        <circle cx="16" cy="16" r="1.3" fill="white" />
                      </svg>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-[200px] md:h-[240px]">
                      <img src={step.image} alt={step.projectName} className="w-full h-full object-cover" />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    {/* Project Info Card */}
                    <div className="bg-[#262626] mx-3 -mt-16 relative z-10 rounded-lg p-4 mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="text-white text-sm font-semibold mb-1">{step.projectName}</h4>
                          <p className="text-white/70 text-xs flex items-center gap-1">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                              <path
                                d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7.5 6 11 6 11C6 11 9.5 7.5 9.5 4.5C9.5 2.567 7.933 1 6 1Z"
                                stroke="#14CB49"
                                strokeWidth="1"
                                fill="none"
                              />
                              <circle cx="6" cy="4.5" r="1" fill="#14CB49" />
                            </svg>
                            {step.location}
                          </p>
                        </div>
                        <div className="bg-[#14cb49]/20 px-2 py-1 rounded-full">
                          <span className="text-[#14cb49] text-[10px] font-medium">Active</span>
                        </div>
                      </div>
                      <div className="text-white/60 text-xs">{step.status}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}