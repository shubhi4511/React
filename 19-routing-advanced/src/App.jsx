import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import { Routes,Route } from 'react-router'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-pink-900  text-white'>
      <Navbar />
        <Routes>
          <Route path= '/'element = {<Home />} />
          <Route path= '/about'element = {<About />} />
          <Route path= '/product'element = {<Product />}> 
            <Route path='men' element={<Men />}/>
            <Route path='women' element={<Women />}/>
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
