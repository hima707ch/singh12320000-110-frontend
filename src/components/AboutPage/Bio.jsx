import React from 'react';
import images from '../assets/images';

const Bio = () => {
  return (
    <div id="Bio_1" className="bg-white rounded-lg shadow-lg p-8">
      <img id="Bio_2" src={images[0]} alt="Profile" className="w-48 h-48 rounded-full mx-auto mb-8 object-cover" />
      <h2 id="Bio_3" className="text-2xl font-semibold text-gray-800 mb-4">Professional Background</h2>
      <p id="Bio_4" className="text-gray-600 mb-4">
        With over 8 years of experience in software development, I specialize in building scalable web applications
        using modern technologies. My journey began in frontend development and has evolved to encompass
        full-stack expertise.
      </p>
      <p id="Bio_5" className="text-gray-600 mb-4">
        I've led multiple successful projects for Fortune 500 companies, focusing on creating intuitive user
        experiences while maintaining robust backend architectures.
      </p>
      <p id="Bio_6" className="text-gray-600">
        Currently, I'm passionate about exploring emerging technologies in AI and machine learning integration
        in web applications.
      </p>
    </div>
  );
};

export default Bio;