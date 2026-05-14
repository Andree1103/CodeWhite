import React from 'react'
import './Hero.css'
import { ArrowRight, Rocket, Code } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <Code size={16} />
          <span>Innovación Digital</span>
        </div>
        
        <h1 className="hero-title">
          Transformamos tus ideas en
          <span className="gradient-text"> soluciones digitales</span>
        </h1>
        
        <p className="hero-subtitle">
          En CodeWhite creamos experiencias digitales únicas que impulsan tu negocio 
          al siguiente nivel. Tecnología, creatividad e innovación.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToContact}>
            Comienza tu proyecto <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            Ver portafolio <Rocket size={18} />
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Proyectos</span>
          </div>
          <div className="stat">
            <span className="stat-number">30+</span>
            <span className="stat-label">Clientes</span>
          </div>
          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">Años</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero