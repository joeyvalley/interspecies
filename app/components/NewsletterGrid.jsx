import { useState, useRef } from "react";

export default function NewsletterGrid() {
  const initialVisible = 10;

  const baseURL =
    "https://05ec48578e12534030.temporary.link/interspecies/newsletter/covers-";

  // Explicit list of issue numbers, skipping 20
  const issues = Array.from({ length: 67 }, (_, i) => i + 1).filter(
    (num) => num !== 20
  );

  const [showAll, setShowAll] = useState(false);
  const topRef = useRef(null);

  const visibleIssues = showAll
    ? issues
    : issues.slice(0, initialVisible);

  const handleToggle = () => {
    setShowAll((prev) => {
      if (prev && topRef.current) {
        topRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return !prev;
    });
  };

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

      <div style={{ marginTop: "1rem" }}>
        <button
          type="button"
          onClick={handleToggle}
          className="see-all"
        >
          {showAll ? "Show less" : "See all"}
        </button>
      </div>
    </div>
  );
}