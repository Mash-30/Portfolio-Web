import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/Negative-mask-effect.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Frontend Developer</h1>
            <p className="hero-subtitle">Building Digital Experiences</p>
            <button className="hero-cta">View Work</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
