'use client';

import { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar.jsx';
import Footer from '../components/Footer.jsx';
import SupportDropdown from '../components/SupportDropdown.jsx';

export default function Support() {
  
  return (
    <div className="container">
      {/* MENU BAR */}
      <MenuBar />
      <div className="page">
        <section className="hero-text">
          <p>
            While Interspecies is no longer active as a non-profit, their pioneering interdisciplinary approach to ecology paved the way for an expanded network of artists, authors, musicians, scientists, environmentalists, and organizations, among others.
          </p>
        </section>
        <section className='section-block-last'>
        <div className="section-header">
          <h2>Support</h2>
        </div>
          <p className="section-description">Please consider supporting some of the individuals and organizations carrying on the legacy of Interspecies Communication! Below you will find a list of some of those whose work we greatly admire. Please <a className="email-link" href="mailto:beluga@interspecies.com">reach out</a> if you would like to be included!</p>
          <SupportDropdown />
        </section>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}