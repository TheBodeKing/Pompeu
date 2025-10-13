import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ currentIndex, setCurrentIndex }) => {
  // Placeholder images - replace with your actual images
  const images = [
    "https://via.placeholder.com/800x500/667eea/ffffff?text=Image+1",
    "https://via.placeholder.com/800x500/764ba2/ffffff?text=Image+2",
    "https://via.placeholder.com/800x500/f093fb/ffffff?text=Image+3",
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto p-4">
      {/* Image */}
      <div className="w-full lg:h-70 h-50 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 dark:text-amber-400 text-gray-800" />
        </button>

        {/* Number Buttons */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-10 h-10 rounded-lg transition-colors cursor-pointer ${
                currentIndex === index
                  ? "bg-amber-400 text-gray-900"
                  : "bg-gray-200 dark:bg-gray-800 dark:text-amber-400 text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 "
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 dark:text-amber-400 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
