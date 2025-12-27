import './Services.css'

export default function Services() {
  const services = [
    {
      icon: "⚡",
      title: "Product Engineering",
      desc: "Full-stack development, APIs and microservices using React, Node.js, and TypeScript.",
      features: ["Web & Mobile Apps", "REST & GraphQL APIs", "Microservices"]
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      desc: "Design and run resilient systems on AWS, Azure or Google Cloud with IaC and automation.",
      features: ["Multi-cloud Strategy", "Infrastructure as Code", "Cost Optimization"]
    },
    {
      icon: "🔄",
      title: "Platform & DevOps",
      desc: "CI/CD, monitoring, SRE practices and platform engineering to reduce operational overhead.",
      features: ["CI/CD Pipelines", "Monitoring & Alerts", "SRE Practices"]
    },
    {
      icon: "📊",
      title: "Data Engineering",
      desc: "Data pipelines, ETL, analytics and ML infrastructure to unlock business insights.",
      features: ["ETL Pipelines", "Real-time Analytics", "ML Infrastructure"]
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Docker", category: "Container" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Terraform", category: "IaC" }
  ]

  return (
    <main className="services-page">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-grid"></div>

      <header className="services-header">
        <span className="badge">What We Do</span>
        <h1>Our <span className="highlight">Services</span></h1>
        <p className="lead">End-to-end services to design, build and operate software products.</p>
      </header>

      <section className="services-grid">
        <div className="grid">
          {services.map((service, i) => (
            <article key={i} className="service-card">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="feature-list">
                {service.features.map((f, j) => (
                  <li key={j}>
                    <span className="check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="card-glow"></div>
            </article>
          ))}
        </div>
      </section>

      <section className="tech-stack">
        <h2>Technologies We Use</h2>
        <div className="tech-grid">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-pill">
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <div className="cta-card">
          <div className="cta-content">
            <h3>Ready to build something great?</h3>
            <p>Let's discuss how we can help transform your ideas into reality.</p>
          </div>
          <a href="/contact" className="cta-button">
            <span>Get Free Consultation</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}