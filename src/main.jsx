import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ActiveProvider } from './context/ActiveContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ActiveProvider>
      <App />
    </ActiveProvider>
  </StrictMode>,
)
