import { useState, useEffect } from 'react'
import { usePerformance } from '../shared/hooks/usePerformance'
import { trackPageView, trackEvent } from '../shared/utils/analytics'

// Import components directly for immediate availability
import Splash from '../features/splash/Splash'
import Navbar from '../shared/components/Navbar'
import Hero from '../features/hero/Hero'
import BrandCarousel from '../shared/components/BrandCarousel'
import About from '../features/about/About'
import Projects from '../features/projects/Projects'
import Contact from '../features/contact/Contact'
import Footer from '../shared/components/Footer'


const App = () => {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  usePerformance()

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload critical videos
        const videoPromises = [
          '/Frame-32.mp4',
          '/Negative-mask-effect.mp4'
        ].map(src => {
          return new Promise((resolve, reject) => {
            const video = document.createElement('video')
            video.preload = 'metadata'
            video.onloadedmetadata = resolve
            video.onerror = reject
            video.src = src
          })
        })

        await Promise.allSettled(videoPromises)
        setIsLoaded(true)
        trackPageView('Portfolio Home')
      } catch (error) {
        console.warn('Some resources failed to preload:', error)
        setIsLoaded(true)
      }
    }

    preloadResources()
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
    trackEvent('splash_completed')
  }

  if (showSplash) {
    return <Splash onComplete={handleSplashComplete} />
  }

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandCarousel />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App