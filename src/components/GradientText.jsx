export default function GradientText({ children, className = '', colors = ['#8B7FD4', '#e8a0c4'], speed = 8 }) {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`
  
  return (
    <span
      className={className}
      style={{
        background: gradient,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: `gradientShift ${speed}s ease-in-out infinite`,
        display: 'inline-block'
      }}
    >
      {children}
    </span>
  )
}
