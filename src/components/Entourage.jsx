import { entourage } from "../weddingData"
import Divider from "./Divider"

function Role({ label, names, tone = "dark" }) {
  const labelColor = tone === "light" ? "text-gold" : "text-forest"
  const nameColor = tone === "light" ? "text-cream/90" : "text-charcoal/80"

  return (
    <div className="text-center">
      <p className={`font-script text-2xl sm:text-3xl mb-2 ${labelColor}`}>{label}</p>
      {names.map((name) => (
        <p key={name} className={`uppercase tracking-[0.15em] text-sm ${nameColor}`}>
          {name}
        </p>
      ))}
    </div>
  )
}

function Entourage() {
  return (
    <>
      <section id="entourage" className="px-6 py-24 bg-cream text-center">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
          With Joyful Hearts
        </p>
        <h2 className="font-script text-forest text-5xl sm:text-6xl mb-4">
          Our Entourage
        </h2>
        <Divider tone="dark" className="mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto mb-16">
          <Role label="Parents of the Groom" names={entourage.parentsOfGroom} />
          <Role label="Parents of the Bride" names={entourage.parentsOfBride} />
        </div>

        <p className="font-script text-forest text-3xl sm:text-4xl mb-10">
          Principal Sponsors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-1 max-w-3xl mx-auto mb-16">
          <div className="flex flex-col gap-1">
            {entourage.principalSponsors.left.map((name) => (
              <p key={name} className="uppercase tracking-[0.1em] text-sm text-charcoal/80">
                {name}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1">
            {entourage.principalSponsors.right.map((name) => (
              <p key={name} className="uppercase tracking-[0.1em] text-sm text-charcoal/80">
                {name}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto mb-16">
          <Role label="Best Man" names={[entourage.bestMan]} />
          <Role label="Maid of Honor" names={[entourage.maidOfHonor]} />
        </div>

        <p className="font-script text-forest text-3xl sm:text-4xl mb-10">
          Secondary Sponsors
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto mb-10">
          <Role label="Candle" names={entourage.secondarySponsors.candle} />
          <Role label="Cord" names={entourage.secondarySponsors.cord} />
        </div>
        <div className="max-w-md mx-auto mb-16">
          <Role label="Veil" names={entourage.secondarySponsors.veil} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
          <Role label="Groomsmen" names={entourage.groomsmen} />
          <Role label="Bridesmaids" names={entourage.bridesmaids} />
        </div>
      </section>

      <section className="px-6 py-24 bg-gradient-to-b from-forest-dark via-forest to-forest-dark">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-3xl mx-auto">
          <Role label="Bible Bearer" names={[entourage.bibleBearer]} tone="light" />
          <Role label="Coin Bearer" names={[entourage.coinBearer]} tone="light" />
          <Role label="Ring Bearer" names={[entourage.ringBearer]} tone="light" />
        </div>
        <div className="mt-12 max-w-md mx-auto">
          <Role label="Flower Girls" names={entourage.flowerGirls} tone="light" />
        </div>
      </section>
    </>
  )
}

export default Entourage
