import { useEffect, useState } from "react"

function getTimeLeft(targetDate) {
  const diff = +new Date(targetDate) - +new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-6 sm:gap-12">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-6 sm:gap-12">
          <div className="flex flex-col items-center">
            <span className="font-display text-4xl sm:text-6xl text-forest">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-brown mt-2">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-3xl sm:text-5xl text-stone-dark -mt-4 sm:-mt-6">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default Countdown
