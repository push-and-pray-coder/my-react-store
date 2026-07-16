import {BrowserRouter, Routes, Route} from 'react-router'

import About from './pages/About'
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import Home from './pages/Home'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Product from './components/Product'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="*" element={<h1>404 Page Not Found</h1>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App
