// app/components/NewsletterDropdown.jsx
'use client';

import { useState, useEffect } from 'react';

export default function SupportDropdown() {


  const handleChange = (e) => {
    console.log("new selection")
  };

  return (
    <div className="newsletter-select">
      <select
        id="support-picker"
        onChange={handleChange}
        defaultValue=""
        className="newsletter-picker"
      >
        <option value="" disabled>Learn more...</option>
        <option value="">Alexander Liebermann</option>
        <option value="">Andrew Pekler</option>
        <option value="">Animal Language Institute</option>
        <option value="">Bernie Krause</option>
        <option value="">Bottlenose Dolphin Research Institute</option>
        <option value="">Cactus Store</option>
        <option value="">Charles Amirkhanian</option>
        <option value="">Christopher Luna-Mega</option>
        <option value="">Comparative Cognition Lab</option>
        <option value="">David Rothenberg</option>
        <option value="">Dolphin Communication Project</option>
        <option value="">earth.fm</option>
        <option value="">Earth Species Project</option>
        <option value="">Folkways Recordings</option>
        <option value="">Hildegard Westerkamp</option>
        <option value="">IAHAIO</option>
        <option value="">Interspecies Internet</option>
        <option value="">Interspecies Voices</option>
        <option value="">Irene Pepperberg</option>
        <option value="">Jeremy Coller Foundation</option>
        <option value="">Julie Andreyev</option>
        <option value="">Karen Power</option>
        <option value="">Lawrence English</option>
        <option value="">Leah Barclay</option>
        <option value="">Matthew Burtner</option>
        <option value="">MOTH (More Than Human Life)</option>
        <option value="">Nonhuman Teachers</option>
        <option value="">Other Minds</option>
        <option value="">Pat McCarthy</option>
        <option value="">Project CETI</option>
        <option value="">Rural Situationism</option>
        <option value="">Simone Pika</option>
        <option value="">Wendy Reid</option>
        <option value="">Wild Dolphin Project</option>
        <option value="">Wildlife Messengers</option>
        <option value="">Wild Sanctuary</option>
        <option value="">Woods Hole Oceanographic Institution</option>
        <option value="">Zoolingua</option>
      </select>
    </div>
  );
}