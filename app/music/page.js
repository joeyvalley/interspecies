'use client';

import { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar.jsx';
import Footer from '../components/Footer.jsx';

export default function Music() {
  
  return (
    <div className="container">
      {/* MENU BAR */}
      <MenuBar />
      <div className="page">
        <section className="hero-text">
          <p>
            Interspecies musical output includes techno, field recordings, collaborations with turkeys, wolves, and tropical birds, underwater music, old time mandolin, and songs.
          </p>
        </section>
        <section className='section-block'>
        <div className="section-header">
          <h2>Philosophy</h2>
        </div>
          <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
        <section className='section-block-last'>
        <div className="section-header">
          <h2>Discography</h2>
        </div>
          <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}