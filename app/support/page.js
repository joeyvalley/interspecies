'use client';

import { useState, useEffect } from 'react';
import SupportDropdown from '../components/SupportDropdown.jsx';

export default function Support() {
  
  return (
    <div className="container">
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
          <p className="section-description">
            The goal of Interspecies as a non-profit organization focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating and collaborating with animals, habitat, and the natural world.</p>
<p className="section-description">
While Interspecies is no longer active, this pioneering interactive approach to the arts is now abundant. Please consider supporting some of the individuals and organizations continuing this important work.</p>
          <SupportDropdown />
        </section>
      </div>
    </div>
  );
}