import { useState, useEffect } from 'react'
import './SeasonStamp.css'

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

  const imgSrc = `${import.meta.env.BASE_URL}${season}.jpg`
  const seasonName = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' }[season]

  return (
    <div 
      className={`stamp-wrapper ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="stamp-box">
        <img src={imgSrc} alt={`${seasonName}季邮票`} className="stamp-img" />
        <div className="stamp-flap" />
      </div>
      <div className="stamp-caption">{seasonName}季邮票</div>
    </div>
  )
}
