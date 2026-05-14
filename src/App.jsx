import React, { useEffect } from 'react'  // ← Añade useEffect aquí
import './App.css'
import './Style/styleGlobal.css'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Portfolio from './Components/Portafolio/Portafolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  useEffect(() => {
    // Smooth scroll para links internos
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })

    return () => {
      links.forEach(anchor => {
        anchor.removeEventListener('click', function (e) {})
      })
    }
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
