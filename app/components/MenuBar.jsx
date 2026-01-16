"use client";

import { useState } from "react";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MenuBar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <section className="menu-bar">
      <nav className="nav">
        <ul className="nav-links">
          <li className="logo">
            <button type="button" onClick={() => go("home")} className="nav-btn">
              <img
                src="/assets/logo.svg"
                alt="Interspecies"
                className="logo-image"
              />
            </button>
          </li>

          <li className="text">
            <button type="button" onClick={() => go("history")} className="nav-btn">
              History
            </button>
          </li>

          <li className="text">
            <button type="button" onClick={() => go("writings")} className="nav-btn">
              Writings
            </button>
          </li>

          <li className="text">
            <button type="button" onClick={() => go("music")} className="nav-btn">
              Music
            </button>
          </li>

          <li className="text">
            <button type="button" onClick={() => go("support")} className="nav-btn">
              Support
            </button>
          </li>

          <li className="text">
            <button type="button" onClick={() => go("contact")} className="nav-btn">
              Contact
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </li>
        </ul>
      </nav>

      <div className={`side-menu${open ? " open" : ""}`}>
        <ul>
          <li>
            <button type="button" onClick={() => go("history")} className="nav-btn">
              History
            </button>
          </li>
          <li>
            <button type="button" onClick={() => go("writings")} className="nav-btn">
              Writings
            </button>
          </li>
          <li>
            <button type="button" onClick={() => go("music")} className="nav-btn">
              Music
            </button>
          </li>
          <li>
            <button type="button" onClick={() => go("support")} className="nav-btn">
              Support
            </button>
          </li>
          <li>
            <button type="button" onClick={() => go("contact")} className="nav-btn">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
} 