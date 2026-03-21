import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import svgPaths from "../../imports/svg-54q0yju2ut";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";

export function Navbar() {
  const location = useLocation();
  const isContactPage = ["/contact", "/support", "/help-center", "/support-help-center"].includes(location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { label: "Product", to: "/solutions" },
      { label: "Solutions", to: "/solutions" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Pricing", to: "/pricing" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
    [],
  );

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.045,
        delayChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.16,
        ease: [0.4, 0, 1, 1],
        when: "afterChildren",
        staggerChildren: 0.02,
        staggerDirection: -1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: -10, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -6,
      filter: "blur(4px)",
      transition: { duration: 0.14, ease: [0.4, 0, 1, 1] },
    },
  } as const;
  
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
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-navigation"
            className="fixed inset-0 z-[60] lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-[#f5f5f7]/96"
              aria-label="Close mobile menu"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />

            <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-10 pt-5">
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-end"
              >
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#1d1d1f] transition-colors hover:bg-black/5"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5 stroke-[1.75]" />
                </button>
              </motion.div>

              <motion.div
                className="mt-3 flex flex-col"
                variants={overlayVariants}
              >
                {navLinks.map((link) => {
                  const isActive =
                    link.to === "/contact"
                      ? isContactPage
                      : location.pathname === link.to;

                  return (
                    <motion.div key={link.label} variants={itemVariants}>
                      <Link
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 text-[2.1rem] font-semibold leading-[1.16] tracking-[-0.03em] text-[#1d1d1f] transition-colors ${
                          isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                        }`}
                        style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-auto border-t border-black/8 pt-6"
              >
                <div className="flex flex-col gap-3 text-sm text-[#1d1d1f]/72">
                  <Link to="/contact" onClick={() => setMobileOpen(false)} className="w-fit">
                    Book a demo
                  </Link>
                  <Link to="/pricing" onClick={() => setMobileOpen(false)} className="w-fit">
                    Buy Constructefy
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
