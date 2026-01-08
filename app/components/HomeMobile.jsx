import Ticker from "./Ticker.jsx";
import HeroSlider from "./HeroSlider.jsx";
import History from "./HistoryMobile.jsx";
import Newsletter from "./Newsletter.jsx";

export default function HomeMobile() {
  return (
    <div className="container">
      {/* POEM TICKER */}
      <Ticker />
      {/* HERO TEXT  */}
      <section className="hero-text">
        <p>Interspecies was a nonprofit organization active from 1979-2014, founded by writer and composer Jim Nollman. Interspecies work focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating with animals and habitat.</p>
      </section>
      <HeroSlider interval={6000} />
      <History />
      <section className="section-block">
        <div className="section-header">
          <h2>Support</h2>
          <a href="/support">View more →</a>
        </div>
          <section className="hero-text-bottom">
          <p>
          The goal of Interspecies as a non-profit organization focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating and collaborating with animals, habitat, and the natural world. 
          </p>
          <p>
            While Interspecies is no longer active, this pioneering interactive approach to the arts is now abundant. Please consider supporting some of the organizations continuing this important work.
            </p>
          <p>
            This website serves as a legacy of what once was a vibrant community of artists, scientists, and activists. The <span className="ic-text">interspecies.com</span> archive is proudly brought to you by <span className="nht-text">Nonhuman Teachers</span> with the generous support of <span className="rhizome-text">Rhizome</span>. 
          </p>
      </section>
      </section>
      <section className="section-block">
        <div className="section-header">
          <h2>Contact</h2>
          <a href="/contact">View more →</a>
        </div>
        <section className="hero-text-bottom">
          <p>
          For information about Interspecies and other on-going projects, please subscribe to the Nonhuman Teachers mailing list.
          </p>
          <Newsletter />
        </section>
    </section>
    </div>
  );
}