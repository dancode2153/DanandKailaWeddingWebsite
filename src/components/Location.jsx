import { venue, venueImages } from "../weddingData"
import Divider from "./Divider"

function Location() {
  const mapQuery = encodeURIComponent(venue.mapQuery)

  return (
    <section id="location" className="px-6 py-24 max-w-5xl mx-auto bg-cream text-center">
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
        Find Us
      </p>
      <h2 className="font-script text-forest text-5xl sm:text-6xl mb-4">
        The Venue
      </h2>
      <Divider tone="dark" className="mb-8" />

      <p className="font-display text-2xl sm:text-3xl text-charcoal">{venue.name}</p>
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-charcoal/60 mb-12">
        {venue.address}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {venueImages.map((src, i) => (
          <div
            key={src}
            className="aspect-[4/3] overflow-hidden border border-stone/50"
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

      <div className="border border-stone/50 overflow-hidden">
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

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block px-8 py-3 border border-charcoal text-charcoal uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
      >
        Get Directions
      </a>
    </section>
  )
}

export default Location
