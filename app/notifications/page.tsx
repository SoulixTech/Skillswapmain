import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: 'skill_request',
      title: 'New skill match found!',
      message: 'Sarah Chen wants to learn React and can teach Photography',
      time: '2 minutes ago',
      unread: true,
      dotColor: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'session_reminder',
      title: 'Session scheduled',
      message: 'Your Python lesson with Alex Rivera is confirmed for tomorrow at 2 PM',
      time: '1 hour ago',
      unread: true,
      dotColor: 'bg-green-500'
    },
    {
      id: 3,
      type: 'message',
      title: 'New message received',
      message: 'Maria Garcia: "Thanks for the great guitar lesson!"',
      time: '3 hours ago',
      unread: false,
      dotColor: 'bg-orange-500'
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
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notifications Container */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h1 className="text-xl font-semibold text-gray-900">Notifications</h1>
            <button className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
              Mark all read
            </button>
          </div>

          {/* Notifications List */}
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="p-6 hover:bg-gray-50/50 transition-colors cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-3 h-3 rounded-full ${notification.dotColor} mt-2 flex-shrink-0`}></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-400">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 text-center border-t border-gray-100">
            <button className="text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
              View All Notifications
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}