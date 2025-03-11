import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvide from './context/AuthProvide.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <AuthProvide>

  <App /> 
  </AuthProvide>
                  
    
    
  </StrictMode>,
)
