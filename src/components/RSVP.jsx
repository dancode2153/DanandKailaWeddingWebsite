import { rsvp } from "../weddingData"
import Divider from "./Divider"

function RSVP() {
  return (
    <section id="rsvp" className="px-6 py-24 max-w-xl mx-auto text-center">
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
        Will You Join Us
      </p>
      <h2 className="font-script text-forest text-5xl sm:text-6xl mb-8">RSVP</h2>

      <p className="text-charcoal/80 leading-relaxed mb-10">
        It would mean so much to us if you and your loved ones could join us on
        our special day. Please RSVP by {rsvp.deadline} so we can plan the best
        experience for everyone.
      </p>

      <p className="uppercase tracking-[0.2em] text-sm text-charcoal/70 mb-6">
        Please scan the QR code below to confirm your attendance.
      </p>

      <div className="inline-block bg-white p-4 border border-stone/40 mb-10">
        <img src={rsvp.qrCode} alt="RSVP QR code" className="w-56 h-56" />
      </div>

      <Divider tone="dark" className="mb-8" />

      <p className="font-script text-forest text-2xl sm:text-3xl leading-snug">
        We look forward to celebrating this special day with you!
      </p>
    </section>
  )
}

export default RSVP
