import { useState } from 'react';

export const useAbout = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadResume = async () => {
    try {
      setIsDownloading(true);
      
      // Simulated download delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a dummy PDF download
      const link = document.createElement('a');
      link.href = '/dummy-resume.pdf';
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return {
    isDownloading,
    downloadResume
  };
};