import { venue, venueImages } from "../weddingData"
import Divider from "./Divider"
import Reveal from "./Reveal"
import Button from "./Button"
import LeafSprig from "./LeafSprig"

function Location() {
  const mapQuery = encodeURIComponent(venue.mapQuery)

  return (
    <section id="location" className="px-6 py-28 max-w-5xl mx-auto bg-cream text-center">
      <Reveal>
        <LeafSprig className="mx-auto h-16 w-auto text-sage/70 mb-4" />
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
          Find Us
        </p>
        <h2 className="font-script text-forest text-6xl sm:text-7xl mb-5">
          The Venue
        </h2>
        <Divider tone="dark" className="mb-8" />

        <p className="font-display text-2xl sm:text-3xl text-charcoal">{venue.name}</p>
        <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-charcoal/60 mb-14">
          {venue.address}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {venueImages.map((src, i) => (
            <div
              key={src}
              className="aspect-[4/3] overflow-hidden border border-stone/50 shadow-[0_18px_40px_-24px_rgba(52,43,28,0.35)] transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`${venue.name} ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="border border-stone/50 overflow-hidden shadow-[0_18px_40px_-24px_rgba(52,43,28,0.35)]">
          <iframe
            title={`Map to ${venue.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Button
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          external
          className="mt-10"
        >
          Get Directions
        </Button>
      </Reveal>
    </section>
  )
}

export default Location
