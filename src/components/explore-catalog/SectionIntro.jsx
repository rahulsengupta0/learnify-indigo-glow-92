import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const SectionIntro = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-xl"
    >
      <p className="text-lms-primary font-medium text-lg mb-2">Structured Learning Journeys</p>
      <h2 className="heading-lg mb-4 text-5xl font-bold">Learning <span className="text-lms-primary">Tracks & Skill Paths</span></h2>
      <p className="subtext text-lg text-gray-600 mb-8">
        Discover guided learning journeys designed to build expertise step-by-step. 
        From microlearning modules to comprehensive skill paths and certification tracks.
      </p>
      <Button 
        className="bg-lms-primary hover:bg-lms-primary/90 text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
      >
        Explore Learning Paths
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  );
};