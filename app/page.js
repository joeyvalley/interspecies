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
        <p>Interspecies was a nonprofit organization active from 1979 - 2014, founded by writer and composer Jim Nollman. Interspecies work focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating directly with animals and habitat. </p>
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
          The Interspecies Communication newsletter was published quarterly for over 25 years. Many articles were later edited and published as books, including <em>The Man Who Talked to Whales</em>, <em>Spiritual Ecology</em>, <em>Why We Garden</em>, and <em>The Beluga Cafe</em>, among others. Other articles about the development of a true interspecies music have appeared in numerous published anthologies and publications internationally.
        </p>
      <WritingsSlider />
      </section>
      {/* RECORDINGS  */}
      <section className="section-block">
        <div className="section-header">
          <h2>Music</h2>
          <a href="/music">View more →</a>
        </div>
        <p className="section-description">
          Interspecies musical output includes techno, field recordings with turkeys, wolves, and tropical birds, underwater music, old time mandolin, and songs. </p>
           <p className="section-description">
          Recordings have been issued with various labels around the world including Smithsonian Folkways Recordings (<em>Playing Music with Animals</em>), Other Minds (<em>Music for Swimming and Flying</em>), and Rural Situationism (<em>Oropendola</em>), among others.
        </p>
        <RecordingsSlider />
      </section>
      {/* SUPPORT / NEWSLETTER  */}
      <section className="section-block">
        <div className="section-header">
          <h2>Support</h2>
          <a href="/support">View more →</a>
        </div>
          <section className="hero-text-bottom">
          <p>
          The goal of Interspecies as a non-profit organization focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating and collaborating with animals, habitat, and the natural world. 
          </p>
          <p>
            While Interspecies is no longer active, this pioneering interactive approach to the arts is now abundant. Please consider supporting some of the organizations continuing this important work.
            </p>
          <p>
            This website serves as a legacy of what once was a vibrant community of artists, scientists, and activits. The <span className="ic-text">interspecies.com</span> archive is proudly brought to you by <span className="nht-text">Nonhuman Teachers</span> with the generous support of <span className="rhizome-text">Rhizome</span>. 
          </p>
      </section>
      <section className="section-block">
        <div className="section-header">
          <h2>Contact</h2>
          <a href="/contact">View more →</a>
        </div>
        <section className="hero-text-bottom">
          <p>
          For information about Interspecies and other on-going projects, please subscribe to the Nonhuman Teachers mailing list.
          </p>
          <Newsletter />
        </section>
      </section>
    </section>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}