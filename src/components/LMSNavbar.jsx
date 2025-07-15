import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModals from './AuthModals';
import DemoModal from './DemoModal';
import NavigationMenu from './NavigationMenu';
import UserMenu from './UserMenu';
import MobileMenu from './MobileMenu';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { useNavigation } from '@/hooks/useNavigation';

const LMSNavbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const isVisible = useScrollVisibility();
  const { handleSectionNavigation } = useNavigation();

  const handleOpenChange = (open, modal) => {
    if (modal === 'login') {
      setLoginOpen(open);
    } else {
      setSignupOpen(open);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setLoginOpen(false);
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    setSignupOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className={`bg-white py-2 border-b border-gray-100 fixed top-0 z-50 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 lg:px-12">
          <div className="flex items-center gap-1.5">
            <Link to="/" className="flex items-center gap-1.5">
              <GraduationCap className="h-7 w-7 text-lms-primary" />
              <span className="font-bold text-xl text-lms-dark">Athena</span>
            </Link>
          </div>
          
          <NavigationMenu onSectionNavigation={handleSectionNavigation} />
          
          <UserMenu 
            isLoggedIn={isLoggedIn}
            onLoginOpen={() => setLoginOpen(true)}
            onDemoOpen={() => setDemoOpen(true)}
            onLogout={handleLogout}
          />

          <MobileMenu 
            isLoggedIn={isLoggedIn}
            onSectionNavigation={handleSectionNavigation}
            onLoginOpen={() => setLoginOpen(true)}
            onDemoOpen={() => setDemoOpen(true)}
            onLogout={handleLogout}
          />
        </div>
      </nav>
      
      <AuthModals 
        loginOpen={loginOpen} 
        signupOpen={signupOpen} 
        onOpenChange={handleOpenChange} 
        onLoginSuccess={handleLoginSuccess}
        onSignupSuccess={handleSignupSuccess}
      />
      
      <DemoModal 
        open={demoOpen}
        onOpenChange={setDemoOpen}
      />
    </>
  );
};

export default LMSNavbar;