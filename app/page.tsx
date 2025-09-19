'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProfileModal from './components/ProfileModal';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/contexts/AuthContext';
import {
  Home,
  Users,
  MessageCircle,
  Calendar,
  Clock,
  BookOpen,
  Bell,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Send,
  Folder,
  TrendingUp,
  Award,
  ChevronDown,
  Star,
  Target,
  User,
  Headphones,
  Settings,
  Edit,
  Shield,
  HelpCircle,
  LogOut,
  Zap,
  Heart,
  Globe,
  Gift,
  Trophy,
  Activity,
  BarChart3,
  UserPlus,
  Handshake,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle,
  Clock3,
  MapPin,
  Filter,
  X,
  Sun,
  Moon,
  Database,
  Lock,
  Mail,
  Phone,
  Github,
  Linkedin,
  Sparkles,
  Video,
  MessageSquare,
  ExternalLink,
  FolderOpen
} from 'lucide-react';

export default function Page() {
  // Bypass authentication - removed ProtectedRoute wrapper
  return <Dashboard />;
}

function Dashboard() {
  const { user, profile, signOut } = useAuth();
  const router = useRouter();
  const [currentView, setCurrentView] = useState('dashboard');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showViewProfile, setShowViewProfile] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Close notifications if clicking outside
      if (showNotifications && !target.closest('.notification-container') && !target.closest('.notification-button')) {
        setShowNotifications(false);
      }
      
      // Close user dropdown if clicking outside
      if (showUserDropdown && !target.closest('.user-dropdown-container') && !target.closest('.user-dropdown-button')) {
        setShowUserDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications, showUserDropdown]);

  // Helper function to close all dropdowns when navigating
  const closeAllDropdowns = () => {
    setShowNotifications(false);
    setShowUserDropdown(false);
    setShowViewProfile(false);
    setShowEditProfile(false);
  };

  // Helper function for navigation that closes dropdowns
  const navigateTo = (view: string) => {
    closeAllDropdowns();
    setCurrentView(view);
  };

  const NotificationWindow = () => (
    <div className="notification-container fixed top-[80px] right-[80px] w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-[9999] transform translate-x-2">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
            Mark all read
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-1">New skill match found!</p>
              <p className="text-gray-600 text-sm mb-2">
                Sarah Chen wants to learn React and can teach Photography
              </p>
              <p className="text-gray-400 text-xs">2 minutes ago</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-1">Session scheduled</p>
              <p className="text-gray-600 text-sm mb-2">
                Your Python lesson with Alex Rivera is confirmed for tomorrow at 2 PM
              </p>
              <p className="text-gray-400 text-xs">1 hour ago</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 mb-1">New message received</p>
              <p className="text-gray-600 text-sm mb-2">
                Maria Garcia: "Thanks for the great guitar lesson!"
              </p>
              <p className="text-gray-400 text-xs">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full text-center text-blue-500 hover:text-blue-600 font-medium">
          View All Notifications
        </button>
      </div>
    </div>
  );

  const UserDropdown = () => (
    <div className="user-dropdown-container fixed top-[80px] right-[20px] w-64 bg-black/80 backdrop-blur-sm rounded-xl border border-white/20 p-2 z-[9999]">
      <div className="p-3 border-b border-white/20">
        <div className="flex items-center" style={{ gap: '0.35rem' }}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold">
              {profile?.name ? profile.name.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <div>
            <p className="text-white font-medium">{profile?.name || user?.email || 'User'}</p>
            <p className="text-white/70 text-sm">Level {profile?.level || 1} - {profile?.exp_points || 0} EXP</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        <button
          onClick={() => { setShowViewProfile(true); setShowUserDropdown(false); }}
          className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <User className="w-4 h-4" />
          <span>View Profile</span>
        </button>
        <button
          onClick={() => { setShowEditProfile(true); setShowUserDropdown(false); }}
          className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
        <button
          onClick={() => { navigateTo('settings'); setShowUserDropdown(false); }}
          className="w-full flex items-center gap-3 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
        <div className="border-t border-white/20 mt-2 pt-2">
          <button 
            onClick={async () => {
              await signOut();
              setShowUserDropdown(false);
              router.push('/auth/signin');
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );

  const EditProfileWindow = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 m-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
          <button
            onClick={() => setShowEditProfile(false)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white/70" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Profile Photo Section */}
          <div>
            <h3 className="text-white font-medium mb-3">Profile Photo</h3>
            <p className="text-white/70 text-sm mb-4">Add a profile picture to personalize your account</p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">PN</span>
              </div>
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors">
                <User className="w-4 h-4" />
                Upload Photo
              </button>
            </div>
            <p className="text-blue-400 text-sm mt-2 cursor-pointer hover:text-blue-300">
              A profile picture helps others recognize you!
            </p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Location</label>
              <input
                type="text"
                placeholder="City, Country"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-medium mb-2">Date of Birth</label>
              <input
                type="date"
                placeholder="Select your date of birth"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-white font-medium mb-2">Experience Level</label>
              <div className="relative">
                <select className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:border-blue-400">
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* About Me */}
          <div>
            <label className="block text-white font-medium mb-2">About Me</label>
            <textarea
              rows={4}
              placeholder="Tell others about yourself, your interests, and what you're passionate about..."
              className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Social Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">GitHub URL</label>
                <input
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-white/70 text-sm mb-2">Portfolio URL</label>
              <input
                type="url"
                placeholder="https://yourportfolio.com"
                className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-400"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-white/20">
            <button
              onClick={() => setShowEditProfile(false)}
              className="px-6 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2">
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h2 className="text-2xl font-bold text-white mb-2">Welcome back, Roman! 👋</h2>
        <p className="text-white/70">Ready to swap some skills today?</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Handshake className="w-6 h-6 text-blue-400" />
            <span className="text-white/70">Active Swaps</span>
          </div>
          <p className="text-2xl font-bold text-white">12</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <ArrowUpRight className="w-6 h-6 text-green-400" />
            <span className="text-white/70">Skills Taught</span>
          </div>
          <p className="text-2xl font-bold text-white">28</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <ArrowDownRight className="w-6 h-6 text-purple-400" />
            <span className="text-white/70">Skills Learned</span>
          </div>
          <p className="text-2xl font-bold text-white">15</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-white/70">Reputation</span>
          </div>
          <p className="text-2xl font-bold text-white">4.8</p>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Recent Activity */}
        <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <div className="flex-1">
                <p className="text-white font-medium">Completed Python session with Sarah</p>
                <p className="text-white/70 text-sm">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <UserPlus className="w-5 h-5 text-blue-400" />
              <div className="flex-1">
                <p className="text-white font-medium">New match: Alex wants to learn Notion</p>
                <p className="text-white/70 text-sm">5 hours ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <Clock3 className="w-5 h-5 text-orange-400" />
              <div className="flex-1">
                <p className="text-white font-medium">Upcoming: Guitar lesson with Mike</p>
                <p className="text-white/70 text-sm">Tomorrow at 3 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Exchange Opportunities */}
        <div className="w-80 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Perfect Matches</h3>
          <div className="space-y-4">
            <div className="p-4 bg-white/10 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                <div>
                  <p className="text-white font-medium">Emma</p>
                  <p className="text-white/70 text-sm">Wants: Notion • Offers: Photography</p>
                </div>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition-colors">
                Start Swap
              </button>
            </div>

            <div className="p-4 bg-white/10 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gray-400"></div>
                <div>
                  <p className="text-white font-medium">David</p>
                  <p className="text-white/70 text-sm">Wants: Guitar • Offers: React</p>
                </div>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition-colors">
                Start Swap
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Overview */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Your Skills</h3>
        <div className="flex gap-6">
          <div className="flex-1">
            <h4 className="text-white/70 mb-3">Skills You Teach</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Notion</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Web Design</span>
              <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Photography</span>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-white/70 mb-3">Skills You Want to Learn</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Guitar</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Spanish</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Cooking</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Marketing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // AI Matches Component
  const AIMatches = () => {
    const matches = [
      {
        id: 1,
        name: 'Sarah Chen',
        avatar: 'SC',
        rating: 4.9,
        level: 'Expert',
        location: 'San Francisco, CA',
        canTeach: ['Photography', 'Adobe Photoshop', 'Digital Art'],
        wantsToLearn: ['React', 'Web Development'],
        matchScore: 95,
        responseTime: '~2 hours',
        sessions: 127,
        bio: 'Professional photographer with 8+ years experience. Love teaching creative skills!'
      },
      {
        id: 2,
        name: 'Alex Rivera',
        avatar: 'AR',
        rating: 4.8,
        level: 'Advanced',
        location: 'New York, NY',
        canTeach: ['Python', 'Machine Learning', 'Data Science'],
        wantsToLearn: ['Guitar', 'Music Theory'],
        matchScore: 92,
        responseTime: '~1 hour',
        sessions: 89,
        bio: 'Data scientist passionate about AI and always eager to learn new creative skills.'
      },
      {
        id: 3,
        name: 'Maria Garcia',
        avatar: 'MG',
        rating: 4.7,
        level: 'Intermediate',
        location: 'Austin, TX',
        canTeach: ['Spanish', 'Guitar', 'Cooking'],
        wantsToLearn: ['JavaScript', 'Web Design'],
        matchScore: 88,
        responseTime: '~3 hours',
        sessions: 56,
        bio: 'Language teacher and musician who loves sharing cultural knowledge.'
      }
    ];

    return (
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">AI-Powered Matches</h1>
          </div>
          <p className="text-white/80 text-lg">
            Our AI has found the perfect skill exchange partners for you based on your interests and goals.
          </p>
        </div>

        {/* Matches Grid */}
        <div className="space-y-6">
          {matches.map((match) => (
            <div key={match.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                {/* Match Score Badge */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {match.matchScore}% Match
                </div>

                {/* Quick Actions */}
                <div className="flex space-x-3">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Request Session
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg font-medium transition-colors border border-white/30">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Profile Section */}
                <div className="md:col-span-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {match.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{match.name}</h3>
                      <div className="flex items-center space-x-2 text-white/80">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{match.rating}</span>
                        <span>•</span>
                        <span>{match.level}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-white/80 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{match.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Responds {match.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{match.sessions} sessions completed</span>
                    </div>
                  </div>
                </div>

                {/* Skills Section */}
                <div className="md:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Can Teach */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Can Teach</h4>
                      <div className="flex flex-wrap gap-2">
                        {match.canTeach.map((skill, index) => (
                          <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Wants to Learn */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Wants to Learn</h4>
                      <div className="flex flex-wrap gap-2">
                        {match.wantsToLearn.map((skill, index) => (
                          <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mt-4">
                    <p className="text-white/80 text-sm leading-relaxed">{match.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/30">
            Load More Matches
          </button>
        </div>
      </div>
    );
  };

  // Chat Component
  const ChatPage = () => (
    <div className="flex h-[calc(100vh-80px)]">
      {/* Chat Sidebar */}
      <div className="w-80 bg-gray-900/30 backdrop-blur-sm border-r border-white/10">
        {/* Search */}
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search conversations"
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-gray-400 text-sm mt-2">Loading new chats...</p>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto">
          {[
            { name: 'William', message: 'Thank you for the lesson!', time: 'now', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop', online: true },
            { name: 'Support', message: 'Platform was updated', time: '12:40', avatar: null, isSupport: true },
            { name: 'Dylan', message: 'Thank you for the lesson!', time: 'Yesterday', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
            { name: 'Emma', message: 'Thank you for the lesson!', time: '12 June', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
            { name: 'Robert', message: 'Thank you for the lesson!', time: '1 April', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }
          ].map((chat, index) => (
            <div key={index} className={`flex items-center space-x-3 p-4 hover:bg-gray-800/30 cursor-pointer transition-colors ${index === 0 ? 'bg-gray-800/50' : ''}`}>
              <div className="relative">
                {chat.isSupport ? (
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-gray-800 text-xs font-bold">?</span>
                    </div>
                  </div>
                ) : (
                  <img src={chat.avatar || ''} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                )}
                {chat.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium truncate">{chat.name}</h3>
                  <span className="text-gray-400 text-xs">{chat.time}</span>
                </div>
                <p className="text-gray-400 text-sm truncate">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-900/30">
        {/* Chat Header */}
        <div className="p-4 border-b border-white/10 bg-gray-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="William" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="text-white font-medium">William</h3>
                <p className="text-green-400 text-sm">Online</p>
              </div>
            </div>
            <div className="text-white text-xl font-bold">Built-in Messenger</div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Incoming message */}
            <div className="flex justify-start">
              <div className="flex items-start space-x-3 max-w-md">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="William" className="w-8 h-8 rounded-full object-cover" />
                <div className="bg-gray-700 rounded-2xl rounded-tl-sm p-4">
                  <p className="text-white">Mostly freelance gigs and content planning. I'd love tips on dashboards and databases!</p>
                </div>
              </div>
            </div>

            {/* Outgoing message */}
            <div className="flex justify-end">
              <div className="flex items-start space-x-3 max-w-md">
                <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4">
                  <p className="text-white">Perfect, I'll show you how to set up a client tracker and content board. Also... I noticed you teach guitar 🎸</p>
                </div>
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="You" className="w-8 h-8 rounded-full object-cover" />
              </div>
            </div>

            {/* Session Request */}
            <div className="flex justify-center">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 max-w-sm">
                <p className="text-gray-300 text-sm mb-3">William sent you a Session request:</p>
                <p className="text-white font-medium">17 June 14:00</p>
                <div className="flex space-x-2 mt-3">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm transition-colors">Accept</button>
                  <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white text-sm transition-colors">Decline</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-white/10 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Session Request Component
  const SessionRequest = () => (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Request a Session</h1>
        </div>
        <p className="text-white/80 text-lg">
          Schedule a skill exchange session with another member of the community.
        </p>
      </div>

      {/* Request Form */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
        <form className="space-y-6">
          {/* Session Type */}
          <div>
            <label className="block text-white font-semibold mb-3">Session Type</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                <input type="radio" name="sessionType" value="teaching" className="text-blue-500" />
                <div>
                  <div className="text-white font-medium">I want to teach</div>
                  <div className="text-white/70 text-sm">Share your skills with others</div>
                </div>
              </label>
              <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                <input type="radio" name="sessionType" value="learning" className="text-blue-500" />
                <div>
                  <div className="text-white font-medium">I want to learn</div>
                  <div className="text-white/70 text-sm">Learn from community experts</div>
                </div>
              </label>
            </div>
          </div>

          {/* Skill Selection */}
          <div>
            <label className="block text-white font-semibold mb-3">Skill/Topic</label>
            <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select a skill or topic</option>
              <option value="react">React Development</option>
              <option value="python">Python Programming</option>
              <option value="photography">Photography</option>
              <option value="guitar">Guitar Playing</option>
              <option value="spanish">Spanish Language</option>
              <option value="cooking">Cooking</option>
            </select>
          </div>

          {/* Session Format */}
          <div>
            <label className="block text-white font-semibold mb-3">Session Format</label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                <input type="radio" name="format" value="video" className="text-blue-500" />
                <Video className="w-5 h-5 text-white/80" />
                <span className="text-white">Video Call</span>
              </label>
              <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                <input type="radio" name="format" value="inPerson" className="text-blue-500" />
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white">In Person</span>
              </label>
            </div>
          </div>

          {/* Date and Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-semibold mb-3">Preferred Date</label>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-3">Preferred Time</label>
              <input
                type="time"
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-6">
            <button
              type="button"
              onClick={() => navigateTo('dashboard')}
              className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/30"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-lg"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Calendar Component
  const CalendarPage = () => (
    <div className="flex h-[calc(100vh-80px)] gap-6 p-6">
      {/* Calendar */}
      <div className="flex-1 flex justify-center items-start">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-6 w-full max-w-md">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <h2 className="text-lg font-semibold text-white">September 2025</h2>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-3 text-center text-gray-400 text-sm font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {[
              '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27,
              28, 29, 30, '', '', '', ''
            ].map((day, index) => {
              const isToday = day === 4;
              const hasEvent = [14, 18].includes(day as number);

              return (
                <div
                  key={index}
                  className={`
                    p-3 text-center text-sm cursor-pointer transition-colors relative h-10 flex items-center justify-center
                    ${day ? 'text-white hover:bg-gray-700 rounded-lg' : 'pointer-events-none'}
                    ${isToday ? 'bg-blue-600 rounded-lg text-white font-bold' : ''}
                  `}
                >
                  {day}
                  {hasEvent && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* New Session Button */}
          <button
            onClick={() => navigateTo('session-request')}
            className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>New session request</span>
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-6">
        {/* View Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-800/30 rounded-lg p-1">
          <button className="flex-1 px-4 py-2 bg-blue-600 rounded-md text-white text-sm font-medium">Upcoming</button>
          <button className="flex-1 px-4 py-2 text-gray-400 text-sm font-medium hover:text-white">Requests</button>
          <button className="flex-1 px-4 py-2 text-gray-400 text-sm font-medium hover:text-white">History</button>
        </div>

        {/* Sessions List */}
        <div className="space-y-4">
          {/* Guitar Session */}
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-white font-medium">Guitar with William</h4>
                <p className="text-blue-400 text-sm">Type: Teaching</p>
                <p className="text-gray-400 text-sm">Date: 14 June at 12:30</p>
                <p className="text-gray-400 text-sm">Topic: Python</p>
              </div>
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="William" className="w-12 h-12 rounded-full object-cover" />
            </div>
            <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Manage session
            </button>
          </div>

          {/* Python Session */}
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-white font-medium">Python with Robert</h4>
                <p className="text-green-400 text-sm">Type: Learning</p>
                <p className="text-gray-400 text-sm">Date: Today at 17:00</p>
                <p className="text-gray-400 text-sm">Topic: Python</p>
              </div>
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Robert" className="w-12 h-12 rounded-full object-cover" />
            </div>
            <button className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
              Manage session
            </button>
          </div>
        </div>

        <button className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition-colors">
          View All Sessions
        </button>
      </div>
    </div>
  );

  // Community Component
  const CommunityPage = () => {
    const posts = [
      {
        id: 1,
        author: 'Sarah Chen',
        avatar: 'SC',
        time: '2 hours ago',
        content: 'Just finished an amazing photography session with Alex! His teaching style is incredible and I learned so much about portrait lighting. Highly recommend! 📸✨',
        likes: 24,
        comments: 8,
        shares: 3,
        tags: ['Photography', 'Learning', 'Recommendation']
      },
      {
        id: 2,
        author: 'Alex Rivera',
        avatar: 'AR',
        time: '4 hours ago',
        content: 'Looking for someone to practice Spanish conversation with! I can help with Python programming in return. Anyone interested? 🇪🇸💻',
        likes: 18,
        comments: 12,
        shares: 5,
        tags: ['Spanish', 'Python', 'Exchange']
      },
      {
        id: 3,
        author: 'Maria Garcia',
        avatar: 'MG',
        time: '6 hours ago',
        content: 'Hosting a virtual cooking class this weekend - making traditional Mexican dishes! Still have 3 spots available. Who wants to join? 🌮👩‍🍳',
        likes: 31,
        comments: 15,
        shares: 8,
        tags: ['Cooking', 'Mexican', 'Virtual Class']
      }
    ];

    const trendingTopics = [
      { name: 'Web Development', posts: 156 },
      { name: 'Photography', posts: 89 },
      { name: 'Language Exchange', posts: 67 },
      { name: 'Music Lessons', posts: 45 },
      { name: 'Cooking', posts: 38 }
    ];

    return (
      <div className="p-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Page Header */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Community</h1>
              </div>
              <p className="text-white/80 text-lg">
                Connect with fellow learners, share experiences, and discover new opportunities.
              </p>
            </div>

            {/* Create Post */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Share your learning journey, ask questions, or offer help..."
                    className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-white/60">
                  <button className="hover:text-white transition-colors">📷 Photo</button>
                  <button className="hover:text-white transition-colors">🎥 Video</button>
                  <button className="hover:text-white transition-colors">📊 Poll</button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Post
                </button>
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  {/* Post Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">{post.author}</h3>
                      <div className="flex items-center space-x-2 text-white/60 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <p className="text-white/90 mb-4 leading-relaxed">{post.content}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-400/30">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex space-x-6">
                      <button className="flex items-center space-x-2 text-white/60 hover:text-red-400 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-white/60 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-5 h-5 text-white" />
                <h2 className="text-lg font-semibold text-white">Trending Topics</h2>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span className="text-white font-medium">#{topic.name}</span>
                    <span className="text-white/60 text-sm">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Community Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Active Members</span>
                  <span className="text-white font-semibold">1,357</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Sessions This Week</span>
                  <span className="text-white font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Skills Shared</span>
                  <span className="text-white font-semibold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">New Posts Today</span>
                  <span className="text-white font-semibold">23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Projects Component
  const ProjectsPage = () => {
    const projects = [
      {
        id: 1,
        title: 'E-commerce Website Redesign',
        description: 'Collaborative project to redesign a local business website using React and modern UI/UX principles.',
        status: 'In Progress',
        progress: 65,
        members: [
          { name: 'Sarah Chen', avatar: 'SC', role: 'UI/UX Designer' },
          { name: 'Alex Rivera', avatar: 'AR', role: 'Frontend Developer' },
          { name: 'You', avatar: 'R', role: 'Backend Developer' }
        ],
        skills: ['React', 'Node.js', 'UI/UX Design', 'MongoDB'],
        deadline: '2025-10-15',
        type: 'Collaborative Learning'
      },
      {
        id: 2,
        title: 'Spanish Learning App',
        description: 'Building a mobile app to help people learn Spanish through interactive exercises and games.',
        status: 'Planning',
        progress: 20,
        members: [
          { name: 'Maria Garcia', avatar: 'MG', role: 'Language Expert' },
          { name: 'You', avatar: 'R', role: 'App Developer' }
        ],
        skills: ['React Native', 'Spanish', 'Game Design', 'Education'],
        deadline: '2025-11-30',
        type: 'Skill Exchange'
      }
    ];

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'In Progress': return 'bg-blue-500/20 text-blue-300 border-blue-400/30'
        case 'Planning': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
        case 'Completed': return 'bg-green-500/20 text-green-300 border-green-400/30'
        default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30'
      }
    };

    return (
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">My Projects</h1>
              </div>
              <p className="text-white/80 text-lg">
                Collaborate on real-world projects while learning and teaching skills.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">2</div>
            <div className="text-white/80">Active Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">1</div>
            <div className="text-white/80">Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">4</div>
            <div className="text-white/80">Collaborators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-2xl font-bold text-white mb-2">8</div>
            <div className="text-white/80">Skills Learned</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>

                  {/* Project Type */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-white/60 text-sm">Type:</span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-400/30">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors border border-white/30">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors border border-white/30">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-sm">Progress</span>
                  <span className="text-white font-semibold text-sm">{project.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Team Members */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Team ({project.members.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {project.members.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {member.avatar}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{member.name}</div>
                          <div className="text-white/60 text-xs">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Skills Involved</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs border border-green-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline</span>
                  </h4>
                  <div className="text-white/80">{new Date(project.deadline).toLocaleDateString()}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-white/20">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors border border-white/30">
                  View Details
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Open Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // My Points Component
  const MyPointsPage = () => {
    const pointsHistory = [
      {
        id: 1,
        type: 'earned',
        points: 50,
        activity: 'Completed Python session with Alex Rivera',
        date: '2025-09-02',
        icon: BookOpen,
        color: 'text-green-400'
      },
      {
        id: 2,
        type: 'earned',
        points: 30,
        activity: 'Taught React basics to Sarah Chen',
        date: '2025-08-28',
        icon: User,
        color: 'text-blue-400'
      },
      {
        id: 3,
        type: 'redeemed',
        points: -25,
        activity: 'Redeemed: Premium session with Maria Garcia',
        date: '2025-08-25',
        icon: Gift,
        color: 'text-red-400'
      }
    ];

    const rewards = [
      {
        id: 1,
        title: 'Premium Session Access',
        description: 'Unlock access to premium sessions with expert instructors',
        points: 100,
        available: true
      },
      {
        id: 2,
        title: 'Skill Certification',
        description: 'Get a verified certificate for your completed skills',
        points: 150,
        available: true
      },
      {
        id: 3,
        title: 'Priority Matching',
        description: 'Get priority in AI-powered skill matching for 30 days',
        points: 75,
        available: true
      }
    ];

    const currentPoints = 245;
    const totalEarned = 890;
    const totalSpent = 645;

    return (
      <div className="p-6 space-y-6">
        {/* Page Header and Points Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">My Points & Rewards</h1>
          </div>
          <p className="text-white/80 text-lg mb-6">
            Earn points by teaching, learning, and participating. Redeem them for awesome rewards!
          </p>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-white">{currentPoints}</p>
              <p className="text-white/70 text-sm">Current Balance</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-green-400">{totalEarned}</p>
              <p className="text-white/70 text-sm">Total Earned</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-2xl font-bold text-red-400">{totalSpent}</p>
              <p className="text-white/70 text-sm">Total Spent</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* History */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Points History</h2>
            <div className="space-y-3">
              {pointsHistory.map(item => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-white font-medium">{item.activity}</p>
                        <p className="text-white/60 text-sm">{new Date(item.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <span className={`font-bold ${item.points > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {item.points > 0 ? `+${item.points}` : item.points}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Rewards */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Redeem Rewards</h2>
            <div className="space-y-4">
              {rewards.map(reward => (
                <div key={reward.id} className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="text-white font-semibold">{reward.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{reward.description}</p>
                  <button disabled={!reward.available} className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                    Redeem for {reward.points} points
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // My Skills Component (Inline version)
  const MySkillsPage = () => {
    const [activeTab, setActiveTab] = useState('teaching');

    const teachingSkills = [
      {
        id: 1,
        name: 'React Development',
        level: 'Expert',
        rating: 4.8,
        studentsHelped: 15,
        hoursTeaching: 45,
        description: 'Building modern web applications with React, hooks, and state management',
        tags: ['JavaScript', 'Frontend', 'Web Development'],
        verified: true,
        dateAdded: '2024-03-15'
      },
      {
        id: 2,
        name: 'Python Programming',
        level: 'Advanced',
        rating: 4.6,
        studentsHelped: 8,
        hoursTeaching: 28,
        description: 'Data analysis, web development, and automation with Python',
        tags: ['Programming', 'Data Science', 'Backend'],
        verified: true,
        dateAdded: '2024-02-10'
      },
      {
        id: 3,
        name: 'UI/UX Design',
        level: 'Intermediate',
        rating: 4.5,
        studentsHelped: 12,
        hoursTeaching: 35,
        description: 'Creating user-centered designs and intuitive interfaces',
        tags: ['Design', 'Figma', 'User Experience'],
        verified: false,
        dateAdded: '2024-01-20'
      }
    ];

    const learningGoals = [
      {
        id: 1,
        name: 'Machine Learning',
        progress: 65,
        target: 'Advanced',
        currentLevel: 'Beginner',
        sessionsCompleted: 8,
        totalSessions: 12,
        mentor: 'Dr. Sarah Chen',
        nextSession: '2024-09-08',
        description: 'Learning ML algorithms, neural networks, and data modeling',
        tags: ['AI', 'Data Science', 'Python'],
        priority: 'High'
      },
      {
        id: 2,
        name: 'Spanish Language',
        progress: 40,
        target: 'Conversational',
        currentLevel: 'Beginner',
        sessionsCompleted: 6,
        totalSessions: 15,
        mentor: 'Maria Garcia',
        nextSession: '2024-09-07',
        description: 'Building conversational Spanish skills for travel and work',
        tags: ['Language', 'Communication', 'Culture'],
        priority: 'Medium'
      },
      {
        id: 3,
        name: 'Guitar Playing',
        progress: 25,
        target: 'Intermediate',
        currentLevel: 'Beginner',
        sessionsCompleted: 3,
        totalSessions: 10,
        mentor: 'Mike Johnson',
        nextSession: '2024-09-10',
        description: 'Learning acoustic guitar and basic music theory',
        tags: ['Music', 'Instrument', 'Creative'],
        priority: 'Low'
      }
    ];

    const getLevelColor = (level: string) => {
      switch (level) {
        case 'Expert': return 'bg-purple-500/20 text-purple-300 border-purple-400/30'
        case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-400/30'
        case 'Intermediate': return 'bg-green-500/20 text-green-300 border-green-400/30'
        case 'Beginner': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
        default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30'
      }
    };

    const getPriorityColor = (priority: string) => {
      switch (priority) {
        case 'High': return 'bg-red-500/20 text-red-300 border-red-400/30'
        case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
        case 'Low': return 'bg-green-500/20 text-green-300 border-green-400/30'
        default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30'
      }
    };

    return (
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">My Skills</h1>
          </div>
          <p className="text-white/80 text-lg">
            Manage your teaching skills and learning goals. Track your progress and help others grow.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white/10 backdrop-blur-sm rounded-xl p-1">
          <button
            onClick={() => setActiveTab('teaching')}
            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'teaching'
                ? 'bg-blue-500 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Teaching Skills ({teachingSkills.length})</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('learning')}
            className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'learning'
                ? 'bg-blue-500 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Learning Goals ({learningGoals.length})</span>
            </div>
          </button>
        </div>

        {/* Teaching Skills Tab */}
        {activeTab === 'teaching' && (
          <div className="space-y-6">
            {/* Add New Skill Button */}
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Add Teaching Skill</span>
              </button>
            </div>

            {/* Skills Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {teachingSkills.map((skill) => (
                <div key={skill.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                        {skill.verified && (
                          <div className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs border border-green-400/30">
                            Verified
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-medium">{skill.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                        <Edit className="w-4 h-4 text-white" />
                      </button>
                      <button className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors">
                        <X className="w-4 h-4 text-red-300" />
                      </button>
                    </div>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">{skill.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.tags.map((tag, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-white/80 text-sm">{skill.studentsHelped} students helped</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">{skill.hoursTeaching} hours taught</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Learning Goals Tab */}
        {activeTab === 'learning' && (
          <div className="space-y-6">
            {/* Add New Goal Button */}
            <div className="flex justify-end">
              <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center space-x-2">
                <Plus className="w-5 h-5" />
                <span>Add Learning Goal</span>
              </button>
            </div>

            {/* Goals Grid */}
            <div className="space-y-6">
              {learningGoals.map((goal) => (
                <div key={goal.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Goal Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{goal.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-sm border ${getPriorityColor(goal.priority)}`}>
                              {goal.priority} Priority
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 mb-3">
                            <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(goal.currentLevel)}`}>
                              Current: {goal.currentLevel}
                            </span>
                            <span className="text-white/60">→</span>
                            <span className={`px-3 py-1 rounded-full text-sm border ${getLevelColor(goal.target)}`}>
                              Target: {goal.target}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                            <Edit className="w-4 h-4 text-white" />
                          </button>
                          <button className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors">
                            <X className="w-4 h-4 text-red-300" />
                          </button>
                        </div>
                      </div>

                      <p className="text-white/80 mb-4 leading-relaxed">{goal.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {goal.tags.map((tag, index) => (
                          <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-white/60 text-sm mb-1">Mentor</p>
                          <p className="text-white font-medium">{goal.mentor}</p>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">Next Session</p>
                          <p className="text-white font-medium">{new Date(goal.nextSession).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    {/* Progress Section */}
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-white mb-1">{goal.progress}%</div>
                        <div className="text-white/60 text-sm">Progress</div>
                      </div>

                      <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                        <div
                          className="bg-gradient-to-r from-green-500 to-teal-600 h-3 rounded-full transition-all duration-300"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/60">Sessions:</span>
                          <span className="text-white">{goal.sessionsCompleted}/{goal.totalSessions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Remaining:</span>
                          <span className="text-white">{goal.totalSessions - goal.sessionsCompleted} sessions</span>
                        </div>
                      </div>

                      <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors">
                        Schedule Session
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // My Progress Component (Hybrid version) - Best of Both Designs
  const MyProgressPage = () => {
    const [timeRange, setTimeRange] = useState('All time');

    const progressStats = {
      totalSessions: 45,
      hoursLearned: 98,
      hoursTeaching: 73,
      skillsImproved: 8,
      studentsHelped: 23,
      achievementsEarned: 12,
      currentStreak: 15,
      longestStreak: 28
    };

    const learningProgress = [
      {
        skill: 'Machine Learning',
        progress: 75,
        startDate: '2024-02-15',
        targetDate: '2024-10-15',
        sessionsCompleted: 12,
        totalSessions: 16,
        hoursSpent: 36,
        currentLevel: 'Intermediate',
        nextMilestone: 'Complete Neural Networks module',
        mentor: 'Dr. Sarah Chen'
      },
      {
        skill: 'Spanish Language',
        progress: 60,
        startDate: '2024-01-10',
        targetDate: '2024-12-10',
        sessionsCompleted: 18,
        totalSessions: 30,
        hoursSpent: 45,
        currentLevel: 'Intermediate',
        nextMilestone: 'Pass conversational fluency test',
        mentor: 'Maria Garcia'
      },
      {
        skill: 'Guitar Playing',
        progress: 40,
        startDate: '2024-03-01',
        targetDate: '2024-11-01',
        sessionsCompleted: 8,
        totalSessions: 20,
        hoursSpent: 24,
        currentLevel: 'Beginner',
        nextMilestone: 'Learn first complete song',
        mentor: 'Mike Johnson'
      }
    ];

    const teachingStats = [
      {
        skill: 'React Development',
        studentsHelped: 15,
        totalSessions: 28,
        hoursTeaching: 42,
        avgRating: 4.8,
        completionRate: 93,
        nextSession: '2024-09-07'
      },
      {
        skill: 'Python Programming',
        studentsHelped: 8,
        totalSessions: 18,
        hoursTeaching: 31,
        avgRating: 4.6,
        completionRate: 88,
        nextSession: '2024-09-08'
      }
    ];

    const recentAchievements = [
      {
        id: 1,
        title: 'Learning Streak Master',
        description: 'Completed 15 consecutive days of learning',
        icon: <Zap className="w-6 h-6" />,
        earnedDate: '2024-09-05',
        rarity: 'Gold',
        points: 500
      },
      {
        id: 2,
        title: 'Mentor Excellence',
        description: 'Received 5-star ratings from 10 students',
        icon: <Star className="w-6 h-6" />,
        earnedDate: '2024-09-03',
        rarity: 'Silver',
        points: 300
      },
      {
        id: 3,
        title: 'Skill Explorer',
        description: 'Started learning 3 new skills',
        icon: <BookOpen className="w-6 h-6" />,
        earnedDate: '2024-09-01',
        rarity: 'Bronze',
        points: 200
      }
    ];

    const weeklyActivity = [
      { day: 'Mon', learning: 2, teaching: 1 },
      { day: 'Tue', learning: 3, teaching: 2 },
      { day: 'Wed', learning: 1, teaching: 3 },
      { day: 'Thu', learning: 4, teaching: 1 },
      { day: 'Fri', learning: 2, teaching: 2 },
      { day: 'Sat', learning: 3, teaching: 0 },
      { day: 'Sun', learning: 2, teaching: 1 }
    ];

    const getRarityColor = (rarity: string) => {
      switch (rarity) {
        case 'Gold': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
        case 'Silver': return 'bg-gray-400/20 text-gray-300 border-gray-400/30'
        case 'Bronze': return 'bg-orange-500/20 text-orange-300 border-orange-400/30'
        default: return 'bg-blue-500/20 text-blue-300 border-blue-400/30'
      }
    };

    return (
      <div className="p-6 space-y-6">
        {/* Level Progress Header - Full Layout with EXP Bar */}
        <div className="bg-gradient-to-r from-blue-600/30 to-blue-800/30 backdrop-blur-md rounded-2xl border border-blue-500/20 px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Left Side - Current Level */}
            <div>
              <p className="text-white/70 text-sm mb-1">Your level:</p>
              <p className="text-white font-semibold text-lg">Skill Seeker</p>
            </div>
            
            {/* Center - Progress Bar with Levels */}
            <div className="flex items-center space-x-8">
              <div className="text-6xl font-bold text-white">2</div>
              
              <div className="relative">
                <div className="w-80 bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full transition-all duration-500" style={{ width: '67%' }}></div>
                </div>
                {/* EXP Counter positioned above the bar */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
                    <span className="text-white font-medium text-xs">1,357 / 2,000 EXP</span>
                  </div>
                </div>
              </div>
              
              <div className="text-6xl font-bold text-white">3</div>
            </div>
            
            {/* Right Side - Next Level */}
            <div>
              <p className="text-white/70 text-sm mb-1">Teach 1 more session to reach:</p>
              <p className="text-white font-semibold text-lg">Early Mentor</p>
            </div>
          </div>
        </div>

        {/* Stats Overview Grid - From Old Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{progressStats.totalSessions}</div>
            <div className="text-white/60 text-sm">Total Sessions</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{progressStats.hoursLearned}</div>
            <div className="text-white/60 text-sm">Hours Learning</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{progressStats.studentsHelped}</div>
            <div className="text-white/60 text-sm">Students Helped</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{progressStats.currentStreak}</div>
            <div className="text-white/60 text-sm">Day Streak</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Activity Chart & Learning Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Circular Activity Chart - From New Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Activity</h2>
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="All time">All time</option>
                  <option value="This month">This month</option>
                  <option value="This week">This week</option>
                </select>
              </div>

              {/* Circular Progress Chart */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-40 h-40">
                  <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Learning Progress */}
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="url(#learningGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(98 * 219.8) / 171} 219.8`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                    {/* Teaching Progress */}
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      stroke="url(#teachingGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(73 * 219.8) / 171} 219.8`}
                      strokeDashoffset={`-${(98 * 219.8) / 171}`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                    <defs>
                      <linearGradient id="learningGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                      <linearGradient id="teachingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-1">Total</div>
                      <div className="text-2xl font-bold text-white">171h</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                  <div>
                    <p className="text-white font-medium">Learning</p>
                    <p className="text-white font-bold">{progressStats.hoursLearned} hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-cyan-400"></div>
                  <div>
                    <p className="text-white font-medium">Teaching</p>
                    <p className="text-white font-bold">{progressStats.hoursTeaching} hours</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                <div>
                  <p className="text-white/70 text-sm mb-1">You learned the most:</p>
                  <p className="text-white font-bold">Python</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm mb-1">You taught the most:</p>
                  <p className="text-white font-bold">React Development</p>
                </div>
              </div>
            </div>

            {/* Detailed Learning Progress - From Old Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Learning Progress</span>
              </h2>
              
              <div className="space-y-6">
                {learningProgress.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{item.skill}</h3>
                      <span className="text-2xl font-bold text-white">{item.progress}%</span>
                    </div>
                    
                    <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-white/60 mb-1">Sessions</p>
                        <p className="text-white">{item.sessionsCompleted}/{item.totalSessions}</p>
                      </div>
                      <div>
                        <p className="text-white/60 mb-1">Hours Spent</p>
                        <p className="text-white">{item.hoursSpent}h</p>
                      </div>
                      <div>
                        <p className="text-white/60 mb-1">Current Level</p>
                        <p className="text-white">{item.currentLevel}</p>
                      </div>
                      <div>
                        <p className="text-white/60 mb-1">Mentor</p>
                        <p className="text-white">{item.mentor}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-400/20">
                      <p className="text-white/80 text-sm">
                        <span className="font-medium">Next milestone:</span> {item.nextMilestone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Impact - From Old Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Teaching Impact</span>
              </h2>
              
              <div className="space-y-4">
                {teachingStats.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{item.skill}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">{item.avgRating}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-white/60 mb-1">Students</p>
                        <p className="text-white font-medium">{item.studentsHelped}</p>
                      </div>
                      <div>
                        <p className="text-white/60 mb-1">Sessions</p>
                        <p className="text-white font-medium">{item.totalSessions}</p>
                      </div>
                      <div>
                        <p className="text-white/60 mb-1">Hours</p>
                        <p className="text-white font-medium">{item.hoursTeaching}h</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white/80 text-sm">{item.completionRate}% completion rate</span>
                      </div>
                      <span className="text-white/60 text-sm">Next: {item.nextSession}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Polished Badges Section - From New Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Badges</h3>
                <button className="text-blue-400 text-sm hover:text-blue-300">see all</button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">GOOD START</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white text-lg font-bold">{progressStats.achievementsEarned}</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-white text-lg font-bold">?</div>
                </div>
              </div>
            </div>

            {/* Next Goals - From New Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Next goals</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium mb-2">Teach 1 more session to unlock</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">3</span>
                  </div>
                  <p className="text-white text-sm font-medium">Complete a learning session this week to level up</p>
                </div>
              </div>
            </div>

            {/* Enhanced Recent Achievements - Hybrid */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Recent Achievements</span>
              </h2>
              
              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white/5 rounded-xl p-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <div className="w-5 h-5">
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-white font-medium text-xs">{achievement.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs border ${getRarityColor(achievement.rarity)}`}>
                            {achievement.rarity}
                          </span>
                        </div>
                        <p className="text-white/70 text-xs mb-1">{achievement.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-400 text-xs font-medium">+{achievement.points} pts</span>
                          <span className="text-white/50 text-xs">{new Date(achievement.earnedDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity Chart - From Old Design */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Weekly Activity</span>
              </h2>
              
              <div className="space-y-3">
                {weeklyActivity.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80 text-sm w-10">{day.day}</span>
                    <div className="flex-1 mx-3">
                      <div className="flex space-x-1">
                        <div 
                          className="bg-blue-500 rounded-sm h-4"
                          style={{ width: `${(day.learning / 4) * 100}%`, minWidth: day.learning > 0 ? '8px' : '0' }}
                        ></div>
                        <div 
                          className="bg-green-500 rounded-sm h-4"
                          style={{ width: `${(day.teaching / 4) * 100}%`, minWidth: day.teaching > 0 ? '8px' : '0' }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-white/60 text-sm w-8 text-right">{day.learning + day.teaching}h</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                    <span className="text-white/70">Learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    <span className="text-white/70">Teaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Settings Component
  const SettingsComponent = () => (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Settings</h1>
        </div>
        <p className="text-white/80 text-lg">
          Manage your account preferences and privacy settings.
        </p>
      </div>

      {/* Quick Settings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="w-6 h-6 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Account</h3>
          </div>
          <p className="text-white/80 mb-4">Manage your profile and account settings</p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
          </div>
          <p className="text-white/80 mb-4">Control your notification preferences</p>
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors">
            Configure
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Privacy</h3>
          </div>
          <p className="text-white/80 mb-4">Manage your privacy and security settings</p>
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors">
            View Settings
          </button>
        </div>
      </div>

      {/* Recent Settings */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Recent Changes</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium">Email notifications enabled</p>
              <p className="text-white/60 text-sm">2 days ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium">Profile visibility changed to public</p>
              <p className="text-white/60 text-sm">1 week ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
            <div>
              <p className="text-white font-medium">Password updated</p>
              <p className="text-white/60 text-sm">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Settings */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Advanced</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left">
            <h3 className="text-white font-medium mb-2">Data Export</h3>
            <p className="text-white/70 text-sm">Download your account data</p>
          </button>
          
          <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left">
            <h3 className="text-white font-medium mb-2">API Access</h3>
            <p className="text-white/70 text-sm">Manage API keys and tokens</p>
          </button>
          
          <button className="p-4 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors text-left border border-red-400/30">
            <h3 className="text-red-300 font-medium mb-2">Delete Account</h3>
            <p className="text-red-400/70 text-sm">Permanently delete your account</p>
          </button>
          
          <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left">
            <h3 className="text-white font-medium mb-2">Help & Support</h3>
            <p className="text-white/70 text-sm">Get help or contact support</p>
          </button>
        </div>
      </div>
    </div>
  );

  // --- Main Layout and View Rendering ---

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'ai-matches':
        return <AIMatches />;
      case 'chat':
        return <ChatPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'community':
        return <CommunityPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'my-points':
        return <MyPointsPage />;
      case 'my-skills':
        return <MySkillsPage />;
      case 'my-progress':
        return <MyProgressPage />;
      case 'session-request':
        return <SessionRequest />;
      case 'settings':
        return <SettingsComponent />;
      default:
        return <Dashboard />;
    }
  };

  const Sidebar = () => (
    <div className="w-64 p-4 flex flex-col bg-transparent">
      <div className="text-white text-2xl font-bold mb-8">Soulix</div>
      <nav className="flex-grow space-y-2">
        <button onClick={() => navigateTo('dashboard')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'dashboard' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </button>
        <button onClick={() => navigateTo('ai-matches')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'ai-matches' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <Sparkles className="w-5 h-5" />
          <span>AI Matches</span>
        </button>
        <button onClick={() => navigateTo('chat')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'chat' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <MessageCircle className="w-5 h-5" />
          <span>Chat</span>
        </button>
        <button onClick={() => navigateTo('calendar')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'calendar' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <Calendar className="w-5 h-5" />
          <span>Calendar</span>
        </button>
        <button onClick={() => navigateTo('community')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'community' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <Users className="w-5 h-5" />
          <span>Community</span>
        </button>
        <button onClick={() => navigateTo('projects')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'projects' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <FolderOpen className="w-5 h-5" />
          <span>Projects</span>
        </button>
        <button onClick={() => navigateTo('my-points')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'my-points' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <Trophy className="w-5 h-5" />
          <span>My Points</span>
        </button>
        <button onClick={() => navigateTo('my-skills')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'my-skills' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <BookOpen className="w-5 h-5" />
          <span>My Skills</span>
        </button>
        <button onClick={() => navigateTo('my-progress')} className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-colors ${currentView === 'my-progress' ? 'bg-blue-500 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
          <TrendingUp className="w-5 h-5" />
          <span>My Progress</span>
        </button>
      </nav>
      <div className="mt-auto">
        <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors">
          <HelpCircle className="w-5 h-5" />
          <span>Help Center</span>
        </button>
      </div>
    </div>
  );
  
  const Header = () => (
    <div className="h-20 flex items-center justify-between px-6 bg-white/5 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <h1 className="text-xl text-white font-semibold capitalize">{currentView.replace('-', ' ')}</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          <input 
            type="text" 
            placeholder="Search skills, users..." 
            className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/50 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="notification-button p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Bell className="w-5 h-5 text-white" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className="user-dropdown-button flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: 'url(/dashboard-background.png)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {showViewProfile && (
        <ProfileModal 
          isOpen={showViewProfile}
          onClose={() => setShowViewProfile(false)}
          onEditProfile={() => {
            setShowViewProfile(false);
            setShowEditProfile(true);
          }}
        />
      )}
      {showEditProfile && <EditProfileWindow />}
      
      {/* Render dropdowns at top level with fixed positioning */}
      {showNotifications && <NotificationWindow />}
      {showUserDropdown && <UserDropdown />}
      
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <Header />
          <div className="h-[calc(100vh-80px)] overflow-y-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}