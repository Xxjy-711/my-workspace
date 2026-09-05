import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export default function BotanicalTextThree({ 
  text = 'My Workspace', 
  width = 950, 
  height = 280,
  density = 5,
  bloomSize = 6,
  leafMix = 0.18,
  hoverRadius = 120,
  maxBloom = 2.3,
  breathe = 0.2,
  editable = false
}) {
  const containerRef = useRef(null)
  const editableRef = useRef(null)
  const [currentText, setCurrentText] = useState(text)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const sceneRef = useRef(null)
  const flowersRef = useRef([])
  const leavesRef = useRef([])
  const flowerMeshRef = useRef(null)
  const leafMeshRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const dpr = window.devicePixelRatio || 2

    // 创建 Three.js 场景
    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.OrthographicCamera(
      -width / 2, width / 2,
      height / 2, -height / 2,
      0.1, 1000
    )
    camera.position.z = 100

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      premultipliedAlpha: false
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(dpr)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // 程序化生成花朵精灵纹理
    const createFlowerTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      
      // 5片花瓣
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2
        const px = 32 + Math.cos(angle) * 14
        const py = 32 + Math.sin(angle) * 14
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 12)
        gradient.addColorStop(0, 'rgba(255,255,255,1)')
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.8)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(px, py, 12, 0, Math.PI * 2)
        ctx.fill()
      }
      // 花心
      const centerGradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 8)
      centerGradient.addColorStop(0, 'rgba(255,255,255,1)')
      centerGradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = centerGradient
      ctx.beginPath()
      ctx.arc(32, 32, 8, 0, Math.PI * 2)
      ctx.fill()

      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    }

    // 程序化生成叶子精灵纹理
    const createLeafTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 24)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.6)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.ellipse(32, 32, 22, 10, 0, 0, Math.PI * 2)
      ctx.fill()

      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    }

    const flowerTexture = createFlowerTexture()
    const leafTexture = createLeafTexture()

    const flowerMaterial = new THREE.MeshBasicMaterial({
      map: flowerTexture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.NormalBlending
    })

    const leafMaterial = new THREE.MeshBasicMaterial({
      map: leafTexture,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.NormalBlending
    })

    const MAX_INSTANCES = 30000
    const flowerGeometry = new THREE.PlaneGeometry(1, 1)
    const leafGeometry = new THREE.PlaneGeometry(1, 1)

    const flowerMesh = new THREE.InstancedMesh(flowerGeometry, flowerMaterial, MAX_INSTANCES)
    const leafMesh = new THREE.InstancedMesh(leafGeometry, leafMaterial, MAX_INSTANCES)
    flowerMesh.count = 0
    leafMesh.count = 0
    flowerMesh.frustumCulled = false
    leafMesh.frustumCulled = false

    scene.add(flowerMesh)
    scene.add(leafMesh)
    flowerMeshRef.current = flowerMesh
    leafMeshRef.current = leafMesh

    // 生成文字遮罩
    const generateMask = (txt) => {
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'white'
      ctx.font = 'bold 100px Georgia, serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(txt, width / 2, height / 2)
      
      const imageData = ctx.getImageData(0, 0, width, height)
      const pixels = imageData.data
      const mask = new Set()
      
      for (let y = 0; y < height; y += density) {
        for (let x = 0; x < width; x += density) {
          const index = (y * width + x) * 4
          if (pixels[index + 3] > 128) {
            mask.add(`${x},${y}`)
          }
        }
      }
      return mask
    }

    // 幂曲线大小分布（大多数小，稀有大）
    const powerCurveSize = () => {
      const r = Math.random()
      return bloomSize * 0.3 + Math.pow(r, 3) * bloomSize * 1.5
    }

    // 创建花朵实例
    const createFlower = (x, y, isLeaf = false) => {
      const hue = isLeaf 
        ? 150 + Math.random() * 30 
        : (Math.random() > 0.5 ? 280 + Math.random() * 40 : 330 + Math.random() * 30)
      const color = new THREE.Color().setHSL(hue / 360, 0.7, 0.75)
      
      return {
        x: x - width / 2 + (Math.random() - 0.5) * 3,
        y: height / 2 - y + (Math.random() - 0.5) * 3,
        baseSize: powerCurveSize(),
        size: 0,
        targetSize: powerCurveSize(),
        velocity: 0,
        opacity: 0,
        targetOpacity: 0.85,
        opacityVelocity: 0,
        hue,
        color,
        phase: Math.random() * Math.PI * 2,
        isLeaf,
        alive: true,
        wilting: false
      }
    }

    // 更新实例
    const updateInstances = () => {
      const flowers = flowersRef.current.filter(f => f.alive)
      const leaves = leavesRef.current.filter(l => l.alive)
      
      flowerMesh.count = flowers.length
      leafMesh.count = leaves.length
      
      const dummy = new THREE.Object3D()
      
      flowers.forEach((f, i) => {
        const breatheVal = 1 + Math.sin(Date.now() / 700 + f.phase) * breathe
        const s = f.size * breatheVal
        dummy.position.set(f.x, f.y, 0)
        dummy.scale.set(s, s, 1)
        dummy.rotation.z = f.phase * 0.1
        dummy.updateMatrix()
        flowerMesh.setMatrixAt(i, dummy.matrix)
        flowerMesh.setColorAt(i, f.color)
      })
      
      leaves.forEach((l, i) => {
        const breatheVal = 1 + Math.sin(Date.now() / 700 + l.phase) * breathe
        const s = l.size * breatheVal
        dummy.position.set(l.x, l.y, -0.1)
        dummy.scale.set(s * 1.5, s * 0.6, 1)
        dummy.rotation.z = l.phase
        dummy.updateMatrix()
        leafMesh.setMatrixAt(i, dummy.matrix)
        leafMesh.setColorAt(i, l.color)
      })
      
      flowerMesh.instanceMatrix.needsUpdate = true
      leafMesh.instanceMatrix.needsUpdate = true
      if (flowerMesh.instanceColor) flowerMesh.instanceColor.needsUpdate = true
      if (leafMesh.instanceColor) leafMesh.instanceColor.needsUpdate = true
    }

    // 差异对比更新文字
    const updateText = (newText) => {
      const newMask = generateMask(newText)
      const oldFlowers = [...flowersRef.current, ...leavesRef.current]
      
      // 找出消失的坐标（枯萎）
      oldFlowers.forEach(f => {
        const key = `${Math.round(f.x + width / 2)},${Math.round(height / 2 - f.y)}`
        if (!newMask.has(key)) {
          f.wilting = true
          f.targetSize = 0
          f.targetOpacity = 0
        }
      })
      
      // 找出新增的坐标（绽放）
      const existingKeys = new Set(oldFlowers.map(f => 
        `${Math.round(f.x + width / 2)},${Math.round(height / 2 - f.y)}`
      ))
      
      newMask.forEach(key => {
        if (!existingKeys.has(key) && Math.random() > 0.35) {
          const [x, y] = key.split(',').map(Number)
          const isLeaf = Math.random() < leafMix
          const instance = createFlower(x, y, isLeaf)
          if (isLeaf) {
            leavesRef.current.push(instance)
          } else {
            flowersRef.current.push(instance)
          }
        }
      })
      
      // 限制实例数量
      if (flowersRef.current.length + leavesRef.current.length > MAX_INSTANCES) {
        const excess = flowersRef.current.length + leavesRef.current.length - MAX_INSTANCES
        flowersRef.current.splice(0, Math.floor(excess / 2))
        leavesRef.current.splice(0, Math.ceil(excess / 2))
      }
    }

    // 初始化
    updateText(currentText)
    updateInstances()

    // 鼠标事件
    const handleMouseMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouseRef.current.x = (e.clientX - rect.left - width / 2)
      mouseRef.current.y = (height / 2 - (e.clientY - rect.top))
    }
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }
    renderer.domElement.addEventListener('mousemove', handleMouseMove)
    renderer.domElement.addEventListener('mouseleave', handleMouseLeave)

    // 动画循环
    const SPRING_STIFFNESS = 0.06
    const SPRING_DAMPING = 0.82
    const OPACITY_STIFFNESS = 0.04
    const OPACITY_DAMPING = 0.85

    const animate = () => {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      
      const allInstances = [...flowersRef.current, ...leavesRef.current]
      
      allInstances.forEach(f => {
        // 悬停绽放
        const dx = f.x - mx
        const dy = f.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (!f.wilting && dist < hoverRadius) {
          const bloomFactor = 1 - dist / hoverRadius
          const eased = bloomFactor * bloomFactor
          f.targetSize = f.baseSize * (1 + eased * (maxBloom - 1))
          f.targetOpacity = Math.min(1, 0.85 + eased * 0.15)
        } else if (!f.wilting) {
          f.targetSize = f.baseSize
          f.targetOpacity = 0.85
        }
        
        // 弹簧动画
        const sizeForce = (f.targetSize - f.size) * SPRING_STIFFNESS
        f.velocity = (f.velocity + sizeForce) * SPRING_DAMPING
        f.size += f.velocity
        
        const opacityForce = (f.targetOpacity - f.opacity) * OPACITY_STIFFNESS
        f.opacityVelocity = (f.opacityVelocity + opacityForce) * OPACITY_DAMPING
        f.opacity += f.opacityVelocity
        
        // 枯萎完成后移除
        if (f.wilting && f.size < 0.1 && f.opacity < 0.05) {
          f.alive = false
        }
      })
      
      updateInstances()
      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }
    animate()

    // 可编辑模式
    if (editable && editableRef.current) {
      editableRef.current.addEventListener('input', (e) => {
        const newText = e.target.innerText || text
        setCurrentText(newText)
        updateText(newText)
      })
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      renderer.domElement.removeEventListener('mouseleave', handleMouseLeave)
      renderer.dispose()
      flowerGeometry.dispose()
      leafGeometry.dispose()
      flowerMaterial.dispose()
      leafMaterial.dispose()
      flowerTexture.dispose()
      leafTexture.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [text, width, height, density, bloomSize, leafMix, hoverRadius, maxBloom, breathe, editable])

  return (
    <div style={{ position: 'relative', width, height }}>
      <div ref={containerRef} style={{ width, height }} />
      {editable && (
        <div
          ref={editableRef}
          contentEditable
          suppressContentEditableWarning
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            color: 'transparent',
            caretColor: '#8B7FD4',
            fontSize: '100px',
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: `${height}px`,
            outline: 'none',
            cursor: 'text'
          }}
        >
          {text}
        </div>
      )}
    </div>
  )
}
