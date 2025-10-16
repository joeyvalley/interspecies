// /app/page.js
"use client";

import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import HeroSlider from "./components/HeroSlider.jsx";
import WritingsSlider from "./components/WritingsSlider.jsx";
import RecordingsSlider from "./components/RecordingsSlider.jsx";
import Newsletter from "./components/Newsletter.jsx";
import HomeDesktop from "./components/HomeDesktop.jsx";
import HomeMobile from "./components/HomeMobile.jsx";

export default function Home() {
  // Avoid hydration mismatch: render nothing until we know the viewport
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!mounted) return null; // or a lightweight placeholder

  return (
    <div className="container">
      {isMobile ? <HomeMobile /> : <HomeDesktop />}
    </div>
  );
}