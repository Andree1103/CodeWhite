import React, { useState } from 'react'
import './Portafolio.css'
import * as LucideIcons from 'lucide-react'

// Debug: Ver qué iconos están disponibles
console.log('Iconos disponibles:', Object.keys(LucideIcons).filter(key => key.toLowerCase().includes('git')))

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web',
    description: 'Plataforma de comercio electrónico con React y Node.js',
    image: 'https://i.ytimg.com/vi/LzFIJY8K1Kg/maxresdefault.jpg'
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile',
    description: 'Aplicación bancaria segura con React Native',
    image: 'https://b.stripecdn.com/docs-statics-srv/assets/ios-overview.9e0d68d009dc005f73a6f5df69e00458.png'
  },
  {
    title: 'Cloud Dashboard',
    category: 'Cloud',
    description: 'Panel de control para infraestructura cloud',
    image: 'https://www.swhosting.com/img/pages/panel/img_swpanel.png'
  },
  {
    title: 'Security System',
    category: 'Security',
    description: 'Sistema de monitoreo y alertas de seguridad',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwT_CYP8HaxjniS7Y4_3ZBMM6imV_EnHVRrUarvQatqRN6_ybxo8lOuZFu-LGcVz7z6t30JcXJWOLz-3Psfc6RIahSkp0gciovTWGmhMOkaL8zFipsddlANXzmEaUaPF43WAFUstlkhyphenhyphenU/s1600/19780396_1693171874326070_531013616306318112_o.jpg'
  }
]

const Portafolio = () => {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Web', 'Mobile', 'Cloud', 'Security']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Nuestro Portafolio</h2>
        <p className="portfolio-subtitle">
          Proyectos que demuestran nuestra excelencia y compromiso
        </p>
        
        <div className="portfolio-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <button className="overlay-btn">
                    {/* <ExternalLink size={20} /> */}
                  </button>
                  <button className="overlay-btn">
                    {/* <Github size={20} /> */}
                  </button>
                </div>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portafolio