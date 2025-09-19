import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Video, MapPin, MessageSquare } from 'lucide-react'

export default function SessionRequestPage() {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Request a Session</h1>
          </div>
          <p className="text-white/80 text-lg">
            Schedule a skill exchange session with another member of the community.
          </p>
        </div>

        {/* Request Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-8">
          <form className="space-y-6">
            {/* Session Type */}
            <div>
              <label className="block text-white font-semibold mb-3">Session Type</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                  <input type="radio" name="sessionType" value="teaching" className="text-blue-500" />
                  <div>
                    <div className="text-white font-medium">I want to teach</div>
                    <div className="text-white/70 text-sm">Share your skills with others</div>
                  </div>
                </label>
                <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                  <input type="radio" name="sessionType" value="learning" className="text-blue-500" />
                  <div>
                    <div className="text-white font-medium">I want to learn</div>
                    <div className="text-white/70 text-sm">Learn from community experts</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Skill Selection */}
            <div>
              <label className="block text-white font-semibold mb-3">Skill/Topic</label>
              <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Select a skill or topic</option>
                <option value="react">React Development</option>
                <option value="python">Python Programming</option>
                <option value="photography">Photography</option>
                <option value="guitar">Guitar Playing</option>
                <option value="spanish">Spanish Language</option>
                <option value="cooking">Cooking</option>
              </select>
            </div>

            {/* Partner Selection */}
            <div>
              <label className="block text-white font-semibold mb-3">Preferred Partner (Optional)</label>
              <div className="flex items-center space-x-3 bg-white/10 border border-white/30 rounded-lg px-4 py-3">
                <User className="w-5 h-5 text-white/60" />
                <input 
                  type="text" 
                  placeholder="Search for a specific member..."
                  className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none"
                />
              </div>
            </div>

            {/* Session Format */}
            <div>
              <label className="block text-white font-semibold mb-3">Session Format</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                  <input type="radio" name="format" value="video" className="text-blue-500" />
                  <Video className="w-5 h-5 text-white/80" />
                  <span className="text-white">Video Call</span>
                </label>
                <label className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg border border-white/20 cursor-pointer hover:bg-white/20 transition-colors">
                  <input type="radio" name="format" value="inPerson" className="text-blue-500" />
                  <MapPin className="w-5 h-5 text-white/80" />
                  <span className="text-white">In Person</span>
                </label>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-3">Preferred Date</label>
                <input 
                  type="date" 
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-3">Preferred Time</label>
                <input 
                  type="time" 
                  className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-white font-semibold mb-3">Session Duration</label>
              <select className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
              </select>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-white font-semibold mb-3">Additional Notes</label>
              <textarea 
                rows={4}
                placeholder="Any specific topics you'd like to cover, your experience level, or other details..."
                className="w-full bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <Link 
                href="/"
                className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/30"
              >
                Cancel
              </Link>
              <button 
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-lg"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}