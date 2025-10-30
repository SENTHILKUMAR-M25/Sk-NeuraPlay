import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import vrImage from "../assets/VRH.jfif";
import Partners from "./Partners.jsx";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 py-16 items-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* === Left Content === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
            Futuristic VR
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            NEW FUTURE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              DIMENSION
            </span>
          </h1>

          <div className="flex items-center gap-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">75%</div>
              <div className="text-xs text-gray-500">Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">99%</div>
              <div className="text-xs text-gray-500">Reality</div>
            </div>
          </div>

          <p className="text-sm text-gray-600 max-w-xl leading-relaxed">
            Experience a new dimension of entertainment and innovation with our
            cutting-edge VR technology. Immerse yourself in worlds beyond
            imagination and redefine your reality.
          </p>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border rounded-lg text-sm text-gray-700 flex items-center gap-2 hover:bg-gray-100 transition-all duration-300"
            >
              <Play size={16} /> Watch a Demo
            </motion.button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs font-medium">
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          <motion.img
            src={vrImage}
            alt="VR headset"
            className="w-full max-w-md lg:max-w-lg object-cover drop-shadow-2xl rounded-2xl"
            whileHover={{ scale: 1.03, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl" />
        </motion.div>
      </section>

      {/* === Partners Section === */}
      <Partners />
    </div>
  );
};

export default Hero;
