import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  BarChart3,
  ChevronRight,
  FileText,
  FolderKanban,
  Hammer,
  LifeBuoy,
  Search,
  ShieldCheck,
  Smartphone,
  Users,
  Wifi,
} from "lucide-react";

type TopicCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type FaqCategory = {
  id: string;
  label: string;
  accent?: boolean;
  questions: string[];
};

const searchTags = [
  "Getting Started",
  "Projects & Sites",
  "Dashboards",
  "Connectivity Issues",
  "Billing & Licensing",
];

const topicCards: TopicCard[] = [
  {
    title: "Set Up Your First Project",
    description:
      "Create projects, upload plans, define work areas, and get your site ready for execution tracking.",
    icon: FolderKanban,
  },
  {
    title: "Manage Users & Access",
    description:
      "Control user accounts, roles, permissions, and organization-level settings securely.",
    icon: Users,
  },
  {
    title: "Onboard Devices & Workers",
    description:
      "Set up mobile devices, onboard workers via QR codes, and ensure smooth access on site.",
    icon: Smartphone,
  },
  {
    title: "Connectivity & Offline Usage",
    description:
      "Understand network requirements, offline behavior, and data syncing best practices for sites.",
    icon: Wifi,
  },
  {
    title: "Dashboards & Site Reports",
    description:
      "Use live dashboards and reports to monitor attendance, productivity, and site performance.",
    icon: BarChart3,
  },
  {
    title: "Fix Common Issues",
    description:
      "Troubleshoot device, syncing, and usage issues quickly with guided diagnostics.",
    icon: Hammer,
  },
  {
    title: "Plans, Areas & Execution Flow",
    description:
      "Upload drawings, define site areas, and link daily execution directly to plans.",
    icon: FileText,
  },
  {
    title: "Security, Roles & Compliance",
    description:
      "Learn how data is protected and how to manage access, permissions, and audit visibility.",
    icon: ShieldCheck,
  },
  {
    title: "Help, Support & Resources",
    description:
      "Find documentation, contact support, and access additional resources for your team.",
    icon: LifeBuoy,
  },
];

const faqCategories: FaqCategory[] = [
  {
    id: "home",
    label: "Home",
    accent: true,
    questions: [
      "How do I set up a new project?",
      "Why is a worker showing as offline?",
      "How do workers join a site?",
      "Where can I see live site activity?",
      "How is work time tracked?",
      "What is the process for adding new workers?",
      "How do I manage user permissions?",
      "Where can I find project templates?",
      "How do I generate reports for completed tasks?",
    ],
  },
  {
    id: "projects",
    label: "Projects & Sites",
    questions: [
      "How do I create a site and assign work zones?",
      "Can I upload revised plan versions later?",
      "How do I archive an inactive project?",
      "How do I assign workers to different areas?",
      "Can I duplicate an existing project setup?",
      "Where do I update site addresses and access details?",
      "How do I control who can edit plans and areas?",
      "What happens when multiple teams work on one site?",
      "How do I export project-level activity records?",
    ],
  },
  {
    id: "dashboards",
    label: "Dashboards & Reports",
    questions: [
      "How often does dashboard data refresh?",
      "Can I filter reports by site, date, or worker?",
      "How do I compare daily and weekly progress?",
      "Where can I download attendance records?",
      "Can I share a dashboard with leadership?",
      "How do I track unresolved issues from reports?",
      "What metrics are available for worker activity?",
      "How do I view photo-proof submissions?",
      "Can I export reports to PDF or CSV?",
    ],
  },
  {
    id: "users",
    label: "User Management",
    accent: true,
    questions: [
      "How do I invite a manager to my organization?",
      "What roles are available in Constructefy?",
      "How do I remove access for a former employee?",
      "Can one user manage multiple projects?",
      "How do I reset a user login issue?",
      "What permissions are required to edit billing?",
      "How do I audit role changes across the team?",
      "Can I limit a user to one site only?",
      "How do I manage contractor access separately?",
    ],
  },
  {
    id: "settings",
    label: "Settings",
    questions: [
      "How do I update organization settings?",
      "Where do I manage notification preferences?",
      "Can I customize work status labels?",
      "How do I change date and time formats?",
      "Where can I configure default reporting windows?",
      "How do I update company branding assets?",
      "Can I control mobile app restrictions from settings?",
      "How do I turn on required photo capture?",
      "How do I configure approval workflows?",
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    questions: [
      "Which analytics help identify labor bottlenecks?",
      "How do I review issue frequency by area?",
      "Can I measure execution speed across teams?",
      "Where can I see trends over time?",
      "How do I compare planned versus actual progress?",
      "Can analytics show high-risk work zones?",
      "How do I read worker productivity breakdowns?",
      "Can I export charts for presentations?",
      "How do I benchmark one site against another?",
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    accent: true,
    questions: [
      "Does Constructefy integrate with payroll systems?",
      "How do I connect reporting tools or BI dashboards?",
      "Can I sync project data with internal systems?",
      "How are API credentials managed securely?",
      "What data can be imported into a new account?",
      "Can integrations run on a schedule?",
      "How do I validate data after an integration sync?",
      "What happens when a sync fails?",
      "Who can configure integrations in the organization?",
    ],
  },
  {
    id: "support",
    label: "Support",
    questions: [
      "How do I contact the support team directly?",
      "What information should I include in a support request?",
      "How quickly does support respond?",
      "Can I request onboarding help for my team?",
      "How do I report a bug or product issue?",
      "Where can I track the status of an issue?",
      "Can I schedule a guided troubleshooting session?",
      "How do I escalate a site-critical problem?",
      "What support options are available by plan?",
    ],
  },
  {
    id: "docs",
    label: "Documentation",
    questions: [
      "Where can I find setup documentation?",
      "Do you provide training guides for managers?",
      "How do I access worker onboarding materials?",
      "Can I download process documentation for offline use?",
      "Where can I find release notes and updates?",
      "How do I share documentation internally?",
      "Is there a searchable knowledge base?",
      "How do I find best-practice setup examples?",
      "Which guides are most useful for new teams?",
    ],
  },
];

function HelpTopicCard({ title, description, icon: Icon }: TopicCard) {
  return (
    <div className="rounded-[18px] bg-white p-5 shadow-[0_12px_40px_rgba(18,18,18,0.06)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#f6f1ea] text-[#f67011]">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-[18px] font-semibold leading-[1.2] text-[#17172b]">
        {title}
      </h3>
      <p className="mt-2 text-[13px] leading-[1.55] text-[#5f6471]">
        {description}
      </p>
      <button className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-[#17172b]">
        Learn More
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#17172b] text-white">
          <ChevronRight className="h-3 w-3" />
        </span>
      </button>
    </div>
  );
}

export default function SupportHelpCenterPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  const currentCategory = useMemo(
    () => faqCategories.find((category) => category.id === activeCategory) ?? faqCategories[0],
    [activeCategory],
  );

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-black px-4 pb-28 pt-14 sm:pb-32 sm:pt-20">
        <div className="mx-auto max-w-[1160px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-[780px] text-center"
          >
            <h1 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-white sm:text-[56px] md:text-[68px]">
              Support &amp; Help Center
            </h1>
            <p className="mx-auto mt-5 max-w-[720px] text-[14px] leading-[1.75] text-white/78 sm:text-[15px]">
              Have questions or need assistance? Reach out to us through our contact form
              below. We&apos;re here to help you connect and collaborate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-16 max-w-[1120px] rounded-[24px] bg-[#2c2b2b] px-5 py-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-10 sm:py-14"
          >
            <h2 className="text-[34px] font-medium leading-[1.1] tracking-[-0.03em] text-white sm:text-[48px]">
              How can we help?
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-[1.75] text-white/72 sm:text-[15px]">
              Discover solutions, resolve problems, and receive comprehensive support for all
              your Constructefy networks, devices, and cloud platform needs.
            </p>

            <div className="mx-auto mt-10 flex max-w-[760px] items-center gap-3 rounded-full bg-white px-5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
              <Search className="h-5 w-5 text-[#878787]" />
              <input
                aria-label="Search support articles"
                placeholder="Search articles, guides, products, or issues..."
                className="w-full bg-transparent text-[14px] text-[#16151a] outline-none placeholder:text-[#8c8c8c]"
              />
            </div>

            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Top Searches
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                {searchTags.map((tag) => (
                  <button
                    key={tag}
                    className="rounded-full bg-[#3b3939] px-4 py-2.5 text-[12px] font-medium text-white/88 transition-colors hover:bg-[#474444]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute -bottom-28 left-1/2 h-[220px] w-[130%] -translate-x-1/2 rounded-[50%] bg-white blur-[16px]" />
      </section>

      <section className="bg-white px-4 pb-24 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-[1160px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-[720px]"
          >
            <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#191c2f] sm:text-[58px]">
              Where Do You <span className="text-[#f67011]">Need Help?</span>
            </h2>
            <p className="mt-5 max-w-[700px] text-[14px] leading-[1.75] text-[#595e69]">
              Find answers, manage your services, and troubleshoot issues across Constructefy
              products and platforms. Browse topics below to quickly get the help you need.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topicCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <HelpTopicCard {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-4 pb-28 pt-20 sm:pt-24">
        <div className="mx-auto max-w-[1160px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="max-w-[760px]"
          >
            <h2 className="text-[42px] font-medium leading-[1.05] tracking-[-0.04em] text-[#191c2f] sm:text-[58px]">
              Common <span className="text-[#f67011]">Questions</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.75] text-[#595e69]">
              Quick answers to common questions about using Constructefy across sites, teams,
              and projects.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
            <div className="space-y-3">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex w-full items-center rounded-[10px] px-4 py-3 text-left text-[13px] transition-colors ${
                    activeCategory === category.id
                      ? "bg-white text-[#15182c] shadow-[0_10px_24px_rgba(17,18,27,0.06)]"
                      : "bg-[#dfdfdf] text-[#1c2034] hover:bg-[#d6d6d6]"
                  } ${category.accent ? "font-medium text-[#338b48]" : "font-medium"}`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_18px_50px_rgba(18,18,18,0.07)] ring-1 ring-black/4">
              {currentCategory.questions.map((question, index) => (
                <button
                  key={question}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[14px] text-[#15182c] transition-colors hover:bg-[#fafafa] sm:px-7 ${
                    index !== currentCategory.questions.length - 1 ? "border-b border-black/6" : ""
                  }`}
                >
                  <span>{question}</span>
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#525866]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
