import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectDescription from './ProjectDescription';
import ProjectGallery from './ProjectGallery';
import TechnologiesSection from './TechnologiesSection';
import { useProjectDetails } from './useProjectDetails';

const Body = () => {
  const { project, loading, error } = useProjectDetails();

  if (loading) return <div id="Body_1" className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="min-h-screen bg-gray-50 py-12">
      <div id="Body_4" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectHeader title={project.title} />
        <ProjectDescription description={project.description} />
        <ProjectGallery images={project.images} />
        <TechnologiesSection technologies={project.technologies} />
      </div>
    </div>
  );
};

export default Body;