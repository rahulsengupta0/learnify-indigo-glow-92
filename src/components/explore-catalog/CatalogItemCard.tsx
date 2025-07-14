
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { CatalogItem } from './types';

interface CatalogItemCardProps {
  item: CatalogItem;
  index: number;
}

export const CatalogItemCard = ({ item, index }: CatalogItemCardProps) => {
  return (
    <HoverCard key={index} openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <motion.div 
          variants={{
            hidden: { y: 20, opacity: 0 },
            show: { y: 0, opacity: 1 }
          }}
          className="h-full"
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
        >
          <div 
            className="
              group cursor-pointer rounded-2xl p-4 
              bg-white/60 hover:bg-white/80 
              border border-gray-100/50 hover:border-gray-200/60
              backdrop-blur-sm shadow-sm hover:shadow-md
              transition-all duration-300 h-full min-h-[120px]
              flex flex-col items-center justify-center text-center
            "
          >
            <div className={`
              mb-2 p-2 rounded-xl ${item.iconBg} 
              inline-block w-12 h-12 flex items-center justify-center 
              text-lms-primary shadow-sm group-hover:scale-105 transition-transform
            `}>
              {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
            </div>
            <h3 className="text-sm font-semibold mb-1 text-lms-dark group-hover:text-lms-primary transition-colors leading-tight">
              {item.title}
            </h3>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              {item.description}
            </p>
            <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-lms-primary opacity-60 group-hover:opacity-100 transition-all" />
          </div>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-lms-primary/10">
        <p className="text-sm text-gray-600">Discover our selection of {item.title.toLowerCase()} and take your skills to the next level.</p>
      </HoverCardContent>
    </HoverCard>
  );
};
