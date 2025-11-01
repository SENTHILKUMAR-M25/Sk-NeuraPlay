import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import vrBg from "../assets/VR.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// === Tilt Card ===
const TiltCard = ({ index, title, body }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-80, 80], [15, -15]);
  const rotateY = useTransform(x, [-80, 80], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.25, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group bg-gradient-to-br from-white/10 to-transparent 
                 border border-white/20 rounded-2xl p-8 backdrop-blur-md 
                 shadow-[0_0_40px_rgba(99,102,241,0.15)] hover:shadow-[0_0_60px_rgba(139,92,246,0.4)]
                 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
    >
      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

      {/* Icon / Number */}
      <div className="relative z-10 w-12 h-12 mb-4 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 
                      text-white flex items-center justify-center font-bold text-lg shadow-md">
        {index + 1}
      </div>

      {/* Title + Description */}
      <h3 className="relative z-10 font-semibold text-xl text-white mb-2">{title}</h3>
      <p className="relative z-10 text-sm text-gray-300 leading-relaxed">{body}</p>
    </motion.div>
  );
};

// === Main Feature Section ===
const Feature = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth zoom-in effect when entering Feature
      gsap.fromTo(
        sectionRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      // Floating entry for each card
      gsap.fromTo(
        ".feature-card",
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      title: "Unmatched Immersion and Realism",
      body: "Dive into hyper-realistic environments that blur the line between the physical and digital world.",
    },
    {
      title: "Seamless Lifestyle Integration",
      body: "Our VR systems merge effortlessly into your world — for gaming, creativity, or collaboration.",
    },
    {
      title: "Next-Gen Performance",
      body: "Powered by cutting-edge optics and responsive sensors for limitless possibilities.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-10 py-32 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${vrBg})`,
      }}
    >
      {/* === Top Gradient (Blend into Hero) === */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030014] via-[#070024]/90 to-transparent z-0" />

      {/* === Background Overlays === */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/10 to-blue-600/20 blur-3xl pointer-events-none" />

      {/* === Floating Particles === */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* === Header === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[4px] text-purple-300">
          Step Into Tomorrow
        </p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-3 leading-tight">
          Experience the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
            Future of Virtual Reality
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base md:text-lg">
          Discover how VR redefines connection, creativity, and exploration —
          where imagination becomes your new reality.
        </p>
      </motion.div>

      {/* === Feature Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {data.map((f, i) => (
          <div key={i} className="feature-card">
            <TiltCard index={i} title={f.title} body={f.body} />
          </div>
        ))}
      </div>

      {/* === Bottom Fade for Next Section === */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030014] via-[#070024]/90 to-transparent z-0" />
    </section>
  );
};

export default Feature;
