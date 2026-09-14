import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CountdownSection from "../components/CountdownSection"
import OurStory from "../components/OurStory"
import EventDetails from "../components/EventDetails"
import Location from "../components/Location"
import Registry from "../components/Registry"
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
      <Registry />
      <RSVP />
    </>
  )
}

export default Home
