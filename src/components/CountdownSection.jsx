import { weddingDate } from "../weddingData"
import Countdown from "./Countdown"
import Reveal from "./Reveal"
import CornerFrame from "./CornerFrame"
import LeafSprig from "./LeafSprig"

function CountdownSection() {
  return (
    <section className="px-6 py-24 bg-stone/20 text-center">
      <Reveal>
        <LeafSprig className="mx-auto h-14 w-auto text-sage-dark/60 mb-3" />
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-2">
          Counting the days before we say
        </p>
        <p className="font-script text-forest text-6xl sm:text-7xl mb-12">I Do</p>

        <div className="relative inline-block px-4 sm:px-16 py-8">
          <CornerFrame tone="dark" size="w-6 h-6" className="inset-0" />
          <Countdown targetDate={weddingDate} />
        </div>
      </Reveal>
    </section>
  )
}

export default CountdownSection
