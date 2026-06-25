import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
