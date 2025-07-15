import React from 'react';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const LearningTrackCard = ({ item, index }) => {
  return (
    <motion.div 
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }}
      className="h-full"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Card className="group cursor-pointer h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
        <div className={`h-2 ${item.trackColor} transition-all duration-300 group-hover:h-3`}></div>
        
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl ${item.iconBg} inline-block`}>
              {React.cloneElement(item.icon, { 
                size: 24, 
                className: "text-lms-primary" 
              })}
            </div>
            <Badge variant="outline" className="text-xs bg-lms-light/50">
              {item.type}
            </Badge>
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-lms-dark group-hover:text-lms-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="space-y-3 mt-auto">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{item.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Award size={14} />
                <span>Certificate</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-lms-primary">
                {item.modules} modules
              </span>
              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-lms-primary group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};