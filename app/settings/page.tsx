'use client'

import Link from 'next/link'
import { 
  ArrowLeft, 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Database, 
  Lock, 
  HelpCircle,
  Settings as SettingsIcon,
  Mail,
  Smartphone,
  Eye,
  EyeOff,
  Trash2,
  Download,
  LogOut
} from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [profileVisibility, setProfileVisibility] = useState('public')
  const [language, setLanguage] = useState('english')
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)

  const settingSections = [
    {
      title: 'Account Settings',
      icon: User,
      settings: [
        {
          name: 'Profile Information',
          description: 'Update your personal information and profile details',
          action: 'Edit',
          type: 'button'
        },
        {
          name: 'Email Address', 
          description: 'pranavnavghare46@gmail.com',
          action: 'Change',
          type: 'button'
        },
        {
          name: 'Password',
          description: 'Last changed 30 days ago',
          action: 'Change',
          type: 'button'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      settings: [
        {
          name: 'Profile Visibility',
          description: 'Control who can see your profile',
          value: profileVisibility,
          options: [
            { value: 'public', label: 'Public' },
            { value: 'friends', label: 'Friends Only' },
            { value: 'private', label: 'Private' }
          ],
          type: 'select',
          onChange: setProfileVisibility
        },
        {
          name: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          value: twoFactorAuth,
          type: 'toggle',
          onChange: setTwoFactorAuth
        },
        {
          name: 'Login Activity',
          description: 'See where you\'re logged in and manage sessions',
          action: 'View',
          type: 'button'
        }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        {
          name: 'Email Notifications',
          description: 'Receive notifications via email',
          value: emailNotifications,
          type: 'toggle',
          onChange: setEmailNotifications
        },
        {
          name: 'Push Notifications',
          description: 'Receive push notifications on your devices',
          value: pushNotifications,
          type: 'toggle',
          onChange: setPushNotifications
        },
        {
          name: 'Notification Preferences',
          description: 'Customize what notifications you receive',
          action: 'Customize',
          type: 'button'
        }
      ]
    },
    {
      title: 'Appearance',
      icon: Sun,
      settings: [
        {
          name: 'Dark Mode',
          description: 'Toggle between light and dark themes',
          value: darkMode,
          type: 'toggle',
          onChange: setDarkMode
        },
        {
          name: 'Language',
          description: 'Choose your preferred language',
          value: language,
          options: [
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Español' },
            { value: 'french', label: 'Français' },
            { value: 'german', label: 'Deutsch' }
          ],
          type: 'select',
          onChange: setLanguage
        }
      ]
    },
    {
      title: 'Data & Storage',
      icon: Database,
      settings: [
        {
          name: 'Download Your Data',
          description: 'Get a copy of your data in SkillSwap',
          action: 'Download',
          type: 'button',
          icon: Download
        },
        {
          name: 'Clear Cache',
          description: 'Clear locally stored data to free up space',
          action: 'Clear',
          type: 'button'
        },
        {
          name: 'Delete Account',
          description: 'Permanently delete your account and all data',
          action: 'Delete',
          type: 'button',
          danger: true,
          icon: Trash2
        }
      ]
    }
  ]

  const renderSetting = (setting: any) => {
    switch (setting.type) {
      case 'toggle':
        return (
          <div className="flex items-center">
            <button
              onClick={() => setting.onChange(!setting.value)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                setting.value ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  setting.value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        )
      
      case 'select':
        return (
          <select
            value={setting.value}
            onChange={(e) => setting.onChange(e.target.value)}
            className="bg-white/10 border border-white/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {setting.options.map((option: any) => (
              <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                {option.label}
              </option>
            ))}
          </select>
        )
      
      case 'button':
        return (
          <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
            setting.danger 
              ? 'bg-red-500/20 text-red-300 hover:bg-red-500/30 border border-red-400/30' 
              : 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-400/30'
          }`}>
            {setting.icon && <setting.icon className="w-4 h-4" />}
            <span>{setting.action}</span>
          </button>
        )
      
      default:
        return null
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
      <main className="relative z-50 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Settings</h1>
          </div>
          <p className="text-white/80 text-lg">
            Manage your account preferences and privacy settings.
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {settingSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              </div>

              <div className="space-y-4">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="flex-1">
                      <h3 className="text-white font-medium mb-1">{setting.name}</h3>
                      <p className="text-white/70 text-sm">{setting.description}</p>
                    </div>
                    <div className="ml-4">
                      {renderSetting(setting)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mt-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Support</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left">
              <h3 className="text-white font-medium mb-2">Help Center</h3>
              <p className="text-white/70 text-sm">Find answers to common questions</p>
            </button>
            
            <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left">
              <h3 className="text-white font-medium mb-2">Contact Support</h3>
              <p className="text-white/70 text-sm">Get help from our support team</p>
            </button>
            
            <button className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-left">
              <h3 className="text-white font-medium mb-2">Report a Bug</h3>
              <p className="text-white/70 text-sm">Help us improve the platform</p>
            </button>
          </div>
        </div>

        {/* Sign Out */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mt-8">
          <button className="w-full flex items-center justify-center space-x-3 p-4 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors border border-red-400/30">
            <LogOut className="w-5 h-5 text-red-300" />
            <span className="text-red-300 font-medium">Sign Out</span>
          </button>
        </div>
      </main>
    </div>
  )
}
