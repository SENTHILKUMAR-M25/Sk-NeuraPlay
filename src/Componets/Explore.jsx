import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import vr from "../assets/Explore.jpeg";

const Explore = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 px-6 md:px-16 rounded-t-3xl overflow-hidden">
      {/* === Floating Animated Backgrounds === */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/20 blur-3xl rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"
        animate={{ y: [0, -25, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* === Main Container === */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* === Left Section === */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Explore Inside the <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Vortek VR
            </span>
          </h2>

          <motion.ul
            className="space-y-2 text-gray-600 text-base tracking-wide"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <li className="font-semibold text-gray-800">Developer Insights</li>
            <li>Metaverse Trends</li>
            <li>Tech & Innovation</li>
          </motion.ul>
        </motion.div>

        {/* === Right Section (Blog Card) === */}
        <motion.div
          className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center border border-gray-100 hover:shadow-2xl transition-all duration-500 md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={vr}
            alt="VR Experience"
            className="w-full md:w-1/2 object-cover h-64 md:h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          <div className="p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              The Rise of Spatial Computing: What It Means for VR
            </h3>
            <p className="text-gray-500 mb-4 text-sm leading-relaxed">
              Discover how spatial computing is redefining interaction in VR —
              from hand tracking to room-scale awareness.
            </p>

            <motion.button
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 text-purple-600 font-semibold hover:underline"
            >
              Learn More <ArrowRight size={16} />
            </motion.button>

            <div className="text-sm text-gray-400 mt-3">
              Kai Mendoza • 08 July 2025
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Explore;
