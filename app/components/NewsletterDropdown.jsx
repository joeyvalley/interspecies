'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import newsletters from '../writings/newsletters.json'; // adjust path if needed

export default function NewsletterDropdown({ onItemSelect }) {
  const router = useRouter();

  // Normalize + sort once
  const posts = useMemo(() => {
    return [...newsletters]
      .filter((n) => typeof n.number === 'number')
      .sort((a, b) => a.number - b.number)
  }, []);

  const handleChange = (e) => {
  const selectedId = e.target.value;
  const selectedItem = posts.find((item) => item.id === selectedId);
  if (selectedItem) onItemSelect?.(selectedItem);
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
          Select issue
        </option>

        {posts.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title} - ({item.date})
          </option>
        ))}
      </select>
    </div>
  );
}