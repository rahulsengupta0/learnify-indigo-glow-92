
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import { 
  MessageCircle,
  Mic,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react';

interface LiveChatModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LiveChatModal = ({ open, onOpenChange }: LiveChatModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full max-h-[85vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-lms-primary/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-lms-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold text-lms-dark">
              Live Chat & Communication Hub
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-600">
            Discover our integrated live chat system that revolutionizes communication between learners and instructors.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="space-y-6 pr-4">
            <p className="text-gray-600 text-lg">
              Our integrated live chat system revolutionizes the way learners and instructors communicate, 
              providing instant support and fostering collaborative learning environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-5 h-5 text-lms-primary" />
                  <h3 className="font-semibold text-lms-dark">Live Chat System</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Real-time messaging between students and instructors with instant notifications and message history.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Mic className="w-5 h-5 text-lms-primary" />
                  <h3 className="font-semibold text-lms-dark">Voice-Based Interaction</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Support for voice messages and audio calls to enhance communication beyond text.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-lms-primary" />
                  <h3 className="font-semibold text-lms-dark">Real-Time Support</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Seamless 24/7 support experience with instant response times and always-available help.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-5 h-5 text-lms-primary" />
                  <h3 className="font-semibold text-lms-dark">Group Discussions</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Create chat rooms and discussion groups for collaborative learning and peer support.
                </p>
              </div>
            </div>
            
            <div className="bg-lms-primary/5 border border-lms-primary/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-lms-primary mt-0.5" />
                <div>
                  <h4 className="font-semibold text-lms-dark mb-2">Key Benefits</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Instant communication reduces learning barriers</li>
                    <li>• Enhanced engagement through real-time interaction</li>
                    <li>• Improved support response times</li>
                    <li>• Foster collaborative learning communities</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Enterprise-grade security & privacy</span>
              </div>
              <Button 
                onClick={() => onOpenChange(false)}
                className="bg-lms-primary hover:bg-lms-primary/90 text-white"
              >
                Got it!
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LiveChatModal;
