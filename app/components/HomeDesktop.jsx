import HeroSlider from "./HeroSlider.jsx";
import WritingsSlider from "./WritingsSlider.jsx";
import RecordingsSlider from "./RecordingsSlider.jsx";
import Newsletter from "./Newsletter.jsx";
import HomeDesktop from "./HomeDesktop.jsx";
import HomeMobile from "./HomeMobile.jsx";
import Poem from "./Poem.jsx";
import History from "../history/page.js";
import Writings from "../writings/page.js";
import Music from "../music/page.js"
import Support from "./Support.jsx";

export default function Home() {
  
  return (
    <div className="container">
      <Poem />
      <section className="hero-text">
        <p>Interspecies was a nonprofit organization active from 1979 - 2014 focused on developing wilderness programs that gave artists access to nature with the objective of co-creating an aesthetic based on interactive relationships with wild animals and habitat.</p>
      </section>
      <HeroSlider interval={6000} />
      <History />
      <Writings />
      <Music/>
      <Support></Support>
      <section className="section-block-last" id="contact">
        <div className="section-header">
          <h2>Contact</h2>
        </div>
        <section className="hero-text-bottom">
          <p>
          For information about Interspecies and other on-going projects, please subscribe to the Nonhuman Teachers mailing list.
          </p>
          <Newsletter />
          <p>For comments or questions email <a href="mailto:beluga@interspecies.com">beluga@interspecies.com</a>.</p>
        </section>
    </section>
    </div>
  );
}