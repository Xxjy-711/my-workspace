import { useEffect, useRef } from 'react'

export default function BotanicalText({ text = 'My Workspace', width = 800, height = 300 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    
    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(dpr, dpr)

    // 离屏canvas获取文字像素
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

    // 收集花朵位置
    const flowers = []
    const density = 5
    for (let y = 0; y < height; y += density) {
      for (let x = 0; x < width; x += density) {
        const index = (y * width + x) * 4
        if (pixels[index + 3] > 128) {
          if (Math.random() > 0.3) {
            flowers.push({
              x: x + (Math.random() - 0.5) * 3,
              y: y + (Math.random() - 0.5) * 3,
              size: Math.random() * 4 + 2,
              hue: Math.random() > 0.5 ? 280 + Math.random() * 40 : 330 + Math.random() * 30,
              phase: Math.random() * Math.PI * 2,
              isLeaf: Math.random() < 0.08
            })
          }
        }
      }
    }

    let animationId
    const drawFlower = (x, y, size, hue, phase, isLeaf) => {
      const breathe = 1 + Math.sin(Date.now() / 1000 + phase) * 0.15
      const s = size * breathe
      
      if (isLeaf) {
        ctx.fillStyle = `hsla(150, 50%, 60%, 0.6)`
        ctx.beginPath()
        ctx.ellipse(x, y, s * 1.5, s * 0.6, phase, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // 花瓣
        for (let i = 0; i < 5; i++) {
          const angle = (i / 5) * Math.PI * 2 + phase * 0.1
          const px = x + Math.cos(angle) * s * 0.5
          const py = y + Math.sin(angle) * s * 0.5
          ctx.fillStyle = `hsla(${hue}, 70%, 75%, 0.8)`
          ctx.beginPath()
          ctx.arc(px, py, s * 0.4, 0, Math.PI * 2)
          ctx.fill()
        }
        // 花心
        ctx.fillStyle = `hsla(${hue + 30}, 80%, 85%, 0.9)`
        ctx.beginPath()
        ctx.arc(x, y, s * 0.25, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      flowers.forEach(f => drawFlower(f.x, f.y, f.size, f.hue, f.phase, f.isLeaf))
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => cancelAnimationFrame(animationId)
  }, [text, width, height])

  return <canvas ref={canvasRef} style={{ display: 'block' }} />
}
