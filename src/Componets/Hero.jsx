import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import vrImage from "../assets/Home.jpeg";

const Hero = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const rotateY = ((e.clientX - innerWidth / 2) / innerWidth) * 25;
    const rotateX = ((e.clientY - innerHeight / 2) / innerHeight) * 25;
    setRotate({ x: -rotateX, y: rotateY });
  };

  const handleWatchDemo = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setShowVideo(true);
    }, 3000); // Show popup for 3 seconds
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

      {/* === Main Content === */}
      <motion.div
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center px-8 md:px-20 w-full max-w-7xl"
      >
        {/* === LEFT COLUMN === */}
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
              onClick={handleWatchDemo}
              className="px-10 py-4 border border-gray-500 text-gray-300 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
              <Play size={20} /> Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* === RIGHT COLUMN (VR IMAGE) === */}
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

      {/* === Popup Message (3 seconds) === */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-xl text-sm md:text-base font-medium z-[100]"
          >
            📱 Play the video on mobile for a better experience!
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Video Modal === */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[200]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-[90%] md:w-[70%] aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.5)]"
            >
              <iframe
                src="https://www.youtube.com/embed/tR8ZtyhSDYw?si=z-HJoczvte7iV3BA&autoplay=1"
                title="Vortek VR Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>

              {/* Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
