import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { couple } from "../weddingData"

const sections = [
  { hash: "#story", label: "Our Story" },
  { hash: "#details", label: "Details" },
  { hash: "#location", label: "Location" },
  { hash: "#registry", label: "Registry" },
  { hash: "#rsvp", label: "RSVP" },
]

const pages = [
  { to: "/entourage", label: "Entourage" },
  { to: "/finer-details", label: "Finer Details" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === "/"

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone/40">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href={onHome ? "#top" : "/"} className="font-script text-2xl text-forest">
          {couple.nickname1} &amp; {couple.nickname2}
        </a>

        <ul className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase">
          {sections.map((section) => (
            <li key={section.hash}>
              <a
                href={onHome ? section.hash : `/${section.hash}`}
                className="hover:text-sage-dark transition-colors"
              >
                {section.label}
              </a>
            </li>
          ))}
          {pages.map((page) => (
            <li key={page.to}>
              <Link to={page.to} className="hover:text-sage-dark transition-colors">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-charcoal"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-6 text-xs tracking-[0.2em] uppercase">
          {sections.map((section) => (
            <li key={section.hash}>
              <a
                href={onHome ? section.hash : `/${section.hash}`}
                onClick={() => setOpen(false)}
                className="hover:text-sage-dark transition-colors"
              >
                {section.label}
              </a>
            </li>
          ))}
          {pages.map((page) => (
            <li key={page.to}>
              <Link
                to={page.to}
                onClick={() => setOpen(false)}
                className="hover:text-sage-dark transition-colors"
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
