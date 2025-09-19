'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, Upload, BookOpen, Target, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AuthRedirect from '@/components/AuthRedirect';

export default function SignUpPage() {
  const { signUp, signInWithGoogle, signInWithGitHub, signInWithDiscord } = useAuth();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    shortBio: '',
    skillsToTeach: '',
    skillsToLearn: '',
    profilePicture: null as File | null
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1); // 1: Basic Info, 2: Profile Details, 3: Success

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        profilePicture: e.target.files[0]
      });
    }
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!formData.password) {
      setError('Password is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      setError(null);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      handleNext();
      return;
    }
    
    // Bypass authentication - go directly to dashboard
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handleGoogleSignUp = async () => {
    // Bypass authentication - go directly to dashboard
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handleGitHubSignUp = async () => {
    // Bypass authentication - go directly to dashboard
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  const handleDiscordSignUp = async () => {
    // Bypass authentication - go directly to dashboard
    setLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-6">
      <AuthRedirect />
      <div className="w-full max-w-md">
        {/* Success Step */}
        {step === 3 && (
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/30 p-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-white text-2xl font-semibold mb-2">Welcome to SkillSwap!</h1>
            <p className="text-gray-300 mb-4">Your account has been created successfully. You'll be redirected to the dashboard shortly.</p>
            <div className="w-8 h-8 border-2 border-white/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          </div>
        )}

        {/* Step 1 & 2 - Form */}
        {step < 3 && (
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl border border-gray-600/30 p-6 shadow-2xl">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-400'}`}>
                  1
                </div>
                <div className={`w-12 h-1 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-600'}`}></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-400'}`}>
                  2
                </div>
              </div>
            </div>

            <h1 className="text-white text-xl font-semibold text-center mb-2">
              {step === 1 ? 'Create Your Account' : 'Complete Your Profile'}
            </h1>
            <p className="text-gray-400 text-sm text-center mb-6">
              {step === 1 ? 'Enter your basic information to get started' : 'Tell us about your skills and interests'}
            </p>
            
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1 - Basic Information */}
              {step === 1 && (
                <>
                  {/* Name Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 pr-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </>
              )}

              {/* Step 2 - Profile Details */}
              {step === 2 && (
                <>
                  {/* Short Bio Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-4">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <textarea
                      name="shortBio"
                      placeholder="Tell us about yourself (optional)"
                      value={formData.shortBio}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Skills to Teach Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <BookOpen className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="skillsToTeach"
                      placeholder="Skills you can teach (comma separated)"
                      value={formData.skillsToTeach}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Skills to Learn Field */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Target className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="skillsToLearn"
                      placeholder="Skills you want to learn (comma separated)"
                      value={formData.skillsToLearn}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Upload Profile Picture */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <Upload className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="file"
                      name="profilePicture"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-xl px-12 py-3 text-white file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 rounded-xl transition-colors duration-200"
                  >
                    Back
                  </button>
                )}
                
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium py-3 rounded-xl transition-colors duration-200 flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : step === 1 ? (
                    'Continue'
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </form>

            {/* Third-Party Authentication - Only show on step 1 */}
            {step === 1 && (
              <>
                {/* Divider */}
                <div className="my-6 flex items-center">
                  <div className="flex-1 border-t border-gray-600"></div>
                  <span className="px-4 text-gray-400 text-sm">or continue with</span>
                  <div className="flex-1 border-t border-gray-600"></div>
                </div>

                {/* Third-Party Authentication */}
                <div className="space-y-3">
                  {/* Google Sign Up */}
                  <button
                    onClick={handleGoogleSignUp}
                    disabled={loading}
                    className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-300 text-gray-900 font-medium py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3 border border-gray-300"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Sign up with Google
                  </button>

                  {/* GitHub Sign Up */}
                  <button
                    onClick={handleGitHubSignUp}
                    disabled={loading}
                    className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-700 text-white font-medium py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-3 border border-gray-700"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Sign up with GitHub
                  </button>
                </div>
              </>
            )}

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <Link href="/auth/signin" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
