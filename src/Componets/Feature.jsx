import React from "react";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

const TiltCard = ({ index, title, body }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate effect based on cursor movement
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
      className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg 
                 hover:shadow-2xl transition-all duration-300"
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
      body: "Experience lifelike environments that engage all your senses.",
    },
    {
      title: "Seamless Integration with Your Lifestyle",
      body: "Our VR solutions fit effortlessly into your daily routine.",
    },
    {
      title: "Cutting-Edge Every Technology",
      body: "Designed for both casual users and professionals alike.",
    },
  ];

  return (
    <section className="px-10 py-20 bg-gradient-to-br from-white via-gray-50 to-black/60 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-3xl pointer-events-none" />

      {/* === Section Header === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Explore the Future
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          The Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Virtual Reality
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Our VR products redefine immersive experiences, transporting users to
          new worlds. Discover the endless possibilities of virtual reality
          technology.
        </p>
      </motion.div>

      {/* === Features Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 perspective-1000">
        {data.map((f, i) => (
          <TiltCard key={i} index={i} title={f.title} body={f.body} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
