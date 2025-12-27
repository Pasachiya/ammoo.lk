import './Home.css'

export default function Home() {
  const features = [
    {
      icon: "💻",
      title: "Software Engineering",
      desc: "Custom web and mobile applications, APIs, and integrations using modern JavaScript and cloud-native patterns."
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      desc: "Infrastructure as code, CI/CD pipelines, and cost-optimized cloud architecture for reliable operations."
    },
    {
      icon: "🎨",
      title: "Design & UX",
      desc: "User-centred product design, accessible interfaces and rapid prototyping to validate ideas fast."
    }
  ]

  const approach = [
    { step: "01", title: "Discovery & Prototyping", desc: "Understand your needs and validate ideas quickly" },
    { step: "02", title: "Iterative Delivery", desc: "Ship value continuously with short feedback loops" },
    { step: "03", title: "Observability & Ops", desc: "Monitor, measure, and optimize for reliability" }
  ]

  const clients = ["Startups", "Enterprises", "SaaS", "Fintech", "Healthcare", "E-commerce"]

  return (
    <main className="home-page">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>
      <div className="bg-grid"></div>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for new projects
          </div>
          <h1>
            Building Modern
            <span className="highlight-block">IT Solutions</span>
          </h1>
          <p className="lead">We design, build and operate web & cloud products that help businesses scale — from idea to production.</p>
          <div className="hero-cta">
            <a href="/services" className="btn primary">
              <span>Explore Services</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="/contact" className="btn secondary">Get in touch</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">7+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-value">30+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit-ring orbit-1"></div>
          <div className="orbit-ring orbit-2"></div>
          <div className="orbit-ring orbit-3"></div>
          <div className="center-logo">A</div>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <span className="section-badge">Services</span>
          <h2>What We Do</h2>
          <p>End-to-end capabilities to bring your product vision to life</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <article key={i} className="feature-card">
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <a href="/services" className="card-link">
                Learn more <span>→</span>
              </a>
              <div className="card-glow"></div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach">
        <div className="section-header">
          <span className="section-badge">Process</span>
          <h2>Our Approach</h2>
          <p>Product thinking with engineering rigor — measurable outcomes and strong ownership</p>
        </div>
        <div className="approach-grid">
          {approach.map((a, i) => (
            <div key={i} className="approach-card">
              <span className="step-number">{a.step}</span>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="clients">
        <div className="section-header">
          <span className="section-badge">Industries</span>
          <h2>Who We Work With</h2>
        </div>
        <div className="clients-marquee">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <span key={i} className="client-pill">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to build something <span className="highlight">amazing</span>?</h2>
            <p>Let's discuss your project and explore how we can help you succeed.</p>
          </div>
          <div className="cta-actions">
            <a href="/contact" className="btn primary">
              <span>Start a Project</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="/about" className="btn secondary">Learn About Us</a>
          </div>
        </div>
      </section>
    </main>
  )
}