'use client';
import { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const startOnFirstMove = () => {
      const audio = audioRef.current;
      if (!audio) return;

      // Unmute and play
      audio.muted = false;
      audio.play().catch(() => {
        /* playback may still be blocked if gesture not accepted */
      });

      // Remove listener after first trigger
      window.removeEventListener('mousemove', startOnFirstMove);
    };

    // You can swap 'mousedown' for broader compatibility if mousemove fails
    window.addEventListener('mousemove', startOnFirstMove, { once: true });

    return () => {
      window.removeEventListener('mousemove', startOnFirstMove);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      controls
      loop
      preload="auto"
      className="audio-player"
    >
      <source src="/assets/audio/test.mp3" type="audio/mpeg" />
      Your browser doesn’t support HTML5 audio.
    </audio>
  );
}