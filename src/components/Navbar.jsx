import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { couple } from "../weddingData"

const sections = [
  { hash: "#story", label: "Our Story" },
  { hash: "#details", label: "Details" },
  { hash: "#location", label: "Location" },
  { hash: "#rsvp", label: "RSVP" },
]

const pages = [
  { to: "/entourage", label: "Entourage" },
  { to: "/finer-details", label: "Finer Details" },
]

const linkClass =
  "relative pb-1 hover:text-forest transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-sm border-b transition-shadow duration-300 ${
        scrolled ? "border-gold/30 shadow-[0_6px_24px_-16px_rgba(52,43,28,0.5)]" : "border-stone/30"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <a href={onHome ? "#top" : "/"} className="font-script text-2xl text-forest">
          {couple.nickname1} &amp; {couple.nickname2}
        </a>

        <ul className="hidden md:flex gap-8 text-xs tracking-[0.2em] uppercase">
          {sections.map((section) => (
            <li key={section.hash}>
              <a href={onHome ? section.hash : `/${section.hash}`} className={linkClass}>
                {section.label}
              </a>
            </li>
          ))}
          {pages.map((page) => (
            <li key={page.to}>
              <Link to={page.to} className={linkClass}>
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
                className={linkClass}
              >
                {section.label}
              </a>
            </li>
          ))}
          {pages.map((page) => (
            <li key={page.to}>
              <Link to={page.to} onClick={() => setOpen(false)} className={linkClass}>
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
