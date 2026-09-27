import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const COUNT = 980

function sphere(count: number) {
  const points = new Float32Array(count * 3)
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = golden * i
    points[i * 3] = Math.cos(theta) * radius
    points[i * 3 + 1] = y
    points[i * 3 + 2] = Math.sin(theta) * radius
  }
  return points
}

const POINTS = sphere(COUNT)

export function ParticleGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const stage = canvas.closest('section')
    if (!stage) return

    let frame = 0
    let raf = 0
    const aim = { x: 0, y: 0 }
    const look = { x: 0, y: 0 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
    }

    const draw = () => {
      look.x += (aim.x - look.x) * 0.14
      look.y += (aim.y - look.y) * 0.14

      const width = canvas.clientWidth
      const height = canvas.clientHeight
      const dpr = canvas.width / Math.max(width, 1)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)

      const angle = (reduced ? 0.6 : frame * 0.0032) + look.x * 2.6
      const tilt = 0.38 + look.y * 1.25
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const cosTilt = Math.cos(tilt)
      const sinTilt = Math.sin(tilt)
      const radius = Math.min(width, height) * 0.48
      const cx = width / 2
      const cy = height / 2
      const light = document.documentElement.dataset.theme !== 'dark'

      for (let i = 0; i < COUNT; i++) {
        const x0 = POINTS[i * 3]
        const y0 = POINTS[i * 3 + 1]
        const z0 = POINTS[i * 3 + 2]
        const x1 = x0 * cos - z0 * sin
        const z1 = x0 * sin + z0 * cos
        const y = y0 * cosTilt - z1 * sinTilt
        const z = y0 * sinTilt + z1 * cosTilt
        const depth = (z + 1) * 0.5
        ctx.fillStyle = light
          ? `rgba(21, 94, 239, ${0.28 + depth * 0.7})`
          : `rgba(186, 210, 255, ${0.28 + depth * 0.72})`
        ctx.beginPath()
        ctx.arc(cx + x1 * radius, cy + y * radius, 1.1 + depth * 1.8, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      aim.x = (event.clientX - rect.left) / rect.width - 0.5
      aim.y = (event.clientY - rect.top) / rect.height - 0.5
    }

    const onLeave = () => {
      aim.x = 0
      aim.y = 0
    }

    const loop = () => {
      if (document.hidden) return
      frame += 1
      draw()
      raf = requestAnimationFrame(loop)
    }

    resize()
    const observer = new ResizeObserver(() => {
      resize()
      draw()
    })
    observer.observe(canvas)
    draw()

    const onVisibility = () => {
      if (!document.hidden && !reduced) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(loop)
      }
    }

    if (!reduced) {
      stage.addEventListener('pointermove', onMove)
      stage.addEventListener('pointerleave', onLeave)
      raf = requestAnimationFrame(loop)
      document.addEventListener('visibilitychange', onVisibility)
    }

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      stage.removeEventListener('pointermove', onMove)
      stage.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduced])

  return <canvas ref={canvasRef} className="particle-globe" aria-hidden="true" />
}
