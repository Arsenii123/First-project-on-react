import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './components/aboutme.jsx'
import Info from './components/info.jsx'
import Repo from "./components/thisproject.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <Hello></Hello>
      <Info></Info>
      <Repo />


  </StrictMode>,
)
