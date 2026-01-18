'use client';

import { useState, useEffect } from 'react';
import NewsletterDropdown from '../components/NewsletterDropdown.jsx';
import NewsletterGrid from '../components/NewsletterGrid.jsx';
import Bibliography from '../components/Bibliography.jsx';
import BookFootnote from '../components/BookFootnote.jsx';
import NewsletterFootnote from '../components/NewsletterFootnote.jsx';

export default function Writings() {

    const [isOpen,setIsOpen] = useState(false);
    const [activeFootnote, setActiveFootnote] = useState("")

    const [newsletterOpen,setNewsletterOpen] = useState(false);
    const [activeNewsletter, setActiveNewsletter] = useState("")
  
    function albumClick(item){
      console.log(item);
      setActiveFootnote(item)
      setTimeout(()=>{
        setIsOpen(true);
      }, 50);
    }
  
    const handleClose = () => {
      setIsOpen(false);
      setActiveFootnote(null);
    };

    const newsletterClick = (item) =>{
      console.log(item);
      setActiveNewsletter(item)
      setTimeout(()=>{
        setNewsletterOpen(true);
      }, 50);
    }
  
  return (
    <>
    <section className="section-block" id="writings">
        <div className="section-header">
          <h2>Writings</h2>
          {/* <a href="/writings">View more →</a> */}
        </div>
        <p className="section-description">
          The large part of Interspecies cultural production was text-based, from firsthand reportage of on-going projects, to personal essays, poetry, and fiction. These works were published primarily in a quarterly newsletter and have also appeared in numerous published anthologies and publications internationally.
        </p>
          <p className="section-description">The entire collection of the physical newsletters are made available here for scholarship, education, and research purposes.</p>
          <NewsletterDropdown onItemSelect={newsletterClick} />
          <NewsletterGrid onItemClick={newsletterClick} />
        </section>
        <section className='section-block'>
        <div className="section-header">
          <h2>Published Works</h2>
        </div>
          <Bibliography onItemClick={albumClick} />
        </section>
      {/* </div> */}
      <BookFootnote open={isOpen} onClose={() => setIsOpen(false)} footnote={activeFootnote} />
      <NewsletterFootnote open={newsletterOpen} onClose={() => setNewsletterOpen(false)} newsletter={activeNewsletter} />
    </>
  );
}