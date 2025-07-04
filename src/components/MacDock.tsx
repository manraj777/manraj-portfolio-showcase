import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  FileText,
  Award,
  BookOpen,
  Users,
  Calculator,
  Globe,
  Folder,
  Camera,
  Music,
  Settings,
  MessageCircle,
  Calendar
} from 'lucide-react';

interface DockItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
  isApp?: boolean;
}

interface MacDockProps {
  onOpenApp: (appId: string) => void;
}

const MacDock: React.FC<MacDockProps> = ({ onOpenApp }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const dockItems: DockItem[] = [
    {
      id: 'finder',
      label: 'Finder',
      icon: <Folder size={24} />,
      onClick: () => onOpenApp('finder'),
      color: 'bg-blue-500',
      isApp: true
    },
    {
      id: 'safari',
      label: 'Safari',
      icon: <Globe size={24} />,
      onClick: () => onOpenApp('safari'),
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
      isApp: true
    },
    {
      id: 'calculator',
      label: 'Calculator',
      icon: <Calculator size={24} />,
      onClick: () => onOpenApp('calculator'),
      color: 'bg-gray-800',
      isApp: true
    },
    {
      id: 'calendar',
      label: 'Calendar',
      icon: <Calendar size={24} />,
      onClick: () => onOpenApp('calendar'),
      color: 'bg-white text-black border border-gray-300',
      isApp: true
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageCircle size={24} />,
      onClick: () => onOpenApp('messages'),
      color: 'bg-green-500',
      isApp: true
    },
    {
      id: 'music',
      label: 'Music',
      icon: <Music size={24} />,
      onClick: () => onOpenApp('music'),
      color: 'bg-gradient-to-br from-pink-500 to-red-500',
      isApp: true
    },
    {
      id: 'camera',
      label: 'Camera',
      icon: <Camera size={24} />,
      onClick: () => onOpenApp('camera'),
      color: 'bg-gray-600',
      isApp: true
    },
    {
      id: 'settings',
      label: 'System Preferences',
      icon: <Settings size={24} />,
      onClick: () => onOpenApp('settings'),
      color: 'bg-gray-500',
      isApp: true
    },
    // Portfolio sections
    {
      id: 'about',
      label: 'About',
      icon: <User size={24} />,
      onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-blue-500'
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: <Code size={24} />,
      onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-green-500'
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: <Briefcase size={24} />,
      onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-purple-500'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Mail size={24} />,
      onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: 'bg-red-500'
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: <Github size={24} />,
      onClick: () => window.open('https://github.com/manraj777', '_blank'),
      color: 'bg-gray-800'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: <Linkedin size={24} />,
      onClick: () => window.open('https://linkedin.com/in/manraj-gupta', '_blank'),
      color: 'bg-blue-600'
    }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl">
        <div className="flex items-end gap-1">
          {dockItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Tooltip */}
              <div className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-opacity duration-200 ${
                hoveredItem === item.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}>
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
              </div>

              {/* Dock Icon */}
              <button
                onClick={item.onClick}
                className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-125 hover:-translate-y-2 active:scale-110 shadow-lg hover:shadow-2xl relative overflow-hidden`}
                style={{
                  transform: hoveredItem === item.id ? 'scale(1.2) translateY(-8px)' : 'scale(1)'
                }}
              >
                {item.icon}
                {/* Realistic app shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
              </button>
              
              {/* Active indicator dot */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacDock;
