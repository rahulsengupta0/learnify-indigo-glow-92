import React from 'react';
import {
  MessageCircle,
  Video,
  BookOpen,
  Users,
  BarChart3,
  Award
} from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    icon: MessageCircle,
    title: "Live Chats & Support",
    description: "Real-time communication between learners and instructors."
  },
  {
    icon: Video,
    title: "Virtual Classrooms",
    description: "Interactive online learning with video conferencing."
  },
  {
    icon: BookOpen,
    title: "Course Authoring Tools",
    description: "Create engaging multimedia courses and content."
  },
  {
    icon: Users,
    title: "User Management",
    description: "Comprehensive user administration and enrollment."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track progress and engagement with detailed insights."
  },
  {
    icon: Award,
    title: "Certification System",
    description: "Issue digital certificates and manage credentials."
  }
];

const ServiceItemComponent = ({ item, isMobile }) => {
  const { icon: Icon, title, description } = item;

  if (isMobile) {
    return (
      <div className="flex flex-col py-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-lms-primary" />
          <span className="font-medium">{title}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1 pl-7">{description}</p>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-md transition-colors group cursor-pointer">
      <Icon className="h-5 w-5 text-lms-primary mt-0.5" />
      <div>
        <div className="font-medium">{title}</div>
        <p className="text-sm text-gray-500 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServicesDropdown = ({ className }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Collapsible className={cn("w-full", className)}>
        <CollapsibleTrigger className="flex w-full items-center justify-between text-gray-700 hover:text-lms-primary transition-colors py-2">
          <span>Services</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="animate-accordion-down mt-2">
          <div className="pl-2 border-l-2 border-gray-100">
            {serviceItems.map((item, idx) => (
              <ServiceItemComponent key={idx} item={item} isMobile={true} />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Popover>
      <PopoverTrigger className={cn("text-gray-700 hover:text-lms-primary transition-colors flex items-center gap-1", className)}>
        Services
        <ChevronDown className="h-4 w-4" />
      </PopoverTrigger>
      <PopoverContent className="w-72 p-2 bg-white shadow-lg animate-fade-in" align="start">
        <div className="grid gap-1">
          {serviceItems.map((item, idx) => (
            <ServiceItemComponent key={idx} item={item} />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ServicesDropdown;