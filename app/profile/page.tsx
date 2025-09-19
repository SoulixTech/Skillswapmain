import Link from 'next/link'
import { X, Mail, MapPin, Phone, Globe, Github, Linkedin, Twitter, BookOpen, Target } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen text-white">
      {/* Profile Modal/Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Edit Profile
              </button>
              <Link href="/" className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            {/* Profile Header */}
            <div className="flex items-start space-x-6 mb-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  PN
                </div>
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full border-3 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Pranav Navghare</h2>
                <div className="flex items-center space-x-2 text-gray-600 mb-3">
                  <Mail className="w-4 h-4" />
                  <span>pranavnavghare46@gmail.com</span>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">Beginner Level</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">85% Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information and Social Links */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>pranavnavghare46@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Github className="w-4 h-4" />
                    <span>github.com/pranavnavghare</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/pranavnavghare</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Globe className="w-4 h-4" />
                    <span>pranavnavghare.dev</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills and Goals */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Teaching Skills */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Teaching Skills (0)</h3>
                </div>
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No teaching skills added yet</p>
                  <button className="mt-3 text-blue-500 hover:text-blue-600 font-medium text-sm transition-colors">
                    Add Teaching Skills
                  </button>
                </div>
              </div>

              {/* Learning Goals */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Learning Goals (0)</h3>
                </div>
                <div className="text-center py-8">
                  <p className="text-gray-500 text-sm">No learning goals added yet</p>
                  <button className="mt-3 text-green-500 hover:text-green-600 font-medium text-sm transition-colors">
                    Add Learning Goals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}