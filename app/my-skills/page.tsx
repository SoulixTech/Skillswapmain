'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Target, Plus, Star, TrendingUp, Award, Edit, Trash2, Users, Clock } from 'lucide-react'
import { useState } from 'react'

export default function MySkillsPage() {
  const [activeTab, setActiveTab] = useState('teaching')

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
  ]

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
  ]

  const skillCategories = [
    'Programming', 'Design', 'Language', 'Music', 'Business', 'Science', 'Art', 'Sports'
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-purple-500/20 text-purple-300 border-purple-400/30'
      case 'Advanced': return 'bg-blue-500/20 text-blue-300 border-blue-400/30'
      case 'Intermediate': return 'bg-green-500/20 text-green-300 border-green-400/30'
      case 'Beginner': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500/20 text-red-300 border-red-400/30'
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
      case 'Low': return 'bg-green-500/20 text-green-300 border-green-400/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30'
    }
  }

  return (
    <div className="min-h-screen text-white relative z-50" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #6b46c1 50%, #1e293b 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-sm shadow-sm border-b border-white/20">
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
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
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
        <div className="flex space-x-1 mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-1">
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
                        <Trash2 className="w-4 h-4 text-red-300" />
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
                            <Trash2 className="w-4 h-4 text-red-300" />
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
      </main>
    </div>
  )
}
