import { useEffect, useRef } from 'react'

export const usePerformance = () => {
  const startTime = useRef(Date.now())

  useEffect(() => {
    const endTime = Date.now()
    const loadTime = endTime - startTime.current
    
    if (process.env.NODE_ENV === 'production') {
      // Log performance metrics in production
      console.log(`App loaded in ${loadTime}ms`)
    }
  }, [])
}

export const useLazyLoading = () => {
  useEffect(() => {
    // Lazy load images and videos
    const lazyElements = document.querySelectorAll('[data-lazy]')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target
          const src = element.dataset.src
          if (src) {
            element.src = src
            element.removeAttribute('data-lazy')
            observer.unobserve(element)
          }
        }
      })
    })

    lazyElements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}
