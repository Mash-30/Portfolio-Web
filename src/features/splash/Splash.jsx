import React, { useState, useEffect } from 'react'

const Splash = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 10000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className="splash">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="splash-video"
      >
        <source src="/Frame-32.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Splash

