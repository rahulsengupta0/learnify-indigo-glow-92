
import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Circle, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import DemoModal from './DemoModal';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status?: 'sent' | 'delivered' | 'read';
}

interface ChatbotProps {
  onRequestHumanAgent?: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onRequestHumanAgent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickOptions, setShowQuickOptions] = useState(true);
  const [currentQuickOptions, setCurrentQuickOptions] = useState<any[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialQuickOptions = [
    { text: "Tell me about Athena", emoji: "🎓", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
    { text: "How to login", emoji: "🔐", color: "bg-green-50 hover:bg-green-100 border-green-200" },
    { text: "How to enroll", emoji: "📝", color: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
    { text: "Are courses free", emoji: "💰", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" }
  ];

  const followUpOptions = {
    'tell me about athena': [
      { text: "See platform features", emoji: "⚡", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
      { text: "Request a demo", emoji: "🎯", color: "bg-green-50 hover:bg-green-100 border-green-200" },
      { text: "View pricing plans", emoji: "💳", color: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
      { text: "Contact sales team", emoji: "📞", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" }
    ],
    'how to login': [
      { text: "Reset my password", emoji: "🔄", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
      { text: "Create new account", emoji: "➕", color: "bg-green-50 hover:bg-green-100 border-green-200" },
      { text: "Technical support", emoji: "🛠️", color: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
      { text: "Login troubleshooting", emoji: "🔍", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" }
    ],
    'how to enroll': [
      { text: "Browse course catalog", emoji: "📚", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
      { text: "Payment options", emoji: "💳", color: "bg-green-50 hover:bg-green-100 border-green-200" },
      { text: "Enrollment requirements", emoji: "📋", color: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
      { text: "Bulk enrollment", emoji: "👥", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" }
    ],
    'are courses free': [
      { text: "View free courses", emoji: "🆓", color: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
      { text: "Premium features", emoji: "⭐", color: "bg-green-50 hover:bg-green-100 border-green-200" },
      { text: "Enterprise pricing", emoji: "🏢", color: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
      { text: "Get discount codes", emoji: "🎟️", color: "bg-orange-50 hover:bg-orange-100 border-orange-200" }
    ]
  };

  const emojis = ['😊', '😂', '🤔', '👍', '❤️', '🎉', '🔥', '💡', '✨', '🚀', '📚', '🎯'];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setCurrentQuickOptions(initialQuickOptions);
      setTimeout(() => {
        addBotMessage("👋 Hello there! It's nice to meet you!\n\nWhat brings you here today? Please use the navigation below or ask me anything about Athena product.");
      }, 500);
    }
  }, [isOpen, messages.length]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      status: sender === 'user' ? 'sent' : 'delivered',
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Simulate message status updates for user messages
    if (sender === 'user') {
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'delivered' } : msg
        ));
      }, 500);
      
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
        ));
      }, 1000);
    }
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot');
    }, 1000 + Math.random() * 1000);
  };

  const getQuickOptionResponse = (option: string): string => {
    switch (option.toLowerCase()) {
      case 'tell me about athena':
        return "Athena LMS is a comprehensive learning management system designed to transform educational experiences. Our platform offers interactive course creation, real-time progress tracking, assessment tools, communication features, and detailed analytics. Athena empowers educators and institutions to deliver engaging, effective learning experiences with enterprise-grade security and seamless integrations.";
      
      case 'how to login':
        return "To login to Athena LMS:\n\n1. Click the 'Login' button in the top-right corner of our website\n2. Enter your registered email address\n3. Enter your password\n4. Click 'Sign In'\n\nIf you've forgotten your password, click 'Forgot Password?' to reset it. If you don't have an account yet, you can sign up by clicking 'Create Account'.";
      
      case 'how to enroll':
        return "Enrolling in Athena LMS is easy:\n\n1. Browse our course catalog or use the search feature\n2. Select the course you're interested in\n3. Click 'Enroll Now' on the course page\n4. Complete the registration process\n5. Make payment if required\n6. Start learning immediately!\n\nFor institutional enrollments, contact our sales team for bulk enrollment options.";
      
      case 'are courses free':
        return "Athena LMS offers both free and premium courses:\n\n✅ Free courses: Basic courses and introductory content\n💎 Premium courses: Advanced courses with certificates, personalized support, and additional resources\n\nWe also offer institutional subscriptions with access to our full course library. Would you like to know more about our pricing plans or see our free course offerings?";
      
      // Follow-up responses
      case 'see platform features':
        return "Athena LMS key features include:\n\n🔧 Course Management: Create and organize interactive courses\n📊 Analytics Dashboard: Track student progress and engagement\n💬 Communication Tools: Live chat, forums, and messaging\n🎯 Assessment Engine: Quizzes, assignments, and automated grading\n📱 Mobile Learning: Access courses on any device\n🔐 Security: Enterprise-grade data protection\n\nWould you like to see a demo of any specific feature?";
      
      case 'request a demo':
        return "I'd love to show you Athena LMS in action! Our personalized demos showcase:\n\n• Live course creation and content management\n• Student engagement and progress tracking\n• Administrative features and reporting\n• Integration capabilities\n\nWould you like me to connect you with our demo team to schedule a session?";
      
      case 'view pricing plans':
        return "Our flexible pricing options include:\n\n🎓 Educational: Perfect for schools and universities\n🏢 Enterprise: Scalable solutions for large organizations\n👤 Individual: For independent educators\n\nPricing varies based on features and user count. Would you like me to connect you with our sales team for a personalized quote?";
      
      case 'reset my password':
        return "To reset your password:\n\n1. Go to the login page\n2. Click 'Forgot Password?'\n3. Enter your email address\n4. Check your email for reset instructions\n5. Follow the link to create a new password\n\nIf you don't receive the email within 5 minutes, check your spam folder or contact our support team.";
      
      case 'browse course catalog':
        return "Our extensive course catalog includes:\n\n📚 Academic subjects (Math, Science, Languages)\n💼 Professional development courses\n🎨 Creative and arts programs\n💻 Technology and programming\n📈 Business and marketing\n\nYou can filter by subject, difficulty level, duration, and price. Would you like recommendations based on your interests?";
      
      default:
        return "That's a great question! While I can help with general information about Athena LMS, our sales team would be better equipped to give you detailed answers. Would you like me to connect you with a human agent who can provide more specific assistance?";
    }
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
      return "Our Athena LMS offers flexible pricing plans to suit different needs. We have options for educational institutions, enterprises, and individual educators. Would you like me to connect you with our sales team to discuss pricing details specific to your requirements?";
    }
    
    if (message.includes('features') || message.includes('what can') || message.includes('capabilities')) {
      return "Athena LMS includes comprehensive course management, interactive content creation, real-time progress tracking, assessment tools, communication features, mobile compatibility, and detailed analytics. Would you like me to show you a specific feature or schedule a demo?";
    }
    
    if (message.includes('demo') || message.includes('trial') || message.includes('try')) {
      return "I'd be happy to help you schedule a demo! Our demos showcase all the key features and how Athena can transform your educational initiatives. Would you like me to connect you with our team to book a personalized demo session?";
    }
    
    if (message.includes('security') || message.includes('safe') || message.includes('secure')) {
      return "Security is our top priority! Athena LMS uses enterprise-grade security with data encryption, secure authentication, GDPR compliance, and regular security audits. Your data and student information are fully protected. Do you have specific security requirements I can help address?";
    }
    
    if (message.includes('support') || message.includes('help') || message.includes('training')) {
      return "We provide comprehensive support including 24/7 technical assistance, dedicated customer success managers, extensive documentation, video tutorials, and live training sessions. Our team ensures smooth implementation and ongoing success. What kind of support are you most interested in?";
    }
    
    if (message.includes('integration') || message.includes('connect') || message.includes('api')) {
      return "Athena LMS offers seamless integration capabilities with existing systems and third-party applications. We support various integrations to ensure smooth workflow with your current tools. What systems are you looking to integrate with?";
    }
    
    if (message.includes('contact') || message.includes('sales') || message.includes('human') || message.includes('agent')) {
      return "I'd be happy to connect you with our sales team! They can provide detailed information about pricing, implementation, and answer any specific questions you have. Would you like me to transfer you to a human agent now?";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm here to help you learn more about Athena LMS and how it can transform your educational experience. What would you like to know about our platform?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm glad I could help. Is there anything else you'd like to know about Athena LMS? I'm here whenever you need assistance! 😊";
    }
    
    return "That's a great question! While I can help with general information about Athena LMS, our sales team would be better equipped to give you detailed answers. Would you like me to connect you with a human agent who can provide more specific assistance?";
  };

  const handleQuickOption = (option: string) => {
    addMessage(option, 'user');
    const response = getQuickOptionResponse(option);
    addBotMessage(response);
    
    // Set follow-up options based on the selected option
    const optionKey = option.toLowerCase();
    const followUps = followUpOptions[optionKey as keyof typeof followUpOptions];
    
    if (followUps) {
      setTimeout(() => {
        setCurrentQuickOptions(followUps);
        setShowQuickOptions(true);
      }, 2000); // Show follow-up options 2 seconds after bot response
    } else {
      setShowQuickOptions(false);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, 'user');
    const response = getBotResponse(inputValue);
    setInputValue('');
    addBotMessage(response);
    setShowQuickOptions(false);
    setShowEmojiPicker(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setInputValue(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleRequestHuman = () => {
    setDemoModalOpen(true);
    addBotMessage("I'm connecting you with our team through our demo scheduling system. They'll be with you shortly to provide personalized assistance!");
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'sent':
        return <Circle className="h-3 w-3 text-gray-400" />;
      case 'delivered':
        return <Circle className="h-3 w-3 text-blue-400 fill-current" />;
      case 'read':
        return <Circle className="h-3 w-3 text-green-400 fill-current" />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-4"
            >
              <Card className="w-80 sm:w-96 h-[32rem] flex flex-col shadow-2xl border-0 overflow-hidden bg-white">
                {/* Enhanced Header */}
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-lms-primary to-blue-600 text-white border-b">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      {/* Online status indicator */}
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <span className="font-semibold">Athena Assistant</span>
                      <div className="flex items-center gap-1 text-xs text-white/80">
                        <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                        <span>Online</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 text-white hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                        <div
                          className={`p-3 rounded-2xl shadow-sm ${
                            message.sender === 'user'
                              ? 'bg-blue-500 text-white rounded-br-md ml-2'
                              : 'bg-white text-gray-800 rounded-bl-md mr-2 border border-gray-100'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                        </div>
                        
                        <div className={`flex items-center gap-1 mt-1 px-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                          {message.sender === 'user' && getStatusIcon(message.status)}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Quick Options */}
                  {showQuickOptions && messages.length > 0 && currentQuickOptions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <div className="text-center">
                        <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full border">Quick Actions</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {currentQuickOptions.map((option, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className={`text-xs p-3 h-auto text-left justify-start transition-all duration-200 hover:scale-105 hover:shadow-md ${option.color}`}
                            onClick={() => handleQuickOption(option.text)}
                          >
                            <span className="text-base mr-2 flex-shrink-0">{option.emoji}</span>
                            <span className="font-medium">{option.text}</span>
                          </Button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-bl-md shadow-sm mr-2">
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-lms-primary rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-lms-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-lms-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 ml-2">Athena is typing...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-200">
                  {/* Human Agent Button */}
                  <Button
                    onClick={handleRequestHuman}
                    className="w-full mb-3 bg-lms-primary hover:bg-lms-primary/90 text-white font-medium py-2 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    🤝 Talk with a Human Agent
                  </Button>

                  {/* Emoji Picker */}
                  {showEmojiPicker && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-3 p-3 bg-gray-50 rounded-xl border"
                    >
                      <div className="grid grid-cols-6 gap-2">
                        {emojis.map((emoji, index) => (
                          <button
                            key={index}
                            onClick={() => handleEmojiClick(emoji)}
                            className="text-lg hover:bg-white rounded-lg p-2 transition-colors duration-200 hover:scale-110"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-2 items-end">
                    <div className="flex-1 relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="pr-10 rounded-xl border-gray-300 focus:border-lms-primary focus:ring-lms-primary/20 transition-all duration-200 bg-white"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-lms-primary"
                      >
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      size="icon"
                      className="bg-lms-primary hover:bg-lms-primary/90 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                      disabled={!inputValue.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Toggle Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            size="icon"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-lms-primary to-blue-600 hover:from-lms-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full"></div>
            {isOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10" />
            ) : (
              <Bot className="h-5 w-5 sm:h-6 sm:w-6 text-white relative z-10" />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Demo Modal */}
      <DemoModal 
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
      />
    </>
  );
};

export default Chatbot;
