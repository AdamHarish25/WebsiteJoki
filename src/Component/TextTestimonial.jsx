import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        text: '"Dengan memanfaatkan berbagai platform digital, bisnis saya berkembang pesat dan menjangkau lebih banyak pelanggan."',
        speaker: "Melanie Ivone",
        role: "Founder/Director UrusijinusahaID",
    },
    {
        id: 2,
        text: "Website dan sosial media sangat membantu UMKM dalam meningkatkan visibilitas dan kepercayaan pelanggan.",
        speaker: "W. Lathif",
        role: "Founder Sinefolis Cinema",
    },
    // Add more testimonials as needed
];

export default function TextTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hover, setHover] = useState(false);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (!hover) {
            const interval = setInterval(() => {
                handleNext();
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [hover, currentIndex]);

    return (
      <div className="relative w-full flex justify-center items-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 flex-shrink-0 flex flex-col items-center justify-center px-6"
              style={{ minWidth: "100%", textAlign: "center" }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg h-fit">
                <p className="text-lg italic text-gray-800 leading-relaxed">
                  {testimonial.text}
                </p>
                <h4 className="font-semibold mt-2">{testimonial.author}</h4>
                <span className="text-sm text-gray-500">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute h-full w-20 left-0 lg:left-60 top-1/2 transform -translate-y-1/2 text-black hover:bg-slate-200/60 transition-all duration-200"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute h-full w-20 right-0 lg:right-60 top-1/2 transform -translate-y-1/2 text-black hover:bg-slate-200/60 transition-all duration-200"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    );
}
