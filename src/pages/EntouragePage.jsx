import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Entourage from "../components/Entourage"
import Button from "../components/Button"

function EntouragePage() {
  useEffect(() => {
    document.title = "Entourage | Dan & Kaila"
  }, [])

  return (
    <>
      <Navbar />
      <Entourage />
      <div className="px-6 py-16 bg-cream text-center">
        <Button to="/">Back to Main Site</Button>
      </div>
    </>
  )
}

export default EntouragePage
