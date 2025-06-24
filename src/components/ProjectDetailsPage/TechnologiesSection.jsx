import React from 'react';

const TechnologiesSection = ({ technologies }) => {
  return (
    <div id="TechnologiesSection_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="TechnologiesSection_2" className="text-2xl font-semibold text-gray-800 mb-6">Technologies Used</h2>
      <div id="TechnologiesSection_3" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            id={`TechnologiesSection_tech_${index}`}
            className="flex items-center p-4 bg-gray-50 rounded-lg"
          >
            <span className="text-gray-700">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSection;