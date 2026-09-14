import { Link } from "react-router-dom"

function Button({ href, to, children, tone = "dark", external = false, className = "" }) {
  const toneClasses =
    tone === "light"
      ? "border-gold text-gold hover:bg-gold hover:text-forest-dark hover:shadow-[0_10px_30px_-10px_rgba(205,185,148,0.5)]"
      : "border-charcoal text-charcoal hover:bg-charcoal hover:text-cream hover:shadow-[0_10px_30px_-12px_rgba(52,43,28,0.4)]"

  const classes = `inline-block px-9 py-3 border uppercase tracking-[0.3em] text-xs hover:-translate-y-0.5 ${toneClasses} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={classes}
    >
      {children}
    </a>
  )
}

export default Button
