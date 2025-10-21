import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import ErrorBoundary from './shared/components/ErrorBoundary.jsx'
import './index.css'

// Production-ready root rendering with error handling
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found. Make sure index.html contains a div with id="root"')
}

const root = ReactDOM.createRoot(rootElement)

// Production error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
