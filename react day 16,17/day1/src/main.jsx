import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Cbc from './components/Cbc.jsx'
// import Fbc from './components/Fbc.jsx'
// import Demo from './components/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import PFC from './props/PFC.jsx'
// import State from './state/State.jsx'
// import Inline from './styles/Inline.jsx'
// import Comp1 from './styles/Comp1.jsx'
// import Comp2 from './styles/Comp2.jsx'
// import External from './styles/External.jsx'
// import Ref from './useRef/Ref.jsx'
// import List from './list-keys/List.jsx'
import Comp3 from './list-keys/Comp3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc />
    <Demo />
    <Parent /> */}
    {/* <PFC/> */}
    {/* <State /> */}
    {/* <Inline /> */}
    {/* <Comp1/>
    <Comp2 /> */}
    {/* <External/> */}
    {/* <Ref/> */}
    {/* <List /> */}
    <Comp3 />
  </StrictMode>,
)
