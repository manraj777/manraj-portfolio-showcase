
import React, { useState } from 'react';
import { Folder, FileText, Image, Music, Video, ChevronRight, ArrowLeft } from 'lucide-react';

interface FinderAppProps {
  onClose: () => void;
}

const FinderApp: React.FC<FinderAppProps> = ({ onClose }) => {
  const [currentPath, setCurrentPath] = useState('/Users/manraj');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const folders = [
    { name: 'Desktop', type: 'folder', icon: <Folder size={16} /> },
    { name: 'Documents', type: 'folder', icon: <Folder size={16} /> },
    { name: 'Downloads', type: 'folder', icon: <Folder size={16} /> },
    { name: 'Pictures', type: 'folder', icon: <Folder size={16} /> },
    { name: 'Music', type: 'folder', icon: <Folder size={16} /> },
    { name: 'Movies', type: 'folder', icon: <Folder size={16} /> },
    { name: 'Portfolio.pdf', type: 'file', icon: <FileText size={16} /> },
    { name: 'Resume.docx', type: 'file', icon: <FileText size={16} /> },
    { name: 'Project Screenshots', type: 'folder', icon: <Image size={16} /> },
  ];

  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-48 bg-gray-100 border-r border-gray-200 p-4">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-gray-500 uppercase">Favorites</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-gray-200 rounded">
              <Folder size={16} className="text-blue-500" />
              Desktop
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-gray-200 rounded">
              <Folder size={16} className="text-blue-500" />
              Documents
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-gray-200 rounded">
              <Folder size={16} className="text-blue-500" />
              Downloads
            </div>
          </div>
          
          <div className="text-xs font-semibold text-gray-500 uppercase mt-4">Portfolio</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-gray-200 rounded">
              <Folder size={16} className="text-purple-500" />
              Projects
            </div>
            <div className="flex items-center gap-2 px-2 py-1 text-sm hover:bg-gray-200 rounded">
              <FileText size={16} className="text-red-500" />
              Resume
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-200 rounded">
              <ArrowLeft size={16} />
            </button>
            <div className="flex items-center text-sm text-gray-600">
              <span>manraj</span>
              <ChevronRight size={14} className="mx-1" />
              <span>Home</span>
            </div>
          </div>
        </div>

        {/* File Grid */}
        <div className="flex-1 p-4">
          <div className="grid grid-cols-4 gap-4">
            {folders.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
                  selectedItem === item.name ? 'bg-blue-100 border-2 border-blue-500' : ''
                }`}
                onClick={() => setSelectedItem(item.name)}
                onDoubleClick={() => {
                  if (item.type === 'folder') {
                    setCurrentPath(currentPath + '/' + item.name);
                  }
                }}
              >
                <div className={`p-3 rounded-lg mb-2 ${
                  item.type === 'folder' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {item.icon}
                </div>
                <span className="text-sm text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinderApp;
