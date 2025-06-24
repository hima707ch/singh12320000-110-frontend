import React from 'react';
import ContactForm from './ContactForm';
import Hero from './Hero';
import { useContact } from './useContact';

const Body = () => {
  const { handleSubmit, isLoading, error, success } = useContact();

  return (
    <div id="Body_1" className="min-h-screen bg-gray-50">
      <Hero />
      <div id="Body_2" className="max-w-4xl mx-auto px-4 py-12">
        {error && <div id="Body_3" className="mb-4 p-4 bg-red-100 text-red-700 rounded">{error}</div>}
        {success && <div id="Body_4" className="mb-4 p-4 bg-green-100 text-green-700 rounded">{success}</div>}
        <ContactForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Body;