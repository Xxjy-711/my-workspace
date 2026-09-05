import { useState } from 'react'
import BotanicalText from './BotanicalText'
import './WelcomePage.css'

export default function WelcomePage({ onEnter }) {
  const [showControls, setShowControls] = useState(false)
  const [params, setParams] = useState({
    density: 5,
    bloomSize: 6,
    leafMix: 0.18,
    hoverRadius: 120,
    maxBloom: 2.3,
    breathe: 0.2,
    spread: 3
  })

  const updateParam = (key, value) => {
    setParams(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="welcome-page" onClick={onEnter}>
      <div className="welcome-content">
        <BotanicalText 
          text="My Workspace" 
          width={950} 
          height={280}
          density={params.density}
          bloomSize={params.bloomSize}
          leafMix={params.leafMix}
          hoverRadius={params.hoverRadius}
          maxBloom={params.maxBloom}
          breathe={params.breathe}
          spread={params.spread}
        />
        <div className="welcome-hint">点击进入每日早报</div>
      </div>

      <button 
        className="control-toggle"
        onClick={(e) => { e.stopPropagation(); setShowControls(!showControls) }}
      >
        ⚙️ 调节花朵
      </button>

      {showControls && (
        <div className="control-panel" onClick={(e) => e.stopPropagation()}>
          <h3>花朵参数调节</h3>
          
          <div className="control-item">
            <label>花朵密度: {params.density}</label>
            <input 
              type="range" min="3" max="8" step="0.5"
              value={params.density}
              onChange={(e) => updateParam('density', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label>花朵大小: {params.bloomSize}</label>
            <input 
              type="range" min="3" max="12" step="0.5"
              value={params.bloomSize}
              onChange={(e) => updateParam('bloomSize', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label>叶子比例: {(params.leafMix * 100).toFixed(0)}%</label>
            <input 
              type="range" min="0" max="0.4" step="0.02"
              value={params.leafMix}
              onChange={(e) => updateParam('leafMix', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label>悬停范围: {params.hoverRadius}px</label>
            <input 
              type="range" min="50" max="200" step="10"
              value={params.hoverRadius}
              onChange={(e) => updateParam('hoverRadius', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label>最大绽放: {params.maxBloom}x</label>
            <input 
              type="range" min="1.5" max="3.5" step="0.1"
              value={params.maxBloom}
              onChange={(e) => updateParam('maxBloom', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label>呼吸幅度: {params.breathe}</label>
            <input 
              type="range" min="0" max="0.4" step="0.02"
              value={params.breathe}
              onChange={(e) => updateParam('breathe', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-item">
            <label>散落程度: {params.spread}</label>
            <input 
              type="range" min="0" max="6" step="0.5"
              value={params.spread}
              onChange={(e) => updateParam('spread', parseFloat(e.target.value))}
            />
          </div>

          <div className="control-tip">调整后自动实时生效</div>
        </div>
      )}
    </div>
  )
}
