import { couple, weddingDate, venue } from "../weddingData"
import Divider from "./Divider"

function Hero() {
  const date = new Date(weddingDate)
  const formatted = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden bg-gradient-to-b from-forest-dark via-forest to-forest-dark"
    >
      <div className="pointer-events-none absolute inset-6 sm:inset-10 border border-gold/30" />

      <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-cream/70 mb-6">
        The Wedding Of
      </p>

      <h1 className="leading-[0.95]">
        <span className="block font-script text-gold text-6xl sm:text-8xl">
          {couple.partner1First}
          <span className="font-display text-cream text-2xl sm:text-3xl tracking-[0.2em] uppercase align-middle ml-3">
            {couple.partner1Last}
          </span>
        </span>
        <span className="block font-script text-cream/80 text-2xl sm:text-3xl my-1">
          and
        </span>
        <span className="block font-script text-gold text-6xl sm:text-8xl">
          {couple.partner2First}
          <span className="font-display text-cream text-2xl sm:text-3xl tracking-[0.2em] uppercase align-middle ml-3">
            {couple.partner2Last}
          </span>
        </span>
      </h1>

      <p className="mt-8 text-sm sm:text-base uppercase tracking-[0.35em] text-cream">
        {formatted}
      </p>

      <Divider tone="light" className="my-8" />

      <p className="text-xs uppercase tracking-[0.35em] text-cream/60 mb-3">
        Ceremony &amp; Reception
      </p>
      <p className="font-script text-gold text-3xl sm:text-4xl">{venue.name}</p>
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/70">
        {venue.address}
      </p>

      <a
        href="#rsvp"
        className="mt-14 inline-block px-10 py-3 border border-gold text-gold uppercase tracking-[0.3em] text-xs hover:bg-gold hover:text-forest-dark transition-colors"
      >
        RSVP
      </a>
    </section>
  )
}

export default Hero
