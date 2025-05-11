import React, { useEffect, useState } from 'react';

const videos = [
  {
    id: 1,
    title: 'Memanfaatkan Berbagai Platform Digital untuk Bisnis',
    speaker: 'Theresia Kartika W.',
    role: 'Founder/Director PT. Indonesian People Power',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID1/hqdefault.jpg',
  },
  {
    id: 2,
    title: 'Menggunakan Website dan Sosial Media untuk UMKM',
    speaker: 'Luthfia',
    role: 'Owner Chubbydut dan Toko Zam-Zam',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID2/hqdefault.jpg',
  },
  // Add more video objects as needed
];

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!hover) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000);

      return () => clearInterval(interval);
    }

    console.log("Hover is on, paused auto-slide");

    return undefined; // optional, but clearer
  }, [hover, currentIndex]);

  return (
    <div className="flex items-center justify-center w-full p-4 relative">
      <button
        onClick={handlePrev}
        className="absolute left-10 bg-white py-5 px-7 text-xl rounded-full shadow hover:bg-gray-100 z-10"
      >
        &#10094;
      </button>

      <div className="w-full max-w-3xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              onMouseEnter={() => {
                setHover(true);
                console.log("mouse is inside");
              }}
              onMouseLeave={() => {
                setHover(false);
                console.log("mouse is outside");
              }}
              className="min-w-full flex-shrink-0 flex flex-col items-center bg-white rounded-xl shadow-md p-4"
            >
              <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-80">
                  &#9658;
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>{video.speaker}</strong>
                  <br />
                  {video.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-10 bg-white py-5 px-7 text-xl rounded-full shadow hover:bg-gray-100 z-10"
      >
        &#10095;
      </button>
    </div>
  );
} 
