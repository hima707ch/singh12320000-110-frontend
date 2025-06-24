import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="AboutUs_2" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Us</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Expert Guidance',
              description: 'Our experienced team provides professional advice to help you make informed decisions.',
              icon: '🎯'
            },
            {
              title: 'Curated Properties',
              description: 'Access to exclusive listings that match your specific requirements and preferences.',
              icon: '🏠'
            },
            {
              title: 'Seamless Experience',
              description: 'End-to-end support ensuring a smooth and hassle-free property buying journey.',
              icon: '✨'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300"
              id={`AboutUs_card_${index + 3}`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;