
import React, { useState } from 'react';
import { Camera, Video, RotateCcw, Slash, Grid } from 'lucide-react';

interface CameraAppProps {
  onClose: () => void;
}

const CameraApp: React.FC<CameraAppProps> = ({ onClose }) => {
  const [mode, setMode] = useState<'photo' | 'video'>('photo');
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [gridEnabled, setGridEnabled] = useState(false);

  return (
    <div className="h-full bg-black text-white flex flex-col">
      {/* Camera Viewfinder */}
      <div className="flex-1 relative bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {/* Grid overlay */}
        {gridEnabled && (
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-white/20"></div>
            ))}
          </div>
        )}
        
        {/* Camera preview placeholder */}
        <div className="text-center">
          <Camera size={64} className="mx-auto mb-4 text-gray-400" />
          <p className="text-gray-400">Camera Preview</p>
          <p className="text-sm text-gray-500 mt-2">This is a simulated camera interface</p>
        </div>

        {/* Top controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button
            onClick={() => setFlashEnabled(!flashEnabled)}
            className={`p-2 rounded-full ${flashEnabled ? 'bg-yellow-500' : 'bg-black/50'}`}
          >
            <Slash size={20} />
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setGridEnabled(!gridEnabled)}
              className={`p-2 rounded-full ${gridEnabled ? 'bg-white/20' : 'bg-black/50'}`}
            >
              <Grid size={20} />
            </button>
            <button className="p-2 rounded-full bg-black/50">
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="bg-black p-6">
        <div className="flex items-center justify-center gap-8">
          {/* Mode selector */}
          <div className="flex bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setMode('photo')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                mode === 'photo' ? 'bg-white text-black' : 'text-white'
              }`}
            >
              Photo
            </button>
            <button
              onClick={() => setMode('video')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                mode === 'video' ? 'bg-white text-black' : 'text-white'
              }`}
            >
              Video
            </button>
          </div>

          {/* Capture button */}
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            {mode === 'photo' ? (
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            ) : (
              <Video size={24} className="text-black" />
            )}
          </button>

          {/* Gallery preview */}
          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-xs">📷</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraApp;
