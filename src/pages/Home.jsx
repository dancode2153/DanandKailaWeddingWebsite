import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CountdownSection from "../components/CountdownSection"
import OurStory from "../components/OurStory"
import EventDetails from "../components/EventDetails"
import Location from "../components/Location"
import RSVP from "../components/RSVP"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CountdownSection />
      <OurStory />
      <EventDetails />
      <Location />
      <RSVP />
    </>
  )
}

export default Home
