'use client';

import { useState, useEffect } from 'react';
import HeroSlider from './components/HeroSlider.jsx';
import WritingsSlider from './components/WritingsSlider.jsx';
import RecordingsSlider from './components/RecordingsSlider.jsx';
import Newsletter from './components/Newsletter.jsx';
import MenuBar from './components/MenuBar.jsx';
import Footer from './components/Footer.jsx';



export default function Home() {


  return (
    <div className="container">
      {/* MENU BAR */}
      <MenuBar />
      {/* POEM TICKER */}
      <section className="ticker">
        <div className="ticker__inner">
          <span className="ticker__item">A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean</span>
        </div>
      </section>
      {/* HERO TEXT  */}
      <section className="hero-text">
        <p>Interspecies Communication was a non-profit research and educational organization focused on exploring the boundaries of communication between species and the role of organized sound in the natural world.</p>
      </section>
      {/* HERO IMAGE CAROUSEL  */}
      <HeroSlider interval={6000} />
      {/* WRITINGS  */}
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
      <WritingsSlider />
      </section>
      {/* RECORDINGS  */}
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
        <RecordingsSlider />
      </section>
      {/* SUPPORT / NEWSLETTER  */}
      <section className="section-block">
        <div className="section-header">
          <h2>Support</h2>
          <a href="/recordings">View more →</a>
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
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}