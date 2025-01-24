import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './general/ThemeConext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CardProvider } from './components/games/uno/CardContext.jsx'
import { PlayerProvider } from './components/games/uno/PlayerContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerProvider>
      <CardProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </CardProvider>
      </PlayerProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
