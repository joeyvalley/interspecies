import { useEffect, useMemo, useRef, useState } from "react";

export default function NewsletterGrid() {
  const initialVisible = 10;

  const baseURL =
    "https://05ec48578e12534030.temporary.link/interspecies/newsletter/covers-";

  const issues = useMemo(
    () => Array.from({ length: 67 }, (_, i) => i + 1).filter((n) => n !== 20),
    []
  );

  const [showAll, setShowAll] = useState(false);
  const topRef = useRef(null);

  const visibleIssues = showAll ? issues : issues.slice(0, initialVisible);

  const handleToggle = () => {
    setShowAll((prev) => {
      if (prev && topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return !prev;
    });
  };

  // Background preload of the remaining images
  useEffect(() => {
    const remaining = issues.slice(initialVisible);

    let cancelled = false;

    // Preload in small batches so we don't hammer the network
    const preloadBatch = async () => {
      const batchSize = 6;

      for (let i = 0; i < remaining.length; i += batchSize) {
        if (cancelled) return;

        const batch = remaining.slice(i, i + batchSize);

        // Fire off image requests
        batch.forEach((num) => {
          const img = new Image();
          img.decoding = "async";
          img.loading = "eager";
          img.src = `${baseURL}${num}.jpg`;
        });

        // Small pause between batches (lets main thread breathe)
        await new Promise((r) => setTimeout(r, 150));
      }
    };

    // Run during idle time if available
    const run = () => preloadBatch();

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(id);
      };
    }

    // Fallback
    run();
    return () => {
      cancelled = true;
    };
  }, [issues, baseURL]);

  return (
    <div ref={topRef}>
      <div className="catalog-grid">
        {visibleIssues.map((num) => {
          const paddedNum = String(num).padStart(2, "0");
          return (
            <a
              key={num}
              href={`writings/newsletter/interspecies-newsletter-${paddedNum}`}
              rel="noopener noreferrer"
              className="tile"
            >
              <img
                src={`${baseURL}${num}.jpg`}
                alt={`Interspecies Newsletter #${num}`}
                loading="lazy"
                decoding="async"
                className="thumb"
              />
            </a>
          );
        })}
      </div>

      <div>
        <span onClick={handleToggle} className="see-all">
          {showAll ? "Show less" : "View more →"}
        </span>
      </div>
    </div>
  );
}