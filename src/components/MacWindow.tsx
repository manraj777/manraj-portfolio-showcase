
import React, { useState } from 'react';
import { Minimize2, Maximize2, X } from 'lucide-react';

interface MacWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children, className = '' }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    // For demo purposes, just show an alert
    alert('Portfolio window would close in a real macOS environment');
  };

  return (
    <div className={`bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-2xl overflow-hidden ${className} ${
      isMaximized ? 'fixed inset-4 z-30' : ''
    } ${
      isMinimized ? 'transform scale-0 opacity-0 transition-all duration-300' : 'transition-all duration-300'
    }`}>
      {/* Window Title Bar */}
      <div className="bg-gray-200 dark:bg-gray-800 border-b border-border/50 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Traffic Light Buttons */}
          <button
            onClick={handleClose}
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900 transition-opacity" />
          </button>
          <button
            onClick={handleMinimize}
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center group"
          >
            <Minimize2 size={8} className="opacity-0 group-hover:opacity-100 text-yellow-900 transition-opacity" />
          </button>
          <button
            onClick={handleMaximize}
            className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center group"
          >
            <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-green-900 transition-opacity" />
          </button>
        </div>
        
        {/* Window Title */}
        <div className="text-sm font-medium text-center flex-1 mx-4">
          {title}
        </div>
        
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>

      {/* Window Content */}
      <div className="overflow-y-auto max-h-[calc(100vh-100px)]">
        {children}
      </div>
    </div>
  );
};

export default MacWindow;
