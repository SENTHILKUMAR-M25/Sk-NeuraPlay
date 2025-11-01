import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Jordan Lee",
      role: "VR Enthusiast",
      text: "Vortek VR redefined immersion. It’s not just virtual — it feels like another dimension.",
      rating: 5,
    },
    {
      name: "Ava Thompson",
      role: "Game Developer",
      text: "The precision and responsiveness are unreal. Every motion feels intuitive and fluid.",
      rating: 5,
    },
    {
      name: "Lucas Kim",
      role: "Tech Innovator",
      text: "Feels like standing inside the future. Vortek has changed how I see digital experiences.",
      rating: 5,
    },
    {
      name: "Sophia Park",
      role: "VR Designer",
      text: "The clarity, the physics, the realism — it’s art disguised as technology.",
      rating: 5,
    },
    {
      name: "Ethan Cruz",
      role: "Content Creator",
      text: "Every world feels handcrafted for you. It’s the closest thing to dreaming awake.",
      rating: 5,
    },
  ];

  const sectionRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-28 px-6 md:px-16 bg-[#050014] overflow-hidden text-white"
    >
      {/* === Dynamic Gradient Lights === */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/30 blur-[180px] rounded-full"
        animate={{ y: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-600/25 blur-[200px] rounded-full"
        animate={{ y: [0, -30, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Title === */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center relative z-20 mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            Immersive Reactions
          </span>
        </h2>
        <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
          Real users. Real emotions. Real reality — redefined through{" "}
          <span className="text-purple-400 font-semibold">Vortek VR</span>.
        </p>
      </motion.div>

      {/* === Floating Orbit Animation Background === */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-purple-400/30 rounded-full w-[700px] h-[700px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full w-[1000px] h-[1000px]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />

      {/* === Testimonials Carousel === */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 perspective-1000"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex gap-12 w-[200%]"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 0 40px rgba(168,85,247,0.4), 0 0 80px rgba(59,130,246,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative min-w-[320px] max-w-sm flex-shrink-0 bg-white/10 border border-white/10 
                         rounded-3xl p-8 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] 
                         hover:shadow-[0_0_60px_rgba(147,51,234,0.3)] transition-all duration-700"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <p className="italic text-gray-200 mb-5 leading-relaxed text-[15px]">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="font-semibold text-white text-lg">{t.name}</h3>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* === Floating Light Particles === */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white/40 rounded-full"
          style={{
            width: Math.random() * 3 + 2,
            height: Math.random() * 3 + 2,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + Math.random() * 6,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}
