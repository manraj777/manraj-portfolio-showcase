
import React, { useState } from 'react';
import MacWindow from './MacWindow';
import SafariApp from './apps/SafariApp';
import CalculatorApp from './apps/CalculatorApp';
import FinderApp from './apps/FinderApp';
import CalendarApp from './apps/CalendarApp';
import MessagesApp from './apps/MessagesApp';
import MusicApp from './apps/MusicApp';
import CameraApp from './apps/CameraApp';
import SettingsApp from './apps/SettingsApp';

interface OpenApp {
  id: string;
  title: string;
  component: React.ReactNode;
  isMinimized: boolean;
}

interface AppManagerProps {
  openApps: string[];
  onCloseApp: (appId: string) => void;
}

const AppManager: React.FC<AppManagerProps> = ({ openApps, onCloseApp }) => {
  const [minimizedApps, setMinimizedApps] = useState<string[]>([]);

  const getAppComponent = (appId: string) => {
    switch (appId) {
      case 'safari':
        return <SafariApp onClose={() => onCloseApp('safari')} />;
      case 'calculator':
        return <CalculatorApp onClose={() => onCloseApp('calculator')} />;
      case 'finder':
        return <FinderApp onClose={() => onCloseApp('finder')} />;
      case 'calendar':
        return <CalendarApp onClose={() => onCloseApp('calendar')} />;
      case 'messages':
        return <MessagesApp onClose={() => onCloseApp('messages')} />;
      case 'music':
        return <MusicApp onClose={() => onCloseApp('music')} />;
      case 'camera':
        return <CameraApp onClose={() => onCloseApp('camera')} />;
      case 'settings':
        return <SettingsApp onClose={() => onCloseApp('settings')} />;
      default:
        return null;
    }
  };

  const getAppTitle = (appId: string) => {
    const titles: { [key: string]: string } = {
      safari: 'Safari',
      calculator: 'Calculator',
      finder: 'Finder',
      calendar: 'Calendar',
      messages: 'Messages',
      music: 'Music',
      camera: 'Camera',
      settings: 'System Preferences'
    };
    return titles[appId] || appId;
  };

  const getAppSize = (appId: string) => {
    switch (appId) {
      case 'calculator':
        return 'w-80 h-[600px]';
      case 'safari':
        return 'w-full h-full max-w-6xl max-h-[90vh]';
      case 'finder':
        return 'w-full h-full max-w-5xl max-h-[80vh]';
      case 'calendar':
        return 'w-full h-full max-w-4xl max-h-[80vh]';
      case 'messages':
        return 'w-full h-full max-w-5xl max-h-[80vh]';
      case 'music':
        return 'w-full h-full max-w-3xl max-h-[80vh]';
      case 'camera':
        return 'w-full h-full max-w-2xl max-h-[80vh]';
      case 'settings':
        return 'w-full h-full max-w-4xl max-h-[80vh]';
      default:
        return 'w-96 h-96';
    }
  };

  return (
    <>
      {openApps.map((appId) => (
        <div
          key={appId}
          className={`fixed inset-0 z-30 flex items-center justify-center p-4 ${
            minimizedApps.includes(appId) ? 'hidden' : ''
          }`}
        >
          <MacWindow
            title={getAppTitle(appId)}
            className={`${getAppSize(appId)} ${appId === 'calculator' ? 'bg-black' : ''}`}
          >
            {getAppComponent(appId)}
          </MacWindow>
        </div>
      ))}
    </>
  );
};

export default AppManager;
