'use client';

import { useState, useEffect } from 'react';

export default function RecordingsSlider({interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  const slides = [
  {
    src: '/assets/tapes/1.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/2.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/3.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/4.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/5.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/6.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/7.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/8.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/9.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/10.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/11.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: '/assets/tapes/12.jpg',
    alt: 'Interspecies Music master tapes',
  }
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
      <div className="hero-caption-3">
          <p>Selected master tapes, 1978 - 1985.</p>
        </div> 
    </section>
  );
}