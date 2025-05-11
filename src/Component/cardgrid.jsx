import { useState } from "react";
import { motion } from "framer-motion";

export default function CardGrid({ slides }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:p-4 px-8">
      {slides.map((slide) => (
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative cursor-not-allowed w-full h-[300px] flex items-center justify-center bg-white text-white rounded-lg shadow-lg overflow-hidden "
        >
          <img
            src={slide.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg object-left"
          />
        </motion.div>
      ))}
    </div>
  );
}
