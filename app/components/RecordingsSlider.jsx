'use client';

import { useState, useEffect } from 'react';

export default function RecordingsSlider({interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  const slides = [
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992202/1_ady4qn.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992203/2_ht4p2z.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992203/3_fdmd48.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992203/4_trbghy.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992204/5_hdgdu2.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992205/6_osatu9.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992206/7_g4jlhe.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992201/8_nbchzp.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992206/9_ivebho.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992207/10_ddfqrq.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992199/11_gfanoy.jpg',
    alt: 'Interspecies Music master tapes',
  },
  {
    src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992208/12_rgqyu5.jpg',
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