import { useEffect, useMemo, useState } from 'react'

const calculateTimeLeft = (targetDate) => {
  const difference = new Date(targetDate).getTime() - Date.now()

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    }
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((difference / (1000 * 60)) % 60)
  const seconds = Math.floor((difference / 1000) % 60)

  const pad = (value) => value.toString().padStart(2, '0')

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
}

function CountdownTimer({ targetDate, className = '' }) {
  const fallbackDate = useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + 31)
    return date
  }, [])

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate ?? fallbackDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate ?? fallbackDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, fallbackDate])

  const timerBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}>
      {timerBlocks.map((block) => (
        <div
          key={block.label}
          className="rounded-2xl border border-kasavu/25 bg-white/80 px-6 py-6 text-center shadow-[0_0_25px_rgba(232,185,35,0.25)]"
        >
          <p className="text-4xl font-black tracking-tight text-charcoal sm:text-5xl">{block.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-deepgreen">{block.label}</p>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
