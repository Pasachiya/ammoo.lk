import './About.css'

export default function About() {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      desc: "Founded by a small team of engineers and designers with a vision to build better software."
    },
    {
      year: "2020",
      title: "Expansion",
      desc: "Expanded into cloud-native services and product design, growing our capabilities."
    },
    {
      year: "2023",
      title: "Regional Growth",
      desc: "Serving enterprise and startup clients across the region with end-to-end solutions."
    },
    {
      year: "2025",
      title: "The Future",
      desc: "Continuing to innovate and push boundaries in software engineering."
    }
  ]

  const team = [
    {
      name: "Nimal",
      role: "CEO",
      focus: "Product & Strategy",
      initial: "N"
    },
    {
      name: "Priya",
      role: "CTO",
      focus: "Engineering & Architecture",
      initial: "P"
    },
    {
      name: "Kavi",
      role: "Head of Design",
      focus: "Design Systems & UX",
      initial: "K"
    }
  ]

  const values = [
    { icon: "🎯", title: "Quality First", desc: "We never compromise on code quality" },
    { icon: "🤝", title: "Partnership", desc: "Your success is our success" },
    { icon: "🚀", title: "Innovation", desc: "Always exploring better solutions" },
    { icon: "💡", title: "Transparency", desc: "Open communication at every step" }
  ]

  return (
    <main className="about-page">
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      <div className="bg-glow bg-glow-3"></div>

      <header className="about-header">
        <span className="badge">Who We Are</span>
        <h1>About <span className="highlight">AMMOO</span></h1>
        <p className="lead">We build reliable software and guide teams to deliver real business value.</p>
      </header>

      <section className="story">
        <div className="story-card">
          <div className="story-icon">🎯</div>
          <div className="story-content">
            <h2>Our Mission</h2>
            <p>To empower businesses with thoughtfully engineered software — balancing speed, quality and long-term maintainability. We believe great software is built through collaboration, expertise, and an unwavering commitment to excellence.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-track">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <span className="year-badge">{item.year}</span>
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="team">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="avatar">
                <span>{member.initial}</span>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.focus}</p>
              </div>
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">7+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">50+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">30+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">Team Members</span>
          </div>
        </div>
      </section>
    </main>
  )
}