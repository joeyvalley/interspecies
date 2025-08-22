'use client';

import { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar.jsx';
import NewsletterDropdown from '../components/NewsletterDropdown.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  
  return (
    <div className="container">
      {/* MENU BAR */}
      <MenuBar />
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
          <p className="section-description">The Interspecies Communication newsletter was published quarterly for over 25 years. Many articles were later edited and published as books, including The Man Who Talked to Whales, Spiritual Ecology, Why We Garden, and The Beluga Cafe, among others. Other articles about the development of a true interspecies music have appeared in numerous published anthologies and publications internationally. 
          </p>
          <NewsletterDropdown />
        </section>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}