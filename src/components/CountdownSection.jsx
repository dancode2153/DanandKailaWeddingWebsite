import { weddingDate } from "../weddingData"
import Countdown from "./Countdown"

function CountdownSection() {
  return (
    <section id="countdown" className="px-6 py-20 bg-stone/20 text-center">
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-2">
        Counting the days before we say
      </p>
      <p className="font-script text-forest text-5xl sm:text-6xl mb-10">I Do</p>
      <Countdown targetDate={weddingDate} />
    </section>
  )
}

export default CountdownSection
