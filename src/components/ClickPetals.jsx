import { useEffect, useRef } from 'react'

export default function ClickPetals() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const petals = []
    const petalEmojis = ['🌸', '🌺', '🌷', '✨', '💜', '🩷']

    const handleClick = (e) => {
      for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div')
        petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)]
        petal.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          font-size: ${12 + Math.random() * 10}px;
          pointer-events: none;
          z-index: 9999;
          opacity: 1;
        `
        container.appendChild(petal)
        
        const angle = (Math.PI * 2 * i) / 8 + Math.random() * 0.5
        const velocity = 2 + Math.random() * 3
        petals.push({
          el: petal,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          life: 1
        })
      }
    }

    window.addEventListener('click', handleClick)

    let animationId
    const animate = () => {
      for (let i = petals.length - 1; i >= 0; i--) {
        const p = petals[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1
        p.rotation += p.rotationSpeed
        p.life -= 0.02
        
        if (p.life <= 0) {
          p.el.remove()
          petals.splice(i, 1)
        } else {
          p.el.style.transform = `translate(${p.x - parseFloat(p.el.style.left)}px, ${p.y - parseFloat(p.el.style.top)}px) rotate(${p.rotation}deg)`
          p.el.style.opacity = p.life
        }
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('click', handleClick)
      cancelAnimationFrame(animationId)
      petals.forEach(p => p.el.remove())
    }
  }, [])

  return <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }} />
}
