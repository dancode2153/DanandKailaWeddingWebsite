import { ourStory } from "../weddingData"
import Divider from "./Divider"
import Reveal from "./Reveal"
import LeafSprig from "./LeafSprig"
import RingIcon from "./RingIcon"

function OurStory() {
  return (
    <section id="story" className="px-6 py-28 bg-cream">
      <Reveal className="text-center mb-16">
        <LeafSprig className="mx-auto h-16 w-auto text-sage/70 mb-4" />
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
          Before We Say I Do
        </p>
        <h2 className="font-script text-forest text-6xl sm:text-7xl mb-5">
          Our Love Story
        </h2>
        <RingIcon className="mx-auto h-10 w-auto text-gold mb-5" />
        <Divider tone="dark" />
      </Reveal>

      <Reveal className="max-w-2xl mx-auto flex flex-col gap-6">
        {ourStory.map((paragraph, i) => (
          <p
            key={i}
            className="font-serif italic text-lg sm:text-xl text-charcoal/80 leading-relaxed text-center"
          >
            {paragraph}
          </p>
        ))}
      </Reveal>
    </section>
  )
}

export default OurStory
