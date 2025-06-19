'use client';

import { useState, useEffect } from 'react';

export default function WritingsSlider({interval = 6000 }) {
  const [current, setCurrent] = useState(0);

  const slides = [
  {
    src: '/assets/writings/interspecies-music.jpg',
    alt: 'Interspecies Music',
    caption: 'Essay originally printed in the CoEvolution Quarterly, 1978.',
  },
  {
    src: '/assets/writings/human-dolphin.jpg',
    alt: 'Human/Dolphin Foundation Press Release',
    caption: 'Excerpt from a Human/Dolphin Foundation press release, 1983.',
  },
  {
    src: '/assets/writings/newsletter.jpg',
    alt: 'IC Newsletter #1',
    caption: 'Interspecies Communication Newsletter #1, 1980.',
  },
  {
      src: '/assets/writings/newspaper.jpg',
      alt: 'LA Times',
      caption: 'Profile in the LA Times, 1979.',
    },
  {
      src: '/assets/writings/kayak-electronics.jpg',
      alt: 'LA Times',
      caption: 'Documentation for custom recording equipment for kayaks, 1982.',
    },
    {
        src: '/assets/writings/pro-reply.jpg',
        alt: 'Guitar Player magazine',
        caption: 'Profile of Interspecies founder Jim Nollman in Guitar Player magazine, 1981.',
    },
];

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className="writings-slider">
      {/* image stack */}
      <div className="hero-image-2">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.alt}
            className={idx === current ? 'visible' : ''}
          />
        ))}
      </div>

      {/* caption below */}
      <div className="hero-caption-2">
        <p>{slides[current].caption}</p>
      </div>
    </section>
  );
}