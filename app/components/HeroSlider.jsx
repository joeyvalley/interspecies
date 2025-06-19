'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider({ interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: '/assets/hero/jim-orca-waterphone.jpg',      alt: 'Jim Nollman with Orca', caption: 'Interspecies founder Jim Nollman playing metallophone with an orca pod, 1980.' },
    { src: '/assets/hero/audio-dolphin-deterrent.jpg',  alt: 'Dolphin Audio Deterrent System', caption: 'Custom "dolphin deterrent" electronics developed for Iki Island project, 1991.' },
    { src: '/assets/hero/orca-kayak.jpg',               alt: 'Orca Kayak Interaction', caption: 'Interacting with orca in the Hiro Strait, 1992.' },
    { src: '/assets/hero/campsite.jpg',                 alt: 'Orca Project Campsite', caption: 'Campsite for Orca Project in Vancouver Island, Canada, 1988.' },
    { src: '/assets/hero/whale-drum.jpg',               alt: 'Whale Drum', caption: 'Custom-made "whale drum" and flotation device for interacting with whales, 1974.' },
    { src: '/assets/hero/jim-boat.jpg',                 alt: 'Jim on Boat', caption: 'Playing guitar with vocalizing humpback whales, 1994.' },
  ];

  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="hero-slider">
      <section className="hero-image">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.alt}
            className={idx === current ? 'visible' : ''}
          />
        ))}
      </section>

      {/* SINGLE caption container */}
      <div className="hero-caption">
        <p>{slides[current].caption}</p>
      </div>
    </div>
  );
}