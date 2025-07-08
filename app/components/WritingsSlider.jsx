'use client';

import { useState, useEffect } from 'react';

export default function WritingsSlider({interval = 6000 }) {
  const [current, setCurrent] = useState(0);

  const slides = [
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992310/interspecies-music_budpof.jpg',
    alt: 'Interspecies Music',
    caption: 'Essay originally printed in the CoEvolution Quarterly, 1978.',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992303/human-dolphin_lwfedu.jpg',
    alt: 'Human/Dolphin Foundation Press Release',
    caption: 'Excerpt from a Human/Dolphin Foundation press release, 1983.',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992309/newsletter_zgvj7h.jpg',
    alt: 'IC Newsletter #1',
    caption: 'Interspecies Communication Newsletter #1, 1980.',
  },
  {
      src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992311/newspaper_lcto8f.jpg',
      alt: 'LA Times',
      caption: 'Profile in the LA Times, 1979.',
    },
  {
      src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992305/kayak-electronics_c82wun.jpg',
      alt: 'LA Times',
      caption: 'Documentation for custom recording equipment for kayaks, 1982.',
    },
    {
        src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992303/pro-reply_vftklk.jpg',
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