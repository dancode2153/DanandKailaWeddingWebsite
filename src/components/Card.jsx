function Card({ tone = "dark", className = "", children }) {
  const outer = tone === "light" ? "border-gold/40" : "border-forest/25"
  const inner = tone === "light" ? "border-gold/20" : "border-forest/15"

  return (
    <div className={`relative border ${outer} px-8 py-9 sm:px-10 sm:py-10 ${className}`}>
      <span className={`pointer-events-none absolute inset-2 border ${inner}`} />
      {children}
    </div>
  )
}

export default Card
