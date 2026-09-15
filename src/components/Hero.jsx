import { couple, weddingDate, venue } from "../weddingData"
import Divider from "./Divider"
import CornerFrame from "./CornerFrame"
import Button from "./Button"
import FloralAccent from "./FloralAccent"

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
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden bg-forest"
    >
      <CornerFrame tone="light" size="w-10 h-10" className="inset-6 sm:inset-10" />
      <div className="pointer-events-none absolute inset-6 sm:inset-10 border border-gold/15" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[560px] sm:w-[520px] sm:h-[680px] rounded-[50%] border border-gold/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[610px] sm:w-[570px] sm:h-[740px] rounded-[50%] border border-gold/10"
      />

      <FloralAccent
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -left-6 h-40 sm:h-56 w-auto text-[#EDE6D8]/25 rotate-[8deg]"
      />
      <FloralAccent
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -right-4 h-28 sm:h-40 w-auto text-[#EDE6D8]/20 rotate-[195deg] scale-x-[-1]"
      />

      <div className="relative animate-[fade-in_1.2s_ease-out]">
        <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-cream/70 mb-7">
          The Wedding Of
        </p>

        <h1 className="leading-[0.95]">
          <span className="block font-script text-gold text-6xl sm:text-8xl">
            {couple.partner1First} {couple.partner1Last}
          </span>
          <span className="block font-script text-cream/80 text-2xl sm:text-3xl my-1">
            and
          </span>
          <span className="block font-script text-gold text-6xl sm:text-8xl">
            {couple.partner2First} {couple.partner2Last}
          </span>
        </h1>

        <p className="mt-9 text-sm sm:text-base uppercase tracking-[0.4em] text-cream">
          {formatted}
        </p>

        <Divider tone="light" className="my-9" />

        <p className="text-xs uppercase tracking-[0.4em] text-cream/60 mb-3">
          Ceremony &amp; Reception
        </p>
        <p className="font-script text-gold text-3xl sm:text-4xl">{venue.name}</p>
        <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/70">
          {venue.address}
        </p>

        <Button href="#rsvp" tone="light" className="mt-16">
          RSVP
        </Button>
      </div>
    </section>
  )
}

export default Hero
