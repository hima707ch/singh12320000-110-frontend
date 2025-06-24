import React, { useState } from 'react';
import images from '../assets/images';

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  return (
    <div id="ProjectGallery_1" className="relative mb-12">
      <div id="ProjectGallery_2" className="relative h-96 overflow-hidden rounded-lg">
        <img
          id="ProjectGallery_3"
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <button
          id="ProjectGallery_4"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ←
        </button>
        <button
          id="ProjectGallery_5"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          →
        </button>
      </div>
      <div id="ProjectGallery_6" className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            id={`ProjectGallery_dot_${index}`}
            className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;