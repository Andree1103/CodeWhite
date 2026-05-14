import React from 'react'
import './About.css'
import { Users, Award, Clock, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre CodeWhite</h2>
            <p className="about-description">
              Somos un equipo de desarrolladores, diseñadores y estratégas digitales apasionados por crear soluciones tecnológicas que marcan la diferencia.
            </p>
            <div className="features">
              <div className="feature">
                <Users size={24} />
                <div>
                  <h4>Equipo Experto</h4>
                  <p>+10 profesionales con años de experiencia</p>
                </div>
              </div>
              <div className="feature">
                <Award size={24} />
                <div>
                  <h4>Calidad Garantizada</h4>
                  <p>Certificaciones y estándares internacionales</p>
                </div>
              </div>
              <div className="feature">
                <Clock size={24} />
                <div>
                  <h4>Entregas a Tiempo</h4>
                  <p>Metodologías ágiles y cumplimiento</p>
                </div>
              </div>
              <div className="feature">
                <Heart size={24} />
                <div>
                  <h4>Pasión por la Tecnología</h4>
                  <p>Innovación constante y mejora continua</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="code-animation">
                <code>&lt;CodeWhite /&gt;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About