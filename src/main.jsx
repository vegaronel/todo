import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import "./components/App.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)