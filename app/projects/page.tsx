import Link from 'next/link'
import { ArrowLeft, FolderOpen, Plus, Users, Calendar, Star, ExternalLink, Github } from 'lucide-react'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website Redesign',
      description: 'Collaborative project to redesign a local business website using React and modern UI/UX principles.',
      status: 'In Progress',
      progress: 65,
      members: [
        { name: 'Sarah Chen', avatar: 'SC', role: 'UI/UX Designer' },
        { name: 'Alex Rivera', avatar: 'AR', role: 'Frontend Developer' },
        { name: 'You', avatar: 'PN', role: 'Backend Developer' }
      ],
      skills: ['React', 'Node.js', 'UI/UX Design', 'MongoDB'],
      deadline: '2024-07-15',
      type: 'Collaborative Learning'
    },
    {
      id: 2,
      title: 'Spanish Learning App',
      description: 'Building a mobile app to help people learn Spanish through interactive exercises and games.',
      status: 'Planning',
      progress: 20,
      members: [
        { name: 'Maria Garcia', avatar: 'MG', role: 'Language Expert' },
        { name: 'You', avatar: 'PN', role: 'App Developer' }
      ],
      skills: ['React Native', 'Spanish', 'Game Design', 'Education'],
      deadline: '2024-08-30',
      type: 'Skill Exchange'
    },
    {
      id: 3,
      title: 'Photography Portfolio Website',
      description: 'Creating a stunning portfolio website to showcase photography work with advanced gallery features.',
      status: 'Completed',
      progress: 100,
      members: [
        { name: 'Sarah Chen', avatar: 'SC', role: 'Photographer' },
        { name: 'You', avatar: 'PN', role: 'Web Developer' }
      ],
      skills: ['Photography', 'Web Development', 'CSS Animations', 'Responsive Design'],
      deadline: '2024-06-01',
      type: 'Mentorship'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-blue-500/20 text-blue-300 border-blue-400/30'
      case 'Planning': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30'
      case 'Completed': return 'bg-green-500/20 text-green-300 border-green-400/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30'
    }
  }

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
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <FolderOpen className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">My Projects</h1>
              </div>
              <p className="text-white/80 text-lg">
                Collaborate on real-world projects while learning and teaching skills.
              </p>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Project</span>
            </button>
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="text-2xl font-bold text-white mb-2">3</div>
            <div className="text-white/80">Active Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="text-2xl font-bold text-white mb-2">1</div>
            <div className="text-white/80">Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="text-2xl font-bold text-white mb-2">5</div>
            <div className="text-white/80">Collaborators</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 p-6">
            <div className="text-2xl font-bold text-white mb-2">12</div>
            <div className="text-white/80">Skills Learned</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Project Type */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-white/60 text-sm">Type:</span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-400/30">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors border border-white/30">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors border border-white/30">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-sm">Progress</span>
                  <span className="text-white font-semibold text-sm">{project.progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Team Members */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Team ({project.members.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {project.members.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {member.avatar}
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">{member.name}</div>
                          <div className="text-white/60 text-xs">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Skills Involved</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs border border-green-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline</span>
                  </h4>
                  <div className="text-white/80">{new Date(project.deadline).toLocaleDateString()}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-white/20">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors border border-white/30">
                  View Details
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Open Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State for New Users */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-12">
            <FolderOpen className="w-16 h-16 text-white/60 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Ready to start a new project?</h3>
            <p className="text-white/80 mb-6">Collaborate with other learners on real-world projects while developing your skills.</p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg">
              Create Your First Project
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}