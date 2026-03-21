import { motion } from "motion/react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-zmljzv2qxi";
import img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg from "@/app/assets/22d6b9a811fa2c3f805232b3db83c8032c3f3ddf.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen from "@/app/assets/ecec96be967f32b388c038755c630dd95d080a86.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen1 from "@/app/assets/b07a4a6a9c6d61376c3867fcf61341a13afccd02.png";
import imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen2 from "@/app/assets/b831a97c10602d2509726fad2912f3decd669bb1.png";
import imgFeaturedSiteVisibility from "@/app/assets/228a6cfaa468a649412ba54b64b26fa0beee2b13.png";
import imgSmallCard1 from "@/app/assets/058926f68746ff6057a345cd36826253ea2ffe3c.png";
import imgSmallCard2 from "@/app/assets/e2b5d0dcb521a771029e30b94f0bd53039b96ef4.png";
import imgSmallCard3 from "@/app/assets/3b1ceda0ee2e61be775aba00c3a14a5deaad5fb2.png";
// Safety Protocols section images
import imgSafetyFeatured from "@/app/assets/3dc26e0761f6c1cdd90536a3f604f094b44d047b.png";
import imgSafetyCard1 from "@/app/assets/49f15cde739d19694982e693d9c49a559033647f.png";
import imgSafetyCard2 from "@/app/assets/008e43af9219be3f514432345e19ad2cc5d883cd.png";
import imgSafetyCard3 from "@/app/assets/a85399cb68bca179b4d434607e523a7cb44e46fb.png";
// Material Management section images
import imgMaterialFeatured from "@/app/assets/d82e41a6e35626e9b7c2271e278e980e89b1e774.png";
import imgMaterialCard1 from "@/app/assets/d0ce940d67f8fc7c3f9004fec236368432f47f9c.png";
import imgMaterialCard2 from "@/app/assets/c85f428049b90b27c2c0168966c56db0143c2eb9.png";
import imgMaterialCard3 from "@/app/assets/351b23fa786bae4160150e1a5372ba86c570bd68.png";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Black Background */}
      <section className="relative min-h-screen bg-black px-4 py-20 overflow-hidden">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-[808px] mx-auto text-center pt-24 pb-32"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-medium text-white mb-5 leading-[1.1] tracking-[-1px]">
            Insights for modern construction operations
          </h1>
          <p className="text-base text-white/90 max-w-[764px] mx-auto leading-relaxed">
            Perspectives on site visibility, workforce execution, and data-driven decision-making—written for construction companies managing real projects at scale.
          </p>
        </motion.div>

        {/* Blog Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          {/* Featured Article */}
          <Link to="/blog/why-construction-sites-still-run-on-assumptions">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/[0.15] rounded-[20px] p-3.5 mb-7 overflow-hidden hover:bg-white/[0.20] transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Featured Image */}
                <div className="w-full md:w-[402px] h-[309px] rounded-xl overflow-hidden shrink-0">
                  <img
                    src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen}
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Featured Content */}
                <div className="flex-1 flex flex-col justify-between py-2 px-3">
                  <div>
                    {/* Featured Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#ffb780]/10 mb-5">
                      <span className="text-[11px] font-medium text-[#ffb780] uppercase tracking-wide">
                        FEATURED
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[32px] font-medium text-white leading-[40px] tracking-[-0.4px] mb-3.5">
                      Why construction sites still run on assumptions
                    </h2>

                    {/* Description */}
                    <p className="text-[15.5px] text-[#fbfbfb] leading-[21.6px]">
                      Most delays and disputes don't start on site—they start with missing visibility. Learn why traditional tracking fails and how real-time execution data changes outcomes.
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap mt-6">
                    {/* Author */}
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="Adam Guild"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-white">
                        Adam Guild
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-5 bg-[#878787]" />

                    {/* Read Time */}
                    <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                      15 min read
                    </span>

                    {/* Divider */}
                    <div className="w-px h-5 bg-[#878787]" />

                    {/* Date */}
                    <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                      June 6, 2025
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-32">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/[0.15] rounded-2xl p-4 flex flex-col justify-between h-[204px]"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {/* Category Badge */}
                  <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#ffb780]/10 mb-3">
                    <span className="text-[11px] font-medium text-[#ffb780] uppercase tracking-wide">
                      Workforce Management
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-medium text-white leading-[26px] tracking-[-0.25px]">
                    From plans to proof: closing the execution gap on site
                  </h3>
                </div>

                {/* Thumbnail */}
                <img
                  src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen1}
                  alt="Blog post"
                  className="w-[90px] h-[90px] rounded-lg object-cover shrink-0"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6">
                <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                  22 min read
                </span>
                <div className="w-px h-5 bg-[#878787]" />
                <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                  May 6, 2025
                </span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/[0.15] rounded-2xl p-4 flex flex-col justify-between h-[204px]"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {/* Category Badge */}
                  <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#ffb780]/10 mb-3">
                    <span className="text-[11px] font-medium text-[#ffb780] uppercase tracking-wide">
                      Supply Chain Optimization
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-medium text-white leading-[26px] tracking-[-0.25px]">
                    Navigating disruptions and building resilience in logistics
                  </h3>
                </div>

                {/* Thumbnail */}
                <img
                  src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen2}
                  alt="Blog post"
                  className="w-[90px] h-[90px] rounded-lg object-cover shrink-0"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6">
                <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                  18 min read
                </span>
                <div className="w-px h-5 bg-[#878787]" />
                <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                  June 15, 2025
                </span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/[0.15] rounded-2xl p-4 flex flex-col justify-between h-[204px]"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  {/* Category Badge */}
                  <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#ffb780]/10 mb-3">
                    <span className="text-[11px] font-medium text-[#ffb780] uppercase tracking-wide">
                      Digital Transformation
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] font-medium text-white leading-[26px] tracking-[-0.25px]">
                    Harnessing technology to drive innovation and efficiency
                  </h3>
                </div>

                {/* Thumbnail */}
                <img
                  src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen}
                  alt="Blog post"
                  className="w-[90px] h-[90px] rounded-lg object-cover shrink-0"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6">
                <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                  25 min read
                </span>
                <div className="w-px h-5 bg-[#878787]" />
                <span className="text-[15px] font-medium text-[#fbfbfb] tracking-[-0.3px]">
                  July 20, 2025
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blurred Fog Effect at Bottom */}
        <div className="absolute aspect-[1440/464] blur-[12.5px] bottom-[-234px] left-0 right-0 pointer-events-none">
          <div className="absolute inset-[0_-8.33%_0.05%_-8.33%]">
            <svg
              className="absolute block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1680 463.75"
            >
              <path
                d={svgPaths.p1aa41700}
                fill="#F7F7F7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Latest Insights Section - Light Background */}
      <section className="relative bg-white py-14 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[72px]"
          >
            <h2 className="text-[64px] font-medium text-[#16151a] leading-[1.1] mb-2.5">
              Latest <span className="text-[#f67011]">Insights</span>
            </h2>
            <p className="text-base text-[#262626] leading-[22px] max-w-[614px] mx-auto">
              Recent thinking on how construction teams improve visibility, reduce risk, and gain control across active sites.
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-[38px]">
            {/* Left Column - Blog Posts */}
            <div className="flex-1 lg:w-[762px] space-y-6">
              {/* Featured Post */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                {/* Image */}
                <div className="w-full md:w-[260px] h-[199px] rounded-xl overflow-hidden shrink-0">
                  <img
                    src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen}
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-[42px]">
                  <div className="space-y-[19px]">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#fde2cf]">
                      <span className="text-[11px] font-medium text-[#f67011] uppercase tracking-wide">
                        FEATURED
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-medium text-[#16151a] leading-[24px]">
                      How linking daily work directly to drawings helps teams eliminate confusion, reduce rework, and gain confidence in progress.
                    </h3>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="Adam Guild"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-[#16151a]">
                        Adam Guild
                      </span>
                    </div>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      15 min read
                    </span>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      June 6, 2025
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Post 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                {/* Image */}
                <div className="w-full md:w-[260px] h-[199px] rounded-xl overflow-hidden shrink-0">
                  <img
                    src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen1}
                    alt="Blog post"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-[42px]">
                  <div className="space-y-[19px]">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#fde2cf]">
                      <span className="text-[11px] font-medium text-[#f67011] uppercase tracking-wide">
                        INSIGHTFUL
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-medium text-[#16151a] leading-[24px]">
                      Exploring the impact of collaborative design tools on enhancing team communication and creativity in projects.
                    </h3>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="Sara Lee"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-[#16151a]">
                        Sara Lee
                      </span>
                    </div>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      20 min read
                    </span>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      July 15, 2025
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Post 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                {/* Image */}
                <div className="w-full md:w-[260px] h-[199px] rounded-xl overflow-hidden shrink-0">
                  <img
                    src={imgAManAndWomanSittingInARestaurantLookingAtAComputerScreen2}
                    alt="Blog post"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-[42px]">
                  <div className="space-y-[19px]">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[#fde2cf]">
                      <span className="text-[11px] font-medium text-[#f67011] uppercase tracking-wide">
                        INNOVATIVE
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] font-medium text-[#16151a] leading-[24px]">
                      Utilizing AI-driven analytics to predict project outcomes and streamline workflow for more efficient team performance.
                    </h3>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="Michael Chen"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-[#16151a]">
                        Michael Chen
                      </span>
                    </div>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      25 min read
                    </span>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      August 22, 2025
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:w-[400px] shrink-0"
            >
              <div className="bg-[#f1f1f2] rounded-2xl p-10 h-[544px] flex flex-col items-center justify-center text-center">
                {/* Title */}
                <h3 className="text-[32px] font-medium text-[#181f1f] leading-[38.4px] tracking-[-0.4px] mb-6">
                  Subscribe to our blog
                </h3>

                {/* Description */}
                <p className="text-[15px] font-medium text-[#181f1f] leading-[21.75px] tracking-[-0.3px] mb-8">
                  We'll send you our best ideas on construction site visibility and growing your operational excellence.
                </p>

                {/* Form */}
                <div className="w-full space-y-[18px]">
                  {/* Email Input */}
                  <input
                    type="email"
                    placeholder="Enter your email*"
                    className="w-full h-14 px-6 rounded-lg border border-white/16 bg-white text-[15.5px] text-[#757575] focus:outline-none focus:ring-2 focus:ring-[#f67011]"
                  />

                  {/* Subscribe Button */}
                  <button className="w-full h-14 bg-[#2664ff] text-white rounded-lg text-base font-normal tracking-[-0.16px] hover:bg-[#2664ff]/90 transition-colors shadow-[0px_0px_60px_0px_rgba(255,255,255,0.2)]">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Browse by Topic Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[72px]"
          >
            <h2 className="text-[64px] font-medium text-[#16151a] leading-[1.1]">
              <span className="text-[#f67011]">Browse</span> by topic
            </h2>
          </motion.div>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-[26px]">
            {/* Left Sidebar - Category Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[275px] shrink-0 space-y-4"
            >
              <h3 className="text-[32px] font-medium text-[#181f1f] leading-[38.4px] tracking-[-0.4px]">
                Site Visibility
              </h3>
              <p className="text-[15px] font-medium text-[#6c6f75] leading-[21.75px] tracking-[-0.3px]">
                Know what's happening on site—without chasing updates or relying on assumptions.
              </p>
            </motion.div>

            {/* Right Content - Featured Card + Small Cards */}
            <div className="flex-1 flex flex-col lg:flex-row gap-5">
              {/* Large Featured Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-[20px] p-5 lg:w-[495px] shrink-0"
              >
                {/* Featured Image */}
                <div className="w-full h-[346px] rounded-xl overflow-hidden mb-[31px]">
                  <img
                    src={imgFeaturedSiteVisibility}
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-[42px]">
                  <div className="space-y-[19px]">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                      <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                        INNOVATIVE
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3.5">
                      <h3 className="text-[26px] font-medium text-[#16151a] leading-normal tracking-[-0.4px]">
                        Why construction sites still run on assumptions
                      </h3>
                      <p className="text-[15.5px] text-[#262626] leading-[21.6px]">
                        Most delays and disputes don't start on site—they start with missing visibility. Learn why traditional tracking fails and how real-time execution data changes outcomes.
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="Adam Guild"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-[#16151a]">
                        Adam Guild
                      </span>
                    </div>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      15 min read
                    </span>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      June 6, 2025
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Small Cards Column */}
              <div className="flex-1 lg:w-[384px] space-y-4">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            INNOVATIVE
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Harnessing technology to drive innovation and efficiency
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          25 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          July 20, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgSmallCard1}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            SUSTAINABILITY
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Exploring eco-friendly practices for a greener future
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          30 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          August 15, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgSmallCard2}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            USER EXPERIENCE
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Designing intuitive interfaces for improved usability
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          20 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          September 10, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgSmallCard3}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Protocols Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Top Divider Line */}
          <div className="h-px w-full bg-black/10 mb-16" />

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-[26px]">
            {/* Left Sidebar - Category Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[275px] shrink-0 space-y-4"
            >
              <h3 className="text-[32px] font-medium text-[#181f1f] leading-[38.4px] tracking-[-0.4px]">
                Safety Protocols
              </h3>
              <p className="text-[15px] font-medium text-[#6c6f75] leading-[21.75px] tracking-[-0.3px]">
                Understand the essential safety measures to protect workers and ensure compliance.
              </p>
            </motion.div>

            {/* Right Content - Featured Card + Small Cards */}
            <div className="flex-1 flex flex-col lg:flex-row gap-5">
              {/* Large Featured Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-[20px] p-5 lg:w-[495px] shrink-0"
              >
                {/* Featured Image */}
                <div className="w-full h-[346px] rounded-xl overflow-hidden mb-[31px]">
                  <img
                    src={imgSafetyFeatured}
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-[42px]">
                  <div className="space-y-[19px]">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                      <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                        SAFETY
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3.5">
                      <h3 className="text-[26px] font-medium text-[#16151a] leading-normal tracking-[-0.4px]">
                        The importance of safety training on construction sites
                      </h3>
                      <p className="text-[15.5px] text-[#262626] leading-[21.6px]">
                        Training is key to reducing accidents. Discover the latest in safety training methods and how they transform site culture.
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="Lisa Carr"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-[#16151a]">
                        Lisa Carr
                      </span>
                    </div>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      18 min read
                    </span>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      May 22, 2025
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Small Cards Column */}
              <div className="flex-1 lg:w-[384px] space-y-4">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            TECHNOLOGY
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Leveraging AI for predictive maintenance
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          22 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          August 5, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgSafetyCard1}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            COLLABORATION
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Building strong teams for project success
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          27 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          September 15, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgSafetyCard2}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            EFFICIENCY
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Streamlining workflows to boost productivity
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          24 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          October 3, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgSafetyCard3}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Management Section */}
      <section className="relative bg-white py-20 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Top Divider Line */}
          <div className="h-px w-full bg-black/10 mb-16" />

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-[26px]">
            {/* Left Sidebar - Category Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-[275px] shrink-0 space-y-4"
            >
              <h3 className="text-[32px] font-medium text-[#181f1f] leading-[38.4px] tracking-[-0.4px]">
                Material Management
              </h3>
              <p className="text-[15px] font-medium text-[#6c6f75] leading-[21.75px] tracking-[-0.3px]">
                Efficiently track and manage materials to ensure projects stay on schedule and within budget.
              </p>
            </motion.div>

            {/* Right Content - Featured Card + Small Cards */}
            <div className="flex-1 flex flex-col lg:flex-row gap-5">
              {/* Large Featured Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-[20px] p-5 lg:w-[495px] shrink-0"
              >
                {/* Featured Image */}
                <div className="w-full h-[346px] rounded-xl overflow-hidden mb-[31px]">
                  <img
                    src={imgMaterialFeatured}
                    alt="Featured article"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="space-y-[42px]">
                  <div className="space-y-[19px]">
                    {/* Badge */}
                    <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                      <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                        MATERIALS
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3.5">
                      <h3 className="text-[26px] font-medium text-[#16151a] leading-normal tracking-[-0.4px]">
                        Optimizing material procurement and delivery
                      </h3>
                      <p className="text-[15.5px] text-[#262626] leading-[21.6px]">
                        Streamline your material management processes to reduce delays and improve project efficiency.
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <img
                        src={img66Bbc3A4A97D06E4B8C0F371AdamProfile201Jpg}
                        alt="John Doe"
                        className="w-6 h-6 rounded-xl object-cover"
                      />
                      <span className="text-[14.9px] font-medium text-[#16151a]">
                        John Doe
                      </span>
                    </div>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      20 min read
                    </span>
                    <div className="w-px h-5 bg-[#878787]" />
                    <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                      June 10, 2025
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Small Cards Column */}
              <div className="flex-1 lg:w-[384px] space-y-4">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            INVENTORY
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Real-time inventory tracking for better control
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          25 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          July 15, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgMaterialCard1}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            SUPPLY CHAIN
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Enhancing supply chain visibility and reliability
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          30 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          August 20, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgMaterialCard2}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-4 h-[220px]"
                >
                  <div className="flex justify-between items-start gap-4 h-full">
                    <div className="flex-1 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        {/* Badge */}
                        <div className="inline-flex items-center justify-center px-2 py-1.5 rounded-full bg-[rgba(253,226,207,0.5)]">
                          <span className="text-[11px] font-medium text-[#cf5f10] uppercase tracking-wide">
                            COST CONTROL
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[20px] font-medium text-[#16151a] leading-[26px] tracking-[-0.25px]">
                          Strategies for effective cost management
                        </h3>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-6">
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          22 min read
                        </span>
                        <div className="w-px h-5 bg-[#878787]" />
                        <span className="text-[15px] font-medium text-[#16151a] tracking-[-0.3px]">
                          September 5, 2025
                        </span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={imgMaterialCard3}
                      alt="Blog post"
                      className="w-[106px] h-[106px] rounded-lg object-cover shrink-0"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}