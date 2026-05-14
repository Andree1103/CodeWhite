import React, { useState } from 'react'
import './Contact.css'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Nos contactaremos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente? Hablemos y hagamos realidad tus ideas
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <Mail size={24} />
              <h3>Email</h3>
              <p>contacto@codewhite.com</p>
            </div>
            <div className="info-card">
              <Phone size={24} />
              <h3>Teléfono</h3>
              <p>+51 123 456 789</p>
            </div>
            <div className="info-card">
              <MapPin size={24} />
              <h3>Ubicación</h3>
              <p>Lima, Perú</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar mensaje <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact