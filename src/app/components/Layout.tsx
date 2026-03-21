import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import { FooterSection } from "./FooterSection";

export function Layout() {
  return (
    <div className="relative min-h-screen bg-[#131515] overflow-x-hidden font-['DM_Sans'] text-white flex flex-col">
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  );
}
