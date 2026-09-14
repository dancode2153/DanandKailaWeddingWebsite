import { registry } from "../weddingData"
import Divider from "./Divider"
import Reveal from "./Reveal"
import Button from "./Button"
import LeafSprig from "./LeafSprig"

function Registry() {
  return (
    <section id="registry" className="px-6 py-28 bg-stone/20 text-center">
      <Reveal className="max-w-3xl mx-auto">
        <LeafSprig className="mx-auto h-16 w-auto text-sage-dark/60 mb-4" />
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sage-dark mb-3">
          With Gratitude
        </p>
        <h2 className="font-script text-forest text-6xl sm:text-7xl mb-5">Registry</h2>
        <Divider tone="dark" className="mb-8" />
        <p className="text-charcoal/70 mb-12 leading-relaxed font-serif italic text-lg">
          Your presence at our wedding is the greatest gift of all. For those who
          wish to give something more, we've included a few registry links below.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {registry.map((r) => (
            <Button key={r.name} href={r.url} external>
              {r.name}
            </Button>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Registry
