'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Send, ArrowLeft } from 'lucide-react';

export default function ChatPage() {
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

      <div className="flex h-[calc(100vh-80px)]">
        {/* Chat Sidebar */}
        <div className="w-80 bg-gray-900/50 backdrop-blur-md border-r border-white/10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/dashboard-background.png')" }}>
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
              
              {/* Incoming message */}
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-md">
                  <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="William" className="w-8 h-8 rounded-full object-cover" />
                  <div className="bg-gray-700 rounded-2xl rounded-tl-sm p-4">
                    <p className="text-white">Haha, yes! Want to trade after the Notion session?</p>
                  </div>
                </div>
              </div>
              
              {/* Outgoing message */}
              <div className="flex justify-end">
                <div className="flex items-start space-x-3 max-w-md">
                  <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4">
                    <p className="text-white">100%! I've been stuck on barre chords forever 😅 Let's book both?</p>
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
              
              {/* Another Session Request */}
              <div className="flex justify-center">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 max-w-sm">
                  <p className="text-gray-300 text-sm mb-3">You sent William a Session request:</p>
                  <p className="text-white font-medium">18 June 19:00</p>
                  <div className="flex space-x-2 mt-3">
                    <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white text-sm transition-colors">Cancel</button>
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
    </div>
  );
}