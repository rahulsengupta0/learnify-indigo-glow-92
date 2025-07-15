import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, Monitor, Users, BarChart3, FileEdit, Award, Calendar, ExternalLink } from 'lucide-react';

const demoContents = {
  'instructor-dashboard': {
    title: "Instructor Dashboard Demo",
    description: "See how instructors can effortlessly manage their courses, track student progress, and create engaging content.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Intuitive course creation tools",
      "Real-time student progress tracking",
      "Content management system",
      "Grade book integration"
    ],
    icon: <Monitor size={24} />,
    demoType: "Interactive Dashboard Tour"
  },
  'learner-experience': {
    title: "Learner Experience Demo",
    description: "Discover how students navigate courses, complete assignments, and engage with interactive learning materials.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Interactive course navigation",
      "Assignment submission system",
      "Progress tracking",
      "Peer collaboration tools"
    ],
    icon: <Users size={24} />,
    demoType: "Student Journey Walkthrough"
  },
  'admin-analytics': {
    title: "Admin & Analytics Demo",
    description: "Get deep insights into learning outcomes, engagement metrics, and institutional performance data.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Comprehensive analytics dashboard",
      "Learning outcome reports",
      "Engagement metrics",
      "Performance insights"
    ],
    icon: <BarChart3 size={24} />,
    demoType: "Analytics Deep Dive"
  },
  'assignment-builder': {
    title: "Assignment Builder Demo",
    description: "Create interactive assignments, quizzes, and assessments with our powerful drag-and-drop builder.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Drag-and-drop interface",
      "Multiple question types",
      "Auto-grading system",
      "Custom rubrics"
    ],
    icon: <FileEdit size={24} />,
    demoType: "Builder Tutorial"
  },
  'certification-tracking': {
    title: "Certification Tracking Demo",
    description: "Automate certificate generation and track learner achievements throughout their educational journey.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Automated certificate generation",
      "Achievement tracking",
      "Compliance monitoring",
      "Badge management"
    ],
    icon: <Award size={24} />,
    demoType: "Certification Workflow"
  },
  'course-scheduling': {
    title: "Course Scheduling Demo",
    description: "Schedule live classes, manage virtual classrooms, and facilitate real-time student interaction.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    features: [
      "Live class scheduling",
      "Virtual classroom management",
      "Real-time interaction tools",
      "Recording capabilities"
    ],
    icon: <Calendar size={24} />,
    demoType: "Live Session Manager"
  }
};

const SuperDemoModal = ({ open, onOpenChange, demoKey }) => {
  if (!demoKey || !demoContents[demoKey]) {
    return null;
  }

  const demo = demoContents[demoKey];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-lms-primary/10 rounded-lg flex items-center justify-center">
              {React.cloneElement(demo.icon, {
                className: "text-lms-primary"
              })}
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-lms-primary">
                {demo.title}
              </DialogTitle>
              <p className="text-sm text-gray-500">{demo.demoType}</p>
            </div>
          </div>
          <DialogDescription className="text-base">
            {demo.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 overflow-y-auto">
          {/* Video/Demo Area */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video">
            <iframe
              src={demo.videoUrl}
              title={demo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Overlay for demo placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-lms-primary/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-center text-white">
                <Play size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Demo</p>
                <p className="text-sm opacity-90">Click to start the {demo.demoType.toLowerCase()}</p>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <h4 className="font-semibold text-lg mb-3 text-gray-900">Key Features Demonstrated:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {demo.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <div className="w-2 h-2 bg-lms-primary rounded-full flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button className="flex-1 bg-lms-primary hover:bg-lms-primary/90">
              <ExternalLink size={16} className="mr-2" />
              Try Interactive Demo
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Personal Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuperDemoModal;