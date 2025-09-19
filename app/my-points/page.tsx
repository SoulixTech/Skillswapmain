'use client'

\import Link from 'next/link'
import { ArrowLeft, Award, TrendingUp, Gift, Star, Calendar, User, BookOpen } from 'lucide-react'
import { useEffect } from 'react'

export default function MyPointsPage() {
  // Ensure no background elements interfere
  useEffect(() => {
    document.body.style.overflow = 'auto'
    // Hide any fixed positioned elements that might be dropdowns/modals
    const fixedElements = document.querySelectorAll('[class*="fixed"], [class*="absolute"]')
    fixedElements.forEach(element => {
      const el = element as HTMLElement
      if (el.style.zIndex && parseInt(el.style.zIndex) > 10 && el !== document.querySelector('.my-points-page')) {
        el.style.display = 'none'
      }
    })
    
    return () => {
      // Cleanup on unmount
      fixedElements.forEach(element => {
        const el = element as HTMLElement
        if (el.style.display === 'none') {
          el.style.display = ''
        }
      })
    }
  }, [])
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
    },
    {
      id: 4,
      type: 'earned',
      points: 40,
      activity: 'Completed photography workshop',
      date: '2024-06-05',
      icon: BookOpen,
      color: 'text-green-400'
    },
    {
      id: 5,
      type: 'earned',
      points: 20,
      activity: 'Profile completion bonus',
      date: '2024-06-01',
      icon: Star,
      color: 'text-yellow-400'
    }
  ]

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
    },
    {
      id: 4,
      title: 'Custom Profile Badge',
      description: 'Unlock exclusive profile badges to showcase achievements',
      points: 50,
      available: true
    },
    {
      id: 5,
      title: 'Extended Session Time',
      description: 'Extend your session time limit by 30 minutes',
      points: 200,
      available: false
    }
  ]

  const currentPoints = 245
  const totalEarned = 890
  const totalSpent = 645

  return (
    <div className="my-points-page min-h-screen text-white relative z-50" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #6b46c1 50%, #1e293b 100%)',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay to block any background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-40" />
      
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
      <main className="relative z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">My Points</h1>
          </div>
          <p className="text-white/80 text-lg">
            Earn points by teaching and learning, then redeem them for exclusive rewards.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Points Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{currentPoints}</div>
                <div className="text-white/80 text-lg">Current Points</div>
              </div>
            </div>

            {/* Points Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Total Earned</h3>
                </div>
                <div className="text-2xl font-bold text-green-400">{totalEarned}</div>
                <div className="text-white/60 text-sm">All time earnings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Gift className="w-6 h-6 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Total Spent</h3>
                </div>
                <div className="text-2xl font-bold text-blue-400">{totalSpent}</div>
                <div className="text-white/60 text-sm">On rewards & benefits</div>
              </div>
            </div>

            {/* Points History */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {pointsHistory.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.type === 'earned' ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                        <IconComponent className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">{item.activity}</div>
                        <div className="text-white/60 text-sm flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className={`font-bold ${item.points > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {item.points > 0 ? '+' : ''}{item.points}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Rewards Sidebar */}
          <div className="space-y-6">
            {/* How to Earn Points */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">How to Earn Points</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Complete a learning session</span>
                  <span className="text-green-400 font-semibold">+50</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Teach a session</span>
                  <span className="text-green-400 font-semibold">+30</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Receive 5-star rating</span>
                  <span className="text-green-400 font-semibold">+20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Complete profile</span>
                  <span className="text-green-400 font-semibold">+20</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Daily login streak</span>
                  <span className="text-green-400 font-semibold">+10</span>
                </div>
              </div>
            </div>

            {/* Available Rewards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Available Rewards</h2>
              <div className="space-y-4">
                {rewards.map((reward) => (
                  <div key={reward.id} className={`p-4 rounded-lg border ${reward.available ? 'bg-white/5 border-white/20' : 'bg-gray-500/10 border-gray-500/20 opacity-60'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{reward.title}</h3>
                      <div className="text-yellow-400 font-bold text-sm">{reward.points}</div>
                    </div>
                    <p className="text-white/70 text-xs mb-3">{reward.description}</p>
                    <button 
                      className={`w-full py-2 px-3 rounded text-xs font-medium transition-colors ${
                        reward.available && currentPoints >= reward.points
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!reward.available || currentPoints < reward.points}
                    >
                      {reward.available 
                        ? currentPoints >= reward.points 
                          ? 'Redeem' 
                          : `Need ${reward.points - currentPoints} more points`
                        : 'Coming Soon'
                      }
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}