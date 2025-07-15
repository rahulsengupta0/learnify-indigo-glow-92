import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Youtube, Facebook, Users } from 'lucide-react';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import AuthModals from '@/components/AuthModals';

// CountUp component for animating numbers
const CountUp = ({ end, duration = 2, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;
    
    const startTime = Date.now();
    const endValue = end;
    const startValue = 0;
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      countRef.current = startValue + progress * (endValue - startValue);
      setCount(countRef.current);
      
      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration, isInView]);
  
  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: "-100px" }}
    >
      {decimals > 0 
        ? count.toFixed(decimals) 
        : Math.floor(count)}
      {end.toString().includes('%') ? '%' : ''}
    </motion.span>
  );
};

const RealResultsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sectionRef = useRef(null);
  const alumniSectionRef = useRef(null);
  const alumniInView = useInView(alumniSectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate logos when they come into view
  useEffect(() => {
    if (alumniInView) {
      controls.start("visible");
    }
  }, [alumniInView, controls]);

  // Handler for opening signup modal
  const handleJoinCommunity = () => {
    setSignupOpen(true);
  };

  // Handlers for auth modals
  const handleAuthModalOpenChange = (open, modal) => {
    if (modal === "login") {
      setLoginOpen(open);
    } else {
      setSignupOpen(open);
    }
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setLoginOpen(false);
  };

  const handleSignupSuccess = () => {
    setIsAuthenticated(true);
    setSignupOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Success metrics data - Updated with YouTube and Facebook stats
  const successMetrics = [
    { 
      icon: <Youtube className="h-8 w-8 text-lms-primary" />, 
      value: 50000, 
      suffix: "+",
      label: "Number of Members on YouTube",
      description: "Growing community of learners following our content"
    },
    { 
      icon: <Users className="h-8 w-8 text-lms-primary" />, 
      value: 25000, 
      suffix: "+",
      label: "Learners on YouTube",
      description: "Active students engaging with our educational videos"
    },
    { 
      icon: <Facebook className="h-8 w-8 text-lms-primary" />, 
      value: 15000, 
      suffix: "+",
      label: "Members on Facebook",
      description: "Connected community sharing knowledge and experiences"
    }
  ];

  // Partner logos - Fixed the 9th logo and ensured consistent styling
  const partnerLogos = [
    {
      name: "Google",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
    },
    {
      name: "Microsoft",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg"
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
    },
    {
      name: "Amazon",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
    },
    {
      name: "Apple",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
    },
    {
      name: "Spotify",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg"
    },
    {
      name: "Adobe",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg"
    },
    {
      name: "TCS",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Tata-Consultancy-Services-TCS-Logo.png"
    },
    {
      name: "Infosys",
      logo: "https://logos-world.net/wp-content/uploads/2020/06/Infosys-Logo.png"
    }
  ];

  // Create infinite sliding animation with proper overflow handling
  const InfiniteSlider = ({ items, direction = "left", speed = 50 }) => {
    return (
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-fit"
          animate={{
            x: direction === "left" ? [0, -100 * items.length] : [0, 100 * items.length]
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* First set of logos */}
          {items.map((company, index) => (
            <motion.div
              key={`first-${index}`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-28 min-w-[160px] flex-shrink-0 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-12 w-auto object-contain max-w-[120px]"
                  onError={(e) => {
                    const imgElement = e.currentTarget;
                    imgElement.style.display = 'none';
                    const nextSibling = imgElement.nextElementSibling;
                    if (nextSibling) {
                      nextSibling.style.display = 'block';
                    }
                  }} 
                />
                <p className="text-sm font-semibold text-gray-700 mt-2 hidden">{company.name}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {items.map((company, index) => (
            <motion.div
              key={`second-${index}`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-28 min-w-[160px] flex-shrink-0 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-12 w-auto object-contain max-w-[120px]"
                  onError={(e) => {
                    const imgElement = e.currentTarget;
                    imgElement.style.display = 'none';
                    const nextSibling = imgElement.nextElementSibling;
                    if (nextSibling) {
                      nextSibling.style.display = 'block';
                    }
                  }} 
                />
                <p className="text-sm font-semibold text-gray-700 mt-2 hidden">{company.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <section id="real-results" className="py-24 relative overflow-hidden">
        {/* Background styling - Changed to white */}
        <div className="absolute inset-0 bg-white z-0"></div>
        <DecorativeShapes variant="primary" intensity="subtle" position="top" />
        
        <div ref={sectionRef} className="section-container relative z-10">
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p variants={itemVariants} className="text-lms-primary font-medium mb-2">
              Proven track record of success
            </motion.p>
            <motion.h2 variants={itemVariants} className="heading-lg mb-4">
              Real Results, Real Students
            </motion.h2>
            <motion.p variants={itemVariants} className="subtext">
              Don't just take our word for it. See how Athena has transformed careers and 
              lives through quality education and industry connections.
            </motion.p>
          </motion.div>
          
          {/* Success Metrics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {successMetrics.map((metric, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="card-hover"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden h-full bg-white">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="bg-lms-light p-4 rounded-full mb-4 animate-pulse">
                      {metric.icon}
                    </div>
                    <h3 className="text-4xl font-bold text-lms-primary mb-2">
                      <CountUp end={metric.value} />
                      {metric.suffix}
                    </h3>
                    <p className="font-semibold text-xl mb-2">{metric.label}</p>
                    <p className="text-gray-600">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced Alumni Work Section with reduced bottom margin */}
          <motion.div
            ref={alumniSectionRef}
            className="my-16"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div className="text-center mb-10">
              <motion.h3 
                className="heading-md mb-4"
                variants={itemVariants}
              >
                Where Our Alumni Work
              </motion.h3>
              <motion.p 
                className="text-gray-600 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Our graduates are highly sought after by the world's leading companies
              </motion.p>
            </motion.div>
            
            {/* Desktop view: Infinite Sliding Animation with proper overflow control */}
            <div className="hidden md:block space-y-8 w-full">
              {/* First row - Left to Right */}
              <InfiniteSlider items={partnerLogos.slice(0, 5)} direction="left" speed={30} />
              
              {/* Second row - Right to Left */}
              <InfiniteSlider items={partnerLogos.slice(5, 10)} direction="right" speed={35} />
            </div>
            
            {/* Mobile view: Enhanced Carousel */}
            <div className="md:hidden mb-8 w-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {partnerLogos.map((company, index) => (
                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                        className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-28 transition-all duration-300 border border-gray-100 hover:shadow-md"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`} 
                            className="h-12 w-auto object-contain max-w-[100px]"
                            onError={(e) => {
                              const imgElement = e.currentTarget;
                              imgElement.style.display = 'none';
                              const nextSibling = imgElement.nextElementSibling;
                              if (nextSibling) {
                                nextSibling.style.display = 'block';
                              }
                            }}  
                          />
                          <p className="text-sm font-semibold text-gray-700 mt-2 hidden">{company.name}</p>
                        </div>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-6">
                  <CarouselPrevious className="static transform-none" />
                  <CarouselNext className="static transform-none" />
                </div>
              </Carousel>
            </div>
            
            {/* Call to action - made clickable */}
            <motion.div 
              className="text-center mt-8"
              variants={itemVariants}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={handleJoinCommunity}
                className="text-lms-primary font-medium hover:text-lms-primary/80 transition-colors cursor-pointer hover:underline"
              >
                Join the Athena community and become part of our success story
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Auth Modals */}
      <AuthModals
        loginOpen={loginOpen}
        signupOpen={signupOpen}
        onOpenChange={handleAuthModalOpenChange}
        onLoginSuccess={handleLoginSuccess}
        onSignupSuccess={handleSignupSuccess}
      />
    </>
  );
};

export default RealResultsSection;