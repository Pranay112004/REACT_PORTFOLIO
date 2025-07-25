import React, { useState, useEffect } from "react";

const BackgroundSound = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = React.useRef(new Audio("/audio/Inside_portfolio.mp3")); // Confirmed path

  useEffect(() => {
    const audio = audioRef.current; // Store ref value to avoid changes during cleanup
    audio.loop = true;
    audio.volume = 0.5; // Max volume for testing

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]); // Include isPlaying in dependency array

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleSound}
        className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
        aria-label={isPlaying ? "Mute sound" : "Unmute sound"}
      >
        {isPlaying ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15z"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15zm10.95-6.464l4.243 4.243m0 0l-4.243 4.243m4.243-4.243L16.536 8.464"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default BackgroundSound;
