import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    title: "Set up projects",
    description:
      "Companies create projects and define site details, locations, and basic configurations in minutes, establishing a structured foundation before work begins.",
  },
  {
    title: "Upload plans",
    description:
      "Drawings, floor plans, and execution zones are added once so site activity can always be tied back to the correct scope of work.",
  },
  {
    title: "Onboard workers via QR",
    description:
      "Teams join the right site instantly through QR-based onboarding, removing the friction of logins, spreadsheets, and manual setup.",
  },
  {
    title: "Execute work on site",
    description:
      "Workforce activity is captured as work happens, connecting people, location, and proof directly from the field.",
  },
  {
    title: "Track progress and decide",
    description:
      "Managers review progress, identify delays early, and make decisions with a clear operational record instead of assumptions.",
  },
];

const weekdayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const mobileWeekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

const eventMap: Record<number, Array<{ title: string; time: string; accent: string }>> = {
  7: [{ title: "Design Review", time: "14:00", accent: "#5a7ca9" }],
  9: [
    { title: "Material Delivery", time: "08:00", accent: "#1ee07b" },
    { title: "Safety Training", time: "13:00", accent: "#ff9d2e" },
  ],
  13: [{ title: "Budget Meeting", time: "10:00", accent: "#9f72ff" }],
  14: [{ title: "Quality Check", time: "11:00", accent: "#7cff77" }],
  15: [{ title: "Crew Briefing", time: "16:04", accent: "#ffb457" }],
  16: [
    { title: "Frame Alignment", time: "08:00", accent: "#ff8f1f" },
    { title: "Client Walkthrough", time: "14:00", accent: "#2696ff" },
    { title: "Team Standup", time: "16:04", accent: "#ff8f1f" },
  ],
};

const dayCounters: Record<number, number> = {
  8: 1,
  13: 1,
  14: 1,
  15: 1,
  20: 2,
  21: 1,
  22: 1,
};

export function HomeWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f6f5f3] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px]"
        >
          <div className="space-y-5">
            <h2
              className="text-[3rem] font-medium leading-[0.95] tracking-[-0.05em] text-[#1a1a1f] sm:text-[4rem] lg:text-[4.75rem]"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
            >
              <span className="block">How Constructefy</span>
              <span className="block text-[#f97316]">Works</span>
            </h2>
            <p className="max-w-[500px] text-[1.02rem] leading-[1.45] text-[#383838] sm:text-[1.1rem]">
              Constructefy fits into your existing construction workflow by connecting project plans, workforce activity,
              and on-site proof in a single system without disrupting how teams work on the ground.
            </p>
          </div>

          <div className="mt-10 h-px w-full bg-[#d9d5d0]">
            <div
              className="h-full bg-[#ff6d00] transition-all duration-300"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="mt-4">
            {steps.map((step, index) => {
              const isActive = index === activeStep;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="block w-full border-b border-[#d9d5d0] py-5 text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eceae7] text-sm font-medium text-[#5a5a5a]">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[#16151a] sm:text-[1.55rem]">
                        {step.title}
                      </div>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isActive ? "grid-rows-[1fr] pt-3 opacity-100" : "grid-rows-[0fr] pt-0 opacity-70"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[520px] text-[1rem] leading-[1.45] text-[#454545] sm:text-[1.08rem]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          <div className="overflow-hidden rounded-[26px] bg-[#17171b] shadow-[0_30px_80px_rgba(15,15,20,0.18)] ring-1 ring-black/6">
            <div className="border-b border-white/4 px-5 py-5 sm:px-8">
              <div className="flex items-center gap-3 text-white">
                <ChevronLeft className="h-5 w-5 stroke-[2]" />
                <h3 className="text-[1.12rem] font-semibold tracking-[-0.02em] sm:text-[1.55rem]">
                  Glass Facade Installation
                </h3>
              </div>
            </div>

            <div className="px-4 pb-4 pt-5 sm:px-8 sm:pb-8">
              <div className="mb-4 inline-flex items-center gap-3 rounded-[10px] border border-white/6 bg-[#1e1e22] px-4 py-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <ChevronLeft className="h-4 w-4 stroke-[2]" />
                <span className="text-[1rem] font-medium sm:text-[1.05rem]">October 2025</span>
                <ChevronRight className="h-4 w-4 stroke-[2]" />
              </div>

              <div className="overflow-hidden rounded-[18px] border border-white/6 bg-[#17171b]">
                <div className="grid grid-cols-7 border-b border-white/6 text-[10px] text-white/45 sm:text-[0.96rem]">
                  {weekdayLabels.map((label, index) => (
                    <div
                      key={label}
                      className="flex min-h-[42px] items-center justify-center border-r border-white/6 px-1 text-center last:border-r-0"
                    >
                      <span className="hidden sm:inline">{label}</span>
                      <span className="sm:hidden">{mobileWeekdayLabels[index]}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7">
                  {calendarDays.map((day, index) => {
                    const events = eventMap[day] ?? [];
                    const counter = dayCounters[day];
                    const isCurrentDay = day === 16;

                    return (
                      <div
                        key={`${day}-${index}`}
                        className="relative min-h-[108px] border-r border-b border-white/6 bg-[#17171b] p-2 last:border-r-0 sm:min-h-[154px] sm:p-3"
                      >
                        <div className="flex items-start justify-between">
                          <span
                            className={`text-[0.92rem] ${
                              isCurrentDay
                                ? "flex h-7 w-7 items-center justify-center rounded-full bg-[#ff7a1a] text-white"
                                : "text-white/72"
                            }`}
                          >
                            {day}
                          </span>
                          {counter ? (
                            <span className="rounded-[4px] bg-white/8 px-1.5 py-0.5 text-[0.6rem] text-white/55 sm:text-[0.7rem]">
                              {counter}
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-2 space-y-2 sm:mt-3">
                          {events.map((event) => (
                            <div
                              key={`${day}-${event.title}`}
                              className="rounded-[4px] bg-[#2a2a2b] px-2 py-2 shadow-[inset_3px_0_0_var(--accent-color)]"
                              style={{ ["--accent-color" as string]: event.accent }}
                            >
                              <div className="truncate text-[0.58rem] leading-tight text-white/90 sm:text-[0.74rem]">
                                {event.title}
                              </div>
                              <div className="mt-1 text-[0.55rem] leading-none text-white/45 sm:text-[0.66rem]">
                                {event.time}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
