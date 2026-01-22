'use client';

import { useState, useEffect } from 'react';
import Footnote from '../components/Footnote.jsx';

export default function Support() {
    const [isOpen,setIsOpen] = useState(false);
    const [activeFootnote, setActiveFootnote] = useState("")

    const footnotes = [
        {
            "title": "Jim Nollman",
            "media_type": "image",
            "media_link": "https://05ec48578e12534030.temporary.link/interspecies/nollman.jpg",
            "info": ["Jim Nollman is an American composer of music for theatre, a conceptual artist, and an environmental activist. He graduated from Tufts University in 1969.", "In 1973, he composed a Thanksgiving Day radio piece and recorded himself singing children's songs with three hundred turkeys. He has recorded interspecies music with various other animals. He released several albums on Folkways Records, including Playing Music with Animals: Interspecies Communication of Jim Nollman with 300 Turkeys, 12 Wolves and 20 Orcas.", "Nollman directed one of Greenpeace's first overseas projects, at Iki Island, Japan, where fishermen were slaughtering dolphins to compensate for human overfishing. In 1978, Nollman founded Interspecies, which sponsors artists' efforts to communicate with animals through music and art. Its best-known project is a twenty-five-year study using live music to interact with wild orcas off the west coast of Canada."],
            "source": "Wikipedia",
            "external_link": "https://en.wikipedia.org/wiki/Jim_Nollman"
        },
        {
            "title": "The Smithsonian Institution",
            "media_type": "image",
            "media_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Smithsonian_Castle_Doorway.jpg/960px-Smithsonian_Castle_Doorway.jpg",
            "info": ["The Smithsonian Institution is the world’s largest museum, education, and research complex, with 21 museums, 14 education and research centers, and the National Zoo—shaping the future by preserving heritage, discovering new knowledge, and sharing our resources with the world.", "The Institution was founded in 1846 with funds from the Englishman James Smithson (1765–1829) according to his wishes “under the name of the Smithsonian Institution, an establishment for the increase and diffusion of knowledge.” We continue to honor this mission and invite you to join us in our quest."],
            "source": "Smithsonian Institution",
            "external_link": "https://www.si.edu/"
        },
        {
            "title": "Internet Archive",
            "media_type": "image",
            "media_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Internet_Archive_servers_5034_-_Jason_Scott.jpg/1280px-Internet_Archive_servers_5034_-_Jason_Scott.jpg",
            "info": ["The Internet Archive is an American non-profit library that runs a digital library website, archive.org.  It provides free access to collections of digitized media including websites, software applications, music, audiovisual, and print materials. The Archive also advocates a free and open Internet. Its mission is to provide \"universal access to all knowledge\".", "The Internet Archive allows the public to upload and download digital material to its data cluster, but the bulk of its data is collected automatically by its web crawlers, which work to preserve as much of the public web as possible. The Wayback Machine, its web archive, contains more than 1 trillion web captures. The Archive also oversees numerous book digitization projects, collectively one of the world's largest book digitization efforts."],
            "source": "Wikipedia",
            "external_link": "https://archive.org/about/"
        },
        {
            "title": "Cactus Store",
            "media_type": "image",
            "media_link": "https://cactus.store/cdn/shop/files/IMG_2515.jpg?v=1641858603&width=1100",
            "info": ["Cactus Store is a plant-owned human-operated studio based in Los Angeles, California that explores the cracks between disciplines, in a Sisyphean attempt to broker better plant/human relationships on a burning Earth."],
            "source": "Cactus Store",
            "external_link": "https://cactus.store/"
        },
        {
            "title": "WSDOT",
            "media_type": "image",
            "media_link": "https://townsquare.media/site/1137/files/2025/09/attachment-north-cascades-highway-via-canva.jpg",
            "info": ["The Washington State Department of Transportation (WSDOT or WashDOT) is a governmental agency that constructs, maintains, and regulates the use of transportation infrastructure in the U.S. state of Washington.","Established in 1905, it is led by a secretary and overseen by the governor. WSDOT is responsible for more than 20,000 lane-miles of roadway, nearly 3,000 vehicular bridges and 524 other structures.",  "This infrastructure includes rail lines, state highways, state ferries (considered part of the highway system) and state airports."],
            "source": "Wikipedia",
            "external_link": "https://wsdot.wa.gov/"
        },
        {
            "title": "The Orca Inn",
            "media_type": "image",
            "media_link": "https://content.r9cdn.net/rimg/himg/ba/ce/75/agoda-629881-109661944-688561.jpg",
            "info": ["The Orca Inn is a budget-friendly, modest motel in Friday Harbor, San Juan Islands, Washington.", "The inn is known for its convenient location near downtown and the Friday Harbor waterfront, offering basic amenities like free Wi-Fi, mini-fridges, and microwaves in small, clean rooms, and serving as a practical base for visitors exploring the islands, with some units even having historic roots from oil spill cleanup efforts."],
            "source": "The Orca Inn",
            "external_link": "https://www.orcainnwa.com/"
        },
        {
            "title": "Friday Harbor, WA",
            "media_type": "image",
            "media_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aerial_Friday_Harbor_Washington_August_2009.jpg/1280px-Aerial_Friday_Harbor_Washington_August_2009.jpg",
            "info": ["Friday Harbor is a town in San Juan County, Washington, United States.", "Located on San Juan Island in the Puget Sound, Friday Harbor is the major commercial center of the San Juan Islands archipelago and is the county seat of San Juan County.", "With a total are of roughly 2 square miles, the town is located on the east side of San Juan Island facing the San Juan Channel and, as of the 2010 United States census, has a population of 2,162."],
            "source": "Wikipedia",
            "external_link": "https://en.wikipedia.org/wiki/Friday_Harbor,_Washington"
        },
        {
            "title": "Nonhuman Teachers",
            "media_type": "image",
            "media_link": "https://05ec48578e12534030.temporary.link/nht/pages/nht-group-photo.jpg",
            "info": ["Nonhuman Teachers is a 501(c)(3) nonprofit organization that takes a new approach to ecological storytelling, blending science, art, and the imagination to help deepen the relationship between humans and the natural world.", "Through multidisciplinary public programming, immersive botanical spaces, and new nature media, Nonhuman Teachers aims to ignite a sense of wonder about the rapidly changing Earth, not only to make humans better stewards of the planet but to help imagine it differently."],
            "image-credit": "Nonhuman Teachers",
            "source": "Nonhuman Teachers",
            "external_link": "https://nonhumanteachers.org/about"
        },
        {
            "title": "Rhizome",
            "media_type": "image",
            "media_link": "https://d1v7jayx2s9clc.cloudfront.net/user/pages/47.the-world-in-24-hours/Bosma%20D%20bfb26b513b7a640448c79c3bdd6d2bb0.jpg",
            "info": ["Rhizome is a 501(c)3 organization that champions born-digital art and culture through commissions, exhibitions, scholarship, and digital preservation. Founded by artist Mark Tribe as an email discussion list including some of the first artists to work online, Rhizome has played an integral role in the history of contemporary art engaged with digital technologies and the internet.", "Since 2003, Rhizome has been an affiliate in residence at the New Museum of Contemporary Art in New York City. Founded in 1977, the New Museum is a leading destination for new art and new ideas. Together, New Museum, Rhizome, and NEW INC, the first museum-led incubator founded by New Museum in 2014, explore the future of contemporary art and technology."],
            "image-credit": "Rhizome",
            "source": "Rhizome",
            "external_link": "https://rhizome.org/about/"
        },
    ]
    
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
            <section className="section-block-support" id="support">
                <div className="section-header">
                    <h2>Support</h2>
                </div>
                <section className="hero-text-bottom">
                    <p>The goal of Interspecies focused on developing wilderness programs for working artists to co-create and expand upon an aesthetic based on communicating and collaborating with animals, habitat, and the natural world.
                    </p>
                    <p>While Interspecies is no longer active, the organization's pioneering approach to the arts has finally entered the mainstream. Its practitioners are now abundant. Please consider supporting the artists, scientists, researchers, activists, and indigenous communities continuing this important work. For more information, email <a href="mailto:beluga@interspecies.com">beluga@interspecies.com</a>.</p> 
                    <p>Special thanks to <span className="footnote" onClick={()=>footnoteClick("Jim Nollman")}>Jim and Katy Nollman</span>, <span className="footnote" onClick={()=>footnoteClick("The Smithsonian Institution")}>The Smithsonian Institution</span>, <span className="footnote" onClick={()=>footnoteClick("Internet Archive")}>Internet Archive</span>, <span className="footnote" onClick={()=>footnoteClick("Cactus Store")}>Cactus Store</span>, the <span className="footnote" onClick={()=>footnoteClick("WSDOT")}>Washington State Department of Transportation</span>, <span className="footnote" onClick={()=>footnoteClick("The Orca Inn")}>The Orca Inn</span>, and the fine people of <span className="footnote" onClick={()=>footnoteClick("Friday Harbor, WA")}>Friday Harbor</span> for their invaluable contributions, guidance, and hospitality.</p>
                    <p>This site and archive was designed and executive produced by <span className="nht-text" onClick={()=>footnoteClick("Nonhuman Teachers")}>Nonhuman Teachers</span> with the generous support of <span className="rhizome-text" onClick={()=>footnoteClick("Rhizome")}>Rhizome</span>.
                    </p>
                </section>
            </section>
            <Footnote open={isOpen} onClose={() => setIsOpen(false)} footnote={activeFootnote} />
        </>
    )
}