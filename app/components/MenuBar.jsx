'use client'
import { useState, useEffect } from 'react';

export default function MenuBar() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(o => !o);
    };

    return (
        <section className="menu-bar">
        <nav className="nav">
          <ul className="nav-links">
            <li className="logo"><a href="/"><img src="/assets/logo.svg" alt="Interspecies" className="logo-image" /></a></li>
            <li className="text"><a href="/history">History</a></li>
            <li className="text"><a href="/writings">Writings</a></li>
            <li className="text"><a href="/recordings">Recordings</a></li>
            <li className="text"><a href="/support">Support</a></li>
            <li className="text"><a href="/contact">Contact</a></li>
            <li>
              <button className={`hamburger ${open ? 'open' : ''}`} onClick={toggle} aria-label="Toggle menu">
                <span />
                <span />
                <span />
              </button>
            </li>
          </ul>
        </nav>
        <div className={`side-menu${open ? ' open' : ''}`}>
          <ul>
            <li><button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>X</button></li>
            <li><a href="/history">History</a></li>
            <li><a href="/writings">Writings</a></li>
            <li><a href="/recordings">Recordings</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </section>
    )
}