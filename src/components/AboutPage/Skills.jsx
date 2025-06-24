import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'AWS', level: 70 }
  ];

  return (
    <div id="Skills_1" className="bg-white rounded-lg shadow-lg p-8">
      <h2 id="Skills_2" className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h2>
      <div id="Skills_3" className="space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} id={`Skills_${index + 4}`} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;