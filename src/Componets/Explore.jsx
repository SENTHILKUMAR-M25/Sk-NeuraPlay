import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import vr from "../assets/Explore.jpeg";

const Explore = () => {
  return (
    <section className="relative py-28 px-6 md:px-16 bg-[#050014] text-white overflow-hidden">
      {/* === Animated Neon Background Layers === */}
      <motion.div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-700/40 blur-[200px] rounded-full"
        animate={{ y: [0, 40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600/40 blur-[200px] rounded-full"
        animate={{ y: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* === Floating Particles === */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/30 rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* === Section Header === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-24 relative z-10"
      >
        <p className="text-sm uppercase tracking-[4px] text-purple-300/80">
          Step Beyond Reality
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold mt-4 leading-tight">
          Explore the{" "}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Virtual Universe
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
          Dive into dynamic 3D worlds, powered by real-time light, motion, and
          imagination. This is more than virtual — it’s visionary.
        </p>
      </motion.div>

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 z-10">
        {/* LEFT TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:w-1/2 space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Unveil the Next Chapter of{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
              Vortek VR
            </span>
          </h3>
          <p className="text-gray-300 text-base leading-relaxed">
            Vortek VR lets you cross the boundaries between digital and
            physical. Whether it’s gaming, learning, or creation — your world
            becomes infinite.
          </p>

          <motion.ul
            className="space-y-3 text-gray-300 text-base tracking-wide"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <li className="font-semibold flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Metaverse Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Real-Time Spatial Audio
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              AI-Driven Interaction
            </li>
          </motion.ul>
        </motion.div>

        {/* RIGHT VR CARD */}
        <motion.div
          className="relative bg-white/10 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center 
          backdrop-blur-xl shadow-[0_0_60px_rgba(147,51,234,0.25)] hover:shadow-[0_0_80px_rgba(59,130,246,0.4)] transition-all duration-700 md:w-1/2"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, rotateY: 3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.img
            src={vr}
            alt="VR Experience"
            className="w-full md:w-1/2 object-cover h-64 md:h-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-3 text-white">
              The Rise of Spatial Computing
            </h3>
            <p className="text-gray-300 mb-5 text-sm leading-relaxed">
              Discover how spatial computing is redefining the way we see,
              build, and interact within virtual ecosystems.
            </p>

            <motion.button
              whileHover={{
                x: 8,
                color: "#a78bfa",
                textShadow:
                  "0 0 12px rgba(168,85,247,0.8), 0 0 25px rgba(59,130,246,0.9)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 font-semibold text-purple-400"
            >
              Learn More <ArrowRight size={18} />
            </motion.button>

            <div className="text-sm text-gray-500 mt-4">
              Kai Mendoza • 08 July 2025
            </div>
          </div>
        </motion.div>
      </div>

      {/* === Subtle Top Divider Glow === */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#050014] via-transparent to-transparent" />
    </section>
  );
};

export default Explore;
