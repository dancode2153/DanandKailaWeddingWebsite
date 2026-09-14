const leaves = [
  { y: 196, side: 1, size: 15 },
  { y: 176, side: -1, size: 14 },
  { y: 156, side: 1, size: 13 },
  { y: 136, side: -1, size: 12 },
  { y: 116, side: 1, size: 10 },
  { y: 96, side: -1, size: 9 },
  { y: 76, side: 1, size: 7 },
  { y: 56, side: -1, size: 6 },
  { y: 38, side: 1, size: 4 },
]

function LeafSprig({ className = "" }) {
  return (
    <svg viewBox="0 0 120 220" className={className} fill="none" stroke="currentColor">
      <path d="M60 208 L60 14" strokeWidth="1.5" opacity="0.9" />
      <circle cx="55" cy="213" r="2.5" fill="currentColor" stroke="none" opacity="0.8" />
      <circle cx="66" cy="216" r="2" fill="currentColor" stroke="none" opacity="0.7" />
      {leaves.map((leaf, i) => {
        const cx = 60 + leaf.side * (leaf.size * 1.2)
        const angle = leaf.side * 45
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={leaf.y}
            rx={leaf.size}
            ry={leaf.size * 0.4}
            transform={`rotate(${angle} ${cx} ${leaf.y})`}
            strokeWidth="1.2"
            opacity={0.85 - i * 0.03}
          />
        )
      })}
    </svg>
  )
}

export default LeafSprig
