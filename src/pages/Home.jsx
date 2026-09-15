import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import CountdownSection from "../components/CountdownSection"
import OurStory from "../components/OurStory"
import EventDetails from "../components/EventDetails"
import Location from "../components/Location"
import RSVP from "../components/RSVP"
import EnvelopeIntro from "../components/EnvelopeIntro"

function Home() {
  return (
    <>
      <EnvelopeIntro />
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
