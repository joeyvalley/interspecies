export default function NewsletterGrid() {
  const total = 10;
  const baseURL =
    "https://05ec48578e12534030.temporary.link/interspecies/newsletter/covers-";

  return (
    <div className="catalog-grid">
      {Array.from({ length: total }, (_, i) => {
        const num = i + 1;
        const imgSrc = `${baseURL}${num}.jpg`;
        return (
          <a
            key={num}
            href={imgSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="tile"
          >
            <img
              src={imgSrc}
              alt={`Interspecies Newsletter #${num}`}
              loading="lazy"
              decoding="async"
              className="thumb"
            />
            {/* <figcaption className="caption">Issue {num}</figcaption> */}
          </a>
        );
      })}
    </div>
  );
}