// app/components/NewsletterDropdown.jsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsletterDropdown() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch('/api/newsletters');
        if (!res.ok) throw new Error(`Fetch error ${res.status}`);
        setPosts(await res.json());
      } catch (err) {
        console.error(err);
      }
    }
    loadPosts();
  }, []);

  const handleChange = (e) => {
    const slug = e.target.value;
    if (slug) router.push(`writings/newsletter/${slug}`);
  };

  return (
    <div className="newsletter-select">
      <select
        id="newsletter-picker"
        onChange={handleChange}
        defaultValue=""
        className="newsletter-picker"
      >
        <option value="" disabled>
          Select issue...
        </option>
        {posts.map(({ slug, date, title }) => (
          <option key={slug} value={slug}>
            {date}
          </option>
        ))}
      </select>
    </div>
  );
}