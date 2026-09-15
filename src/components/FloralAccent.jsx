function Petal({ cx, cy, r, rotate }) {
  return (
    <ellipse
      cx={cx}
      cy={cy - r}
      rx={r * 0.55}
      ry={r}
      fill="currentColor"
      transform={`rotate(${rotate} ${cx} ${cy})`}
    />
  )
}

function Blossom({ cx, cy, size = 10 }) {
  return (
    <g opacity="0.9">
      {[0, 72, 144, 216, 288].map((angle) => (
        <Petal key={angle} cx={cx} cy={cy} r={size} rotate={angle} />
      ))}
      <circle cx={cx} cy={cy} r={size * 0.28} fill="currentColor" opacity="0.7" />
    </g>
  )
}

function FloralAccent({ className = "" }) {
  return (
    <svg viewBox="0 0 160 170" className={className} fill="none" stroke="currentColor">
      <path
        d="M80 170 C 70 130, 90 100, 70 70 C 55 48, 60 25, 78 6"
        strokeWidth="1.4"
        opacity="0.7"
      />
      <path d="M74 96 C 60 90, 48 96, 40 112" strokeWidth="1.2" opacity="0.6" />
      <path d="M68 60 C 82 54, 92 60, 98 74" strokeWidth="1.2" opacity="0.6" />

      <Blossom cx={78} cy={14} size={13} />
      <Blossom cx={38} cy={114} size={10} />
      <Blossom cx={100} cy={76} size={8} />

      <ellipse
        cx={62}
        cy={82}
        rx={10}
        ry={4.5}
        fill="currentColor"
        opacity="0.55"
        transform="rotate(-35 62 82)"
      />
      <ellipse
        cx={92}
        cy={40}
        rx={9}
        ry={4}
        fill="currentColor"
        opacity="0.55"
        transform="rotate(40 92 40)"
      />
    </svg>
  )
}

export default FloralAccent
