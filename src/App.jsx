import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './components/Product'
import Catalog from './pages/Catalog'
function App() {

  return (
    <div>
    <Navbar/>
    <Catalog/>
    <Footer/>
    </div>
  );
}

export default App
