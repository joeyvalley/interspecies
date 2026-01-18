import { useEffect, useState } from "react";

export default function NewsletterFootnote({ open, onClose, newsletter }){

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

    if (!newsletter) return null;

    return(
    <div className={`footnote-container-newsletter ${open ? "open" : ""}`}>
        <div className="footnote-container-header">
            <div className="footnote-container-header-title">{newsletter.title} ({newsletter.date})</div>
            <div className="footnote-container-header-close" onClick={onClose}>x</div>
        </div>
        <div className="footnote-container-media-newsletter">
            <embed src={newsletter.link} type="application/pdf" width="100%" height="100%" border="none" />
        </div>

        <div className="footnote-container-source">
            <span>Source: Interspecies Archive</span>
            {newsletter.pdf ? <a href={newsletter.pdf} target="_blank">More info →</a> : ""}
        </div>
    </div>
    )
}