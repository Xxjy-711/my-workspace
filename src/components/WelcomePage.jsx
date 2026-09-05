import { lazy, Suspense } from 'react'
import './WelcomePage.css'

// Originkit Botanical Text（内含 three）：懒加载，与主包分离
const OriginkitFlowerType = lazy(() => import('./originkit/botanical-text'))

export default function WelcomePage({ onEnter }) {
  return (
    <div className="welcome-page" onClick={onEnter}>
      <div className="welcome-content">
        {/* 主视觉：Originkit 交互花朵文字。点击/划过不触发进入页面 */}
        <div
          className="hero-flower"
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Suspense fallback={null}>
            <OriginkitFlowerType
              text="My Workshop"
              bloom="#FF8FB8"
              leaf="#5BB87A"
              opacity={14}
              bloomSize={11}
              leafSize={8}
              leafMix={3}
              spread={3}
            />
          </Suspense>
        </div>
        <div className="welcome-hint">点击空白处进入每日早报</div>
        <div className="flower-subhint">点击花朵可输入文字 · 划过绽放</div>
      </div>
    </div>
  )
}
