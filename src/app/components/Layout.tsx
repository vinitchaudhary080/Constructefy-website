import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { FooterSection } from "./FooterSection";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <div className="relative min-h-screen bg-[#131515] overflow-x-hidden font-['DM_Sans'] text-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="h-[89px] md:h-[97px]" aria-hidden="true" />
      <Outlet />
      <FooterSection />
    </div>
  );
}
