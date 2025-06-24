import React from 'react';
import images from '../assets/images';

const Gallery = ({ projects, onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="Gallery_1">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => onProjectClick(project)}
          id={`Gallery_${index + 2}`}
        >
          <div className="relative pb-[66.66%]" id={`Gallery_${index + 102}`}>
            <img
              src={project.image || images[index % images.length]}
              alt={project.title}
              className="absolute h-full w-full object-cover"
              id={`Gallery_${index + 202}`}
            />
          </div>
          <div className="p-4" id={`Gallery_${index + 302}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2" id={`Gallery_${index + 402}`}>
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm" id={`Gallery_${index + 502}`}>
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;