
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

interface MusicAppProps {
  onClose: () => void;
}

const MusicApp: React.FC<MusicAppProps> = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const playlist = [
    { title: 'Coding Flow', artist: 'Lo-Fi Beats', album: 'Focus Music', duration: '3:24' },
    { title: 'Digital Dreams', artist: 'Synthwave Collective', album: 'Neon Nights', duration: '4:12' },
    { title: 'Algorithm Dance', artist: 'Tech House', album: 'Binary Beats', duration: '3:56' },
    { title: 'Neural Network', artist: 'AI Sounds', album: 'Machine Learning', duration: '4:33' },
    { title: 'Debug Mode', artist: 'Electronic Dev', album: 'System Sounds', duration: '3:18' },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 to-pink-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Music</h1>
        <p className="text-purple-200">Your coding soundtrack</p>
      </div>

      {/* Now Playing */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center shadow-2xl">
          <div className="text-6xl">🎵</div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">{playlist[currentTrack].title}</h2>
          <p className="text-purple-200">{playlist[currentTrack].artist}</p>
          <p className="text-sm text-purple-300">{playlist[currentTrack].album}</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-6">
          <div className="bg-purple-800 rounded-full h-1 mb-2">
            <div className="bg-white rounded-full h-1 w-1/3"></div>
          </div>
          <div className="flex justify-between text-sm text-purple-200">
            <span>1:24</span>
            <span>{playlist[currentTrack].duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Shuffle size={20} />
          </button>
          <button 
            className="p-3 hover:bg-white/10 rounded-full"
            onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}
          >
            <SkipBack size={24} />
          </button>
          <button
            className="bg-white text-purple-900 p-4 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </button>
          <button 
            className="p-3 hover:bg-white/10 rounded-full"
            onClick={() => setCurrentTrack(Math.min(playlist.length - 1, currentTrack + 1))}
          >
            <SkipForward size={24} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full">
            <Repeat size={20} />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <Volume2 size={16} />
          <div className="flex-1 bg-purple-800 rounded-full h-1">
            <div className="bg-white rounded-full h-1 w-2/3"></div>
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="bg-black/20 backdrop-blur-sm p-4 max-h-64 overflow-y-auto">
        <h3 className="font-semibold mb-3">Up Next</h3>
        <div className="space-y-2">
          {playlist.map((track, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-white/10 ${
                index === currentTrack ? 'bg-white/20' : ''
              }`}
              onClick={() => setCurrentTrack(index)}
            >
              <div>
                <div className="font-medium">{track.title}</div>
                <div className="text-sm text-purple-200">{track.artist}</div>
              </div>
              <div className="text-sm text-purple-300">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicApp;
