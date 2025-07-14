
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LearningTrack } from './types';
import { LearningTrackCard } from './LearningTrackCard';

interface LearningTracksGridProps {
  items: LearningTrack[];
  isVisible: boolean;
}

export const LearningTracksGrid = ({ items, isVisible }: LearningTracksGridProps) => {
  // Define animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
    >
      {items.map((item, index) => (
        <LearningTrackCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  );
};
