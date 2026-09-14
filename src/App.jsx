import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import EntouragePage from "./pages/EntouragePage"
import FinerDetailsPage from "./pages/FinerDetailsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/entourage" element={<EntouragePage />} />
      <Route path="/finer-details" element={<FinerDetailsPage />} />
    </Routes>
  )
}

export default App
