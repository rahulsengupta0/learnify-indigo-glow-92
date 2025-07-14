
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DecorativeShapes } from '@/components/ui/DecorativeShapes';
import { Link } from 'react-router-dom';
import AuthModals from '@/components/AuthModals';

const HeroSection = () => {
  const [typingEffect, setTypingEffect] = useState('');
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const codeSnippet = "class LMSPlatform {\n  createCourse() { return 'Interactive Content'; }\n  trackProgress() { return 'Real-time Analytics'; }\n  manageLearners() { return 'Streamlined'; }\n}";

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= codeSnippet.length) {
        setTypingEffect(codeSnippet.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setTypingEffect('');
        }, 2000);
      }
    }, 60);
    
    return () => clearInterval(typingInterval);
  }, []);

  const handleModalOpenChange = (open: boolean, modal: "login" | "signup") => {
    if (modal === "signup") {
      setSignupOpen(open);
    } else {
      setLoginOpen(open);
    }
  };

  const handleLoginSuccess = () => {
    setLoginOpen(false);
    console.log("Login successful");
  };

  const handleSignupSuccess = () => {
    setSignupOpen(false);
    console.log("Signup successful");
  };

  return (
    <>
      <section className="bg-gradient-to-b from-white to-lms-light py-12 md:py-16 overflow-hidden relative rounded-lg my-4 mx-2 sm:mx-4 lg:mx-6 w-full max-w-full">
        {/* Add decorative shapes */}
        <DecorativeShapes variant="primary" intensity="medium" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-6 animate-fade-in w-full">
            <h1 className="heading-xl">
              Power Your Institution with <span className="text-lms-primary">Athena LMS</span>
            </h1>
            <p className="subtext max-w-lg">
              Complete Learning Management System for institutions, organizations, and educators. 
              Create courses, track progress, manage learners, and deliver exceptional educational experiences at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start w-full">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6 flex-shrink-0"
                onClick={() => setSignupOpen(true)}
              >
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 flex-shrink-0" asChild>
                <Link to="/demo">View Platform Demo</Link>
              </Button>
            </div>
            <div className="pt-2 text-gray-600 text-sm text-center lg:text-left">
              <p>Trusted by 500+ institutions • 50,000+ active learners</p>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right lg:ml-auto group w-full max-w-full">
            {/* Updated image container with LMS dashboard animation */}
            <div className="absolute inset-0 bg-lms-primary/10 rounded-3xl transform rotate-3"></div>
            <div className="relative z-10 rounded-2xl shadow-lg overflow-hidden max-w-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                alt="Modern LMS dashboard interface" 
                className="rounded-2xl w-full h-full object-cover max-w-full"
                loading="eager"
              />
              {/* Code overlay with LMS features animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-8 left-8 right-8 p-4 rounded bg-black/80 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 overflow-hidden">
                  <pre className="text-xs md:text-sm font-mono text-green-400 overflow-x-auto">
                    <code>{typingEffect}</code>
                    <span className="inline-block w-2 h-4 ml-1 bg-green-400 animate-pulse"></span>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Updated floating boxes with LMS metrics */}
            <div className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-[float_4s_ease-in-out_infinite] w-32 max-w-[120px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-lms-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">98%</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate">Completion</p>
                  <p className="text-xs text-gray-500 truncate">Rate</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-20 -right-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-[float_5s_ease-in-out_infinite_1s] w-36 max-w-[130px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-lms-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">500+</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate">Institutions</p>
                  <p className="text-xs text-gray-500 truncate">Using Athena</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/3 -left-4 z-20 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-[float_6s_ease-in-out_infinite_0.5s] w-32 max-w-[120px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-lms-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">24/7</span>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold truncate">Support</p>
                  <p className="text-xs text-gray-500 truncate">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModals
        loginOpen={loginOpen}
        signupOpen={signupOpen}
        onOpenChange={handleModalOpenChange}
        onLoginSuccess={handleLoginSuccess}
        onSignupSuccess={handleSignupSuccess}
      />
    </>
  );
};

export default HeroSection;
