'use client';

import { useState, useEffect } from 'react';
import NewsletterDropdown from '../components/NewsletterDropdown.jsx';

export default function Home() {
  
  return (
    <div className="container">
      <div className="page">
        <section className="hero-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
        <section className='section-block'>
        <div className="section-header">
          <h2>Newsletter</h2>
        </div>
          <p className="section-description">
            The Interspecies Communication newsletter was published quarterly for over 25 years. Many articles were later expanded and published as books, including <a href="https://www.betterworldbooks.com/product/detail/the-man-who-talks-to-whales-the-art-of-interspecies-communication-9780971078628" target="_blank">The Man Who Talked to Whales</a>, <a href="https://www.betterworldbooks.com/product/detail/spiritual-ecology-a-guide-for-reconnecting-with-nature-9780553348231" target="_blank">Spiritual Ecology</a>, <a href="https://www.betterworldbooks.com/product/detail/why-we-garden-cultivating-a-sense-of-place-9781591810254" target="_blank">Why We Garden</a>, and <a href="https://www.betterworldbooks.com/product/detail/the-beluga-cafe-my-strange-adventure-with-art-music-and-whales-in-the-far-north-9781578050871" target="_blank">The Beluga Cafe</a>, among others. Other articles about the development of a true interspecies music have appeared in numerous published anthologies and publications internationally. 
          </p>
          <NewsletterDropdown />
        </section>
        <section className='section-block'>
        <div className="section-header">
          <h2>Published Works</h2>
        </div>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </section>
        <section className='section-block-last'>
        <div className="section-header">
          <h2>Library</h2>
        </div>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>
    </div>
  );
}