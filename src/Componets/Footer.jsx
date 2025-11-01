import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import vrHeadset from "../assets/VRH.jfif";

export default function Footer() {
  const icons = [
    { Icon: Facebook, color: "#1877F2" },
    { Icon: Instagram, color: "#E4405F" },
    { Icon: Linkedin, color: "#0077B5" },
    { Icon: Youtube, color: "#FF0000" },
  ];

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden py-24 px-10 md:px-24">
      {/* === Animated Neon Grid Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,0,255,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />

      {/* === Floating Energy Blurs === */}
      <motion.div
        className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-purple-700/30 blur-3xl rounded-full"
        animate={{ y: [0, 40, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/25 blur-3xl rounded-full"
        animate={{ y: [0, -40, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* === Floating Light Beams === */}
      <motion.div
        className="absolute top-0 left-1/2 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* === Main Footer Grid === */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-14"
      >
        {/* === Brand + Tagline === */}
        <div>
          <motion.div
            className="relative flex items-center gap-4 mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={vrHeadset}
              alt="Vortek Logo"
              className="w-16 h-16 rounded-xl shadow-[0_0_35px_rgba(147,51,234,0.6)]"
            />
            <h2 className="text-white text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              VORTEK VR
            </h2>
          </motion.div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Redefining the boundaries of perception. <br />
            <span className="text-purple-400 font-medium">
              Step into worlds that defy reality.
            </span>
          </p>

          {/* === Social Icons === */}
          <div className="flex gap-5 mt-6">
            {icons.map(({ Icon, color }, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.3,
                  rotate: 10,
                  boxShadow: `0 0 25px ${color}`,
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative group"
              >
                <Icon
                  className="w-6 h-6 text-white cursor-pointer transition-all duration-300"
                  style={{ filter: "drop-shadow(0 0 8px rgba(255,255,255,0.4))" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
                />
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all"
                  style={{ background: color }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* === Contact Section === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h4 className="text-white font-bold text-lg mb-4 tracking-wide">
            Contact Us
          </h4>
          <p className="text-sm">📍 42 Quantum Drive, New Seattle</p>
          <p className="text-sm mt-2">📞 +1 (889) 555-0132</p>
          <p className="text-sm mt-1">📧 support@vortek.io</p>
        </motion.div>

        {/* === Quick Links === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h4 className="text-white font-bold text-lg mb-4 tracking-wide">
            Explore
          </h4>
          <ul className="space-y-3">
            {["Products", "Features", "Blog", "Privacy Policy"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{
                  x: 8,
                  color: "#A855F7",
                  textShadow: "0 0 12px rgba(168,85,247,0.8)",
                }}
                transition={{ type: "spring", stiffness: 250 }}
                className="cursor-pointer text-sm"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* === Newsletter === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h4 className="text-white font-bold text-lg mb-4 tracking-wide">
            Join the Future
          </h4>
          <p className="text-sm mb-4 text-gray-400">
            Subscribe for early access to next-gen VR experiences.
          </p>
          <div className="flex items-center bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/20">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent flex-1 px-4 py-2 text-sm outline-none text-gray-200 placeholder-gray-400"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#9333EA" }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold"
            >
              Join
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* === Glowing Divider Line === */}
      <motion.div
        className="mt-20 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* === Copyright === */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © 2025{" "}
        <span className="text-purple-400 font-semibold tracking-wide">
          Vortek VR
        </span>{" "}
        — Designed for dreamers, creators, and explorers of the unreal.
      </div>
    </footer>
  );
}
