'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronDown, Handshake, Trophy, Target, ArrowLeft } from 'lucide-react';

export default function ProgressPage() {
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
        {/* Progress Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-200 mb-1">Your level:</p>
              <p className="text-white font-bold text-lg">Skill Seeker</p>
            </div>
            
            <div className="flex-1 mx-8 flex items-center gap-6">
              <div className="text-6xl font-bold text-white">2</div>
              <div className="flex-1 bg-white/20 rounded-full h-3">
                <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full w-3/4"></div>
              </div>
              <div className="text-6xl font-bold text-white/70">3</div>
            </div>
            
            <div className="text-right">
              <p className="text-blue-200 mb-1">Teach 1 more session to reach:</p>
              <p className="text-white font-bold text-lg">Early Mentor</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Activity Section */}
          <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Activity</h2>
              <div className="flex items-center gap-2 text-white/70">
                <span>All time</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-center gap-8 mb-8">
              {/* Circular Chart */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8 border-white/20 relative">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-blue-400 border-r-blue-400 border-b-blue-400 transform rotate-45"></div>
                  <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-cyan-400 border-r-cyan-400 transform rotate-180"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white font-bold text-sm">Total</span>
                    <span className="text-white font-bold">30h 45m</span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/40 rounded-sm"></div>
                  <span className="text-white/70">Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                  <span className="text-white/70">Teaching</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white/60 mb-1">Hours spent on learning</p>
                <p className="text-white font-medium">10 hours 30 minutes</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">Hours spent on teaching</p>
                <p className="text-white font-medium">20 hours 15 minutes</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">You learned the most:</p>
                <p className="text-white font-medium">Python</p>
              </div>
              <div>
                <p className="text-white/60 mb-1">You taught the most:</p>
                <p className="text-white font-medium">Notion</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-80 space-y-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/dashboard-background.png')" }}>
            {/* Badges Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">Badges</h2>
                <span className="text-blue-300 text-sm cursor-pointer">see all</span>
              </div>
              
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    GOOD START
                  </div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-xl flex items-center justify-center">
                  <div className="text-white font-bold text-2xl">7</div>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center relative">
                  <Trophy className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                    SWAP KING
                  </div>
                </div>
              </div>
            </div>

            {/* Next Goals Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Next goals</h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-3">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/70 text-sm">Teach 1 more session to unlock</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <p className="text-white/70 text-sm">Complete a learning session this week to level up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}