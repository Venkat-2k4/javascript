import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cbc from './components/Cbc.jsx'
import Fbc from './components/Fbc.jsx'
import Demo from './components/Demo.jsx'
import Parent from './props/Parent.jsx'
import PFC from './props/PFC.jsx'
import State from './state/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc />
    <Demo />
    <Parent /> */}
    {/* <PFC/> */}
    <State />
  </StrictMode>,
)
