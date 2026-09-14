function Divider({ tone = "dark", className = "" }) {
  const color = tone === "light" ? "cream" : "forest"
  const markColor = tone === "light" ? "border-gold/80" : "border-forest/60"

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span
        className="h-px w-16 sm:w-24"
        style={{
          background: `linear-gradient(to left, var(--color-${color}), transparent)`,
          opacity: tone === "light" ? 0.6 : 0.45,
        }}
      />
      <span className={`h-2.5 w-2.5 rotate-45 border ${markColor}`} />
      <span
        className="h-px w-16 sm:w-24"
        style={{
          background: `linear-gradient(to right, var(--color-${color}), transparent)`,
          opacity: tone === "light" ? 0.6 : 0.45,
        }}
      />
    </div>
  )
}

export default Divider
