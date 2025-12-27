import './Footer.css'
import Logo from '../assets/logo.png' // replace path or remove if not available

const columns = [
  { title: 'Company', links: ['About Ammoo', 'Services', 'Careers', 'Contact'] },
  { title: 'Solutions', links: ['Model Training', 'AI Automation', 'Web & Mobile AI', 'Physical AI'] },
  { title: 'Resources', links: ['Blog', 'Developers', 'Docs'] },
  { title: 'Support', links: ['Contact Us', 'Help Center', 'Discord'] },
]

export default function Footer(){
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            {/* swap img with your real logo or keep text */}
            <img src={Logo} alt="Ammoo logo" className="footer-logo" />
          </div>

          <div className="footer-copy">© {new Date().getFullYear()} Ammoo.lk  All rights reserved.</div>

          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="/terms">Terms and Conditions</a>
          </div>

          <ul className="social-list" aria-label="Social links">
            <li><a href="#" aria-label="Facebook" title="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.08c-1.06 0-1.39.66-1.39 1.33V12h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z"/></svg></a></li>
            <li><a href="#" aria-label="Instagram" title="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/></svg></a></li>
            <li><a href="#" aria-label="YouTube" title="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.2-.2-7.2-.2h-.1s-4.3 0-7.2.2c-.4.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 2.3S2 8 2 9.8v4.4C2 16 2.2 17.6 2.2 17.6s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.1 7.2.2 7.2.2s4.3 0 7.2-.2c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.6.2-3.4V9.8c0-1.8-.2-3.6-.2-3.6zM9.8 15.1V8.9l5.3 3.1-5.3 3.1z"/></svg></a></li>
            <li><a href="#" aria-label="TikTok" title="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 4.5c-.2 0-.4 0-.6.1-.2.1-.4.2-.6.3v5.3c0 2.4-1.9 4.3-4.3 4.3-2.3 0-4.2-1.8-4.3-4.1-.1-2.4 1.8-4.4 4.2-4.5V6.1c-3.2.1-5.8 2.8-5.7 6 0 3.4 2.7 6.1 6.1 6.1 3.5 0 6.2-2.8 6.2-6.2V7.7c.9.3 1.8.6 2.6 1.1V6.2c-1-.6-2.1-1-3.4-1.3-.3-.1-.6-.1-.8-.1z"/></svg></a></li>
            <li><a href="#" aria-label="LinkedIn" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 007.5 6a2.5 2.5 0 01-2.52 2.5A2.5 2.5 0 014.98 3.5zM3 8.98h3.98V21H3V8.98zM9.5 9h3.8v1.6h.1c.5-.8 1.7-1.6 3.5-1.6 3.7 0 4.4 2.4 4.4 5.5V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V21h-4V9z"/></svg></a></li>

          </ul>

          <div className="footer-region">• Sri Lanka</div>
        </div>

        <div className="footer-divider" aria-hidden="true"></div>

        {columns.map((col) => (
          <nav key={col.title} className="footer-col" aria-label={col.title}>
            <h4 className="col-title">{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  )
}
