import { useEffect, useRef } from "react";

const WelcomeSound = ({ isLoaded }) => {
  const audioRef = useRef(new Audio("/audio/Welcome_audio.mp3"));

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 1.0; // Max volume for testing
    if (!isLoaded) {
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isLoaded]);

  return null; // No UI, just audio control
};

export default WelcomeSound;
