// WebGL 能力检测工具
// 返回当前浏览器是否支持 WebGL（Three.js 渲染所需）
export function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!gl
  } catch {
    return false
  }
}
