import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import vrImage from "../assets/Home.jpeg";

const Hero = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // === Mouse move for 3D rotation ===
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const rotateY = ((e.clientX - innerWidth / 2) / innerWidth) * 25;
    const rotateX = ((e.clientY - innerHeight / 2) / innerHeight) * 25;
    setRotate({ x: -rotateX, y: rotateY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className="relative min-h-screen w-full overflow-hidden flex justify-center items-center bg-[#030014]"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* === Motion World === */}
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-8 md:px-20 w-full max-w-7xl"
      >
        {/* === Background Light Effects === */}
        <div
          style={{ transform: "translateZ(-300px)" }}
          className="absolute top-[-250px] left-[-200px] w-[600px] h-[600px] bg-purple-600/30 blur-[180px] rounded-full"
        />
        <div
          style={{ transform: "translateZ(-300px)" }}
          className="absolute bottom-[-250px] right-[-200px] w-[600px] h-[600px] bg-blue-500/30 blur-[180px] rounded-full"
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
              transform: `translateZ(${Math.random() * 600 - 300}px)`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* === LEFT COLUMN: 3D TEXT === */}
        <div
          style={{ transform: "translateZ(120px)" }}
          className="relative text-center md:text-left space-y-6 z-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
          >
            ENTER THE <span className="text-white">VR DIMENSION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Step into a living 3D world where every color, shadow, and motion
            reacts to your presence. This isn’t just design — it’s depth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ transform: "translateZ(80px)" }}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-gray-500 text-gray-300 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
              <Play size={20} /> Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* === RIGHT COLUMN: 3D IMAGE === */}
        <motion.div
          style={{ transform: "translateZ(200px)" }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.img
            src={vrImage}
            alt="VR headset"
            className="w-[300px] sm:w-[400px] md:w-[500px] rounded-3xl shadow-[0_0_80px_rgba(147,51,234,0.5)]"
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 1, -1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
