
import React from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface UserMenuProps {
  isLoggedIn: boolean;
  onLoginOpen: () => void;
  onDemoOpen: () => void;
  onLogout: () => void;
}

const UserMenu = ({ isLoggedIn, onLoginOpen, onDemoOpen, onLogout }: UserMenuProps) => {
  return (
    <div className="hidden sm:flex items-center gap-2">
      {!isLoggedIn ? (
        <>
          <Button 
            variant="outline" 
            className="hover:text-white hover:bg-lms-primary"
            onClick={onLoginOpen}
          >
            Log in
          </Button>
          <Button 
            className="bg-lms-primary hover:bg-lms-primary/90 text-white"
            onClick={onDemoOpen}
          >
            Schedule a Demo
          </Button>
        </>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-lms-primary text-white">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white">
            <DropdownMenuItem className="cursor-pointer">
              <Link to="/profile" className="flex w-full items-center">View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={onLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};

export default UserMenu;
