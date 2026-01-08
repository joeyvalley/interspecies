import { useEffect, useState } from "react";

export default function AlbumFootnote({ open, onClose, footnote }){

  const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
  }, [open]);

    if (!footnote) return null;

    return(
    <div className={`footnote-container ${open ? "open" : ""}`}>
        <div className="footnote-container-header">
            <div className="footnote-container-header-title">{footnote.artist} - {footnote.title}</div>
            <div className="footnote-container-header-close" onClick={onClose}>x</div>
        </div>
        <div className="footnote-container-media">
            {footnote.coverSrc && (
              <img
                src={footnote.coverSrc}
                alt={footnote.id}
                style={{ width: "100%" }}
              />
            )}
        </div>
        <div>
            <p>
                <strong>Artist:</strong> {footnote.artist}<br />
                <strong>Title:</strong> {footnote.title}<br />
                <strong>Label: </strong> {footnote.label}<br />
                <strong>Year: </strong> {footnote.year}<br />
            </p>
            <p>
                {footnote.description}
            </p>
            {Array.isArray(footnote.tracklisting) && footnote.tracklisting.length > 0 && (
            <span className="tracklist">
                <strong>Track Listing:</strong>
            </span>
            )}
            <ol>
                {Array.isArray(footnote.tracklisting) && footnote.tracklisting.map((track, index) => (
                    <li key={index}>{index+1}. {track}</li>
                ))}
            </ol>
        </div>

        <div className="footnote-container-source">
            <span>Source: {footnote.source}</span>
            {footnote.href ? <a href={footnote.href} target="_blank">View more →</a> : ""}
        </div>
    </div>
    )
}