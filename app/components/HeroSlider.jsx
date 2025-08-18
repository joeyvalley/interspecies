'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider({ interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992063/jim-orca-waterphone_xpehkq.jpg',      alt: 'Jim Nollman with Orca', caption: 'Artist Jim Nollman playing the waterphone with an orca pod, 1978.' },
    { src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992063/audio-dolphin-deterrent_blo8yq.jpg',  alt: 'Dolphin Audio Deterrent System', caption: 'Custom "dolphin deterrent" electronics system developed with Greenpeace on Iki Island, Japan, 1980.' },
    { src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992062/orca-kayak_s04xzm.jpg',               alt: 'Orca Kayak Interaction', caption: 'Katy Nollman kayaking among the orcas in Johnstone Strait, Canada, 1986.' },
    { src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992131/campsite_gsmcef.jpg',                 alt: 'Mackenzie River Delta Campsite', caption: 'Campsite on the Mackenzie River Delta in search of beluga whales.' },
    { src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992061/whale-drum_me74xd.jpg',               alt: 'Whale Drum', caption: 'One-of-a-kind "whale drum" used in communicating with spotted dolphins, 1981.' },
    { src: 'https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992066/jim-boat_erxyp6.jpg',                 alt: 'Jim on Boat', caption: 'Attracting humpback whales with improvised guitar music transmitted underwater, Frederick Sound, southeast Alaska.' },
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
      {/* <div className="hero-caption">
        <p>{slides[current].caption}</p>
      </div> */}
    </div>
  );
}