import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  
import { ThemeProvider } from './ThemeContext.jsx';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import './global.css'
createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
   
   <ThemeProvider>
    <App />
  </ThemeProvider>
 
  </BrowserRouter>
)
