import React from 'react';
import { motion } from 'framer-motion';

export const BottomCTA = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
      className="mt-16 text-center"
    >
      {/* Button removed as requested */}
    </motion.div>
  );
};