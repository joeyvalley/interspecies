'use client';

import { useState, useEffect } from 'react';
import MenuBar from '../components/MenuBar.jsx';
import Footer from '../components/Footer.jsx';

export default function History() {
  
  return (
    <div className="container">
      {/* MENU BAR */}
      <MenuBar />
      <div className="page">
        {/* <section className="hero-text">
          <p>
            Interspecies was a nonprofit organization active from 1979 - 2014, founded by writer and composer Jim Nollman. Interspecies work focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating with animals and habitat.
          </p>
        </section> */}
        <section className='section-block-last'>
        <div className="section-header">
          <h2>History</h2>
        </div>
          <p className="page-section-description">
            Interspecies was founded and led by conceptual artist and environmentalist <a href="https://en.wikipedia.org/wiki/Jim_Nollman" target="_blank">Jim Nollman</a>. Born in Boston, Massachusetts in 1947, Nollman received an undergraduate degree in English Literature from Tufts University, where he also composed <a href="https://www.britannica.com/art/incidental-music" target="_blank">incidental music</a> for theater. After relocating to the San Francisco Bay Area in 1970, Nollman became involved with the <a href="https://en.wikipedia.org/wiki/John_Cage" target="_blank">post-Cage</a> avant-garde music scene, producing experimental radio pieces for the legendary <a href="https://kpfa.org/" target="_blank">KPFA station</a> in Berkeley, California. These pieces would become his first experiments with interspecies collaboration, famously including an acapella rendition of the folk song <a href="https://www.youtube.com/watch?v=EhgPXkWUO-s" target="_blank">“Frog Went a Courtin’”</a> accompanied by <a href="https://www.youtube.com/watch?v=GnrcRS-ljZ8" target="_blank">300 turkeys</a>, as well as pieces featuring kangaroo rats in Death Valley, California and wolves in Reno, Nevada.
          </p>
          {/* <img className="section-image" src="https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992066/jim-boat_erxyp6.jpg" /> */}
          <p className="page-section-description">
             By 1975, Nollman was living in Bolinas, California where he received a grant from the newly-founded <a href="https://www.projectjonah.org.nz/" target="_blank">Project Jonah</a> to build a buoyant percussive instrument to be used to sonically attract dolphins in the wild. It is here in Bolinas as well that Nollman begins his career as an author, penning articles for the <a href="https://en.wikipedia.org/wiki/CoEvolution_Quarterly" target="_blank">Co-Evolution Quarterly</a> (a subsidiary journal of the <a href="https://en.wikipedia.org/wiki/Whole_Earth_Catalog" target="_blank">Whole Earth Catalog</a>) documenting his experiences of playing music with animals. Through this work, Nollman develops a reputation for his interspecies endeavors and in 1977 is invited by a fledgling <a href="https://en.wikipedia.org/wiki/Greenpeace" target="_blank">Greenpeace</a> to participate in a project combatting the brutal <a href="https://en.wikipedia.org/wiki/Dolphin_drive_hunting" target="_blank">dolphin drive fishing practices</a> on Iki Island, Japan – a practice later made famous by the 2009 documentary The Cove. During his time in Japan, Nollman developed early prototypes for electronic music systems designed to protect the dolphins from local fisherman by repelling them with audio signals.
          </p>
          <p className="page-section-description">
            Interspecies Communication, Inc. was incorporated as a 501(c)(3) non-profit organization in late 1979 as means to formalize this work and develop community around a shared artistic vision of communicating with animals. The <a href="writings/newsletter/interspecies-newsletter-01">first issue</a> of the Interspecies’ Newsletter - a physical missive sent out to all Interspecies Communication members and donors - was written and published by member Susanna Scanlon in early 1980, documenting Nollman’s eco-protest and technological work at Iki Island. Newsletters were issued intermittently for several years, becoming a <a href="">quarterly publication</a> from 1983-1987 under the editorial leadership of Sandra Wilson, and from 1988-2005 with Nollman as editor and printing provided by Marshall Davis. 
          </p>
          <p className="page-section-description">
            The Interspecies Newsletter proved to be a very successful tool for developing an active international membership. Nollman provided the lion’s share of the writing, with many articles eventually being re-formatted as essays in other publications such as The <a href="https://www.utne.com/" target="_blank">Utne Reader</a>, OMNI, and <a href="https://en.wikipedia.org/wiki/Whole_Living" target="_blank">New Age Journal</a>, as well as his <a href="https://www.goodreads.com/author/list/203960.Jim_Nollman" target="_blank">own books</a> published by Bantam Press, Henry Holt Publishing, and the Sierra Club Press. Additional newsletter contributors include Paul Watson formerly of <a href="https://seashepherd.org/" target="_blank">Sea Shepherd</a>, Animal Rights advocates <a href="https://en.wikipedia.org/wiki/Marc_Bekoff" target="_blank">Mark Bekoff</a> and <a href="https://en.wikipedia.org/wiki/Ben_White_(environmentalist)" target="_blank">Ben White</a>, Greenpeace co-founder <a href="https://en.wikipedia.org/wiki/Rex_Weyler" target="_blank">Rex Wyler</a>, Mike Cohen of <a href="https://projectnatureconnect.com/" target="_blank">Project NatureConnect</a>, and artist <a href="https://www.artforthesky.com/" target="_blank">Daniel Dancer</a>.
          </p>
          <p className="page-section-description">
            The multifaceted projects of Interspecies Communication were largely funded by the generous donations from readers of the newsletter in addition to many grants provided by arts and science organizations from around the globe. Projects include the Human/Dolphin Foundation, a collaboration with John and Toni Lilly in Careyes, Mexico; the Orca Project, an annual expedition to the Johnstone Strait in Canada to record musical interactions with wild orcas; development of custom electronics and recording equipment for in-situ recordings of animals and environment; collaborative efforts with the indigenous Aborigines of Melbourne, Australia to rescue a stranded dolphin community; using music and sound to help free gray whales caught in the Barrow Strait, Alaska; developing longterm communication programs with beluga whale populations in the Arctic Circle; as well as giving talks, leading seminars, and exhibiting work on interspecies communication internationally.
          </p>
        </section>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}