'use client';

import { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar.jsx';
import Footer from '../components/Footer.jsx';
import SupportDropdown from '../components/SupportDropdown.jsx';

export default function Contact() {
  
  return (
    <div className="container">
      {/* MENU BAR */}
      <MenuBar />
      <div className="page">
        <section className='section-block-last'>
        <div className="section-header">
          <h2>Contact</h2>
        </div>
          <p className="section-description">
            Etiam molestie massa a augue tristique porttitor. Maecenas mollis congue mi, sit amet porttitor erat interdum a. Sed velit sem, bibendum eget auctor non, luctus sit amet metus. In suscipit dolor nunc, a euismod ante congue vitae. Curabitur non libero nec neque porta porttitor eu vel tortor. Quisque volutpat malesuada posuere. Donec tristique sit amet purus ut vestibulum. Vivamus enim ligula, sodales ut orci eget, lobortis vestibulum velit. Praesent ornare malesuada felis, eu placerat est. Sed posuere augue ut imperdiet lacinia. Quisque sed tellus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            </p>
        </section>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}