import React, { useRef, useEffect, useState } from 'react';
import { Camera, Mic, MicOff, Video, VideoOff, Share2 } from 'lucide-react';

export function LiveStream() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (isStreaming) {
      startStream();
    } else {
      stopStream();
    }
  }, [isStreaming]);

  const startStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: isVideoEnabled,
        audio: !isMuted
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError('Unable to access camera or microphone. Please check your permissions.');
      setIsStreaming(false);
    }
  };

  const stopStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const toggleStream = () => {
    setIsStreaming(!isStreaming);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getAudioTracks().forEach(track => {
        track.enabled = isMuted;
      });
    }
  };

  const toggleVideo = () => {
    setIsVideoEnabled(!isVideoEnabled);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getVideoTracks().forEach(track => {
        track.enabled = !isVideoEnabled;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
          
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white p-4 text-center">
              {error}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={toggleStream}
                className={`p-3 rounded-full ${
                  isStreaming ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                }`}
              >
                <Camera size={24} className="text-white" />
              </button>

              <button
                onClick={toggleMute}
                className={`p-3 rounded-full ${
                  isMuted ? 'bg-red-500' : 'bg-gray-600'
                } hover:opacity-80`}
              >
                {isMuted ? (
                  <MicOff size={24} className="text-white" />
                ) : (
                  <Mic size={24} className="text-white" />
                )}
              </button>

              <button
                onClick={toggleVideo}
                className={`p-3 rounded-full ${
                  !isVideoEnabled ? 'bg-red-500' : 'bg-gray-600'
                } hover:opacity-80`}
              >
                {!isVideoEnabled ? (
                  <VideoOff size={24} className="text-white" />
                ) : (
                  <Video size={24} className="text-white" />
                )}
              </button>

              <button
                className="p-3 rounded-full bg-blue-500 hover:bg-blue-600"
                onClick={() => {/* Implement share functionality */}}
              >
                <Share2 size={24} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-gray-800 rounded-lg p-4">
          <h2 className="text-xl font-bold text-white mb-2">Stream Settings</h2>
          <div className="space-y-2 text-gray-300">
            <p>Status: {isStreaming ? 'Live' : 'Offline'}</p>
            <p>Audio: {isMuted ? 'Muted' : 'Unmuted'}</p>
            <p>Video: {isVideoEnabled ? 'Enabled' : 'Disabled'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}