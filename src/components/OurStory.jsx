import { ourStory } from "../weddingData"
import Divider from "./Divider"

function OurStory() {
  return (
    <section id="story" className="px-6 py-24 bg-cream">
      <div className="text-center mb-14">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
          Before We Say I Do
        </p>
        <h2 className="font-script text-forest text-5xl sm:text-6xl mb-4">
          Our Love Story
        </h2>
        <Divider tone="dark" />
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {ourStory.map((paragraph, i) => (
          <p
            key={i}
            className="font-serif italic text-lg sm:text-xl text-charcoal/80 leading-relaxed text-center"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default OurStory
