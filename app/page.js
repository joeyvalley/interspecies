'use client';

import { useState, useEffect } from 'react';
import HeroSlider from './components/HeroSlider.jsx';
import WritingsSlider from './components/WritingsSlider.jsx';
import Newsletter from './components/Newsletter.jsx';



export default function Home() {
  const tapes = ['/assets/tapes/1.jpg', '/assets/tapes/2.jpg', '/assets/tapes/3.jpg', '/assets/tapes/4.jpg', '/assets/tapes/5.jpg', '/assets/tapes/6.jpg', '/assets/tapes/7.jpg', '/assets/tapes/8.jpg', '/assets/tapes/9.jpg', '/assets/tapes/10.jpg','/assets/tapes/11.jpg', '/assets/tapes/12.jpg'];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % tapes.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [tapes.length]);

  return (
    <div className="container">
      <section className="menu-bar">
        <nav className="nav">
          <ul className="nav-links">
            <li className="logo"><a href="/"><img src="/assets/logo.svg" alt="Interspecies" className="logo-image" /></a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/writings">Writings</a></li>
            <li><a href="/recordings">Recordings</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </section>
      <section className="ticker">
        <div className="ticker__inner">
          <span className="ticker__item">A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean</span>
        </div>
      </section>

      <section className="hero-text">
        <p>Interspecies Communication was a non-profit research and educational organization focused on exploring the boundaries of communication between species and the role of organized sound in the natural world.</p>
      </section>

      <HeroSlider interval={6000} />

      <section className="section-block">
        <div className="section-header">
          <h2>Writings</h2>
          <a href="/writings">View more →</a>
        </div>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque, dolor ut molestie iaculis, orci neque maximus quam, et
          laoreet elit nisl eget orci. Praesent at leo vitae sem aliquet maximus
          sit amet a magna. Nunc efficitur lectus mi. Quisque et rutrum purus.
          Proin vestibulum est consequat feugiat bibendum. Vestibulum et mollis
          quam. Mauris pretium eros quis nisl ultricies, sit amet tincidunt
          mauris varius.
        </p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque, dolor ut molestie iaculis, orci neque maximus quam, et
          laoreet elit nisl eget orci. Praesent at leo vitae sem aliquet maximus
          sit amet a magna.
        </p>
       
      </section>
 <WritingsSlider />
      

      <section className="section-block">
        <div className="section-header">
          <h2>Recordings</h2>
          <a href="/recordings">View more →</a>
        </div>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque, dolor ut molestie iaculis, orci neque maximus quam, et
          laoreet elit nisl eget orci. Praesent at leo vitae sem aliquet maximus
          sit amet a magna. Nunc efficitur lectus mi. Quisque et rutrum purus.
          Proin vestibulum est consequat feugiat bibendum. Vestibulum et mollis
          quam. Mauris pretium eros quis nisl ultricies, sit amet tincidunt
          mauris varius.
        </p>
        <p className="section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque, dolor ut molestie iaculis, orci neque maximus quam, et
          laoreet elit nisl eget orci. Praesent at leo vitae sem aliquet maximus
          sit amet a magna.
        </p>

        <div className="slider">
          {tapes.map((src, idx) => (<img key={idx} src={src} alt={`Slide ${idx + 1}`} className={idx === current ? 'visible' : ''} /> ))}
        </div>
        <div className="hero-caption-3">
          <p>Selected master tapes from the Orca Project, 1978 - 1985.</p>
        </div>
      </section>
      
      <section className="section-block">
        <div className="section-header">
          <h2>Support</h2>
          <a href="/recordings">More information →</a>
        </div>
          <section className="hero-text-bottom">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          pellentesque, dolor ut molestie iaculis, orci neque maximus quam, et
          laoreet elit nisl eget orci. Praesent at leo vitae sem aliquet maximus
          sit amet a magna.
          </p>
          <p>The <span className="ic-text">interspecies.com</span> archive is proudly brought to you by <span className="nht-text">Nonhuman Teachers</span> with the generous support of <span className="rhizome-text">Rhizome</span>.</p>
          <Newsletter />
        </section>
      </section>
      <section className="footer">
        <h3>
          Interspecies Communication, &copy; 1979 - 2025
        </h3>
      </section>
    </div>
  );
}