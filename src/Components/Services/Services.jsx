import React from 'react'
import './Services.css'
import { Code, Smartphone, Cloud, Shield, Zap, Database } from 'lucide-react'

const services = [
  { icon: <Code size={40} />, title: 'Desarrollo Web', description: 'Aplicaciones web modernas, rápidas y escalables con React, Node.js y tecnologías de vanguardia' },
  { icon: <Smartphone size={40} />, title: 'Apps Móviles', description: 'Experiencias nativas multiplataforma para iOS y Android con React Native y Flutter' },
  { icon: <Cloud size={40} />, title: 'Cloud Solutions', description: 'Infraestructura escalable en AWS, Azure y Google Cloud para tu negocio' },
  { icon: <Shield size={40} />, title: 'Cybersecurity', description: 'Protección avanzada de datos, auditorías y cumplimiento normativo' },
  { icon: <Zap size={40} />, title: 'Optimización', description: 'Mejora de rendimiento, SEO y experiencia de usuario' },
  { icon: <Database size={40} />, title: 'Data Analytics', description: 'Análisis de datos, visualización y business intelligence' }
]

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="services-subtitle">
          Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services