'use client'

import Link from 'next/link'
import { ArrowLeft, TrendingUp, Calendar, Target, Award, Clock, Users, BookOpen, Star, Activity, BarChart3, Trophy, Zap } from 'lucide-react'
import { useState } from 'react'

export default function MyProgressPage() {
  const [timeRange, setTimeRange] = useState('month')

  const progressStats = {
    totalSessions: 45,
    hoursLearned: 98,
    hoursTeaching: 73,
    skillsImproved: 8,
    studentsHelped: 23,
    achievementsEarned: 12,
    currentStreak: 15,
    longestStreak: 28
  }

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
  ]

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
  ]

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
  ]

  const weeklyActivity = [
    { day: 'Mon', learning: 2, teaching: 1 },
    { day: 'Tue', learning: 3, teaching: 2 },
    { day: 'Wed', learning: 1, teaching: 3 },
    { day: 'Thu', learning: 4, teaching: 1 },
    { day: 'Fri', learning: 2, teaching: 2 },
    { day: 'Sat', learning: 3, teaching: 0 },
    { day: 'Sun', learning: 2, teaching: 1 }
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Gold': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
      case 'Silver': return 'bg-gray-400/20 text-gray-300 border-gray-400/30'
      case 'Bronze': return 'bg-orange-500/20 text-orange-300 border-orange-400/30'
      default: return 'bg-blue-500/20 text-blue-300 border-blue-400/30'
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
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">My Progress</h1>
              </div>
              <p className="text-white/80 text-lg">
                Track your learning journey and teaching impact. See how you're growing every day.
              </p>
            </div>
            <div className="flex space-x-2">
              {['week', 'month', 'year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors capitalize ${
                    timeRange === range
                      ? 'bg-blue-500 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          {/* Learning Progress */}
          <div className="lg:col-span-2 space-y-6">
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

            {/* Teaching Impact */}
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Recent Achievements</span>
              </h2>
              
              <div className="space-y-4">
                {recentAchievements.map((achievement) => (
                  <div key={achievement.id} className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-white font-medium text-sm">{achievement.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs border ${getRarityColor(achievement.rarity)}`}>
                            {achievement.rarity}
                          </span>
                        </div>
                        <p className="text-white/70 text-xs mb-2">{achievement.description}</p>
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

            {/* Weekly Activity */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Activity className="w-5 h-5" />
                <span>Weekly Activity</span>
              </h2>
              
              <div className="space-y-3">
                {weeklyActivity.map((day, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white/80 text-sm w-10">{day.day}</span>
                    <div className="flex-1 mx-3">
                      <div className="flex space-x-1">
                        {/* Learning hours */}
                        <div 
                          className="bg-blue-500 rounded-sm h-4"
                          style={{ width: `${(day.learning / 4) * 100}%`, minWidth: day.learning > 0 ? '8px' : '0' }}
                        ></div>
                        {/* Teaching hours */}
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
      </main>
    </div>
  )
}
