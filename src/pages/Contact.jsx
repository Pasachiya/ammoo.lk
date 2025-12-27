import './Contact.css'

export default function Contact() {
  const contactMethods = [
    {
      icon: "✉️",
      title: "Email Us",
      value: "contact@ammoo.lk",
      link: "mailto:contact@ammoo.lk",
      desc: "For general inquiries and project discussions"
    },
    {
      icon: "💼",
      title: "Careers",
      value: "jobs@ammoo.lk",
      link: "mailto:jobs@ammoo.lk",
      desc: "Join our growing team of engineers"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: null,
      desc: "Working globally, rooted locally"
    }
  ]

  const socials = [
    { name: "LinkedIn", icon: "in", link: "#" },
    { name: "Twitter", icon: "𝕏", link: "#" },
    { name: "GitHub", icon: "⌘", link: "#" }
  ]

  return (
    <main className="contact-page">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-pattern"></div>

      <header className="contact-header">
        <span className="badge">Get in Touch</span>
        <h1>Let's Build <span className="highlight">Together</span></h1>
        <p className="lead">Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </header>

      <div className="contact-layout">
        <section className="contact-form-section">
          <div className="form-card">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Project Inquiry" />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select id="budget">
                  <option value="">Select a range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </section>

        <aside className="contact-info">
          <div className="info-cards">
            {contactMethods.map((method, i) => (
              <div key={i} className="info-card">
                <div className="info-icon">{method.icon}</div>
                <div className="info-content">
                  <h3>{method.title}</h3>
                  {method.link ? (
                    <a href={method.link} className="info-value">{method.value}</a>
                  ) : (
                    <span className="info-value">{method.value}</span>
                  )}
                  <p>{method.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="social-card">
            <h3>Follow Us</h3>
            <div className="social-links">
              {socials.map((s, i) => (
                <a key={i} href={s.link} className="social-link" title={s.name}>
                  <span>{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="availability-card">
            <div className="availability-indicator">
              <span className="pulse-ring"></span>
              <span className="pulse-dot"></span>
            </div>
            <div className="availability-text">
              <h4>Currently Available</h4>
              <p>Taking on new projects for Q1 2025</p>
            </div>
          </div>
        </aside>
      </div>

      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-content">
            <span className="map-pin">📍</span>
            <h3>Colombo, Sri Lanka</h3>
            <p>Working with clients worldwide</p>
          </div>
          <div className="map-grid"></div>
        </div>
      </section>
    </main>
  )
}