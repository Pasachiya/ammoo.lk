import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function AppContent(){
  return (
    <>
      <Navbar />
      <div id="root" className="page-wrap">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default function App(){
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Show loader briefly on first load
    const t = setTimeout(() => setShowLoader(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {showLoader ? <Loading/> : <AppContent/>}
    </BrowserRouter>
  )
}
