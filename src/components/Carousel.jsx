import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slide = ({ imageSrc, title, subtitle, description }) => (
  <div className="relative">
    <img
      src={imageSrc}
      alt="Slide"
      className="w-full h-[300px] lg:w-full lg:h-[600px] lg:pl-5 lg:pr-5"
    />
    <div className="absolute inset-0 flex flex-col items-start justify-center p-4 text-white ml-12 lg:ml-52 ">
      <h1 className="text-4xl lg:text-[80px] font-bold mb-6 lg:mb-20">{title}</h1>
      <h2 className="text-2xl lg:text-[50px] mb-12 lg:mb-40">{subtitle}</h2>
      <p className="text-sm lg:text-[20px] mt-16 ">{description}</p>
    </div>
  </div>
);

export default function Carousel({ slides, autoSlide = true, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const carouselRef = useRef(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const distance = x - startX;
    const threshold = 50; // Minimum distance to trigger a slide change

    if (distance > threshold) {
      goToPrevious();
      setIsDragging(false);
    } else if (distance < -threshold) {
      goToNext();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        goToNext();
      }, interval);

      return () => clearInterval(slideInterval);
    }
  }, [currentIndex, interval, autoSlide]);

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden relative w-full"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      <div className="flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full transition-transform ease-out duration-500 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <Slide {...slide} />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between mx-2">
        <button
          onClick={goToPrevious}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white lg:ml-5"
        >
          <ChevronLeft size={25} />
        </button>
        <button
          onClick={goToNext}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white lg:mr-5"
        >
          <ChevronRight size={25} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentIndex(slideIndex)}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currentIndex === slideIndex ? 'p-1' : 'bg-opacity-50'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
