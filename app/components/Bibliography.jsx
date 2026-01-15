export default function Bibliography({ onItemClick }) {
    const items = [
        {
            id: "dolphin-dreamtime",
            author: "Jim Nollman",
            title: "Dolphin Dreamtime",
            subtitle: "The Art and Science of Interspecies Communication",
            publisher: "Random House Publishing Group",
            year: 1987,
            isbn: "978-0553344271",
            coverSrc: "https://05ec48578e12534030.temporary.link/interspecies/bibliography/dolphin-dreamtime.jpg",
            href: "https://www.betterworldbooks.com/product/detail/dolphin-dreamtime-the-art-and-science-of-inter-species-communication-9780553344271",
            description: "From a \"jam session\" with howler monkeys in the Panamanian jungle to \"dancing\" with dolphins off the coast of Australia and gray whales off northern California, Dolphin Dreamtime offers dramatic examples of our evolving relationship with the animal kingdom and draws on ecology, zoology, mythology, and shamanism to challenge us to rethink our ideas about animal consciousness.",
        },
        {
            id: "spiritual-ecology",
            author: "Jim Nollman",
            title: "Spiritual Ecology",
            subtitle: "A Guide for Reconnecting with Nature",
            publisher: "Random House Publishing Group",
            year: 1990,
            isbn: "978-0553348231",
            coverSrc: "https://05ec48578e12534030.temporary.link/interspecies/bibliography/spiritual-ecology.jpg",
            href: "https://www.betterworldbooks.com/product/detail/spiritual-ecology-a-guide-for-reconnecting-with-nature-9780553348231",
            description: "Ranging from the psychic to the mythic, from humanistic fact to scientific faux pas - \"Spiritual Ecology\" will shock, provoke, and reawaken all readers to the marvels of the natural world. Written in the philosophical tradition of ecologists John Muir, Rachel Carson, and Henry David Thoreau, poetic and prophetic, this book helps the reader to see the earth better: through the soul of our living planet.",
        },
        
        {
            id: "why-we-garden",
            author: "Jim Nollman",
            title: "Why We Garden",
            subtitle: "Cultivating a Sense of Place",
            publisher: "Henry Holt & Company",
            year: 1996,
            isbn: "978-0805045611",
            coverSrc: "https://05ec48578e12534030.temporary.link/interspecies/bibliography/why-we-garden.jpg",
            href: "https://www.betterworldbooks.com/product/detail/why-we-garden-cultivating-a-sense-of-place-9781591810254",
            description: "This work explores the deep human impulse to cultivate living landscapes, remembering who we are through our relationships with plants, soil, and seasons. Drawing on personal experience, cultural history, and ecological insight, Jim Nollman reflects on gardening not merely as a hobby or aesthetic pursuit, but as a form of communication with the more-than-human world. Moving between backyards, ancient traditions, and philosophical inquiry, the book asks why tending plants continues to matter in an increasingly technological age—and how gardens can reconnect us to patience, reciprocity, and a sense of belonging within the living systems that sustain us.",
        },
        {
            id: "the-charged-border",
            author: "Jim Nollman",
            title: "The Charged Border",
            subtitle: "Where Whales and Humans Meet",
            publisher: "Henry Holt & Company",
            year: 1999,
            isbn: "978-0805055238",
            coverSrc: "https://05ec48578e12534030.temporary.link/interspecies/bibliography/the-charged-border.jpg",
            href: "https://www.betterworldbooks.com/product/detail/the-charged-border-where-whales-and-humans-meet-9780805055238",
            description: "Exploring the invisible yet potent boundary between human intention and the natural world, this book describes encounters with animals, landscapes, and cultures where communication across species lines is tentatively attempted. Through travel, reflection, and firsthand experimentation, it examines moments of connection and misunderstanding, and the ethical tensions that emerge when humans seek dialogue with other beings. Rather than treating the divide between species as a fixed barrier, the narrative frames it as a living interface—one that challenges assumptions about perception, responsibility, and what it means to listen beyond the human world.",
        },
        {
            id: "the-beluga-cafe",
            author: "Jim Nollman",
            title: "The Beluga Café",
            subtitle: "My Strange Adventures with Art, Music, and Whales in the Far North",
            publisher: "Sierra Club Books",
            year: 2002,
            isbn: "978-1578050871",
            coverSrc: "https://05ec48578e12534030.temporary.link/interspecies/bibliography/beluga-cafe.jpg",
            href: "https://www.betterworldbooks.com/product/detail/the-beluga-cafe-my-strange-adventure-with-art-music-and-whales-in-the-far-north-9781578050871",
            description: "Traveling the expanses of Canada's vast Mackenzie Delta, three friends unwittingly find themsleves at the center of a heated controversy over the Beaufort Sea beluga whales. Why have the whales stopped coming into the delta, possibly jeopardizing their own calves, who live the first part of their lives in these shallow, warm waters? As they attempt to unravel the mystery, they encounter various intriguing characters now laying claim to the resources  of the Mackenzie Delta - Native people (who are allowed to hunt the whales), wildlife officials, and oil company engineers - and experience the eye-opening wonders and harsh realities of living deep in the wilderness.",
        },
        {
            id: "the-man-who-talks-to-whales",
            author: "Jim Nollman",
            title: "The Man Who Talks to Whales",
            subtitle: "The Art of Interspecies Communication",
            publisher: "Sentient Publications",
            year: 2004,
            isbn: "978-0971078628",
            coverSrc: "https://05ec48578e12534030.temporary.link/interspecies/bibliography/the-man-who-talks-to-whales.jpg",
            href: "https://www.betterworldbooks.com/product/detail/the-man-who-talks-to-whales-the-art-of-interspecies-communication-9780971078628",
            description: "Following a series of remarkable encounters between humans and whales, \"The Man Who Talks to Whales\" traces Nollman's long-term efforts to communicate across one of the most profound species divides on Earth. Through fieldwork, experimentation, and close observation, it documents attempts to listen, respond, and improvise within the acoustic worlds of whales, raising questions about intention, intelligence, and mutual recognition. Moving between science, music, and lived experience at sea, the narrative challenges conventional ideas about communication and invites readers to reconsider humanity’s relationship with highly sentient beings whose voices have traveled the oceans long before our own. This book is an expanded version of Nollman's 1997 book \"Dolphin Dreamtime\".",
        },
    ];

  return (
    <section className="bibliography">
      <div className="bibliography-grid">
        {items.map((item) => (
            <div key={item.id}>
                <div className="bibliography-coverWrap">
                    <img src={item.coverSrc} alt={`${item.title}`} loading="lazy" decoding="async" className="bibliography-cover" onClick={() => onItemClick?.(item)} />
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}