"use client";

import { useEffect, useState } from "react"; 
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Globe,
  Megaphone,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
    
const [mobileMenu, setMobileMenu] = useState(false);
const [showNavbar, setShowNavbar] = useState(true);
const [loading, setLoading] = useState(true);
const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);

}, []);

useEffect(() => {

  const updateMousePosition = (e: MouseEvent) => {

    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });

  };

  window.addEventListener("mousemove", updateMousePosition);

  return () => {
    window.removeEventListener("mousemove", updateMousePosition);
  };

}, []);

useEffect(() => {

  if (mobileMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

}, [mobileMenu]);
useEffect(() => {

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileMenu(false);
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    window.removeEventListener("keydown", handleEscape);
  };

}, []);
useEffect(() => {

  let lastScroll = 0;

  const handleScroll = () => {

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    lastScroll = currentScroll;

  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);
  return (
  <>

{loading && (

  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden"
  >

    {/* BACKGROUND GLOW */}
    <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

    {/* CONTENT */}
    <div className="relative z-10 flex flex-col items-center">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[38px] sm:text-[52px] font-extrabold tracking-tight"
      >

        <span className="text-orange-500">Leady</span>
        <span className="text-white">Nox</span>
        <span className="text-orange-500"> Media</span>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-white/40 text-[11px] tracking-[0.35em] uppercase mt-3"
      >

        PERFORMANCE MARKETING AGENCY

      </motion.p>

      {/* LOADING LINE */}
      <div className="mt-10 w-[220px] h-[3px] bg-white/10 rounded-full overflow-hidden">

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
        />

      </div>

    </div>

  </motion.div>

)}

    
   <main className="bg-black text-white relative overflow-x-hidden">
    <div
  className="pointer-events-none fixed inset-0 z-0 hidden md:block"
  style={{
    background: `
      radial-gradient(
        500px at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(249,115,22,0.10),
        transparent 80%
      )
    `,
  }}
/>

  
      {/* NOISE */}
      <div className="noise"></div>

{/* FLOATING SOCIALS */}

<div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">

  <a
    href="#"
    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-orange-400 hover:border-orange-400/30 transition-all duration-300"
  >
    IG
  </a>

  <a
    href="#"
    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-orange-400 hover:border-orange-400/30 transition-all duration-300"
  >
    in
  </a>

  <a
    href="mailto:info@leadynoxmedia.com"
    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-orange-400 hover:border-orange-400/30 transition-all duration-300"
  >
    <Mail size={16} />
  </a>

</div>
  
      {/* NAVBAR */}
      <header
  className={`fixed top-0 left-0 w-full z-50 px-3 sm:px-6 py-3 sm:py-6 transition-all duration-500 ${
    showNavbar
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0"
  }`}
>
        <div className="max-w-7xl mx-auto">

          <div className="relative border border-white/10 bg-black/25 backdrop-blur-md rounded-full h-[54px] sm:h-[60px] md:h-[66px] px-3 sm:px-5 md:px-7 flex items-center justify-between shadow-[0_0_60px_rgba(249,115,22,0.12)]">
            {/* LOGO */}
<div className="flex flex-col items-start justify-center min-w-[140px] md:min-w-[180px] h-full leading-none">

  <h2 className="text-[20px] md:text-[24px] font-extrabold tracking-tight">

    <span className="text-orange-500">Leady</span>
    <span className="text-white">Nox</span>
    <span className="text-orange-500"> Media</span>

  </h2>

  <p className="text-white/40 text-[7px] md:text-[9px] tracking-[0.32em] uppercase mt-[4px]">

    PERFORMANCE MARKETING AGENCY

  </p>

</div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 xl:gap-10 text-white/70">

              <a href="#home" className="hover:text-orange-400 transition-all duration-300">
                Home
              </a>

              <a href="#services" className="hover:text-orange-400 transition-all duration-300">
                Services
              </a>

              <a href="#case-studies" className="hover:text-orange-400 transition-all duration-300">
                About
              </a>

              <a href="#contact" className="hover:text-orange-400 transition-all duration-300">
                Contact
              </a>

            </nav>

            {/* RIGHT */}
            
            <div className="flex items-center gap-4">

              <button
  
  className="hidden md:flex premium-glow bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.35)] transition-all duration-300">

                Let’s Talk

              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center"
              >

                {mobileMenu ? <X size={22} /> : <Menu size={22} />}

              </button>

            </div>

          </div>

          {/* MOBILE MENU */}
          {mobileMenu && (

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 border border-white/10 bg-black/70 backdrop-blur-md rounded-[30px] p-6"
            >

              <div className="flex flex-col gap-6 text-white/80">

                <a
  href="#home"
  onClick={() => setMobileMenu(false)}
  className="hover:text-orange-400 transition-all duration-300"
>
  Home
</a>

                <a
  href="#services"
  onClick={() => setMobileMenu(false)}
  className="hover:text-orange-400 transition-all duration-300"
>
  Services
</a>

                <a
  href="#case-studies"
  onClick={() => setMobileMenu(false)}
  className="hover:text-orange-400 transition-all duration-300"
>
  About
</a>

                <a
  href="#contact"
  onClick={() => setMobileMenu(false)}
  className="hover:text-orange-400 transition-all duration-300"
>
  Contact
</a>

              </div>

            </motion.div>

          )}

        </div>
      </header>

      {/* HERO */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
      <section
  id="home"
  className="relative min-h-screen flex items-start lg:items-center px-5 sm:px-6 pt-28 sm:pt-32 md:pt-40 pb-20 overflow-hidden"
>

{/* BACKGROUND MOVING TEXT */}

<div className="absolute inset-0 overflow-hidden opacity-[0.03] md:opacity-[0.015] pointer-events-none">

  <div className="animate-marquee whitespace-nowrap text-[90px] md:text-[180px] font-black uppercase leading-none text-orange-500">

    PERFORMANCE MARKETING • LEAD GENERATION • MEDIA BUYING • AUTOMATION •

    PERFORMANCE MARKETING • LEAD GENERATION • MEDIA BUYING • AUTOMATION •

  </div>

  <div className="animate-marquee-reverse whitespace-nowrap text-[90px] md:text-[180px] font-black uppercase leading-none mt-10 text-orange-500">

    SCALING BRANDS • DIGITAL GROWTH • ROI FOCUSED • PAID ADS •

    SCALING BRANDS • DIGITAL GROWTH • ROI FOCUSED • PAID ADS •

  </div>

</div>  

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#f9731620,transparent_35%)]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#ea580c20,transparent_35%)]"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-10 items-center relative z-10 w-full">

        

        
        
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 text-[12px] sm:text-sm mb-8">

              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>

              Performance Marketing Agency

            </div>

            <h1 className="max-w-[95%] sm:max-w-4xl text-[2.7rem] leading-[0.95] sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] sm:leading-tight mb-6 md:mb-8">

              Scaling Brands Through{" "}

              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">

                Digital Growth

              </span>

            </h1>

            <p className="text-white/60 text-[16px] sm:text-lg md:text-xl leading-relaxed max-w-xl mb-6 sm:mb-8 md:mb-10">

              Leadynox Media helps businesses generate scalable traffic,
              quality leads, and measurable digital growth through
              performance-focused marketing systems.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-4 sm:mb-10 w-full sm:w-auto">

              <button
 
  className="magnetic-button premium-glow bg-gradient-to-r from-orange-500 to-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center text-center gap-2 hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.35)] transition-all duration-300">

                Get Started

                <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

              </button>

              <button className="magnetic-button border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:border-orange-400/40 hover:bg-orange-500/10 transition-all duration-300">

                Explore Services

              </button>

            </div>

          </motion.div>

{/* RIGHT */}
<div className="relative lg:absolute lg:inset-x-0 lg:bottom-0 flex flex-col items-center lg:items-end justify-center lg:justify-end pointer-events-none z-0 mt-2 sm:mt-4 lg:mt-0">

  <Image
    src="/hero-team.png"
    alt="Leadynox Team"
    width={850}
    height={850}
    priority
    className="hero-team-image object-contain select-none lg:translate-x-16"
  />

  {/* BRAND TEXT */}
<div className="mt-2 lg:mt-4 lg:mr-24 text-center lg:text-right">

  <h3 className="text-[20px] sm:text-[24px] font-bold tracking-wide drop-shadow-[0_0_25px_rgba(249,115,22,0.45)]">

    <span className="text-orange-500">Leady</span>
    <span className="text-white">Nox</span>
    <span className="text-orange-500"> Media</span>

  </h3>

  <p className="text-white/40 text-[11px] sm:text-xs tracking-[0.25em] uppercase mt-1">

    PERFORMANCE MARKETING AGENCY

  </p>

</div>

</div>

        </div>

{/* TRUSTED BY */}

<section className="py-10 border-t border-white/5 border-b border-white/5 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-60">

      {[
        "META",
        "GOOGLE",
        "TABOOLA",
        "OUTBRAIN",
        "TIKTOK",
        "MGID",
      ].map((item, index) => (

        <div
          key={index}
          className="text-white/40 text-sm md:text-lg tracking-[0.35em] font-semibold hover:text-orange-400 transition-all duration-300"
        >

          {item}

        </div>

      ))}

    </div>

  </div>

</section>

      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="section-divider py-20 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5"
>

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Growth-Focused Services
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">

              We create scalable digital systems focused on performance,
              optimization, and measurable business growth.

            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

            {[
  {
    title: "Performance Marketing",
    description:
      "High-converting paid traffic systems optimized for scalable customer acquisition and measurable ROI.",
    icon: <TrendingUp size={42} />,
  },
  {
    title: "Lead Generation",
    description:
      "Advanced lead funnels designed to generate quality leads at lower acquisition costs.",
    icon: <BarChart3 size={42} />,
  },
  {
    title: "Media Buying",
    description:
      "Strategic campaign scaling across Meta, Google, Native, and high-volume traffic platforms.",
    icon: <Megaphone size={42} />,
  },
  {
    title: "Traffic Optimization",
    description:
      "Data-driven optimization systems focused on conversion quality and long-term campaign scaling.",
    icon: <Globe size={42} />,
  },
].map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-md hover:border-orange-400/30 hover:bg-white/[0.07] hover:-translate-y-5 hover:rotate-[0.5deg] hover:shadow-[0_0_40px_rgba(249,115,22,0.12)] transition-all duration-500"
              >

                <motion.div
  animate={{ y: [0, -6, 0] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="text-orange-400 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
>

                  {service.icon}

                </motion.div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed">

  {service.description}

</p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
{/* STATS SECTION */}

<section
  id="stats"
  className="section-divider py-20 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5"
>

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">

      {[
        {
          number: "250+",
          label: "Campaigns Optimized",
        },
        {
          number: "120M+",
          label: "Traffic Generated",
        },
        {
          number: "320%",
          label: "Average Growth",
        },
        {
          number: "24/7",
          label: "Performance Monitoring",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white/5 border border-white/10 rounded-[30px] p-8 text-center backdrop-blur-md hover:border-orange-400/30 hover:-translate-y-3 hover:bg-white/[0.07] transition-all duration-500"
        >

          <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4">

            {item.number}

          </h3>

          <p className="text-white/60">
            {item.label}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* TRUST SECTION */}

<section className="py-20 px-6 border-t border-white/5 overflow-hidden">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-14">

      <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-5 py-3 text-sm mb-6">

        <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></div>

        Trusted Growth Systems

      </div>

      <h2 className="text-4xl sm:text-5xl md:text-4xl sm:text-5xl md:text-6xl font-bold">

        Built For
        <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
          {" "}Scalable Growth
        </span>

      </h2>

      <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">

        Performance-driven systems focused on measurable growth,
        lead generation, media buying, and scalable traffic acquisition.

      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-2">

      {[
        "Performance Marketing",
        "Lead Generation",
        "Media Buying",
        "Traffic Scaling",
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          className="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-md hover:border-orange-400/30 hover:bg-white/[0.08] transition-all duration-500"
        >

          <div className="text-orange-400 text-lg font-semibold mb-3">
            0{index + 1}
          </div>

          <div className="text-xl font-semibold leading-snug">
            {item}
          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* CASE STUDIES */}

<section
  id="case-studies"
  className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5 overflow-hidden relative"
>

  <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="text-center mb-20">

      <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-5 py-3 text-sm mb-8">

        <div className="w-2 h-2 rounded-full bg-orange-400"></div>

        Featured Case Studies

      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">

        Real Results.
        <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
          {" "}Real Growth.
        </span>

      </h2>

      <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">

        Every optimization and campaign is built to generate
        measurable business growth and scalable performance.

      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {[
        {
  title: "Insurance Lead Funnel",
  growth: "+320%",
  desc: "Performance-focused insurance funnel optimized for scalable lead acquisition and lower CPL.",
},
{
  title: "Native Traffic Scaling System",
  growth: "+245%",
  desc: "High-volume native traffic campaign optimized for ROAS and conversion quality.",
},
{
  title: "Home Services Lead Generation",
  growth: "+180%",
  desc: "Lead generation system focused on high-intent home services traffic.",
},
{
  title: "Performance Media Buying",
  growth: "+410%",
  desc: "Advanced multi-platform media buying optimized for scale and profitability.",
},
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:border-orange-400/30 transition-all duration-500"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-orange-500/10 to-orange-600/10"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between mb-16">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-[0_0_40px_rgba(249,115,22,0.3)]"></div>

              <div className="flex items-center gap-2 text-orange-400">

                View Project

                <ArrowUpRight size={20} />

              </div>

            </div>

            <h3 className="text-4xl font-bold mb-6">

              {item.title}

            </h3>

            <p className="text-white/60 text-lg leading-relaxed mb-10">

              {item.desc}

            </p>

            <div className="flex items-end justify-between">

              <div>

                <p className="text-white/40 mb-2">
                  Growth
                </p>

                <h4 className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">

                  {item.growth}

                </h4>

              </div>

              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-500/10 transition-all duration-300">

                <ArrowUpRight />

              </button>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

{/* CTA SECTION */}

<section
  id="contact"
  className="section-divider py-20 sm:py-24 md:py-32 px-4 sm:px-6 border-t border-white/5"
>

  <div className="max-w-5xl mx-auto text-center">

    <div className="border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-[40px] p-10 md:p-16 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">

          Ready To Scale
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            {" "}Your Brand?
          </span>

        </h2>

        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">

          Let’s build scalable digital growth systems focused on
          performance, optimization, and measurable business results.

        </p>

        <button className="premium-glow bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.35)] transition-all duration-300">

          Book A Strategy Call

        </button>

      </div>

    </div>

  </div>

</section>
      {/* FOOTER */}

<footer className="relative border-t border-white/10 px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#f9731610,transparent_60%)]"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">

      {/* BRAND */}

      <div>

        <div className="mb-6 leading-none">

  <h3 className="text-[28px] font-extrabold tracking-tight">

    <span className="text-orange-500">Leady</span>
    <span className="text-white">Nox</span>
    <span className="text-orange-500"> Media</span>

  </h3>

  <p className="text-white/40 text-[8px] tracking-[0.35em] uppercase mt-2">

    PERFORMANCE MARKETING AGENCY

  </p>

</div>

        <p className="text-white/50 leading-relaxed mb-8">
          Performance-focused digital systems designed to help modern brands
          scale through measurable growth.
        </p>

        <div className="flex gap-4">

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-orange-400/40 hover:bg-orange-500/10 transition-all duration-300"
          >
            <div className="text-sm font-bold">
              IG
            </div>
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-orange-400/40 hover:bg-orange-500/10 transition-all duration-300"
          >
            in
          </a>

          <a
            href="mailto:info@leadynoxmedia.com"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-orange-400/40 hover:bg-orange-500/10 transition-all duration-300"
          >
            <Mail size={18} />
          </a>

        </div>

      </div>

      {/* NAVIGATION */}

      <div>

        <h4 className="text-lg font-semibold mb-6">
          Navigation
        </h4>

        <div className="flex flex-col gap-4 text-white/50">

          <a
            href="#home"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Services
          </a>

          <a
            href="#case-studies"
            className="hover:text-orange-400 transition-all duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-orange-400 transition-all duration-300"
          >
            Contact
          </a>

        </div>

      </div>

      {/* SERVICES */}

      <div>

        <h4 className="text-lg font-semibold mb-6">
          Services
        </h4>

        <div className="flex flex-col gap-4 text-white/50">

          <div>Performance Marketing</div>
          <div>Lead Generation</div>
          <div>Media Buying</div>
          <div>Traffic Optimization</div>

        </div>

      </div>

      {/* CONTACT */}

      <div>

        <h4 className="text-lg font-semibold mb-6">
          Contact
        </h4>

        <div className="flex flex-col gap-5 text-white/50">

          <div>
            info@leadynoxmedia.com
          </div>

          <div>
            mohdsufiyan@leadynoxmedia.com
          </div>

          <div>
            Kanpur, Uttar Pradesh — India
          </div>

        </div>

      </div>

    </div>

    <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

      <div className="text-white/40 text-sm">
        © 2026 Leadynox Media. All rights reserved.
      </div>

      <div className="text-white/40 text-sm">
        Built For Scalable Digital Growth
      </div>

    </div>

  </div>

</footer>
      
{/* MOBILE STICKY CTA */}

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:hidden">

  <button className="w-full premium-glow bg-gradient-to-r from-orange-500 to-orange-600 rounded-full py-4 font-semibold text-white shadow-[0_0_40px_rgba(249,115,22,0.25)] backdrop-blur-md border border-orange-400/20">

    Book A Strategy Call

  </button>

</div>
              </main>

  </>

);
}