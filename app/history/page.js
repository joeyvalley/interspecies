'use client';

import { useState, useEffect } from 'react';
import Footnote from '../components/Footnote.jsx';
import footnotes from "./footnotes.json"

export default function History() {

  const [isOpen,setIsOpen] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState("")

  function footnoteClick(title){
    const match = footnotes.find((f) => f.title === title);
    if (match) setActiveFootnote(match);
    else setActiveFootnote(null);
    setTimeout(()=>{
      setIsOpen(true);
    }, 50);
  }

  const handleClose = () => {
    setIsOpen(false);
    setActiveFootnote(null);
  };
  
  return (
    <>
    <div className="container">
      <div className="page">
        <section className="hero-text">
          <p>
            Interspecies was a nonprofit organization active from 1979-2005, founded by writer and composer Jim Nollman. Interspecies work focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating with animals and habitat.
          </p>
        </section>
        <section className='section-block'>
        <div className="section-header">
          <h2>History</h2>
        </div>
          <p className="page-section-description">
            Interspecies was founded and led by conceptual artist and environmentalist <span className="footnote" onClick={()=>footnoteClick("Jim Nollman")}>Jim Nollman</span>. Born in Boston, Massachusetts in 1947, Nollman received an undergraduate degree in English Literature from Tufts University, where he also composed <span className="footnote" onClick={()=>footnoteClick("Incidental Music")}>incidental music</span> for theater. After relocating to the San Francisco Bay Area in 1970, Nollman became involved with the <span className="footnote" onClick={()=>footnoteClick("John Cage")}>post-Cage</span> avant-garde, producing experimental radio pieces for the legendary <span className="footnote" onClick={()=>footnoteClick("KPFA (94.1 FM)")}>KPFA station</span> in Berkeley, California. These pieces would become his first experiments with interspecies collaboration, famously including an acapella rendition of the folk song <span className="footnote" onClick={()=>footnoteClick("Frog Went a Courtin'")}>“Frog Went a Courtin’”</span> accompanied by <span className="footnote" onClick={()=>footnoteClick("Froggy-Went-a-Courting (300 Turkeys)")}>300 turkeys</span>, as well as pieces featuring <span className="footnote" onClick={()=>footnoteClick("Kangaroo rat")}>kangaroo rats</span> in Death Valley, California and wolves north of Reno, Nevada.
          </p>
          {/* <img className="section-image" src="https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992066/jim-boat_erxyp6.jpg" /> */}
          <p className="page-section-description">
             By 1975, Nollman was living in <span className="footnote" onClick={()=>footnoteClick("Bolinas, CA")}>Bolinas, California</span> where he received a grant from the newly-founded California Arts Commission to build a <span className="footnote" onClick={()=>footnoteClick("Whale Drum")}>buoyant drum with a seat and outriggers</span> to interact with several different cetacean species in the wild. It is here in Bolinas as well that Nollman begins his career as an author, penning articles for the <span className="footnote" onClick={()=>footnoteClick("CoEvolution Quarterly")}>CoEvolution Quarterly</span> (a subsidiary journal of the Whole Earth Catalog) documenting his experiences of playing music with animals. Through this work, Nollman develops a reputation for his interspecies endeavors and in 1977 is invited by a fledgling <span className="footnote" onClick={()=>footnoteClick("Greenpeace")}>Greenpeace</span> to participate in a project combatting the brutal <span className="footnote" onClick={()=>footnoteClick("Dolphin drive hunting")}>dolphin drive fishing practices</span> on Iki Island, Japan – a practice later made famous by the 2009 documentary <span className="footnote" onClick={()=>footnoteClick("The Cove")}>"The Cove"</span>. During his time in Japan, Nollman developed <span className="footnote" onClick={()=>footnoteClick("The Iki Machine")}>early prototypes</span> for electronic music systems designed to protect the dolphins from local fisherman, creating acoustic "fences" around fishing boats with audio signals amplified underwater.
          </p>
          <p className="page-section-description">
            Interspecies Communication, Inc. was incorporated as a <span className="footnote" onClick={()=>footnoteClick("501(c)(3) organization")}>501(c)(3) non-profit organization</span> in late 1979 as means to formalize this work, develop community around a shared artistic vision, and support the artists, writers, and philosophers exploring new approaches to <span className="footnote" onClick={()=>footnoteClick("Environmental art")}>environmental art</span>, <span className="footnote" onClick={()=>footnoteClick("Deep ecology")}>eco-philosophy</span>, and other works demonstrating <span className="footnote" onClick={()=>footnoteClick("Paul and Ampan")}>novel means of communicating with nature</span>.  The first issue of the <span className="footnote" onClick={()=>footnoteClick("Interspecies Newsletter")}>Interspecies’ Newsletter</span> - a physical missive sent out to all Interspecies Communication members and donors - was written and published by member Susanna Scanlon in early 1980, documenting Nollman’s <span className="footnote" onClick={()=>footnoteClick("Environmental movement")}>eco-protest</span> and technological work at Iki Island. Newsletters were issued intermittently for several years, becoming a quarterly publication from 1983-1987 under the editorial leadership of Sandra Wilson, and from 1988-2005 with Nollman as editor and printing provided by Marshall Davis. 
          </p>
          <p className="page-section-description">
            The Interspecies Newsletter proved to be a very successful tool for developing an active international membership. Nollman provided the lion’s share of the writing, with many articles eventually being re-formatted as essays in other publications such as <span className="footnote" onClick={()=>footnoteClick("Utne Reader")}>Utne Reader</span>, <span className="footnote" onClick={()=>footnoteClick("Orion Magazine")}>Orion Magazine</span> and <span className="footnote" onClick={()=>footnoteClick("New Age Journal")}>New Age Journal</span>, as well as his <span className="footnote" onClick={()=>footnoteClick("Jim Nollman - Bibliography")}>own books</span> published by Bantam Press, Henry Holt Publishing, and the Sierra Club Press. Additional newsletter contributors include Paul Watson formerly of <span className="footnote" onClick={()=>footnoteClick("Sea Shepherd Conservation Society")}>Sea Shepherd</span>, Animal Rights advocates <span className="footnote" onClick={()=>footnoteClick("Marc Bekoff")}>Marc Bekoff</span> and <span className="footnote" onClick={()=>footnoteClick("Ben White")}>Ben White</span>, Greenpeace co-founder <span className="footnote" onClick={()=>footnoteClick("Rex Weyler")}>Rex Weyler</span>, Mike Cohen of <span className="footnote" onClick={()=>footnoteClick("Project NatureConnect")}>Project NatureConnect</span>, and artist <span className="footnote" onClick={()=>footnoteClick("Daniel Dancer")}>Daniel Dancer</span>.
          </p>
          <p className="page-section-description">
            The multifaceted projects of Interspecies Communication were funded by the generous donations from readers of the newsletter in addition to support from various donors, grants, and media appearances. Projects include the  <span className="footnote" onClick={()=>footnoteClick("Human/Dolphin Foundation")}>Human/Dolphin Foundation</span>, a collaboration with <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>John</span> and Toni Lilly in Careyes, Mexico; the <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>Orca Project</span> an annual expedition to the Johnstone Strait in Canada to record musical interactions with wild orcas; development of <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>custom electronics and recording equipment</span> for in-situ recordings of animals and environment with engineers Richard Ferarro, Mike Sofen, and Mark Fischer; collaborative efforts with the indigenous Aborigines of <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>Lake Tyers, Australia</span> to rescue a stranded dolphin community; using music and sound to help <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>free gray whales</span> caught in the Barrow Strait, Alaska; developing <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>longterm communication programs</span> with beluga whale populations in the Arctic Circle; collaborating with writer and artist <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>Micky Remann</span> on the development and implementation of underwater musical performances; as well as <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>giving talks, leading seminars, and exhibiting work</span> on interspecies communication internationally.
          </p>
          <p className="page-section-description">
            Interspecies Communication - renamed simply interspecies.com at the dawning of the Internet Age - remained vigorously active, with members and volunteers from around the world, until its <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>dissolution in 2005</span>. During its tenure, the organization remained unique. With a formal research program dedicated to interfacing with animals, plants and the non-living environment through music, art and ceremony, Interspecies was in many ways ahead of its time artistically, scientifically, and spiritually, while simultaneously highlighting and <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>honoring traditional relationships</span> between humans and the natural world as expressed by indigenous peoples around the globe. This interdependent connection seems especially pertinent in our current moment, as we <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>navigate an environmental crisis</span> that demands a fundamental re-consideration of our species with and within the fabric of Nature.
          </p>
          <p className="page-section-description">"The world itself can only be perceived as a unity upon which we all live and die, grow and collaborate."
          </p>
        </section>
        <section className='section-block-last'>
        <div className="section-header">
          <h2>Timeline of Events</h2>
        </div>
         <p className="page-section-description">
            Interspecies Communication - renamed simply interspecies.com at the dawning of the Internet Age - remained vigorously active, with members and volunteers from around the world, until its dissolution in 2005. During its tenure, the organization remained unique. With a formal research program dedicated to interfacing with animals, plants and the non-living environment through music, art and ceremony, Interspecies was in many ways ahead of its time artistically, scientifically, and spiritually, while simultaneously highlighting and honoring traditional relationships between humans and the natural world as expressed by indigenous peoples around the globe. This interdependent connection seems especially pertinent in our current moment, as we navigate an environmental crisis that demands a fundamental re-consideration of our species with and within the fabric of Nature.
          </p>
        </section>
      </div>
    </div>
    <Footnote open={isOpen} onClose={() => setIsOpen(false)} footnote={activeFootnote} />
    </>
  );
}