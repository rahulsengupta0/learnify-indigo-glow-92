import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import LMSNavbar from '@/components/LMSNavbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import LiveChatModal from '@/components/LiveChatModal';
import Chatbot from '@/components/Chatbot';
import AthenaPlatformFeatures from '@/components/AthenaPlatformFeatures';
import { 
  Users,
  MessageCircle,
  GraduationCap,
  Award,
  ClipboardCheck,
  BarChart3,
  ChevronDown,
  BookOpen,
  Video,
  Calendar,
  ArrowRight,
  Monitor,
  FileText,
  Target,
  Zap,
  Shield,
  Headphones
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

// Types
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  category: string;
  isHighlighted?: boolean;
}

type ServiceCategory = 'all' | 'learning' | 'communication' | 'management';

// Service Card Component with Enhanced Visual Design
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index, category, isHighlighted }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className="group"
    >
      <Card className={`backdrop-blur-sm border transition-all duration-300 h-full ${
        isHighlighted 
          ? 'bg-gradient-to-br from-lms-primary/5 to-lms-light/20 border-lms-primary/20 hover:shadow-xl hover:shadow-lms-primary/10' 
          : 'bg-white/80 border-gray-100/50 hover:shadow-xl hover:shadow-lms-primary/5'
      }`}>
        <CardContent className="p-6">
          <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm ${
            isHighlighted 
              ? 'bg-gradient-to-br from-lms-primary to-lms-primary/80 text-white' 
              : 'bg-gradient-to-br from-lms-light to-white text-lms-primary'
          }`}>
            {icon}
          </div>
          <h3 className={`text-xl font-semibold mb-3 group-hover:text-lms-primary transition-colors ${
            isHighlighted ? 'text-lms-primary' : 'text-lms-dark'
          }`}>
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
          {isHighlighted && (
            <div className="mt-4 flex items-center text-sm text-lms-primary font-medium">
              <Zap className="w-4 h-4 mr-1" />
              Featured Service
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Floating LMS Icon Component
const FloatingIcon = ({ icon, delay = 0, position = {} }: { icon: React.ReactNode, delay?: number, position?: any }) => {
  return (
    <motion.div 
      className="absolute"
      style={position}
      animate={{ 
        y: [0, -15, 0],
        rotate: [0, 5, 0],
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity,
        delay,
        ease: "easeInOut" 
      }}
    >
      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-lg text-lms-primary">
        {icon}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [liveChatModalOpen, setLiveChatModalOpen] = useState(false);
  
  // Set the page title when component mounts
  useEffect(() => {
    document.title = 'LMS Services | Athena';
  }, []);

  const handleHumanAgentRequest = () => {
    // This could trigger opening a contact form, scheduling a demo, or other lead generation actions
    console.log('Human agent requested - this could trigger lead generation flow');
    // You could also scroll to the contact section or show a contact modal
  };

  // LMS Services data with category information
  const services = [
    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Live Chats & Support",
      description: "Real-time communication between learners and instructors with instant messaging, Q&A sessions, and 24/7 support channels.",
      category: "communication",
      isHighlighted: true
    },
    {
      icon: <Video className="w-7 h-7" />,
      title: "Virtual Classrooms",
      description: "Interactive online learning environments with video conferencing, screen sharing, and collaborative whiteboards.",
      category: "learning"
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Course Authoring Tools",
      description: "Create engaging multimedia courses with videos, quizzes, assignments, and interactive content using our intuitive builder.",
      category: "learning"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "User Management",
      description: "Comprehensive user administration with role-based access, group management, and enrollment tracking.",
      category: "management"
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Analytics & Reporting",
      description: "Track learner progress, course effectiveness, and engagement metrics with detailed analytics dashboards.",
      category: "management"
    },
    {
      icon: <ClipboardCheck className="w-7 h-7" />,
      title: "Assessment Engine",
      description: "Advanced testing and assessment tools with automated grading, plagiarism detection, and custom rubrics.",
      category: "learning"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Certification System",
      description: "Issue digital certificates and badges with blockchain verification and automated credential management.",
      category: "management"
    },
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Learning Paths",
      description: "Create structured learning journeys with prerequisites, milestones, and personalized recommendations.",
      category: "learning"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SSO integration, data encryption, and compliance with educational standards.",
      category: "management"
    }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <LMSNavbar />
      <main>
        {/* Enhanced Hero Section for LMS Platform */}
        <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-lms-primary/90 via-lms-primary/70 to-lms-light">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" fill="none">
              <path fill="#ffffff" fillOpacity="0.8" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            
            {/* Decorative Circles */}
            <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          </div>

          <div className="section-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Text and CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white mb-6 shadow-lg">
                  <span className="mr-2">🎓</span>
                  Complete Learning Management System
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Powerful <span className="relative">
                    LMS Services
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C67 2 143 1 199 6.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-lg">
                  Comprehensive learning management platform with real-time communication, advanced analytics, and seamless course delivery.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-lms-primary hover:bg-white/90 px-8 rounded-full shadow-lg"
                  >
                    Explore All Features
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="bg-transparent border-white text-white hover:bg-white/10 px-8 rounded-full"
                  >
                    Schedule Demo
                  </Button>
                </div>

                {/* Client Success Stats */}
                <div className="mt-12">
                  <p className="text-white/80 text-sm mb-4">TRUSTED BY LEADING INSTITUTIONS</p>
                  <div className="flex flex-wrap gap-8 items-center">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <motion.p 
                        className="text-white font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        500+ Universities
                      </motion.p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <motion.p 
                        className="text-white font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      >
                        1M+ Active Learners
                      </motion.p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <motion.p 
                        className="text-white font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        99.9% Uptime
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Side: LMS Dashboard Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                {/* Main LMS Dashboard Card */}
                <div className="relative z-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/50 p-6">
                  {/* Dashboard Header */}
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="font-bold text-lms-dark">Learning Management System</h3>
                      <p className="text-sm text-gray-500">Real-time Analytics Dashboard</p>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* LMS Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-lms-primary" />
                        <span className="text-xs text-gray-500">Active Learners</span>
                      </div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="text-2xl font-bold text-lms-dark"
                      >
                        2,847
                      </motion.div>
                      <div className="text-xs text-green-500">+12% this week</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-lms-primary" />
                        <span className="text-xs text-gray-500">Certificates Issued</span>
                      </div>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: 0.5,
                          ease: "easeInOut" 
                        }}
                        className="text-2xl font-bold text-lms-dark"
                      >
                        486
                      </motion.div>
                      <div className="text-xs text-green-500">+8% this month</div>
                    </div>
                  </div>
                  
                  {/* Course Progress Chart */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-4 h-4 text-lms-primary" />
                      <span className="text-sm font-medium">Course Completion Rates</span>
                    </div>
                    <div className="flex justify-between items-end h-16">
                      <motion.div 
                        className="w-6 bg-lms-primary/80 rounded-t-md"
                        animate={{ height: ['40%', '70%', '60%'] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      ></motion.div>
                      <motion.div 
                        className="w-6 bg-lms-primary/80 rounded-t-md"
                        animate={{ height: ['65%', '45%', '80%'] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      ></motion.div>
                      <motion.div 
                        className="w-6 bg-lms-primary/80 rounded-t-md"
                        animate={{ height: ['30%', '85%', '50%'] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      ></motion.div>
                      <motion.div 
                        className="w-6 bg-lms-primary rounded-t-md"
                        animate={{ height: ['75%', '35%', '90%'] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  {/* Live Chat Indicator */}
                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Live Chat Active</span>
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.7, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity
                        }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-green-600 mt-1">24 instructors online • 156 active conversations</p>
                  </div>
                </div>
                
                {/* Floating LMS Icons */}
                <FloatingIcon 
                  icon={<Video className="w-6 h-6" />} 
                  position={{ top: '-20px', left: '10%' }}
                />
                <FloatingIcon 
                  icon={<MessageCircle className="w-6 h-6" />} 
                  delay={1.5}
                  position={{ bottom: '10%', right: '-20px' }}
                />
                <FloatingIcon 
                  icon={<BookOpen className="w-6 h-6" />} 
                  delay={1}
                  position={{ top: '30%', right: '-30px' }}
                />
                <FloatingIcon 
                  icon={<Award className="w-6 h-6" />} 
                  delay={2}
                  position={{ bottom: '-15px', left: '30%' }}
                />
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            className="mx-auto mt-12 cursor-pointer w-10 relative z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
          >
            <ChevronDown size={30} className="text-white mx-auto" />
          </motion.div>
        </section>

        {/* LMS Services Grid Section with Category Tabs */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-md">Complete LMS Platform Services</h2>
              <p className="subtext max-w-3xl mx-auto mt-4">
                Everything you need to deliver exceptional learning experiences, from course creation to real-time communication and advanced analytics.
              </p>
              
              {/* Category Tabs */}
              <Tabs 
                defaultValue="all" 
                className="w-full max-w-2xl mx-auto mt-8"
                onValueChange={(value) => setSelectedCategory(value as ServiceCategory)}
              >
                <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto bg-gray-100/80">
                  <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-lms-primary">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="learning" className="data-[state=active]:bg-white data-[state=active]:text-lms-primary">
                    <BookOpen className="w-4 h-4 mr-1" />
                    Learning
                  </TabsTrigger>
                  <TabsTrigger value="communication" className="data-[state=active]:bg-white data-[state=active]:text-lms-primary">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Communication
                  </TabsTrigger>
                  <TabsTrigger value="management" className="data-[state=active]:bg-white data-[state=active]:text-lms-primary">
                    <Monitor className="w-4 h-4 mr-1" />
                    Management
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>

            {/* Enhanced Service Cards Grid with Animation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard 
                  key={index} 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                  category={service.category}
                  isHighlighted={service.isHighlighted}
                  index={index} 
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Live Chat Feature Highlight */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-lms-primary/5 to-lms-light/10">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-lms-primary/10 text-lms-primary px-4 py-2 rounded-full mb-6">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium">Featured Service</span>
                </div>
                <h2 className="text-4xl font-bold text-lms-dark mb-6">
                  Real-Time <span className="text-lms-primary">Communication Hub</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Enable instant communication between learners and instructors with our integrated live chat system. Foster collaboration, provide immediate support, and enhance the learning experience with real-time messaging.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lms-dark">Instant Messaging</h4>
                      <p className="text-gray-600">Real-time chat between students and instructors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lms-dark">Group Discussions</h4>
                      <p className="text-gray-600">Create chat rooms for collaborative learning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lms-dark">24/7 Support</h4>
                      <p className="text-gray-600">Always-available help desk integration</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-lms-primary hover:bg-lms-primary/90 text-white"
                  onClick={() => setLiveChatModalOpen(true)}
                >
                  Learn More About Live Chat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Chat Interface Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-lms-primary text-white p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Course Discussion</h3>
                        <p className="text-xs text-white/80">24 participants online</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity
                      }}
                      className="w-3 h-3 bg-green-400 rounded-full"
                    />
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 h-64 overflow-hidden">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-blue-600">JD</span>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm text-gray-800">Can someone explain the concept of compound interest?</p>
                        <span className="text-xs text-gray-500">2:34 PM</span>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="flex items-start gap-3 justify-end"
                    >
                      <div className="bg-lms-primary text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Great question! Compound interest is when you earn interest on both your initial principal and previously earned interest...</p>
                        <span className="text-xs text-white/80">2:35 PM</span>
                      </div>
                      <div className="w-8 h-8 bg-lms-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Headphones className="w-4 h-4 text-lms-primary" />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-green-100 border-2 border-white rounded-full" />
                        <div className="w-6 h-6 bg-blue-100 border-2 border-white rounded-full" />
                        <div className="w-6 h-6 bg-purple-100 border-2 border-white rounded-full" />
                      </div>
                      <span>3 people are typing...</span>
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="flex space-x-1"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="border-t border-gray-100 p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-50 rounded-full px-4 py-2">
                        <p className="text-sm text-gray-500">Type your message...</p>
                      </div>
                      <button className="w-10 h-10 bg-lms-primary text-white rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Add the AthenaPlatformFeatures section - moved here */}
        <AthenaPlatformFeatures />

        {/* FAQ Section */}
        <FAQSection />

        {/* Enhanced Call to Action Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-lms-light/50 to-white overflow-hidden relative">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lms-primary/20 blur-3xl"
            />
          </div>
          
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-md mb-6">Ready to Transform Your Learning Platform?</h2>
              <p className="subtext mb-8">Join thousands of educational institutions already using Athena to deliver exceptional learning experiences with advanced LMS capabilities.</p>
              <Button 
                size="lg" 
                className="bg-lms-primary hover:bg-lms-primary/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Your LMS Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
      <LiveChatModal 
        open={liveChatModalOpen}
        onOpenChange={setLiveChatModalOpen}
      />
      <Chatbot onRequestHumanAgent={handleHumanAgentRequest} />
    </div>
  );
};

export default Services;
