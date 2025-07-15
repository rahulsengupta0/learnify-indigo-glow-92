import React from 'react';
import { motion } from 'framer-motion';
import { CatalogItemCard } from './CatalogItemCard';

export const CatalogItemsGrid = ({ items, isVisible }) => {
  // Define animation variants
  const containerVariants = {
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
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
    >
      {items.map((item, index) => (
        <CatalogItemCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  );
};