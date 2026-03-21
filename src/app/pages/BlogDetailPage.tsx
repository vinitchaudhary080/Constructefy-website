import { motion } from "motion/react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-7xwmro22w6";
import img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg from "@/app/assetss/Jimarnet.png";
import img66Bbc7F8A615E3F390Cfba53AdamBio201Jpg from "@/app/assetss/Abouttheauthor.png";
import imgFrame1984078927 from "@/app/assets/f71ce111af551be58429a51dd4c50705b34513c6.png";
import img67A24648A300207676Ea7E1DHeroImageJpg from "@/app/assets/0fac965a5f9cb6cc8d997f4b918f6eb6cb395628.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen from "@/app/assets/228a6cfaa468a649412ba54b64b26fa0beee2b13.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant from "@/app/assets/058926f68746ff6057a345cd36826253ea2ffe3c.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant1 from "@/app/assets/e2b5d0dcb521a771029e30b94f0bd53039b96ef4.png";
import imgPersonSittingAtALaptopSearchingGoogleInARestaurant2 from "@/app/assets/3b1ceda0ee2e61be775aba00c3a14a5deaad5fb2.png";

export default function BlogDetailPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Black Background */}
      <section className="relative min-h-[600px] bg-black px-4 py-20 overflow-hidden">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[995px] mx-auto pt-16 pb-8"
        >
          <div className="flex items-center gap-1">
            <Link
              to="/blog"
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[14px] font-medium tracking-[-0.175px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Blog
            </Link>
            <div className="relative shrink-0 size-4">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
              >
                <path d={svgPaths.p2ac42f80} fill="#878787" />
              </svg>
            </div>
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#f67011] to-[#ff9f2e] text-[13.9px] font-medium tracking-[-0.175px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Marketing Strategy
            </span>
            <div className="relative shrink-0 size-4">
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 16 16"
              >
                <path d={svgPaths.p2ac42f80} fill="#878787" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Article Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 max-w-[995px] mx-auto"
        >
          <div className="space-y-3">
            <h1
              className="text-white text-[48px] font-medium leading-normal tracking-[-1px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Why Construction Sites Still Run on Assumptions
              (And How to Fix It)
            </h1>
            <p
              className="text-white text-[17px] leading-[28px] max-w-[662px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              When your restaurant looks and feels the same
              across your website, emails, and in-store
              experience, guests remember you. That memory makes
              them more likely to order direct, and more likely
              to come back.
            </p>
          </div>
        </motion.div>

        {/* Meta Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 max-w-[995px] mx-auto mt-[35px]"
        >
          <div className="flex items-center gap-6">
            <div
              className="text-[#6c6f75] text-[14.9px] font-medium leading-[20.25px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              5 mins
            </div>
            <div className="h-5 w-px bg-[rgba(255,255,255,0.22)] rounded-[3px]" />
            <div
              className="text-[#6c6f75] text-[14.8px] font-medium leading-[20.25px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              July 29, 2025
            </div>
          </div>
        </motion.div>

        {/* Blurred Fog Effect at Bottom */}
        <div className="absolute aspect-[1440/464] blur-[12.5px] bottom-[-261px] left-0 right-0 pointer-events-none">
          <div className="absolute inset-[0_-8.33%_0.05%_-8.33%]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1680 463.75"
            >
              <path d={svgPaths.p1aa41700} fill="#F7F7F7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Article Content Section - White Background */}
      <section className="relative bg-[#f7f7f7] py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Column */}
            <div className="flex-1 max-w-[808px]">
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-[400px] rounded-2xl overflow-hidden mb-12"
              >
                <img
                  src={img67A24648A300207676Ea7E1DHeroImageJpg}
                  alt="Construction worker"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Key Takeaways Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 mb-12"
              >
                <h3 className="text-[18px] font-semibold text-[#000] mb-6">
                  Key takeaways
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-[#f67011] text-[18px] shrink-0">
                      •
                    </span>
                    <p className="text-[15px] leading-[22px] text-[#262626]">
                      Visibility drives control: When site
                      activity is captured in real time,
                      managers stop relying on assumptions and
                      start making confident, informed
                      decisions.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f67011] text-[18px] shrink-0">
                      •
                    </span>
                    <p className="text-[15px] leading-[22px] text-[#262626]">
                      Paper-based processes fail: Manual
                      tracking creates silos and locations
                      eliminates confusion and keeps teams
                      aligned with project intent.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f67011] text-[18px] shrink-0">
                      •
                    </span>
                    <p className="text-[15px] leading-[22px] text-[#262626]">
                      Speed matters in site liability reporting:
                      The sooner visibility data teams detect
                      delays, risks, and issues before they
                      escalate.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#f67011] text-[18px] shrink-0">
                      •
                    </span>
                    <p className="text-[15px] leading-[22px] text-[#262626]">
                      One system beats many tools: Centralizing
                      workforce data, task, and proof simplifies
                      operations and improves accountability
                      across every stakeholder.
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Harbor View Plaza Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden mb-12"
              >
                <div className="relative h-[250px]">
                  <img
                    src={imgFrame1984078927}
                    alt="Harbor View Plaza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-[24px] font-semibold text-[#000] mb-3">
                    Harbor View Plaza
                  </h3>
                  <p className="text-[15px] leading-[22px] text-[#262626] mb-6">
                    See how your restaurant's website stacks up
                    against local competitors
                  </p>
                  <button className="bg-[#2664ff] text-white px-6 py-3 rounded-lg text-[14px] font-medium hover:bg-[#2664ff]/90 transition-colors">
                    See Opportunity in action
                  </button>
                </div>
              </motion.div>

              {/* Article Sections */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                {/* Section 1 */}
                <div>
                  <h2 className="text-[32px] font-semibold text-[#000] leading-[38px] mb-4">
                    The hidden cost of limited site visibility
                  </h2>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    When site activity is not visible in real
                    time, problems do not surface immediately.
                    Delays quietly compound. Quality issues
                    persist. Safety risks linger unresolved
                    until someone happens to notice. Reporting
                    becomes a reaction instead of a tool for
                    prevention.
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    This lack of visibility creates dependencies
                    and strained relationships between
                    contractors, engineers, and project
                    managers. Most organizations underestimate
                    how much inefficiency comes simply from not
                    having the right visibility at the right
                    moment.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-[32px] font-semibold text-[#000] leading-[38px] mb-4">
                    The importance of proactive site monitoring
                  </h2>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    Implementing real-time site monitoring can
                    significantly mitigate risks and enhance
                    communication among teams. By having
                    immediate access to site data, issues can be
                    addressed before they escalate, fostering a
                    culture of accountability and accuracy.
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    This proactive approach not only helps in
                    maintaining timelines but also reinforces
                    trust among stakeholders, ensuring that
                    everyone is aligned and informed throughout
                    the project lifecycle.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-[32px] font-semibold text-[#000] leading-[38px] mb-4">
                    Technological solutions for increased
                    visibility
                  </h2>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    Employing advanced technologies such as
                    drones, IoT sensors, and mobile reporting
                    applications can elevate site visibility.
                    These tools provide instant data and
                    analytics, enabling teams to make informed
                    decisions quickly and safely.
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    Investing in such technologies can lead to
                    reduced downtime and improved overall
                    project efficiency, setting a new standard
                    for operational excellence in the
                    construction industry.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-[32px] font-semibold text-[#000] leading-[38px] mb-4">
                    The role of transparent communication
                  </h2>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    Fostering an environment of open
                    communication is crucial for site
                    visibility. Regular meetings and updates
                    among teams help ensure that all roles share
                    the same understanding of ongoing activities
                    and potential challenges ahead.
                  </p>
                  <p className="text-[15px] leading-[24px] text-[#262626] mb-4">
                    This transparency not only aids in
                    collaborative problem-solving but also
                    empowers team members to take initiative,
                    ultimately driving project success and
                    enhancing overall satisfaction.
                  </p>
                </div>
              </motion.div>

              {/* About the Author Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 mt-16"
              >
                <h3 className="text-[14px] font-semibold text-[#6c6f75] mb-6 uppercase tracking-wide">
                  ABOUT THE AUTHOR
                </h3>
                <div className="flex gap-6">
                  <img
                    src={
                      img66Bbc7F8A615E3F390Cfba53AdamBio201Jpg
                    }
                    alt="Jim Arnet"
                    className="w-[80px] h-[80px] rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-[18px] font-semibold text-[#000] mb-1">
                      Jim Arnet
                    </h4>
                    <p className="text-[14px] text-[#6c6f75] mb-3">
                      Co-founder, Construction Commentary
                    </p>
                    <p className="text-[14px] leading-[20px] text-[#262626] mb-4">
                      We share purely deals with construction
                      companies to help them improve on-site
                      delivery, reduce disputes and manage
                      execution using real-time data: one simple
                      tech. We focus on everyday process
                      systems, not abstract theory.
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-[#000] flex items-center justify-center hover:bg-[#f67011] transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-[#000] flex items-center justify-center hover:bg-[#f67011] transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-[#000] flex items-center justify-center hover:bg-[#f67011] transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-[#000] flex items-center justify-center hover:bg-[#f67011] transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Back to Category */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-[#000] text-[14px] font-medium hover:text-[#f67011] transition-colors"
                >
                  <span>←</span>
                  <span>Back to category</span>
                </Link>
              </motion.div>
            </div>

            {/* Sidebar - Right Column */}
            <div className="lg:w-[320px] shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Author Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl p-6 text-center"
                >
                  <img
                    src={
                      img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg
                    }
                    alt="Jim Arnet"
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-[16px] font-semibold text-[#000] mb-1">
                    By Jim Arnet
                  </h4>
                  <p className="text-[13px] text-[#6c6f75]">
                    Construction Commentary
                  </p>
                </motion.div>

                {/* In This Article */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6"
                >
                  <h4 className="text-[14px] font-semibold text-[#000] mb-4 uppercase tracking-wide">
                    IN THIS ARTICLE
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-[13px] text-[#262626] hover:text-[#f67011] transition-colors leading-[18px] block"
                      >
                        The hidden cost of limited site
                        visibility
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] text-[#262626] hover:text-[#f67011] transition-colors leading-[18px] block"
                      >
                        Why traditional tracking breaks at scale
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] text-[#262626] hover:text-[#f67011] transition-colors leading-[18px] block"
                      >
                        What it takes to fix the execution gap
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[13px] text-[#262626] hover:text-[#f67011] transition-colors leading-[18px] block"
                      >
                        How real-time visibility changes
                        outcomes
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-[64px] font-medium leading-[1.1] mb-2.5"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <span className="text-[#16151a]">Latest </span>
              <span className="text-[#f67011]">Insights</span>
            </h2>
            <p
              className="text-[16px] leading-[22px] text-[#262626] max-w-[614px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Recent thinking on how construction teams improve
              visibility, reduce risk, and gain control across
              active sites.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Featured Article - Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[20px] p-5 lg:w-[495px] shrink-0"
            >
              <Link
                to="/blog/why-construction-sites-still-run-on-assumptions"
                className="block group"
              >
                {/* Featured Image */}
                <div className="h-[346px] rounded-xl overflow-hidden mb-[31px]">
                  <img
                    src={
                      imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen
                    }
                    alt="Construction workers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-[42px]">
                  <div className="space-y-[19px]">
                    {/* Category Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 bg-[rgba(253,226,207,0.5)] rounded-full">
                      <span
                        className="text-[11px] font-medium text-[#cf5f10] uppercase leading-[16.5px]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        INNOVATIVE
                      </span>
                    </div>

                    {/* Title and Description */}
                    <div className="space-y-3.5">
                      <h3
                        className="text-[26px] font-medium text-[#16151a] leading-normal tracking-[-0.4px]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        Why construction sites still run on
                        assumptions
                      </h3>
                      <p
                        className="text-[15.5px] leading-[21.6px] text-[#262626]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        Most delays and disputes don't start on
                        site—they start with missing visibility.
                        Learn why traditional tracking fails and
                        how real-time execution data changes
                        outcomes.
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-[11px]">
                    <div className="flex items-center gap-2">
                      <img
                        src={
                          img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg
                        }
                        alt="Adam Guild"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span
                        className="text-[14.9px] font-medium text-[#16151a]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        Adam Guild
                      </span>
                    </div>
                    <div className="h-5 w-px bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      15 min read
                    </span>
                    <div className="h-5 w-px bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      June 6, 2025
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Small Articles Column - Right */}
            <div className="flex flex-col gap-4 lg:w-[384px] shrink-0">
              {/* Article 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-4 h-[220px]"
              >
                <Link
                  to="/blog/harnessing-technology"
                  className="flex items-start justify-between h-full group"
                >
                  <div className="flex flex-col justify-between h-full w-[216px]">
                    {/* Top Content */}
                    <div className="space-y-[11px]">
                      <div className="inline-flex items-center justify-center px-2 py-1.5 bg-[rgba(253,226,207,0.5)] rounded-full">
                        <span
                          className="text-[11px] font-medium text-[#cf5f10] uppercase leading-[16.5px]"
                          style={{
                            fontVariationSettings: "'opsz' 14",
                          }}
                        >
                          INNOVATIVE
                        </span>
                      </div>
                      <h4
                        className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        Harnessing technology to drive
                        innovation and efficiency
                      </h4>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-end gap-6">
                      <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                        25 min read
                      </span>
                      <div className="h-5 w-px bg-[#878787]" />
                      <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                        July 20, 2025
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-[106px] h-[106px] rounded-lg overflow-hidden shrink-0">
                    <img
                      src={
                        imgPersonSittingAtALaptopSearchingGoogleInARestaurant
                      }
                      alt="Technology"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Article 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-2xl p-4 h-[220px]"
              >
                <Link
                  to="/blog/eco-friendly-practices"
                  className="flex items-start justify-between h-full group"
                >
                  <div className="flex flex-col justify-between h-full w-[216px]">
                    {/* Top Content */}
                    <div className="space-y-[11px]">
                      <div className="inline-flex items-center justify-center px-2 py-1.5 bg-[rgba(253,226,207,0.5)] rounded-full">
                        <span
                          className="text-[11px] font-medium text-[#cf5f10] uppercase leading-[16.5px]"
                          style={{
                            fontVariationSettings: "'opsz' 14",
                          }}
                        >
                          SUSTAINABILITY
                        </span>
                      </div>
                      <h4
                        className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        Exploring eco-friendly practices for a
                        greener future
                      </h4>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-end gap-6">
                      <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                        30 min read
                      </span>
                      <div className="h-5 w-px bg-[#878787]" />
                      <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                        August 15, 2025
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-[106px] h-[106px] rounded-lg overflow-hidden shrink-0">
                    <img
                      src={
                        imgPersonSittingAtALaptopSearchingGoogleInARestaurant1
                      }
                      alt="Sustainability"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </motion.div>

              {/* Article 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-4 h-[220px]"
              >
                <Link
                  to="/blog/intuitive-interfaces"
                  className="flex items-start justify-between h-full group"
                >
                  <div className="flex flex-col justify-between h-full w-[216px]">
                    {/* Top Content */}
                    <div className="space-y-[11px]">
                      <div className="inline-flex items-center justify-center px-2 py-1.5 bg-[rgba(253,226,207,0.5)] rounded-full">
                        <span
                          className="text-[11px] font-medium text-[#cf5f10] uppercase leading-[16.5px]"
                          style={{
                            fontVariationSettings: "'opsz' 14",
                          }}
                        >
                          USER EXPERIENCE
                        </span>
                      </div>
                      <h4
                        className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]"
                        style={{
                          fontVariationSettings: "'opsz' 14",
                        }}
                      >
                        Designing intuitive interfaces for
                        improved usability
                      </h4>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-end gap-6">
                      <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                        20 min read
                      </span>
                      <div className="h-5 w-px bg-[#878787]" />
                      <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                        September 10, 2025
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-[106px] h-[106px] rounded-lg overflow-hidden shrink-0">
                    <img
                      src={
                        imgPersonSittingAtALaptopSearchingGoogleInARestaurant2
                      }
                      alt="User Experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}