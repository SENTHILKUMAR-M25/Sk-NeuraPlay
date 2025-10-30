import React from "react";
import { motion } from "framer-motion";

function Testimonial() {
  const testimonials = [
    {
      name: "Jordan Lee",
      role: "VR Enthusiast",
      text: "Vortek VR completely transformed how I experience entertainment and learning. The immersion is beyond imagination!",
    },
    {
      name: "Ava Thompson",
      role: "Game Developer",
      text: "The level of detail and responsiveness is unmatched. This is truly the next era of digital interaction.",
    },
    {
      name: "Lucas Kim",
      role: "Tech Innovator",
      text: "Every session feels like stepping into another world. Vortek is leading the way for VR evolution.",
    },
    {
      name: "Sophia Park",
      role: "VR Designer",
      text: "The realism and smooth experience Vortek provides are absolutely mind-blowing.",
    },
    {
      name: "Ethan Cruz",
      role: "Content Creator",
      text: "It’s like living inside my imagination — flawless visuals and incredible detail.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* === Background Glow === */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-400/5 to-transparent blur-3xl pointer-events-none" />

      {/* === Heading === */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Voices from the Future
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          What Our Users Say
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Discover how Vortek VR redefines experiences for creators, gamers, and innovators around the world.
        </p>
      </div>

      {/* === Horizontal Auto-Scroll Testimonials === */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex gap-8 w-[200%]"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
                boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 min-w-[320px] max-w-sm flex-shrink-0 shadow-lg"
            >
              <p className="text-gray-700 text-sm mb-4 italic leading-relaxed">
                “{t.text}”
              </p>
              <div className="mt-4">
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* === Gradient Fade Edges === */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
    </section>
  );
}

export default Testimonial;
