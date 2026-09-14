import { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Entourage from "../components/Entourage"

function EntouragePage() {
  useEffect(() => {
    document.title = "Entourage | Dan & Kaila"
  }, [])

  return (
    <>
      <Navbar />
      <Entourage />
      <div className="px-6 py-16 bg-cream text-center">
        <Link
          to="/"
          className="inline-block px-8 py-3 border border-charcoal text-charcoal uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
        >
          Back to Main Site
        </Link>
      </div>
    </>
  )
}

export default EntouragePage
