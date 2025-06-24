import React from 'react';

const ResumeButton = ({ onDownload }) => {
  return (
    <button
      id="ResumeButton_1"
      onClick={onDownload}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg
                 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
    >
      <svg
        id="ResumeButton_2"
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download Resume
    </button>
  );
};

export default ResumeButton;