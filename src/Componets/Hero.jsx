import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import vrImage from "../assets/Home.jpeg";
import Partners from "./Partners.jsx";

const Hero = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // === Mouse movement to control camera tilt ===
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
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center bg-[#030014]"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* === 3D WORLD === */}
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        {/* === Background glows === */}
        <div
          style={{ transform: "translateZ(-400px)" }}
          className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-purple-500/30 blur-[160px] rounded-full"
        />
        <div
          style={{ transform: "translateZ(-300px)" }}
          className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-500/30 blur-[160px] rounded-full"
        />

        {/* === Floating Particles === */}
        {[...Array(40)].map((_, i) => (
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
              duration: 5 + Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* === 3D HERO CONTENT === */}
        <div
          className="relative text-center px-6 sm:px-10 md:px-20 max-w-5xl"
          style={{ transform: "translateZ(100px)" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
          >
            ENTER THE <span className="text-white">VR DIMENSION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Step into a living 3D world where every motion, color, and shadow
            responds to your presence. This is not flat design — this is true
            depth and immersion.
          </motion.p>

          {/* === Buttons === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ transform: "translateZ(80px)" }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
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

        {/* === 3D Floating VR Image === */}
        <motion.img
          src={vrImage}
          alt="VR headset"
          style={{ transform: "translateZ(220px)" }}
          className="absolute bottom-10 md:bottom-16 right-10 md:right-20 w-[300px] sm:w-[400px] md:w-[500px] rounded-3xl shadow-[0_0_80px_rgba(147,51,234,0.5)]"
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

      {/* === Partners at depth === */}
      <motion.div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-20 mt-10"
      >
        
      </motion.div>
    </div>
  );
};

export default Hero;
