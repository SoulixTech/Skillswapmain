import Link from 'next/link'
import { ArrowLeft, Users, MessageCircle, Heart, Share2, Clock, TrendingUp } from 'lucide-react'

export default function CommunityPage() {
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
  ]

  const trendingTopics = [
    { name: 'Web Development', posts: 156 },
    { name: 'Photography', posts: 89 },
    { name: 'Language Exchange', posts: 67 },
    { name: 'Music Lessons', posts: 45 },
    { name: 'Cooking', posts: 38 }
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Page Header */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  PN
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
                <div key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
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
                      <button className="flex items-center space-x-2 text-white/60 hover:text-green-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span>{post.shares}</span>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
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

            {/* Suggested Groups */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Suggested Groups</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    WD
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">Web Developers</div>
                    <div className="text-white/60 text-xs">234 members</div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Join</button>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                    PH
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">Photography</div>
                    <div className="text-white/60 text-xs">156 members</div>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}