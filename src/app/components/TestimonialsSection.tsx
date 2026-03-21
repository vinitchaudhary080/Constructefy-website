import { motion } from "motion/react";

import img1 from "@/app/assets/7c099c24b314556510391c6f89bf13ae86ef4208.png";
import img2 from "@/app/assets/faa7c28468f622ca6432913bd1b338d851ee939e.png";
import img3 from "@/app/assets/818fa522f3c02b93a112715072de5246be375218.png";
import img4 from "@/app/assets/cacb6081eac5d6dab43f57b4174221e6adc14554.png";
import img5 from "@/app/assets/55005efb2c0a8148957acdca0762857e70adcdad.png";
import img6 from "@/app/assets/5aced9fa5db548b1152229fa76dfe97d0de95c61.png";
import img7 from "@/app/assets/e19ec47d8c3bc36d2dbc984e34d0e2303acb7679.png";
import img8 from "@/app/assets/d3a3a61e7bcb246d44c4f15304f086184f3d28b1.png";
import img9 from "@/app/assets/eb9176ec4d22f2f19fdfba8299634ecb145e1036.png";

const TESTIMONIAL_COLUMNS = [
  [
    { name: "Ethan Miller", title: "Operations Head, EPC Company", text: "For the first time, we have clear visibility into who worked where and for how long. Time disputes have dropped significantly.", avatar: img1 },
    { name: "Ava Rodriguez", title: "Senior Engineer, Real Estate Developer", text: "Audit-ready reports and on-site photo proof have made compliance and client reporting much easier for teams.", avatar: img2 },
    { name: "Sophia Chen", title: "Project Manager, Construction Firm", text: "Real-time tracking has dramatically improved our project management, allowing us to allocate resources more effectively.", avatar: img3 },
  ],
  [
    { name: "Liam Johnson", title: "Team Lead, Software Development", text: "We have streamlined communication between teams, leading to increased efficiency in project execution.", avatar: img4 },
    { name: "Mia Smith", title: "Product Owner, Tech Startup", text: "The integration of automated alerts has minimized delays, ensuring projects stay on schedule.", avatar: img5 },
    { name: "Noah Brown", title: "Design Director, Marketing Agency", text: "Enhanced collaboration tools have fostered a culture of innovation and creativity within our teams.", avatar: img6 },
  ],
  [
    { name: "Olivia Davis", title: "Analytics Manager, Financial Services", text: "Our improved data analytics have provided insights that help us anticipate challenges before they arise.", avatar: img7 },
    { name: "James Wilson", title: "Chief Strategy Officer, Consulting Firm", text: "By leveraging predictive modeling, we've increased our strategic planning capabilities significantly.", avatar: img8 },
    { name: "Isabella Martinez", title: "Senior Analyst, Market Research Firm", text: "This shift has empowered our teams to make proactive decisions that enhance overall performance.", avatar: img9 },
  ]
];

export function TestimonialsSection() {
  return (
    <section className="bg-white w-full py-24 px-4 font-['DM_Sans'] relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center relative">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-[10px] items-center text-center max-w-[739px] mx-auto mb-[72px]"
        >
          <h2 className="text-[40px] md:text-[56px] font-medium text-[#16151a] leading-[1.1] tracking-tight text-balance">
            Trusted by <span className="text-[#f67011]">construction teams</span> on the ground
          </h2>
          <p className="text-[#262626] text-[16px] leading-[22px]">
            Everything you need to know before bringing Constructefy to your site.
          </p>
        </motion.div>

        {/* Grid Container with Overlay Mask */}
        <div className="relative w-full h-[650px] md:h-[767px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            {TESTIMONIAL_COLUMNS.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-[25px]">
                {column.map((testimonial, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: (colIndex * 0.1) + (itemIndex * 0.1), duration: 0.6 }}
                    className="bg-[#e8e8e8] rounded-[20px] p-[26px] flex flex-col gap-[30px] w-full"
                  >
                    <p className="text-[#494d4d] text-[18px] leading-[24px] font-normal">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-[50px] h-[50px] rounded-full object-cover shrink-0" 
                      />
                      <div className="flex flex-col">
                        <span className="text-[#131515] text-[18px] font-medium leading-tight">
                          {testimonial.name}
                        </span>
                        <span className="text-[#494d4d] text-[14px] font-normal leading-tight">
                          {testimonial.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Overlay & Button */}
          <div className="absolute bottom-0 left-0 right-0 h-[280px] bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none flex items-end justify-center pb-[50px]">
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1c1b20] text-white px-[34px] py-[16px] rounded-[100px] font-medium text-[16px] pointer-events-auto hover:bg-[#2c2b30] transition-colors shadow-lg"
            >
              View Success Stories
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}