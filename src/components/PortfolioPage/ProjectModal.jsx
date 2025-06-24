import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="ProjectModal_1">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" id="ProjectModal_2">
        <div className="p-6" id="ProjectModal_3">
          <div className="flex justify-between items-center mb-6" id="ProjectModal_4">
            <h2 className="text-2xl font-bold text-gray-900" id="ProjectModal_5">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              id="ProjectModal_6"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg mb-6"
            id="ProjectModal_7"
          />
          <div className="prose max-w-none" id="ProjectModal_8">
            <p className="text-gray-600 mb-4" id="ProjectModal_9">{project.description}</p>
            <div className="mt-4" id="ProjectModal_10">
              <h3 className="text-lg font-semibold mb-2" id="ProjectModal_11">Technologies Used</h3>
              <div className="flex flex-wrap gap-2" id="ProjectModal_12">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    id={`ProjectModal_${13 + index}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;