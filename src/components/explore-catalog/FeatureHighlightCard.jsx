import React from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const FeatureHighlightCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-lms-primary/10 blur-lg"></div>
      <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-lms-secondary/10 blur-lg"></div>
      <Card className="overflow-hidden rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-lms-light/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-lms-primary/10 p-3 rounded-2xl">
                  <GraduationCap size={32} className="text-lms-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-lms-dark">Featured Category</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Most popular among students</p>
                </div>
              </div>
              <Badge variant="default" className="bg-lms-primary text-white px-3 py-1">New</Badge>
            </div>
            <div className="space-y-3">
              <div className="p-3 sm:p-4 bg-white/70 rounded-xl border border-gray-100 hover:border-lms-primary/20 transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                <h4 className="font-semibold">Certification Programs</h4>
                <p className="text-sm text-gray-600">Stand out in the job market with industry-recognized credentials</p>
              </div>
              <div className="p-3 sm:p-4 bg-white/70 rounded-xl border border-gray-100 hover:border-lms-primary/20 transition-all hover:bg-white hover:shadow-md hover:-translate-y-0.5">
                <h4 className="font-semibold">Professional Masterclasses</h4>
                <p className="text-sm text-gray-600">Learn directly from leading experts in your field</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="mt-3 text-lms-primary border-lms-primary/30 hover:bg-lms-light flex items-center gap-1"
            >
              View Featured Courses
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};