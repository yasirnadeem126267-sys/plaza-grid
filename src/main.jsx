import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactUs from './ContactUs.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
