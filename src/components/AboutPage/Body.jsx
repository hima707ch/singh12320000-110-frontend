import React from 'react';
import Bio from './Bio';
import Skills from './Skills';
import ResumeButton from './ResumeButton';
import { useAbout } from './useAbout';

const Body = () => {
  const { downloadResume } = useAbout();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div id="Body_2" className="max-w-7xl mx-auto">
        <h1 id="Body_3" className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h1>
        <div id="Body_4" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Bio />
          <Skills />
        </div>
        <div id="Body_5" className="mt-12 text-center">
          <ResumeButton onDownload={downloadResume} />
        </div>
      </div>
    </div>
  );
};

export default Body;