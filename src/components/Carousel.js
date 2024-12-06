import React, { useEffect, useState } from "react";
import video1 from "../videos/video6.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video5.mp4";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [video1, video2, video3];
  const texts = [
    "Experience the art of travel with ASR Aviation",
    "Your sky, your way",
    "Soar above the clouds in luxury",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="relative w-full h-screen">
      {/* Carousel */}
      <div className="w-full h-full">
        <video
          src={videos[currentSlide]}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text over video */}
      <div className="absolute inset-0 flex justify-start items-center p-10 text-white">
        <div className="font-sans text-lg md:text-2xl lg:text-3xl font-extrabold max-w-xl leading-tight drop-shadow-md">
          {texts[currentSlide]}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
