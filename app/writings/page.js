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
        <div className="page-header">
          <h1>Writings</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className="page-header">
          <h1>Newsletter</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <NewsletterDropdown />
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}