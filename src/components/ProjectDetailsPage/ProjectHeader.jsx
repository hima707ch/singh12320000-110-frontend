import React from 'react';

const ProjectHeader = ({ title }) => {
  return (
    <div id="ProjectHeader_1" className="mb-12">
      <h1 id="ProjectHeader_2" className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <div id="ProjectHeader_3" className="h-1 w-20 bg-blue-500"></div>
    </div>
  );
};

export default ProjectHeader;