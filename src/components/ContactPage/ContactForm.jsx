import React from 'react';

const ContactForm = ({ onSubmit, isLoading }) => {
  return (
    <form id="ContactForm_1" onSubmit={onSubmit} className="bg-white shadow-xl rounded-lg p-8">
      <div id="ContactForm_2" className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          id="ContactForm_3"
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div id="ContactForm_4" className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input
          id="ContactForm_5"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div id="ContactForm_6" className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
        <textarea
          id="ContactForm_7"
          name="message"
          placeholder="Your message here"
          rows="5"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <button
        id="ContactForm_8"
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50"
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
};

export default ContactForm;