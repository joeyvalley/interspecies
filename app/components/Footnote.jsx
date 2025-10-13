import { useEffect } from "react";

export default function Footnote({ open, onClose, footnote }){

    useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

    if (!footnote) return null;

    return(
    <div className={`footnote-container ${open ? "open" : ""}`}>
        <div className="footnote-container-header">
            <div className="footnote-container-header-title">Reference: {footnote.title}</div>
            <div className="footnote-container-header-close" onClick={onClose}>x</div>
        </div>
        <div className="footnote-container-media">
            {footnote.media_type === "image" && (
                <img
                    src={footnote.media_link}
                    alt={footnote.title}
                    style={{ width: "100%" }}
                />
                )}
        </div>
            {Array.isArray(footnote.info) &&
            footnote.info.map((text, index) => (
            <p key={index}>{text}</p>
            ))}
        <div className="footnote-container-source">
            <span>Source: {footnote.source}</span>
            <a href={footnote.external_link} target="_blank">View more →</a>
        </div>
    </div>
    )
}