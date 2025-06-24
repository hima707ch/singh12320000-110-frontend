import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 id="CTA_2" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p id="CTA_3" className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who found their dream homes with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="CTA_4"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;