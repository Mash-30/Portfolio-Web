import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Add scroll event listener with error handling
    try {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    } catch (error) {
      console.warn('Scroll event listener failed:', error)
    }
  }, [])

  // Production-ready navigation handler
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    try {
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } catch (error) {
      console.warn('Navigation failed:', error)
      // Fallback: direct navigation
      window.location.href = targetId
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a 
            href="#hero" 
            className="nav-logo-link"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Go to homepage"
          >
            Portfolio
          </a>
        </div>
        <div className="nav-menu">
          <a 
            href="#hero" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Go to home section"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#about')}
            aria-label="Go to about section"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#projects')}
            aria-label="Go to projects section"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="nav-link"
            onClick={(e) => handleNavClick(e, '#contact')}
            aria-label="Go to contact section"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
