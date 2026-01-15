'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MenuBar() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(o => !o);
    };

    return (
        <section className="menu-bar">
        <nav className="nav">
          <ul className="nav-links">
            <li className="logo"><Link href="#home" scroll={true} onClick={() => setOpen(false)}><img src="/assets/logo.svg" alt="Interspecies" className="logo-image" /></Link></li>
            <li className="text"><Link href="#history">History</Link></li>
            <li className="text"><Link href="#writings" scroll={true} onClick={() => setOpen(false)}>Writings</Link></li>
            <li className="text"><Link href="#music" scroll={true} onClick={() => setOpen(false)}>Music</Link></li>
            <li className="text"><a href="#support">Support</a></li>
            <li className="text"><a href="#contact">Contact</a></li>
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
            {/* <li><button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>X</button></li> */}
            <li><Link href="#history" scroll={true} onClick={() => setOpen(false)}>History</Link></li>
            <li><Link href="#writings" scroll={true} onClick={() => setOpen(false)}>Writings</Link></li>
            <li><Link href="#music" scroll={true} onClick={() => setOpen(false)}>Music</Link></li>
            <li><Link href="#support" scroll={true} onClick={() => setOpen(false)}>Support</Link></li>
            <li><Link href="#contact" scroll={true} onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </section>
    )
}