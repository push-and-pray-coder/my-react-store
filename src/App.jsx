import {BrowserRouter, Routes, Route} from 'react-router'

import About from './pages/About'
import Admin from './pages/Admin'
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
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar/>

        <main className="flex-grow-1 my-2">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>}/>
          </Routes>
        </main>

        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App
