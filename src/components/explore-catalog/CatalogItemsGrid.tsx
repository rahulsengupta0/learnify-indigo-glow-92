
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CatalogItem } from './types';
import { CatalogItemCard } from './CatalogItemCard';

interface CatalogItemsGridProps {
  items: CatalogItem[];
  isVisible: boolean;
}

export const CatalogItemsGrid = ({ items, isVisible }: CatalogItemsGridProps) => {
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
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
    >
      {items.map((item, index) => (
        <CatalogItemCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  );
};
