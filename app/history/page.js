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
        <section className="hero-text">
          <p>
            Interspecies was a nonprofit organization active from 1979 - 2014, founded by writer and composer Jim Nollman. Interspecies work focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating with animals and habitat.
          </p>
        </section>
        <section className='section-block-last'>
        <div className="section-header">
          <h2>History</h2>
        </div>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et nunc sagittis, convallis tortor quis, ullamcorper risus. Donec congue nisi ut tincidunt finibus. Aliquam quam leo, dignissim id convallis eget, iaculis ut augue. Praesent volutpat nunc nisl, a semper sem imperdiet eget. Ut mauris ipsum, venenatis eu ultricies vitae, semper sed ipsum. Nullam tempus lectus eu dignissim imperdiet. Nam blandit commodo ipsum at placerat. Sed rhoncus egestas nibh non viverra. In ut finibus turpis. Aliquam condimentum, purus ac ornare cursus, ipsum tortor accumsan tortor, quis dapibus ante massa sit amet erat. Vivamus consectetur dui nec enim vulputate suscipit. Sed non odio vitae nunc vestibulum aliquet. Nunc tincidunt, ipsum quis rhoncus finibus, sapien enim imperdiet sem, condimentum porttitor dolor leo et dui. Praesent accumsan varius tellus, et maximus est dictum ut. Sed tristique sapien ac odio pretium, in efficitur felis dignissim. Cras ut libero orci. 
          </p>
          <img className="section-image" src="https://res.cloudinary.com/dzxk4xfee/image/upload/v1751992066/jim-boat_erxyp6.jpg" />
          <p className="section-description">
             Ut et augue est. Nullam tincidunt ex eu metus fermentum consectetur. Nullam sit amet dui venenatis, aliquam nisl et, scelerisque elit. Aliquam quis dui ullamcorper, tincidunt diam ut, porta metus. Maecenas et mi congue, eleifend neque vitae, elementum nulla. Nunc eu tristique dolor. Pellentesque non purus at felis fermentum venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras posuere ullamcorper magna, et luctus purus rutrum quis. Ut sagittis libero vitae consectetur sodales. Aliquam fermentum malesuada nisl sed cursus. Proin eget mauris non ante dapibus volutpat id eget quam. Donec interdum, magna quis egestas porttitor, neque mi vehicula risus, et fermentum odio tellus blandit sapien. Sed mattis mauris felis, vitae consectetur augue lobortis vel. Morbi vel interdum arcu, nec dapibus orci. Mauris vel tortor quis urna molestie vehicula. 
          </p>
          <p className="section-description">
            In quis ullamcorper neque. Nulla in lectus a ipsum sagittis molestie nec ac mi. Aenean sit amet tortor elementum, laoreet sem in, maximus nisi. In hac habitasse platea dictumst. Morbi ac posuere nulla, eget semper velit. Duis tempus ut velit ac finibus. Suspendisse pellentesque cursus scelerisque. Etiam euismod nulla sed nulla aliquam, id eleifend nulla pharetra. Curabitur maximus neque vitae nibh interdum auctor. 
          </p>
          <p className="section-description">
            Etiam molestie massa a augue tristique porttitor. Maecenas mollis congue mi, sit amet porttitor erat interdum a. Sed velit sem, bibendum eget auctor non, luctus sit amet metus. In suscipit dolor nunc, a euismod ante congue vitae. Curabitur non libero nec neque porta porttitor eu vel tortor. Quisque volutpat malesuada posuere. Donec tristique sit amet purus ut vestibulum. Vivamus enim ligula, sodales ut orci eget, lobortis vestibulum velit. Praesent ornare malesuada felis, eu placerat est. Sed posuere augue ut imperdiet lacinia. Quisque sed tellus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </section>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
}