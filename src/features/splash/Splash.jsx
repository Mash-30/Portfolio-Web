import React, { useState, useEffect } from 'react'

const Splash = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true)
      setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          onComplete()
        }, 300)
      }, 500)
    }, 10000)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <div className={`splash ${isFading ? 'fade-out' : ''}`}>
      <div className="splash-background-pattern"></div>
      <div className="splash-container">
        <div className="splash-embedded-frame">
          <div className="splash-frame-header">
            <div className="splash-frame-dots">
              <span className="splash-dot"></span>
              <span className="splash-dot"></span>
              <span className="splash-dot"></span>
            </div>
            <div className="splash-frame-title">Portfolio Intro</div>
            <div className="splash-frame-controls">
              <div className="splash-control-icon"></div>
            </div>
          </div>
          <div className="splash-video-wrapper">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="splash-video"
            >
              <source src="/Frame-32.mp4" type="video/mp4" />
            </video>
            <div className="splash-video-overlay"></div>
          </div>
          <div className="splash-frame-footer">
            <div className="splash-loading-bar">
              <div className="splash-loading-progress"></div>
            </div>
          </div>
        </div>
        <div className="splash-branding">
          <div className="splash-brand-text">Mashrur Shaheer</div>
          <div className="splash-brand-subtitle">Frontend Developer</div>
        </div>
      </div>
    </div>
  )
}

export default Splash

