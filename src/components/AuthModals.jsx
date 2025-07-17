import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Lock, Upload, Phone, CheckCircle2, AlertCircle, Linkedin } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import axios from "axios";
import Cookies from "js-cookie";

// Login form schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

// Signup form schema
const signupSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  phoneNumber: z.string().min(10, { message: "Phone number is required" }),
  gender: z.enum(["male", "female", "other"], { message: "Please select a gender" }),
  profileImage: z.any().optional(),
});

// OTP verification schema
const otpSchema = z.object({
  otp: z.string().length(6, { message: "Please enter a valid 6-digit OTP" }),
});

// Forgot password schema
const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  newPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

// Mock credentials for demo purposes
const MOCK_CREDENTIALS = {
  email: "test@example.com",
  password: "password123"
};

const AuthModals = ({
  loginOpen,
  signupOpen,
  onOpenChange,
  onLoginSuccess,
  onSignupSuccess
}) => {
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [showOTPVerification, setShowOTPVerification] = useState(false);
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPasswordResetSuccess, setShowPasswordResetSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  // Add OTP state for modal-based signup
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: form, 2: otp
  const [success, setSuccess] = useState("");

  // Login form
  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Signup form
  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      gender: "other",
      profileImage: undefined,
    },
  });

  // OTP form
  const otpForm = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Forgot password form
  const forgotPasswordForm = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Reset auth error when modals open/close
  useEffect(() => {
    if (loginOpen || signupOpen) {
      setAuthError(null);
    }
  }, [loginOpen, signupOpen]);

  const handleLoginSubmit = async (values) => {
    setIsLoading(true);
    setAuthError(null);
    try {
      const response = await axios.post("http://localhost:9000/api/auth/login", {
        email: values.email,
        password: values.password,
      });
      if (response.data.token) {
        Cookies.set('session_token', response.data.token, { expires: 7, path: '/' });
        onLoginSuccess && onLoginSuccess();
        onOpenChange(false, "login");
        window.location.href = "/welcome";
      } else {
        setAuthError("Login failed. No token received.");
      }
    } catch (err) {
      const backendMsg = err.response?.data?.message || "Invalid email or password. Please try again.";
      if (backendMsg.toLowerCase().includes('not found') || backendMsg.toLowerCase().includes('no user')) {
        setAuthError("Email doesn't exist, please sign up.");
      } else {
        setAuthError(backendMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (values) => {
    console.log("handleregister working");
    setIsLoading(true);
    setAuthError("");
    setShowSignupSuccess(false);
    setShowOTPVerification(false);
    setSuccess && setSuccess("");
    try {
      // Register user (send email, phone)
      await axios.post("http://localhost:9000/api/auth/registerUser", {
        email: values.email,
        phone: values.phoneNumber,
      });
      setStep(2);
      setShowOTPVerification(true);
      setSuccess && setSuccess("OTP sent to your email.");
    } catch (err) {
      const backendMsg = err.response?.data?.message || "Registration failed.";
      if (backendMsg.toLowerCase().includes('exist')) {
        setAuthError("Email or phone number already exists.");
      } else {
        setAuthError(backendMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPSubmit = async (otpValues) => {
    setIsLoading(true);
    setAuthError("");
    setSuccess && setSuccess("");
    try {
      const values = signupForm.getValues();
      const payload = {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        phone: values.phoneNumber,
        gender: values.gender,
        dob: values.dob, // if present in your form
        otp: otpValues.otp,
      };
      const res = await axios.post("http://localhost:9000/api/auth/verify-otp", payload);
      if (res.data.token) {
        Cookies.set('session_token', res.data.token, { expires: 7, path: '/' });
        setShowOTPVerification(false);
        setShowSignupSuccess(true);
        setSuccess && setSuccess("Account created! Redirecting to dashboard...");
        setTimeout(() => {
          setShowSignupSuccess(false);
          onSignupSuccess && onSignupSuccess();
          onOpenChange(false, "signup");
          window.location.href = "/welcome";
        }, 1500);
      } else {
        setAuthError("No session token received.");
      }
    } catch (err) {
      setAuthError(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPasswordSubmit = (values) => {
    setIsLoading(true);
    setAuthError(null);

    // Simulate password reset
    setTimeout(() => {
      console.log("Forgot password values:", values);
      setIsLoading(false);
      setShowForgotPassword(false);
      setShowPasswordResetSuccess(true);

      // Auto close after 3 seconds
      setTimeout(() => {
        setShowPasswordResetSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && event.target.result) {
          setProfileImagePreview(event.target.result);
        }
      };

      reader.readAsDataURL(file);
      signupForm.setValue("profileImage", file);
    }
  };

  const switchToSignup = () => {
    onOpenChange(false, "login");
    setTimeout(() => onOpenChange(true, "signup"), 100);
  };

  const switchToLogin = () => {
    onOpenChange(false, "signup");
    setTimeout(() => onOpenChange(true, "login"), 100);
  };

  const openForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const closeForgotPassword = () => {
    setShowForgotPassword(false);
    forgotPasswordForm.reset();
  };

  // Animation variants for framer-motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {/* Login Modal */}
      <Dialog open={loginOpen} onOpenChange={(open) => onOpenChange(open, "login")}>
        <DialogContent className="sm:max-w-md w-[95%] animate-in fade-in-0 zoom-in-95 duration-300">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Welcome Back</DialogTitle>
            <DialogDescription className="text-center">
              Log in to your Athena account
            </DialogDescription>
          </DialogHeader>

          <div className="flex-grow overflow-y-auto py-4 px-1">
            {/* Show error message if authentication fails */}
            {authError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700">{authError}</p>
              </div>
            )}

            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input placeholder="your.email@example.com" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                          <Input type="password" placeholder="••••••••" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-lms-primary hover:underline"
                    onClick={openForgotPassword}
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-lms-primary hover:bg-lms-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Logging in...
                    </span>
                  ) : "Log in"}
                </Button>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">or continue with</span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => console.log("Google login")}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </Button>

                {/* Add LinkedIn button */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-white text-black border-gray-300 hover:bg-blue-100"
                  onClick={() => console.log("LinkedIn login")}
                >
                  <Linkedin className="mr-2 h-4 w-4 text-[#0A66C2]" />
                  Continue with LinkedIn
                </Button>

                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">Don't have an account? </span>
                  <button
                    type="button"
                    className="text-sm text-lms-primary hover:underline"
                    onClick={switchToSignup}
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Signup Modal */}
      <Dialog open={signupOpen} onOpenChange={(open) => {
        if (!open) {
          setShowOTPVerification(false);
          setShowSignupSuccess(false);
        }
        onOpenChange(open, "signup");
      }}>
        <DialogContent className="w-[95%] sm:max-w-md md:max-w-lg animate-in fade-in-0 zoom-in-95 duration-300">
          {!showOTPVerification && !showSignupSuccess && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">Create an Account</DialogTitle>
                <DialogDescription className="text-center">
                  Join Athena to access exclusive courses
                </DialogDescription>
              </DialogHeader>

              <div className="flex-grow overflow-y-auto py-4 px-1">
                {/* Show error message if validation fails */}
                {authError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{authError}</p>
                  </div>
                )}

                <Form {...signupForm}>
                  <form onSubmit={signupForm.handleSubmit(handleSignupSubmit)} className="space-y-4">
                    {/* Profile Image Upload */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 cursor-pointer border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">
                          <AvatarImage src={profileImagePreview || ""} />
                          <AvatarFallback className="bg-gray-50 text-gray-400 flex flex-col items-center justify-center">
                            <User className="h-6 w-6 sm:h-8 sm:w-8" />
                            <span className="text-xs mt-1">Upload</span>
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute bottom-0 right-0 bg-lms-primary rounded-full p-1 cursor-pointer">
                          <Upload className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <input
                          type="file"
                          onChange={handleProfileImageChange}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept="image/*"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* First Name */}
                      <FormField
                        control={signupForm.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="John" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Last Name */}
                      <FormField
                        control={signupForm.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="Doe" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={signupForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="your.email@example.com" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Password */}
                    <FormField
                      control={signupForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input type="password" placeholder="••••••••" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone Number */}
                      <FormField
                        control={signupForm.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input placeholder="+1 (123) 456-7890" className="pl-10" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Gender */}
                      <FormField
                        control={signupForm.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-lms-primary hover:bg-lms-primary/90"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating Account...
                        </span>
                      ) : "Create Account"}
                    </Button>

                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">or continue with</span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full"
                      onClick={() => console.log("Google signup")}
                    >
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Continue with Google
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full bg-white text-black border-gray-300 hover:bg-blue-100"
                      onClick={() => console.log("LinkedIn signup")}
                    >
                      <Linkedin className="mr-2 h-4 w-4 text-[#0A66C2]" />
                      Continue with LinkedIn
                    </Button>

                    <div className="text-center mt-4">
                      <span className="text-sm text-gray-500">Already have an account? </span>
                      <button
                        type="button"
                        className="text-sm text-lms-primary hover:underline"
                        onClick={switchToLogin}
                      >
                        Log in
                      </button>
                    </div>
                  </form>
                </Form>
              </div>
            </>
          )}

          {/* OTP Verification */}
          {showOTPVerification && !showSignupSuccess && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="py-2 px-1"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-2">
                  <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-lms-primary" />
                </div>
                <DialogTitle className="text-xl sm:text-2xl font-bold">Verify Your Email</DialogTitle>
                <DialogDescription className="mt-2 text-sm sm:text-base">
                  We've sent a 6-digit code to your email address. Please enter it below to verify your account.
                </DialogDescription>
              </div>

              {/* Show error message if authentication fails */}
              {authError && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 mx-auto max-w-md flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-700">{authError}</p>
                </div>
              )}

              <Form {...otpForm}>
                <form onSubmit={otpForm.handleSubmit(handleOTPSubmit)} className="space-y-6">
                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem className="mx-auto max-w-md">
                        <FormControl>
                          <div className="flex justify-center">
                            <InputOTP maxLength={6} {...field}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                          </div>
                        </FormControl>
                        <FormMessage className="text-center" />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-lms-primary hover:bg-lms-primary/90 transition-colors px-6 sm:px-8"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verifying...
                        </span>
                      ) : "Verify Account"}
                    </Button>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    <p>Didn't receive the code? <button type="button" className="text-lms-primary hover:underline">Resend Code</button></p>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}

          {/* Signup Success */}
          {showSignupSuccess && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-4 sm:p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-2 sm:p-3">
                  <CheckCircle2 className="h-12 w-12 sm:h-14 sm:w-14 text-green-500" />
                </div>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-green-700 mb-2">Account Created Successfully!</DialogTitle>
              <DialogDescription className="text-sm sm:text-base">
                Your account has been created and you are now ready to explore Athena.
              </DialogDescription>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>

      {/* Forgot Password Modal */}
      <Dialog open={showForgotPassword} onOpenChange={closeForgotPassword}>
        <DialogContent className="w-[95%] sm:max-w-md animate-in fade-in-0 zoom-in-95 duration-300">
          {!showPasswordResetSuccess && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">Reset Your Password</DialogTitle>
                <DialogDescription className="text-center">
                  Enter your email and a new password below
                </DialogDescription>
              </DialogHeader>

              <div className="flex-grow overflow-y-auto py-4 px-1">
                {/* Show error message if there are errors */}
                {authError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">{authError}</p>
                  </div>
                )}

                <Form {...forgotPasswordForm}>
                  <form onSubmit={forgotPasswordForm.handleSubmit(handleForgotPasswordSubmit)} className="space-y-4">
                    <FormField
                      control={forgotPasswordForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="your.email@example.com" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={forgotPasswordForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input type="password" placeholder="••••••••" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={forgotPasswordForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Re-enter New Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                              <Input type="password" placeholder="••••••••" className="pl-10" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-lms-primary hover:bg-lms-primary/90 mt-4"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Resetting Password...
                        </span>
                      ) : "Reset Password"}
                    </Button>
                  </form>
                </Form>
              </div>
            </>
          )}

          {/* Password Reset Success */}
          {showPasswordResetSuccess && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-4 sm:p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-2 sm:p-3">
                  <CheckCircle2 className="h-12 w-12 sm:h-14 sm:w-14 text-green-500" />
                </div>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold text-green-700 mb-2">Password Changed Successfully!</DialogTitle>
              <DialogDescription className="text-base">
                Your password has been reset. You can now log in with your new password.
              </DialogDescription>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthModals;