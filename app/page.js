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
  return (
    <div className="container">
      <HomeDesktop />
    </div>
  );
}