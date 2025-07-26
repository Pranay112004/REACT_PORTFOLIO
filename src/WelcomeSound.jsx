import { useEffect, useRef } from "react";

const WelcomeSound = ({ isLoaded }) => {
  const audioRef = useRef(new Audio("/audio/Welcome_audio.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.preload = "auto"; // Preload the audio
    audio.volume = 0.5; // Max volume for testing

    const playAudio = () => {
      if (!isLoaded) {
        audio.play().catch((error) => {
          console.error("Audio playback failed:", {
            message: error.message || error,
            code: error.code,
            name: error.name,
          });
        });
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    // Delay playback slightly to ensure audio is ready
    const timer = setTimeout(playAudio, 10);
    return () => {
      clearTimeout(timer);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isLoaded]);

  return null; // No UI, just audio control
};

export default WelcomeSound;
