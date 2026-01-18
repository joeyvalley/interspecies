import { useEffect, useMemo, useRef, useState } from "react";
import newsletters from "../writings/newsletters.json";

export default function NewsletterGrid({ onItemClick }) {
  const initialVisible = 10;

  const baseCoverURL =
    "https://05ec48578e12534030.temporary.link/interspecies/newsletter/covers-";

  // Derive sorted list once
  const allItems = useMemo(() => {
    // If your JSON already has { id, number, title, date, pdf, link } use it directly.
    // Filter out missing numbers (or any other edge cases).
    return [...newsletters]
      .filter((n) => typeof n.number === "number")
      .sort((a, b) => a.number - b.number);
  }, []);

  const [showAll, setShowAll] = useState(false);
  const topRef = useRef(null);

  const visibleItems = showAll ? allItems : allItems.slice(0, initialVisible);

  const handleToggle = () => {
    setShowAll((prev) => {
      if (prev && topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return !prev;
    });
  };

  // Background preload of remaining covers
  useEffect(() => {
    const remaining = allItems.slice(initialVisible);

    let cancelled = false;

    const preloadBatch = async () => {
      const batchSize = 6;

      for (let i = 0; i < remaining.length; i += batchSize) {
        if (cancelled) return;

        const batch = remaining.slice(i, i + batchSize);

        batch.forEach((item) => {
          const img = new Image();
          img.decoding = "async";
          img.loading = "eager";
          img.src = `${baseCoverURL}${item.number}.jpg`;
        });

        await new Promise((r) => setTimeout(r, 150));
      }
    };

    const run = () => preloadBatch();

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [allItems, baseCoverURL]);

  return (
    <div ref={topRef}>
      <div className="catalog-grid">
        {visibleItems.map((item) => (
            <img
              key={item.id}
              src={`${baseCoverURL}${item.number}.jpg`}
              alt={item.title || `Interspecies Newsletter #${item.number}`}
              loading="lazy"
              decoding="async"
              className="thumb"
              onClick={() => onItemClick?.(item)}
            />
        ))}
      </div>

      <div>
        <span onClick={handleToggle} className="see-all" role="button" tabIndex={0}>
          {showAll ? "Show less" : "View all →"}
        </span>
      </div>
    </div>
  );
}