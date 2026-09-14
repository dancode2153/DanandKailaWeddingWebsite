function RingIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="46" cy="36" r="21" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="74" cy="36" r="21" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M70 17 L73.5 10 L77 17 L73.5 21 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M72 12.5 L75 12.5" stroke="currentColor" strokeWidth="0.75" opacity="0.6" />
    </svg>
  )
}

export default RingIcon
