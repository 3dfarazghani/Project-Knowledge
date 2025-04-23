import React, { useState, useRef } from 'react';
import { Play, Pause, SkipBack, Volume2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Button from '../../components/Button';

interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: number;
  audioUrl: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

const meditations: Meditation[] = [
  {
    id: '1',
    title: 'Mindful Breathing',
    description: 'A gentle introduction to mindful breathing techniques',
    duration: 300, // 5 minutes in seconds
    audioUrl: 'https://example.com/mindful-breathing.mp3',
    category: 'Breathing',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Body Scan Relaxation',
    description: 'Progressive relaxation through body awareness',
    duration: 600, // 10 minutes
    audioUrl: 'https://example.com/body-scan.mp3',
    category: 'Relaxation',
    level: 'beginner'
  },
  {
    id: '3',
    title: 'Focused Attention',
    description: 'Develop concentration through mindful attention',
    duration: 900, // 15 minutes
    audioUrl: 'https://example.com/focused-attention.mp3',
    category: 'Focus',
    level: 'intermediate'
  }
];

const MindfulLearning: React.FC = () => {
  const [selectedMeditation, setSelectedMeditation] = useState<Meditation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { user } = useAuthStore();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">MindfulLearning</h1>
          <p className="text-xl text-gray-600">
            Discover peace and focus through guided meditation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {meditations.map((meditation) => (
            <div
              key={meditation.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {meditation.title}
                </h3>
                <p className="text-gray-600 mb-4">{meditation.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Duration: {formatTime(meditation.duration)}</span>
                  <span className="capitalize">Level: {meditation.level}</span>
                </div>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => setSelectedMeditation(meditation)}
                >
                  Start Session
                </Button>
              </div>
            </div>
          ))}
        </div>

        {selectedMeditation && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {selectedMeditation.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {formatTime(currentTime)} / {formatTime(selectedMeditation.duration)}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Volume2 className="h-5 w-5 text-gray-600 mr-2" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-24"
                    />
                  </div>

                  <button
                    onClick={handleReset}
                    className="p-2 text-gray-600 hover:text-gray-900"
                  >
                    <SkipBack className="h-6 w-6" />
                  </button>

                  <button
                    onClick={handlePlay}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>

              <audio
                ref={audioRef}
                src={selectedMeditation.audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindfulLearning;