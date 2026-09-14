import { registry } from "../weddingData"
import Divider from "./Divider"

function Registry() {
  return (
    <section id="registry" className="px-6 py-24 bg-stone/20 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
          With Gratitude
        </p>
        <h2 className="font-script text-forest text-5xl sm:text-6xl mb-4">Registry</h2>
        <Divider tone="dark" className="mb-8" />
        <p className="text-charcoal/70 mb-12 leading-relaxed font-serif italic text-lg">
          Your presence at our wedding is the greatest gift of all. For those who
          wish to give something more, we've included a few registry links below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {registry.map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-charcoal text-charcoal uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
            >
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Registry
