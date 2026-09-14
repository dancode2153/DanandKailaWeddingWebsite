import { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import FinerDetails from "../components/FinerDetails"

function FinerDetailsPage() {
  useEffect(() => {
    document.title = "The Finer Details | Dan & Kaila"
  }, [])

  return (
    <>
      <Navbar />
      <FinerDetails />
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

export default FinerDetailsPage
