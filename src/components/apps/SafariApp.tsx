
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Share, Plus, X } from 'lucide-react';

interface SafariAppProps {
  onClose: () => void;
}

const SafariApp: React.FC<SafariAppProps> = ({ onClose }) => {
  const [currentUrl, setCurrentUrl] = useState('https://manrajgupta.dev');
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Manraj Gupta - Portfolio', url: 'https://manrajgupta.dev', active: true },
    { id: 2, title: 'GitHub', url: 'https://github.com/manraj777', active: false }
  ]);

  const handleNewTab = () => {
    const newTab = {
      id: Date.now(),
      title: 'New Tab',
      url: 'about:blank',
      active: true
    };
    setTabs(prev => prev.map(tab => ({ ...tab, active: false })).concat(newTab));
  };

  const handleCloseTab = (tabId: number) => {
    if (tabs.length === 1) {
      onClose();
      return;
    }
    setTabs(prev => prev.filter(tab => tab.id !== tabId));
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Tab Bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-2 py-1">
        <div className="flex items-center gap-1">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex items-center gap-2 px-3 py-1 rounded-t-lg text-sm max-w-[200px] ${
                tab.active ? 'bg-white border-t border-l border-r border-gray-200' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <span className="truncate">{tab.title}</span>
              <button
                onClick={() => handleCloseTab(tab.id)}
                className="hover:bg-gray-200 rounded p-1"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          <button
            onClick={handleNewTab}
            className="p-2 hover:bg-gray-200 rounded"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-200 rounded disabled:opacity-50" disabled>
              <ArrowLeft size={16} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded disabled:opacity-50" disabled>
              <ArrowRight size={16} />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <RotateCcw size={16} />
            </button>
          </div>
          
          <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1">
            <span className="text-sm text-gray-600">{currentUrl}</span>
          </div>
          
          <button className="p-2 hover:bg-gray-200 rounded">
            <Share size={16} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-white p-8 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Safari</h1>
            <p className="text-gray-600">You're browsing Manraj Gupta's Portfolio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Portfolio Sections</h3>
              <p className="text-sm text-gray-600">Explore different sections of the portfolio</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
              <p className="text-sm text-gray-600">View detailed project information</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 cursor-pointer">
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-sm text-gray-600">Get in touch for opportunities</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">This is a simulated Safari browser within the portfolio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariApp;
