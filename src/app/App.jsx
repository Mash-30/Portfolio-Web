import { useState, useEffect, Suspense, lazy } from 'react'
import { usePerformance } from '../shared/hooks/usePerformance'
import { trackPageView, trackEvent } from '../shared/utils/analytics'

// Lazy load components for better performance
const Splash = lazy(() => import('../features/splash/Splash'))
const Navbar = lazy(() => import('../shared/components/Navbar'))
const Hero = lazy(() => import('../features/hero/Hero'))
const About = lazy(() => import('../features/about/About'))
const Projects = lazy(() => import('../features/projects/Projects'))
const Contact = lazy(() => import('../features/contact/Contact'))
const Footer = lazy(() => import('../shared/components/Footer'))

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#000',
    color: '#fff'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '4px solid #333',
      borderTop: '4px solid #00ff88',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
  </div>
)

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
    return (
      <Suspense fallback={<LoadingFallback />}>
        <Splash onComplete={handleSplashComplete} />
      </Suspense>
    )
  }

  return (
    <div className="app">
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App