import React from 'react';
import { 
  Wifi, 
  Bluetooth, 
  Volume2, 
  Battery, 
  Monitor, 
  Shield, 
  Users, 
  HardDrive,
  ChevronRight 
} from 'lucide-react';

interface SettingsAppProps {
  onClose: () => void;
}

const SettingsApp: React.FC<SettingsAppProps> = ({ onClose }) => {
  const settingsGroups = [
    {
      title: 'Network & Internet',
      items: [
        { name: 'Wi-Fi', icon: <Wifi size={20} />, status: 'Connected' },
        { name: 'Bluetooth', icon: <Bluetooth size={20} />, status: 'On' },
      ]
    },
    {
      title: 'System',
      items: [
        { name: 'Sound', icon: <Volume2 size={20} />, status: '70%' },
        { name: 'Display', icon: <Monitor size={20} />, status: 'Default' },
        { name: 'Battery', icon: <Battery size={20} />, status: '85%' },
        { name: 'Storage', icon: <HardDrive size={20} />, status: '256 GB available' },
      ]
    },
    {
      title: 'Personal',
      items: [
        { name: 'Users & Accounts', icon: <Users size={20} />, status: 'Manraj Gupta' },
        { name: 'Privacy & Security', icon: <Shield size={20} />, status: 'Secure' },
      ]
    }
  ];

  return (
    <div className="h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900">System Preferences</h1>
        <p className="text-gray-600 mt-1">Manage your system settings</p>
      </div>

      {/* Settings Grid */}
      <div className="p-6">
        <div className="space-y-6">
          {settingsGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-lg shadow-sm">
              <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">{group.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="px-4 py-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-500">{item.icon}</div>
                      <div>
                        <div className="font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.status}</div>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* System Info */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-gray-900 mb-3">About This Mac</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Model</span>
              <span className="text-gray-900">MacBook Pro 16-inch</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Processor</span>
              <span className="text-gray-900">Apple M2 Pro</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Memory</span>
              <span className="text-gray-900">16 GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">macOS</span>
              <span className="text-gray-900">Sonoma 14.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsApp;
