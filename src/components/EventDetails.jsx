import { venue, schedule } from "../weddingData"
import Divider from "./Divider"
import Reveal from "./Reveal"
import LeafSprig from "./LeafSprig"
import Card from "./Card"

function EventDetails() {
  return (
    <section id="details" className="px-6 py-28 bg-forest text-center">
      <Reveal>
        <LeafSprig className="mx-auto h-16 w-auto text-gold/40 mb-4" />
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-cream/60 mb-3">
          Join Us
        </p>
        <h2 className="font-script text-gold text-6xl sm:text-7xl mb-5">
          Event Details
        </h2>
        <Divider tone="light" className="mb-14" />

        <p className="font-display text-cream text-2xl sm:text-3xl">{venue.name}</p>
        <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/70 mb-14">
          {venue.address}
        </p>

        <div className="max-w-md mx-auto">
          {schedule.map((item) => (
            <Card key={item.title} tone="light" className="px-14 py-14 sm:px-20 sm:py-16">
              <p className="font-script text-gold text-5xl sm:text-6xl mb-4">{item.title}</p>
              <p className="uppercase tracking-[0.35em] text-base sm:text-lg text-cream/80">
                {item.time}
              </p>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default EventDetails
