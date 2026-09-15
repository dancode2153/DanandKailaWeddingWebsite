import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import EntouragePage from "./pages/EntouragePage"
import FinerDetailsPage from "./pages/FinerDetailsPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entourage" element={<EntouragePage />} />
        <Route path="/finer-details" element={<FinerDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
