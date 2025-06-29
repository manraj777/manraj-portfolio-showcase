
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Wifi, Battery, Volume2 } from 'lucide-react';

const MacMenuBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10 h-6 flex items-center justify-between px-4 text-white text-xs font-medium">
      {/* Left side - Apple logo and app name */}
      <div className="flex items-center gap-4">
        <div className="text-sm">🍎</div>
        <span className="font-semibold">Manraj Gupta - Portfolio</span>
      </div>

      {/* Right side - System icons and time */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="hover:bg-white/10 p-1 rounded transition-colors"
        >
          {theme === 'light' ? <Moon size={12} /> : <Sun size={12} />}
        </button>
        
        <div className="flex items-center gap-1">
          <Wifi size={12} />
          <Volume2 size={12} />
          <Battery size={12} />
        </div>
        
        <div className="text-right">
          <div>{formatDate(currentTime)}</div>
          <div>{formatTime(currentTime)}</div>
        </div>
      </div>
    </div>
  );
};

export default MacMenuBar;
