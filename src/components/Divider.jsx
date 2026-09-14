function Divider({ tone = "dark", className = "" }) {
  const lineColor = tone === "light" ? "bg-cream/70" : "bg-forest/50"
  const markColor = tone === "light" ? "border-cream/80" : "border-forest/60"

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className={`h-px w-16 sm:w-24 ${lineColor}`} />
      <span className={`h-2 w-2 rotate-45 border ${markColor}`} />
      <span className={`h-px w-16 sm:w-24 ${lineColor}`} />
    </div>
  )
}

export default Divider
