import React from 'react';
import Gallery from './Gallery';
import ProjectModal from './ProjectModal';
import { usePortfolio } from './usePortfolio';
import images from '../assets/images';

const Body = () => {
  const { projects, selectedProject, isModalOpen, handleProjectClick, closeModal } = usePortfolio();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8" id="Body_1">
      <div className="max-w-7xl mx-auto" id="Body_2">
        <div className="text-center mb-12" id="Body_3">
          <h1 className="text-4xl font-bold text-gray-900 mb-4" id="Body_4">My Portfolio</h1>
          <p className="text-lg text-gray-600" id="Body_5">Explore my latest works and projects</p>
        </div>
        <Gallery projects={projects} onProjectClick={handleProjectClick} />
        {isModalOpen && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default Body;