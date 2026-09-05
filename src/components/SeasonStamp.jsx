import { useState, useEffect } from 'react'
import './SeasonStamp.css'

const seasonImages = {
  spring: './spring.png',
  summer: './summer.png',
  autumn: './autumn.png',
  winter: './winter.png'
}

const seasonNames = {
  spring: '春',
  summer: '夏',
  autumn: '秋',
  winter: '冬'
}

export default function SeasonStamp() {
  const [season, setSeason] = useState('autumn')
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const month = new Date().getMonth() + 1
    if (month >= 3 && month <= 5) setSeason('spring')
    else if (month >= 6 && month <= 8) setSeason('summer')
    else if (month >= 9 && month <= 11) setSeason('autumn')
    else setSeason('winter')
  }, [])

  return (
    <div 
      className={`stamp-wrapper ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sticker-container">
        <div className="sticker-main">
          <img src={seasonImages[season]} alt={`${seasonNames[season]}季邮票`} className="stamp-image" />
        </div>
        <div className="flap">
          <div className="flap-back" />
        </div>
      </div>
      <div className="stamp-label">{seasonNames[season]}季邮票</div>
    </div>
  )
}
