'use client';

import { useState, useEffect } from 'react';

import Discography from "../components/Discography";
import AlbumFootnote from '../components/AlbumFootnote';

export default function Music() {

    const [isOpen,setIsOpen] = useState(false);
    const [activeFootnote, setActiveFootnote] = useState("")
  
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
  
  return (
    <>
      <section className="section-block" id="music">
        <div className="section-header">
          <h2>Music</h2>
        </div>
        <p className="section-description">
          Interspecies musical output includes techno, field recordings, collaborations with turkeys, wolves, and tropical birds, underwater music, old time mandolin, and songs. </p>
            <p className="section-description">
          Recordings have been issued with various labels around the world including Smithsonian Folkways Recordings, Other Minds, and Rural Situationism, as well as numerous compilations and self-released collections.
        </p>
      {/* </section>
      <section className='section-block'>
        <div className="section-header">
          <h2>Discography</h2>
        </div> */}
        <Discography onItemClick={albumClick} />
      </section>
      <section className='section-block'>
        <div className="section-header">
          <h2>Musical Philosophy</h2>
        </div>
        <p className="section-description">As far back as Genesis, western Man has nearly always depicted the animals as something less than human; placed upon the Earth for man's utility and enjoyment. But what was, at best, a dubious ethic for the ancients; as of late, with the advent of overpopulation and technological proliferation, become our very undoing. We humans are a species in control of our environment; yet seriously out of sync with the currents of the Natural Order. Lately we have been directly responsible for sending species after species into the oblivion of extinction, without a clue about how to halt the descending spiral.
        </p>
        <p className="section-description">Over the past twenty years, as the environmental movement gained steam, many of us have become quite aware that something drastic must be done. Yet all too often the activities of the various organizations flying the environmental banner seem like so many Dutch boys with a finger in the dike as water pours over him from above. Short-term animal saving campaigns certainly postpone the slaughters of the moment, but all too often offer no long- term solutions or even much hope. They purvey gloom. Certainly we need to continue such campaigns; after all they do save particular species during a period of crisis. But concomitantly, we need to develop all-encompassing educational tools which will effectively alter Mankind's attitude towards the animals. We need a universal Ethic, and we need it now; so that the next generations may replenish the world of their forebears.
        </p>
        <p className="section-description">Perhaps the most farsighted and accurate environmental Ethic is that known as Interdependence. Simply defined: all of the species, resources, and functions of the Earth aid and abet the growth and continuity of all the rest. Life on Earth is thus a complex web of interdependent causes and effects. Poison the insects and you kill the fish, the soil , and the predatory birds. Eventually, giVen enough time, Man himself, succumbs. That is the bad news of Interdependence. But there is also much good news.
        </p>
        <p className="section-description">Since all the creatures are interdependent with us as well as with one another, we must begin to meet and acknowledge them with a bit more dignity than humanity has ever yet considered. Within this worldview, Man is no longer the crown of creation – nature itself is the crown. Likewise, eVery creature possesses an independent intelligence separate from, yet totally integrated with human intelligence. The world itself can only be perceived as a unity upon which we all live and die, grow and collaborate. Buckminster Fuller has rightly called it "Spaceship Earth".
        </p>
        <p className="section-description">If these ideas at first seem a bit overblown and even precious, remember that Interdependence is the very cornerstone of natural law. If this law can somehow be transmuted into a human societal ethic, it becomes an important tool for forever altering the destructive course of modern exploiting human society. Likewise, any activity which promotes the interdependent worldview demands serious consideration and promotion. 
        </p>
        <p className="section-description">Interspecies Music as developed by Jim Nollman, clearly promotes an interdependent relationship with the creatures of planet Earth. Music is communication; certainly more universally understood than any single human language, and, arguably, as profound. Interspecies music expresses the clear and simple example of humans attempting to communicate directly with other living creatures. Like any music it communicates the energy exchange of harmony. And like any successful harmony, the exchange is sustained as long as the participants coexist in the here and now.
        </p>
        <p className="section-description">What this suggests in actual practice is that the human must first acknowledge the other animal as his or her equal. In many cases the human must sit with the animal as a student sits with a teacher. Interspecies music is certainly one of the most direct methods yet developed within the framework of human artistic endeavor, for expressing the crucial ethic of interdependence.
        </p>
        {/* <p className="section-description">
          "Interspecies Music", by Jim Nollman
          <br />from Issue of the Interspecies Newsletter
        </p> */}
        <p className="section-description">
          <img className="philosophy" src="https://05ec48578e12534030.temporary.link/interspecies/philosophy.jpg" ></img>
        </p>
      </section>
      <AlbumFootnote open={isOpen} onClose={() => setIsOpen(false)} footnote={activeFootnote} />
    </>
  );
}