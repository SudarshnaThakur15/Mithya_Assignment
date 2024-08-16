import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './index.css'
import Footer from './components/footer.jsx'
import { Outlet } from 'react-router'

function App() {
  useState(0)

  return (
   <>
    <Navbar className="fixed top-0" />
    <Outlet/>
  
    <Footer className="fixed bottom-0" />
   </>
  )
}

export default App
