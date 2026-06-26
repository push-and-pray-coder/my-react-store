import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import './components/Footer'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Hello from react</h1>
    <h1>Hello from h1 again</h1>
    <Navbar/>
    <Navbar></Navbar>
    <Footer></Footer>
    </div>
  );
}

export default App
