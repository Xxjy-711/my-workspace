import { useState } from 'react'
import ParticleBackground from './components/ParticleBackground'
import Butterflies from './components/Butterflies'
import WelcomePage from './components/WelcomePage'
import DailyReport from './components/DailyReport'
import './components/DailyReport.css'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <div className="app">
      <ParticleBackground />
      <Butterflies />
      
      {showWelcome && <WelcomePage onEnter={() => setShowWelcome(false)} />}
      
      {!showWelcome && (
        <>
          <nav className="side-nav">
            <div className="nav-logo">
              <div className="logo-icon">工</div>
              <div className="logo-text">
                <div className="logo-title">我的工作台</div>
                <div className="logo-sub">PERSONAL DESK</div>
              </div>
            </div>
            <div className="nav-item active" onClick={() => setShowWelcome(true)}>
              <span>🏠</span>
              <span>返回主页</span>
            </div>
            <div className="nav-item active">
              <span>📰</span>
              <span>每日早报</span>
            </div>
            <div className="nav-item disabled">
              <span>📁</span>
              <span>板块二（预留）</span>
            </div>
            <div className="nav-item disabled">
              <span>⭐</span>
              <span>板块三（预留）</span>
            </div>
          </nav>
          <DailyReport />
        </>
      )}
    </div>
  )
}

export default App
