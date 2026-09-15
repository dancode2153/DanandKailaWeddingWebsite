import { useEffect, useState } from "react"
import { couple } from "../weddingData"

function EnvelopeIntro() {
  const [opening, setOpening] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (hidden) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [hidden])

  if (hidden) return null

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(() => setHidden(true), 1000)
  }

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-white transition-opacity duration-700 ${
        opening ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open your invitation"
        className="group flex flex-col items-center gap-7 cursor-pointer"
      >
        <svg viewBox="0 0 200 140" className="w-52 sm:w-72 h-auto overflow-visible">
          <rect
            x="10"
            y="30"
            width="180"
            height="100"
            rx="3"
            fill="#34420D"
            stroke="#CDB994"
            strokeWidth="1.5"
          />
          <path
            d="M10 30 L100 95 L190 30"
            fill="none"
            stroke="#CDB994"
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d="M10 30 L190 30 L100 90 Z"
            fill="#3E4E12"
            stroke="#CDB994"
            strokeWidth="1.5"
            className={`transition-all ${
              opening
                ? "duration-700 ease-in-out -translate-y-12 -rotate-6 opacity-0"
                : "duration-[1400ms] ease-[cubic-bezier(0.45,0,0.2,1)] group-hover:-translate-y-5 group-hover:-rotate-3"
            }`}
            style={{ transformBox: "fill-box", transformOrigin: "top" }}
          />
          <circle
            cx="100"
            cy="72"
            r="15"
            fill="#CDB994"
            className={`transition-all duration-500 ease-in-out ${
              opening ? "opacity-0 scale-75" : ""
            }`}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          <text
            x="100"
            y="72"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="13"
            fill="#FFFFFF"
            fontFamily="'Great Vibes', cursive"
            className={`transition-opacity duration-500 ${opening ? "opacity-0" : ""}`}
          >
            {couple.nickname1[0]}&{couple.nickname2[0]}
          </text>
        </svg>

        <span className="text-forest/70 text-xs uppercase tracking-[0.4em] group-hover:text-gold transition-colors duration-[1400ms] ease-[cubic-bezier(0.45,0,0.2,1)]">
          Tap to Open
        </span>
      </button>
    </div>
  )
}

export default EnvelopeIntro
