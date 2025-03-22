import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function Carousel({slides}) {
  const [current, setCurrent] = useState(0);

  const nextSlide  = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full relative">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[400px] flex items-center justify-center bg-white text-white rounded-lg shadow-lg"
          >
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute lg:left-20 bg-black bg-opacity-50 p-4 rounded-lg">
              <h2 className="text-2xl font-bold">{slides[current].title}</h2>
              <p>{slides[current].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={prevSlide}
        className="absolute h-full w-20 left-0 top-1/2 transform -translate-y-1/2 text-black hover:bg-slate-200/60 transition-all duration-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute h-full w-20 right-0 top-1/2 transform -translate-y-1/2 text-black hover:bg-slate-200/60 transition-all duration-200"
      >
        &#10095;
      </button>
    </div>
  );
}