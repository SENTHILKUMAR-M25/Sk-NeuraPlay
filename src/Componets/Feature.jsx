import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import vrBg from "../assets/VR.jpeg"; // 🖼️ Replace with your image path

const TiltCard = ({ index, title, body }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

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
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white/70 backdrop-blur-sm border border-gray-200 
                 rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                 transition-all duration-300 cursor-pointer"
    >
      <div
        className="w-12 h-12 mb-4 rounded-full bg-gradient-to-tr from-purple-600 to-black 
                   text-white flex items-center justify-center font-bold text-lg shadow-md"
      >
        {index + 1}
      </div>
      <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </motion.div>
  );
};

const Feature = () => {
  const data = [
    {
      title: "Unmatched Immersion and Realism",
      body: "Experience lifelike environments that engage all your senses and transport you beyond reality.",
    },
    {
      title: "Seamless Integration with Your Lifestyle",
      body: "Our VR solutions fit effortlessly into your world — for work, play, and everything in between.",
    },
    {
      title: "Cutting-Edge VR Technology",
      body: "Designed with precision for both casual users and professionals seeking the next frontier.",
    },
  ];

  return (
    <section
      className="relative px-6 md:px-10 py-24 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${vrBg})`,
      }}
    >
      {/* === Overlay for Readability === */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      {/* === Soft Color Glow === */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-500/20 blur-3xl pointer-events-none" />

      {/* === Section Header === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-300">
          Explore the Future
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
          The Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Virtual Reality
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Our VR products redefine immersion, enabling you to interact, explore,
          and experience worlds beyond imagination.
        </p>
      </motion.div>

      {/* === Feature Cards === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 perspective-[1000px]">
        {data.map((f, i) => (
          <TiltCard key={i} index={i} title={f.title} body={f.body} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
