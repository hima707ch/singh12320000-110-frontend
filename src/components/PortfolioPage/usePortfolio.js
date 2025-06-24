import { useState } from 'react';

export const usePortfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with cart and checkout functionality.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://example.com/project1.jpg'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media performance tracking.',
      technologies: ['React', 'Redux', 'Chart.js'],
      image: 'https://example.com/project2.jpg'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management tool for teams.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      image: 'https://example.com/project3.jpg'
    }
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return {
    projects,
    selectedProject,
    isModalOpen,
    handleProjectClick,
    closeModal
  };
};