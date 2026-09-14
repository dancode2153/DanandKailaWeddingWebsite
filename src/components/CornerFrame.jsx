function CornerFrame({ tone = "dark", size = "w-8 h-8", className = "" }) {
  const color = tone === "light" ? "border-gold/50" : "border-forest/40"

  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <span className={`absolute top-0 left-0 ${size} border-t border-l ${color}`} />
      <span className={`absolute top-0 right-0 ${size} border-t border-r ${color}`} />
      <span className={`absolute bottom-0 left-0 ${size} border-b border-l ${color}`} />
      <span className={`absolute bottom-0 right-0 ${size} border-b border-r ${color}`} />
    </div>
  )
}

export default CornerFrame
