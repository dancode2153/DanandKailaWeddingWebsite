import { attireGuide, giftGuide } from "../weddingData"
import Divider from "./Divider"

function FinerDetails() {
  return (
    <section id="finer-details" className="px-6 py-24 bg-cream text-center">
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
        Please Note
      </p>
      <h1 className="font-script text-forest text-5xl sm:text-6xl mb-4">
        The Finer Details
      </h1>
      <Divider tone="dark" className="mb-16" />

      <p className="font-script text-forest text-3xl sm:text-4xl mb-10">
        Attire Guide
      </p>
      <p className="uppercase tracking-[0.25em] text-sm text-charcoal mb-4">
        Principal Sponsors
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-16 text-charcoal/80">
        <p>
          <span className="uppercase tracking-[0.15em] text-sm text-sage-dark">Ninang</span>
          <br />
          {attireGuide.principalSponsors.ninang}
        </p>
        <p>
          <span className="uppercase tracking-[0.15em] text-sm text-sage-dark">Ninong</span>
          <br />
          {attireGuide.principalSponsors.ninong}
        </p>
      </div>

      <img
        src={attireGuide.principalSponsors.image}
        alt="Principal sponsors attire reference: nude-tone gowns and shirts with black pants"
        className="max-w-full sm:max-w-2xl mx-auto mb-16 border border-stone/40"
      />

      <p className="uppercase tracking-[0.25em] text-sm text-charcoal mb-4">Guests</p>
      <p className="max-w-xl mx-auto text-charcoal/70 leading-relaxed mb-8">
        We kindly request and encourage our guests to wear these colors for our
        special day.
      </p>
      <div className="flex justify-center items-center gap-6 mb-16">
        {attireGuide.guestColors.map((group, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="flex gap-2">
              {group.map((color) => (
                <span
                  key={color}
                  className="w-10 h-10 rounded-full border border-stone/40"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            {i < attireGuide.guestColors.length - 1 && (
              <span className="h-10 w-px bg-stone/40" />
            )}
          </div>
        ))}
      </div>

      <p className="font-script text-forest text-3xl sm:text-4xl mb-8">Gift Guide</p>
      <div className="max-w-xl mx-auto flex flex-col gap-6">
        {giftGuide.map((paragraph, i) => (
          <p
            key={i}
            className="font-serif italic text-lg text-charcoal/80 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export default FinerDetails
