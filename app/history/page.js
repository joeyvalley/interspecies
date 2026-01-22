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
        <section className='section-block' id="history">
        <div className="section-header">
          <h2>History</h2>
        </div>
          <p className="page-section-description">
            Interspecies was founded and led by conceptual musician, writer and environmentalist <span className="footnote" onClick={()=>footnoteClick("Jim Nollman")}>Jim Nollman</span>. Born in Boston, Massachusetts in 1947, Nollman received a degree in English Literature from Tufts University, where he also learned to compose <span className="footnote" onClick={()=>footnoteClick("Incidental Music")}>incidental music</span> for theater. After relocating to the San Francisco Bay Area in 1970, Nollman became involved with the <span className="footnote" onClick={()=>footnoteClick("John Cage")}>post-Cage</span> avant-garde, producing experimental radio pieces for the legendary <span className="footnote" onClick={()=>footnoteClick("KPFA (94.1 FM)")}>KPFA station</span> in Berkeley, California. These pieces were his first experiments with interspecies musical collaboration, famously including an acapella rendition of the folk song <span className="footnote" onClick={()=>footnoteClick("Frog Went a Courtin'")}>“Frog Went a Courtin’”</span> accompanied by <span className="footnote" onClick={()=>footnoteClick("Froggy-Went-a-Courting (300 Turkeys)")}>300 turkeys</span>, as well as pieces featuring interactions with <span className="footnote" onClick={()=>footnoteClick("Kangaroo rat")}>kangaroo rats</span> in Death Valley, California and wolves north of Reno, Nevada.
          </p>

          <p className="page-section-description">
            By 1975, Nollman was living in <span className="footnote" onClick={()=>footnoteClick("Bolinas, CA")}>Bolinas, California</span> where he received a grant from the newly-founded California Arts Commission to build a <span className="footnote" onClick={()=>footnoteClick("Whale drum")}>buoyant drum with a seat and outriggers</span> to interact with several different cetacean species in the wild. It was in Bolinas that Nollman began his career as an author, penning an article for the <span className="footnote" onClick={()=>footnoteClick("CoEvolution Quarterly")}>CoEvolution Quarterly</span> (a subsidiary journal of the <span className="footnote" onClick={()=>footnoteClick("Whole Earth Catalog")}>Whole Earth Catalog</span>) documenting his experiences of playing live music with animals. In 1976, he joined saxophonist <span className="footnote" onClick={()=>footnoteClick("Paul Winter")}>Paul Winter</span>, soundscape ecologist <span className="footnote" onClick={()=>footnoteClick("Bernie Krause")}>Bernie Krause</span>, and neuroscientist <span className="footnote" onClick={()=>footnoteClick("Paul Spong")}>Paul Spong</span> in a Japanese film production about playing music with wild orcas.
          </p>
             
          <p className="page-section-description">
          Through this work, Nollman developed a reputation for his interspecies endeavors and, in 1977 , was invited by a fledgling <span className="footnote" onClick={()=>footnoteClick("Greenpeace")}>Greenpeace</span> to participate in a project combatting the brutal <span className="footnote" onClick={()=>footnoteClick("Dolphin drive hunting")}>dolphin drive fishing practices</span> on Iki Island, Japan – a practice later made famous by the 2009 documentary <span className="footnote" onClick={()=>footnoteClick("The Cove")}>"The Cove"</span>. During his time in Japan, Nollman developed early prototypes for improving underwater music transmission and recording. <span className="footnote" onClick={()=>footnoteClick("The Iki Machine")}>One such system</span> was modified to protect the dolphins from local fishermen by creating an “underwater acoustic fence” around individual fishing boats.
          </p>

          <p className="page-section-description">
            Interspecies Communication, Inc. was incorporated as a <span className="footnote" onClick={()=>footnoteClick("501(c)(3) organization")}>501(c)(3) non-profit organization</span> in 1979 as means of formalizing this original work, developing a community around a shared artistic vision, and establishing a network of committed sponsors to support the artists, writers, and philosophers exploring new approaches to <span className="footnote" onClick={()=>footnoteClick("Environmental art")}>environmental art</span>, <span className="footnote" onClick={()=>footnoteClick("Deep ecology")}>eco-philosophy</span>, and other works demonstrating <span className="footnote" onClick={()=>footnoteClick("Paul and Ampan")}>novel means of communicating with nature</span>.  The first issue of the <span className="footnote" onClick={()=>footnoteClick("Interspecies Newsletter")}>Interspecies Newsletter</span> - a physical missive sent out to all Interspecies Communication members and donors - was written and published by member Susanna Scanlon in early 1980, documenting Nollman’s <span className="footnote" onClick={()=>footnoteClick("Environmental movement")}>eco-protest</span> and technological work at Iki Island. Newsletters were published intermittently over the next few years, eventually becoming a quarterly publication in 1983 under the editorial leadership of Sandra Wilson. From 1988-2005 Nollman served as editor-in-chief with layout and printing provided by Marshall Davis. 
          </p>

          <p className="page-section-description">
            The Interspecies Newsletter proved to be a successful tool for developing an active international membership. Nollman provided the lion’s share of the writing, with many of his articles eventually being re-formatted as essays and stories in periodicals including  <span className="footnote" onClick={()=>footnoteClick("Utne Reader")}>Utne Reader</span>, <span className="footnote" onClick={()=>footnoteClick("Orion Magazine")}>Orion Magazine</span>, The Sun, and <span className="footnote" onClick={()=>footnoteClick("New Age Journal")}>New Age Journal</span>, as well as his <span className="footnote" onClick={()=>footnoteClick("Jim Nollman - Bibliography")}>own books</span> published by Bantam Press, Henry Holt Publishing, and the Sierra Club Press. Additional newsletter contributors include Paul Watson formerly of <span className="footnote" onClick={()=>footnoteClick("Sea Shepherd Conservation Society")}>Sea Shepherd</span>, Animal Rights advocates <span className="footnote" onClick={()=>footnoteClick("Marc Bekoff")}>Marc Bekoff</span> and <span className="footnote" onClick={()=>footnoteClick("Ben White")}>Ben White</span>, Greenpeace co-founder <span className="footnote" onClick={()=>footnoteClick("Rex Weyler")}>Rex Weyler</span>, Mike Cohen of <span className="footnote" onClick={()=>footnoteClick("Project NatureConnect")}>Project NatureConnect</span>, and artist <span className="footnote" onClick={()=>footnoteClick("Daniel Dancer")}>Daniel Dancer</span>.
          </p>

          <p className="page-section-description">
            During the mid-1980s Interspecies Communication crystallized into a vital source of countercultural activity in the environmentalism and avant-garde artistic practices of the time. 
            The multifaceted projects of Interspecies Communication were increasingly being funded by generous donations from readers of the newsletter in addition to support from various donors, grants, and media appearances. Virginia Coyle came onboard in 1984 as a uniquely gifted event producer, and along with Katy Nollman as project manager expanded the organization's operational range to include the <span className="footnote" onClick={()=>footnoteClick("Human/Dolphin Foundation")}>Human/Dolphin Foundation</span>, a collaboration with <span className="footnote" onClick={()=>footnoteClick("John C. Lilly")}>John</span> and Toni Lilly in Careyes, Mexico; the <span className="footnote" onClick={()=>footnoteClick("The Orca Project")}>Orca Project</span> an annual expedition to the Johnstone Strait in Canada to record musical interactions with wild orcas; development of <span className="footnote" onClick={()=>footnoteClick("Custom electronics")}>custom electronics and recording equipment</span> for in-situ recordings of animals and environment with engineers Richard Ferarro, Mike Sofen, and Mark Fischer; cand collaborative efforts with the indigenous Aborigines of <span className="footnote" onClick={()=>footnoteClick("Lake Tyers, Australia")}>Lake Tyers, Australia</span> to rescue a stranded dolphin pod.</p>
            
            <p className="page-section-description">
              Jim Nollman focused on the development of custom electronics and recording equipment for in-situ recordings of animals and environment via hardware and software contributions by Brian Lubell of <span className="footnote" onClick={()=>footnoteClick("Lubell Labs")}>Lubell Labs</span>, and engineers Richard Ferarro, Mike Sofen, and Mark Fischer. In 1987, Interspecies was invited by Greenpeace, Alaska Department of Fish and Game, and the indigenous <span className="footnote" onClick={()=>footnoteClick("Iñupiat")}>Iñupiat community</span> to use music and sound to <span className="footnote" onClick={()=>footnoteClick("Operation Breakthrough")}>help free gray whales</span> caught in an ice hole off Barrow, Alaska. By the early 1990s, the organization had established <span className="footnote" onClick={()=>footnoteClick("The Beluga Cafe")}>longterm communication programs</span> with beluga whale populations in the Canadian High Arctic and the Russian White Sea. A long term collaboration with writer and conceptual artist <span className="footnote" onClick={()=>footnoteClick("Micky Remann")}>Micky Remann</span> resulted in the implementation of four unique underwater musical performances in Berlin, Germany where audience members <span className="footnote" onClick={()=>footnoteClick("Liquidrom")}>floated in heated pools</span>. Throughout this time, Jim Nollman continued to <span className="footnote" onClick={()=>footnoteClick("Interspecies presentations")}>give lectures talks, lead seminars, and exhibit internationally</span> on interspecies communication and music.
          </p>

          <p className="page-section-description">
            Interspecies Communication - renamed simply interspecies.com at the dawn of the <span onClick={()=>footnoteClick("Internet Age")}>Internet Age</span> - remained vigorously active, with members and volunteers from around the world, until its <span className="footnote" onClick={()=>footnoteClick("Interspecies disbanding")}>dissolution in 2005</span>. During its tenure, the organization remained unique. With a formal research program dedicated to interfacing with animals, plants and the non-living environment through music, art and ceremony, Interspecies was ahead of its time artistically, scientifically, and spiritually, while also <span className="footnote" onClick={()=>footnoteClick("Interspecies history")}>honoring traditional relationships</span> between humans and the natural world as expressed by indigenous peoples around the globe. This interdependent connection seems especially pertinent in our current moment, as human beings <span className="footnote" onClick={()=>footnoteClick("The Climate Crisis")}>navigate an environmental crisis</span> that demands a fundamental re-consideration of our species with and within the fabric of Nature.
          </p>

          <p className="page-section-description">
            "The world itself can only be perceived as a unity upon which we all live and die, grow and collaborate."
          </p>
        </section>
    <Footnote open={isOpen} onClose={() => setIsOpen(false)} footnote={activeFootnote} />
    </>
  );
}