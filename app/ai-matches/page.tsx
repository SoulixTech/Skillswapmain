import Link from 'next/link'
import { ArrowLeft, Sparkles, User, Star, Clock, MapPin, MessageCircle } from 'lucide-react'

export default function AIMatchesPage() {
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
  ]

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
              <span>Back to Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
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
            <div key={match.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
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
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors border border-white/30">
                    <MessageCircle className="w-4 h-4" />
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
      </main>
    </div>
  )
}