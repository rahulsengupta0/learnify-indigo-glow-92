
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowLeft, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from '@/hooks/use-mobile';

interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const TopInstructorsSection = () => {
  const instructors: Instructor[] = [
    {
      id: 1,
      name: "Dr. Maya Johnson",
      title: "Lead Data Science Mentor",
      bio: "Former Google AI researcher with 10+ years experience in machine learning and data visualization.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Robert Chen",
      title: "Frontend Development Expert",
      bio: "UI/UX specialist who has worked with Fortune 500 companies building scalable web applications.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Sophia Patel",
      title: "Product Management Coach",
      bio: "15+ years experience leading product teams at Amazon and Microsoft, specializing in agile methodologies.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop",
      socialLinks: {
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Cybersecurity Instructor",
      bio: "Certified ethical hacker and security consultant for government agencies and major corporations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      socialLinks: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Dr. Amara Okafor",
      title: "AI Ethics Researcher",
      bio: "Pioneering work in responsible AI deployment with publications in leading academic journals.",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop",
      socialLinks: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Daniel Martinez",
      title: "Backend Architecture Specialist",
      bio: "Cloud infrastructure expert who has designed systems handling millions of concurrent users.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      socialLinks: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<any>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");
  
  // Auto-scroll functionality
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (apiRef.current && typeof apiRef.current.scrollNext === 'function') {
          apiRef.current.scrollNext();
        }
      }, 5000); // Scroll every 5 seconds - slow and smooth
    };
    
    // Start auto-scrolling after a short delay
    const timeoutId = setTimeout(startAutoScroll, 2000);
    
    // Pause auto-scrolling when hovering over the carousel
    const handleMouseEnter = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
    
    // Resume auto-scrolling when leaving the carousel
    const handleMouseLeave = () => {
      if (!intervalId) {
        startAutoScroll();
      }
    };
    
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', handleMouseEnter);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
      clearTimeout(timeoutId);
      
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', handleMouseEnter);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="instructors" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-lms-primary/5"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-lms-primary/5"></div>
      </div>

      <div className="section-container">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-lms-primary font-medium mb-2">Learn from the best in the industry</p>
          <h2 className="heading-lg mb-4">Meet Your Instructors</h2>
          <p className="subtext mb-8">
            Our instructors are industry leaders with years of real-world experience,
            committed to helping you achieve your learning goals.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="relative px-4 sm:px-6"
          ref={carouselRef}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
            setApi={(api) => {
              apiRef.current = api;
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {instructors.map((instructor) => (
                <CarouselItem 
                  key={instructor.id} 
                  className={`pl-2 md:pl-4 ${isMobile ? 'basis-full sm:basis-1/2' : 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'}`}
                >
                  <motion.div variants={item} className="h-full">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] group h-full">
                      <div className="relative">
                        <AspectRatio ratio={4/3} className="bg-slate-100">
                          <div className="absolute inset-0 overflow-hidden">
                            <Avatar className="w-full h-full rounded-none">
                              <AvatarImage src={instructor.image} alt={instructor.name} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                              <AvatarFallback className="text-3xl font-bold bg-lms-primary/10 w-full h-full rounded-none">
                                {instructor.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                        </AspectRatio>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                          <HoverCard openDelay={200} closeDelay={100}>
                            <HoverCardTrigger asChild>
                              <h3 className="font-bold text-lg cursor-pointer">{instructor.name}</h3>
                            </HoverCardTrigger>
                            <HoverCardContent side="bottom" className="w-80 p-4">
                              <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-12 h-12">
                                    <AvatarImage src={instructor.image} alt={instructor.name} />
                                    <AvatarFallback className="bg-lms-primary/30">
                                      {instructor.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h4 className="font-bold">{instructor.name}</h4>
                                    <p className="text-sm text-muted-foreground">{instructor.title}</p>
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                                <div className="flex items-center gap-2 mt-2">
                                  <Button size="sm" variant="outline" className="h-8 w-full">View Full Profile</Button>
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                          <p className="text-sm text-white/90 font-medium">{instructor.title}</p>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{instructor.bio}</p>
                        <div className="flex items-center gap-2 mt-auto">
                          {instructor.socialLinks?.linkedin && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-slate-100 hover:bg-lms-primary hover:text-white">
                              <Linkedin className="h-4 w-4" />
                              <span className="sr-only">LinkedIn</span>
                            </Button>
                          )}
                          {instructor.socialLinks?.twitter && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-slate-100 hover:bg-lms-primary hover:text-white">
                              <Twitter className="h-4 w-4" />
                              <span className="sr-only">Twitter</span>
                            </Button>
                          )}
                          {instructor.socialLinks?.github && (
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-slate-100 hover:bg-lms-primary hover:text-white">
                              <Github className="h-4 w-4" />
                              <span className="sr-only">GitHub</span>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 sm:-left-4 md:-left-6 bg-white hover:bg-lms-primary hover:text-white border border-gray-200" />
            <CarouselNext className="-right-2 sm:-right-4 md:-right-6 bg-white hover:bg-lms-primary hover:text-white border border-gray-200" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TopInstructorsSection;
