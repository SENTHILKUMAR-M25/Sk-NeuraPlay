import React, { useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
const Partners = () => {
    const brands = ["Lightbox", "GlobalBank", "Nietzsche", "Boltshift", "Spherule"];

 const baseVelocity = 10; // base scroll speed
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 40, stiffness: 200 });

  // map scroll speed to multiplier (scroll faster → text moves faster)
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-2, 2]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let animationFrame;

    const update = () => {
      setPosition((prev) => {
        let newPos = prev - (baseVelocity + velocityFactor.get() * 10) / 60;
        if (newPos <= -100) newPos = 0; // loop reset
        return newPos;
      });
      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [velocityFactor]);

  return (
    <section className="relative overflow-hidden px-10 py-14 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
      <motion.div
        style={{ x: `${position}%` }}
        className="flex gap-15 text-gray-600 text-lg font-medium whitespace-nowrap"
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.1, color: "#111" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="px-6 py-3 bg-white/70 w-90 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            {brand}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}

export default Partners