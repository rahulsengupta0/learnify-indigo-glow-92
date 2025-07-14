
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isLoggedIn: boolean;
  onSectionNavigation: (sectionId: string) => void;
  onLoginOpen: () => void;
  onDemoOpen: () => void;
  onLogout: () => void;
}

const MobileMenu = ({ 
  isLoggedIn, 
  onSectionNavigation, 
  onLoginOpen, 
  onDemoOpen, 
  onLogout 
}: MobileMenuProps) => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <AlignJustify className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-4 mt-8">
            <Link to="/about" className="text-gray-700 hover:text-lms-primary transition-colors py-2">About Us</Link>
            <Link to="/features" className="text-gray-700 hover:text-lms-primary transition-colors py-2">Features</Link>
            <Link to="/services" className="text-gray-700 hover:text-lms-primary transition-colors py-2">Services</Link>
            <Link to="/why-us" className="text-gray-700 hover:text-lms-primary transition-colors py-2">Why Us</Link>
            <button 
              onClick={() => onSectionNavigation('testimonials')}
              className="text-gray-700 hover:text-lms-primary transition-colors py-2 text-left"
            >
              Testimonials
            </button>
            
            {!isLoggedIn ? (
              <div className="flex flex-col gap-2 mt-4">
                <Button 
                  variant="outline" 
                  className="w-full hover:text-white hover:bg-lms-primary"
                  onClick={onLoginOpen}
                >
                  Log in
                </Button>
                <Button 
                  className="w-full bg-lms-primary hover:bg-lms-primary/90 text-white"
                  onClick={onDemoOpen}
                >
                  Schedule a Demo
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/profile" className="text-gray-700 hover:text-lms-primary transition-colors py-2">
                  View Profile
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
