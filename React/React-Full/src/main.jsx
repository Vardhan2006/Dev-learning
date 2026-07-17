import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeContext from './Day - 6/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeContext>
        <App />
    </ThemeContext>
)