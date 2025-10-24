// Spurs Logo Component - using the actual PNG from Figma
export default function SpursLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <img 
      src="/images/nbateamlogo.png" 
      alt="San Antonio Spurs" 
      className={`${className} object-contain`}
      style={{ aspectRatio: '1/1' }}
    />
  )
}

// Small Spurs Avatar Icon for header
export function SpursAvatarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img 
      src="/images/nba-avatar.png" 
      alt="Spurs Avatar" 
      className={`${className} rounded-full object-cover`}
    />
  )
}