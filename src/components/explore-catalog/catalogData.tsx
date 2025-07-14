
import React from 'react';
import { 
  BookOpen, 
  GraduationCap,
  Target,
  TrendingUp,
  Users,
  Brain,
  Code,
  BarChart3,
  Video,
  FileText,
  Award
} from 'lucide-react';
import { LearningTrack, CatalogItem } from './types';

export const learningTracks: LearningTrack[] = [
  {
    icon: <Code size={32} />,
    title: "Programming Fundamentals",
    description: "Master core programming concepts through interactive modules and hands-on projects",
    type: "Skill Path",
    duration: "8-12 weeks",
    modules: 15,
    trackColor: "bg-blue-500",
    iconBg: "bg-blue-100/90"
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Data Analysis Essentials",
    description: "Learn to analyze and visualize data with modern tools and methodologies",
    type: "Certificate Track",
    duration: "6-8 weeks",
    modules: 12,
    trackColor: "bg-green-500",
    iconBg: "bg-green-100/90"
  },
  {
    icon: <Users size={32} />,
    title: "Leadership Microlearning",
    description: "Bite-sized lessons on leadership principles for busy professionals",
    type: "Microlearning",
    duration: "2-3 weeks",
    modules: 8,
    trackColor: "bg-purple-500",
    iconBg: "bg-purple-100/90"
  },
  {
    icon: <Brain size={32} />,
    title: "AI & Machine Learning",
    description: "Comprehensive journey through artificial intelligence and ML concepts",
    type: "Skill Path",
    duration: "12-16 weeks",
    modules: 20,
    trackColor: "bg-indigo-500",
    iconBg: "bg-indigo-100/90"
  },
  {
    icon: <Target size={32} />,
    title: "Project Management",
    description: "Complete certification track covering modern project management methodologies",
    type: "Certificate Track",
    duration: "10-12 weeks",
    modules: 18,
    trackColor: "bg-orange-500",
    iconBg: "bg-orange-100/90"
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Digital Marketing",
    description: "Strategic marketing skills for the digital age with practical applications",
    type: "Skill Path",
    duration: "6-10 weeks",
    modules: 14,
    trackColor: "bg-pink-500",
    iconBg: "bg-pink-100/90"
  }
];

export const catalogItems: CatalogItem[] = [
  {
    icon: <Video size={24} />,
    title: "Live Classes",
    description: "Interactive sessions with expert instructors",
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    hoverGradient: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-blue-200",
    iconBg: "bg-blue-500/10"
  },
  {
    icon: <FileText size={24} />,
    title: "Self-Paced Learning",
    description: "Learn at your own pace with structured modules",
    color: "bg-gradient-to-br from-green-50 to-green-100",
    hoverGradient: "hover:bg-gradient-to-br hover:from-green-100 hover:to-green-200",
    iconBg: "bg-green-500/10"
  },
  {
    icon: <Award size={24} />,
    title: "Certifications",
    description: "Industry-recognized credentials and certificates",
    color: "bg-gradient-to-br from-purple-50 to-purple-100",
    hoverGradient: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200",
    iconBg: "bg-purple-500/10"
  }
];
