import { motion } from "motion/react";
import { Apple, Smartphone } from "lucide-react";
import { Link } from "react-router";
import footerBackground from "@/assets/Footer background.png";
import footerSvgPaths from "../../imports/svg-ye5cnnbbxh";
import navbarSvgPaths from "../../imports/svg-54q0yju2ut";
import { CentralPhone } from "./CentralPhone";

const productLinks = [
  { label: "Features", to: "/solutions" },
  { label: "Pricing", to: "/pricing" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Apps", to: "/contact" },
  { label: "Use Cases", to: "/solutions" },
];

const companyLinks = [
  { label: "About Us", to: "/" },
  { label: "Careers", to: "/contact" },
  { label: "Press", to: "/blog" },
  { label: "Partners", to: "/contact" },
];

const resourceLinks = [
  { label: "Support", to: "/contact" },
  { label: "Help Center", to: "/contact" },
  { label: "Guides & Tutorials", to: "/contact" },
  { label: "Blog", to: "/blog" },
  { label: "FAQs", to: "/contact" },
];

const legalLinks = [
  { label: "Terms of Service", to: "/contact" },
  { label: "Privacy Policy", to: "/contact" },
  { label: "Cookie Policy", to: "/contact" },
  { label: "User Agreement", to: "/contact" },
];

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-8 w-8 shrink-0">
        <svg className="h-full w-full" viewBox="0 0 33.1896 32.2149" fill="none">
          <path d={navbarSvgPaths.p23108400} fill="#F67011" />
          <path d={navbarSvgPaths.p6258500} fill="#14CB49" />
          <path d={navbarSvgPaths.p3b97e880} fill="#FF9F2E" />
          <path d={navbarSvgPaths.p2060b940} fill="#F84241" />
          <path d={navbarSvgPaths.p35ec1080} fill="#178FFF" />
          <path d={navbarSvgPaths.p35ec1080} fill="black" fillOpacity="0.2" />
        </svg>
      </div>
      <span className="text-[28px] font-bold tracking-tight text-white">
        constructefy
      </span>
    </div>
  );
}

type FooterLinkGroupProps = {
  title: string;
  links: { label: string; to: string }[];
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div className="min-w-[130px]">
      <h4 className="text-[16px] font-semibold text-white">{title}</h4>
      <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:gap-4">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="text-[14px] leading-[1.25] text-white/82 transition-colors hover:text-[#f67011]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#17161d] font-['DM_Sans']">
      <section className="relative overflow-hidden bg-[#ff6f07] px-4 pb-[92px] pt-16 sm:pb-[118px] sm:pt-18 lg:pb-[185px] lg:pt-24">
        <img
          src={footerBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative z-10 mx-auto grid max-w-[1200px] items-start gap-10 lg:grid-cols-[1fr_380px_1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="max-w-[330px] text-center lg:pt-9 lg:text-left"
          >
            <h2 className="text-[40px] font-medium leading-[0.98] tracking-[-0.05em] text-[#17161d] sm:text-[54px]">
              Onboard your workforce in seconds
            </h2>
            <p className="mt-6 text-[16px] leading-[1.45] text-[#17161d]/92">
              No logins, no forms, no delays. Workers simply scan a QR code and start work
              while all activity is captured automatically.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 lg:items-start">
              <button className="flex min-h-[54px] w-[272px] items-center justify-center gap-3 rounded-full bg-[#17161d] px-6 text-[15px] font-medium text-white shadow-[0_18px_35px_rgba(0,0,0,0.28)] transition-transform hover:-translate-y-0.5">
                <Apple className="h-5 w-5 fill-white" />
                <span>Download for iPhone</span>
              </button>
              <button className="flex min-h-[54px] w-[244px] items-center justify-center gap-3 rounded-full bg-white px-6 text-[15px] font-medium text-[#17161d] shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition-transform hover:-translate-y-0.5">
                <Smartphone className="h-5 w-5" />
                <span>Get it on Android</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="relative order-3 mx-auto flex w-full max-w-[470px] items-start justify-center lg:order-none lg:h-[760px]"
          >
            <div className="flex w-full justify-center pt-2 sm:pt-4 lg:pt-0">
              <CentralPhone />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="order-2 max-w-[334px] text-center lg:order-none lg:pt-14 lg:text-left"
          >
            <h2 className="text-[40px] font-medium leading-[0.98] tracking-[-0.05em] text-[#17161d] sm:text-[54px]">
              Scan the QR code to join a site
            </h2>
            <p className="mt-6 text-[16px] leading-[1.45] text-[#17161d]/92">
              Each site has a unique QR code that instantly connects workers to the correct
              project with no manual setup required.
            </p>

            <div className="mx-auto mt-10 w-fit rounded-[20px] bg-white p-4 shadow-[0_20px_44px_rgba(0,0,0,0.16)] lg:mx-0">
              <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[18px] bg-[#ececec] p-4">
                <svg className="h-full w-full" viewBox="0 0 170 170" fill="none">
                  <path d="M10 10H50V50H10V10ZM20 20V40H40V20H20Z" fill="#17161d" />
                  <path d="M120 10H160V50H120V10ZM130 20V40H150V20H130Z" fill="#17161d" />
                  <path d="M10 120H50V160H10V120ZM20 130V150H40V130H20Z" fill="#17161d" />
                  <rect x="60" y="10" width="10" height="10" fill="#17161d" />
                  <rect x="80" y="10" width="30" height="10" fill="#17161d" />
                  <rect x="60" y="30" width="20" height="10" fill="#17161d" />
                  <rect x="90" y="30" width="10" height="10" fill="#17161d" />
                  <rect x="10" y="60" width="30" height="10" fill="#17161d" />
                  <rect x="50" y="60" width="10" height="10" fill="#17161d" />
                  <rect x="70" y="60" width="40" height="10" fill="#17161d" />
                  <rect x="120" y="60" width="10" height="10" fill="#17161d" />
                  <rect x="140" y="60" width="20" height="10" fill="#17161d" />
                  <rect x="10" y="80" width="10" height="10" fill="#17161d" />
                  <rect x="30" y="80" width="20" height="10" fill="#17161d" />
                  <rect x="120" y="80" width="40" height="10" fill="#17161d" />
                  <rect x="10" y="100" width="20" height="10" fill="#17161d" />
                  <rect x="40" y="100" width="10" height="10" fill="#17161d" />
                  <rect x="130" y="100" width="10" height="10" fill="#17161d" />
                  <rect x="150" y="100" width="10" height="10" fill="#17161d" />
                  <rect x="60" y="120" width="10" height="10" fill="#17161d" />
                  <rect x="80" y="120" width="20" height="10" fill="#17161d" />
                  <rect x="110" y="120" width="50" height="10" fill="#17161d" />
                  <rect x="60" y="140" width="30" height="10" fill="#17161d" />
                  <rect x="100" y="140" width="10" height="10" fill="#17161d" />
                  <rect x="120" y="140" width="20" height="10" fill="#17161d" />
                  <rect x="150" y="140" width="10" height="10" fill="#17161d" />
                  <rect x="70" y="160" width="40" height="10" fill="#17161d" />
                  <rect x="120" y="160" width="30" height="10" fill="#17161d" />
                </svg>

                <div className="absolute left-1/2 top-1/2 flex h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[14px] bg-[#17161d] shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
                  <svg width="34" height="34" viewBox="0 0 29 28" fill="none">
                    <path d={footerSvgPaths.p15c64480} fill="#F67011" />
                    <path d={footerSvgPaths.p2f7b4f00} fill="#14CB49" />
                    <path d={footerSvgPaths.p3d7e6500} fill="#FF9F2E" />
                    <path d={footerSvgPaths.p147b1c80} fill="#F84241" />
                    <path d={footerSvgPaths.p2ebded80} fill="#178FFF" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative -mt-[92px] bg-[#17161d] px-4 pb-20 pt-[48px] sm:-mt-[126px] sm:pt-[58px] lg:-mt-[230px] lg:pt-[76px]">
        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div className="grid gap-12 pb-16 pt-1 lg:grid-cols-[1.2fr_0.9fr] lg:gap-24 lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}
              className="max-w-[470px]"
            >
              <FooterLogo />
              <p className="mt-8 text-[26px] font-medium leading-[1.28] tracking-[-0.03em] text-white">
                Building smarter sites. One platform for crews, projects, and progress.
              </p>

              <div className="mt-12 space-y-7 text-[16px] leading-[1.35] sm:mt-16 sm:space-y-8">
                <div>
                  <div className="mb-2 text-white/42">Email:</div>
                  <a
                    href="mailto:support@constructefy.com"
                    className="font-medium text-white transition-colors hover:text-[#f67011]"
                  >
                    support@constructefy.com
                  </a>
                </div>

                <div>
                  <div className="mb-2 text-white/42">Phone:</div>
                  <a
                    href="tel:+14155552389"
                    className="font-medium text-white transition-colors hover:text-[#f67011]"
                  >
                    +1 (415) 555-2389
                  </a>
                </div>

                <div>
                  <div className="mb-2 text-white/42">Address:</div>
                  <div className="font-medium text-white">
                    Constructefy HQ
                    <br />
                    1200 Mission Street,
                    <br />
                    San Francisco, CA 94103, USA
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:pt-[150px]"
            >
              <FooterLinkGroup title="Product" links={productLinks} />
              <FooterLinkGroup title="Company" links={companyLinks} />
              <FooterLinkGroup title="Resources" links={resourceLinks} />
            </motion.div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[13px] text-white/85">
                © 2025 Constructefy. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="text-[13px] text-white/45 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
