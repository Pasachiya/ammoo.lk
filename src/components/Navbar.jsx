import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/careers", label: "Careers" }
  ]

  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Logo */}
        <NavLink to="/" className="nav-brand">
          <span className="brand-icon">A</span>
          <span className="brand-text">AMMOO</span>
        </NavLink>

        {/* Desktop Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to} 
                end={link.end}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
                <span className="link-underline"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <NavLink to="/contact" className="nav-cta">
          <span className="cta-text">Let's Talk</span>
          <span className="cta-icon-wrapper">
            <svg className="cta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button 
          className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to} 
                end={link.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink 
              to="/contact" 
              onClick={() => setMobileOpen(false)}
              className="mobile-cta"
            >
              Let's Talk
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}