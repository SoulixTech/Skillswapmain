'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Handshake, 
  ArrowUpRight, 
  ArrowDownRight, 
  Trophy, 
  CheckCircle, 
  UserPlus, 
  Clock3,
  ArrowLeft
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <span className="text-xl font-bold text-white">SkillSwap</span>
              </Link>
            </div>
            <Link 
              href="/"
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Main</span>
            </Link>
          </div>
        </div>
      </header>

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
    </div>
  );
}