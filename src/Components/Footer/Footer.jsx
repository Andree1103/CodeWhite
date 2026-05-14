import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>CODE<span className="highlight">WHITE</span></h2>
            <p>Transformamos ideas en soluciones digitales innovadoras</p>
          </div>
          
          <div className="footer-links">
            <h4>Enlaces Rápidos</h4>
            <a href="#home">Inicio</a>
            <a href="#services">Servicios</a>
            <a href="#about">Nosotros</a>
            <a href="#portfolio">Portafolio</a>
            <a href="#contact">Contacto</a>
          </div>
          
          <div className="footer-social">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer">
                {/* <Github size={20} /> */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {/* <Twitter size={20} /> */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {/* <Linkedin size={20} /> */}
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {/* <Mail size={20} /> */}
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 CodeWhite. Todos los derechos reservados.</p>
          <p className="made-with">
            {/* Hecho con <Heart size={16} color="#ff3366" /> en Perú */}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer