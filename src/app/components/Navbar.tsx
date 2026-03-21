import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-54q0yju2ut";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();
  const isContactPage = ["/contact", "/support", "/help-center", "/support-help-center"].includes(location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Product", to: "/solutions" },
    { label: "Solutions", to: "/solutions" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Pricing", to: "/pricing" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];
  
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-50 border-b border-white/10"
    >
      <nav className="flex w-full items-center justify-between px-6 py-6 md:px-12">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <div className="relative w-8 h-8">
            <svg className="w-full h-full" viewBox="0 0 33.1896 32.2149" fill="none">
              <path d={svgPaths.p23108400} fill="#F67011" />
              <path d={svgPaths.p6258500} fill="#14CB49" />
              <path d={svgPaths.p3b97e880} fill="#FF9F2E" />
              <path d={svgPaths.p2060b940} fill="#F84241" />
              <path d={svgPaths.p35ec1080} fill="#178FFF" />
              <path d={svgPaths.p35ec1080} fill="black" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="text-white text-xl font-bold tracking-tight">constructefy</div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-sm text-white/80">
          {navLinks.map((link) => {
            const isActive =
              link.to === "/contact"
                ? isContactPage
                : location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                className={`hover:text-white transition-colors ${isActive ? "text-white font-medium" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
            Book a demo
          </Link>
          <Link
            to="/pricing"
            className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition-colors shadow-sm"
          >
            Buy Constructefy
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#111214] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4 text-sm text-white/82">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 transition-colors hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Book a demo
            </Link>
            <Link
              to="/pricing"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-black"
            >
              Buy Constructefy
            </Link>
          </div>
        </div>
      )}
    </motion.div>
  );
}
