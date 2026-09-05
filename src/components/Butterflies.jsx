import { useEffect, useRef } from 'react'

export default function Butterflies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const butterflies = []
    
    const colors = ['#e8a0c4', '#8B7FD4', '#d4b87f', '#7fd4b8']
    
    for (let i = 0; i < 3; i++) {
      const butterfly = document.createElement('div')
      butterfly.style.cssText = `
        position: absolute;
        font-size: ${16 + Math.random() * 12}px;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: 0.7;
        pointer-events: none;
        transition: all 0.1s ease;
        z-index: 1;
      `
      butterfly.textContent = '🦋'
      container.appendChild(butterfly)
      
      butterflies.push({
        el: butterfly,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        wingPhase: Math.random() * Math.PI * 2
      })
    }

    let animationId
    const animate = () => {
      butterflies.forEach(b => {
        b.x += b.vx
        b.y += b.vy + Math.sin(Date.now() / 500 + b.wingPhase) * 0.5
        
        if (b.x < -50) b.x = window.innerWidth + 50
        if (b.x > window.innerWidth + 50) b.x = -50
        if (b.y < -50) b.y = window.innerHeight + 50
        if (b.y > window.innerHeight + 50) b.y = -50
        
        const scale = 0.8 + Math.sin(Date.now() / 100 + b.wingPhase) * 0.2
        b.el.style.transform = `translate(${b.x}px, ${b.y}px) scaleX(${scale})`
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      butterflies.forEach(b => b.el.remove())
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 50 }} />
}
