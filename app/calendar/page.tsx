'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Plus, ArrowLeft } from 'lucide-react';

export default function CalendarPage() {
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

      <div className="flex h-[calc(100vh-80px)] gap-6">
        {/* Calendar */}
        <div className="flex-1 p-6 flex justify-center">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-6 w-full max-w-md">
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <h2 className="text-lg font-semibold text-white">June</h2>
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
                '', '', '', '', '', '', 1, 2, 3, 4, 5, 6, 7,
                8, 9, 10, 11, 12, 13, 14,
                15, 16, 17, 18, 19, 20, 21,
                22, 23, 24, 25, 26, 27, 28,
                29, 30, 31, '', '', '', ''
              ].map((day, index) => {
                const isToday = day === 12;
                const hasEvent = typeof day === 'number' && [14, 18].includes(day);
                
                return (
                  <div
                    key={index}
                    className={`
                      p-3 text-center text-sm cursor-pointer transition-colors relative h-10 flex items-center justify-center
                      ${day ? 'text-white hover:bg-gray-700 rounded' : ''}
                      ${isToday ? 'bg-blue-600 rounded text-white' : ''}
                    `}
                  >
                    {day}
                    {hasEvent && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* New Session Button */}
            <button className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors flex items-center justify-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>New session request</span>
            </button>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-80 p-6 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/dashboard-background.png')" }}>
          {/* View Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-800/30 rounded-lg p-1">
            <button className="px-4 py-2 bg-blue-600 rounded-md text-white text-sm font-medium">Upcoming</button>
            <button className="px-4 py-2 text-gray-400 text-sm font-medium hover:text-white">Requests</button>
            <button className="px-4 py-2 text-gray-400 text-sm font-medium hover:text-white">History</button>
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
            
            {/* Python Session with Robert */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-medium">Python with Robert</h4>
                  <p className="text-green-400 text-sm">Type: Learning</p>
                  <p className="text-gray-400 text-sm">Date: Tomorrow at 15:00</p>
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
    </div>
  );
}