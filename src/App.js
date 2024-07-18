import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Settings from './Components/Settings'
import Product from './Components/Product'
import Analytics from './Components/Analytics'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/products' exact element={<Product/>}/>
      <Route path='/analytics' exact element={<Analytics/>}/>
      <Route path='/settings' exact element={<Settings/>}/>
      <Route path='/about' exact element={<About/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App