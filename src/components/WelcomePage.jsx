import BotanicalText from './BotanicalText'
import './WelcomePage.css'

export default function WelcomePage({ onEnter }) {
  return (
    <div className="welcome-page" onClick={onEnter}>
      <div className="welcome-content">
        <BotanicalText text="My Workspace" width={700} height={200} />
        <div className="welcome-hint">点击进入每日早报</div>
      </div>
    </div>
  )
}
