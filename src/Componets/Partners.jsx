import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";

const Partners = () => {
  const brands = ["Lightbox", "GlobalBank", "Nietzsche", "Boltshift", "Spherule"];

  const baseVelocity = 10;
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 200,
  });
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-2, 2]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrame;
    const update = () => {
      setPosition((prev) => {
        let newPos = prev - (baseVelocity + velocityFactor.get() * 10) / 60;
        if (newPos <= -100) newPos = 0;
        return newPos;
      });
      animationFrame = requestAnimationFrame(update);
    };
    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [velocityFactor]);

  return (
    <section className="relative overflow-hidden py-24 bg-[#030014] text-white">
      {/* Top gradient fade from Hero */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#030014] via-transparent to-transparent z-10" />

      {/* Neon ring overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(109,40,217,0.15)_0%,transparent_70%)]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* Floating particles for VR atmosphere */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-40"
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-14 relative z-20"
      >
        <p className="text-sm uppercase tracking-[4px] text-purple-300">
          Our Global Partners
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
            Powering the Future of VR
          </span>
        </h2>
      </motion.div>

      {/* Marquee Scroll */}
      <motion.div
        style={{ x: `${position}%` }}
        className="flex gap-16 text-gray-300 text-lg font-medium whitespace-nowrap relative z-20"
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <motion.span
            key={i}
            whileHover={{
              scale: 1.15,
              color: "#fff",
              textShadow:
                "0 0 10px rgba(168,85,247,0.8), 0 0 20px rgba(59,130,246,0.8)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md 
                       shadow-[0_0_25px_rgba(59,130,246,0.1)] hover:shadow-[0_0_35px_rgba(139,92,246,0.3)]
                       transition-all duration-500 cursor-pointer select-none"
          >
            {brand}
          </motion.span>
        ))}
      </motion.div>

      {/* Bottom fade into Feature section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#030014] via-transparent to-transparent z-10" />
    </section>
  );
};

export default Partners;
