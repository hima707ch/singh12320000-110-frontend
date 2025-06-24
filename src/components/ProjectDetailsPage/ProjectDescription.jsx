import React from 'react';

const ProjectDescription = ({ description }) => {
  return (
    <div id="ProjectDescription_1" className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <h2 id="ProjectDescription_2" className="text-2xl font-semibold text-gray-800 mb-6">Project Overview</h2>
      <div id="ProjectDescription_3" className="prose max-w-none text-gray-600">
        {description}
      </div>
    </div>
  );
};

export default ProjectDescription;