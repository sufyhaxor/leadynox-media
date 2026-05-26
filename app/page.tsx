"use client";

import { useEffect, useState } from "react"; 

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

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
    const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

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
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    mouseX.set(e.clientX - 200);
    mouseY.set(e.clientY - 200);
  };
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

    <motion.div
      className={`custom-cursor ${hovered ? "hovered" : ""}`}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.05,
      }}
    />

    <main
  onMouseMove={handleMouseMove}
  className="bg-black text-white relative"
>

  <div
    className="pointer-events-none fixed inset-0 z-0 transition duration-300"
    style={{
      background: `
      radial-gradient(
        600px at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(0,180,255,0.12),
        transparent 80%
      )
    `,
    }}
  />
      {/* NOISE */}
      <div className="noise"></div>

      {/* MOUSE GLOW */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[120px] z-0"
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      />

      {/* NAVBAR */}
      <header
  className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-500 ${
    showNavbar
      ? "translate-y-0 opacity-100"
      : "-translate-y-full opacity-0"
  }`}
>
        <div className="max-w-7xl mx-auto">

          <div className="border border-white/10 bg-black/25 backdrop-blur-2xl rounded-full px-8 py-5 flex items-center justify-between shadow-[0_0_60px_rgba(0,170,255,0.12)]">

            {/* LOGO */}
            <div className="text-2xl font-bold">
              Leady<span className="text-cyan-400">nox</span>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-white/70">

              <a href="#home" className="hover:text-cyan-400 transition-all duration-300">
                Home
              </a>

              <a href="#services" className="hover:text-cyan-400 transition-all duration-300">
                Services
              </a>

              <a href="#case-studies" className="hover:text-cyan-400 transition-all duration-300">
                About
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition-all duration-300">
                Contact
              </a>

            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              <button
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="hidden md:flex premium-glow bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-[0_0_50px_rgba(0,170,255,0.35)] transition-all duration-300">

                Let’s Talk

              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center"
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
              className="lg:hidden mt-4 border border-white/10 bg-black/70 backdrop-blur-2xl rounded-[30px] p-6"
            >

              <div className="flex flex-col gap-6 text-white/80">

                <a
  href="#home"
  onClick={() => setMobileMenu(false)}
  className="hover:text-cyan-400 transition-all duration-300"
>
  Home
</a>

                <a
  href="#services"
  onClick={() => setMobileMenu(false)}
  className="hover:text-cyan-400 transition-all duration-300"
>
  Services
</a>

                <a
  href="#case-studies"
  onClick={() => setMobileMenu(false)}
  className="hover:text-cyan-400 transition-all duration-300"
>
  About
</a>

                <a
  href="#contact"
  onClick={() => setMobileMenu(false)}
  className="hover:text-cyan-400 transition-all duration-300"
>
  Contact
</a>

              </div>

            </motion.div>

          )}

        </div>
      </header>

      {/* HERO */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <section
  id="home"
  className="relative min-h-screen flex items-center px-6 pt-52"
>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5ff20,transparent_35%)]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#2563eb20,transparent_35%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl rounded-full px-5 py-3 text-sm mb-8">

              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

              Performance Marketing Agency

            </div>

            <h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">

              Scaling Brands Through{" "}

              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">

                Digital Growth

              </span>

            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10">

              Leadynox Media helps businesses generate scalable traffic,
              quality leads, and measurable digital growth through
              performance-focused marketing systems.

            </p>

            <div className="flex flex-wrap gap-5">

              <button
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="magnetic-button premium-glow bg-gradient-to-r from-cyan-500 to-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_50px_rgba(0,170,255,0.35)] transition-all duration-300">

                Get Started

                <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

              </button>

              <button className="magnetic-button border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300">

                Explore Services

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative float-animation"
          >

            <div className="relative w-full h-[620px] flex items-center justify-center">

              <div className="absolute w-[520px] h-[520px] border border-cyan-500/20 rounded-full animate-spin-slow"></div>

              <div className="absolute w-[380px] h-[380px] border border-blue-500/20 rounded-full animate-spin-reverse"></div>

              <div className="relative z-20 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 md:p-10 w-[360px] shadow-[0_0_80px_rgba(14,165,255,0.15)]">

                <div className="flex items-center justify-between mb-10">

                  <div>

                    <h3 className="text-3xl font-bold">
                      Leadynox Media
                    </h3>

                    <p className="text-white/50 mt-2">
                      Performance Dashboard
                    </p>

                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600"></div>

                </div>

                <div className="space-y-6">

                  <div className="bg-black/30 border border-white/5 rounded-3xl p-6">

                    <div className="flex items-center justify-between mb-4">

                      <span className="text-white/60">
                        Growth Performance
                      </span>

                      <span className="text-cyan-400">
                        +245%
                      </span>

                    </div>

                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">

                      <div className="h-full w-[85%] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="py-32 px-6 border-t border-white/5"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Performance Marketing",
                icon: <TrendingUp size={42} />,
              },
              {
                title: "Lead Generation",
                icon: <BarChart3 size={42} />,
              },
              {
                title: "Media Buying",
                icon: <Megaphone size={42} />,
              },
              {
                title: "Traffic Optimization",
                icon: <Globe size={42} />,
              },
            ].map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-white/5 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/[0.07] hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(0,170,255,0.12)] transition-all duration-500"
              >

                <div className="text-cyan-400 mb-8 group-hover:scale-110 transition-all duration-300">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed">

                  Scalable digital systems built for measurable
                  performance and business growth.

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
{/* STATS SECTION */}

<section
  id="stats"
  className="py-32 px-6 border-t border-white/5"
>

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

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
          className="bg-white/5 border border-white/10 rounded-[30px] p-8 text-center backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500"
        >

          <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">

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

        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

        Trusted Growth Systems

      </div>

      <h2 className="text-4xl md:text-6xl font-bold mb-6">

        Built For
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}Scalable Growth
        </span>

      </h2>

      <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">

        Performance-driven systems focused on measurable growth,
        lead generation, media buying, and scalable traffic acquisition.

      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {[
        "Performance Marketing",
        "Lead Generation",
        "Media Buying",
        "Traffic Scaling",
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          className="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/[0.08] transition-all duration-500"
        >

          <div className="text-cyan-400 text-lg font-semibold mb-3">
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
  className="py-32 px-6 border-t border-white/5 overflow-hidden relative"
>

  <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="text-center mb-20">

      <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 rounded-full px-5 py-3 text-sm mb-8">

        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

        Featured Case Studies

      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">

        Real Results.
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}Real Growth.
        </span>

      </h2>

      <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">

        Every optimization and campaign is built to generate
        measurable business growth and scalable performance.

      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {[
        {
          title: "Lead Generation System",
          growth: "+320%",
          desc: "Performance-focused funnel optimized for scalable lead acquisition.",
        },
        {
          title: "Traffic Optimization Campaign",
          growth: "+245%",
          desc: "Advanced campaign optimization focused on traffic quality and ROAS.",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 hover:border-cyan-400/30 transition-all duration-500"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>

          <div className="relative z-10">

            <div className="flex items-center justify-between mb-16">

              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(0,170,255,0.3)]"></div>

              <div className="flex items-center gap-2 text-cyan-400">

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

                <h4 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                  {item.growth}

                </h4>

              </div>

              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 transition-all duration-300">

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
  className="py-32 px-6 border-t border-white/5"
>

  <div className="max-w-5xl mx-auto text-center">

    <div className="border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-[40px] p-10 md:p-16 relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-8">

          Ready To Scale
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}Your Brand?
          </span>

        </h2>

        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">

          Let’s build scalable digital growth systems focused on
          performance, optimization, and measurable business results.

        </p>

        <button className="premium-glow bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_50px_rgba(0,170,255,0.35)] transition-all duration-300">

          Start Your Growth Journey

        </button>

      </div>

    </div>

  </div>

</section>
      {/* FOOTER */}

<footer className="relative border-t border-white/10 px-6 py-20 overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#0ea5e910,transparent_60%)]"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <div className="grid lg:grid-cols-4 gap-16">

      {/* BRAND */}

      <div>

        <div className="text-3xl font-bold tracking-tight mb-6">
          Leady<span className="text-cyan-400">nox</span>
        </div>

        <p className="text-white/50 leading-relaxed mb-8">
          Performance-focused digital systems designed to help modern brands
          scale through measurable growth.
        </p>

        <div className="flex gap-4">

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
          >
            <div className="text-sm font-bold">
              IG
            </div>
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
          >
            in
          </a>

          <a
            href="mailto:info@leadynoxmedia.com"
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
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
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            Services
          </a>

          <a
            href="#case-studies"
            className="hover:text-cyan-400 transition-all duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition-all duration-300"
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
      

              </main>

  </>

);
}