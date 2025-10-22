import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          preload="metadata"
          aria-label="Background video showcasing frontend development"
        >
          <source src="/Negative-mask-effect.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Frontend Developer</h1>
            <p className="hero-subtitle">Building Digital Experiences</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
