import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import vrHeadset from "../assets/VRH.jfif"; // logo or headset image

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-black via-[#0b0b0b] to-gray-900 text-gray-400 py-20 px-8 md:px-20 overflow-hidden">
      {/* === Background Accent Lights === */}
      <motion.div
        className="absolute -top-20 left-10 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"
        animate={{ y: [0, 25, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* === Footer Content === */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 z-10"
      >
        {/* === Logo & Description === */}
        <div>
          <motion.img
            src={vrHeadset}
            alt="Vortek Logo"
            className="w-28 mb-5 opacity-90 rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <p className="text-sm leading-relaxed mb-6 text-gray-400">
            Vortek is redefining what’s possible in virtual reality — blending immersive experiences, 
            cutting-edge technology, and intuitive design to transport users beyond the limits of the physical world.
          </p>
          <div className="flex gap-4 text-white mt-4">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="hover:text-gray-400 cursor-pointer" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* === Location === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-4">Location</h4>
          <p className="text-sm leading-relaxed">
            42 Quantum Drive, New Seattle,
            <br />
            EarthNet Zone 7
          </p>
        </motion.div>

        {/* === Contact === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-4">Call Us</h4>
          <p className="text-sm mb-4">+1 (889) 555-0132</p>
          <h4 className="text-white font-semibold mb-4">Email</h4>
          <p className="text-sm">support@vortek.io</p>
        </motion.div>

        {/* === Quick Links === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["FAQ", "Terms of Service", "Privacy Policy"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 8, color: "#fff" }}
                transition={{ type: "spring", stiffness: 250 }}
                className="cursor-pointer"
              >
                {link}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* === Bottom Bar === */}
      <motion.div
        className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        © 2025 <span className="text-white font-semibold">Vortek</span>. All rights reserved.
      </motion.div>
    </footer>
  );
}
