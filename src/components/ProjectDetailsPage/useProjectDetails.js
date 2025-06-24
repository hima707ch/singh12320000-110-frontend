import { useState, useEffect } from 'react';

export const useProjectDetails = () => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // Simulated project data - replace with actual API call
        const projectData = {
          title: 'Real Estate Management System',
          description: 'A comprehensive real estate management system built with modern technologies. The project focuses on providing an intuitive interface for property management, user authentication, and seamless communication between property owners and potential buyers/renters.',
          images: [],
          technologies: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Tailwind CSS',
            'JWT Authentication',
            'RESTful APIs',
            'Docker'
          ]
        };
        
        setProject(projectData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch project details');
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, []);

  return { project, loading, error };
};
