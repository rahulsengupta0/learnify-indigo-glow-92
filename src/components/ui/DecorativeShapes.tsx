
import React from 'react';
import { motion } from 'framer-motion';

interface DecorativeShapesProps {
  variant?: 'primary' | 'secondary' | 'accent';
  intensity?: 'subtle' | 'medium' | 'high';
  position?: 'top' | 'center' | 'bottom' | 'full';
}

export const DecorativeShapes: React.FC<DecorativeShapesProps> = ({
  variant = 'primary',
  intensity = 'subtle',
  position = 'full'
}) => {
  // Set colors based on variant
  const primaryColor = 'bg-lms-primary';
  const secondaryColor = 'bg-purple-200';
  const accentColor = 'bg-indigo-200';
  
  // Set opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'high': return 'opacity-40';
      case 'medium': return 'opacity-30';
      case 'subtle':
      default: return 'opacity-20';
    }
  };
  
  // Set positioning based on position prop
  const getPosition = () => {
    switch (position) {
      case 'top': return 'top-0 left-0 right-0 h-1/2';
      case 'center': return 'top-1/4 left-0 right-0 h-1/2';
      case 'bottom': return 'bottom-0 left-0 right-0 h-1/2';
      case 'full':
      default: return 'inset-0';
    }
  };
  
  const baseColor = variant === 'primary' ? primaryColor : variant === 'secondary' ? secondaryColor : accentColor;
  const opacity = getOpacity();
  const positioning = getPosition();
  
  return (
    <div className={`absolute ${positioning} overflow-hidden -z-10 w-full`}>
      <motion.div 
        className={`absolute -top-10 -left-20 w-96 h-96 rounded-full ${baseColor} ${opacity} blur-3xl`}
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className={`absolute -bottom-20 -right-20 w-[30rem] h-[30rem] rounded-full ${variant === 'primary' ? 'bg-purple-200' : 'bg-lms-primary'} ${opacity} blur-3xl`}
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      <motion.div 
        className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full ${variant === 'secondary' ? 'bg-lms-primary' : 'bg-indigo-200'} ${opacity} blur-3xl`}
        animate={{ 
          y: [0, 15, 0],
          x: [0, -15, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      />
      <motion.div 
        className={`absolute top-2/3 right-1/4 w-72 h-72 rounded-full ${variant === 'accent' ? 'bg-purple-200' : 'bg-blue-200'} ${opacity} blur-3xl`}
        animate={{ 
          y: [0, -10, 0],
          x: [0, 10, 0],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
      />
    </div>
  );
};
