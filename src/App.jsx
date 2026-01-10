import { useIntersectionObserver } from './hooks/useIntersectionObserver'
import './App.css'

function FeatureCard() {
  const ref1 = useIntersectionObserver()
  const ref2 = useIntersectionObserver()
  const ref3 = useIntersectionObserver()
  const ref4 = useIntersectionObserver()

  return (
    <section id="services" className="section">
      <h2>What You Get</h2>
      <div className="cards">
        <div className="card" ref={ref1} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.4s ease' }}>
          <h3>⚡ Lightning Fast Hosting</h3>
          <p>Your site is served globally with optimized caching and minimal latency.</p>
        </div>
        <div className="card" ref={ref2} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.4s ease' }}>
          <h3>🔒 Security & SSL</h3>
          <p>HTTPS, best practices, and safe public access — zero misconfigurations.</p>
        </div>
        <div className="card" ref={ref3} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.4s ease' }}>
          <h3>📈 Monitoring</h3>
          <p>I watch uptime and performance so you don't get surprise outages.</p>
        </div>
        <div className="card" ref={ref4} style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.4s ease' }}>
          <h3>🛠 Maintenance</h3>
          <p>Updates, fixes, redeployments — handled without drama.</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="logo">Ashar<span>.cloud</span></div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1>Premium Website Hosting<br />For People Who Hate Downtime</h1>
          <p>I deploy your frontend with production standards.
Security and reliability are built in from day one.
Your site is treated like a real system, not a side project.</p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn primary">See Pricing</a>
            <a href="#services" className="btn secondary">What I Do</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=1200" alt="dashboard" />
        </div>
      </header>

      {/* TRUST BAR */}
      <section className="trust">
        <p>Powered by</p>
        <div className="trust-logos">
          <span>AWS</span>
          <span>GitHub</span>
          <span>Cloudflare</span>
          <span>HTTPS</span>
        </div>
      </section>

      {/* SERVICES */}
      <FeatureCard />

      {/* SHOWCASE */}
      <section className="showcase">
        <div>
          <h1>Built Like a Real Product</h1>
          <br />
          <br />
          <p>No WordPress clutter or bloated plugins.
No slow shared servers fighting for resources.
Only clean, scalable, cloud native frontend hosting.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200" alt="code" />
      </section>

      {/* PRICING */}
      <section id="pricing" className="section pricing">
        <h2>Simple Pricing</h2>
        <div className="cards">
          <div className="card price-card">
            <h3>Starter</h3>
            <p className="price">₹3,000 / mo</p>
            <ul>
              <li>Static hosting</li>
              <li>SSL setup</li>
              <li>Email support</li>
            </ul>
          </div>

          <div className="card price-card featured">
            <h3>Pro</h3>
            <p className="price">₹6,000 / mo</p>
            <ul>
              <li>Everything in Starter</li>
              <li>Monitoring</li>
              <li>Priority fixes</li>
            </ul>
          </div>

          <div className="card price-card">
            <h3>Business</h3>
            <p className="price">₹10,000 / mo</p>
            <ul>
              <li>Custom deployments</li>
              <li>Advanced monitoring</li>
              <li>Direct WhatsApp support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <h2>Let's Ship Your Website Properly</h2>
        <p>Email me and I'll take care of the rest.</p>
        <a className="btn primary big" href="mailto:peshimamasharmoahmmed@gmail.com?subject=Website%20Inquiry">
          peshimamasharmoahmmed@gmail.com
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 Ashar.cloud — Built for speed & reliability.
      </footer>
    </>
  )
}

export default App
