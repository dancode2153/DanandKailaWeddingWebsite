import { venue, schedule } from "../weddingData"
import Divider from "./Divider"

function EventDetails() {
  return (
    <section
      id="details"
      className="px-6 py-24 bg-gradient-to-b from-forest-dark via-forest to-forest-dark text-center"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cream/60 mb-3">
        Join Us
      </p>
      <h2 className="font-script text-gold text-5xl sm:text-6xl mb-4">
        Event Details
      </h2>
      <Divider tone="light" className="mb-12" />

      <p className="font-display text-cream text-2xl sm:text-3xl">{venue.name}</p>
      <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/70 mb-12">
        {venue.address}
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 max-w-2xl mx-auto">
        {schedule.map((item) => (
          <div key={item.title} className="flex-1">
            <p className="font-script text-gold text-3xl mb-2">{item.title}</p>
            <p className="uppercase tracking-[0.3em] text-sm text-cream/80">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventDetails
