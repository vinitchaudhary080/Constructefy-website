import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import SolutionsPage from "./pages/SolutionsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import SupportHelpCenterPage from "./pages/SupportHelpCenterPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "pricing", Component: PricingPage },
      { path: "how-it-works", Component: HowItWorksPage },
      { path: "solutions", Component: SolutionsPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogDetailPage },
      { path: "contact", Component: SupportHelpCenterPage },
      { path: "support", Component: SupportHelpCenterPage },
      { path: "help-center", Component: SupportHelpCenterPage },
      { path: "support-help-center", Component: SupportHelpCenterPage },
    ],
  },
]);
