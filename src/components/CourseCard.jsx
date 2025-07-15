import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden rounded-2xl border-0 shadow-md transition-all duration-300 hover:shadow-xl bg-white">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {course.isNew && (
              <Badge className="bg-lms-primary text-white">New</Badge>
            )}
            {course.isPopular && (
              <Badge className="bg-lms-secondary text-white">Popular</Badge>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-end">
            <div className="p-4 w-full">
              <Button
                className="w-full bg-lms-primary hover:bg-lms-primary/90 text-white"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <div className="mb-3">
            <h3 className="text-lg font-semibold mb-1 text-lms-dark line-clamp-2">{course.title}</h3>
            <p className="text-sm text-gray-600">by {course.instructor}</p>
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{course.description}</p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-lms-primary text-sm">
              <BookOpen className="w-4 h-4 mr-1" />
              <span>{course.duration}</span>

              {course.rating && (
                <div className="flex items-center ml-3">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CourseCard;