import { useEffect, useState } from 'react'

type CountUpProps = {
  value: number
  duration?: number
  suffix?: string
}

export default function CountUp({ value, duration = 1500, suffix = '' }: CountUpProps) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setDisplay(Math.floor(p * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, duration])
  return <span>{display}{suffix}</span>
}
