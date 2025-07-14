
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavigationMenuProps {
  onSectionNavigation: (sectionId: string) => void;
}

const NavigationMenu = ({ onSectionNavigation }: NavigationMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-5">
      <Link to="/about" className="text-gray-700 hover:text-lms-primary transition-colors">About Us</Link>
      <Link to="/features" className="text-gray-700 hover:text-lms-primary transition-colors">Features</Link>
      <Link to="/services" className="text-gray-700 hover:text-lms-primary transition-colors">Services</Link>
      <Link to="/why-us" className="text-gray-700 hover:text-lms-primary transition-colors">Why Us</Link>
      <button 
        onClick={() => onSectionNavigation('testimonials')}
        className="text-gray-700 hover:text-lms-primary transition-colors cursor-pointer"
      >
        Testimonials
      </button>
    </div>
  );
};

export default NavigationMenu;
