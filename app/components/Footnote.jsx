import { useEffect, useState } from "react";

export default function Footnote({ open, onClose, footnote }){

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

  useEffect(() => {
    if (footnote?.media_type === "video") {
      const videoId = footnote.media_link.split("v=")[1];
      const autoplaySrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      if (open) {
        setVideoSrc(autoplaySrc);
      } else {
        setVideoSrc("");
      }
    }
  }, [open, footnote]);

    if (!footnote) return null;

    return(
    <div className={`footnote-container ${open ? "open" : ""}`}>
        <div className="footnote-container-header">
            <div className="footnote-container-header-title">Reference: {footnote.title}</div>
            <div className="footnote-container-header-close" onClick={onClose}>x</div>
        </div>
        <div className="footnote-midsection">
        <div className="footnote-container-media">
            {footnote.media_type === "image" && footnote.media_link && (
              <img
                src={footnote.media_link}
                alt={footnote.title}
                style={{ width: "100%" }}
              />
            )}

            {footnote.media_type === "video" && videoSrc && (
              <div className="video-wrapper">
                <iframe
                  src={videoSrc}
                  title={footnote.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  width="100%;"
                />
              </div>
            )}
        </div>

        {Array.isArray(footnote.info) && footnote.info.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        {/* {footnote.image_credit ? <span className="image-credit">Image credit: {footnote.image_credit}</span> : ""} */}
        </div>
        <div className="footnote-container-source">
            <span>Source: {footnote.source}</span>
            {footnote.external_link ? <a href={footnote.external_link} target="_blank">More info →</a> : ""}
        </div>
    </div>
    )
}