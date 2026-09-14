import { useEffect } from "react"
import Navbar from "../components/Navbar"
import FinerDetails from "../components/FinerDetails"
import Button from "../components/Button"

function FinerDetailsPage() {
  useEffect(() => {
    document.title = "The Finer Details | Dan & Kaila"
  }, [])

  return (
    <>
      <Navbar />
      <FinerDetails />
      <div className="px-6 py-16 bg-cream text-center">
        <Button to="/">Back to Main Site</Button>
      </div>
    </>
  )
}

export default FinerDetailsPage
