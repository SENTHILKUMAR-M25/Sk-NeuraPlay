import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import vrImage from "../assets/VRH.jfif";
import Partners from "./Partners.jsx";

const Hero = () => {
  return (
    <div className="relative overflow-hidden top-2">
      {/* === Animated Gradient Background Circles === */}
      <motion.div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-400/30 blur-[120px] rounded-full z-0"
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-blue-400/30 blur-[120px] rounded-full z-0"
        animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />

      {/* === Hero Section === */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-10 lg:px-16 xl:px-24 py-20 items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 z-10">
        {/* === Left Content === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-8 text-center md:text-left"
        >
          <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Futuristic VR
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            NEW FUTURE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
              DIMENSION
            </span>
          </h1>

          {/* === Stats Section === */}
          <div className="flex justify-center md:justify-start gap-10">
            <motion.div
              whileHover={{ y: -4 }}
              className="text-center bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm"
            >
              <div className="text-3xl font-bold text-gray-900">75%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Growth
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="text-center bg-white/60 backdrop-blur-md p-4 rounded-2xl shadow-sm"
            >
              <div className="text-3xl font-bold text-gray-900">99%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Reality
              </div>
            </motion.div>
          </div>

          {/* === Description === */}
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Experience a new dimension of entertainment and innovation with our
            cutting-edge VR technology. Immerse yourself in worlds beyond
            imagination and redefine your reality.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base font-semibold"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 border border-gray-300 rounded-xl text-sm sm:text-base text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300"
            >
              <Play size={18} /> Watch a Demo
            </motion.button>
          </div>

          {/* === Trusted By Section === */}
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-3 text-xs font-medium">
            <div className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-full">
              Trusted by Clients
            </div>
            <div className="bg-black text-white px-3 py-2 rounded-full">
              20M+ Clients
            </div>
          </div>
        </motion.div>

        {/* === Right Image === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mt-10 md:mt-0"
        >
          {/* Glow Effect Behind Image */}
          <div className="absolute w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-full animate-pulse" />

          {/* VR Image */}
          <motion.img
            src={vrImage}
            alt="VR headset"
            className="relative w-[85%] sm:w-[70%] md:w-[90%] max-w-lg object-cover rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </section>

      {/* === Partners Section === */}
      <Partners />
    </div>
  );
};

export default Hero;
