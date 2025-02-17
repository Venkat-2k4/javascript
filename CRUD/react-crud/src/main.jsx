import React from 'react'
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import { StrictMode }  from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Create from './components/Create.jsx'
import Edit from './/components/Edit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />}/>



    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
