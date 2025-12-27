import './Careers.css'

export default function Careers() {
  const roles = [
    {
      title: "Senior Full‑stack Engineer",
      desc: "5+ years experience with modern frameworks",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Cloud Engineer",
      desc: "Experience with AWS or Azure and CI/CD",
      tags: ["AWS", "Docker", "Terraform"]
    },
    {
      title: "Product Designer",
      desc: "Strong portfolio in SaaS or consumer apps",
      tags: ["Figma", "UI/UX", "Prototyping"]
    }
  ]

  const benefits = [
    { icon: "💰", text: "Competitive salary" },
    { icon: "🏠", text: "Flexible hours & remote-friendly" },
    { icon: "📚", text: "Learning budget & mentorship" },
    { icon: "🏖️", text: "Generous PTO policy" },
    { icon: "💪", text: "Health & wellness benefits" },
    { icon: "🚀", text: "Growth opportunities" }
  ]

  return (
    <main className="careers-page">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      
      <header className="careers-header">
        <span className="badge">We're Hiring</span>
        <h1>Careers at <span className="highlight">AMMOO</span></h1>
        <p className="lead">Join a small, high-impact engineering team building tools used by real customers.</p>
      </header>

      <section className="openings">
        <h2>Open Roles</h2>
        <div className="roles-grid">
          {roles.map((role, i) => (
            <article key={i} className="role-card">
              <div className="role-header">
                <h3>{role.title}</h3>
                <span className="arrow">→</span>
              </div>
              <p>{role.desc}</p>
              <div className="tags">
                {role.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
              <a href="mailto:jobs@ammoo.lk" className="apply-link">Apply Now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits">
        <h2>Why Join Us?</h2>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <span className="benefit-text">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="apply-cta">
        <div className="cta-card">
          <h3>Don't see a perfect match?</h3>
          <p>We're always looking for talented people. Send your CV and let's talk.</p>
          <a href="mailto:jobs@ammoo.lk" className="cta-button">
            <span>Get in Touch</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>
    </main>
  )
}