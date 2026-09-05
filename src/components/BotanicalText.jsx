import { useEffect, useRef } from 'react'

export default function BotanicalText({ 
  text = 'My Workspace', 
  width = 950, 
  height = 280,
  density = 5,
  bloomSize = 6,
  leafMix = 0.18,
  hoverRadius = 120,
  maxBloom = 2.3,
  breathe = 0.2,
  spread = 3
}) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 2
    
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(dpr, dpr)

    const offscreen = document.createElement('canvas')
    offscreen.width = width
    offscreen.height = height
    const offCtx = offscreen.getContext('2d')
    
    offCtx.fillStyle = 'white'
    offCtx.font = 'bold 100px Georgia, serif'
    offCtx.textAlign = 'center'
    offCtx.textBaseline = 'middle'
    offCtx.fillText(text, width / 2, height / 2)

    const imageData = offCtx.getImageData(0, 0, width, height)
    const pixels = imageData.data

    const flowers = []
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < width; x += density) {
        const index = (y * width + x) * 4
        if (pixels[index + 3] > 128 && Math.random() > 0.35) {
          flowers.push({
            x: x + (Math.random() - 0.5) * spread,
            y: y + (Math.random() - 0.5) * spread,
            baseSize: Math.random() * bloomSize * 0.6 + bloomSize * 0.4,
            size: Math.random() * bloomSize * 0.6 + bloomSize * 0.4,
            targetSize: Math.random() * bloomSize * 0.6 + bloomSize * 0.4,
            velocity: 0,
            baseOpacity: 0.7 + Math.random() * 0.3,
            opacity: 0.7 + Math.random() * 0.3,
            targetOpacity: 0.7 + Math.random() * 0.3,
            opacityVelocity: 0,
            hue: Math.random() > 0.5 ? 280 + Math.random() * 40 : 330 + Math.random() * 30,
            phase: Math.random() * Math.PI * 2,
            isLeaf: Math.random() < leafMix
          })
        }
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = (e.clientX - rect.left) * (width / rect.width)
      mouseRef.current.y = (e.clientY - rect.top) * (height / rect.height)
    }
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const SPRING_STIFFNESS = 0.06
    const SPRING_DAMPING = 0.82
    const OPACITY_STIFFNESS = 0.04
    const OPACITY_DAMPING = 0.85

    let animationId
    const drawFlower = (f) => {
      const breatheVal = 1 + Math.sin(Date.now() / 700 + f.phase) * breathe
      const s = f.size * breatheVal
      
      if (f.isLeaf) {
        ctx.fillStyle = `hsla(150, 45%, 55%, ${f.opacity * 0.7})`
        ctx.beginPath()
        ctx.ellipse(f.x, f.y, s * 1.8, s * 0.7, f.phase, 0, Math.PI * 2)
        ctx.fill()
      } else {
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2 + f.phase * 0.1
          const px = f.x + Math.cos(angle) * s * 0.55
          const py = f.y + Math.sin(angle) * s * 0.55
          ctx.fillStyle = `hsla(${f.hue}, 70%, 75%, ${f.opacity * 0.85})`
          ctx.beginPath()
          ctx.arc(px, py, s * 0.45, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.fillStyle = `hsla(${f.hue + 30}, 80%, 85%, ${f.opacity * 0.95})`
        ctx.beginPath()
        ctx.arc(f.x, f.y, s * 0.3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      
      flowers.forEach(f => {
        const dx = f.x - mx
        const dy = f.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < hoverRadius) {
          const bloomFactor = 1 - dist / hoverRadius
          const eased = bloomFactor * bloomFactor
          f.targetSize = f.baseSize * (1 + eased * (maxBloom - 1))
          f.targetOpacity = Math.min(1, f.baseOpacity + eased * 0.3)
        } else {
          f.targetSize = f.baseSize
          f.targetOpacity = f.baseOpacity
        }
        
        const sizeForce = (f.targetSize - f.size) * SPRING_STIFFNESS
        f.velocity = (f.velocity + sizeForce) * SPRING_DAMPING
        f.size += f.velocity
        
        const opacityForce = (f.targetOpacity - f.opacity) * OPACITY_STIFFNESS
        f.opacityVelocity = (f.opacityVelocity + opacityForce) * OPACITY_DAMPING
        f.opacity += f.opacityVelocity
        
        drawFlower(f)
      })
      
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [text, width, height, density, bloomSize, leafMix, hoverRadius, maxBloom, breathe, spread])

  return <canvas ref={canvasRef} style={{ display: 'block', cursor: 'pointer' }} />
}
