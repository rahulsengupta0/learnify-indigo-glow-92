
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import { ArrowRight, BarChart3, BookOpen, Users, GraduationCap, Settings, Award, Video, Calendar, Shield, Zap } from 'lucide-react';

const Demo = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const lmsFeatures = [
    {
      icon: <BookOpen className="h-8 w-8 text-lms-primary" />,
      title: "Course Creation Tools",
      description: "Build engaging courses with our intuitive drag-and-drop editor, multimedia support, and interactive elements.",
    },
    {
      icon: <Video className="h-8 w-8 text-purple-600" />,
      title: "Live & Self-Paced Learning",
      description: "Deliver content through live sessions, recorded videos, or self-paced modules to suit different learning styles.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Progress Tracking & Analytics",
      description: "Monitor learner progress with detailed analytics, completion rates, and performance insights.",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "User Management",
      description: "Efficiently manage students, instructors, and administrators with role-based access controls.",
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-600" />,
      title: "Certification Engine",
      description: "Create and issue digital certificates and badges upon course completion or milestone achievements.",
    },
    {
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      title: "Admin Tools",
      description: "Comprehensive administrative dashboard for managing courses, users, reports, and system settings.",
    },
  ];

  const whyChooseFeatures = [
    {
      icon: <Zap className="h-6 w-6 text-lms-primary" />,
      title: "Lightning Fast Setup",
      description: "Get your LMS up and running in minutes, not weeks"
    },
    {
      icon: <Shield className="h-6 w-6 text-lms-primary" />,
      title: "Enterprise Security",
      description: "Bank-level security with SSO, encryption, and compliance"
    },
    {
      icon: <Calendar className="h-6 w-6 text-lms-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance from our expert team"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <LMSNavbar />
      <main className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl mx-auto">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-white via-lms-light/30 to-lms-primary/10 py-16 md:py-24 overflow-hidden rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6">
          <DecorativeShapes variant="primary" intensity="medium" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <Badge variant="outline" className="mb-6 px-6 py-1.5 text-sm bg-white/80 backdrop-blur-sm">
                LMS Platform Demo
              </Badge>
              <h1 className="heading-xl mb-6">
                Experience <span className="text-lms-primary">Athena</span> in Action
              </h1>
              <p className="subtext max-w-3xl mx-auto mb-10">
                See how our LMS platform empowers educators, engages learners, and delivers measurable results 
                for institutions of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-lms-primary hover:bg-lms-primary/90 text-lg px-8 py-6"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Schedule a Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 border-lms-primary text-lms-primary hover:bg-lms-light"
                >
                  Watch Overview
                  <Video className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key LMS Features Section */}
        <section className="py-16 bg-white rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Powerful LMS Features</h2>
              <p className="subtext max-w-3xl mx-auto">
                Everything you need to create, deliver, and manage exceptional learning experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {lmsFeatures.map((feature, index) => (
                <Card key={index} className="card-hover border-none shadow-md group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-lms-light p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-lms-dark">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Preview Section */}
        <section className="py-16 bg-lms-light/50 rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">Intuitive Dashboard Experience</h2>
                <p className="subtext mb-8">
                  Athena's clean, modern interface makes learning management effortless. 
                  From course creation to student analytics, everything is designed for simplicity and efficiency.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <BookOpen className="h-6 w-6 text-lms-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Drag & Drop Course Builder</h3>
                      <p className="text-gray-600">Create courses visually with our intuitive editor</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <BarChart3 className="h-6 w-6 text-lms-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Real-Time Analytics</h3>
                      <p className="text-gray-600">Track progress and engagement instantly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      <Users className="h-6 w-6 text-lms-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Smart User Management</h3>
                      <p className="text-gray-600">Organize learners with automated workflows</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-lms-primary/10 rounded-xl transform rotate-3"></div>
                <div className="relative bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
                  <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-xs">Athena LMS Dashboard</div>
                  </div>
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                      alt="LMS Dashboard Preview" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Athena LMS */}
        <section className="py-16 bg-white rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-6">Why Choose Athena LMS?</h2>
              <p className="subtext max-w-2xl mx-auto">
                Built for the modern era of learning with enterprise-grade features and consumer-friendly design.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-6 rounded-xl bg-lms-light/30 hover:bg-lms-light/50 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="bg-white p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-lms-dark">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-16 bg-lms-light/50 rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-lg mb-6">See Athena LMS in Motion</h2>
            <p className="subtext max-w-2xl mx-auto mb-10">
              Watch how educators and learners interact with our platform to create engaging learning experiences.
            </p>
            
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute inset-0 bg-lms-primary/10 rounded-xl transform -rotate-2"></div>
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <AspectRatio ratio={16/9}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/EyqvrlODDuo"
                    title="Athena LMS Platform Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-lms-primary to-lms-secondary text-white rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6 relative overflow-hidden">
          <DecorativeShapes variant="secondary" intensity="subtle" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning Journey?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of institutions already empowering learners with Athena LMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-lms-primary hover:bg-white/90 text-lg px-8 py-6"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  <span>Schedule Your Demo</span>
                  <Calendar className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                >
                  <span>Contact Sales</span>
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  );
};

export default Demo;
