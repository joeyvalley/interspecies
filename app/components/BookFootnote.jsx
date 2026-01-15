import { useEffect, useState } from "react";

export default function BookFootnote({ open, onClose, footnote }){

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
            <div className="footnote-container-header-title">{footnote.title}</div>
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
                <strong>Author:</strong> {footnote.author}<br />
                <strong>Title:</strong> {footnote.title}: {footnote.subtitle}<br />
                <strong>Publisher: </strong> {footnote.publisher}<br />
                {/* <strong>ISBN-13: </strong> {footnote.isbn}<br /> */}
                <strong>Year: </strong> {footnote.year}<br />
            </p>
            <p>
                {footnote.description}
            </p>
        </div>

        <div className="footnote-container-source">
            <span>Source: {footnote.publisher}</span>
            {footnote.href ? <a href={footnote.href} target="_blank">View more →</a> : ""}
        </div>
    </div>
    )
}