import HeroSlider from "./HeroSlider.jsx";
import WritingsSlider from "./WritingsSlider.jsx";
import RecordingsSlider from "./RecordingsSlider.jsx";
import Newsletter from "./Newsletter.jsx";
import HomeDesktop from "./HomeDesktop.jsx";
import HomeMobile from "./HomeMobile.jsx";

export default function Home() {
  
  return (
    <div className="container">
      {/* POEM TICKER */}
      <section className="ticker">
        <div className="ticker__inner">
          <span className="ticker__item">A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean • A symphony without director • Orca-sonic Architecture • The myth-story of Water-Earth • Is an invention of the pod • In the mo(ve)ment of the ocean</span>
        </div>
      </section>
      {/* HERO TEXT  */}
      <section className="hero-text">
        <p>Interspecies was a nonprofit organization active from 1979 - 2014, founded by writer and composer Jim Nollman. Interspecies work focused on developing wilderness programs for working artists to co-create an aesthetic based on communicating with animals and habitat.</p>
      </section>
      {/* HERO IMAGE CAROUSEL  */}
      <HeroSlider interval={6000} />
      {/* WRITINGS  */}
      <section className="section-block">
        <div className="section-header">
          <h2>Writings</h2>
          <a href="/writings">View more →</a>
        </div>
        <p className="section-description">
          The Interspecies Communication newsletter was published quarterly for over 25 years. Many articles were later edited and published as books, including <a href="https://www.betterworldbooks.com/product/detail/the-man-who-talks-to-whales-the-art-of-interspecies-communication-9780971078628" target="_blank">The Man Who Talked to Whales</a>, <a href="https://www.betterworldbooks.com/product/detail/spiritual-ecology-a-guide-for-reconnecting-with-nature-9780553348231" target="_blank">Spiritual Ecology</a>, <a href="https://www.betterworldbooks.com/product/detail/why-we-garden-cultivating-a-sense-of-place-9781591810254" target="_blank">Why We Garden</a>, and <a href="https://www.betterworldbooks.com/product/detail/the-beluga-cafe-my-strange-adventure-with-art-music-and-whales-in-the-far-north-9781578050871" target="_blank">The Beluga Cafe</a>, among others. Other articles about the development of a true interspecies music have appeared in numerous published anthologies and publications internationally.
        </p>
      <WritingsSlider />
      </section>
      {/* RECORDINGS  */}
      <section className="section-block">
        <div className="section-header">
          <h2>Music</h2>
          <a href="/music">View more →</a>
        </div>
        <p className="section-description">
          Interspecies musical output includes techno, field recordings, collaborations with turkeys, wolves, and tropical birds, underwater music, old time mandolin, and songs. </p>
           <p className="section-description">
          Recordings have been issued with various labels around the world including Smithsonian Folkways Recordings (<a href="https://folkways.si.edu/playing-music-with-animals-interspecies-communication-of-jim-nollman-with-300-turkeys-12-wolves-and-20-orcas/contemporary-electronic-sounds/album/smithsonian" target="_blank">Playing Music with Animals</a>), Other Minds (<a href="https://webstore.otherminds.org/collections/the-jim-nollman-collection/products/jim-nollman-music-for-swimming-and-flying-1" target="_blank">Music for Swimming and Flying</a>), and Rural Situationism (<a href="https://ruralsituationism.bandcamp.com/track/oropendola" target="_blank">Oropendola</a>), as well as numerous compilations and self-released collections.
        </p>
        <RecordingsSlider />
      </section>
      {/* SUPPORT / NEWSLETTER  */}
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